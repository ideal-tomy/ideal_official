/**
 * コンシェルジュ起動時のページ文脈（ルールベース解決）
 */

import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'
import { getCaseBySlug } from '@/data/cases'
import { getInsightBySlug } from '@/data/lab/insights'
import { getCurrentServiceId } from '@/data/services/service-links'

export type ConciergePageType =
  | 'home'
  | 'demo'
  | 'demo_hub'
  | 'service'
  | 'case'
  | 'lab'
  | 'insight'
  | 'contact'
  | 'other'

export type ConciergePageContext = {
  pathname: string
  pageType: ConciergePageType
  /** デモ slug（例: voice-to-structured） */
  demoId?: string
  /** Cases slug（例: construction-photo-sorting） */
  caseSlug?: string
  /** サービスID（例: ai-consulting）— 現行 serviceHint と互換 */
  serviceId?: string
  /** Insights slug 等 */
  insightSlug?: string
  /** 業界キー（construction 等） */
  industry?: string
  /** UI表示用の短いラベル */
  label?: string
}

function normalizePathname(pathname: string): string {
  if (!pathname) return '/'
  const noQuery = pathname.split('?')[0] ?? pathname
  if (noQuery.length > 1 && noQuery.endsWith('/')) {
    return noQuery.slice(0, -1)
  }
  return noQuery || '/'
}

/**
 * pathname から PageContext を解決する（LLM 不使用）
 */
export function resolvePageContext(pathname: string): ConciergePageContext {
  const path = normalizePathname(pathname)

  if (path === '/') {
    return { pathname: path, pageType: 'home', label: 'トップ' }
  }

  if (path === '/contact') {
    return { pathname: path, pageType: 'contact', label: 'お問い合わせ' }
  }

  if (path === '/estimate') {
    return { pathname: path, pageType: 'other', label: '自動見積もり' }
  }

  if (path === '/ai-capability-gallery') {
    return {
      pathname: path,
      pageType: 'demo_hub',
      label: 'AI Capability Gallery',
    }
  }

  const demoMatch = path.match(/^\/ai-capability-gallery\/([^/]+)$/)
  if (demoMatch) {
    const demoId = demoMatch[1]
    const cap = getCapabilityBySlug(demoId)
    return {
      pathname: path,
      pageType: 'demo',
      demoId,
      label: cap ? `${cap.subtitle}` : demoId,
      industry: cap?.tags[0],
    }
  }

  const caseMatch = path.match(/^\/cases\/industries\/([^/]+)$/)
  if (caseMatch) {
    const caseSlug = caseMatch[1]
    const study = getCaseBySlug(caseSlug)
    return {
      pathname: path,
      pageType: 'case',
      caseSlug,
      demoId: study?.relatedDemo.slug,
      industry: study?.industry,
      label: study?.subtitle ?? caseSlug,
      serviceId: 'ai-consulting',
    }
  }

  if (path === '/cases') {
    return {
      pathname: path,
      pageType: 'case',
      label: '活用イメージ',
      serviceId: 'ai-consulting',
    }
  }

  if (path.startsWith('/services/')) {
    const serviceId = getCurrentServiceId(path)
    const labels: Record<string, string> = {
      'web-development': 'Webサイト制作',
      'app-development': 'Webアプリ・業務ツール',
      'ai-consulting': 'AI',
      'blockchain-development': 'Blockchain / DAO',
      metaverse: 'Spatial / VR・AR',
    }
    return {
      pathname: path,
      pageType: 'service',
      serviceId,
      label: labels[serviceId] ?? serviceId,
    }
  }

  const insightMatch = path.match(/^\/lab\/insights\/([^/]+)$/)
  if (insightMatch) {
    const insightSlug = insightMatch[1]
    const insight = getInsightBySlug(insightSlug)
    return {
      pathname: path,
      pageType: 'insight',
      insightSlug,
      label: insight?.title ?? 'LAB Insights',
      serviceId:
        insight?.category === 'web' ? 'web-development' : 'ai-consulting',
    }
  }

  if (
    path === '/lab' ||
    path === '/lab/insights' ||
    path === '/lab/blockchain' ||
    path === '/lab/metaverse' ||
    path === '/philosophy' ||
    path === '/research'
  ) {
    return {
      pathname: path,
      pageType: 'lab',
      label: 'LAB',
      serviceId:
        path.includes('blockchain') || path === '/philosophy'
          ? 'blockchain-development'
          : path.includes('metaverse')
            ? 'metaverse'
            : undefined,
    }
  }

  return { pathname: path, pageType: 'other', label: path }
}

/** 文脈オープニングを出すページか（home / other / contact は従来の root へ） */
export function shouldShowContextOpening(
  ctx: ConciergePageContext | undefined,
): boolean {
  if (!ctx) return false
  return (
    ctx.pageType === 'demo' ||
    ctx.pageType === 'demo_hub' ||
    ctx.pageType === 'service' ||
    ctx.pageType === 'case' ||
    ctx.pageType === 'lab' ||
    ctx.pageType === 'insight'
  )
}
