/**
 * ページ文脈ごとの第一声と初期アクション（LLM 不使用）
 */

import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'
import { getCaseBySlug } from '@/data/cases'
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

const DEFAULT_CONSULT_ACTIONS: OpeningAction[] = [
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
    id: 'see_related',
    label: '類似する事例・デモを見る',
    track: null,
    linkKind: 'related_case',
  },
  {
    id: 'estimate_later',
    label: '概算の感触をつかみたい（状況から整理）',
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
  const name = cap?.subtitle ?? ctx.label ?? 'このデモ'
  return {
    headline: `「${name}」の仕組みを、御社の業務に応用できるか一緒に整理しますか？`,
    body: cap
      ? `${cap.description} デモを起点に、現状の課題と必要な機能を短く整理できます。`
      : 'デモを起点に、現状の課題と必要な機能を短く整理できます。',
    actions: [
      ...DEFAULT_CONSULT_ACTIONS.slice(0, 2),
      {
        id: 'see_related',
        label: '関連する事例を見る',
        track: null,
        linkKind: 'related_case',
      },
      DEFAULT_CONSULT_ACTIONS[3],
      DEFAULT_CONSULT_ACTIONS[4],
    ],
  }
}

function demoHubOpening(): ContextOpening {
  return {
    headline: 'どの業務変化に近いですか？ デモを起点に相談を始められます。',
    body: '7つのパターンから近いものを選ぶか、課題の整理から進めてください。',
    actions: [
      {
        id: 'consult_apply',
        label: '課題から相談を始める',
        track: 'ai',
      },
      {
        id: 'see_related',
        label: 'デモ一覧を見る',
        track: null,
        linkKind: 'gallery',
      },
      {
        id: 'start_web',
        label: 'Webサイト・業務システムの相談',
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
      headline: 'Webサイトについて、現在の状況から必要な制作内容を整理できます。',
      body: '新規・リニューアル・LP・業務システムなど、近い状況を選んで進めてください。',
      actions: [
        { id: 'start_web', label: '状況の整理を始める', track: 'web' },
        { id: 'start_ai', label: 'AIも組み合わせたい', track: 'ai' },
        { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
      ],
    }
  }
  if (id === 'app-development') {
    return {
      headline: 'アプリ・業務ツールについて、現状から必要な開発内容を整理できます。',
      body: '新規・改善・プロトタイプなど、近い状況を選んで進めてください。',
      actions: [
        { id: 'start_app', label: '状況の整理を始める', track: 'app' },
        { id: 'start_ai', label: 'AI機能も検討したい', track: 'ai' },
        { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
      ],
    }
  }
  if (id === 'ai-consulting') {
    return {
      headline: 'AIで解決したい業務課題を、短い質問で整理できます。',
      body: '効率化・プロダクト組込・データ活用など、近い状況から進められます。',
      actions: [
        { id: 'start_ai', label: 'AI活用の相談を始める', track: 'ai' },
        {
          id: 'see_related',
          label: 'デモを見てから決める',
          track: null,
          linkKind: 'gallery',
        },
        { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
      ],
    }
  }
  if (id === 'blockchain-development') {
    return {
      headline: 'ブロックチェーン・DAOまわりを、現状から整理できます。',
      body: 'トークン・ガバナンス・オンチェーンアプリなど、近いテーマから進められます。',
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
    actions: [
      { id: 'pick_root', label: '相談目的を選ぶ', track: null },
    ],
  }
}

function caseOpening(ctx: ConciergePageContext): ContextOpening {
  const study = ctx.caseSlug ? getCaseBySlug(ctx.caseSlug) : undefined
  if (!study) {
    return {
      headline: '業界・課題の事例を起点に、自社への応用を整理できます。',
      body: '近い課題があれば、そのまま相談フローへ進めます。',
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
  return {
    headline: `${study.industryLabel}でのAI活用について相談しますか？`,
    body: `「${study.subtitle}」の流れを起点に、御社の状況へ置き換えて整理できます。`,
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
        label: `関連デモ「${study.relatedDemo.label}」を見る`,
        track: null,
        linkKind: 'related_demo',
      },
      {
        id: 'estimate_later',
        label: '概算の感触をつかみたい（状況から整理）',
        track: 'ai',
      },
      { id: 'pick_root', label: '別の相談目的を選ぶ', track: null },
    ],
  }
}

function labOpening(ctx: ConciergePageContext): ContextOpening {
  const isInsight = ctx.pageType === 'insight'
  return {
    headline: isInsight
      ? '記事の内容から、実務の相談へ進めますか？'
      : 'LABの内容を、依頼やデモ体験につなげられます。',
    body: '技術の深掘りから、関連デモ・サービス相談・要件整理へ戻れます。',
    actions: [
      { id: 'start_ai', label: 'AI活用を相談する', track: 'ai' },
      { id: 'start_web', label: 'Web制作を相談する', track: 'web' },
      {
        id: 'see_related',
        label: 'デモを体験する',
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
    return '/cases'
  }
  return null
}
