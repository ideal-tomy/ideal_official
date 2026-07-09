/**
 * コンシェルジュ完了時の構造化結果（UI / Contact 共用）
 */

import {
  getServiceHrefForConciergeTrack,
  getServiceLabelForConciergeTrack,
} from '@/data/services/service-links'
import {
  buildConciergeEstimate,
  estimateToSummaryText,
  type ConciergeEstimate,
} from './estimate'
import type { FlowAnswer, IdealTrack } from './ideal-flow'
import { resolveEffectiveTrack } from './ideal-flow'
import type { ConciergePageContext } from './page-context'
import {
  getRelatedCases,
  getRelatedDemos,
  getSuggestedFeatureTags,
  type RelatedCaseLink,
  type RelatedDemoLink,
} from './related-content'

export type ConciergeResult = {
  situationLabel: string | null
  timelineLabel: string | null
  closestAreaLabel: string | null
  directionTitle: string
  directionBody: string
  featureTags: string[]
  relatedDemos: RelatedDemoLink[]
  relatedCases: RelatedCaseLink[]
  serviceName: string
  serviceHref: string
  contextLabel: string | null
  estimate: ConciergeEstimate
}

const DIRECTION_BY_TRACK: Record<
  Exclude<IdealTrack, 'unsure'>,
  { title: string; body: string }
> = {
  web: {
    title: 'Webサイト・業務システムの制作・改善',
    body: '目的と現状に合わせて、必要なページ構成・導線・運用までを整理し、制作またはリニューアルの進め方を一緒に決めます。',
  },
  app: {
    title: 'アプリ・業務ツールの開発',
    body: '利用者と業務フローを起点に、画面・データ・運用に必要な機能を洗い出し、プロトタイプから本番までの進め方を整理します。',
  },
  ai: {
    title: '業務ツール＋AI自動化',
    body: '現在の業務フローを整理し、繰り返し作業や情報入力を自動化する方法を検討します。まずは小さな検証から始めるのがおすすめです。',
  },
  bc: {
    title: 'ブロックチェーン・DAOまわりの設計整理',
    body: 'やりたいことと制約を整理し、トークン・ガバナンス・実装範囲のどこから着手するかを明確にします。',
  },
}

function directionFor(
  track: IdealTrack,
  answers: FlowAnswer[],
): { title: string; body: string } {
  const effective = resolveEffectiveTrack(track, answers)
  if (effective === 'unsure') {
    return {
      title: '課題の整理から始めるIT・AI相談',
      body: '目的が固まっていなくても問題ありません。現状と時期感から、近い相談カテゴリと次の一手を一緒に決めます。',
    }
  }
  const base = DIRECTION_BY_TRACK[effective]
  const situation = answers.find((a) => a.stepId === 'situation')?.choiceId
  if (effective === 'ai' && situation === 'ai-workflow') {
    return {
      title: '業務プロセス改善＋AI自動化',
      body: '現場の手作業や転記を洗い出し、AIと業務ツールでどこまで自動化できるかを整理します。',
    }
  }
  if (effective === 'web' && situation === 'web-ops') {
    return {
      title: '業務効率化を伴うWeb・システム改善',
      body: 'サイトやシステムの見た目だけでなく、日々の業務フローまで含めて改善ポイントを整理します。',
    }
  }
  return base
}

export function buildConciergeResult(
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
): ConciergeResult {
  const direction = directionFor(track, answers)
  return {
    situationLabel:
      answers.find((a) => a.stepId === 'situation')?.label ?? null,
    timelineLabel: answers.find((a) => a.stepId === 'timeline')?.label ?? null,
    closestAreaLabel:
      answers.find((a) => a.stepId === 'closest-area')?.label ?? null,
    directionTitle: direction.title,
    directionBody: direction.body,
    featureTags: getSuggestedFeatureTags(track, answers, pageContext),
    relatedDemos: getRelatedDemos(track, answers, pageContext),
    relatedCases: getRelatedCases(pageContext),
    serviceName: getServiceLabelForConciergeTrack(track, answers),
    serviceHref: getServiceHrefForConciergeTrack(track, answers),
    contextLabel: pageContext?.label ?? null,
    estimate: buildConciergeEstimate(track, answers, pageContext),
  }
}

/** Contact / 互換用のテキストサマリ（構造化結果から生成） */
export function conciergeResultToSummaryText(
  result: ConciergeResult,
  options?: { includeEstimate?: boolean },
): string {
  const includeEstimate = options?.includeEstimate ?? false
  const lines: string[] = []
  lines.push('### ご相談内容の整理')
  if (result.contextLabel) {
    lines.push(`閲覧ページ: ${result.contextLabel}`)
  }
  if (result.situationLabel) {
    lines.push(`現在の状況: ${result.situationLabel}`)
  }
  if (result.timelineLabel) {
    lines.push(`希望時期: ${result.timelineLabel}`)
  }
  if (result.closestAreaLabel) {
    lines.push(`近い領域: ${result.closestAreaLabel}`)
  }
  lines.push('')
  lines.push(`### おすすめの方向性`)
  lines.push(`**${result.directionTitle}**`)
  lines.push(result.directionBody)
  if (result.featureTags.length > 0) {
    lines.push('')
    lines.push(`想定機能: ${result.featureTags.join(' / ')}`)
  }
  if (result.relatedDemos.length > 0) {
    lines.push('')
    lines.push('### 関連デモ')
    for (const d of result.relatedDemos) {
      lines.push(`- ${d.label}: ${d.href}`)
    }
  }
  if (includeEstimate) {
    lines.push('')
    lines.push(estimateToSummaryText(result.estimate))
  }
  lines.push('')
  lines.push('### 次の一歩')
  lines.push(`- お問い合わせフォームから詳細をお送りください。`)
  lines.push(`- サービス概要: ${result.serviceName}（${result.serviceHref}）`)
  return lines.join('\n')
}
