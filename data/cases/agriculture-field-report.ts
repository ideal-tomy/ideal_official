import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const agricultureFieldReport: CaseStudy = {
  slug: 'agriculture-field-report',
  industry: 'agriculture',
  industryLabel: '農業',
  title: '畑の記録が、机の上でまとまらない。',
  subtitle: '農業 × 現場報告の自動化',
  lead:
    '写真・メモ・数値を手で集め、報告書を一から作る流れを、素材アップロードから完成報告書候補まで一気に変える事例です。',
  metaTitle: '農業 × 現場報告の自動化 | Cases | ideal',
  metaDescription:
    '農業現場の記録・報告を、手作業の集約から、複数素材の統合→報告書生成へ。関連デモを体験できます。',
  tags: ['農業', '現場報告', '写真', 'レポート'],
  before: {
    title: 'いまの流れ',
    summary: '現場の情報はあるのに、報告書にまとめるのに時間がかかる。',
    steps: [
      { label: '撮る・メモ', detail: '畑で写真やメモを残す' },
      { label: '集める', detail: 'スマホ・紙・数値表をあとで回収' },
      { label: '整理', detail: '日付・圃場・作業内容を手で並べる' },
      { label: '報告書作成', detail: 'WordやExcelで一から書き起こす' },
    ],
  },
  after: {
    title: 'AI介入後の流れ',
    summary: '素材を送るだけで、参照元付きの報告書候補ができる。',
    steps: [
      { label: 'アップロード', detail: '写真・音声・メモ・数値を送る' },
      { label: '統合', detail: '内容を読み取り、項目ごとに整理' },
      { label: '報告書候補', detail: '参照元付きの完成報告書を生成' },
    ],
  },
  relatedDemo: {
    slug: 'multi-input-to-report',
    label: '複数情報 → 報告書',
    href: `${GALLERY_BASE}/multi-input-to-report`,
    description:
      '現場報告サンプルで、複数素材が報告書にまとまる流れを体験できます。',
  },
  contactHref: '/contact?service=ai-consulting&intent=cases&case=agriculture-field-report',
  status: 'published',
}
