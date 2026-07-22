/**
 * サイト案内コンシェルジュ — 型
 */

import type { ConciergePageContext } from '../page-context'

export const GUIDE_INTENT_IDS = [
  'pricing',
  'demos',
  'cases',
  'contact',
  'how_we_work',
  'difference',
  'off_topic',
] as const

export type GuideIntentId = (typeof GUIDE_INTENT_IDS)[number]

export type GuideLink = {
  label: string
  href: string
}

export type GuideIntentDef = {
  id: GuideIntentId
  chipLabel: string
  /** ルールマッチ用（部分一致・小文字化後） */
  keywords: string[]
  answer: string
  primary: GuideLink
  secondary?: GuideLink
  /** 開いた直後のチップに出すか */
  showAsChip: boolean
}

export type GuideReplySource = 'template' | 'classify' | 'refuse'

export type GuideReply = {
  source: GuideReplySource
  intent: GuideIntentId
  answer: string
  links: GuideLink[]
  /** 拒否・曖昧時にチップ再提示するか */
  showChips: boolean
}

export type GuideRequest = {
  message?: string
  intentId?: GuideIntentId
  pageContext?: ConciergePageContext
}

export const GUIDE_MAX_MESSAGE = 500
