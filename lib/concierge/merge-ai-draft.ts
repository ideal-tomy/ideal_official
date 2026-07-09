/**
 * テンプレート ConciergeResult に AI ドラフトをマージする
 */

import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'
import type { ConciergeAiDraft } from './ai/types'
import type { ConciergeResult } from './build-result'
import type { RelatedDemoLink } from './related-content'

function demosFromSlugs(slugs: string[]): RelatedDemoLink[] {
  const out: RelatedDemoLink[] = []
  for (const slug of slugs) {
    const cap = getCapabilityBySlug(slug)
    if (!cap || cap.status !== 'ready') continue
    out.push({
      slug: cap.slug,
      label: cap.subtitle,
      href: cap.href,
      description: cap.description,
    })
  }
  return out
}

export function mergeAiDraftIntoResult(
  base: ConciergeResult,
  draft: ConciergeAiDraft,
): ConciergeResult {
  const fromAi = demosFromSlugs(draft.relatedDemoSlugs)
  const relatedDemos =
    fromAi.length > 0
      ? fromAi
      : base.relatedDemos

  const featureTags =
    draft.featureTags.length > 0
      ? draft.featureTags.slice(0, 8)
      : base.featureTags

  return {
    ...base,
    situationLabel: draft.challengeSummary || base.situationLabel,
    directionTitle: draft.directionTitle || base.directionTitle,
    directionBody: [
      draft.directionBody,
      draft.recommendedApproach
        ? `推奨する進め方: ${draft.recommendedApproach}`
        : '',
    ]
      .filter(Boolean)
      .join('\n\n'),
    featureTags,
    relatedDemos,
  }
}

export function aiDraftToContactExtra(draft: ConciergeAiDraft): string {
  const lines: string[] = []
  lines.push('--- AI整理ドラフト ---')
  lines.push(`課題: ${draft.challengeSummary}`)
  lines.push(`方向性: ${draft.directionTitle}`)
  lines.push(draft.directionBody)
  if (draft.recommendedApproach) {
    lines.push(`進め方: ${draft.recommendedApproach}`)
  }
  if (draft.featureTags.length > 0) {
    lines.push(`想定機能: ${draft.featureTags.join(' / ')}`)
  }
  if (draft.freeText) {
    lines.push('')
    lines.push('--- 自由入力 ---')
    lines.push(draft.freeText)
  }
  if (draft.qa && draft.qa.length > 0) {
    lines.push('')
    lines.push('--- 追加Q&A ---')
    for (const turn of draft.qa) {
      lines.push(`Q: ${turn.question}`)
      lines.push(`A: ${turn.answer}`)
    }
  }
  return lines.join('\n')
}
