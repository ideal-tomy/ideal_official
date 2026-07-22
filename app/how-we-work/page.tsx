import type { Metadata } from 'next'
import Link from 'next/link'
import { HowWeWorkDetail } from '@/components/how-we-work/HowWeWorkDetail'
import { HowWeWorkPageCta } from '@/components/how-we-work/HowWeWorkPageCta'
import {
  HOW_WE_WORK_HUB_LEAD,
  HOW_WE_WORK_STEPS,
  HOW_WE_WORK_TITLE,
  getHowWeWorkHref,
  howWeWorkDemoGuides,
} from '@/data/how-we-work'
import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'
import {
  getCaseByRelatedDemoSlug,
  getCaseHref,
} from '@/data/cases'
import { typography, colors } from '@/lib/design-tokens'

export const metadata: Metadata = {
  title: `${HOW_WE_WORK_TITLE} | ideal`,
  description: HOW_WE_WORK_HUB_LEAD,
  openGraph: {
    title: `${HOW_WE_WORK_TITLE} | ideal`,
    description: HOW_WE_WORK_HUB_LEAD,
  },
}

export default function HowWeWorkHubPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <section className="border-b border-brand/40 px-4 pb-12 pt-10 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 hidden text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:block">
            How we work
          </p>
          <h1 className={`${typography.h2} ${colors.text.primary} mb-4`}>
            {HOW_WE_WORK_TITLE}
          </h1>
          <p className={`${typography.body} ${colors.text.muted}`}>
            {HOW_WE_WORK_HUB_LEAD}
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <HowWeWorkDetail steps={HOW_WE_WORK_STEPS} />
          <HowWeWorkPageCta returnPath={getHowWeWorkHref()} />
        </div>
      </section>

      <section className="border-t border-[var(--site-border)] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-xl font-bold text-[var(--site-fg)] md:text-2xl">
            デモ別の活用イメージで詳しく読む
          </h2>
          <p className="mb-8 text-sm text-[var(--site-fg-muted)]">
            現場の流れ・向き不向き・このテーマ向けの進め方まで、1ページにまとめています。
          </p>
          <ul className="space-y-3">
            {howWeWorkDemoGuides.map((guide) => {
              const cap = getCapabilityBySlug(guide.demoSlug)
              const relatedCase = getCaseByRelatedDemoSlug(guide.demoSlug)
              const href = relatedCase
                ? getCaseHref(relatedCase.slug)
                : '/cases'
              return (
                <li key={guide.demoSlug}>
                  <Link
                    href={href}
                    className="block rounded-lg border border-[var(--site-border)] px-4 py-3 transition-colors hover:border-brand/40"
                  >
                    <p className="font-medium text-[var(--site-fg)]">
                      {cap?.subtitle ?? guide.title}
                    </p>
                    <p className="mt-0.5 text-sm text-[var(--site-fg-muted)]">
                      {relatedCase?.title ?? guide.lead}
                    </p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}
