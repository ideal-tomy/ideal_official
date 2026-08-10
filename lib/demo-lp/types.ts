/**
 * デモ紹介LP 共通CONFIG型定義 v1.0
 * 正本: docs/re_demo/lp-config.types.ts
 */

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
  badges: [string, string, string]
  visual: Asset
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
  summary: {
    headline: string
    body: string
  }
}

export interface ProblemItem {
  no: string
  title: string
  body: string
}

export interface FitBlock {
  label: string
  headline: string
  lead: string
  conditions: [FitCondition, FitCondition, FitCondition]
  affirm: string
  exclude: string
}

export interface FitCondition {
  no: string
  title: string
  body: string
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
  fit: FitBlock
  usecases?: UseCasesBlock
  mechanism: MechanismBlock
  resultShot?: ResultShotBlock
  comparison?: ComparisonBlock
  growth?: GrowthBlock
  roi: RoiBlock
  process: ProcessBlock
  faq: FaqItem[]
  finalCta: FinalCtaBlock
}
