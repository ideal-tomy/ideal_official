import { EXTERNAL_DEMO_URLS } from '@/data/demo-first/portfolio'

/**
 * TOP §03 代表デモ（8枚）
 * 掲載内容は axeon_demo_selection の厳選版から、DD と電気工事を除いたもの。
 */

export type TopFeaturedDemoId =
  | 'construction-record'
  | 'internal-knowledge'
  | 'quality-incident'
  | 'logistics-dispatch'
  | 'approval-inspection'
  | 'kaigo-handoff'
  | 'gym-facility'
  | 'wholesale-quote'

export type TopFeaturedDemo = {
  id: TopFeaturedDemoId
  /** カード上部の業種ラベル */
  category: string
  /** カード見出し。行ごとに改行する */
  cardTitle: string[]
  /** 関連デモなど、1行で出すときの名前 */
  plain: string
  /** カード右に出す画面 */
  cardImage: string
  /** サンプルで完走できる外部デモ */
  tryHref: string
}

export const TOP_FEATURED_DEMOS: TopFeaturedDemo[] = [
  {
    id: 'construction-record',
    category: '建設・現場',
    cardTitle: ['現場写真から', '報告書まで'],
    plain: '現場写真の整理から、報告書と確認業務まで',
    cardImage: '/images/demos/construction-record/01.png',
    tryHref: EXTERNAL_DEMO_URLS.construction,
  },
  {
    id: 'internal-knowledge',
    category: '業種を選ばない',
    cardTitle: ['規程マニュアル', 'に聞く'],
    plain: '規程・マニュアルに聞いてみる',
    cardImage: '/images/demos/internal-knowledge/01.jpg',
    tryHref: EXTERNAL_DEMO_URLS.internalKnowledge,
  },
  {
    id: 'quality-incident',
    category: '製造・設備',
    cardTitle: ['品質トラブルの', '原因是正'],
    plain: '品質インシデントの原因と是正を確認する',
    cardImage: '/images/demos/quality-incident/01.jpg',
    tryHref: 'https://axeonmanufacturing02.vercel.app/',
  },
  {
    id: 'logistics-dispatch',
    category: '業種を選ばない',
    cardTitle: ['帰り荷の', '候補を探す'],
    plain: '空で戻る車に積める荷物を探す',
    cardImage: '/images/demos/logistics-dispatch/01.jpg',
    tryHref: 'https://driver-dash-demo.vercel.app/',
  },
  {
    id: 'approval-inspection',
    category: '製造・設備',
    cardTitle: ['受入検査の', '照合承認'],
    plain: '受入検査の照合と承認を見る',
    cardImage: '/images/demos/approval-inspection/01.jpg',
    tryHref: 'https://approval-diagram.vercel.app/',
  },
  {
    id: 'kaigo-handoff',
    category: '医療・介護・保育・薬局',
    cardTitle: ['申し送りと', '日々の記録'],
    plain: '申し送り・面談・日報をまとめる',
    cardImage: '/images/demos/kaigo-handoff/01.jpg',
    tryHref: 'https://kaigo-handoff-demo.vercel.app/',
  },
  {
    id: 'gym-facility',
    category: '自治体・地域',
    cardTitle: ['体育館の', '施設管理'],
    plain: '総合体育館の施設管理を見る',
    cardImage: '/images/demos/gym-facility/01.jpg',
    tryHref: 'https://disaster-prevention-demo02.vercel.app/',
  },
  {
    id: 'wholesale-quote',
    category: '業種を選ばない',
    cardTitle: ['型番問い合わせ', 'と返信下書き'],
    plain: '型番の問い合わせから見積下書き',
    cardImage: '/images/demos/wholesale-quote/01.jpg',
    tryHref: 'https://wholesale-quote-demo-lovat.vercel.app/',
  },
]

export function getTopFeaturedDemos(): TopFeaturedDemo[] {
  return TOP_FEATURED_DEMOS
}

export function getTopFeaturedDemo(id: string): TopFeaturedDemo | undefined {
  return TOP_FEATURED_DEMOS.find((demo) => demo.id === id)
}

export function demoIntroHref(id: TopFeaturedDemoId): string {
  return `/demo/intro/${id}`
}
