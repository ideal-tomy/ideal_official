import type { FlowAnswer, IdealTrack } from './ideal-flow'
import {
  buildConciergeResult,
  conciergeResultToSummaryText,
} from './build-result'
import type { ConciergePageContext } from './page-context'

/**
 * 選択パスから Markdown 風テキストのサマリを生成
 * （Contact 引き継ぎ・互換用。UI は buildConciergeResult を使用）
 */
export function buildIdealSummaryMarkdown(
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
  options?: { includeEstimate?: boolean },
): string {
  const result = buildConciergeResult(track, answers, pageContext)
  return conciergeResultToSummaryText(result, options)
}
