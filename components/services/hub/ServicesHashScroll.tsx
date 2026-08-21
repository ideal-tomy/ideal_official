'use client'

import { useEffect } from 'react'

const LEGACY_BUILD_HASHES: Record<string, string> = {
  web: 'build-web',
  app: 'build-app',
  ai: 'build-ai',
}
const CONSULT_HASHES = new Set(['consult', 'overview-consult'])

/** ハッシュに応じて該当セクションへスクロール（相談展開は Overview 側） */
export function ServicesHashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (!hash) return

    const targetId = LEGACY_BUILD_HASHES[hash]
      ?? (hash === 'build' ? 'build' : CONSULT_HASHES.has(hash) ? 'overview-consult' : hash)

    const el = document.getElementById(targetId)
    if (!el) return

    requestAnimationFrame(() => {
      el.scrollIntoView({ block: 'start' })
    })
  }, [])

  return null
}
