export type HowWeWorkStep = {
  id: string
  title: string
  /** 短い版用の1行 */
  summary: string
  weDo: string[]
  youDo: string[]
  notDecidedYet: string[]
}

export type HowWeWorkDemoGuide = {
  demoSlug: string
  /** ページ見出し用（デモ名を含む） */
  title: string
  lead: string
  steps: HowWeWorkStep[]
  /** 自然に合う roi-simulator kit（任意） */
  estimateKit?: string
}

export const HOW_WE_WORK_BASE = '/how-we-work'

export function getHowWeWorkHref(demoSlug?: string): string {
  if (!demoSlug) return HOW_WE_WORK_BASE
  return `${HOW_WE_WORK_BASE}/${demoSlug}`
}
