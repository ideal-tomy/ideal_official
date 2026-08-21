'use client'

import { useEffect } from 'react'

const LEGACY_BUILD_HASHES = new Set([
  'web',
  'app',
  'ai',
  'build-web',
  'build-app',
  'build-ai',
])
const CONSULT_HASHES = new Set(['consult', 'overview-consult'])

/** ハッシュに応じて該当セクションへスクロール（タブ選択は BuildSection 側） */
export function ServicesHashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (!hash) return

    const targetId = LEGACY_BUILD_HASHES.has(hash)
      ? 'build'
      : CONSULT_HASHES.has(hash)
        ? 'overview-consult'
        : hash

    const el = document.getElementById(targetId)
    if (!el) return

    requestAnimationFrame(() => {
      el.scrollIntoView({ block: 'start' })
    })
  }, [])

  return null
}
