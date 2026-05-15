/**
 * ideal 版コンシェルジュ — 選択フロー定義（LLM 不使用）
 */

export type IdealTrack = 'web' | 'app' | 'ai' | 'bc' | 'unsure'

export type FlowChoice = {
  id: string
  label: string
}

export type FlowStepDef = {
  id: string
  question: string
  choices: FlowChoice[]
}

export type RootChoice = FlowChoice & { track: IdealTrack }

export const ROOT_CHOICES: RootChoice[] = [
  {
    id: 'root-web',
    label: 'Webサイト・業務システムを作りたい / 作り直したい',
    track: 'web',
  },
  {
    id: 'root-app',
    label: 'アプリ・ゲームを作りたい',
    track: 'app',
  },
  {
    id: 'root-ai',
    label: 'AI を業務やプロダクトに入れたい',
    track: 'ai',
  },
  {
    id: 'root-bc',
    label: 'ブロックチェーン・トークン・DAO まわりを整理したい',
    track: 'bc',
  },
  {
    id: 'root-unsure',
    label: 'まだわからないが、IT・AI・DX で何かした方がいい気がする',
    track: 'unsure',
  },
]

export const STEPS_BY_TRACK: Record<IdealTrack, FlowStepDef[]> = {
  web: [
    {
      id: 'situation',
      question: 'いまの状況に近いものを選んでください',
      choices: [
        { id: 'web-new', label: '新規でサイトやシステムをつくりたい' },
        { id: 'web-refresh', label: '既存の刷新・リニューアルをしたい' },
        { id: 'web-ops', label: '業務プロセスの改善・効率化をしたい' },
        { id: 'web-undecided', label: 'その他・まだ決まっていない' },
      ],
    },
    {
      id: 'timeline',
      question: '動かし始めたい時期のイメージはありますか？',
      choices: [
        { id: 'tl-asap', label: 'できるだけ早く' },
        { id: 'tl-1-3', label: '1〜3か月以内' },
        { id: 'tl-half', label: '半年以内に検討したい' },
        { id: 'tl-research', label: '時期は未定で情報収集中' },
      ],
    },
  ],
  app: [
    {
      id: 'situation',
      question: 'いまの状況に近いものを選んでください',
      choices: [
        { id: 'app-new', label: '新規でアプリやゲームをつくりたい' },
        { id: 'app-grow', label: '既存プロダクトの改善・拡張をしたい' },
        { id: 'app-poc', label: '技術検証・プロトタイプから始めたい' },
        { id: 'app-undecided', label: 'その他・まだ決まっていない' },
      ],
    },
    {
      id: 'timeline',
      question: '動かし始めたい時期のイメージはありますか？',
      choices: [
        { id: 'tl-asap', label: 'できるだけ早く' },
        { id: 'tl-1-3', label: '1〜3か月以内' },
        { id: 'tl-half', label: '半年以内に検討したい' },
        { id: 'tl-research', label: '時期は未定で情報収集中' },
      ],
    },
  ],
  ai: [
    {
      id: 'situation',
      question: 'いまの状況に近いものを選んでください',
      choices: [
        { id: 'ai-workflow', label: '業務フローへの組み込み・効率化' },
        { id: 'ai-product', label: '自社プロダクト・サービスへの組み込み' },
        { id: 'ai-data', label: 'データ活用・分析の高度化' },
        { id: 'ai-undecided', label: '活用イメージはまだ薄いが相談したい' },
      ],
    },
    {
      id: 'timeline',
      question: '動かし始めたい時期のイメージはありますか？',
      choices: [
        { id: 'tl-asap', label: 'できるだけ早く' },
        { id: 'tl-1-3', label: '1〜3か月以内' },
        { id: 'tl-half', label: '半年以内に検討したい' },
        { id: 'tl-research', label: '時期は未定で情報収集中' },
      ],
    },
  ],
  bc: [
    {
      id: 'situation',
      question: 'いまの状況に近いものを選んでください',
      choices: [
        { id: 'bc-token', label: 'トークン・経済圏の設計・開発' },
        { id: 'bc-dao', label: 'DAO・ガバナンスまわりの整理' },
        { id: 'bc-app', label: 'オンチェーンアプリ・スマートコントラクト' },
        { id: 'bc-undecided', label: '技術検討・全体像の整理から相談したい' },
      ],
    },
    {
      id: 'timeline',
      question: '動かし始めたい時期のイメージはありますか？',
      choices: [
        { id: 'tl-asap', label: 'できるだけ早く' },
        { id: 'tl-1-3', label: '1〜3か月以内' },
        { id: 'tl-half', label: '半年以内に検討したい' },
        { id: 'tl-research', label: '時期は未定で情報収集中' },
      ],
    },
  ],
  unsure: [
    {
      id: 'situation',
      question: 'いまの状況に近いものを選んでください',
      choices: [
        { id: 'us-idea', label: '課題やアイデアはあるが形になっていない' },
        { id: 'us-org', label: 'DX・IT化を組織として進めたい' },
        { id: 'us-budget', label: '予算や進め方の感触をつかみたい' },
        { id: 'us-other', label: 'その他・まだ決まっていない' },
      ],
    },
    {
      id: 'timeline',
      question: '動かし始めたい時期のイメージはありますか？',
      choices: [
        { id: 'tl-asap', label: 'できるだけ早く' },
        { id: 'tl-1-3', label: '1〜3か月以内' },
        { id: 'tl-half', label: '半年以内に検討したい' },
        { id: 'tl-research', label: '時期は未定で情報収集中' },
      ],
    },
    {
      id: 'closest-area',
      question:
        'いちばん近い領域はどれですか？（あとから変えても大丈夫です）',
      choices: [
        { id: 'near-web', label: 'Webサイト・業務システム' },
        { id: 'near-app', label: 'アプリ・ゲーム' },
        { id: 'near-ai', label: 'AI の活用' },
        { id: 'near-bc', label: 'ブロックチェーン・DAO' },
      ],
    },
  ],
}

export type FlowAnswer = {
  stepId: string
  choiceId: string
  label: string
}

const UNSURE_CLOSEST_TO_TRACK: Record<string, IdealTrack> = {
  'near-web': 'web',
  'near-app': 'app',
  'near-ai': 'ai',
  'near-bc': 'bc',
}

/** 「まだわからない」トラックの最終問の選択から、推奨サービス算出用トラックを得る */
export function resolveEffectiveTrack(
  track: IdealTrack,
  answers: FlowAnswer[],
): IdealTrack {
  if (track !== 'unsure') return track
  const closest = answers.find((a) => a.stepId === 'closest-area')
  if (!closest) return track
  return UNSURE_CLOSEST_TO_TRACK[closest.choiceId] ?? 'unsure'
}

export function getRootChoiceForTrack(track: IdealTrack): RootChoice | undefined {
  return ROOT_CHOICES.find((c) => c.track === track)
}
