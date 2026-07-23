import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import type { CaseStudy } from '@/data/cases'

interface CaseHeroProps {
  caseStudy: CaseStudy
}

export function CaseHero({ caseStudy }: CaseHeroProps) {
  return (
    <PageHero title={caseStudy.title} description={caseStudy.lead}>
      <div className="mt-5 flex flex-wrap gap-2 md:mt-8">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/25 px-2.5 py-1 text-xs text-[var(--site-fg)]/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </PageHero>
  )
}

interface CasesIndexHeroProps {
  title: string
  subtitle: string
}

export function CasesIndexHero({ title, subtitle }: CasesIndexHeroProps) {
  return <PageHero title={title} description={subtitle} />
}

export function CaseBackLink() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 lg:px-8">
      <Link
        href="/cases"
        className="text-sm text-[var(--site-fg-muted)] transition-colors hover:text-brand"
      >
        ← 活用イメージ一覧
      </Link>
    </div>
  )
}
