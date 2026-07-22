import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const knowledgeInternalSearch: CaseStudy = {
  slug: 'knowledge-internal-search',
  industry: 'internal',
  industryLabel: '社内 / ナレッジ',
  title: '探すから、聞けば見つかるへ。',
  subtitle: '社内 × 規程・マニュアルの根拠付き回答',
  lead:
    'フォルダを探し回り、口頭で聞き直す流れを、質問すると回答と根拠文書がセットで返る形へ変える活用イメージです。',
  metaTitle: '社内ナレッジ × 根拠付き検索 | 活用イメージ | ideal',
  metaDescription:
    '規程・マニュアルへの問い合わせを、探す負担から、回答と出典のセットへ。関連デモを体験できます。',
  tags: ['規程', 'マニュアル', 'FAQ', '問い合わせ'],
  pain: {
    who: '総務・人事・現場リーダー・ヘルプデスク',
    headline: '正解は社内にあるのに、たどり着くまでが仕事になる。',
    body: '規程やマニュアルは更新されている。それでも「どこに書いてあるか」が分からず、フォルダを開き、詳しい人に聞く。回答はもらえても、根拠のページが共有されないまま、同じ質問が繰り返されます。',
  },
  outcomes: [
    '質問に対して、回答と出典が同時に得られるイメージが持てる',
    '探し回る時間と、属人的な口頭回答への依存が減る方向に寄せられる',
    '「何を根拠にそう言ったか」を残しやすくなり、問い合わせ対応が揃う',
  ],
  demoScope: {
    simpleShows:
      '社内ナレッジのサンプルで、質問から回答＋根拠が返る流れを短い時間で体験できます。',
    simpleLimits:
      '全社文書の一括取り込みや、回答の法的・人事的な正しさの保証は含みません。対象コーパスと権限設計が前提です。',
    externalShows:
      '社内ナレッジAIデモで、規程・マニュアルへの質問体験を業務画面寄りに確かめられます。',
  },
  fit: {
    goodFor: [
      '同じ社内問い合わせが繰り返し発生しているチーム',
      '規程・マニュアル・FAQが文書として存在する組織',
      '回答だけでなく、根拠の提示まで揃えたい場合',
    ],
    notIdealFor: [
      '文書がほぼ無く、ナレッジが口頭だけに閉じている場合（先に文書化が必要）',
      '回答を無確認で最終決定に使いたい場合',
      '機密文書を権限設計なしで広く検索させたい場合',
    ],
  },
  before: {
    title: 'いまの流れ',
    summary: '資料はあるのに、探すこと自体がボトルネックになる。',
    steps: [
      { label: '質問発生', detail: '現場や社員から問い合わせが来る' },
      { label: '探索', detail: 'フォルダ・共有ドライブ・チャット履歴を探す' },
      { label: '口頭確認', detail: '詳しい人に聞き、根拠ページは曖昧なまま' },
      { label: '回答', detail: 'その場しのぎで返し、同じ質問が再発する' },
    ],
  },
  after: {
    title: 'AI介入後の流れ',
    summary: '聞けば、回答と出典がセットで返ってくる。',
    steps: [
      { label: '質問', detail: '自然な言葉で聞く' },
      { label: '回答', detail: '要点を整理して返す' },
      { label: '根拠提示', detail: '参照した規程・マニュアル箇所を添える' },
    ],
  },
  relatedDemo: {
    slug: 'knowledge-to-search',
    label: 'ナレッジ → 検索',
    href: `${GALLERY_BASE}/knowledge-to-search`,
    description:
      '社内ナレッジサンプルで、質問に回答と根拠がセットで返る流れを体験できます。',
  },
  externalDemo: {
    label: '社内ナレッジAI',
    href: 'https://internal-knowledge-demo.vercel.app/',
  },
  contactHref:
    '/contact?service=ai-consulting&intent=cases&case=knowledge-internal-search',
  status: 'published',
}
