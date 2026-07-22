import { NextResponse } from 'next/server'
import type { ConciergePageContext } from '@/lib/concierge/page-context'
import {
  buildAmbiguousReply,
  buildTemplateReply,
  resolveGuideLocally,
} from '@/lib/concierge/guide/resolve'
import { classifyGuideIntent, isGuideAiConfigured } from '@/lib/concierge/guide/classify'
import { guideRequestSchema } from '@/lib/concierge/guide/schema'
import { checkGuideRateLimit } from '@/lib/concierge/guide/rate-limit'
import type { GuideReply } from '@/lib/concierge/guide/types'
import { GUIDE_MAX_MESSAGE } from '@/lib/concierge/guide/types'

export const runtime = 'nodejs'

function clientKey(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return req.headers.get('x-real-ip') || 'unknown'
}

function withClassifySource(reply: GuideReply): GuideReply {
  if (reply.source === 'refuse') return reply
  return { ...reply, source: 'classify' }
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(buildAmbiguousReply(), { status: 400 })
  }

  const parsed = guideRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(buildAmbiguousReply(), { status: 400 })
  }

  const { message, intentId, pageContext } = parsed.data
  const local = resolveGuideLocally({
    message: message?.slice(0, GUIDE_MAX_MESSAGE),
    intentId,
    pageContext: pageContext as ConciergePageContext | undefined,
  })

  // テンプレヒット — OpenAI を呼ばない
  if (local) {
    return NextResponse.json(local)
  }

  const text = (message ?? '').trim()
  if (!text) {
    return NextResponse.json(buildAmbiguousReply())
  }

  if (!isGuideAiConfigured()) {
    return NextResponse.json(buildAmbiguousReply())
  }

  const limit = checkGuideRateLimit(`guide:${clientKey(req)}`)
  if (!limit.ok) {
    return NextResponse.json(buildAmbiguousReply(), {
      status: 429,
      headers: limit.retryAfterSec
        ? { 'Retry-After': String(limit.retryAfterSec) }
        : undefined,
    })
  }

  try {
    const intent = await classifyGuideIntent(
      text,
      pageContext as ConciergePageContext | undefined,
    )
    const reply = withClassifySource(buildTemplateReply(intent))
    return NextResponse.json(reply)
  } catch (err) {
    console.error('[concierge/guide]', err)
    return NextResponse.json(buildAmbiguousReply(), { status: 502 })
  }
}
