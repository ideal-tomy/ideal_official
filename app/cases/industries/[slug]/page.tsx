import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseBackLink, CaseHero } from '@/components/cases/CaseHero'
import { CaseFlowCompare } from '@/components/cases/CaseFlow'
import { CaseDemoCta } from '@/components/cases/CaseDemoCta'
import { caseStudies, getCaseBySlug } from '@/data/cases'

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
    return { title: 'Cases | ideal' }
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
      <CaseFlowCompare before={caseStudy.before} after={caseStudy.after} />
      <CaseDemoCta caseStudy={caseStudy} />
    </div>
  )
}
