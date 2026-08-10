import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'
import { getCaseBySlug, getCaseHref } from '@/data/cases'
import {
  CONSTRUCTION_HUB_HREF,
  INDUSTRY_EXTERNAL_DEMOS,
} from '@/data/demo-first/portfolio'

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
      detailHref: '/demo/w/construction-record',
      detailLabel: '詳しく見る',
      tryHref: CONSTRUCTION_HUB_HREF,
      tryLabel: 'デモを直接開く',
      tryExternal: true,
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
        '判断基準がベテランの頭の中にあり、文書を探し回って判断が遅れる',
        '手順と標準の版ずれや、QC/QAの窓口の違いで現場が止まる',
      ],
      solutions: [
        '文書に聞いて、優先ルールと連絡先まで根拠付きで答えられる',
        knowledge?.after ?? '回答と出典が同時に得られる',
      ],
      detailHref: '/services/ai-consulting',
      detailLabel: 'AIサービスを見る',
      tryHref: INDUSTRY_EXTERNAL_DEMOS.manufacturing,
      tryLabel: '製造の判断（3体験）',
      tryExternal: true,
    },
  ]
}

/** マーキー用チップ（業種×現場課題。hasDemo は実デモ／事例あり） */
export type MarqueeChip = {
  industry: string
  demo: string
  hasDemo?: boolean
}

export const MARQUEE_CHIPS: MarqueeChip[] = [
  // Round 1 — デモ寄り先頭
  { industry: '建設', demo: '現場写真の整理', hasDemo: true },
  { industry: '介護', demo: '音声でケア記録', hasDemo: true },
  { industry: '製造', demo: '規程・マニュアル検索', hasDemo: true },
  { industry: '小売', demo: '需要・発注の判断', hasDemo: true },
  { industry: '法務', demo: '契約内容レビュー', hasDemo: true },
  { industry: 'バックオフィス', demo: '申請〜登録の自動化', hasDemo: true },
  { industry: '農業', demo: '圃場写真つき報告', hasDemo: true },
  { industry: '社内', demo: '規程を聞いて探す', hasDemo: true },
  // Round 2
  { industry: '建設', demo: '日報・記録の自動化', hasDemo: true },
  { industry: '介護', demo: '申し送りの構造化', hasDemo: true },
  { industry: '製造', demo: 'ナレッジ継承' },
  { industry: '小売', demo: '店舗FAQ案内', hasDemo: true },
  { industry: '法務', demo: 'デューデリジェンス', hasDemo: true },
  { industry: 'バックオフィス', demo: 'メール添付の仕分け', hasDemo: true },
  { industry: '農業', demo: '作業日報の下書き', hasDemo: true },
  { industry: '社内', demo: 'マニュアル検索', hasDemo: true },
  // Round 3
  { industry: '建設', demo: '是正・確認の抜け防止' },
  { industry: '介護', demo: '転倒・ヒヤリの記録' },
  { industry: '製造', demo: '不具合の初動整理' },
  { industry: '小売', demo: 'シフト・欠員の見える化' },
  { industry: '法務', demo: '契約更新の抜け防止' },
  { industry: 'バックオフィス', demo: '請求・支払の突合' },
  { industry: '農業', demo: '農薬・資材の記録' },
  { industry: '社内', demo: '新人オンボーディング' },
  // Round 4
  { industry: '建設', demo: '完工報告書の下書き' },
  { industry: '介護', demo: '記録負担の削減' },
  { industry: '製造', demo: 'トレーサビリティ記録' },
  { industry: '小売', demo: '売れ筋の要因整理' },
  { industry: '法務', demo: 'リスク条項の洗い出し' },
  { industry: 'バックオフィス', demo: '問い合わせ一次回答' },
  { industry: '農業', demo: '出荷前チェックリスト' },
  { industry: '社内', demo: '問い合わせの一次切り分け' },
]
