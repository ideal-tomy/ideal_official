import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const backofficeWorkflowAutomation: CaseStudy = {
  slug: 'backoffice-workflow-automation',
  industry: 'backoffice',
  industryLabel: 'バックオフィス',
  title: '同じ手順を、毎日ひとりが回している。',
  subtitle: 'バックオフィス × 定型業務の自動化',
  lead:
    '受信・確認・登録・通知の繰り返しを、メールやPDFが届いた瞬間から一連のフローで代行する活用イメージです。',
  metaTitle: 'バックオフィス × 業務自動化 | 活用イメージ | ideal',
  metaDescription:
    '定型の受信→登録→通知フローを、人手の繰り返しから一気通貫の自動処理へ。関連デモを体験できます。',
  tags: ['バックオフィス', '自動化', 'メール', '登録'],
  pain: {
    who: '事務・経理・オペレーション担当',
    headline: '例外より、同じ手順の繰り返しに一日が消える。',
    body: 'メールやPDFが届くたびに、目視で確認し、システムに手入力し、関係者へ通知する。手順は分かっているのに、毎回人がつないでいる。例外対応より前に、定型の往復でキャパが埋まっていきます。',
  },
  outcomes: [
    '受信をきっかけに、登録・通知まで流れで進むイメージが持てる',
    '人が見るべき確認ポイントを残しつつ、単純反復を減らせる',
    '「誰かが回す」依存が下がり、抜け漏れの見え方が揃いやすくなる',
  ],
  demoScope: {
    simpleShows:
      'メール→登録→通知のサンプルで、複数ステップが一気通貫で進む流れを体験できます。',
    simpleLimits:
      '既存システム連携や承認フローの本番実装は、要件と権限確認のあとに進めます。例外ゼロの自動化は想定しません。',
  },
  fit: {
    goodFor: [
      '受信・確認・登録・通知が毎日繰り返されているチーム',
      '典型パターンが決まっており、例外は人が見ればよい業務',
      'まず「流れごと代行」の感覚を共有したい管理者',
    ],
    notIdealFor: [
      '案件ごとに手順がまったく異なり、定型化できない業務ばかりの場合',
      '人の承認を一切挟まず、全自動で完結させたい場合',
      '連携先システムの権限・APIが一切取れない場合（先に環境整理が必要）',
    ],
  },
  before: {
    title: 'いまの流れ',
    summary: '毎回同じ手順を、人が確認しながら進める。',
    steps: [
      { label: '受信', detail: 'メールやPDFが届く' },
      { label: '確認', detail: '内容を目視で読み、必要項目を把握' },
      { label: '登録', detail: '社内システムや台帳へ手入力' },
      { label: '通知', detail: '関係者へ連絡・共有' },
    ],
  },
  after: {
    title: 'AI介入後の流れ',
    summary: '届いた瞬間から、登録と通知まで流れで実行される。',
    steps: [
      { label: '受信', detail: 'メール・PDFをトリガーに起動' },
      { label: '解析', detail: '内容を読み取り、登録項目を特定' },
      { label: '一気通貫', detail: '登録・通知まで自動で実行' },
    ],
  },
  relatedDemo: {
    slug: 'workflow-to-automation',
    label: '業務 → 自動化',
    href: `${GALLERY_BASE}/workflow-to-automation`,
    description:
      'メール→登録→通知のサンプルで、複数ステップが一気通貫で進む流れを体験できます。',
  },
  contactHref:
    '/contact?service=ai-consulting&intent=cases&case=backoffice-workflow-automation',
  status: 'published',
}
