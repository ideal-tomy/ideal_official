/**
 * サイト案内 — AI意図分類（intent id のみ）
 */

import { GUIDE_INTENTS } from './intents'
import { isGuideIntentId } from './match'
import type { ConciergePageContext } from '../page-context'
import type { GuideIntentId } from './types'

const DEFAULT_BASE = 'https://api.openai.com/v1'
const DEFAULT_MODEL = 'gpt-4o-mini'
const TIMEOUT_MS = 15_000

export function isGuideAiConfigured(): boolean {
  return Boolean(process.env.OPENAI_API_KEY?.trim())
}

/** 根拠つき短文生成（初期はオフ） */
export function isGuideGroundedEnabled(): boolean {
  return process.env.CONCIERGE_GUIDE_GROUNDED === '1'
}

function buildClassifySystemPrompt(): string {
  const catalog = Object.values(GUIDE_INTENTS)
    .map((i) => `- ${i.id}: ${i.chipLabel}（例: ${i.keywords.slice(0, 4).join(', ')}）`)
    .join('\n')

  return `あなたは ideal 公式サイトの案内係です。ユーザー発話を次の intent のいずれかに分類し、JSON のみ返してください。
許可 intent:
${catalog}
- off_topic: サイト案内に関係ない質問、または判断不能

ルール:
- 金額・見積は pricing
- デモ・何ができるかは demos
- 実績・事例・活用は cases
- 連絡・問い合わせは contact
- 導入・進め方・何が必要かは how_we_work
- 他社との違い・なぜ ideal は difference
- 天気予報・一般知識・他社製品の詳細などは off_topic
- 返答は {"intent":"<id>"} のみ。説明文は禁止。`
}

function buildClassifyUserPayload(
  message: string,
  pageContext?: ConciergePageContext,
): string {
  const ctx = pageContext
    ? `現在ページ: type=${pageContext.pageType}, label=${pageContext.label ?? ''}, path=${pageContext.pathname}`
    : '現在ページ: 不明'
  return `${ctx}\nユーザー発話: ${message}`
}

type ChatCompletionResponse = {
  choices?: Array<{
    message?: { content?: string | null }
  }>
}

export async function classifyGuideIntent(
  message: string,
  pageContext?: ConciergePageContext,
): Promise<GuideIntentId> {
  const apiKey = process.env.OPENAI_API_KEY?.trim()
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set')
  }

  const base = (process.env.OPENAI_BASE_URL || DEFAULT_BASE).replace(/\/$/, '')
  const model = process.env.OPENAI_MODEL || DEFAULT_MODEL

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(`${base}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        model,
        temperature: 0,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: buildClassifySystemPrompt() },
          {
            role: 'user',
            content: buildClassifyUserPayload(message, pageContext),
          },
        ],
      }),
    })

    if (!res.ok) {
      const errText = await res.text().catch(() => '')
      throw new Error(`OpenAI HTTP ${res.status}: ${errText.slice(0, 200)}`)
    }

    const json = (await res.json()) as ChatCompletionResponse
    const content = json.choices?.[0]?.message?.content
    if (!content) {
      throw new Error('Empty model content')
    }

    const parsed = JSON.parse(content) as { intent?: string }
    if (parsed.intent && isGuideIntentId(parsed.intent)) {
      return parsed.intent
    }
    return 'off_topic'
  } finally {
    clearTimeout(timer)
  }
}
