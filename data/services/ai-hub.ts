import {
  GALLERY_BASE,
  capabilities,
  type Capability,
} from '@/data/ai-capability-gallery/capabilities'
import { getCaseHref } from '@/data/cases'

export const AI_HUB_GALLERY = GALLERY_BASE

export const aiHubHero = {
  title: 'AIで仕事は変わっていく',
  subtitle:
    '提案書の前に、触ってください。7つの業務変化デモから自社に近いパターンを見つけられます。',
  primaryCta: {
    label: 'デモ一覧を体験する',
    href: GALLERY_BASE,
  },
  secondaryCta: {
    label: 'AI開発を相談する',
    href: '/contact?service=ai-consulting',
  },
} as const

/** 注目デモ（TOP Showcase と同じ3本で揃える） */
export const featuredDemoSlugs = [
  'photo-to-classification',
  'knowledge-to-search',
  'voice-to-structured',
] as const

/** /services 製作タブ「ここで触ってみる」用（入力種別が被らない順） */
export const servicesFeaturedDemoSlugs = [
  'voice-to-structured',
  'knowledge-to-search',
  'photo-to-classification',
] as const

export function getFeaturedCapabilities(): Capability[] {
  return featuredDemoSlugs
    .map((slug) => capabilities.find((c) => c.slug === slug))
    .filter((c): c is Capability => Boolean(c))
}

export function getServicesFeaturedCapabilities(): Capability[] {
  return servicesFeaturedDemoSlugs
    .map((slug) => capabilities.find((c) => c.slug === slug))
    .filter((c): c is Capability => Boolean(c))
}

/** @deprecated ギャラリー内アンカーはモバイルで無効なため、個別デモ URL を返す */
export function galleryCapabilityHref(slug: string): string {
  return galleryDemoHref(slug)
}

export function galleryDemoHref(slug: string): string {
  return `${GALLERY_BASE}/${slug}`
}

/** 業界で見る（Cases 記事へ） */
export const industryEntries = [
  {
    id: 'construction',
    label: '建設',
    hint: '現場写真の整理・報告書',
    href: getCaseHref('construction-photo-sorting'),
    status: 'case' as const,
  },
  {
    id: 'care',
    label: '介護',
    hint: 'ケア記録の音声入力',
    href: getCaseHref('care-voice-records'),
    status: 'case' as const,
  },
  {
    id: 'agriculture',
    label: '農業',
    hint: '記録・報告の自動化',
    href: getCaseHref('agriculture-field-report'),
    status: 'case' as const,
  },
  {
    id: 'dd',
    label: '法務',
    hint: '文書からの情報抽出',
    href: getCaseHref('dd-document-extraction'),
    status: 'case' as const,
  },
  {
    id: 'retail',
    label: '小売',
    hint: '需要予測・判断支援',
    href: getCaseHref('retail-demand-prediction'),
    status: 'case' as const,
  },
  {
    id: 'backoffice',
    label: 'バックオフィス',
    hint: '定型業務の自動化',
    href: getCaseHref('backoffice-workflow-automation'),
    status: 'case' as const,
  },
] as const

/** 課題から見る */
export const problemEntries = [
  {
    id: 'input',
    problem: '入力が面倒',
    solution: '話すだけで記録が完成',
    href: getCaseHref('care-voice-records'),
  },
  {
    id: 'photos',
    problem: '写真が散らばる',
    solution: '送るだけで自動分類',
    href: getCaseHref('construction-photo-sorting'),
  },
  {
    id: 'documents',
    problem: '文書を読む負担が大きい',
    solution: '必要な情報だけ抽出',
    href: getCaseHref('dd-document-extraction'),
  },
  {
    id: 'repeat',
    problem: '同じ作業の繰り返し',
    solution: '流れごと代行',
    href: getCaseHref('backoffice-workflow-automation'),
  },
] as const

export const processSteps = [
  {
    step: 1,
    title: '課題を見つける',
    description:
      'デモで近いパターンを選び、現場のどこに技術を入れるかを一緒に整理します。',
  },
  {
    step: 2,
    title: 'プロトタイプで見せる',
    description:
      '本番前に触れる形で変化を確認。要件が固まっていなくても進められます。',
  },
  {
    step: 3,
    title: '業務へつなぐ',
    description:
      '既存ツールやデータ連携を含め、現場で使える形まで実装・伴走します。',
  },
] as const

/** TOP デモ（建設・製造・承認・保育）で未使用の能力パターンショーケース */
export type AiWhatWeBuildShowcaseSlug =
  | 'document-to-extraction'
  | 'workflow-to-automation'
  | 'voice-to-structured'

export type AiWhatWeBuildItem = {
  title: string
  description: string
  showcaseSlug: AiWhatWeBuildShowcaseSlug
  imageAlt: string
}

export const whatWeBuild: readonly AiWhatWeBuildItem[] = [
  {
    title: '業務自動化・社内ツールへのAI組み込み',
    description:
      '既存の管理画面や業務Webに、要約・分類・提案を載せる。現場の画面の延長として使えます。',
    showcaseSlug: 'document-to-extraction',
    imageAlt: '契約書から必要項目を抽出し業務ツールへ渡すデモ',
  },
  {
    title: 'ChatGPT / Gemini 等を活用したワークフロー設計',
    description:
      'トリガーから処理・通知まで。メール、帳票、承認など、繰り返しの流れをAIでつなぎます。',
    showcaseSlug: 'workflow-to-automation',
    imageAlt: '申請から登録・通知まで自動化する業務フローのデモ',
  },
  {
    title: 'AI機能付き Web・アプリの開発支援',
    description:
      'チャット、要約、分類などをWebサイトや業務アプリに組み込み。触れるデモから本開発へ。',
    showcaseSlug: 'voice-to-structured',
    imageAlt: '音声入力を構造化データに変換するアプリ内デモ',
  },
] as const
