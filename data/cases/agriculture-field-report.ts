import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const agricultureFieldReport: CaseStudy = {
  slug: 'agriculture-field-report',
  industry: 'agriculture',
  industryLabel: '農業',
  title: '畑の記録が、机の上でまとまらない。',
  subtitle: '農業 × 現場報告の自動化',
  lead:
    '写真・メモ・数値を手で集め、報告書を一から作る流れを、素材アップロードから完成報告書候補まで一気に変える活用イメージです。',
  metaTitle: '農業 × 現場報告の自動化 | 活用イメージ | ideal',
  metaDescription:
    '農業現場の記録・報告を、手作業の集約から、複数素材の統合→報告書生成へ。関連デモを体験できます。',
  tags: ['農業', '現場報告', '写真', 'レポート'],
  pain: {
    who: '生産者・営農指導・現場報告の取りまとめ担当',
    headline: '素材はある。なのに、報告書にすると半日かかる。',
    body: '畑では写真もメモも残している。あとでスマホ・紙・数値表を集め、日付や圃場を手で並べ、WordやExcelで一から書き起こす。情報の不足ではなく、「まとめる工程」が重い、よくある現場の話です。',
  },
  outcomes: [
    '写真・音声・メモ・数値が、参照元付きの報告書候補にまとまる',
    '机上での集約・書き起こしの時間が減る方向に寄せられる',
    '「何を根拠に書いたか」が追いやすくなり、確認が早くなる',
  ],
  demoScope: {
    simpleShows:
      '現場報告サンプルで、複数素材が報告書にまとまる流れを体験できます。',
    simpleLimits:
      '貴社の報告書体裁や承認フローは、要件整理のあとに合わせます。生成文を無修正で提出する前提ではありません。',
  },
  fit: {
    goodFor: [
      '現場素材はあるが、報告書作成に時間がかかっているチーム',
      '報告の章立て・必須項目がある程度決まっている業務',
      '参照元を残したまま、下書き速度を上げたい場合',
    ],
    notIdealFor: [
      '報告書のフォーマットが毎回ゼロから変わり、テンプレ化できない場合',
      '素材そのものが残せず、入力手段が取れない現場',
      '生成文を人間が一切確認せず提出したい場合',
    ],
  },
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
  contactHref:
    '/contact?service=ai-consulting&intent=cases&case=agriculture-field-report',
  status: 'published',
}
