'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'vision', label: 'はじめに' },
  { id: 'conflict', label: '問題と課題' },
  { id: 'value', label: '価値の再定義' },
  { id: 'mechanism', label: '基本設計' },
  { id: 'structure', label: '組織構造' },
  { id: 'path', label: 'ロードマップ' },
  { id: 'declaration', label: '新しい最適化' },
] as const

/**
 * 思想の目次 — デスクトップは sticky、モバイルは横スクロール
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
        aria-label="思想の目次"
        className="sticky top-16 z-20 -mx-4 mb-6 min-w-0 w-full border-b border-[var(--site-border)]/60 bg-[var(--site-bg)]/90 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:hidden"
      >
        <ul className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <a
                href={`#${item.id}`}
                className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeId === item.id
                    ? 'bg-brand/10 text-brand-hover border border-brand/40'
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
        aria-label="思想の目次"
        className="hidden lg:block sticky top-28 self-start pt-4"
      >
        <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.22em] text-[var(--site-fg-muted)]">
          目次
        </p>
        <ul className="space-y-1 border-l border-[var(--site-border)]">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block pl-4 py-2 text-sm leading-snug border-l-2 -ml-px transition-colors duration-200 ${
                  activeId === item.id
                    ? 'border-brand text-brand-hover font-medium'
                    : 'border-transparent text-[var(--site-fg-muted)] hover:text-[var(--site-fg)] hover:border-[var(--site-border)]'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-[var(--site-border)]">
          <a
            href="/research/poc-instrument"
            className="block pl-4 text-sm text-[var(--site-fg-muted)] hover:text-brand transition-colors duration-200"
          >
            技術提案を見る →
          </a>
        </div>
      </nav>
    </>
  )
}
