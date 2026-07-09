'use client'

import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { useEffect, useMemo, useState } from 'react'

export function GallerySectionNav() {
  const [visible, setVisible] = useState(false)
  const [activeSlug, setActiveSlug] = useState(capabilities[0]?.slug ?? '')

  const items = useMemo(
    () =>
      capabilities.map((capability) => ({
        slug: capability.slug,
        label: String(capability.number).padStart(2, '0'),
        title: capability.title,
      })),
    [],
  )

  useEffect(() => {
    const showcase = document.getElementById('showcase')
    if (!showcase) return

    const showcaseObserver = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.08 },
    )

    showcaseObserver.observe(showcase)

    const sectionNodes = items
      .map((item) => document.getElementById(`capability-${item.slug}`))
      .filter(Boolean) as HTMLElement[]

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target?.id) {
          setActiveSlug(
            visibleEntries[0].target.id.replace('capability-', ''),
          )
        }
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: '-20% 0px -35% 0px',
      },
    )

    sectionNodes.forEach((node) => sectionObserver.observe(node))

    return () => {
      showcaseObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [items])

  if (!visible) return null

  const active = items.find((item) => item.slug === activeSlug) ?? items[0]

  return (
    <nav
      aria-label="ショーケースナビゲーション"
      className="fixed left-1/2 bottom-24 sm:bottom-8 -translate-x-1/2 z-20"
    >
      <div className="flex items-center gap-2 rounded-full border border-gray-700 bg-black/75 backdrop-blur-md px-3 py-2 shadow-lg">
        <a
          href="#capabilities"
          className="hidden sm:inline-flex text-xs text-gray-300 hover:text-white transition-colors pr-2 border-r border-gray-700"
        >
          一覧
        </a>
        <div className="flex items-center gap-1.5">
          {items.map((item) => {
            const isActive = item.slug === active.slug
            return (
              <a
                key={item.slug}
                href={`#capability-${item.slug}`}
                aria-label={item.title}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-brand scale-110'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            )
          })}
        </div>
        <span className="hidden md:inline-block text-xs text-gray-300 pl-2 border-l border-gray-700 whitespace-nowrap">
          {active.label} {active.title}
        </span>
      </div>
    </nav>
  )
}
