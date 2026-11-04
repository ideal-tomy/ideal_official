import { getCaseHref, getCaseBySlug, type CaseStudy } from '@/data/cases'
import {
  getFeaturedCapabilities,
  galleryDemoHref,
} from '@/data/services/ai-hub'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import type { ServiceJourneyStep } from '@/components/services/ServiceJourneyDiagram'

export const servicesHubHero = {
  title: '課題の整理から、作って定着まで。',
  subtitle:
    '同じチームが相談・設計と製作を一気通貫で伴走します。何から手を付けるか決まっていなくても、作りたいものが見えていても、どちらからでも入れます。',
  primaryCta: {
    label: '相談・設計を見る',
    href: '#step-consult',
  },
  secondaryCta: {
    label: '製作を見る',
    href: '#examples',
  },
  mockImage: '/images/sv_app.png',
} as const

export const servicesOverviewCopy = {
  heading: '成功の大半は、作る前に決まる',
  lead: '課題の抽出と設計を同じチームで行い、開発・定着まで一気通貫で伴走します。\n相談だけで終えても、製作に入っても構いません。',
} as const

export const overallJourneySteps: readonly ServiceJourneyStep[] = [
  {
    number: '01',
    title: '課題の整理',
    description: '経営と現場の論点を整理し、どこから手を付けるかを可視化します。',
  },
  {
    number: '02',
    title: '設計',
    description: '何を作るか・何を検証するかを決め、過剰な要件膨張を抑えます。',
  },
  {
    number: '03',
    title: '試作・実装',
    description: '小さく試してから本実装へ。同じチームがコードまで担います。',
  },
  {
    number: '04',
    title: '導入',
    description: '現場に乗る運用設計と、関係者への共有まで整えます。',
  },
  {
    number: '05',
    title: '運用',
    description: '監視と改善サイクルを回し、使われ続ける状態を維持します。',
  },
]

export const servicesConsultCopy = {
  heading: '相談・設計',
  lead: '「何から着手すべきか」「どこまでを一期で終えるか」を、現場運用まで含めて設計します。相談だけで完了しても問題ありません。',
  outcomes: [
    '論点と優先順位が一枚にまとまる',
    '検証単位と、作らない範囲が明文化される',
    '次の試作・実装に渡せる粒度まで落ちる',
  ],
} as const

export const consultJourneySteps: readonly ServiceJourneyStep[] = [
  {
    number: '01',
    title: '現状把握',
    duration: '1〜2週間',
    description: '経営・現場・システムの実態をそろえ、課題の見取り図を作ります。',
  },
  {
    number: '02',
    title: '論点・ギャップ整理',
    duration: '1〜2週間',
    description: '理想像との差分を構造化し、先に解くべき論点を絞り込みます。',
  },
  {
    number: '03',
    title: '優先順位とロードマップ',
    compactTitle: true,
    duration: '1週間',
    description: '効果と実現性の両面で着手順を決め、投資判断の材料になる計画へ落とします。',
  },
  {
    number: '04',
    title: '実行・検証計画',
    duration: '合意',
    description: '次フェーズで迷わないよう、検証単位・体制・成果物を明文化します。',
  },
]

export const servicesBuildCopy = {
  heading: '製作',
  lead: '小さく試してから本実装へ。Webサイト・LP、アプリ、AIまで、触れる形で方向を合わせます。',
} as const

export const hubProblemItems = [
  { id: 'excel', label: 'Excel・紙の管理が限界' },
  { id: 'manual', label: '転記・確認に時間がかかる' },
  { id: 'silo', label: '現場と事務所の情報が分断' },
  { id: 'error', label: '手作業によるミスが怖い' },
] as const

export const hubSolutionItems = [
  'データを一つの画面に集約',
  '入力→処理→結果を自動化',
  '進捗をリアルタイム共有',
  'ミスを減らし、確認に集中',
] as const

export const hubServices = [
  {
    id: 'web-development',
    buildAnchor: 'build-web',
    title: 'Webサイト・LP',
    description:
      'コーポレートサイト、LP、体験型UIまで。構成・デザイン・実装を一貫して伴走します。',
    image: '/images/services/01.png',
    contactHref: '/contact?service=web-development',
  },
  {
    id: 'app-development',
    buildAnchor: 'build-app',
    title: 'アプリ開発',
    description:
      'Excel、紙、LINEの手作業をWebツールに。入力から結果まで、現場で使える形に落とし込みます。',
    image: '/images/services/02.png',
    contactHref: '/contact?service=app-development',
  },
  {
    id: 'ai-consulting',
    buildAnchor: 'build-ai',
    title: 'AI開発',
    description:
      '「AIでできないか」を、まず動くデモから検証。自社に近いパターンを選べます。',
    image: '/images/services/03.png',
    contactHref: '/contact?service=ai-consulting',
  },
] as const

export const hubProcessSteps = [
  {
    step: 1,
    title: '体験で方向を合わせる',
    description: '動くデモで質感と範囲を先に共有。要件が固まっていなくても始められます。',
  },
  {
    step: 2,
    title: '設計して作る',
    description: '情報設計・画面・実装まで一気通貫。小さく作り、反応を見ながら広げます。',
  },
  {
    step: 3,
    title: '公開後も育てる',
    description: '計測・改善・運用まで伴走。作って終わりにしない開発です。',
  },
] as const

/*
 * ヒーローより下（components/services/hub/lp/）の文言。
 * 見出しは意味の切れ目で行に分けて持つ。
 */

export type ServicesLpTabId = 'web' | 'app' | 'ai'

export type ServicesLpRow = {
  label: string
  value: string
  hit?: boolean
  flag?: string
}

type ServicesLpAboutCardBase = {
  id: string
  tag: string
  footLabel: string
  foot: string
}

export type ServicesLpAboutCard =
  | (ServicesLpAboutCardBase & { kind: 'rows'; rows: readonly ServicesLpRow[] })
  | (ServicesLpAboutCardBase & { kind: 'web'; cta: string })
  | (ServicesLpAboutCardBase & {
      kind: 'chat'
      question: string
      answer: string
      source: string
    })

export type ServicesLpExampleStep = {
  label: string
  docTitle: string
  heading: string
  rows: readonly ServicesLpRow[]
  sideTitle: string
  sideText: string
  action: string
  result: { title: string; body: string; source?: string }
}

export type ServicesLpExampleTab = {
  id: ServicesLpTabId
  service: string
  label: string
  title: string
  sub: string
  steps: readonly [ServicesLpExampleStep, ServicesLpExampleStep, ServicesLpExampleStep]
}

export const servicesLpTopics = [
  '相談・設計',
  'Webサイト・LP',
  'アプリ開発',
  'AI開発',
  '既存ツールとの連携',
  '公開後の改善',
] as const

export const servicesLpAbout = {
  eyebrow: 'idealについて',
  heading: ['何を作るか決まる前から、', '一つの仕事で始められる。'],
  body: '相談だけで終えても、製作に進んでも、同じチームが続けて担当します。課題の整理から、Webサイト、業務アプリ、AIまで、触れる形で方向を合わせます。',
  cards: [
    {
      id: 'consult',
      kind: 'rows',
      tag: '相談・設計',
      rows: [
        { label: '論点', value: '3つに整理' },
        { label: '一期', value: '受付と一覧' },
        { label: '作らない', value: '帳票の自動化', hit: true },
      ],
      footLabel: '相談',
      foot: '論点と範囲を一枚に',
    },
    {
      id: 'web',
      kind: 'web',
      tag: 'Webサイト・LP',
      cta: '相談する',
      footLabel: 'Web',
      foot: '伝える順番から作る',
    },
    {
      id: 'app',
      kind: 'rows',
      tag: 'アプリ開発',
      rows: [
        { label: 'Excel', value: '取り込み済み' },
        { label: '紙の日報', value: '取り込み済み' },
        { label: 'LINE', value: '未確認 2件', hit: true },
      ],
      footLabel: 'アプリ',
      foot: '散らばる記録を一画面に',
    },
    {
      id: 'ai',
      kind: 'chat',
      tag: 'AI開発',
      question: '午後は在宅にできる？',
      answer: '申請と承認で可能です',
      source: '就業規則 第18条',
      footLabel: 'AI',
      foot: '答えと、その根拠を出す',
    },
  ] satisfies readonly ServicesLpAboutCard[],
} as const

export type ServicesLpStep = {
  id: string
  no: string
  name: string
  goal: string
  bar: string
  title: string
  label: string
  rows: readonly ServicesLpRow[]
  periods?: readonly { title: string; duration: string }[]
  done: string
  answer: string
}

/** 相談から運用保守までの5ステップ。画面はその段で残る成果物 */
export const servicesLpSteps = [
  {
    id: 'step-consult',
    no: '01',
    name: '相談',
    goal: '何から手を付けるかを決める。',
    bar: '相談のまとめ ｜ 受付業務',
    title: '聞いたことを、一枚にまとめる',
    label: '聞いたこと、論点、次に決めることが一枚にまとまる画面の例',
    rows: [
      { label: '聞いたこと', value: '受付をExcelと紙に二回書く' },
      { label: '論点', value: '転記と、担当への連絡待ち' },
      { label: '次に決める', value: '一期で作る範囲', hit: true, flag: '要件定義へ' },
    ],
    periods: [
      { title: '現状把握', duration: '1〜2週間' },
      { title: '論点の整理', duration: '1〜2週間' },
      { title: '優先順位', duration: '1週間' },
      { title: '実行計画', duration: '合意' },
    ],
    done: '論点を、一枚で共有',
    answer:
      '現場の話を聞き、論点と次に決めることを一枚に残します。相談だけで終えても構いません。',
  },
  {
    id: 'step-requirements',
    no: '02',
    name: '要件定義',
    goal: '作る範囲と概算を決める。',
    bar: '要件の整理 ｜ 一期の範囲',
    title: '受付業務 一期',
    label: '作るもの、作らないもの、概算、確かめる点が並ぶ画面の例',
    rows: [
      { label: '作る', value: '受付フォームと担当別の一覧' },
      { label: '作らない', value: '請求との連携', hit: true, flag: '二期へ' },
      { label: '概算', value: '参考の価格レンジ' },
      { label: '確かめる点', value: '入力のしやすさ' },
    ],
    done: '範囲と概算に合意',
    answer:
      '必須の機能と後回しにする機能を分け、参考の価格レンジを出します。この時点の金額は正式見積ではありません。',
  },
  {
    id: 'step-test',
    no: '03',
    name: 'テスト開発',
    goal: '小さく動かして確かめる。',
    bar: 'テスト開発 ｜ 受付フォーム',
    title: '現場の3人が、2週間試す',
    label: '絞った範囲を現場で試し、指摘を直して本番に進むかを決める画面の例',
    rows: [
      { label: '試す範囲', value: '受付の入力と一覧' },
      { label: '使うデータ', value: 'サンプルと合意した実データ' },
      { label: '現場の指摘', value: '住所の入力が手間', hit: true, flag: '直す' },
      { label: '判断', value: '本番に進む' },
    ],
    done: '本番の範囲を確定',
    answer:
      '本番の前に、絞った範囲を動かして現場で触ります。結果を見て、進む、止める、範囲を変える、を決めます。',
  },
  {
    id: 'step-production',
    no: '04',
    name: '本番開発',
    goal: '合意した範囲を作り切る。',
    bar: '本番開発 ｜ 進み具合',
    title: '受付業務 一期 ／ 納品まで',
    label: '合意した機能の実装と、受け入れ確認、使い始めの準備が並ぶ画面の例',
    rows: [
      { label: '入力画面', value: '受付フォームを実装済み' },
      { label: '一覧画面', value: '担当別の一覧を実装済み' },
      { label: '受け入れ', value: '現場の担当者が確認中', hit: true, flag: '確認待ち' },
      { label: '操作説明', value: '使い始めの手順書' },
    ],
    done: '納品して、使い始めを支える',
    answer:
      '合意した範囲を、業務で使える形まで作ります。納品のあとは、使い始めの質問や不具合に対応します。',
  },
  {
    id: 'step-maintain',
    no: '05',
    name: '運用保守',
    goal: '使いながら、次を直す。',
    bar: '運用の記録 ｜ 受付業務',
    title: '使い始めて1か月',
    label: '使われ方と残った手間から、次の改善を決める画面の例',
    rows: [
      { label: '使われ方', value: '受付のほとんどがフォームから' },
      { label: '残った手間', value: '電話受付の入力', hit: true, flag: '次の改善' },
      { label: '対応', value: '軽い改修は保守の範囲で' },
      { label: '次の相談', value: '請求との連携（二期）' },
    ],
    done: '改善の候補を、次の相談へ',
    answer:
      '使われ方を見て、障害対応と小さな改修を続けます。大きな追加は、改めて範囲と見積を決めます。',
  },
] as const satisfies readonly ServicesLpStep[]

export const servicesLpProcessRibbon = {
  lead: '相談から運用保守まで、同じチームで伴走します。',
  steps: servicesLpSteps.map((step) => step.name),
} as const

export const servicesLpThinking = {
  eyebrow: 'idealの考え方',
  heading: ['成功の大半は、', '作る前に決まる。'],
  body: '課題の抽出と設計を同じチームで行い、開発と定着まで続けて担当します。相談だけで終えても、製作に入っても構いません。',
  cardLead: '相談から運用まで',
  cardCount: '5',
  cardUnit: 'ステップ',
} as const

export const servicesLpStart = {
  eyebrow: 'はじめ方',
  heading: ['まずは、一つの仕事から。'],
  body: '一つの業務の画面から作ります。確認や転記が多い仕事から始められます。',
  cta: '開発ごとの進め方を見る →',
} as const

export const servicesLpExamples = {
  eyebrow: '開発ごとの進め方',
  heading: ['Web・アプリ・AIの、', '進め方を見る。'],
  body: '5ステップは同じでも、作るものによって、確かめることが変わります。開発ごとに、三つの段で順に見られます。',
  lastLabel: 'この開発の効果を試算する ↓',
  tabs: [
    {
      id: 'web',
      service: 'Webサイト・LP',
      label: '構成から公開まで',
      title: '構成を決めてから、作って公開する',
      sub: '例：設備メンテナンス会社のサービス紹介サイト',
      steps: [
        {
          label: '構成を決める',
          docTitle: 'ページの構成案',
          heading: '誰に、何を、どの順で伝えるか。',
          rows: [
            { label: '読む人', value: '設備の担当者と購買担当' },
            { label: '最初に見せる', value: '対応できる設備と地域' },
            { label: '次に見せる', value: '料金の目安と事例' },
            { label: '載せない', value: '会員ページ（次の段階）', hit: true },
          ],
          sideTitle: '構成を一枚にする',
          sideText: 'ページの順番と、各ページで伝えることを決めます。',
          action: '構成案を確かめる',
          result: {
            title: '文章より先に、順番を決めます。',
            body: '問い合わせまでの流れを一枚にし、社内で合意してからデザインに進みます。',
          },
        },
        {
          label: 'デザインと実装',
          docTitle: 'デザインと動き',
          heading: '見た目と動きを、触って決める。',
          rows: [
            { label: '見た目', value: 'ロゴと色に合わせる' },
            { label: '動き', value: 'スクロールで事例が出る' },
            { label: 'スマホ', value: '片手で問い合わせまで' },
            { label: '確認', value: '動く試作で社内確認', hit: true },
          ],
          sideTitle: '動く試作で確かめる',
          sideText: '静止画ではなく、ブラウザで動く画面で確認します。',
          action: '試作を触る',
          result: {
            title: 'スマホとPCの両方で確かめてから公開します。',
            body: '表示の速さと、問い合わせフォームの動作も公開前に確認します。',
          },
        },
        {
          label: '公開後に直す',
          docTitle: '公開して1か月',
          heading: '読まれ方を見て、直す。',
          rows: [
            { label: '見る数字', value: '訪問、問い合わせ、離れた場所' },
            { label: '離れた場所', value: 'フォームの入力項目', hit: true },
            { label: '次の改善', value: '入力項目を減らす' },
          ],
          sideTitle: '直した理由を残す',
          sideText: '変えた場所と理由を記録し、次の改善に使います。',
          action: '改善を記録する',
          result: {
            title: '公開後も、同じチームが直します。',
            body: '更新や改善の相談も、そのまま続けられます。',
          },
        },
      ],
    },
    {
      id: 'app',
      service: 'アプリ開発',
      label: '手順から画面まで',
      title: 'いまの手順から、使う画面を作る',
      sub: '例：Excelと紙で受付を管理している事務所',
      steps: [
        {
          label: '手順を整理する',
          docTitle: 'いまの受付の手順',
          heading: '誰が、どこに、何を書くか。',
          rows: [
            { label: '1', value: '電話を受けて紙にメモ' },
            { label: '2', value: 'Excelの一覧に書き写す' },
            { label: '3', value: '担当にLINEで送る', hit: true },
            { label: '4', value: '対応したら一覧を更新' },
          ],
          sideTitle: '手順を図にする',
          sideText: '書き写しや確認待ちが、どこで起きているかを見ます。',
          action: '手順を整理する',
          result: {
            title: '同じ内容を、3か所に書いています。',
            body: '受付と一覧を一つの画面にまとめる案を作ります。',
          },
        },
        {
          label: '画面を試作する',
          docTitle: '試作の画面',
          heading: '入力から一覧まで試作する。',
          rows: [
            { label: '入力', value: '受付フォーム（項目は8つ）' },
            { label: '一覧', value: '担当別・未対応から並ぶ' },
            { label: '通知', value: '担当に新着を知らせる' },
            { label: '作らない', value: '請求との連携（二期）', hit: true },
          ],
          sideTitle: '現場で入力してみる',
          sideText: '実際の受付を、試作に入力してもらいます。',
          action: '試作で入力する',
          result: {
            title: '入力しにくい項目を、本番の前に直します。',
            body: '項目の順番と必須の項目を決めてから、本番開発に進みます。',
          },
        },
        {
          label: '現場に載せる',
          docTitle: '使い始めて2週間',
          heading: '現場で使われる形に直す。',
          rows: [
            { label: '使い方', value: '操作の手順書と説明会' },
            { label: '窓口', value: '初めの2週間は質問を受ける' },
            { label: '残った手間', value: '住所の入力', hit: true },
            { label: '次の改善', value: '郵便番号から自動入力' },
          ],
          sideTitle: '使い始めを支える',
          sideText: '質問と不具合をまとめて受け、次の改善を決めます。',
          action: '改善の候補を記録する',
          result: {
            title: '追加の開発は、使われ方を見てから決めます。',
            body: '保守の範囲で直すものと、改めて見積もるものを分けます。',
          },
        },
      ],
    },
    {
      id: 'ai',
      service: 'AI開発',
      label: '検証から改善まで',
      title: 'デモで確かめてから、業務に入れる',
      sub: '例：規程やマニュアルへの質問が多い総務',
      steps: [
        {
          label: 'デモで確かめる',
          docTitle: 'サンプルでの確認',
          heading: '答え方を、先に触って確かめる。',
          rows: [
            { label: '使うデータ', value: 'サンプルの規程' },
            { label: '試す質問', value: '在宅勤務、休暇、経費' },
            { label: '答え方', value: '答えと、根拠の条文を出す' },
            { label: '確かめる点', value: '自社の質問に近いか', hit: true },
          ],
          sideTitle: 'デモで試す',
          sideText: '社内の資料を使う前に、答え方を確かめます。',
          action: 'デモで質問する',
          result: {
            title: '自社に合いそうかを、費用をかける前に判断します。',
            body: '合わなければ、ここで止めても構いません。',
            source: 'サンプルデータのデモで確認します。',
          },
        },
        {
          label: '範囲を決める',
          docTitle: '使う資料と範囲',
          heading: '読む資料と、答えない範囲。',
          rows: [
            { label: '読む資料', value: '就業規則・申請マニュアル' },
            { label: '答える', value: '手続きと条件' },
            { label: '答えない', value: '個別の人事評価', hit: true },
            { label: '見つからないとき', value: '担当者へつなぐ' },
          ],
          sideTitle: '答え方を決める',
          sideText: '根拠が見つからないときの答え方も決めます。',
          action: '答え方を確かめる',
          result: {
            title: '根拠が見つからない質問には、答えません。',
            body: '代わりに、担当者へつなぐ案内を出します。',
          },
        },
        {
          label: '使いながら直す',
          docTitle: '使い始めて1か月',
          heading: '答えられなかった質問から直す。',
          rows: [
            { label: '根拠つきの回答', value: '52件' },
            { label: '答えられなかった', value: '8件', hit: true },
            { label: '次の改善', value: '古い通知を資料に追加' },
          ],
          sideTitle: '資料を足す',
          sideText: '答えられなかった質問から、足りない資料を探します。',
          action: '直した内容を記録する',
          result: {
            title: '資料を足した理由を、記録に残します。',
            body: '規程が変わったときも、どこを直すかが分かります。',
            source: '数値は説明用の例です。',
          },
        },
      ],
    },
  ] satisfies readonly ServicesLpExampleTab[],
} as const

export const servicesLpBuilds = {
  heading: ['相談から運用まで、', '同じチームが作ります。'],
  items: servicesLpTopics,
} as const

export const servicesLpRoi = {
  eyebrow: '時間と費用を比べる',
  heading: ['削減時間と費用を、', 'この場で試せます。'],
  body: '業務と作るものを選ぶと、参考の価格と、減る時間の目安が出ます。',
} as const

export const servicesLpContact = {
  eyebrow: 'ご相談',
  heading: ['いま困っている仕事を、', '聞かせてください。'],
  body: '何を作るかが決まっていなくても、相談できます。今の作業を聞き、作るものと範囲を提案します。',
  label: '相談したいこと',
  placeholder: '例：受付の内容を、Excelと紙に二回書いています。',
  button: 'この内容で相談フォームへ →',
  note: '送信は、次の相談フォームで行います。',
} as const

export const servicesLpToc = [
  { id: 'about', label: 'できること' },
  { id: 'steps', label: '5ステップ' },
  { id: 'examples', label: '開発ごとの進め方' },
  { id: 'roi', label: '効果の試算' },
  { id: 'contact', label: 'ご相談' },
] as const

/** ハブに載せる活用イメージ（厳選） */
export const hubFeaturedCaseSlugs = [
  'construction-photo-sorting',
  'care-voice-records',
  'backoffice-workflow-automation',
] as const

export function getHubFeaturedCases(): CaseStudy[] {
  return hubFeaturedCaseSlugs
    .map((slug) => getCaseBySlug(slug))
    .filter((c): c is CaseStudy => c != null && c.status === 'published')
}

export function getHubFeaturedDemos(): Capability[] {
  return getFeaturedCapabilities()
}

export { getCaseHref, galleryDemoHref }
