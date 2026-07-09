import type { CaseStudy } from './types'
import { CASES_INDUSTRIES_BASE } from './types'
import { constructionPhotoSorting } from './construction-photo-sorting'
import { careVoiceRecords } from './care-voice-records'
import { agricultureFieldReport } from './agriculture-field-report'
import { ddDocumentExtraction } from './dd-document-extraction'
import { retailDemandPrediction } from './retail-demand-prediction'
import { backofficeWorkflowAutomation } from './backoffice-workflow-automation'

export const caseStudies: CaseStudy[] = [
  constructionPhotoSorting,
  careVoiceRecords,
  agricultureFieldReport,
  ddDocumentExtraction,
  retailDemandPrediction,
  backofficeWorkflowAutomation,
]

export function getPublishedCases(): CaseStudy[] {
  return caseStudies.filter((c) => c.status === 'published')
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getCaseHref(slug: string): string {
  return `${CASES_INDUSTRIES_BASE}/${slug}`
}

export { CASES_BASE, CASES_INDUSTRIES_BASE } from './types'
export type { CaseStudy, CaseFlowStep } from './types'
