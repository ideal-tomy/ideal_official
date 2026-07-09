import {
  buildConciergeSystemPrompt,
  buildConciergeUserPayload,
} from './prompts'
import { parseConciergeModelOutput } from './parse'
import type {
  ConciergeChatAskResponse,
  ConciergeChatDraftResponse,
  ConciergeChatRequest,
} from './types'
import { CONCIERGE_AI_MAX_QUESTIONS } from './types'

const DEFAULT_BASE = 'https://api.openai.com/v1'
const DEFAULT_MODEL = 'gpt-4o-mini'
const TIMEOUT_MS = 25_000

export function isConciergeAiConfigured(): boolean {
  return Boolean(process.env.OPENAI_API_KEY?.trim())
}

type ChatCompletionResponse = {
  choices?: Array<{
    message?: { content?: string | null }
  }>
}

export async function runConciergeChat(
  req: ConciergeChatRequest,
): Promise<ConciergeChatAskResponse | ConciergeChatDraftResponse> {
  const apiKey = process.env.OPENAI_API_KEY?.trim()
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set')
  }

  // 上限到達時はモデルに任せず draft を強制しやすいようヒントを付与済み（prompts）
  const forceDraft = req.qa.length >= CONCIERGE_AI_MAX_QUESTIONS

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
        temperature: 0.4,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: buildConciergeSystemPrompt() },
          {
            role: 'user',
            content:
              buildConciergeUserPayload(req) +
              (forceDraft
                ? '\n\n（追加質問上限に達しています。必ず action を draft にしてください。）'
                : ''),
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

    const parsed = parseConciergeModelOutput(content)

    // 上限後に ask が返ったら draft に落とす
    if (forceDraft && parsed.action === 'ask') {
      return {
        action: 'draft',
        assistantMessage: parsed.assistantMessage,
        draft: {
          challengeSummary: req.freeText.slice(0, 400) || parsed.question,
          directionTitle: '業務課題の整理と次の一手',
          directionBody: parsed.assistantMessage,
          featureTags: ['課題整理', '機能洗い出し'],
          recommendedApproach:
            'いただいた内容をもとに、担当が詳細を確認のうえご提案します。',
          relatedDemoSlugs: parsed.suggestedDemoSlugs ?? [],
        },
        suggestedDemoSlugs: parsed.suggestedDemoSlugs,
      }
    }

    return parsed
  } finally {
    clearTimeout(timer)
  }
}
