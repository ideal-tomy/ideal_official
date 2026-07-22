import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseBackLink, CaseHero } from '@/components/cases/CaseHero'
import { CasePainSection } from '@/components/cases/CasePainSection'
import { CaseFlowCompare } from '@/components/cases/CaseFlow'
import { CaseOutcomes } from '@/components/cases/CaseOutcomes'
import { CaseHowWeWorkSection } from '@/components/cases/CaseHowWeWorkSection'
import { CaseDemoScope } from '@/components/cases/CaseDemoScope'
import { CaseFitSection } from '@/components/cases/CaseFitSection'
import { CaseDemoCta } from '@/components/cases/CaseDemoCta'
import { caseStudies, getCaseBySlug } from '@/data/cases'
import { HOW_WE_WORK_STEPS } from '@/data/how-we-work'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies
    .filter((c) => c.status === 'published')
    .map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)
  if (!caseStudy) {
    return { title: '活用イメージ | ideal' }
  }
  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    openGraph: {
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
    },
  }
}

export default async function CaseIndustryPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)

  if (!caseStudy || caseStudy.status !== 'published') {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <CaseHero caseStudy={caseStudy} />
      <CaseBackLink />
      <CasePainSection pain={caseStudy.pain} />
      <CaseFlowCompare before={caseStudy.before} after={caseStudy.after} />
      <CaseOutcomes outcomes={caseStudy.outcomes} />
      <CaseHowWeWorkSection
        demoSlug={caseStudy.relatedDemo.slug}
        fallbackSteps={HOW_WE_WORK_STEPS}
      />
      <CaseDemoScope
        demoScope={caseStudy.demoScope}
        hasExternalDemo={Boolean(caseStudy.externalDemo)}
      />
      <CaseFitSection fit={caseStudy.fit} />
      <CaseDemoCta caseStudy={caseStudy} />
    </div>
  )
}
