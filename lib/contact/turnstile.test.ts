import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  interpretSiteverify,
  isAllowedTurnstileHostname,
  turnstileHostnameOptionsFromEnv,
  verifyTurnstileToken,
} from './turnstile.ts'

const productionHosts = {
  allowedHosts: ['ideal-dao.com', 'www.ideal-dao.com'],
  allowLoopback: false,
  allowPreviewHosts: false,
}

describe('Turnstile のホスト名', () => {
  it('本番ホスト名だけを許可する', () => {
    assert.equal(isAllowedTurnstileHostname('ideal-dao.com', productionHosts), true)
    assert.equal(isAllowedTurnstileHostname('WWW.IDEAL-DAO.COM', productionHosts), true)
    assert.equal(isAllowedTurnstileHostname('evil.example', productionHosts), false)
    assert.equal(isAllowedTurnstileHostname('localhost', productionHosts), false)
  })

  it('本番以外では localhost を許可する', () => {
    const options = turnstileHostnameOptionsFromEnv({})
    assert.equal(options.allowLoopback, true)
    assert.equal(isAllowedTurnstileHostname('localhost', options), true)
    assert.equal(isAllowedTurnstileHostname('127.0.0.1', options), true)
  })

  it('本番では localhost を許可しない', () => {
    const options = turnstileHostnameOptionsFromEnv({ VERCEL_ENV: 'production' })
    assert.equal(options.allowLoopback, false)
    assert.equal(options.allowPreviewHosts, false)
    assert.equal(isAllowedTurnstileHostname('preview.vercel.app', options), false)
    assert.deepEqual(options.allowedHosts, ['ideal-dao.com', 'www.ideal-dao.com'])
  })

  it('プレビューでは vercel.app を許可する', () => {
    const options = turnstileHostnameOptionsFromEnv({ VERCEL_ENV: 'preview' })
    assert.equal(options.allowPreviewHosts, true)
    assert.equal(isAllowedTurnstileHostname('ideal-official-abc.vercel.app', options), true)
    assert.equal(isAllowedTurnstileHostname('evil.example', options), false)
  })

  it('許可ホストは環境変数で上書きできる', () => {
    const options = turnstileHostnameOptionsFromEnv({
      VERCEL_ENV: 'production',
      TURNSTILE_ALLOWED_HOSTS: 'ideal-dao.com, preview.example',
    })
    assert.deepEqual(options.allowedHosts, ['ideal-dao.com', 'preview.example'])
  })
})

describe('Siteverify の判定', () => {
  const allowIdeal = (hostname: string) => hostname === 'ideal-dao.com'

  it('成功かつホスト名一致だけを通す', () => {
    assert.deepEqual(
      interpretSiteverify({ success: true, hostname: 'ideal-dao.com' }, allowIdeal),
      { ok: true },
    )
  })

  it('トークン不正、期限切れ、再利用を拒否する', () => {
    const invalid = interpretSiteverify(
      { success: false, 'error-codes': ['invalid-input-response'] },
      allowIdeal,
    )
    assert.equal(invalid.ok, false)
    if (!invalid.ok) assert.equal(invalid.code, 'invalid_token')

    const reused = interpretSiteverify(
      { success: false, 'error-codes': ['timeout-or-duplicate'] },
      allowIdeal,
    )
    assert.equal(reused.ok, false)
    if (!reused.ok) {
      assert.equal(reused.status, 400)
      assert.equal(reused.code, 'timeout_or_duplicate')
    }
  })

  it('ホスト名が違う成功応答を拒否する', () => {
    const mismatch = interpretSiteverify(
      { success: true, hostname: 'evil.example' },
      allowIdeal,
    )
    assert.equal(mismatch.ok, false)
    if (!mismatch.ok) assert.equal(mismatch.code, 'hostname_mismatch')
  })
})

describe('verifyTurnstileToken', () => {
  it('秘密鍵が無いときは検証せず拒否する', async () => {
    let called = false
    const decision = await verifyTurnstileToken('token', {
      secret: '   ',
      fetchImpl: async () => {
        called = true
        return new Response('{}')
      },
    })
    assert.equal(called, false)
    assert.equal(decision.ok, false)
    if (!decision.ok) assert.equal(decision.code, 'not_configured')
  })

  it('トークンなしは Siteverify を呼ばない', async () => {
    let called = false
    const decision = await verifyTurnstileToken('  ', {
      secret: 'secret',
      fetchImpl: async () => {
        called = true
        return new Response('{}')
      },
    })
    assert.equal(called, false)
    if (!decision.ok) assert.equal(decision.code, 'missing_token')
  })

  it('Siteverify の失敗応答では成功にしない', async () => {
    const decision = await verifyTurnstileToken('token', {
      secret: 'secret',
      hostname: productionHosts,
      fetchImpl: async () =>
        Response.json({ success: false, 'error-codes': ['timeout-or-duplicate'] }),
    })
    assert.equal(decision.ok, false)
    if (!decision.ok) assert.equal(decision.code, 'timeout_or_duplicate')
  })

  it('本番ホスト名が一致したときだけ成功にする', async () => {
    const decision = await verifyTurnstileToken('token', {
      secret: 'secret',
      hostname: productionHosts,
      fetchImpl: async () =>
        Response.json({ success: true, hostname: 'ideal-dao.com' }),
    })
    assert.deepEqual(decision, { ok: true })
  })
})
