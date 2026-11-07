import type { PricingLineId } from '@/lib/concierge/pricing-rules'

export type HowWeWorkFlowStep = {
  id: string
  name: string
  /** 番号の横に出す名前。意味の切れ目で行を分ける */
  nameLines: readonly string[]
  lines: readonly string[]
  /** 名前が言っていない、この段の境界。文ごとに行を分ける */
  boundary: readonly string[]
}

/** 導入の流れ。依頼する側が、何をどう頼み、どこで契約するかを書く */
export const howWeWorkFlow = {
  eyebrow: '導入の流れ',
  heading: ['悩みの内容に合わせて', '依頼内容を決められます'],
  body: ['案内ページひとつから、中堅企業の業務システムまで、同じ窓口で受けています。'],
  asks: {
    heading: ['よくある３つの悩み。'],
    items: [
      {
        id: 'undecided',
        title: '何を作ればいいかわからない',
        titleLines: ['何を作ればいいか', 'わからない'],
        body: '困っている場面を伝えてください。今の作業内容や悩みを聞き、解決するための方法や、作るものと範囲を提案します。',
      },
      {
        id: 'decided',
        title: 'どこに頼めばいいかわからない',
        titleLines: ['どこに頼めばいいか', 'わからない'],
        body: 'ページ、業務の画面、AIの試作など、頼みたいものを伝えてください。範囲と金額の目安を確認し、頼むかを決められます。',
      },
      {
        id: 'review',
        title: '開発会社とのやり取りに自信がない',
        titleLines: ['開発会社とのやり取りに', '自信がない'],
        body: '受け取った見積や提案書などを一緒に確認。開発会社の選定から、開発内容の合理性、費用の妥当性なども一緒に検討します',
      },
    ],
  },
  map: {
    title: '契約までの流れ',
  },
  details: {
    title: 'ステップごとの詳細',
    open: 'ステップ詳細',
    close: '詳細を閉じる',
  },
  steps: [
    {
      id: 'ask-consult',
      name: 'まずは相談',
      nameLines: ['まずは相談'],
      lines: [
        '打ち合わせで、今の作業と道具を話す',
        '開発会社の見積があれば、一緒に見せる',
        '帳票や画面の例があれば、持ってくる',
      ],
      boundary: ['作るものと金額は、まだ決めません。', 'ここで終えても構いません。'],
    },
    {
      id: 'ask-scope',
      name: '範囲と目安を受け取る',
      nameLines: ['範囲と目安を', '受け取る'],
      lines: [
        '作る範囲と、作らない範囲',
        '金額と期間の目安',
        '社内で、決裁する人と予算を確かめる',
      ],
      boundary: ['正式な見積でも、契約でもありません。'],
    },
    {
      id: 'ask-trial',
      name: '試すか、そのまま頼むか',
      nameLines: ['試すか、', 'そのまま頼むか'],
      lines: [
        '範囲が小さければ、正式な見積へ進む',
        '迷う点があれば、絞った範囲を試作して触る',
        '試したあとで、進むか、止めるかを決める',
      ],
      boundary: ['試作の進め方と費用は、別に合意します。'],
    },
    {
      id: 'ask-contract',
      name: '合意した範囲を契約する',
      nameLines: ['合意した範囲を', '契約する'],
      lines: [
        '正式な見積と、作る範囲を確かめる',
        '途中の変更は、相談して範囲を決め直す',
        '確認する人と、本番の環境を用意する',
      ],
      boundary: ['範囲の外の追加は、この契約に入りません。'],
    },
    {
      id: 'ask-next',
      name: '次に足すものは、別に頼む',
      nameLines: ['次に足すものは、', '別に頼む'],
      lines: [
        '使い始めの質問と、軽い改修を相談する',
        '残った手間から、次に足す機能を決める',
        '大きな追加は、改めて範囲と見積を受け取る',
      ],
      boundary: ['保守の範囲は、別に合意します。'],
    },
  ] satisfies readonly HowWeWorkFlowStep[],
  scales: {
    heading: ['規模に合わせて、', '契約の分け方を変えます。'],
    head: { how: '進め方', example: '実例' },
    rows: [
      {
        size: '小規模',
        example: '案内ページ、会社案内、小さなツール',
        how: '相談で範囲が合えば、正式な見積を受け取って契約します。',
      },
      {
        size: '中規模',
        example: '業務で使う画面、AIの試作',
        how: '絞った範囲を試してから、本番を契約します。',
      },
      {
        size: '大きめ',
        example: '中堅企業の業務全体、部署をまたぐ仕組み',
        how: '最初の範囲だけを契約し、続きは使いながら別の依頼にします。',
      },
    ],
  },
  prices: {
    heading: ['金額は、はじめる目安です。'],
    promise: ['正式な見積もりは、お問い合わせください。'],
    basesLabel: 'はじめる業務の目安',
    addonsLabel: '足すと広がる目安',
    bases: [
      { id: 'discovery', period: '1週間〜', points: ['課題の整理', '作る範囲の切り分け'] },
      { id: 'lp', period: '1週間〜', points: ['案内のページ', '問い合わせまでの構成'] },
      { id: 'corporate', period: '2週間〜', points: ['会社案内', '複数ページの公開'] },
      { id: 'small_web_app', period: '1ヶ月〜', points: ['業務で使う画面', '小さなツール'] },
      { id: 'ai_prototype', period: '2週間〜', points: ['試すための試作', '精度を見る範囲'] },
    ] satisfies readonly { id: PricingLineId; period: string; points: readonly string[] }[],
    addons: [
      { id: 'ocr', points: ['文書や画像の読み取り'] },
      { id: 'external_api', points: ['別のサービスとの接続'] },
      { id: 'admin', points: ['中の人向けの画面'] },
      { id: 'db_integration', points: ['記録を残す基盤'] },
    ] satisfies readonly { id: PricingLineId; points: readonly string[] }[],
    contactLink: { label: '正式な見積もりを問い合わせる →', href: '/contact' },
  },
  outro: {
    servicesLink: { label: '作る側の手順は、サービス内容へ →', href: '/services#steps' },
  },
} as const

export const howWeWorkTopBand = {
  text: '契約までの判断は、導入の流れにまとめています。',
  link: { label: '導入の流れを見る →', href: '/how-we-work' },
} as const
