/**
 * サイト案内 — ルールベース意図マッチ（LLM 不使用）
 */

import { GUIDE_INTENTS } from './intents'
import type { GuideIntentDef, GuideIntentId } from './types'
import { GUIDE_INTENT_IDS } from './types'

export function normalizeGuideMessage(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[？?！!。．、,．]/g, '')
}

export function isGuideIntentId(value: string): value is GuideIntentId {
  return (GUIDE_INTENT_IDS as readonly string[]).includes(value)
}

/**
 * キーワード部分一致。複数ヒット時は最長キーワード一致を優先。
 */
export function matchGuideIntentByKeywords(
  message: string,
): GuideIntentId | null {
  const norm = normalizeGuideMessage(message)
  if (!norm) return null

  let best: { id: GuideIntentId; score: number } | null = null

  for (const intent of Object.values(GUIDE_INTENTS) as GuideIntentDef[]) {
    for (const kw of intent.keywords) {
      const k = normalizeGuideMessage(kw)
      if (!k) continue
      if (norm.includes(k)) {
        const score = k.length
        if (!best || score > best.score) {
          best = { id: intent.id, score }
        }
      }
    }
  }

  return best?.id ?? null
}
