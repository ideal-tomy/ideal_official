/**
 * cases slug / ギャラリー pattern slug → LP 公開パス
 * TOP §03 本線: W型優先 → F型 → null
 */

export const WORKFLOW_LP_BY_CASE_SLUG: Record<string, string> = {
  'construction-photo-sorting': '/demo/w/construction-record',
  'care-voice-records': '/demo/w/care-records',
  'knowledge-internal-search': '/demo/w/manufacturing-judgment',
  'retail-demand-prediction': '/demo/w/retail-support',
}

/** ギャラリー pattern → 関連 W型LP（本線の業種説明） */
export const WORKFLOW_LP_BY_DEMO_SLUG: Record<string, string> = {
  'photo-to-classification': '/demo/w/construction-record',
  'voice-to-structured': '/demo/w/care-records',
  'knowledge-to-search': '/demo/w/manufacturing-judgment',
  'data-to-prediction': '/demo/w/retail-support',
}

/** ギャラリー pattern → F型LP（W型未マップ3本） */
export const FEATURE_LP_BY_DEMO_SLUG: Record<string, string> = {
  'document-to-extraction': '/demo/document-to-extraction',
  'workflow-to-automation': '/demo/workflow-to-automation',
  'multi-input-to-report': '/demo/multi-input-to-report',
}

export function getWorkflowLpHrefForCase(
  caseSlug: string | undefined | null,
): string | null {
  if (!caseSlug) return null
  return WORKFLOW_LP_BY_CASE_SLUG[caseSlug] ?? null
}

export function getWorkflowLpHrefForDemo(
  demoSlug: string | undefined | null,
): string | null {
  if (!demoSlug) return null
  return WORKFLOW_LP_BY_DEMO_SLUG[demoSlug] ?? null
}

export function getFeatureLpHrefForDemo(
  demoSlug: string | undefined | null,
): string | null {
  if (!demoSlug) return null
  return FEATURE_LP_BY_DEMO_SLUG[demoSlug] ?? null
}

/** TOP §03「詳しく見る」の着地（W型優先 → F型） */
export function getTopDemoLpHref(
  demoSlug: string | undefined | null,
): string | null {
  if (!demoSlug) return null
  return (
    getWorkflowLpHrefForDemo(demoSlug) ??
    getFeatureLpHrefForDemo(demoSlug) ??
    null
  )
}
