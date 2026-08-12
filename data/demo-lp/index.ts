import type { LpConfig } from '@/lib/demo-lp/types'
import { assertLpConfig } from '@/lib/demo-lp/assert'
import { knowledgeToSearchLp } from './knowledge-to-search'
import { documentToExtractionLp } from './document-to-extraction'
import { voiceToStructuredLp } from './voice-to-structured'
import { photoToClassificationLp } from './photo-to-classification'
import { dataToPredictionLp } from './data-to-prediction'
import { workflowToAutomationLp } from './workflow-to-automation'
import { multiInputToReportLp } from './multi-input-to-report'
import { constructionRecordLp } from './construction-record'
import { careRecordsLp } from './care-records'
import { manufacturingJudgmentLp } from './manufacturing-judgment'
import { retailSupportLp } from './retail-support'
import { receivingApprovalLp } from './receiving-approval'
import { childcareRecordsLp } from './childcare-records'

/** F型（能力）+ W型（業種）共用レジストリ。slug は重複させない */
export const demoLpRegistry: Record<string, LpConfig> = {
  [knowledgeToSearchLp.delivery.slug]: knowledgeToSearchLp,
  [documentToExtractionLp.delivery.slug]: documentToExtractionLp,
  [voiceToStructuredLp.delivery.slug]: voiceToStructuredLp,
  [photoToClassificationLp.delivery.slug]: photoToClassificationLp,
  [dataToPredictionLp.delivery.slug]: dataToPredictionLp,
  [workflowToAutomationLp.delivery.slug]: workflowToAutomationLp,
  [multiInputToReportLp.delivery.slug]: multiInputToReportLp,
  [constructionRecordLp.delivery.slug]: constructionRecordLp,
  [careRecordsLp.delivery.slug]: careRecordsLp,
  [manufacturingJudgmentLp.delivery.slug]: manufacturingJudgmentLp,
  [retailSupportLp.delivery.slug]: retailSupportLp,
  [receivingApprovalLp.delivery.slug]: receivingApprovalLp,
  [childcareRecordsLp.delivery.slug]: childcareRecordsLp,
}

export const demoLpSlugs = Object.keys(demoLpRegistry)

export const workflowLpSlugs = demoLpSlugs.filter(
  (s) => demoLpRegistry[s]?.delivery.kind === 'workflow',
)

export function getDemoLp(slug: string): LpConfig | undefined {
  return demoLpRegistry[slug]
}

export function getDemoLpOrThrow(slug: string): LpConfig {
  const cfg = getDemoLp(slug)
  if (!cfg) throw new Error(`Unknown demo LP slug: ${slug}`)
  const errors = assertLpConfig(cfg)
  if (errors.length) {
    throw new Error(`LpConfig invalid (${slug}):\n${errors.join('\n')}`)
  }
  return cfg
}

export function listDemoLpSlugs(): string[] {
  return demoLpSlugs
}

export function listWorkflowLpSlugs(): string[] {
  return workflowLpSlugs
}
