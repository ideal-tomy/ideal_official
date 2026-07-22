/**
 * サイト案内 — テンプレ解決（クライアント／サーバー共用）
 */

import {
  AMBIGUOUS_ANSWER,
  getGuideIntent,
  OFF_TOPIC_ANSWER,
  OFF_TOPIC_FALLBACK_LINK,
} from './intents'
import { isGuideIntentId, matchGuideIntentByKeywords } from './match'
import type { GuideIntentId, GuideLink, GuideReply, GuideRequest } from './types'
import { GUIDE_MAX_MESSAGE } from './types'

function linksFromIntent(intentId: Exclude<GuideIntentId, 'off_topic'>): GuideLink[] {
  const def = getGuideIntent(intentId)
  if (!def) return [OFF_TOPIC_FALLBACK_LINK]
  const links: GuideLink[] = [def.primary]
  if (def.secondary) links.push(def.secondary)
  return links
}

export function buildTemplateReply(intentId: GuideIntentId): GuideReply {
  if (intentId === 'off_topic') {
    return {
      source: 'refuse',
      intent: 'off_topic',
      answer: OFF_TOPIC_ANSWER,
      links: [OFF_TOPIC_FALLBACK_LINK],
      showChips: true,
    }
  }

  const def = getGuideIntent(intentId)
  if (!def) {
    return buildTemplateReply('off_topic')
  }

  return {
    source: 'template',
    intent: intentId,
    answer: def.answer,
    links: linksFromIntent(intentId),
    showChips: false,
  }
}

export function buildAmbiguousReply(): GuideReply {
  return {
    source: 'refuse',
    intent: 'off_topic',
    answer: AMBIGUOUS_ANSWER,
    links: [OFF_TOPIC_FALLBACK_LINK],
    showChips: true,
  }
}

/**
 * チップ指定またはキーワードで解決。ヒットしなければ null（AI分類へ）。
 */
export function resolveGuideLocally(req: GuideRequest): GuideReply | null {
  if (req.intentId && isGuideIntentId(req.intentId)) {
    return buildTemplateReply(req.intentId)
  }

  const message = (req.message ?? '').slice(0, GUIDE_MAX_MESSAGE)
  if (!message.trim()) {
    return buildAmbiguousReply()
  }

  const matched = matchGuideIntentByKeywords(message)
  if (matched) {
    return buildTemplateReply(matched)
  }

  return null
}
