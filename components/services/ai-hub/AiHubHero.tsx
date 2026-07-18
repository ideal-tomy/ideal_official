import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { HeroReveal } from '@/components/motion/HeroReveal'
import { HeroScrollHint } from '@/components/motion/HeroScrollHint'
import { typography, colors, layout } from '@/lib/design-tokens'
import { galleryImages } from '@/data/ai-capability-gallery/capabilities'
import { aiHubHero } from '@/data/services/ai-hub'

export function AiHubHero() {
  return (
    <section className="relative -mt-16 flex min-h-[60svh] items-center justify-center overflow-hidden md:mt-0 md:min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)]">
      <Image
        src={galleryImages.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/55 to-black/85"
        aria-hidden="true"
      />

      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <p className="mb-4 hidden text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:block">
          {aiHubHero.eyebrow}
        </p>

        <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>
          {aiHubHero.titleLine1}
          <br className="hidden md:inline" />
          {aiHubHero.titleLine2}
        </h1>

        <p
          className={`${typography.bodyLarge} ${colors.text.muted} mb-10 max-w-2xl mx-auto`}
        >
          {aiHubHero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={aiHubHero.primaryCta.href}>
            <Button variant="primary" size="lg">
              {aiHubHero.primaryCta.label}
            </Button>
          </Link>
          <Link href={aiHubHero.secondaryCta.href}>
            <Button variant="secondary" size="lg">
              {aiHubHero.secondaryCta.label}
            </Button>
          </Link>
        </div>
      </HeroReveal>

      <HeroScrollHint />
    </section>
  )
}
