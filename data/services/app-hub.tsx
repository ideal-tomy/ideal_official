import type { ReactNode } from 'react'

export const appHubHero = {
  title: '業務を、動く仕組みに。',
  subtitle:
    'Excel、紙、メール、LINEの手作業を、触れるデモにしてから本開発へ。入力から結果まで一連の流れを体験できます。',
  primaryCta: {
    label: '実際のデモを見る',
    href: '#product-showcase',
  },
  secondaryCta: {
    label: '作りたいものを相談する',
    href: '/contact?service=app-development',
  },
} as const

export const whatWeBuild = [
  {
    title: '業務Web / 管理画面',
    description: 'Excel管理、紙の帳票、メールでのやり取りを、一つの画面に集約します。',
  },
  {
    title: '会員・顧客サービス',
    description: '予約、会員管理、ポイント、履歴確認など、顧客向けの動く仕組み。',
  },
  {
    title: 'LINE・現場入力',
    description: 'スマホから現場入力、LINE連携、通知まで。現場と事務所をつなぎます。',
  },
] as const

export const problemSolutions = [
  {
    id: 'excel',
    problem: 'Excelで管理が限界',
    solution: 'Web管理画面に移行し、複数人で同時に更新・検索できる仕組みに。',
  },
  {
    id: 'manual',
    problem: '手作業の転記・集計',
    solution: '入力 → 自動処理 → 結果表示。人がやるのは確認だけに。',
  },
  {
    id: 'field',
    problem: '現場と事務所の情報が分断',
    solution: 'スマホ入力・ステータス管理で、進捗をリアルタイムに共有。',
  },
] as const

export const relatedDemos = [
  {
    id: 'document-extraction',
    label: '文書抽出デモ',
    hint: '書類から情報を抜き出す業務ツールの例',
    href: '/ai-capability-gallery/document-to-extraction',
  },
  {
    id: 'data-prediction',
    label: 'データ予測デモ',
    hint: '入力データから結果を返すフローの例',
    href: '/ai-capability-gallery/data-to-prediction',
  },
  {
    id: 'construction-case',
    label: '建設 × 現場写真整理',
    hint: '業務フローを置き換える活用イメージ',
    href: '/cases/industries/construction-photo-sorting',
  },
] as const

export const appProcessSteps = [
  {
    step: 1,
    title: '業務を整理する',
    description: '今の作業フローと、楽にしたい点を一緒に言語化します。',
  },
  {
    step: 2,
    title: '動くプロトタイプを作る',
    description: 'このページのような操作体験で、方向性を早く合わせます。',
  },
  {
    step: 3,
    title: '本番運用まで伴走',
    description: '認証、データ連携、公開後の改善まで一気通貫で対応します。',
  },
] as const

export interface AppHoodCard {
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
      <div className="rounded-lg border border-brand/25 bg-brand/5 p-4">
        <p className="text-xs uppercase tracking-wider text-brand/90 mb-1">
          このサイトでの使用
        </p>
        <p className="text-sm text-gray-200 leading-relaxed">{siteUsage}</p>
      </div>
      <div className="space-y-4">
        {points.map((p) => (
          <div key={p.title}>
            <h4 className="font-semibold text-brand mb-2">{p.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const underTheHoodCards: AppHoodCard[] = [
  {
    id: 'frontend',
    title: 'React / Next.js',
    description: '管理画面・業務Webのフロントエンド基盤。',
    tags: ['React', 'Next.js', 'TypeScript'],
    siteUsage: '本サイトのサービスページ、AI Gallery、Cases など',
    modalTitle: 'React / Next.js',
    modalBody: (
      <HoodBody
        lead="業務ツールは、使いやすさと速度が命です。Next.js と TypeScript で堅牢かつ高速なUIを構築します。"
        siteUsage="公式サイト全体の骨格。業務ツール案件でも同じスタックを標準採用しています。"
        points={[
          {
            title: 'SPA / SSR の使い分け',
            text: '管理画面はSPA、公開ページはSSRで、用途に合わせた最適な構成を選びます。',
          },
          {
            title: '型安全な設計',
            text: '業務ロジックが複雑になるほど、TypeScript でバグを早期に検出します。',
          },
        ]}
      />
    ),
  },
  {
    id: 'backend',
    title: 'API / バックエンド',
    description: '業務ロジック、認証、データ処理のサーバー側。',
    tags: ['Node.js', 'Python', 'API'],
    siteUsage: 'AIコンシェルジュ、デモの処理ロジック',
    modalTitle: 'API / バックエンド',
    modalBody: (
      <HoodBody
        lead="フロントの操作を支える、堅牢なAPIとサーバーサイドロジックを設計・実装します。"
        siteUsage="AIコンシェルジュの会話処理、デモの自動処理フローなど。"
        points={[
          {
            title: 'REST / GraphQL',
            text: 'フロントとバックの責務を明確に分離し、拡張しやすいAPIを設計します。',
          },
          {
            title: '認証・権限管理',
            text: '社内ツール向けのロールベースアクセス制御、SSO連携にも対応します。',
          },
        ]}
      />
    ),
  },
  {
    id: 'database',
    title: 'データベース / 連携',
    description: 'データ設計、外部サービス連携、通知。',
    tags: ['PostgreSQL', 'LINE', 'Webhook'],
    siteUsage: 'Cases の業務フロー設計思想',
    modalTitle: 'データベース / 連携',
    modalBody: (
      <HoodBody
        lead="業務データの構造設計と、既存ツール（LINE、スプレッドシート、会計ソフト等）との連携を行います。"
        siteUsage="活用イメージページの Before/After フロー設計で、データの流れを可視化しています。"
        points={[
          {
            title: 'リレーショナルDB設計',
            text: 'PostgreSQL 等で、業務に合った正規化とパフォーマンスを両立します。',
          },
          {
            title: '外部連携',
            text: 'LINE Messaging API、Slack、Google Sheets 等との連携実装に対応します。',
          },
        ]}
      />
    ),
  },
  {
    id: 'mobile',
    title: 'モバイル / PWA',
    description: 'スマホ対応、PWA、ネイティブアプリ。',
    tags: ['PWA', 'React Native', 'レスポンシブ'],
    siteUsage: 'このページのモバイル操作デモ',
    modalTitle: 'モバイル / PWA',
    modalBody: (
      <HoodBody
        lead="現場からの入力や、スマホでの業務操作に対応。PWA やネイティブアプリも要件に応じて選定します。"
        siteUsage="Product Showcase のモバイル操作パネルで、スマホUIの操作感を体験できます。"
        points={[
          {
            title: 'PWA',
            text: 'アプリストア不要で、ホーム画面追加・オフライン対応が可能なWebアプリ。',
          },
          {
            title: 'ネイティブアプリ',
            text: 'React Native / Flutter で、iOS・Android 両対応のアプリも開発可能です。',
          },
        ]}
      />
    ),
  },
]

export const appHubFaqs = [
  {
    id: 'what-is',
    question: 'Webアプリと業務ツールの違いは？',
    answer:
      '業務ツールは、社内の作業（管理、入力、承認、集計など）をデジタル化する仕組み全般を指します。Webアプリはその実装形態の一つで、ブラウザから使えるツールとして提供します。',
    category: '概要',
  },
  {
    id: 'timeline',
    question: '開発期間の目安は？',
    answer:
      '小規模な業務ツール（入力→処理→表示）で1〜2ヶ月、管理画面・会員機能を含む場合は3〜6ヶ月が目安です。まずプロトタイプで方向を合わせてから本開発に進みます。',
    category: '期間',
  },
  {
    id: 'existing',
    question: '既存のExcelや紙の運用から移行できますか？',
    answer:
      'はい。現在の業務フローを整理し、段階的にデジタル化する進め方が可能です。いきなり全部置き換えず、まず一番負担の大きい作業から始めることも多いです。',
    category: '移行',
  },
  {
    id: 'ai-integration',
    question: 'AI機能も組み込めますか？',
    answer:
      'はい。文書抽出、自動分類、チャットボットなど、AI Gallery のデモにあるような機能を業務ツールに組み込むことも可能です。',
    category: 'AI',
  },
] as const

export const appHubRelatedServices = [
  {
    id: 'web-development',
    title: 'Webサイト制作',
    description: '見せ方・集客のためのWebサイト・LP',
    href: '/services/web-development',
    tags: ['Web', 'LP', 'コーポレート'],
  },
  {
    id: 'ai-consulting',
    title: 'AI',
    description: 'AIを使った業務自動化・プロトタイプ',
    href: '/services/ai-consulting',
    tags: ['AI', '自動化', 'デモ'],
  },
] as const
