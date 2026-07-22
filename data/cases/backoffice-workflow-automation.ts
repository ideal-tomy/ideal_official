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
