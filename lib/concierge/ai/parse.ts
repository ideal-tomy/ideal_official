import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'
import type {
  ConciergeAiDraft,
  ConciergeChatAskResponse,
  ConciergeChatDraftResponse,
  ConciergeChatResponse,
} from './types'

function asString(v: unknown, max = 800): string {
  if (typeof v !== 'string') return ''
  return v.trim().slice(0, max)
}

function asStringArray(v: unknown, maxItems = 6): string[] {
  if (!Array.isArray(v)) return []
  return v
    .filter((x): x is string => typeof x === 'string')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, maxItems)
}

function filterDemoSlugs(slugs: string[]): string[] {
  return slugs.filter((slug) => {
    const cap = getCapabilityBySlug(slug)
    return Boolean(cap && cap.status === 'ready')
  })
}

function extractJsonObject(raw: string): unknown {
  const trimmed = raw.trim()
  try {
    return JSON.parse(trimmed)
  } catch {
    const start = trimmed.indexOf('{')
    const end = trimmed.lastIndexOf('}')
    if (start >= 0 && end > start) {
      return JSON.parse(trimmed.slice(start, end + 1))
    }
    throw new Error('JSON parse failed')
  }
}

function parseDraft(raw: unknown): ConciergeAiDraft | null {
  if (!raw || typeof raw !== 'object') return null
  const d = raw as Record<string, unknown>
  const challengeSummary = asString(d.challengeSummary, 600)
  const directionTitle = asString(d.directionTitle, 120)
  const directionBody = asString(d.directionBody, 800)
  if (!challengeSummary || !directionTitle || !directionBody) return null

  return {
    challengeSummary,
    directionTitle,
    directionBody,
    featureTags: asStringArray(d.featureTags, 8).map((t) => t.slice(0, 40)),
    recommendedApproach: asString(d.recommendedApproach, 600),
    relatedDemoSlugs: filterDemoSlugs(asStringArray(d.relatedDemoSlugs, 3)),
  }
}

/**
 * モデル出力を ConciergeChatResponse に正規化。
 * 金額らしき文言は除去を試みる（最終防衛）。
 */
export function parseConciergeModelOutput(
  raw: string,
): ConciergeChatAskResponse | ConciergeChatDraftResponse {
  const cleaned = stripPriceHints(raw)
  const data = extractJsonObject(cleaned) as Record<string, unknown>
  const action = data.action

  if (action === 'ask') {
    const question = asString(data.question, 240)
    if (!question) {
      throw new Error('ask response missing question')
    }
    return {
      action: 'ask',
      assistantMessage:
        asString(data.assistantMessage, 400) ||
        'もう少し詳しく教えてください。',
      question,
      suggestedDemoSlugs: filterDemoSlugs(
        asStringArray(data.suggestedDemoSlugs, 3),
      ),
    }
  }

  if (action === 'draft') {
    const draft = parseDraft(data.draft)
    if (!draft) {
      throw new Error('draft response invalid')
    }
    return {
      action: 'draft',
      assistantMessage:
        asString(data.assistantMessage, 400) ||
        'ご相談内容を整理しました。',
      draft: {
        ...draft,
        challengeSummary: stripPriceHints(draft.challengeSummary),
        directionTitle: stripPriceHints(draft.directionTitle),
        directionBody: stripPriceHints(draft.directionBody),
        recommendedApproach: stripPriceHints(draft.recommendedApproach),
      },
      suggestedDemoSlugs: filterDemoSlugs(
        asStringArray(data.suggestedDemoSlugs, 3),
      ),
    }
  }

  throw new Error(`unknown action: ${String(action)}`)
}

/** 万円・円などの価格表現をマスク（AIが誤って出した場合の保険） */
export function stripPriceHints(text: string): string {
  return text
    .replace(/\d[\d,]*(?:\.\d+)?\s*万円/g, '（金額は概算機能で表示）')
    .replace(/\d[\d,]*(?:\.\d+)?\s*円/g, '（金額は概算機能で表示）')
    .replace(/(?:約|およそ|だいたい)?\s*\d[\d,]*\s*〜\s*\d[\d,]*\s*万/g, '（金額は概算機能で表示）')
}

export function forceDraftFallback(
  freeText: string,
  suggestedDemoSlugs: string[] = [],
): ConciergeChatDraftResponse {
  return {
    action: 'draft',
    assistantMessage: 'いただいた内容をもとに整理しました。',
    draft: {
      challengeSummary:
        freeText.slice(0, 400) ||
        '選択内容をもとに課題を整理しています。',
      directionTitle: '業務課題の整理とプロトタイプ検討',
      directionBody:
        '現状の課題と利用シーンを起点に、必要な機能を洗い出し、小さな検証から進めるのがおすすめです。詳細は担当がお伺いします。',
      featureTags: ['課題ヒアリング', '機能整理', 'プロトタイプ'],
      recommendedApproach:
        'まずは現状フローの確認と、小さなデータ・範囲での検証から始めます。',
      relatedDemoSlugs: filterDemoSlugs(suggestedDemoSlugs).slice(0, 2),
    },
  }
}

export function asUnavailable(
  reason: 'no_api_key' | 'error',
  message: string,
): ConciergeChatResponse {
  return { action: 'unavailable', reason, message }
}
