/**
 * 案内用レート制限（分類呼び出し向け・やや厳しめ）
 */

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 6

export function checkGuideRateLimit(key: string): {
  ok: boolean
  retryAfterSec?: number
} {
  const now = Date.now()
  const existing = buckets.get(key)

  if (!existing || now >= existing.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return { ok: true }
  }

  if (existing.count >= MAX_PER_WINDOW) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    }
  }

  existing.count += 1
  return { ok: true }
}
