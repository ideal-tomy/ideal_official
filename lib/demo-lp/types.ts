/**
 * デモ紹介LP 共通CONFIG型定義 v1.0 + W型拡張
 * 正本: docs/re_demo/lp-config.types.ts
 */

/** F型=部品能力 / W型=業種ワークフロー */
export type LpKind = 'feature' | 'workflow'

export interface Asset {
  src: string
  alt: string
  note?: string
}

export interface Cta {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
}

export type Highlight = string[]

export interface BrandConfig {
  id: 'axeon' | 'ideal'
  companyName: string
  logo: Asset
  firstPerson: string
  colors: {
    primary: string
    accent: string
    ink: string
    surface: string
  }
  form: {
    endpoint: string
    privacyUrl: string
  }
  footer: {
    address?: string
    contactUrl: string
  }
}

export interface HeroBlock {
  eyebrow?: string
  headline: string
  subline: string
  body: string
  highlight?: Highlight
  ctas: [Cta, Cta]
  badges?: string[]
  visual: Asset & { fit?: 'cover' | 'contain' }
}

export interface ImpactBlock {
  mainFigure: {
    lead: string
    value: string
    trail: string
  }
  basis: string
  metrics: [MetricCard, MetricCard, MetricCard, MetricCard]
}

export interface MetricCard {
  value: string
  label: string
}

export interface Pillar {
  icon: string
  title: string
  body: string
  highlight?: Highlight
}

export interface ProblemBlock {
  label: string
  headline: string
  lead: string
  items: [ProblemItem, ProblemItem, ProblemItem, ProblemItem]
  illustration?: Asset
  /** 図で説明する項目はカード表示を省略（例: 01・04） */
  cardHiddenItemNos?: string[]
  /** セクション内の図解（テキスト羅列の代替） */
  spotDiagrams?: ProblemSpotDiagram[]
  summary: {
    headline: string
    body: string
  }
}

/** B04 など：図の挿入位置 */
export interface ProblemSpotDiagram {
  asset: Asset
  placement: 'after-lead' | 'before-summary'
}

export interface ProblemItem {
  no: string
  title: string
  body: string
}

/** W型: 毎日の作業とは別軸の「よく起きる問題」（図1枚＋締め） */
export interface RecurringProblemsBlock {
  label: string
  headline: string
  lead?: string
  diagram: Asset
  closing: {
    line1: string
    line2?: string
  }
}

export interface FitBlock {
  label: string
  headline: string
  lead: string
  conditions: [FitCondition, FitCondition, FitCondition]
  /** W型: 工種・ツールは問わない旨など */
  scopeNote?: string
  affirm: string
  exclude: string
}

export interface FitCondition {
  no: string
  title: string
  body: string
  /** W型: 現場監督・職長 など業界語 */
  roleLabel?: string
}

export interface UseCase {
  industry: string
  icon: string
  scope: string
  quote: string
  body: string
}

export interface UseCasesBlock {
  label: string
  headline: string
  lead: string
  items: UseCase[]
  more: string
}

export interface MechanismBlock {
  label: string
  headline: string
  lead: string
  diagram: Asset
  /** 左列の見出し（既定: 壁） */
  wallLabel?: string
  items: MechanismItem[]
}

export interface MechanismItem {
  wall: string
  techNo: string
  techName: string
  body: string
  effect: string
}

export interface ResultShotBlock {
  caption: string
  image: Asset
  note: string
}

/** W-B08: 役割別タブ1枚 */
export interface ResultTab {
  id: string
  label: string
  surface?: 'mobile' | 'dashboard' | 'document'
  caption: string
  image: Asset
}

/** 単発ショット or 役割別タブ（W型は tabs を推奨） */
export type ResultBlock =
  | ResultShotBlock
  | {
      note: string
      tabs: [ResultTab, ResultTab, ResultTab]
    }

/** W-B07a 部品カタログ1枚 */
export interface PartCard {
  no: string
  name: string
  body: string
  /** 減らせる作業の補足（任意。未設定ならカードに表示しない） */
  seamRemoved?: string
  standalone: boolean
  dependsOn?: string[]
  demoUrl: string
  lpUrl?: string
}

export interface PartsCatalogBlock {
  label: string
  headline: string
  lead: string
  closing: string
  /** W-B07a 前の全体図（部品→フロー） */
  diagram?: Asset
  items: PartCard[]
}

export interface ComparisonBlock {
  label: string
  headline: string
  lead: string
  columns: {
    common: string
    ours: string
  }
  rows: ComparisonRow[]
  fairnessNote: string
}

export interface ComparisonRow {
  point: string
  common: string
  ours: string
}

export interface GrowthBlock {
  label: string
  headline: string
  lead: string
  cycles: [GrowthCycle, GrowthCycle, GrowthCycle]
  illustration?: Asset
  closing: string
}

export interface GrowthCycle {
  no: string
  title: string
  body: string
}

export interface RoiSlider {
  key: string
  label: string
  unit: string
  min: number
  max: number
  step: number
  defaultValue: number
  note: string
}

export interface RoiConfig {
  sliders: RoiSlider[]
  computeAnnualLoss: (v: Record<string, number>) => number
  computeRecoverable: (v: Record<string, number>) => number
  estimateDevCost?: (v: Record<string, number>) => { low: number; high: number }
  outputs: {
    lossLabel: string
    recoverableLabel: string
    paybackLabel?: string
    /** 金額に丸めない指標（例: 提出リードタイム） */
    leadTimeLabel?: string
    leadTimeValue?: string
  }
  cta: Cta
  disclaimer: string
}

export interface RoiBlock {
  label: string
  headline: string
  lead: string
  config: RoiConfig
}

export interface ProcessBlock {
  label: string
  headline: string
  lead: string
  steps: [ProcessStep, ProcessStep, ProcessStep]
  illustration?: Asset
  exitNote: string
  /** 導入の流れ詳細など（W型: /how-we-work） */
  detailHref?: string
  detailLabel?: string
}

export interface ProcessStep {
  no: string
  title: string
  costLabel: string
  body: string
}

export type FaqCategory =
  | 'fit'
  | 'price'
  | 'running-cost'
  | 'environment'
  | 'accuracy'
  | 'security'
  | 'coexistence'
  | 'preparation'
  | 'small-start'
  | 'flow-fit'
  | 'partial'
  | 'other'

export interface FaqItem {
  category: FaqCategory
  q: string
  a: string
  defaultOpen?: boolean
}

export type FormFieldKey = 'company' | 'name' | 'email' | 'message' | 'privacy'

export interface FormField {
  key: FormFieldKey
  label: string
  placeholder?: string
  required: boolean
  type: 'text' | 'email' | 'textarea' | 'checkbox'
}

export interface FinalCtaBlock {
  headline: string
  body: string
  assurances: [string, string, string]
  formTitle: string
  formNote: string
  fields: FormField[]
  tryCta: Cta
}

export interface DeliveryConfig {
  slug: string
  demoName: string
  demoUrl: string
  /** 公開パス用。未指定時は feature = /demo/{slug}、workflow = /demo/w/{slug} */
  publicPath?: string
  kind?: LpKind
  ogp: {
    title: string
    description: string
    image: Asset
  }
  noindex: boolean
  trackReferrer: boolean
}

export interface LpConfig {
  delivery: DeliveryConfig
  brand: BrandConfig
  hero: HeroBlock
  impact: ImpactBlock
  pillars?: [Pillar, Pillar, Pillar]
  problem: ProblemBlock
  /** W型: 提出前のリスクなど、毎日の作業とは別のよく起きる問題 */
  recurringProblems?: RecurringProblemsBlock
  fit: FitBlock
  usecases?: UseCasesBlock
  /** W-B07a 部品カタログ */
  partsCatalog?: PartsCatalogBlock
  /** B07b 連結の仕組み（W型で省略可） */
  mechanism?: MechanismBlock
  /** 単発 or 役割別タブ（resultTabs があれば優先） */
  resultShot?: ResultShotBlock
  resultTabs?: {
    sectionLabel?: string
    headline?: string
    note: string
    tabs: [ResultTab, ResultTab, ResultTab]
  }
  comparison?: ComparisonBlock
  growth?: GrowthBlock
  roi: RoiBlock
  process: ProcessBlock
  faq: FaqItem[]
  finalCta: FinalCtaBlock
}

/** 公開URLを導出 */
export function getLpPublicPath(delivery: DeliveryConfig): string {
  if (delivery.publicPath) return delivery.publicPath
  if (delivery.kind === 'workflow') return `/demo/w/${delivery.slug}`
  return `/demo/${delivery.slug}`
}
