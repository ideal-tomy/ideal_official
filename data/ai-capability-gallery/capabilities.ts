export type CapabilityStatus = 'ready' | 'coming_soon'

export interface Capability {
  id: string
  slug: string
  number: number
  title: string
  subtitle: string
  description: string
  tags: string[]
  before: string
  after: string
  href: string
  status: CapabilityStatus
}

export const GALLERY_BASE = '/ai-capability-gallery'

export const capabilities: Capability[] = [
  {
    id: 'voice-to-structured',
    slug: 'voice-to-structured',
    number: 1,
    title: '話すだけで、記録が完成する。',
    subtitle: '音声 → 構造化',
    description: '音声を、業務で使える構造化データへ変換。',
    tags: ['医療', '介護', '建設', '営業'],
    before: '会話や報告が記録されない',
    after: '必要項目が自動整理される',
    href: `${GALLERY_BASE}/voice-to-structured`,
    status: 'coming_soon',
  },
  {
    id: 'photo-to-classification',
    slug: 'photo-to-classification',
    number: 2,
    title: '送るだけで、写真が整理される。',
    subtitle: '写真 → 分類',
    description: '画像の内容理解・分類・命名・保存整理まで自動化。',
    tags: ['建設', '不動産', '製造', '保険'],
    before: 'IMG_4832.jpg のまま散在',
    after: '意味のある名前と保存先に整理',
    href: `${GALLERY_BASE}/photo-to-classification`,
    status: 'ready',
  },
  {
    id: 'document-to-extraction',
    slug: 'document-to-extraction',
    number: 3,
    title: '文書から、意思決定に必要な情報だけを。',
    subtitle: '文書 → 抽出',
    description: 'PDFや文書から必要情報を抽出し、判断可能な形へ。',
    tags: ['契約', '請求', 'DD', '点検'],
    before: '重要条項を目視で探す',
    after: '抽出結果と原文が連動',
    href: `${GALLERY_BASE}/document-to-extraction`,
    status: 'coming_soon',
  },
  {
    id: 'data-to-prediction',
    slug: 'data-to-prediction',
    number: 4,
    title: '過去データから、次の判断を支援する。',
    subtitle: 'データ → 予測',
    description: '来客数・需要・故障など、未来の意思決定を支援。',
    tags: ['小売', '物流', '製造', '人事'],
    before: '感覚と経験に頼る',
    after: '予測値と影響要因をセットで提示',
    href: `${GALLERY_BASE}/data-to-prediction`,
    status: 'coming_soon',
  },
  {
    id: 'workflow-to-automation',
    slug: 'workflow-to-automation',
    number: 5,
    title: '繰り返し作業を、一連の流れで代行する。',
    subtitle: '業務 → 自動化',
    description: '受信から登録・通知まで、定型業務を自動処理。',
    tags: ['メール', 'PDF', '登録', '通知'],
    before: '人手で同じ手順を繰り返す',
    after: '複数ステップを一気通貫で実行',
    href: `${GALLERY_BASE}/workflow-to-automation`,
    status: 'coming_soon',
  },
  {
    id: 'knowledge-to-search',
    slug: 'knowledge-to-search',
    number: 6,
    title: '探すから、聞けば見つかるへ。',
    subtitle: 'ナレッジ → 検索',
    description: '社内規程やマニュアルを、根拠付きで回答。',
    tags: ['規程', 'マニュアル', 'FAQ', '問い合わせ'],
    before: '資料を何度も探し回る',
    after: '回答と出典が同時に得られる',
    href: `${GALLERY_BASE}/knowledge-to-search`,
    status: 'coming_soon',
  },
  {
    id: 'multi-input-to-report',
    slug: 'multi-input-to-report',
    number: 7,
    title: '素材を集めて、報告書が完成する。',
    subtitle: '複数情報 → 報告書',
    description: '写真・音声・メモ・数値を統合し、業務文書を生成。',
    tags: ['現場報告', '介護', '調査', '監査'],
    before: '素材を手作業でまとめる',
    after: '参照元付きの完成報告書',
    href: `${GALLERY_BASE}/multi-input-to-report`,
    status: 'coming_soon',
  },
]

export const howToUseSteps = [
  {
    title: '気になるデモを選ぶ',
    description: '7つの基本パターンから、自社業務に近いものを見つけます。',
  },
  {
    title: '実際に触ってみる',
    description: 'サンプルデータで、入力から結果までの変化を体験します。',
  },
  {
    title: '自社向けの活用案を相談する',
    description: 'デモをベースに、業界特化版やプロトタイプの相談へ進みます。',
  },
]

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug)
}

export function getReadyCapabilities(): Capability[] {
  return capabilities.filter((c) => c.status === 'ready')
}
