import Link from 'next/link'
import { typography, colors, layout } from '@/lib/design-tokens'
import { HeroReveal } from '@/components/motion/HeroReveal'
import { HeroBackground } from '@/components/motion/HeroBackground'
import type { CaseStudy } from '@/data/cases'

interface CaseHeroProps {
  caseStudy: CaseStudy
}

export function CaseHero({ caseStudy }: CaseHeroProps) {
  return (
    <section className="relative -mt-16 flex min-h-[45vh] items-center justify-center overflow-hidden border-b border-brand/40 md:mt-0 md:min-h-[60vh]">
      <HeroBackground />
      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <p className="mb-4 hidden text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:block">
          活用イメージ · {caseStudy.industryLabel}
        </p>
        <h1 className={`${typography.h1} ${colors.text.primary} mb-4`}>
          {caseStudy.title}
        </h1>
        <p className="mb-6 text-sm text-brand/90">{caseStudy.subtitle}</p>
        <p
          className={`${typography.bodyLarge} ${colors.text.muted} mx-auto mb-8 hidden max-w-2xl md:block`}
        >
          {caseStudy.lead}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-700 px-2.5 py-1 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </HeroReveal>
    </section>
  )
}

interface CasesIndexHeroProps {
  title: string
  subtitle: string
}

export function CasesIndexHero({ title, subtitle }: CasesIndexHeroProps) {
  return (
    <section className="relative -mt-16 flex min-h-[40vh] items-center justify-center overflow-hidden border-b border-brand/40 md:mt-0 md:min-h-[50vh]">
      <HeroBackground />
      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <p className="mb-4 hidden text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:block">
          活用イメージ
        </p>
        <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>{title}</h1>
        <p className={`${typography.bodyLarge} ${colors.text.muted} mx-auto max-w-2xl`}>
          {subtitle}
        </p>
      </HeroReveal>
    </section>
  )
}

export function CaseBackLink() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 lg:px-8">
      <Link
        href="/cases"
        className="text-sm text-gray-400 transition-colors hover:text-brand"
      >
        ← 活用イメージ一覧
      </Link>
    </div>
  )
}
