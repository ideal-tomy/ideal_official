/**
 * ページ文脈ごとの第一声と初期アクション（LLM 不使用）
 */

import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'
import { getCaseBySlug } from '@/data/cases'
import { getInsightBySlug } from '@/data/lab/insights'
import type { IdealTrack } from './ideal-flow'
import type { ConciergePageContext } from './page-context'

export type OpeningActionId =
  | 'consult_apply'
  | 'see_related'
  | 'organize_features'
  | 'estimate_later'
  | 'start_web'
  | 'start_ai'
  | 'start_app'
  | 'start_bc'
  | 'start_unsure'
  | 'pick_root'

export type OpeningAction = {
  id: OpeningActionId
  label: string
  /** 選択後に進むトラック。null のとき root 選択へ */
  track: IdealTrack | null
  /** 関連コンテンツへ誘導（フロー外リンク用フラグ） */
  linkKind?: 'related_demo' | 'related_case' | 'gallery'
}

export type ContextOpening = {
  headline: string
  body: string
  actions: OpeningAction[]
}

/** デモ7本ごとの案内コピー（subtitle 以外の補足） */
const DEMO_OPENING_COPY: Record<
  string,
  { headlineSuffix: string; body: string; caseLabel?: string }
> = {
  'voice-to-structured': {
    headlineSuffix: '話すだけで記録が残る仕組み',
    body: '日報・申し送り・営業メモなど、「話す」だけで構造化データにできるか、御社の業務に置き換えて整理します。',
    caseLabel: '介護の音声記録事例',
  },
  'photo-to-classification': {
    headlineSuffix: '送るだけで写真が整理される仕組み',
    body: '現場写真・物件写真・点検画像など、手作業のフォルダ分けを自動化できるか一緒に整理します。',
    caseLabel: '建設の現場写真整理事例',
  },
  'document-to-extraction': {
    headlineSuffix: '文書から必要情報だけ抜き出す仕組み',
    body: '契約・請求・点検資料など、読む負担を減らす抽出フローを御社向けに整理できます。',
    caseLabel: 'DD・文書抽出の事例',
  },
  'data-to-prediction': {
    headlineSuffix: 'データから次の判断を支援する仕組み',
    body: '来客・需要・在庫など、予測を業務判断にどう載せるかを短い質問で整理します。',
    caseLabel: '小売の需要予測事例',
  },
  'workflow-to-automation': {
    headlineSuffix: '繰り返し作業を流れで代行する仕組み',
    body: 'メール確認・登録・通知など、定型業務をどこまで自動化できるか整理します。',
    caseLabel: 'バックオフィス自動化の事例',
  },
  'knowledge-to-search': {
    headlineSuffix: '聞けば社内ナレッジが見つかる仕組み',
    body: '規程・マニュアル・FAQを、根拠付きで答えられる形にできるか一緒に整理します。',
  },
  'multi-input-to-report': {
    headlineSuffix: '素材から報告書まで一気に作る仕組み',
    body: '写真・音声・メモをまとめて報告書にする流れを、御社の報告業務に置き換えて整理します。',
    caseLabel: '農業の現場報告事例',
  },
}

/** Cases ごとの追加の問いかけ（本文末尾） */
const CASE_OPENING_PROMPTS: Record<string, string> = {
  'construction-photo-sorting':
    '現場写真の整理、日報、報告書作成など、近い課題から進められます。',
  'care-voice-records':
    '申し送り・記録・報告書など、話す負担を減らす方向で整理できます。',
  'agriculture-field-report':
    '圃場記録・写真・報告書など、現場報告の流れから相談できます。',
  'dd-document-extraction':
    '契約・請求・資料の読み込み負担を減らす方向で整理できます。',
  'retail-demand-prediction':
    '来客・需要・発注判断など、データ活用の相談から進められます。',
  'backoffice-workflow-automation':
    'メール転記・登録・通知など、繰り返し作業の自動化から整理できます。',
}

const CONSULT_THEN_ROOT: OpeningAction[] = [
  {
    id: 'consult_apply',
    label: '自社業務で使えるか相談する',
    track: 'ai',
  },
  {
    id: 'organize_features',
    label: '必要な機能を整理する',
    track: 'ai',
  },
  {
    id: 'estimate_later',
    label: '概算の感触をつかみたい',
    track: 'ai',
  },
  {
    id: 'pick_root',
    label: '別の相談目的を選ぶ',
    track: null,
  },
]

function demoOpening(ctx: ConciergePageContext): ContextOpening {
  const cap = ctx.demoId ? getCapabilityBySlug(ctx.demoId) : undefined
  const copy = ctx.demoId ? DEMO_OPENING_COPY[ctx.demoId] : undefined
  const name = cap?.subtitle ?? ctx.label ?? 'このデモ'

  const headline = copy
    ? `「${name}」— ${copy.headlineSuffix}を、御社でも使えるか整理しますか？`
    : `「${name}」の仕組みを、御社の業務に応用できるか一緒に整理しますか？`

  const body =
    copy?.body ??
    (cap
      ? `${cap.description} デモを起点に、現状の課題と必要な機能を短く整理できます。`
      : 'デモを起点に、現状の課題と必要な機能を短く整理できます。')

  const actions: OpeningAction[] = [
    CONSULT_THEN_ROOT[0],
    CONSULT_THEN_ROOT[1],
    {
      id: 'see_related',
      label: copy?.caseLabel
        ? `関連事例（${copy.caseLabel}）を見る`
        : '関連する流れを見る',
      track: null,
      linkKind: 'related_case',
    },
    CONSULT_THEN_ROOT[2],
    CONSULT_THEN_ROOT[3],
  ]

  return { headline, body, actions }
}

function demoHubOpening(): ContextOpening {
  return {
    headline: 'どの業務変化に近いですか？ デモを起点に、自社への応用を整理できます。',
    body: '音声・写真・文書・自動化など7パターンから近いものを選ぶか、課題の整理から進めてください。',
    actions: [
      {
        id: 'consult_apply',
        label: '課題から相談を始める',
        track: 'ai',
      },
      {
        id: 'see_related',
        label: 'デモ一覧のまま見る',
        track: null,
        linkKind: 'gallery',
      },
      {
        id: 'start_web',
        label: 'Webサイト・LP制作の相談',
        track: 'web',
      },
      {
        id: 'pick_root',
        label: '相談目的を一覧から選ぶ',
        track: null,
      },
    ],
  }
}

function serviceOpening(ctx: ConciergePageContext): ContextOpening {
  const id = ctx.serviceId
  if (id === 'web-development') {
    return {
      headline: 'Webサイト・LPについて、現状から必要な制作内容を整理できます。',
      body: '新規・リニューアル・LP・業務に紐づくサイトなど、近い状況を選んで進めてください。概算の参考レンジも後から出せます。',
      actions: [
        { id: 'start_web', label: '状況の整理を始める', track: 'web' },
        { id: 'start_ai', label: 'AIも組み合わせたい', track: 'ai' },
        { id: 'estimate_later', label: '概算の感触から整理する', track: 'web' },
        { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
      ],
    }
  }
  if (id === 'app-development') {
    return {
      headline: 'Webアプリ・業務ツール開発について、現状から必要な開発内容を整理できます。',
      body: '新規・改善・プロトタイプなど、近い状況を選んで進めてください。機能の洗い出しと概算の参考までつなげられます。',
      actions: [
        { id: 'start_app', label: '状況の整理を始める', track: 'app' },
        { id: 'start_ai', label: 'AI機能も検討したい', track: 'ai' },
        { id: 'estimate_later', label: '概算の感触から整理する', track: 'app' },
        { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
      ],
    }
  }
  if (id === 'ai-consulting') {
    return {
      headline: 'AIで解決したい業務課題を、短い質問で整理できます。',
      body: '効率化・プロダクト組込・データ活用などから進め、関連デモ案内・要件整理・概算（参考）までつなげられます。',
      actions: [
        { id: 'start_ai', label: 'AI活用の相談を始める', track: 'ai' },
        {
          id: 'see_related',
          label: 'デモを見てから決める',
          track: null,
          linkKind: 'gallery',
        },
        { id: 'estimate_later', label: '概算の感触から整理する', track: 'ai' },
        { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
      ],
    }
  }
  if (id === 'blockchain-development') {
    return {
      headline: 'ブロックチェーン・DAOまわりを、現状から整理できます。',
      body: 'トークン・ガバナンス・オンチェーンなど、近いテーマから進められます。深い研究は LAB にもあります。',
      actions: [
        { id: 'start_bc', label: '状況の整理を始める', track: 'bc' },
        { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
      ],
    }
  }
  if (id === 'metaverse') {
    return {
      headline: '空間・VR/ARまわりの相談を、目的から整理できます。',
      body: 'まずは近い相談カテゴリを選ぶか、全体の目的選択から進めてください。',
      actions: [
        { id: 'start_unsure', label: '目的から整理する', track: 'unsure' },
        { id: 'start_app', label: 'アプリ・体験開発として相談', track: 'app' },
        { id: 'pick_root', label: '相談目的を一覧から選ぶ', track: null },
      ],
    }
  }
  return {
    headline: 'ご覧のサービスについて、相談内容を整理できます。',
    body: '近い目的を選んで、短い質問に進んでください。',
    actions: [{ id: 'pick_root', label: '相談目的を選ぶ', track: null }],
  }
}

function caseOpening(ctx: ConciergePageContext): ContextOpening {
  const study = ctx.caseSlug ? getCaseBySlug(ctx.caseSlug) : undefined
  if (!study) {
    return {
      headline: '業界・課題の事例を起点に、自社への応用を整理できます。',
      body: '建設・介護・農業・DD など、近い課題があればそのまま相談フローへ進めます。',
      actions: [
        { id: 'consult_apply', label: '自社向けに相談する', track: 'ai' },
        {
          id: 'see_related',
          label: 'デモ一覧を見る',
          track: null,
          linkKind: 'gallery',
        },
        { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
      ],
    }
  }

  const prompt = CASE_OPENING_PROMPTS[study.slug]
  return {
    headline: `${study.industryLabel}でのAI活用 — 「${study.subtitle}」について相談しますか？`,
    body: [
      'この事例の流れを起点に、御社の状況へ置き換えて整理できます。',
      prompt,
    ]
      .filter(Boolean)
      .join(' '),
    actions: [
      {
        id: 'consult_apply',
        label: '同じような課題で相談する',
        track: 'ai',
      },
      {
        id: 'organize_features',
        label: '必要な機能を整理する',
        track: 'ai',
      },
      {
        id: 'see_related',
        label: `関連デモ「${study.relatedDemo.label}」を体験する`,
        track: null,
        linkKind: 'related_demo',
      },
      {
        id: 'estimate_later',
        label: '概算の感触をつかみたい',
        track: 'ai',
      },
      { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
    ],
  }
}

function labOpening(ctx: ConciergePageContext): ContextOpening {
  const isInsight = ctx.pageType === 'insight'
  const insight = ctx.insightSlug
    ? getInsightBySlug(ctx.insightSlug)
    : undefined

  if (isInsight && insight) {
    const trackHint: IdealTrack =
      insight.category === 'web' ? 'web' : 'ai'
    return {
      headline: `「${insight.title}」の内容から、実務の相談へ進めますか？`,
      body: `${insight.subtitle}。記事の論点を、デモ体験や要件整理・概算（参考）につなげられます。`,
      actions: [
        {
          id: trackHint === 'web' ? 'start_web' : 'start_ai',
          label:
            trackHint === 'web'
              ? 'Web制作の相談を始める'
              : 'AI活用の相談を始める',
          track: trackHint,
        },
        {
          id: 'see_related',
          label: '関連デモを体験',
          track: null,
          linkKind: 'gallery',
        },
        {
          id: 'pick_root',
          label: '相談目的を一覧から選ぶ',
          track: null,
        },
      ],
    }
  }

  return {
    headline: 'LABの内容を、依頼やデモ体験につなげられます。',
    body: '技術の深掘りから、関連デモ・サービス相談・要件整理へ戻れます。',
    actions: [
      { id: 'start_ai', label: 'AI活用を相談する', track: 'ai' },
      { id: 'start_web', label: 'Web制作を相談する', track: 'web' },
      {
        id: 'see_related',
        label: 'デモを体験',
        track: null,
        linkKind: 'gallery',
      },
      { id: 'pick_root', label: '相談目的を一覧から選ぶ', track: null },
    ],
  }
}

/** PageContext からオープニング文面を取得 */
export function getContextOpening(
  ctx: ConciergePageContext,
): ContextOpening {
  switch (ctx.pageType) {
    case 'demo':
      return demoOpening(ctx)
    case 'demo_hub':
      return demoHubOpening()
    case 'service':
      return serviceOpening(ctx)
    case 'case':
      return caseOpening(ctx)
    case 'lab':
    case 'insight':
      return labOpening(ctx)
    default:
      return {
        headline: 'ご相談の目的に近いものを選んでください。',
        body: '',
        actions: [{ id: 'pick_root', label: '目的を選ぶ', track: null }],
      }
  }
}

/** オープニングアクションから関連リンク先を解決 */
export function resolveOpeningLinkHref(
  ctx: ConciergePageContext,
  action: OpeningAction,
): string | null {
  if (!action.linkKind) return null
  if (action.linkKind === 'gallery') {
    return '/ai-capability-gallery'
  }
  if (action.linkKind === 'related_demo') {
    if (ctx.caseSlug) {
      const study = getCaseBySlug(ctx.caseSlug)
      if (study) return study.relatedDemo.href
    }
    if (ctx.demoId) {
      return `/ai-capability-gallery/${ctx.demoId}`
    }
    return '/ai-capability-gallery'
  }
  if (action.linkKind === 'related_case') {
    if (ctx.demoId === 'photo-to-classification') {
      return '/cases/industries/construction-photo-sorting'
    }
    if (ctx.demoId === 'voice-to-structured') {
      return '/cases/industries/care-voice-records'
    }
    if (ctx.demoId === 'document-to-extraction') {
      return '/cases/industries/dd-document-extraction'
    }
    if (ctx.demoId === 'data-to-prediction') {
      return '/cases/industries/retail-demand-prediction'
    }
    if (ctx.demoId === 'workflow-to-automation') {
      return '/cases/industries/backoffice-workflow-automation'
    }
    if (ctx.demoId === 'multi-input-to-report') {
      return '/cases/industries/agriculture-field-report'
    }
    if (ctx.demoId === 'knowledge-to-search') {
      return '/cases'
    }
    return '/cases'
  }
  return null
}
