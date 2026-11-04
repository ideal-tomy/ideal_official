'use client'

import { useEffect, useState } from 'react'
import { servicesLpToc } from '@/data/services/hub'

/** PC（lg 以上）の右に固定する番号目次。ヒーローを過ぎてから出す */
export function ServicesLpToc({ rootId }: { rootId: string }) {
  const [activeId, setActiveId] = useState<string>(servicesLpToc[0].id)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const root = document.getElementById(rootId)
    if (!root) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = root.getBoundingClientRect()
      setVisible(rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.6)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const sections = servicesLpToc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el != null)
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit?.target.id) setActiveId(hit.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      observer.disconnect()
    }
  }, [rootId])

  return (
    <nav
      className="svc-toc"
      aria-label="ページ内の目次"
      data-visible={visible ? '' : undefined}
      aria-hidden={visible ? undefined : true}
    >
      <p className="svc-toc-label">目次</p>
      {servicesLpToc.map((item, index) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={activeId === item.id ? 'true' : undefined}
          tabIndex={visible ? undefined : -1}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          {item.label}
        </a>
      ))}
    </nav>
  )
}
