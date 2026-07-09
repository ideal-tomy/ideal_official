export type CapabilityStatus = 'ready' | 'coming_soon'

export interface Capability {
  id: string
  slug: string
  number: number
  title: string
  subtitle: string
  englishLabel: string
  description: string
  showcaseLead: string
  tags: string[]
  before: string
  after: string
  href: string
  status: CapabilityStatus
  /** カード用サムネイル（/public 配下） */
  image: string
}

export const GALLERY_BASE = '/ai-capability-gallery'

/** LP 共通画像パス */
export const galleryImages = {
  hero: '/images/lp/hero.png',
  background: '/images/lp/technology_background.png',
} as const

export const capabilities: Capability[] = [
  {
    id: 'voice-to-structured',
    slug: 'voice-to-structured',
    number: 1,
    title: '話すだけで、記録が完成する。',
    subtitle: '音声 → 構造化',
    englishLabel: 'VOICE → STRUCTURED DATA',
    description: '音声を、業務で使える構造化データへ変換。',
    showcaseLead:
      '音声を文字にするだけではなく、業務で使える構造化データへ変換します。',
    tags: ['医療', '介護', '建設', '営業'],
    before: '会話や報告が記録されない',
    after: '必要項目が自動整理される',
    href: `${GALLERY_BASE}/voice-to-structured`,
    status: 'ready',
    image: '/images/lp/voicememo.png',
  },
  {
    id: 'photo-to-classification',
    slug: 'photo-to-classification',
    number: 2,
    title: '送るだけで、写真が整理される。',
    subtitle: '写真 → 分類',
    englishLabel: 'PHOTO → CLASSIFICATION',
    description: '画像の内容理解・分類・命名・保存整理まで自動化。',
    showcaseLead:
      '画像を送るだけで、内容理解・分類・命名・保存整理まで一気通貫で進みます。',
    tags: ['建設', '不動産', '製造', '保険'],
    before: 'IMG_4832.jpg のまま散在',
    after: '意味のある名前と保存先に整理',
    href: `${GALLERY_BASE}/photo-to-classification`,
    status: 'ready',
    image: '/images/lp/autophoto.png',
  },
  {
    id: 'document-to-extraction',
    slug: 'document-to-extraction',
    number: 3,
    title: '文書から、意思決定に必要な情報だけを。',
    subtitle: '文書 → 抽出',
    englishLabel: 'DOCUMENT → EXTRACTION',
    description: 'PDFや文書から必要情報を抽出し、判断可能な形へ。',
    showcaseLead:
      '読む負担を減らし、契約・請求・点検の判断に必要な項目だけを抜き出します。',
    tags: ['契約', '請求', 'DD', '点検'],
    before: '重要条項を目視で探す',
    after: '抽出結果と原文が連動',
    href: `${GALLERY_BASE}/document-to-extraction`,
    status: 'ready',
    image: '/images/lp/document_workflow.png',
  },
  {
    id: 'data-to-prediction',
    slug: 'data-to-prediction',
    number: 4,
    title: '過去データから、次の判断を支援する。',
    subtitle: 'データ → 予測',
    englishLabel: 'DATA → PREDICTION',
    description: '来客数・需要・故障など、未来の意思決定を支援。',
    showcaseLead:
      '予測値だけでなく、信頼区間と影響要因をセットで示し、次の判断を支援します。',
    tags: ['小売', '物流', '製造', '人事'],
    before: '感覚と経験に頼る',
    after: '予測値と影響要因をセットで提示',
    href: `${GALLERY_BASE}/data-to-prediction`,
    status: 'ready',
    image: '/images/lp/analytical.png',
  },
  {
    id: 'workflow-to-automation',
    slug: 'workflow-to-automation',
    number: 5,
    title: '繰り返し作業を、一連の流れで代行する。',
    subtitle: '業務 → 自動化',
    englishLabel: 'WORKFLOW → AUTOMATION',
    description: '受信から登録・通知まで、定型業務を自動処理。',
    showcaseLead:
      'メール確認から登録・通知まで、複数ステップの業務を流れごと代行します。',
    tags: ['メール', 'PDF', '登録', '通知'],
    before: '人手で同じ手順を繰り返す',
    after: '複数ステップを一気通貫で実行',
    href: `${GALLERY_BASE}/workflow-to-automation`,
    status: 'ready',
    image: '/images/lp/workflow_prosess.png',
  },
  {
    id: 'knowledge-to-search',
    slug: 'knowledge-to-search',
    number: 6,
    title: '探すから、聞けば見つかるへ。',
    subtitle: 'ナレッジ → 検索',
    englishLabel: 'KNOWLEDGE → SEARCH',
    description: '社内規程やマニュアルを、根拠付きで回答。',
    showcaseLead:
      '質問すると回答だけでなく根拠文書まで返り、探す時間をそのまま削減します。',
    tags: ['規程', 'マニュアル', 'FAQ', '問い合わせ'],
    before: '資料を何度も探し回る',
    after: '回答と出典が同時に得られる',
    href: `${GALLERY_BASE}/knowledge-to-search`,
    status: 'ready',
    image: '/images/lp/knowledge.png',
  },
  {
    id: 'multi-input-to-report',
    slug: 'multi-input-to-report',
    number: 7,
    title: '素材を集めて、報告書が完成する。',
    subtitle: '複数情報 → 報告書',
    englishLabel: 'MULTI-INPUT → REPORT',
    description: '写真・音声・メモ・数値を統合し、業務文書を生成。',
    showcaseLead:
      '音声・写真・文書・数値をまとめ、参照元付きの完成報告書まで一気に作ります。',
    tags: ['現場報告', '介護', '調査', '監査'],
    before: '素材を手作業でまとめる',
    after: '参照元付きの完成報告書',
    href: `${GALLERY_BASE}/multi-input-to-report`,
    status: 'ready',
    image: '/images/lp/multiple_inputs.png',
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
    title: '自社でも使えるか相談する',
    description:
      'AIコンシェルジュで課題・必要な機能・概算の参考まで整理し、お問い合わせへ引き継ぎます。',
  },
]

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug)
}

export function getReadyCapabilities(): Capability[] {
  return capabilities.filter((c) => c.status === 'ready')
}
