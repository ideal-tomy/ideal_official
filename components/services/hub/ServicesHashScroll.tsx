'use client'

import { useEffect } from 'react'

/** 製作の旧ハッシュは「画面の例」へ（タブ選択は ServicesLpExamples 側） */
const EXAMPLE_HASHES = new Set([
  'build',
  'web',
  'app',
  'ai',
  'build-web',
  'build-app',
  'build-ai',
])
const CONSULT_HASHES = new Set(['consult', 'overview-consult'])

/** ハッシュに応じて該当セクションへスクロール */
export function ServicesHashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (!hash) return

    const targetId = EXAMPLE_HASHES.has(hash)
      ? 'examples'
      : CONSULT_HASHES.has(hash)
        ? 'step-consult'
        : hash

    const el = document.getElementById(targetId)
    if (!el) return

    requestAnimationFrame(() => {
      el.scrollIntoView({ block: 'start' })
    })
  }, [])

  return null
}
