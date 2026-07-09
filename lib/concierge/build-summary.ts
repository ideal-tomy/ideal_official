import type { ConciergeAiDraft } from './ai/types'
import type { FlowAnswer, IdealTrack } from './ideal-flow'
import {
  buildConciergeResult,
  conciergeResultToSummaryText,
} from './build-result'
import { mergeAiDraftIntoResult } from './merge-ai-draft'
import type { ConciergePageContext } from './page-context'

/**
 * 選択パスから Markdown 風テキストのサマリを生成
 * （Contact 引き継ぎ・互換用。UI は buildConciergeResult を使用）
 */
export function buildIdealSummaryMarkdown(
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
  options?: { includeEstimate?: boolean; aiDraft?: ConciergeAiDraft | null },
): string {
  let result = buildConciergeResult(track, answers, pageContext)
  if (options?.aiDraft) {
    result = mergeAiDraftIntoResult(result, options.aiDraft)
  }
  return conciergeResultToSummaryText(result, options)
}
