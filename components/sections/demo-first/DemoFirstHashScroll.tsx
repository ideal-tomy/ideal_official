'use client'

import { useEffect } from 'react'

/** 別ページから `/#demos` などで戻ったとき、ScrollToTop の後に該当セクションへ移る */
export function DemoFirstHashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (!hash) return
    const el = document.getElementById(hash)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ block: 'start' })
    })
  }, [])

  return null
}
