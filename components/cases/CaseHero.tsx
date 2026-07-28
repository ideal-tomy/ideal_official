import Link from 'next/link'
import { HeroBackground } from '@/components/motion/HeroBackground'
import type { CaseStudy } from '@/data/cases'

interface CaseHeroProps {
  caseStudy: CaseStudy
}

/** 詳細ページ用の低背ヒーロー（フルビューポートにしない） */
export function CaseHero({ caseStudy }: CaseHeroProps) {
  return (
    <section className="relative -mt-16 overflow-hidden px-0 pb-8 pt-24 text-[var(--site-fg)] md:mt-0 md:pb-12 md:pt-28">
      <HeroBackground />
      <div className="relative z-10 mx-auto w-[min(100%-2rem,42rem)]">
        <h1
          title={caseStudy.title}
          className="whitespace-nowrap text-[clamp(1.05rem,4.6vw,2.5rem)] font-black leading-none tracking-[0.02em] text-[var(--site-fg)]"
        >
          {caseStudy.title}
        </h1>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--site-fg)]/85 md:mt-4 md:text-base">
          {caseStudy.lead}
        </p>
      </div>
    </section>
  )
}

interface CasesIndexHeroProps {
  title: string
  subtitle: string
}

/** 一覧用の低背ヒーロー（目次へすぐ到達させる） */
export function CasesIndexHero({ title, subtitle }: CasesIndexHeroProps) {
  return (
    <section className="relative -mt-16 overflow-hidden px-0 pb-10 pt-24 text-[var(--site-fg)] md:mt-0 md:pb-12 md:pt-28">
      <HeroBackground />
      <div className="relative z-10 mx-auto w-[min(100%-2rem,42rem)]">
        <h1 className="text-[clamp(1.5rem,5.5vw,2.75rem)] font-black leading-tight tracking-[0.02em] text-[var(--site-fg)]">
          {title}
        </h1>
        <p className="mt-3 max-w-[36rem] text-[0.9375rem] leading-relaxed text-[var(--site-fg-muted)] md:mt-4 md:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export function CaseBackLink() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-5 sm:px-6 md:pt-8 lg:px-8">
      <Link
        href="/cases"
        className="text-sm text-[var(--site-fg-muted)] transition-colors hover:text-brand"
      >
        ← 活用イメージ一覧
      </Link>
    </div>
  )
}
