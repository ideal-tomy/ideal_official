import {
  capabilities,
  getCapabilityBySlug,
  type Capability,
} from '@/data/ai-capability-gallery/capabilities'
import { getCaseBySlug, getCaseHref } from '@/data/cases'

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
  /** 事例詳細（製造はなし） */
  detailHref?: string
  tryHref: string
  tryLabel: string
}

export function getIndustryCards(): IndustryCard[] {
  const construction = getCaseBySlug('construction-photo-sorting')
  const care = getCaseBySlug('care-voice-records')
  const retail = getCaseBySlug('retail-demand-prediction')
  const knowledge = getCapabilityBySlug('knowledge-to-search')

  return [
    {
      id: 'construction',
      title: '建設・設備',
      englishLabel: 'Construction',
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
      tryHref: construction?.relatedDemo.href ?? '/ai-capability-gallery/photo-to-classification',
      tryLabel: construction?.relatedDemo.label ?? '写真 → 分類',
    },
    {
      id: 'care',
      title: '医療・福祉',
      englishLabel: 'Care & Welfare',
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
      tryHref: care?.relatedDemo.href ?? '/ai-capability-gallery/voice-to-structured',
      tryLabel: care?.relatedDemo.label ?? '音声 → 構造化',
    },
    {
      id: 'retail',
      title: '小売・サービス',
      englishLabel: 'Retail & Service',
      issues: retail
        ? [
            retail.before.summary,
            ...retail.before.steps.slice(0, 1).map((s) => `${s.label}：${s.detail}`),
          ]
        : [],
      solutions: retail
        ? [
            retail.after.summary,
            ...retail.after.steps.slice(-1).map((s) => `${s.label}：${s.detail}`),
          ]
        : [],
      detailHref: retail ? getCaseHref(retail.slug) : undefined,
      tryHref: retail?.relatedDemo.href ?? '/ai-capability-gallery/data-to-prediction',
      tryLabel: retail?.relatedDemo.label ?? 'データ → 予測',
    },
    {
      id: 'manufacturing',
      title: '製造',
      englishLabel: 'Manufacturing',
      issues: [
        '判断基準がベテランの頭の中にあり、計画・調整が属人化している',
        '規程やマニュアルを何度も探し回り、根拠付きの判断が遅い',
      ],
      solutions: [
        '暗黙知をナレッジ化し、誰でも根拠付きで答えられる環境へ',
        knowledge?.after ?? '回答と出典が同時に得られる',
      ],
      detailHref: '/services/ai-consulting',
      tryHref: knowledge?.href ?? '/ai-capability-gallery/knowledge-to-search',
      tryLabel: knowledge?.subtitle ?? 'ナレッジ → 検索',
    },
  ]
}

/** マーキー用チップ（現行デモ／事例タグ） */
export const MARQUEE_CHIPS: { industry: string; demo: string }[] = [
  { industry: '建設', demo: '写真分類' },
  { industry: '介護', demo: '音声構造化' },
  { industry: '小売', demo: '需要予測' },
  { industry: '製造', demo: 'ナレッジ検索' },
  { industry: '契約・DD', demo: '文書抽出' },
  { industry: 'バックオフィス', demo: '業務自動化' },
  { industry: '農業', demo: '報告書生成' },
  { industry: '現場', demo: '複数入力レポート' },
]
