/**
 * 問い合わせ送信の判定。
 * レート制限、受付設定、入力、ハニーポット、Turnstile、不自然な文字列の順に見て、
 * 通過したものだけ Webhook へ渡す。
 */

import { z } from 'zod'
import type { RateLimitResult } from './rate-limit'
import { looksLikeAutomatedContact } from './spam-signals.ts'
import type { TurnstileDecision } from './turnstile'

const NOT_CONFIGURED =
  'お問い合わせ受付の設定が完了していません。しばらくしてから再度お試しいただくか、別の手段でご連絡ください。'
const INVALID_INPUT = '入力内容を確認してください。'
const INVALID_BODY = 'リクエスト形式が正しくありません。'
const DELIVERY_FAILED = '送信に失敗しました。しばらくしてから再度お試しください。'
const RATE_LIMITED = 'リクエストが集中しています。しばらくしてから再度お試しください。'

const singleLine = (value: string) => !/[\r\n]/.test(value)

const contactBodySchema = z.object({
  name: z.string().min(2).max(100).refine(singleLine),
  email: z.string().email().max(200).refine(singleLine),
  company: z.string().max(200).refine(singleLine).optional(),
  message: z.string().min(10).max(5000),
  intent: z.string().max(80).optional().nullable(),
  service: z.string().max(80).optional().nullable(),
  caseSlug: z.string().max(120).optional().nullable(),
  website: z.string().max(2000).optional().nullable(),
  turnstileToken: z.string().max(4096).optional().nullable(),
})

export type ContactWebhookPayload = {
  source: 'ideal-official-contact'
  submittedAt: string
  name: string
  email: string
  message: string
  company?: string
  intent?: string | null
  service?: string | null
  caseSlug?: string | null
}

export type ContactHandleResult = {
  status: number
  body: { ok: true } | { ok: false; error: string; code?: string }
  headers?: Record<string, string>
}

export type ContactHandlerDeps = {
  limit: (clientKey: string) => Promise<RateLimitResult>
  deliveryConfigured: () => boolean
  verify: (token: string | undefined) => Promise<TurnstileDecision>
  deliver: (payload: ContactWebhookPayload) => Promise<boolean>
}

export function contactClientKey(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  return req.headers.get('x-real-ip')?.trim() || 'unknown'
}

function notConfigured(code: string): ContactHandleResult {
  return {
    status: 503,
    body: { ok: false, error: NOT_CONFIGURED, code },
  }
}

export function buildContactWebhookPayload(
  data: z.infer<typeof contactBodySchema>,
  submittedAt: string,
): ContactWebhookPayload {
  const payload: ContactWebhookPayload = {
    source: 'ideal-official-contact',
    submittedAt,
    name: data.name,
    email: data.email,
    message: data.message,
  }
  if (data.company) payload.company = data.company
  if (data.intent !== undefined) payload.intent = data.intent
  if (data.service !== undefined) payload.service = data.service
  if (data.caseSlug !== undefined) payload.caseSlug = data.caseSlug
  return payload
}

export async function handleContactRequest(
  req: Request,
  deps: ContactHandlerDeps,
): Promise<ContactHandleResult> {
  const limit = await deps.limit(contactClientKey(req))
  if (!limit.ok && 'unavailable' in limit) {
    return notConfigured('rate_limit_unavailable')
  }
  if (!limit.ok) {
    return {
      status: 429,
      body: { ok: false, error: RATE_LIMITED },
      headers: { 'Retry-After': String(limit.retryAfterSec) },
    }
  }

  if (!deps.deliveryConfigured()) {
    console.error('[contact] webhook is not configured')
    return notConfigured('not_configured')
  }

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return { status: 400, body: { ok: false, error: INVALID_BODY } }
  }

  const parsed = contactBodySchema.safeParse(raw)
  if (!parsed.success) {
    return { status: 400, body: { ok: false, error: INVALID_INPUT } }
  }

  const website = parsed.data.website?.trim() ?? ''
  if (website) {
    console.error('[contact] honeypot rejected')
    return { status: 200, body: { ok: true } }
  }

  const token = parsed.data.turnstileToken?.trim() || undefined
  const verified = await deps.verify(token)
  if (!verified.ok) {
    if (verified.code === 'not_configured') {
      console.error('[contact] turnstile is not configured')
    }
    return {
      status: verified.status,
      body: { ok: false, error: verified.error, code: verified.code },
    }
  }

  if (
    looksLikeAutomatedContact({
      name: parsed.data.name,
      message: parsed.data.message,
    })
  ) {
    console.error('[contact] automated input rejected')
    return { status: 400, body: { ok: false, error: INVALID_INPUT } }
  }

  const payload = buildContactWebhookPayload(
    parsed.data,
    new Date().toISOString(),
  )

  try {
    const delivered = await deps.deliver(payload)
    if (!delivered) {
      return { status: 502, body: { ok: false, error: DELIVERY_FAILED } }
    }
  } catch (err) {
    console.error('[contact] webhook error', err)
    return { status: 502, body: { ok: false, error: DELIVERY_FAILED } }
  }

  return { status: 200, body: { ok: true } }
}
