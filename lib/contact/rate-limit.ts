/**
 * 問い合わせのレート制限。
 * 本番は Upstash Redis の REST でインスタンス間の回数を共有する。
 * ローカルで URL が無いときだけ、プロセス内の Map に戻す。
 */

const WINDOW_SEC = 600
const MAX_PER_WINDOW = 5

export type RateLimitResult =
  | { ok: true }
  | { ok: false; retryAfterSec: number }
  | { ok: false; unavailable: true }

type Bucket = { count: number; resetAt: number }

export function rateLimitStorageKey(clientKey: string): string {
  const safe = clientKey.replace(/[^a-zA-Z0-9:._-]/g, '').slice(0, 128)
  return `contact:rl:${safe || 'unknown'}`
}

export function createMemoryRateLimiter(
  now: () => number = Date.now,
  windowMs = WINDOW_SEC * 1000,
  max = MAX_PER_WINDOW,
): (clientKey: string) => Promise<RateLimitResult> {
  const buckets = new Map<string, Bucket>()

  return async (clientKey: string) => {
    const current = now()
    const existing = buckets.get(clientKey)

    if (!existing || current >= existing.resetAt) {
      buckets.set(clientKey, { count: 1, resetAt: current + windowMs })
      return { ok: true }
    }

    if (existing.count >= max) {
      return {
        ok: false,
        retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - current) / 1000)),
      }
    }

    existing.count += 1
    return { ok: true }
  }
}

export function rateLimitBackend(
  env: Record<string, string | undefined> = process.env,
): 'upstash' | 'memory' | 'unconfigured' {
  const hasStore = Boolean(
    env.UPSTASH_REDIS_REST_URL?.trim() && env.UPSTASH_REDIS_REST_TOKEN?.trim(),
  )
  if (hasStore) return 'upstash'
  if (!env.VERCEL_ENV) return 'memory'
  return 'unconfigured'
}

export function readUpstashPipeline(
  payload: unknown,
): { count: number; ttlSec: number } | null {
  if (!Array.isArray(payload) || payload.length < 3) return null
  const count = readResult(payload[0])
  const ttlSec = readResult(payload[2])
  if (count === null || ttlSec === null) return null
  return { count, ttlSec }
}

function readResult(entry: unknown): number | null {
  if (!entry || typeof entry !== 'object' || !('result' in entry)) return null
  const result = (entry as { result?: unknown }).result
  return typeof result === 'number' && Number.isFinite(result) ? result : null
}

async function postPipeline(
  fetchImpl: typeof fetch,
  config: { url: string; token: string },
  commands: string[][],
): Promise<unknown | null> {
  const endpoint = `${config.url.replace(/\/$/, '')}/pipeline`
  const response = await fetchImpl(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
    signal: AbortSignal.timeout(5000),
  })
  if (!response.ok) return null
  return response.json().catch(() => null)
}

export async function limitWithUpstash(
  clientKey: string,
  fetchImpl: typeof fetch,
  config: { url: string; token: string },
): Promise<RateLimitResult> {
  const key = rateLimitStorageKey(clientKey)
  let payload: unknown | null
  try {
    payload = await postPipeline(fetchImpl, config, [
      ['INCR', key],
      ['EXPIRE', key, String(WINDOW_SEC), 'NX'],
      ['TTL', key],
    ])
  } catch (err) {
    console.error('[contact] rate limit store error', err)
    return { ok: false, unavailable: true }
  }

  const parsed = readUpstashPipeline(payload)
  if (!parsed) return { ok: false, unavailable: true }

  if (parsed.ttlSec < 0) {
    try {
      await postPipeline(fetchImpl, config, [['EXPIRE', key, String(WINDOW_SEC)]])
    } catch (err) {
      console.error('[contact] rate limit expiry repair failed', err)
      return { ok: false, unavailable: true }
    }
  }

  if (parsed.count > MAX_PER_WINDOW) {
    return {
      ok: false,
      retryAfterSec: parsed.ttlSec > 0 ? parsed.ttlSec : WINDOW_SEC,
    }
  }

  return { ok: true }
}

const localMemoryLimiter = createMemoryRateLimiter()

export async function limitContactRequest(
  clientKey: string,
): Promise<RateLimitResult> {
  const backend = rateLimitBackend()
  if (backend === 'unconfigured') {
    console.error('[contact] rate limit store is not configured')
    return { ok: false, unavailable: true }
  }
  if (backend === 'memory') return localMemoryLimiter(clientKey)

  const url = process.env.UPSTASH_REDIS_REST_URL?.trim()
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim()
  if (!url || !token) return { ok: false, unavailable: true }
  return limitWithUpstash(clientKey, fetch, { url, token })
}
