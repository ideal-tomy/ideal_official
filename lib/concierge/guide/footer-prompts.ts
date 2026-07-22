/**
 * Footer 読了あいさつ — ページ種別ごとの文言と次導線チップ
 */

import {
  resolvePageContext,
  type ConciergePageType,
} from '@/lib/concierge/page-context'

export type FooterChip = {
  label: string
  href: string
}

export type FooterPrompt = {
  enabled: boolean
  greeting: string
  chips: FooterChip[]
}

const DEFAULT_GREETING =
  '読んでくれてありがとうございます。よかったらこちらも読み進めてください。'

function chipsFor(
  pageType: ConciergePageType,
  pathname: string,
): FooterChip[] {
  const path = pathname.split('?')[0] || '/'

  if (path === '/estimate') {
    return [
      { label: '導入の流れ', href: '/how-we-work' },
      { label: 'お問い合わせ', href: '/contact' },
    ]
  }

  if (path === '/how-we-work' || path.startsWith('/how-we-work/')) {
    return [
      { label: 'デモ一覧', href: '/ai-capability-gallery' },
      { label: '概算見積もり', href: '/estimate' },
      { label: 'お問い合わせ', href: '/contact' },
    ]
  }

  switch (pageType) {
    case 'home':
      return [
        { label: 'デモ一覧', href: '/ai-capability-gallery' },
        { label: '活用イメージ', href: '/cases' },
        { label: '概算見積もり', href: '/estimate' },
      ]
    case 'demo_hub':
      return [
        { label: '活用イメージ', href: '/cases' },
        { label: '概算見積もり', href: '/estimate' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
    case 'demo':
      return [
        { label: '活用イメージ', href: '/cases' },
        { label: '導入の流れ', href: '/how-we-work' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
    case 'case':
      return [
        { label: 'デモ一覧', href: '/ai-capability-gallery' },
        { label: '概算見積もり', href: '/estimate' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
    case 'service':
      return [
        { label: 'デモ一覧', href: '/ai-capability-gallery' },
        { label: '概算見積もり', href: '/estimate' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
    case 'lab':
    case 'insight':
      return [
        { label: 'デモ一覧', href: '/ai-capability-gallery' },
        { label: '活用イメージ', href: '/cases' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
    case 'contact':
      return []
    default:
      return [
        { label: 'デモ一覧', href: '/ai-capability-gallery' },
        { label: '概算見積もり', href: '/estimate' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
  }
}

function filterSelfLinks(chips: FooterChip[], pathname: string): FooterChip[] {
  const path = pathname.split('?')[0] || '/'
  return chips.filter((c) => {
    const hrefPath = c.href.split('#')[0] || c.href
    if (hrefPath === path) return false
    return true
  })
}

export function getFooterPrompt(pathname: string): FooterPrompt {
  const ctx = resolvePageContext(pathname)
  if (ctx.pageType === 'contact') {
    return { enabled: false, greeting: '', chips: [] }
  }

  const chips = filterSelfLinks(chipsFor(ctx.pageType, ctx.pathname), ctx.pathname)
  return {
    enabled: chips.length > 0,
    greeting: DEFAULT_GREETING,
    chips,
  }
}

export const FOOTER_CHIP_DELAY_MS = 2800
export const WELCOME_AUTO_DISMISS_MS = 3000
export const WELCOME_MESSAGE = '来てくれてありがとうございます。'

export function footerGreetedStorageKey(pathname: string): string {
  const path = pathname.split('?')[0] || '/'
  return `ideal_footer_greeted:${path}`
}

export const WELCOME_STORAGE_KEY = 'ideal_welcome_greeted'
