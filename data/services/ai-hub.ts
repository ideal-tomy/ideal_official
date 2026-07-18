import {
  GALLERY_BASE,
  capabilities,
  type Capability,
} from '@/data/ai-capability-gallery/capabilities'
import { getCaseHref } from '@/data/cases'

export const AI_HUB_GALLERY = GALLERY_BASE

export const aiHubHero = {
  eyebrow: 'Demo-First AI',
  titleLine1: 'AIで、仕事はどこまで',
  titleLine2: '変えられるか。',
  subtitle:
    '提案書の前に、触ってください。7つの業務変化デモから自社に近いパターンを見つけ、判断の根拠まで体験できます。',
  primaryCta: {
    label: 'デモギャラリーを体験する',
    href: GALLERY_BASE,
  },
  secondaryCta: {
    label: 'AI開発を相談する',
    href: '/contact?service=ai-consulting',
  },
} as const

/** 注目デモ（Gallery ショーケースへのアンカー） */
export const featuredDemoSlugs = [
  'photo-to-classification',
  'voice-to-structured',
  'document-to-extraction',
] as const

export function getFeaturedCapabilities(): Capability[] {
  return featuredDemoSlugs
    .map((slug) => capabilities.find((c) => c.slug === slug))
    .filter((c): c is Capability => Boolean(c))
}

export function galleryCapabilityHref(slug: string): string {
  return `${GALLERY_BASE}#capability-${slug}`
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
    label: 'DD / 契約',
    hint: '文書からの情報抽出',
    href: getCaseHref('dd-document-extraction'),
    status: 'case' as const,
  },
  {
    id: 'retail',
    label: '店舗 / 小売',
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

export const techDetailItems = [
  {
    id: 'automation',
    title: '業務効率化・自動化',
    summary:
      '定型業務の代行、ヒューマンエラー削減、コア業務への時間シフト。デモの「業務 → 自動化」「音声 → 構造化」と直結します。',
  },
  {
    id: 'marketing',
    title: 'マーケティング・顧客分析',
    summary:
      '顧客データやトレンド分析、配信最適化。予測・ナレッジ検索のパターンと組み合わせて設計します。',
  },
  {
    id: 'quality',
    title: '品質管理・需要予測',
    summary:
      '画像認識や時系列予測によるリスク低減。デモの「写真 → 分類」「データ → 予測」が入口です。',
  },
  {
    id: 'ml',
    title: '機械学習・NLP・画像認識',
    summary:
      'モデル開発から LLM / 画像認識の実装まで。Hub では詳細を畳み、興味がある方だけ展開します。',
  },
  {
    id: 'consulting',
    title: '戦略・実装支援',
    summary:
      'AI戦略、データ分析、実装伴走。まずはデモで変化を共有し、その後にロードマップへ進みます。',
  },
] as const

export const whatWeBuild = [
  '業務自動化・社内ツールへのAI組み込み',
  'ChatGPT / Gemini 等を活用したワークフロー設計',
  'AI機能付き Web・アプリの開発支援',
] as const
