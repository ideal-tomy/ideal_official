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

  if (path === '/flow' || path === '/estimate' || path === '/how-we-work' || path === '/cases') {
    return [
      { label: 'お問い合わせ', href: '/contact' },
    ]
  }

  switch (pageType) {
    case 'home':
      return [
        { label: '導入の流れ', href: '/flow' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
    case 'demo_hub':
    case 'demo':
    case 'case':
    case 'service':
      return [
        { label: '導入の流れ', href: '/flow' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
    case 'lab':
    case 'insight':
      return [
        { label: '導入の流れ', href: '/flow' },
        { label: 'お問い合わせ', href: '/contact' },
      ]
    case 'contact':
      return []
    default:
      return [
        { label: '導入の流れ', href: '/flow' },
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
