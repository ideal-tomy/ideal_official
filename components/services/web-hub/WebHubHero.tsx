'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { PageHero, pageHeroActionsClass } from '@/components/sections/PageHero'
import { webHubHero } from '@/data/services/web-hub'

export function WebHubHero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const glowX = mouse.x * 100
  const glowY = mouse.y * 100

  return (
    <PageHero
      title={webHubHero.title}
      description={webHubHero.subtitle}
      background={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--site-bg)] via-[var(--site-bg-elevated)] to-[var(--site-bg)]" />
          <div
            className="absolute inset-0 transition-[background] duration-300 ease-out"
            style={{
              background: `radial-gradient(ellipse 55% 45% at ${glowX}% ${glowY}%, rgba(255,82,28,0.22), transparent 70%)`,
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(240,192,32,0.08),transparent)]"
            aria-hidden="true"
          />
          <div className="hero-stars absolute inset-0 opacity-35" aria-hidden="true" />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--site-bg)] to-transparent"
            aria-hidden="true"
          />
        </>
      }
    >
      <div className={pageHeroActionsClass}>
        <Link href={webHubHero.primaryCta.href} className="min-w-0 flex-1 basis-1/2">
          <Button variant="primary" size="lg" className="w-full">
            {webHubHero.primaryCta.label}
          </Button>
        </Link>
        <Link href={webHubHero.secondaryCta.href} className="min-w-0 flex-1 basis-1/2">
          <Button variant="secondary" size="lg" className="w-full">
            {webHubHero.secondaryCta.label}
          </Button>
        </Link>
      </div>
    </PageHero>
  )
}
