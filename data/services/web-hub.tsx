import type { ReactNode } from 'react'

export const webHubHero = {
  eyebrow: 'Web Craft Demo',
  titleLine1: '見るだけではなく、',
  titleLine2: '触れたくなるWebを。',
  subtitle:
    'このページ自体が、制作技術のデモです。モーダル、モーション、インタラクションを実際に触って確認できます。',
  primaryCta: {
    label: '技術を触ってみる',
    href: '#interaction-showcase',
  },
  secondaryCta: {
    label: 'Web開発を相談する',
    href: '/contact?service=web-development',
  },
} as const

export const whatWeBuild = [
  {
    title: 'コーポレート / ブランドサイト',
    description: '第一印象と信頼性を伝える、高速で一貫したサイト。',
  },
  {
    title: 'LP / キャンペーン',
    description: '伝えたい一点に絞った、コンバージョン設計のページ。',
  },
  {
    title: '業務Web / 会員サービス',
    description: '社内外の業務フローに合わせた、使えるWebアプリ。',
  },
] as const

export const webProcessSteps = [
  {
    step: 1,
    title: '体験で方向を合わせる',
    description: 'このページのようなインタラクションや構成で、目指す質感を共有します。',
  },
  {
    step: 2,
    title: '設計して作る',
    description: '情報設計・UI・実装を一気通貫。Next.js / TypeScript を標準にします。',
  },
  {
    step: 3,
    title: '公開後も育てる',
    description: '計測・改善・CMS運用まで。作って終わりにしない伴走です。',
  },
] as const

export interface HoodCard {
  id: string
  title: string
  description: string
  tags: string[]
  siteUsage: string
  modalTitle: string
  modalBody: ReactNode
}

function HoodBody({
  lead,
  points,
  siteUsage,
}: {
  lead: string
  points: { title: string; text: string }[]
  siteUsage: string
}) {
  return (
    <div className="space-y-6">
      <p className="text-gray-300 leading-relaxed">{lead}</p>
      <div className="rounded-lg border border-cyan-500/25 bg-cyan-500/5 p-4">
        <p className="text-xs uppercase tracking-wider text-cyan-400/90 mb-1">
          このサイトでの使用
        </p>
        <p className="text-sm text-gray-200 leading-relaxed">{siteUsage}</p>
      </div>
      <div className="space-y-4">
        {points.map((p) => (
          <div key={p.title}>
            <h4 className="font-semibold text-blue-400 mb-2">{p.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const underTheHoodCards: HoodCard[] = [
  {
    id: 'react',
    title: 'React / Next.js',
    description: '高速でインタラクティブなUIの実装基盤。',
    tags: ['React', 'Next.js', 'TypeScript'],
    siteUsage: '本サイト全体のページ構成・ルーティング・コンポーネント設計',
    modalTitle: 'React / Next.js',
    modalBody: (
      <HoodBody
        lead="React のポテンシャルを引き出すため、Next.js と TypeScript を標準スタックとして採用しています。"
        siteUsage="App Router、サービス各ページ、AI Gallery、Cases などサイト全体の骨格です。"
        points={[
          {
            title: 'パフォーマンスとSEO',
            text: 'SSR / SSG を用途に合わせて使い分け、初期表示と検索評価を両立します。',
          },
          {
            title: '型安全な設計',
            text: 'TypeScript で大規模化しても壊れにくいコードベースを維持します。',
          },
          {
            title: 'コンポーネント設計',
            text: 'design-tokens と連携した再利用可能なUI部品で、一貫した体験を実装します。',
          },
        ]}
      />
    ),
  },
  {
    id: 'css',
    title: 'Tailwind / Design Tokens',
    description: 'デザインルールをコードに落とすスタイリング。',
    tags: ['Tailwind CSS', 'Design Tokens'],
    siteUsage: '色・余白・タイポグラフィの統一（lib/design-tokens.ts）',
    modalTitle: 'CSS / Design Tokens',
    modalBody: (
      <HoodBody
        lead="デザインは、正確にコードへ実装する技術があってこそ輝きます。"
        siteUsage="黒基調・青/シアンアクセント・余白ルールは design-tokens 経由で全ページに適用されています。"
        points={[
          {
            title: 'ユーティリティファースト',
            text: 'Tailwind でトークンと相性の良い実装を行い、肥大化を抑えつつ高級感を維持します。',
          },
          {
            title: '要件に応じた選定',
            text: '既存 Bootstrap 改修や CSS-in-JS が必要な案件にも柔軟に対応します。',
          },
        ]}
      />
    ),
  },
  {
    id: 'motion',
    title: 'Motion / Dialog',
    description: 'ページ遷移・モーダル・Hero の動きの設計。',
    tags: ['framer-motion', 'PremiumDialog'],
    siteUsage: 'ページ遷移、HeroReveal、このページの Interaction Showcase',
    modalTitle: 'Motion / Dialog',
    modalBody: (
      <HoodBody
        lead="動かす場所に濃淡をつけます。全部を動かさず、触る瞬間と入口だけを印象づけます。"
        siteUsage="PremiumDialog（モーダル開閉）、PageTransition、HeroReveal。Showcase では意図的に密度を上げています。"
        points={[
          {
            title: '70 / 20 / 10',
            text: '静か・反応・驚かせるの配分を守り、安っぽい常時アニメーションを避けます。',
          },
          {
            title: '開いたときだけ重い',
            text: 'Dialog は open 時のみマウントし、初期表示コストを抑えます。',
          },
        ]}
      />
    ),
  },
  {
    id: 'cms',
    title: 'CMS / 運用',
    description: '更新しやすい構成と、公開後の改善。',
    tags: ['Headless CMS', 'WordPress', '運用'],
    siteUsage: 'コンテンツ分離の設計思想。案件に応じて microCMS / WordPress 等を選定',
    modalTitle: 'CMS / 運用',
    modalBody: (
      <HoodBody
        lead="作って終わりではなく、育てられるサイトを前提に設計します。"
        siteUsage="公式サイトでは静的データとコンポーネント分離で更新しやすい構造にしています。案件ではヘッドレスCMSや WordPress を要件に合わせて選定します。"
        points={[
          {
            title: 'ヘッドレス構成',
            text: '管理画面の使いやすさと、フロントの速度・体験を両立できます。',
          },
          {
            title: 'WordPress の最適化',
            text: 'テーマカスタマイズに加え、速度・セキュリティ面のチューニングも行います。',
          },
        ]}
      />
    ),
  },
]
