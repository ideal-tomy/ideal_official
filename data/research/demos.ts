import { detailPages, POC_INSTRUMENT_LP } from './detail-pages'

export type ResearchDemo = {
  id: string
  title: string
  description: string
  href: string
  type: 'lp' | 'detail'
  status: 'ready' | 'planned'
}

export const researchDemos: ResearchDemo[] = [
  {
    id: 'poc-instrument-lp',
    title: '正直さの物理法則 — 全体像',
    description:
      'Proof of Contribution の技術提案を一望できるインタラクティブ LP。すべての概念を一ページで体験できます。',
    href: POC_INSTRUMENT_LP,
    type: 'lp',
    status: 'ready',
  },
  ...detailPages.map((page) => ({
    id: `poc-${page.slug}`,
    title: page.title,
    description: page.lead,
    href: `/research/poc-instrument/${page.slug}`,
    type: 'detail' as const,
    status: page.status,
  })),
]
