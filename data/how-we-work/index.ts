import type { HowWeWorkDemoGuide } from './types'
import {
  HOW_WE_WORK_HUB_LEAD,
  HOW_WE_WORK_LEAD,
  HOW_WE_WORK_STEPS,
  HOW_WE_WORK_TITLE,
} from './steps'
import {
  dataToPredictionGuide,
  documentToExtractionGuide,
  knowledgeToSearchGuide,
  multiInputToReportGuide,
  photoToClassificationGuide,
  voiceToStructuredGuide,
  workflowToAutomationGuide,
} from './demos/guides'
import { HOW_WE_WORK_BASE, getHowWeWorkHref } from './types'

export const howWeWorkDemoGuides: HowWeWorkDemoGuide[] = [
  voiceToStructuredGuide,
  photoToClassificationGuide,
  documentToExtractionGuide,
  dataToPredictionGuide,
  workflowToAutomationGuide,
  knowledgeToSearchGuide,
  multiInputToReportGuide,
]

export function getHowWeWorkDemoGuide(
  demoSlug: string,
): HowWeWorkDemoGuide | undefined {
  return howWeWorkDemoGuides.find((g) => g.demoSlug === demoSlug)
}

export function getAllHowWeWorkDemoSlugs(): string[] {
  return howWeWorkDemoGuides.map((g) => g.demoSlug)
}

export {
  HOW_WE_WORK_BASE,
  HOW_WE_WORK_HUB_LEAD,
  HOW_WE_WORK_LEAD,
  HOW_WE_WORK_STEPS,
  HOW_WE_WORK_TITLE,
  getHowWeWorkHref,
}
export type { HowWeWorkDemoGuide, HowWeWorkStep } from './types'
