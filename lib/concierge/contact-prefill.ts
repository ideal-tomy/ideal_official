import type { FlowAnswer, IdealTrack } from './ideal-flow'
import { buildIdealSummaryMarkdown } from './build-summary'
import type { ConciergePageContext } from './page-context'

export const CONTACT_PREFILL_STORAGE_KEY = 'IDEAL_contact_prefill_v1'

export type ContactPrefillPayloadV1 = {
  v: 1
  intent: 'concierge'
  messageDraft: string
  serviceId: string
  summaryBody: string
}

let stagedPrefill: ContactPrefillPayloadV1 | null = null

export function buildContactMessageDraft(
  track: IdealTrack,
  answers: FlowAnswer[],
  summaryBody: string,
  pageContext?: ConciergePageContext,
): string {
  const rootLine =
    track === 'unsure'
      ? 'トラック: まだわからない（IT・AI・DX で前に進めたい）'
      : `トラック: ${track}`

  const pathLines = answers.map(
    (a) => `- ${a.stepId}: ${a.label}`,
  )

  const contextLines: string[] = []
  if (pageContext) {
    contextLines.push('--- 閲覧ページ ---')
    contextLines.push(`pathname: ${pageContext.pathname}`)
    if (pageContext.label) contextLines.push(`label: ${pageContext.label}`)
    if (pageContext.demoId) contextLines.push(`demo: ${pageContext.demoId}`)
    if (pageContext.caseSlug) contextLines.push(`case: ${pageContext.caseSlug}`)
    contextLines.push('')
  }

  return [
    '【コンシェルジュ（選択内容を整理）経由のご相談】',
    '',
    rootLine,
    '',
    ...contextLines,
    '--- 選択内容 ---',
    ...pathLines,
    '',
    '--- サマリ ---',
    summaryBody,
    '',
  ].join('\n')
}

function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

/** sessionStorage に保存し、prefill=session で読み取る用の問い合わせ URL を返す */
export function buildConciergeContactUrl(
  serviceId: string,
  messageDraft: string,
  summaryBody: string,
): string {
  const payload: ContactPrefillPayloadV1 = {
    v: 1,
    intent: 'concierge',
    messageDraft,
    serviceId,
    summaryBody,
  }
  if (isBrowser()) {
    sessionStorage.setItem(CONTACT_PREFILL_STORAGE_KEY, JSON.stringify(payload))
  }
  const params = new URLSearchParams({
    intent: 'concierge',
    prefill: 'session',
    service: serviceId,
  })
  return `/contact?${params.toString()}`
}

export type NavigateConciergeContactOptions = {
  /** 概算をサマリ / メッセージに含める（完了画面で算出した場合） */
  includeEstimate?: boolean
}

/** ストアが使えない SSR 時は URL のみ（本文は session に載らないのでフォームは空になりうる） */
export function navigateToConciergeContact(
  serviceId: string,
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
  options?: NavigateConciergeContactOptions,
): string {
  const includeEstimate = options?.includeEstimate ?? false
  const summaryBody = buildIdealSummaryMarkdown(track, answers, pageContext, {
    includeEstimate,
  })
  const messageDraft = buildContactMessageDraft(
    track,
    answers,
    summaryBody,
    pageContext,
  )
  return buildConciergeContactUrl(serviceId, messageDraft, summaryBody)
}

/**
 * sessionStorage から prefill を取り出す（React Strict Mode でも 1 回分を維持）。
 * ストレージに新規 raw がある場合はステージを上書きする。
 */
export function takeContactPrefillFromSession(): ContactPrefillPayloadV1 | null {
  if (!isBrowser()) return null
  const raw = sessionStorage.getItem(CONTACT_PREFILL_STORAGE_KEY)
  if (raw) {
    try {
      const data = JSON.parse(raw) as ContactPrefillPayloadV1
      if (data.v === 1 && data.intent === 'concierge' && data.messageDraft) {
        sessionStorage.removeItem(CONTACT_PREFILL_STORAGE_KEY)
        stagedPrefill = data
        return stagedPrefill
      }
    } catch {
      // noop
    }
  }
  return stagedPrefill
}

export function clearStagedConciergePrefill(): void {
  stagedPrefill = null
}

/** @deprecated takeContactPrefillFromSession を使用 */
export function consumeContactPrefillFromSession(
  remove = true,
): ContactPrefillPayloadV1 | null {
  if (!remove) {
    const raw = sessionStorage.getItem(CONTACT_PREFILL_STORAGE_KEY)
    if (!raw) return stagedPrefill
    try {
      const data = JSON.parse(raw) as ContactPrefillPayloadV1
      if (data.v !== 1 || data.intent !== 'concierge' || !data.messageDraft) {
        return null
      }
      return data
    } catch {
      return null
    }
  }
  return takeContactPrefillFromSession()
}
