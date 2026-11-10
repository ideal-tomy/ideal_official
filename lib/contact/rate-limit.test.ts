import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  createMemoryRateLimiter,
  limitWithUpstash,
  rateLimitBackend,
  rateLimitStorageKey,
  readUpstashPipeline,
} from './rate-limit.ts'

describe('問い合わせのレート制限', () => {
  it('10分あたり5回を超えさせない', async () => {
    let now = 1_000_000
    const limit = createMemoryRateLimiter(() => now)
    for (let count = 0; count < 5; count += 1) {
      assert.deepEqual(await limit('203.0.113.5'), { ok: true })
    }
    const blocked = await limit('203.0.113.5')
    assert.equal(blocked.ok, false)
    if (!blocked.ok && 'retryAfterSec' in blocked) {
      assert.equal(blocked.retryAfterSec, 600)
    }
    assert.deepEqual(await limit('203.0.113.6'), { ok: true })

    now += 600_000
    assert.deepEqual(await limit('203.0.113.5'), { ok: true })
  })

  it('本番で共有ストレージが無いときは未設定にする', () => {
    assert.equal(rateLimitBackend({}), 'memory')
    assert.equal(rateLimitBackend({ VERCEL_ENV: 'production' }), 'unconfigured')
    assert.equal(rateLimitBackend({ VERCEL_ENV: 'preview' }), 'unconfigured')
    assert.equal(
      rateLimitBackend({
        VERCEL_ENV: 'production',
        UPSTASH_REDIS_REST_URL: 'https://example.upstash.io',
        UPSTASH_REDIS_REST_TOKEN: 'token',
      }),
      'upstash',
    )
  })

  it('Upstash の応答から回数と残り時間を読む', () => {
    assert.deepEqual(
      readUpstashPipeline([{ result: 2 }, { result: 1 }, { result: 480 }]),
      { count: 2, ttlSec: 480 },
    )
    assert.equal(readUpstashPipeline({ error: 'NOAUTH' }), null)
  })

  it('共有ストレージでも6回目を拒否し、保存できないときは停止する', async () => {
    const key = rateLimitStorageKey('203.0.113.5')
    assert.equal(key, 'contact:rl:203.0.113.5')

    const allowed = await limitWithUpstash(
      '203.0.113.5',
      async () => Response.json([{ result: 5 }, { result: 1 }, { result: 500 }]),
      { url: 'https://example.upstash.io', token: 'token' },
    )
    assert.deepEqual(allowed, { ok: true })

    const blocked = await limitWithUpstash(
      '203.0.113.5',
      async () => Response.json([{ result: 6 }, { result: 0 }, { result: 120 }]),
      { url: 'https://example.upstash.io', token: 'token' },
    )
    assert.deepEqual(blocked, { ok: false, retryAfterSec: 120 })

    const unavailable = await limitWithUpstash(
      '203.0.113.5',
      async () => new Response('down', { status: 503 }),
      { url: 'https://example.upstash.io', token: 'token' },
    )
    assert.deepEqual(unavailable, { ok: false, unavailable: true })
  })
})
