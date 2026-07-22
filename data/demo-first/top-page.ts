import {
  capabilities,
  getCapabilityBySlug,
  type Capability,
} from '@/data/ai-capability-gallery/capabilities'
import { getCaseBySlug, getCaseHref } from '@/data/cases'
import { INDUSTRY_EXTERNAL_DEMOS } from '@/data/demo-first/portfolio'

/** Showcase 代表3本（業界バラエティ優先） */
export const SHOWCASE_SLUGS = [
  'photo-to-classification',
  'knowledge-to-search',
  'voice-to-structured',
] as const

export function getShowcaseCapabilities(): Capability[] {
  return SHOWCASE_SLUGS.map((slug) => getCapabilityBySlug(slug)).filter(
    (c): c is Capability => Boolean(c),
  )
}

/** @deprecated トップ Gallery は portfolio へ移行。互換のため残置 */
export function getGalleryCapabilities(): Capability[] {
  const featured = new Set<string>(SHOWCASE_SLUGS)
  return capabilities.filter((c) => c.status === 'ready' && !featured.has(c.slug))
}

export type IndustryCard = {
  id: string
  title: string
  englishLabel: string
  issues: string[]
  solutions: string[]
  /** カード用ビジュアル（/images/lp — ThemeImage で _light 切替） */
  image: string
  /** 事例詳細（製造は AI サービスへ） */
  detailHref?: string
  /** detailHref 用ラベル（例: 流れを見る / AIサービスを見る） */
  detailLabel?: string
  /** 業務デモ（外部 URL 可） */
  tryHref: string
  tryLabel: string
  /** true のとき新規タブで外部デモを開く */
  tryExternal?: boolean
  /** 外部デモ向けの補足（ログイン案内など） */
  tryNote?: string
}

export { INDUSTRY_EXTERNAL_DEMOS }

export function getIndustryCards(): IndustryCard[] {
  const construction = getCaseBySlug('construction-photo-sorting')
  const care = getCaseBySlug('care-voice-records')
  const knowledge = getCapabilityBySlug('knowledge-to-search')

  return [
    {
      id: 'construction',
      title: '建設・設備',
      englishLabel: 'Construction',
      image: '/images/lp/construction.png',
      issues: construction
        ? [
            construction.before.summary,
            ...construction.before.steps.slice(0, 1).map((s) => `${s.label}：${s.detail}`),
          ]
        : [],
      solutions: construction
        ? [
            construction.after.summary,
            ...construction.after.steps.slice(-1).map((s) => `${s.label}：${s.detail}`),
          ]
        : [],
      detailHref: construction ? getCaseHref(construction.slug) : undefined,
      detailLabel: '流れを見る',
      tryHref: INDUSTRY_EXTERNAL_DEMOS.construction,
      tryLabel: '現場管理',
      tryExternal: true,
      tryNote:
        'ログイン画面が開きます。ページ内の「デモアカウント」から体験できます。',
    },
    {
      id: 'care',
      title: '医療・福祉',
      englishLabel: 'Care & Welfare',
      image: '/images/lp/care.png',
      issues: care
        ? [
            care.before.summary,
            ...care.before.steps.slice(0, 1).map((s) => `${s.label}：${s.detail}`),
          ]
        : [],
      solutions: care
        ? [
            care.after.summary,
            ...care.after.steps.slice(-1).map((s) => `${s.label}：${s.detail}`),
          ]
        : [],
      detailHref: care ? getCaseHref(care.slug) : undefined,
      detailLabel: '流れを見る',
      tryHref: INDUSTRY_EXTERNAL_DEMOS.care,
      tryLabel: 'ケア記録',
      tryExternal: true,
    },
    {
      id: 'retail',
      title: '小売・サービス',
      englishLabel: 'Retail & Service',
      image: '/images/lp/retail.png',
      issues: [
        'よくある問い合わせ（商品・予約・返品など）に、毎回人が答えている',
        '営業時間外や混雑時に案内が止まり、取りこぼしが起きる',
      ],
      solutions: [
        '業種別のチャット案内で、定型の質問にその場で答えられる',
        '必要なときだけ有人対応へつなぎ、応対の負担を減らせる',
      ],
      detailHref: '/services/ai-consulting',
      detailLabel: 'AIサービスを見る',
      tryHref: INDUSTRY_EXTERNAL_DEMOS.retail,
      tryLabel: 'カスタマーサポート',
      tryExternal: true,
    },
    {
      id: 'manufacturing',
      title: '製造',
      englishLabel: 'Manufacturing',
      image: '/images/lp/manufacturing.png',
      issues: [
        '判断基準がベテランの頭の中にあり、計画・調整が属人化している',
        '規程やマニュアルを何度も探し回り、根拠付きの判断が遅い',
      ],
      solutions: [
        '暗黙知をナレッジ化し、誰でも根拠付きで答えられる環境へ',
        knowledge?.after ?? '回答と出典が同時に得られる',
      ],
      detailHref: '/services/ai-consulting',
      detailLabel: 'AIサービスを見る',
      tryHref: INDUSTRY_EXTERNAL_DEMOS.manufacturing,
      tryLabel: '製造フロー',
      tryExternal: true,
    },
  ]
}

/** マーキー用チップ（現行デモ／事例タグ） */
export const MARQUEE_CHIPS: { industry: string; demo: string }[] = [
  { industry: '建設', demo: '写真分類' },
  { industry: '介護', demo: '音声構造化' },
  { industry: '小売', demo: 'チャット案内' },
  { industry: '製造', demo: 'ナレッジ検索' },
  { industry: '契約・DD', demo: '文書抽出' },
  { industry: 'バックオフィス', demo: '業務自動化' },
  { industry: '農業', demo: '報告書生成' },
  { industry: '現場', demo: '複数入力レポート' },
]
