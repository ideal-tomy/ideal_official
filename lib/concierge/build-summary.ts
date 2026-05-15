import {
  getServiceHrefForConciergeTrack,
  getServiceLabelForConciergeTrack,
} from '@/data/services/service-links'
import type { FlowAnswer, IdealTrack } from './ideal-flow'
import { resolveEffectiveTrack } from './ideal-flow'

/**
 * 選択パスから Markdown 風テキストのサマリを生成（テンプレートのみ）
 */
export function buildIdealSummaryMarkdown(
  track: IdealTrack,
  answers: FlowAnswer[],
): string {
  const effective = resolveEffectiveTrack(track, answers)
  const serviceName = getServiceLabelForConciergeTrack(track, answers)
  const serviceHref = getServiceHrefForConciergeTrack(track, answers)

  const situation = answers.find((a) => a.stepId === 'situation')?.label
  const timeline = answers.find((a) => a.stepId === 'timeline')?.label
  const closest = answers.find((a) => a.stepId === 'closest-area')?.label

  const lines: string[] = []

  lines.push('### 御社状況の整理（選択内容をもとにした要約）')
  const parts: string[] = []
  if (situation) parts.push(`現状のご認識として「${situation}」に近いとのことです。`)
  if (timeline) parts.push(`着手の時期感は「${timeline}」とのことです。`)
  if (track === 'unsure' && closest) {
    parts.push(`関心が近い領域として「${closest}」が選ばれています。`)
  }
  if (parts.length === 0) {
    parts.push('選択内容をもとに、次のステップでよくある論点を整理しています。')
  }
  lines.push(parts.join(''))
  lines.push('')

  lines.push('### おすすめの相談カテゴリ')
  lines.push(
    `**${serviceName}** を中心に、要件の整理と次の一手を一緒に考えるのがおすすめです。`,
  )
  lines.push('')

  lines.push('### 次の一歩')
  lines.push(`- お問い合わせフォームから詳細をお送りください。`)
  lines.push(`- サービス概要: ${serviceName}（${serviceHref}）`)
  if (effective === 'bc' || track === 'bc') {
    lines.push(
      `- 考え方やスタンスについては Philosophy ページ（/philosophy）もご参照ください。`,
    )
  }

  return lines.join('\n')
}
