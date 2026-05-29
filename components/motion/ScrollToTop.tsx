'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

function scrollToTopInstant() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

/**
 * ページ遷移のたびにスクロール位置を先頭へ即時リセット
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    scrollToTopInstant()
  }, [pathname])

  return null
}
