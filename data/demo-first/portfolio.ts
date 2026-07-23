import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export type PortfolioStatus = 'ready' | 'coming_soon'

export type PortfolioDemo = {
  id: string
  title: string
  lead: string
  tags: string[]
  status: PortfolioStatus
  /** カード用サムネイル（/public 配下） */
  image: string
  /** サイト内サンプル */
  sampleHref?: string
  /** 本格/外部体験 */
  externalDemoUrl?: string
  /** 外部デモ向け補足（ログイン案内など） */
  externalNote?: string
}

/** 外部デモ URL（業界カード・ポートフォリオで共有） */
export const EXTERNAL_DEMO_URLS = {
  construction: 'https://kanri-kensetsu.vercel.app/login',
  care: 'https://kaigo-operation-demo.vercel.app/',
  retail: 'https://customer-support-demo-lime.vercel.app/',
  manufacturing: 'https://product-flow-jet.vercel.app/manufacturing',
  internalKnowledge: 'https://internal-knowledge-demo.vercel.app/',
  roiSimulator: 'https://roi-simulator-eta.vercel.app/',
  ddDemo: 'https://dd-demo-red.vercel.app/',
  matching: 'https://hookapp-demo.vercel.app/',
  fieldDandori: 'https://rainbow-tarsier-5ce845.netlify.app/',
  voiceKarte: 'https://lambent-smakager-7bcf0a.netlify.app/',
} as const

/** @deprecated INDUSTRY_EXTERNAL_DEMOS 互換。EXTERNAL_DEMO_URLS を使う */
export const INDUSTRY_EXTERNAL_DEMOS = {
  construction: EXTERNAL_DEMO_URLS.construction,
  care: EXTERNAL_DEMO_URLS.care,
  retail: EXTERNAL_DEMO_URLS.retail,
  manufacturing: EXTERNAL_DEMO_URLS.manufacturing,
} as const

export const portfolioDemos: PortfolioDemo[] = [
  {
    id: 'construction',
    title: '建設・現場管理デモ',
    lead: '現場の記録・確認の流れを、業務アプリとして体験できます。',
    tags: ['建設', '現場管理'],
    status: 'ready',
    image: '/images/lp/construction.png',
    sampleHref: `${GALLERY_BASE}/photo-to-classification`,
    externalDemoUrl: EXTERNAL_DEMO_URLS.construction,
    externalNote:
      'ログイン画面が開きます。ページ内の「デモアカウント」から体験できます。',
  },
  {
    id: 'manufacturing',
    title: '製造の判断デモ',
    lead: '現場判断・手順改定・変更影響の3テーマで、製造の判断を体験できます。',
    tags: ['製造', '判断', 'ナレッジ'],
    status: 'ready',
    image: '/images/lp/manufacturing.png',
    sampleHref: `${GALLERY_BASE}/knowledge-to-search`,
    externalDemoUrl: EXTERNAL_DEMO_URLS.manufacturing,
  },
  {
    id: 'care',
    title: '医療・福祉ケア記録デモ',
    lead: '現場の記録負担を減らすケア業務の流れを体験できます。',
    tags: ['医療', '介護'],
    status: 'ready',
    image: '/images/lp/care.png',
    sampleHref: `${GALLERY_BASE}/voice-to-structured`,
    externalDemoUrl: EXTERNAL_DEMO_URLS.care,
  },
  {
    id: 'customer-chat',
    title: 'カスタマーサポート・チャット',
    lead: '業種別の案内チャットで、定型問い合わせへの自動応答を体験できます。',
    tags: ['小売', 'サポート'],
    status: 'ready',
    image: '/images/lp/customer.png',
    externalDemoUrl: EXTERNAL_DEMO_URLS.retail,
  },
  {
    id: 'internal-knowledge',
    title: '社内ナレッジAI',
    lead: '規程・マニュアルへの質問に、回答と根拠をセットで返せます。',
    tags: ['ナレッジ', '社内'],
    status: 'ready',
    image: '/images/lp/knowledge.png',
    sampleHref: `${GALLERY_BASE}/knowledge-to-search`,
    externalDemoUrl: EXTERNAL_DEMO_URLS.internalKnowledge,
  },
  {
    id: 'roi-simulator',
    title: '投資対効果チェッカー',
    lead: '導入でいくら得して、何ヶ月で元が取れるかをシミュレーションできます。',
    tags: ['ROI', '試算'],
    status: 'ready',
    image: '/images/lp/analytical.png',
    externalDemoUrl: EXTERNAL_DEMO_URLS.roiSimulator,
  },
  {
    id: 'dd-demo',
    title: 'DD Intelligence デモ',
    lead: '文書・データからDD〜EXITまでの業務変化をコンセプト実証として見せます。',
    tags: ['DD', '文書'],
    status: 'ready',
    image: '/images/lp/document_workflow.png',
    sampleHref: `${GALLERY_BASE}/document-to-extraction`,
    externalDemoUrl: EXTERNAL_DEMO_URLS.ddDemo,
  },
  {
    id: 'matching',
    title: '事業者マッチングデモ',
    lead: '事業者どうしをつなぐマッチング体験のサンプルです。',
    tags: ['マッチング', 'ネットワーク'],
    status: 'ready',
    image: '/images/lp/business_maching.png',
    externalDemoUrl: EXTERNAL_DEMO_URLS.matching,
  },
  {
    id: 'field-dandori',
    title: '現場段取りサポート',
    lead: '現場条件から申請・人員・書類の段取り案を自動で組み上げます。',
    tags: ['建設', '段取り'],
    status: 'ready',
    image: '/images/lp/multiple_inputs.png',
    externalDemoUrl: EXTERNAL_DEMO_URLS.fieldDandori,
  },
  {
    id: 'voice-karte',
    title: '音声自動カルテ',
    lead: '音声から申し送りカルテの下書きまでを一気に体験できます。',
    tags: ['介護', '音声'],
    status: 'ready',
    image: '/images/lp/voicememo.png',
    sampleHref: `${GALLERY_BASE}/voice-to-structured`,
    externalDemoUrl: EXTERNAL_DEMO_URLS.voiceKarte,
  },
  {
    id: 'ocr-experience',
    title: 'OCR体験デモ',
    lead: '自分の画像を読み取り、書類作成につなげる体験を予定しています。',
    tags: ['OCR', '書類'],
    status: 'coming_soon',
    image: '/images/lp/document_workflow.png',
  },
  {
    id: 'restaurant-shift',
    title: '飲食店シフト管理デモ',
    lead: 'シフト調整の負担を減らすデモを準備中です。',
    tags: ['飲食', 'シフト'],
    status: 'coming_soon',
    image: '/images/lp/analytical.png',
  },
  {
    id: 'medical-turnover',
    title: '医療従事者離職率改善デモ',
    lead: '現場定着に向けた改善デモを準備中です。',
    tags: ['医療', '人事'],
    status: 'coming_soon',
    image: '/images/lp/analytical.png',
  },
]

export function getReadyPortfolioDemos(): PortfolioDemo[] {
  return portfolioDemos.filter((d) => d.status === 'ready')
}
