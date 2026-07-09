import type { FlowAnswer, IdealTrack } from '../ideal-flow'
import type { ConciergePageContext } from '../page-context'

export const CONCIERGE_AI_MAX_QUESTIONS = 3
export const CONCIERGE_AI_MAX_FREE_TEXT = 2000
export const CONCIERGE_AI_MAX_ANSWER = 1000

export type ConciergeAiQaTurn = {
  question: string
  answer: string
}

/** AIが返す簡易要件ドラフト（金額は含めない） */
export type ConciergeAiDraft = {
  challengeSummary: string
  directionTitle: string
  directionBody: string
  featureTags: string[]
  recommendedApproach: string
  relatedDemoSlugs: string[]
  freeText?: string
  qa?: ConciergeAiQaTurn[]
}

export type ConciergeChatRequest = {
  track: IdealTrack
  answers: FlowAnswer[]
  pageContext?: ConciergePageContext
  freeText: string
  qa: ConciergeAiQaTurn[]
  /** 最新のユーザー発話（初回は freeText、以降は追加回答） */
  userMessage: string
}

export type ConciergeChatAskResponse = {
  action: 'ask'
  assistantMessage: string
  question: string
  suggestedDemoSlugs?: string[]
}

export type ConciergeChatDraftResponse = {
  action: 'draft'
  assistantMessage: string
  draft: ConciergeAiDraft
  suggestedDemoSlugs?: string[]
}

export type ConciergeChatUnavailableResponse = {
  action: 'unavailable'
  reason: 'no_api_key' | 'error'
  message: string
}

export type ConciergeChatResponse =
  | ConciergeChatAskResponse
  | ConciergeChatDraftResponse
  | ConciergeChatUnavailableResponse
