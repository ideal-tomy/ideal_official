import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  contactClientKey,
  handleContactRequest,
  type ContactHandlerDeps,
  type ContactWebhookPayload,
} from './handle-contact.ts'

const validJapanese = {
  name: '山田 太郎',
  email: 'taro@example.com',
  company: '株式会社ideal',
  message: 'ランディングページの制作について相談したいです。',
  intent: 'gallery',
  service: null,
  caseSlug: 'care-records',
  turnstileToken: 'valid-token',
}

function request(body: unknown, headers?: Record<string, string>): Request {
  return new Request('https://ideal-dao.com/api/contact', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

function deps(
  overrides: Partial<ContactHandlerDeps> = {},
): ContactHandlerDeps & { delivered: ContactWebhookPayload[] } {
  const delivered: ContactWebhookPayload[] = []
  return {
    delivered,
    limit: async () => ({ ok: true }),
    deliveryConfigured: () => true,
    verify: async () => ({ ok: true }),
    deliver: async (payload) => {
      delivered.push(payload)
      return true
    },
    ...overrides,
  }
}

describe('handleContactRequest', () => {
  it('通常の日本語と英文の問い合わせを Webhook へ渡す', async () => {
    const japanese = deps()
    const japaneseResult = await handleContactRequest(request(validJapanese), japanese)
    assert.equal(japaneseResult.status, 200)
    assert.equal(japanese.delivered.length, 1)
    assert.equal(japanese.delivered[0]?.source, 'ideal-official-contact')
    assert.equal(japanese.delivered[0]?.name, '山田 太郎')
    assert.equal(japanese.delivered[0]?.company, '株式会社ideal')
    assert.equal('turnstileToken' in japanese.delivered[0]!, false)
    assert.equal('website' in japanese.delivered[0]!, false)

    const english = deps()
    const englishResult = await handleContactRequest(
      request({
        name: 'John Smith',
        email: 'john.smith@example.com',
        company: 'Acme LLC',
        message: 'I would like to discuss a new marketing website for our team.',
        turnstileToken: 'valid-token',
      }),
      english,
    )
    assert.equal(englishResult.status, 200)
    assert.equal(english.delivered[0]?.email, 'john.smith@example.com')
    assert.equal(english.delivered[0]?.company, 'Acme LLC')
  })

  it('氏名・メール・会社名の改行は転送しない', async () => {
    const samples = [
      { ...validJapanese, name: '山田\n太郎' },
      { ...validJapanese, email: 'taro@example.com\nBcc: other@example.com' },
      { ...validJapanese, company: '株式会社\r\nideal' },
    ]
    for (const sample of samples) {
      const harness = deps()
      const result = await handleContactRequest(request(sample), harness)
      assert.equal(result.status, 400)
      assert.equal(harness.delivered.length, 0)
    }
  })

  it('Turnstile を通過しない送信は Webhook へ渡さない', async () => {
    const codes = ['missing_token', 'invalid_token', 'timeout_or_duplicate', 'hostname_mismatch']
    for (const code of codes) {
      const harness = deps({
        verify: async () => ({
          ok: false,
          status: code === 'hostname_mismatch' ? 403 : 400,
          error: '確認が完了していません。',
          code,
        }),
      })
      const result = await handleContactRequest(request(validJapanese), harness)
      assert.equal(result.status, code === 'hostname_mismatch' ? 403 : 400)
      assert.equal(harness.delivered.length, 0)
    }
  })

  it('ハニーポットに入力があるときは成功に見せて転送しない', async () => {
    let verified = false
    const harness = deps({
      verify: async () => {
        verified = true
        return { ok: true }
      },
    })
    const result = await handleContactRequest(
      request({ ...validJapanese, website: 'https://spam.example' }),
      harness,
    )
    assert.deepEqual(result, { status: 200, body: { ok: true } })
    assert.equal(verified, false)
    assert.equal(harness.delivered.length, 0)
  })

  it('ランダムな英数字は Webhook へ渡さない', async () => {
    const samples = [
      {
        name: 'idlACOtrKiVichxGsAEmol',
        email: 'dawati.dulaku22@gmail.com',
        company: 'Xuymmis LLC',
        message: 'pockimJFpXpXMZztiCWxZq',
      },
      {
        name: 'RzyqmbYKRiezfbLQGgvXUkN',
        email: 'sel.e.v.i.pax66.3@gmail.com',
        company: 'Nykmgeqobv LLC',
        message: 'QqelwbgsUaulJGmHtDwAF',
      },
      {
        name: 'jlmWJwzvCwjoYrSQuLAv',
        email: 'a.k.eya.w.i.4.27@gmail.com',
        company: 'Lwnfqnygh LLC',
        message: 'bjQMcgAykCrWKCFMlfh',
      },
    ]
    for (const sample of samples) {
      const harness = deps()
      const result = await handleContactRequest(
        request({ ...sample, turnstileToken: 'valid-token' }),
        harness,
      )
      assert.equal(result.status, 400)
      assert.equal(harness.delivered.length, 0)
    }
  })

  it('短時間の超過は 429 になり、保存先が無い本番相当は転送しない', async () => {
    const limited = deps({
      limit: async () => ({ ok: false, retryAfterSec: 90 }),
    })
    const limitedResult = await handleContactRequest(request(validJapanese), limited)
    assert.equal(limitedResult.status, 429)
    assert.equal(limitedResult.headers?.['Retry-After'], '90')
    assert.equal(limited.delivered.length, 0)

    const unavailable = deps({
      limit: async () => ({ ok: false, unavailable: true }),
    })
    const unavailableResult = await handleContactRequest(request('not-json'), unavailable)
    assert.equal(unavailableResult.status, 503)
    assert.equal(unavailable.delivered.length, 0)
  })

  it('受付設定が無い、または Webhook が失敗したときは成功にしない', async () => {
    const unconfigured = deps({ deliveryConfigured: () => false })
    const unconfiguredResult = await handleContactRequest(request(validJapanese), unconfigured)
    assert.equal(unconfiguredResult.status, 503)
    assert.equal(unconfigured.delivered.length, 0)

    const failed = deps({ deliver: async () => false })
    const failedResult = await handleContactRequest(request(validJapanese), failed)
    assert.equal(failedResult.status, 502)

    const thrown = deps({
      deliver: async () => {
        throw new Error('network')
      },
    })
    const thrownResult = await handleContactRequest(request(validJapanese), thrown)
    assert.equal(thrownResult.status, 502)
  })

  it('クライアントIPは転送元ヘッダーの先頭を使う', () => {
    const req = request(validJapanese, {
      'x-forwarded-for': '203.0.113.8, 10.0.0.1',
    })
    assert.equal(contactClientKey(req), '203.0.113.8')
  })
})
