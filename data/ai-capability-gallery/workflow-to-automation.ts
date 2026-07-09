export interface WorkflowStep {
  id: string
  label: string
  detail: string
}

export interface WorkflowResult {
  registeredId: string
  category: string
  status: string
  notification: string
}

export interface WorkflowSampleSet {
  id: string
  name: string
  industry: string
  email: {
    from: string
    subject: string
    body: string
    attachment?: string
  }
  steps: WorkflowStep[]
  result: WorkflowResult
}

export const workflowProcessingSteps = [
  'メールを受信…',
  '内容を判定中…',
  'PDFから情報を抽出中…',
  'システムへ登録中…',
  '関係者へ通知を送信中…',
  '自動処理が完了しました',
]

export const workflowSampleSets: WorkflowSampleSet[] = [
  {
    id: 'invoice-mail',
    name: '請求書メール処理',
    industry: 'バックオフィス',
    email: {
      from: 'billing@partner.co.jp',
      subject: '【請求書】2024年3月分 システム開発費',
      body: 'お世話になっております。3月分の請求書を添付いたします。支払期限は3月31日です。ご確認のほどよろしくお願いいたします。',
      attachment: 'invoice_202403.pdf',
    },
    steps: [
      { id: 's1', label: '受信', detail: '請求メールを受信トレイで検知' },
      { id: 's2', label: '判定', detail: '請求書カテゴリと判定（信頼度 96%）' },
      { id: 's3', label: '抽出', detail: '金額・支払期限・請求先をPDFから抽出' },
      { id: 's4', label: '登録', detail: '経理システムへ自動登録' },
      { id: 's5', label: '通知', detail: '経理担当へSlack通知を送信' },
    ],
    result: {
      registeredId: 'INV-2024-0312-001',
      category: '請求書',
      status: '登録完了',
      notification: '経理担当（山田）へ通知済み',
    },
  },
  {
    id: 'order-mail',
    name: '発注確認メール',
    industry: '物流',
    email: {
      from: 'orders@supplier.com',
      subject: 'Re: 発注確認 PO-8842',
      body: '発注内容を確認いたしました。納期は3月20日、数量100個で手配いたします。出荷完了時に再度ご連絡します。',
    },
    steps: [
      { id: 's1', label: '受信', detail: '発注確認メールを受信' },
      { id: 's2', label: '判定', detail: '発注関連メールと判定（信頼度 94%）' },
      { id: 's3', label: '抽出', detail: 'PO番号・納期・数量を抽出' },
      { id: 's4', label: '登録', detail: '発注管理システムを更新' },
      { id: 's5', label: '通知', detail: '調達担当へ納期確定を通知' },
    ],
    result: {
      registeredId: 'PO-8842',
      category: '発注確認',
      status: '納期確定',
      notification: '調達担当（佐藤）へ通知済み',
    },
  },
]

export const workflowDetailPage = {
  slug: 'workflow-to-automation',
  metaTitle: '業務 → 自動化 | AI Capability Demo Gallery | ideal',
  metaDescription:
    '受信から判定・抽出・登録・通知まで、定型業務を一気通貫で自動処理するデモを体験できます。',
  eyebrow: 'Workflow to Automation',
  title: '繰り返し作業を、一連の流れで代行する。',
  lead: '人が繰り返していた定型作業をAIが代行できることを見せます。単純なチャットではなく、複数ステップの業務を実行している様子が伝わります。',
  tags: ['メール', 'PDF', '登録', '通知'],
  beforeTitle: 'Before',
  beforeText: 'メール確認、PDF開封、システム入力、関係者への連絡を人手で繰り返す。',
  afterTitle: 'After',
  afterText: '受信から登録・通知まで、一連のステップが自動で実行される。',
}
