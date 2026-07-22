import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'

const contactBodySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  company: z.string().max(200).optional(),
  message: z.string().min(10).max(5000),
  intent: z.string().max(80).optional().nullable(),
  service: z.string().max(80).optional().nullable(),
  caseSlug: z.string().max(120).optional().nullable(),
})

type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

function clientKey(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return req.headers.get('x-real-ip') || 'unknown'
}

function checkRateLimit(key: string): { ok: boolean; retryAfterSec?: number } {
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

function isContactDeliveryConfigured(): boolean {
  return Boolean(process.env.CONTACT_WEBHOOK_URL?.trim())
}

export async function POST(req: Request) {
  const limit = checkRateLimit(clientKey(req))
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: 'リクエストが集中しています。しばらくしてから再度お試しください。',
      },
      {
        status: 429,
        headers: limit.retryAfterSec
          ? { 'Retry-After': String(limit.retryAfterSec) }
          : undefined,
      },
    )
  }

  if (!isContactDeliveryConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'お問い合わせ受付の設定が完了していません。しばらくしてから再度お試しいただくか、別の手段でご連絡ください。',
        code: 'not_configured',
      },
      { status: 503 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'リクエスト形式が正しくありません。' },
      { status: 400 },
    )
  }

  const parsed = contactBodySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: '入力内容を確認してください。' },
      { status: 400 },
    )
  }

  const data = parsed.data
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL!.trim()

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.CONTACT_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({
        source: 'ideal-official-contact',
        submittedAt: new Date().toISOString(),
        ...data,
      }),
    })

    if (!res.ok) {
      console.error('[contact] webhook status', res.status)
      return NextResponse.json(
        {
          ok: false,
          error: '送信に失敗しました。しばらくしてから再度お試しください。',
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] webhook error', err)
    return NextResponse.json(
      {
        ok: false,
        error: '送信に失敗しました。しばらくしてから再度お試しください。',
      },
      { status: 502 },
    )
  }
}
