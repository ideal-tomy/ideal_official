/**
 * Cloudflare Turnstile の Siteverify。
 * トークンなし、失敗、期限切れ、再利用、本番ホスト名の不一致は拒否する。
 */

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

const DEFAULT_ALLOWED_HOSTS = ['ideal-dao.com', 'www.ideal-dao.com']

const CONFIRM_FAILED =
  '確認が完了していません。ページを再読み込みして再度お試しください。'
const CONFIRM_EXPIRED =
  '確認の有効期限が切れています。ページを再読み込みして再度お試しください。'
const CONFIRM_UNAVAILABLE =
  '確認に失敗しました。しばらくしてから再度お試しください。'
const NOT_CONFIGURED =
  'お問い合わせ受付の設定が完了していません。しばらくしてから再度お試しいただくか、別の手段でご連絡ください。'

export type TurnstileDecision =
  | { ok: true }
  | { ok: false; status: 400 | 403 | 503; error: string; code: string }

export type TurnstileHostnameOptions = {
  allowedHosts: string[]
  allowLoopback: boolean
  allowPreviewHosts: boolean
}

type SiteverifyPayload = {
  success?: boolean
  hostname?: string
  'error-codes'?: string[]
}

export function turnstileHostnameOptionsFromEnv(
  env: Record<string, string | undefined> = process.env,
): TurnstileHostnameOptions {
  const configured = env.TURNSTILE_ALLOWED_HOSTS?.split(',')
    .map((host) => host.trim())
    .filter(Boolean)

  return {
    allowedHosts:
      configured && configured.length > 0 ? configured : DEFAULT_ALLOWED_HOSTS,
    allowLoopback: env.VERCEL_ENV !== 'production',
    allowPreviewHosts: env.VERCEL_ENV === 'preview',
  }
}

export function isAllowedTurnstileHostname(
  hostname: string,
  options: TurnstileHostnameOptions,
): boolean {
  const normalized = hostname.trim().toLowerCase()
  if (!normalized) return false
  if (
    options.allowedHosts.some((host) => host.trim().toLowerCase() === normalized)
  ) {
    return true
  }
  if (
    options.allowPreviewHosts &&
    normalized.endsWith('.vercel.app')
  ) {
    return true
  }
  if (!options.allowLoopback) return false
  return (
    normalized === 'localhost' ||
    normalized === '127.0.0.1' ||
    normalized === '::1'
  )
}

export function interpretSiteverify(
  payload: unknown,
  isHostnameAllowed: (hostname: string) => boolean,
): TurnstileDecision {
  if (!payload || typeof payload !== 'object') {
    return { ok: false, status: 503, error: CONFIRM_UNAVAILABLE, code: 'verify_failed' }
  }

  const body = payload as SiteverifyPayload
  const errors = Array.isArray(body['error-codes'])
    ? body['error-codes'].filter((code): code is string => typeof code === 'string')
    : []

  if (body.success !== true) {
    if (errors.includes('internal-error')) {
      return { ok: false, status: 503, error: CONFIRM_UNAVAILABLE, code: 'verify_failed' }
    }
    if (errors.includes('timeout-or-duplicate')) {
      return {
        ok: false,
        status: 400,
        error: CONFIRM_EXPIRED,
        code: 'timeout_or_duplicate',
      }
    }
    return { ok: false, status: 400, error: CONFIRM_FAILED, code: 'invalid_token' }
  }

  const hostname = typeof body.hostname === 'string' ? body.hostname : ''
  if (!hostname || !isHostnameAllowed(hostname)) {
    return {
      ok: false,
      status: 403,
      error: CONFIRM_FAILED,
      code: 'hostname_mismatch',
    }
  }

  return { ok: true }
}

export async function verifyTurnstileToken(
  token: string | undefined,
  options?: {
    secret?: string
    fetchImpl?: typeof fetch
    hostname?: TurnstileHostnameOptions
  },
): Promise<TurnstileDecision> {
  const secret = (options?.secret ?? process.env.TURNSTILE_SECRET_KEY)?.trim()
  if (!secret) {
    return { ok: false, status: 503, error: NOT_CONFIGURED, code: 'not_configured' }
  }
  if (!token?.trim()) {
    return { ok: false, status: 400, error: CONFIRM_FAILED, code: 'missing_token' }
  }

  const fetchImpl = options?.fetchImpl ?? fetch
  const hostname =
    options?.hostname ?? turnstileHostnameOptionsFromEnv()

  let response: Response
  try {
    response = await fetchImpl(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token.trim(),
      }),
      signal: AbortSignal.timeout(8000),
    })
  } catch (err) {
    console.error('[contact] turnstile request failed', err)
    return { ok: false, status: 503, error: CONFIRM_UNAVAILABLE, code: 'verify_failed' }
  }

  if (!response.ok) {
    console.error('[contact] turnstile status', response.status)
    return { ok: false, status: 503, error: CONFIRM_UNAVAILABLE, code: 'verify_failed' }
  }

  const payload: unknown = await response.json().catch(() => null)
  return interpretSiteverify(payload, (host) =>
    isAllowedTurnstileHostname(host, hostname),
  )
}
