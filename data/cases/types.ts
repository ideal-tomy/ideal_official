export interface CaseFlowStep {
  label: string
  detail?: string
}

export interface CaseStudy {
  slug: string
  industry: string
  industryLabel: string
  title: string
  subtitle: string
  lead: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  before: {
    title: string
    summary: string
    steps: CaseFlowStep[]
  }
  after: {
    title: string
    summary: string
    steps: CaseFlowStep[]
  }
  relatedDemo: {
    slug: string
    label: string
    href: string
    description: string
  }
  contactHref: string
  status: 'published' | 'coming_soon'
}

export const CASES_BASE = '/cases'
export const CASES_INDUSTRIES_BASE = `${CASES_BASE}/industries`
