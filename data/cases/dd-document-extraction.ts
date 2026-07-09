import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const ddDocumentExtraction: CaseStudy = {
  slug: 'dd-document-extraction',
  industry: 'dd',
  industryLabel: 'DD / 契約',
  title: '契約書を読む時間が、判断のボトルネックになる。',
  subtitle: 'DD / 契約 × 文書からの情報抽出',
  lead:
    '通読・条項探し・抜粋転記。長い文書から必要情報を取り出す手作業を、アップロードから原文連動の抽出結果へ変える事例です。',
  metaTitle: 'DD / 契約 × 文書抽出 | Cases | ideal',
  metaDescription:
    '契約書・DD資料のレビューを、通読→手作業から、必要項目の抽出と原文連動確認へ。関連デモを体験できます。',
  tags: ['DD', '契約', '文書', '抽出'],
  before: {
    title: 'いまの流れ',
    summary: '重要な条項を探すだけで、レビューが止まる。',
    steps: [
      { label: '通読', detail: 'PDFや契約書を最初から読む' },
      { label: '条項探し', detail: 'リスク・期限・金額を目視で探す' },
      { label: '抜粋', detail: '該当箇所をコピーして表に転記' },
      { label: '確認', detail: '抜け漏れがないか二重チェック' },
    ],
  },
  after: {
    title: 'AI介入後の流れ',
    summary: '必要な項目だけ抜き出し、原文と連動して確認できる。',
    steps: [
      { label: 'アップロード', detail: '契約書・DD資料を送る' },
      { label: '抽出', detail: 'テンプレートに沿って重要項目を抜き出す' },
      { label: '原文連動', detail: '結果をクリックすると該当箇所がハイライト' },
    ],
  },
  relatedDemo: {
    slug: 'document-to-extraction',
    label: '文書 → 抽出',
    href: `${GALLERY_BASE}/document-to-extraction`,
    description:
      '契約・DDサンプルで、文書から必要情報が抽出される流れを体験できます。',
  },
  contactHref: '/contact?service=ai-consulting&intent=cases&case=dd-document-extraction',
  status: 'published',
}
