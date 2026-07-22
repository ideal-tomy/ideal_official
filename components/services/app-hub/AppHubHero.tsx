'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { HeroReveal } from '@/components/motion/HeroReveal'
import { HeroScrollHint } from '@/components/motion/HeroScrollHint'
import { typography, colors, layout } from '@/lib/design-tokens'
import { appHubHero } from '@/data/services/app-hub'

export function AppHubHero() {
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
    <section className="relative -mt-16 flex min-h-[60svh] items-center justify-center overflow-hidden md:mt-0 md:min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)]">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(ellipse 55% 45% at ${glowX}% ${glowY}%, rgba(255,82,28,0.18), transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(240,192,32,0.08),transparent)]"
        aria-hidden="true"
      />
      <div className="hero-stars absolute inset-0 opacity-35" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
        aria-hidden="true"
      />

      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <p className="mb-4 hidden text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:block">
          {appHubHero.eyebrow}
        </p>

        <h1 className={`${typography.h1} ${colors.text.primary} mb-4`}>
          {appHubHero.titleLine1}
          <br className="hidden md:inline" />
          {appHubHero.titleLine2}
        </h1>

        <p className="text-lg md:text-xl text-brand/90 font-medium mb-6">
          業務を、動く仕組みに。
        </p>

        <p
          className={`${typography.bodyLarge} ${colors.text.muted} mb-10 max-w-2xl mx-auto`}
        >
          {appHubHero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={appHubHero.primaryCta.href}>
            <Button variant="primary" size="lg">
              {appHubHero.primaryCta.label}
            </Button>
          </Link>
          <Link href={appHubHero.secondaryCta.href}>
            <Button variant="secondary" size="lg">
              {appHubHero.secondaryCta.label}
            </Button>
          </Link>
        </div>
      </HeroReveal>

      <HeroScrollHint />
    </section>
  )
}
