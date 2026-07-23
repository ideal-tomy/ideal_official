'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'vision', label: 'はじめに' },
  { id: 'conflict', label: '問題と課題' },
  { id: 'philosophy', label: '価値の再定義' },
  { id: 'mechanism', label: '基本設計' },
  { id: 'structure', label: '組織構造' },
  { id: 'path', label: 'ロードマップ' },
  { id: 'declaration', label: '新しい最適化' },
] as const

/**
 * Philosophy ページ目次 — デスクトップは sticky、モバイルは横スクロール
 */
export function PhilosophyNav() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id)

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean,
    ) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* モバイル: 横スクロール目次 */}
      <nav
        aria-label="ページ内目次"
        className="lg:hidden sticky top-16 z-20 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 mb-6 bg-[var(--site-bg)]/90 backdrop-blur-md border-b border-[var(--site-border)]/60"
      >
        <ul className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <a
                href={`#${item.id}`}
                className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeId === item.id
                    ? 'bg-brand/20 text-brand-hover border border-brand/40'
                    : 'text-[var(--site-fg-muted)] hover:text-[var(--site-fg)] border border-transparent'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* デスクトップ: サイドバー目次 */}
      <nav
        aria-label="ページ内目次"
        className="hidden lg:block sticky top-28 self-start pt-4"
      >
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--site-fg-muted)] mb-4">
          Contents
        </p>
        <ul className="space-y-1 border-l border-[var(--site-border)]">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block pl-4 py-2 text-sm leading-snug border-l-2 -ml-px transition-colors duration-200 ${
                  activeId === item.id
                    ? 'border-brand text-brand-hover font-medium'
                    : 'border-transparent text-[var(--site-fg-muted)] hover:text-[var(--site-fg-muted)] hover:border-[var(--site-border)]'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-[var(--site-border)]">
          <Link
            href="/research"
            className="block pl-4 text-sm text-[var(--site-fg-muted)] hover:text-brand transition-colors duration-200"
          >
            Research Demos →
          </Link>
        </div>
      </nav>
    </>
  )
}
