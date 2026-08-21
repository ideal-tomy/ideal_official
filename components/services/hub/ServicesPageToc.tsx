'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'overview', label: '全体の流れ' },
  { id: 'build', label: '製作' },
] as const

export function ServicesPageToc() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id)

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean) as HTMLElement[]

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
    <nav
      aria-label="ページ内目次"
      className="sticky top-14 z-30 border-b border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-bg)_88%,transparent)] py-3 backdrop-blur-md"
    >
      <ul className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-4 scrollbar-hide sm:px-6 lg:px-8">
        {NAV_ITEMS.map((item) => {
          const selected = activeId === item.id
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className={`inline-flex items-center border-b-2 py-1 text-sm whitespace-nowrap transition-colors ${
                  selected
                    ? 'border-brand font-semibold text-[var(--site-fg)]'
                    : 'border-transparent text-[var(--site-fg-muted)] hover:text-[var(--site-fg)]'
                }`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
