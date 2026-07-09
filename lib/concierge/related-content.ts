/**
 * コンシェルジュ結果画面向けの関連デモ / Cases（静的ルール）
 */

import {
  capabilities,
  getCapabilityBySlug,
  type Capability,
} from '@/data/ai-capability-gallery/capabilities'
import { getCaseBySlug, getPublishedCases, type CaseStudy } from '@/data/cases'
import type { FlowAnswer, IdealTrack } from './ideal-flow'
import { resolveEffectiveTrack } from './ideal-flow'
import type { ConciergePageContext } from './page-context'

export type RelatedDemoLink = {
  slug: string
  label: string
  href: string
  description: string
}

export type RelatedCaseLink = {
  slug: string
  label: string
  href: string
  description: string
}

const DEMO_TO_CASE: Record<string, string> = {
  'photo-to-classification': 'construction-photo-sorting',
  'voice-to-structured': 'care-voice-records',
  'document-to-extraction': 'dd-document-extraction',
  'data-to-prediction': 'retail-demand-prediction',
  'workflow-to-automation': 'backoffice-workflow-automation',
  'multi-input-to-report': 'agriculture-field-report',
  'knowledge-to-search': 'backoffice-workflow-automation',
}

const TRACK_DEFAULT_DEMOS: Record<Exclude<IdealTrack, 'unsure'>, string[]> = {
  web: ['workflow-to-automation', 'knowledge-to-search'],
  app: ['workflow-to-automation', 'data-to-prediction'],
  ai: ['photo-to-classification', 'voice-to-structured', 'document-to-extraction'],
  bc: ['knowledge-to-search'],
}

function toDemoLink(cap: Capability): RelatedDemoLink {
  return {
    slug: cap.slug,
    label: cap.subtitle,
    href: cap.href,
    description: cap.description,
  }
}

function toCaseLink(study: CaseStudy): RelatedCaseLink {
  return {
    slug: study.slug,
    label: study.subtitle,
    href: `/cases/industries/${study.slug}`,
    description: study.lead,
  }
}

export function getRelatedDemos(
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
): RelatedDemoLink[] {
  const seen = new Set<string>()
  const out: RelatedDemoLink[] = []

  const push = (slug: string | undefined) => {
    if (!slug || seen.has(slug)) return
    const cap = getCapabilityBySlug(slug)
    if (!cap || cap.status !== 'ready') return
    seen.add(slug)
    out.push(toDemoLink(cap))
  }

  if (pageContext?.demoId) push(pageContext.demoId)
  if (pageContext?.caseSlug) {
    const study = getCaseBySlug(pageContext.caseSlug)
    if (study) push(study.relatedDemo.slug)
  }

  const effective = resolveEffectiveTrack(track, answers)
  const situation = answers.find((a) => a.stepId === 'situation')?.choiceId

  if (effective === 'ai' || track === 'ai') {
    if (situation === 'ai-workflow') push('workflow-to-automation')
    if (situation === 'ai-data') push('data-to-prediction')
    if (situation === 'ai-product') push('knowledge-to-search')
  }
  if (effective === 'web' && situation === 'web-ops') {
    push('workflow-to-automation')
  }

  if (effective !== 'unsure') {
    for (const slug of TRACK_DEFAULT_DEMOS[effective]) {
      push(slug)
      if (out.length >= 2) break
    }
  }

  if (out.length === 0) {
    for (const cap of capabilities) {
      if (cap.status === 'ready') {
        push(cap.slug)
        if (out.length >= 2) break
      }
    }
  }

  return out.slice(0, 2)
}

export function getRelatedCases(
  pageContext?: ConciergePageContext,
): RelatedCaseLink[] {
  if (pageContext?.caseSlug) {
    const study = getCaseBySlug(pageContext.caseSlug)
    if (study && study.status === 'published') {
      return [toCaseLink(study)]
    }
  }
  if (pageContext?.demoId) {
    const caseSlug = DEMO_TO_CASE[pageContext.demoId]
    if (caseSlug) {
      const study = getCaseBySlug(caseSlug)
      if (study && study.status === 'published') {
        return [toCaseLink(study)]
      }
    }
  }
  const published = getPublishedCases()
  return published.slice(0, 1).map(toCaseLink)
}

/** 想定機能タグ（ルールベース） */
export function getSuggestedFeatureTags(
  track: IdealTrack,
  answers: FlowAnswer[],
  pageContext?: ConciergePageContext,
): string[] {
  const effective = resolveEffectiveTrack(track, answers)
  const tags = new Set<string>()

  if (pageContext?.demoId) {
    const cap = getCapabilityBySlug(pageContext.demoId)
    if (cap) {
      if (cap.slug.includes('photo')) {
        tags.add('写真アップロード')
        tags.add('AI画像分類')
      }
      if (cap.slug.includes('voice')) {
        tags.add('音声入力')
        tags.add('構造化データ')
      }
      if (cap.slug.includes('document')) {
        tags.add('文書OCR')
        tags.add('情報抽出')
      }
      if (cap.slug.includes('workflow')) {
        tags.add('業務自動化')
        tags.add('自動通知')
      }
      if (cap.slug.includes('data')) {
        tags.add('データ分析')
        tags.add('予測')
      }
      if (cap.slug.includes('knowledge')) {
        tags.add('ナレッジ検索')
        tags.add('根拠付き回答')
      }
      if (cap.slug.includes('report') || cap.slug.includes('multi')) {
        tags.add('報告書生成')
        tags.add('複数入力統合')
      }
    }
  }

  if (effective === 'web') {
    tags.add('ページ設計')
    tags.add('CMS / 更新')
    tags.add('問い合わせ導線')
  }
  if (effective === 'app') {
    tags.add('画面設計')
    tags.add('管理画面')
    tags.add('データベース')
  }
  if (effective === 'ai') {
    tags.add('AI処理')
    tags.add('管理画面')
  }
  if (effective === 'bc') {
    tags.add('コントラクト設計')
    tags.add('ウォレット連携')
  }

  const situation = answers.find((a) => a.stepId === 'situation')?.choiceId
  if (situation === 'web-ops' || situation === 'ai-workflow') {
    tags.add('業務フロー整理')
  }

  return Array.from(tags).slice(0, 6)
}
