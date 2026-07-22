import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HowWeWorkDetail } from '@/components/how-we-work/HowWeWorkDetail'
import { HowWeWorkPageCta } from '@/components/how-we-work/HowWeWorkPageCta'
import {
  HOW_WE_WORK_TITLE,
  getAllHowWeWorkDemoSlugs,
  getHowWeWorkDemoGuide,
  getHowWeWorkHref,
} from '@/data/how-we-work'
import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'
import { typography, colors } from '@/lib/design-tokens'

interface PageProps {
  params: Promise<{ demoSlug: string }>
}

export function generateStaticParams() {
  return getAllHowWeWorkDemoSlugs().map((demoSlug) => ({ demoSlug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { demoSlug } = await params
  const guide = getHowWeWorkDemoGuide(demoSlug)
  if (!guide) {
    return { title: `${HOW_WE_WORK_TITLE} | ideal` }
  }
  return {
    title: `${guide.title} | ideal`,
    description: guide.lead,
    openGraph: {
      title: `${guide.title} | ideal`,
      description: guide.lead,
    },
  }
}

export default async function HowWeWorkDemoPage({ params }: PageProps) {
  const { demoSlug } = await params
  const guide = getHowWeWorkDemoGuide(demoSlug)
  if (!guide) notFound()

  const cap = getCapabilityBySlug(demoSlug)

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <section className="border-b border-brand/40 px-4 pb-12 pt-10 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href={getHowWeWorkHref()}
            className="mb-6 inline-block text-sm text-[var(--site-fg-muted)] transition-colors hover:text-brand"
          >
            ← {HOW_WE_WORK_TITLE}
          </Link>
          <p className="mb-3 hidden text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:block">
            How we work
            {cap ? ` · ${cap.subtitle}` : ''}
          </p>
          <h1 className={`${typography.h2} ${colors.text.primary} mb-4`}>
            {guide.title}
          </h1>
          <p className={`${typography.body} ${colors.text.muted}`}>{guide.lead}</p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <HowWeWorkDetail steps={guide.steps} />
          <HowWeWorkPageCta
            demoSlug={demoSlug}
            estimateKit={guide.estimateKit}
            returnPath={getHowWeWorkHref(demoSlug)}
          />
        </div>
      </section>
    </div>
  )
}
