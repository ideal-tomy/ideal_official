import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const ddDocumentExtraction: CaseStudy = {
  slug: 'dd-document-extraction',
  industry: 'dd',
  industryLabel: 'DD / 契約',
  title: '契約書を読む時間が、判断のボトルネックになる。',
  subtitle: 'DD / 契約 × 文書からの情報抽出',
  lead:
    '通読・条項探し・抜粋転記。長い文書から必要情報を取り出す手作業を、アップロードから原文連動の抽出結果へ変える活用イメージです。',
  metaTitle: 'DD / 契約 × 文書抽出 | 活用イメージ | ideal',
  metaDescription:
    '契約書・DD資料のレビューを、通読→手作業から、必要項目の抽出と原文連動確認へ。関連デモを体験できます。',
  tags: ['DD', '契約', '文書', '抽出'],
  pain: {
    who: '法務・DD担当・契約レビュー担当',
    headline: '読むこと自体が仕事になって、判断が後ろにずれる。',
    body: '長い契約や資料を最初から通読し、リスク条項や期限を目で探す。見つかったら表に転記し、抜けがないかもう一度確認する。重要なのは判断なのに、その前の「探す・抜く」に時間が吸われがちです。',
  },
  outcomes: [
    '必要項目を先に抜き出し、原文と突き合わせながら確認できる',
    '通読の負荷が下がり、レビューの論点に早く入れる',
    '抜粋の転記ミスや、見落とし確認のコストを抑えやすい',
  ],
  demoScope: {
    simpleShows:
      '契約・DDサンプルで、文書から必要情報が抽出され・原文と連動する流れを体験できます。',
    simpleLimits:
      '法的助言の代替にはなりません。抽出テンプレや審査基準は貴社ルールに合わせて設計します。',
    externalShows:
      'DD Intelligence デモで、文書・データ周りの業務変化のコンセプトを広く見られます。',
  },
  fit: {
    goodFor: [
      '契約・請求・点検など、見る項目がパターン化しているレビュー',
      '通読と抜粋に時間がかかり、判断が遅れがちなチーム',
      '原文との対応づけを残したまま、確認速度を上げたい場合',
    ],
    notIdealFor: [
      '文書ごとに観点がまったく異なり、テンプレ化できない案件ばかりの場合',
      'AIの抽出結果を無確認で最終判断にしたい場合',
      'スキャン品質が極端に低く、文字起こし前提が崩れる資料のみの場合',
    ],
  },
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
  externalDemo: {
    label: 'DD Intelligence デモ',
    href: 'https://dd-demo-red.vercel.app/',
  },
  contactHref:
    '/contact?service=ai-consulting&intent=cases&case=dd-document-extraction',
  status: 'published',
}
