import type { PricingLineId } from '@/lib/concierge/pricing-rules'

export type HowWeWorkFlowStep = {
  id: string
  name: string
  goal: string
  doing: readonly string[]
  notYet: readonly string[]
  prepare: readonly string[]
}

/** 導入の流れ。依頼する側が、何をどう頼み、どこで契約するかを書く */
export const howWeWorkFlow = {
  eyebrow: '導入の流れ',
  heading: ['悩みの内容に合わせて', '依頼内容を決められます'],
  body: [
    '案内ページひとつから、中堅企業の業務システムまで、同じ窓口で受けています。',
    '相談だけで終えても、試したあとで止めても構いません。',
  ],
  asks: {
    heading: ['よくある３つの悩み。'],
    items: [
      {
        id: 'undecided',
        title: '何を作ればいいかわからない',
        body: '困っている場面を伝えてください。今の作業内容や悩みを聞き、解決するための方法や、作るものと範囲を提案します。',
      },
      {
        id: 'decided',
        title: 'どこに頼めばいいかわからない',
        body: 'ページ、業務の画面、AIの試作など、頼みたいものを伝えてください。範囲と金額の目安を確認し、頼むかを決められます。',
      },
      {
        id: 'review',
        title: '開発会社とのやり取りに自信がない',
        body: '受け取った見積や提案書などを一緒に確認。開発会社の選定から、開発内容の合理性、費用の妥当性なども一緒に検討します',
      },
    ],
  },
  map: {
    title: '契約までの流れ',
    caption: '相談から、次の依頼まで',
  },
  labels: {
    doing: 'この段ですること',
    notYet: 'まだ契約ではないこと',
    prepare: '用意するもの',
  },
  steps: [
    {
      id: 'ask-consult',
      name: '相談する',
      goal: '困っている場面を、そのまま送る。',
      doing: [
        '問い合わせフォームから、困っている場面を送る',
        '打ち合わせで、今の作業と使っている道具を話す',
        '開発会社の見積があれば、一緒に見せる',
      ],
      notYet: ['作るものと金額は、まだ決めない', 'ここで終えても構いません'],
      prepare: ['困っている場面', '帳票や画面の例（あれば）'],
    },
    {
      id: 'ask-scope',
      name: '範囲と目安を受け取る',
      goal: '作るもの、作らないもの、金額の目安を見る。',
      doing: [
        '作る範囲と、作らない範囲を受け取る',
        '金額と期間の目安を受け取る',
        '社内で、決裁する人と予算を確かめる',
      ],
      notYet: ['正式な見積でも、契約でもありません'],
      prepare: ['決裁する人', '予算と時期の目安'],
    },
    {
      id: 'ask-trial',
      name: '試すか、そのまま頼むか',
      goal: '小さく試してから頼むこともできる。',
      doing: [
        '範囲が小さければ、そのまま正式な見積へ進む',
        '迷う点があれば、絞った範囲を試作して触る',
        '試したあとで、進む、止める、範囲を変えるを決める',
      ],
      notYet: ['本番の契約は、まだ結ばない', '試作の進め方と費用は、別に合意します'],
      prepare: ['試すデータ', '触って意見を返す現場の人'],
    },
    {
      id: 'ask-contract',
      name: '合意した範囲を契約する',
      goal: '正式な見積を確かめて、契約する。',
      doing: [
        '正式な見積と、作る範囲を確かめる',
        '契約して、作り始める',
        '途中の変更は、相談して範囲を決め直す',
      ],
      notYet: ['範囲の外の追加は、この契約に入りません'],
      prepare: ['確認する人と時間', '本番の環境とアカウント'],
    },
    {
      id: 'ask-next',
      name: '次に足すものは、別に頼む',
      goal: '使いながら、次の依頼を決める。',
      doing: [
        '使い始めの質問と、軽い改修を相談する',
        '残った手間から、次に足す機能を決める',
        '大きな追加は、改めて範囲と見積を受け取る',
      ],
      notYet: ['保守の範囲は、別に合意します'],
      prepare: ['運用で残った手間', '優先したい場面'],
    },
  ] satisfies readonly HowWeWorkFlowStep[],
  scales: {
    heading: ['規模に合わせて、', '契約の分け方を変えます。'],
    head: { size: '規模', example: '例', how: '契約の進め方' },
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
    heading: ['どこで止めるかも、', '相談して決められます。'],
    servicesLink: { label: '作る側の手順は、サービス内容へ →', href: '/services#steps' },
  },
} as const

export const howWeWorkTopBand = {
  text: '契約までの判断は、導入の流れにまとめています。',
  link: { label: '導入の流れを見る →', href: '/how-we-work' },
} as const
