import type { PhilosophySectionId } from '@/data/philosophy/solution-links'

export type DetailPageSlug =
  | 'environment'
  | 'xi-instrument'
  | 'fork'
  | 'loop'
  | 'zkp'
  | 'gaps'

/** 計器ページ内の、論点ごとの位置 */
const INSTRUMENT_HASH: Record<DetailPageSlug, string> = {
  environment: 'environment',
  'xi-instrument': 'instrument',
  fork: 'fork',
  loop: 'loop',
  zkp: 'zkp',
  gaps: 'gaps',
}

export const POC_INSTRUMENT_LP = '/research/poc-instrument'

export function buildDetailHref(
  slug: DetailPageSlug,
  philosophySectionId?: PhilosophySectionId,
): string {
  const hash = INSTRUMENT_HASH[slug]
  if (!philosophySectionId) return `${POC_INSTRUMENT_LP}#${hash}`
  return `${POC_INSTRUMENT_LP}?from=philosophy&section=${philosophySectionId}#${hash}`
}
