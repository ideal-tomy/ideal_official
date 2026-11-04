'use client'

import { useEffect } from 'react'

/** 他ページから /lab#... へ来たとき、ScrollToTop の後で該当箇所へスクロール */
export function LabHashScroll() {
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
