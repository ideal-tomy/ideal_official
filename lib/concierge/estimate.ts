/**
 * ルールベース概算エンジン
 * — 行項目の選定と合算のみ。金額は pricing-rules から取得。
 */

import type { FlowAnswer, IdealTrack } from './ideal-flow'
import { resolveEffectiveTrack } from './ideal-flow'
import type { ConciergePageContext } from './page-context'
import {
  ESTIMATE_DISCLAIMER,
  PRICING_LINES,
  type PricingLine,
  type PricingLineId,
} from './pricing-rules'

export type ConciergeEstimate = {
  lineIds: PricingLineId[]
  lines: PricingLine[]
  /** 万円 */
  minMan: number
  /** 万円 */
  maxMan: number
  rangeLabel: string
  disclaimer: string
}

function uniqueIds(ids: PricingLineId[]): PricingLineId[] {
  return Array.from(new Set(ids))
}

function selectBaseLineId(
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
): PricingLineId {
  const effective = resolveEffectiveTrack(track, answers)
  const situation = answers.find((a) => a.stepId === 'situation')?.choiceId

  if (effective === 'bc') return 'bc_consult'
  if (effective === 'unsure') return 'discovery'

  if (effective === 'ai') {
    return 'ai_prototype'
  }

  if (effective === 'app') {
    return 'small_web_app'
  }

  // web
  if (situation === 'web-ops') return 'small_web_app'
  if (situation === 'web-new' || situation === 'web-refresh') {
    return 'corporate'
  }
  if (situation === 'web-undecided') return 'discovery'
  return 'corporate'
}

function selectAddonIds(
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
  baseId?: PricingLineId,
): PricingLineId[] {
  const effective = resolveEffectiveTrack(track, answers)
  const situation = answers.find((a) => a.stepId === 'situation')?.choiceId
  const addons: PricingLineId[] = []
  const demoId = pageContext?.demoId

  const needsVision =
    demoId === 'photo-to-classification' ||
    demoId === 'document-to-extraction' ||
    demoId === 'multi-input-to-report' ||
    pageContext?.caseSlug === 'construction-photo-sorting' ||
    pageContext?.caseSlug === 'dd-document-extraction'

  const needsVoice =
    demoId === 'voice-to-structured' ||
    pageContext?.caseSlug === 'care-voice-records'

  const needsAutomation =
    demoId === 'workflow-to-automation' ||
    pageContext?.caseSlug === 'backoffice-workflow-automation' ||
    situation === 'ai-workflow' ||
    situation === 'web-ops'

  const needsKnowledge = demoId === 'knowledge-to-search'
  const needsPrediction = demoId === 'data-to-prediction'

  if (effective === 'ai' || needsVision || needsVoice) {
    if (needsVision) addons.push('ocr')
    // 音声も外部API（STT等）想定
    if (needsVoice || needsKnowledge || needsPrediction) {
      addons.push('external_api')
    }
    if (needsAutomation || situation === 'ai-product' || situation === 'ai-workflow') {
      addons.push('admin')
      addons.push('db_integration')
    } else if (baseId === 'ai_prototype') {
      // AIプロトタイプ単体でも最低限の保存・確認UIを想定
      addons.push('db_integration')
    }
  }

  if (effective === 'app') {
    addons.push('admin')
    addons.push('db_integration')
  }

  if (effective === 'web') {
    if (situation === 'web-ops') {
      addons.push('admin')
      addons.push('db_integration')
    }
  }

  if (effective === 'bc') {
    addons.push('external_api')
  }

  // ベースが discovery のときはアドオンを付けすぎない
  if (baseId === 'discovery') {
    return []
  }

  return uniqueIds(addons)
}

/**
 * track / answers / pageContext から決定的に概算を算出する
 */
export function buildConciergeEstimate(
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
): ConciergeEstimate {
  const baseId = selectBaseLineId(track, answers, pageContext)
  const addonIds = selectAddonIds(track, answers, pageContext, baseId)
  const lineIds = uniqueIds([baseId, ...addonIds])
  const lines = lineIds.map((id) => PRICING_LINES[id])

  const minMan = lines.reduce((sum, line) => sum + line.minMan, 0)
  const maxMan = lines.reduce((sum, line) => sum + line.maxMan, 0)

  return {
    lineIds,
    lines,
    minMan,
    maxMan,
    rangeLabel: formatManYenRange(minMan, maxMan),
    disclaimer: ESTIMATE_DISCLAIMER,
  }
}

export function formatManYenRange(minMan: number, maxMan: number): string {
  return `${minMan}〜${maxMan}万円程度`
}

export function formatPricingLineRange(line: PricingLine): string {
  const prefix = line.kind === 'addon' ? '＋' : ''
  return `${prefix}${line.minMan}〜${line.maxMan}万円`
}

/** Contact / サマリ用テキスト */
export function estimateToSummaryText(estimate: ConciergeEstimate): string {
  const lines: string[] = []
  lines.push('### 概算費用（参考）')
  lines.push(`**${estimate.rangeLabel}**`)
  lines.push('')
  lines.push('内訳:')
  for (const line of estimate.lines) {
    lines.push(
      `- ${line.label}: ${formatPricingLineRange(line)}`,
    )
  }
  lines.push('')
  lines.push(estimate.disclaimer)
  return lines.join('\n')
}
