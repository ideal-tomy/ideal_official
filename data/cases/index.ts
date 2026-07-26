import type { CaseStudy } from './types'
import { CASES_INDUSTRIES_BASE } from './types'
import { constructionPhotoSorting } from './construction-photo-sorting'
import { careVoiceRecords } from './care-voice-records'
import { agricultureFieldReport } from './agriculture-field-report'
import { ddDocumentExtraction } from './dd-document-extraction'
import { retailDemandPrediction } from './retail-demand-prediction'
import { backofficeWorkflowAutomation } from './backoffice-workflow-automation'
import { knowledgeInternalSearch } from './knowledge-internal-search'

export const caseStudies: CaseStudy[] = [
  constructionPhotoSorting,
  careVoiceRecords,
  agricultureFieldReport,
  ddDocumentExtraction,
  retailDemandPrediction,
  backofficeWorkflowAutomation,
  knowledgeInternalSearch,
]

export function getPublishedCases(): CaseStudy[] {
  return caseStudies.filter((c) => c.status === 'published')
}

export type CaseIndustryGroup = {
  industry: string
  industryLabel: string
  cases: CaseStudy[]
}

/** 公開中の活用イメージを業種順でグループ化（一覧の読み物ディレクトリ用） */
export function groupPublishedCasesByIndustry(): CaseIndustryGroup[] {
  const groups: CaseIndustryGroup[] = []
  const indexByIndustry = new Map<string, number>()

  for (const caseStudy of getPublishedCases()) {
    const existing = indexByIndustry.get(caseStudy.industry)
    if (existing === undefined) {
      indexByIndustry.set(caseStudy.industry, groups.length)
      groups.push({
        industry: caseStudy.industry,
        industryLabel: caseStudy.industryLabel,
        cases: [caseStudy],
      })
      continue
    }
    groups[existing].cases.push(caseStudy)
  }

  return groups
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

/** 簡易デモ slug から対応する活用イメージを返す */
export function getCaseByRelatedDemoSlug(
  demoSlug: string,
): CaseStudy | undefined {
  return getPublishedCases().find((c) => c.relatedDemo.slug === demoSlug)
}

export function getCaseHref(slug: string): string {
  return `${CASES_INDUSTRIES_BASE}/${slug}`
}

export { CASES_BASE, CASES_INDUSTRIES_BASE } from './types'
export type { CaseStudy, CaseFlowStep } from './types'
