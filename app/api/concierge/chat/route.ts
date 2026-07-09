import { NextResponse } from 'next/server'
import { isConciergeAiConfigured, runConciergeChat } from '@/lib/concierge/ai/openai'
import {
  asUnavailable,
  forceDraftFallback,
} from '@/lib/concierge/ai/parse'
import { checkConciergeRateLimit } from '@/lib/concierge/ai/rate-limit'
import { conciergeChatRequestSchema } from '@/lib/concierge/ai/schema'
import type { ConciergeChatRequest } from '@/lib/concierge/ai/types'
import { CONCIERGE_AI_MAX_QUESTIONS } from '@/lib/concierge/ai/types'

export const runtime = 'nodejs'

function clientKey(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return req.headers.get('x-real-ip') || 'unknown'
}

export async function POST(req: Request) {
  const limit = checkConciergeRateLimit(clientKey(req))
  if (!limit.ok) {
    return NextResponse.json(
      {
        action: 'unavailable',
        reason: 'error',
        message: 'リクエストが集中しています。しばらくしてから再度お試しください。',
      },
      {
        status: 429,
        headers: limit.retryAfterSec
          ? { 'Retry-After': String(limit.retryAfterSec) }
          : undefined,
      },
    )
  }

  if (!isConciergeAiConfigured()) {
    return NextResponse.json(
      asUnavailable(
        'no_api_key',
        'AI整理は現在利用できません。選択内容のみで結果へ進めます。',
      ),
      { status: 503 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      asUnavailable('error', 'リクエスト形式が正しくありません。'),
      { status: 400 },
    )
  }

  const parsed = conciergeChatRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      asUnavailable('error', '入力内容を確認してください。'),
      { status: 400 },
    )
  }

  const chatReq = parsed.data as ConciergeChatRequest

  try {
    const result = await runConciergeChat(chatReq)
    return NextResponse.json(result)
  } catch (err) {
    console.error('[concierge/chat]', err)

    // 上限付近ならフォールバック draft で完了させる
    if (chatReq.qa.length >= CONCIERGE_AI_MAX_QUESTIONS - 1) {
      return NextResponse.json(
        forceDraftFallback(chatReq.freeText, chatReq.pageContext?.demoId
          ? [chatReq.pageContext.demoId]
          : []),
      )
    }

    return NextResponse.json(
      asUnavailable(
        'error',
        '一時的にAI整理を利用できません。選択内容のみで結果へ進めます。',
      ),
      { status: 502 },
    )
  }
}
