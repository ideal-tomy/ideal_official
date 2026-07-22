import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import {
  getAllHowWeWorkDemoSlugs,
  getHowWeWorkDemoGuide,
  HOW_WE_WORK_TITLE,
} from '@/data/how-we-work'
import { getCaseByRelatedDemoSlug, getCaseHref } from '@/data/cases'

interface PageProps {
  params: Promise<{ demoSlug: string }>
}

export function generateStaticParams() {
  return getAllHowWeWorkDemoSlugs().map((demoSlug) => ({ demoSlug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { demoSlug } = await params
  const guide = getHowWeWorkDemoGuide(demoSlug)
  const relatedCase = getCaseByRelatedDemoSlug(demoSlug)
  if (relatedCase) {
    return {
      title: relatedCase.metaTitle,
      description: relatedCase.metaDescription,
      robots: { index: false, follow: true },
    }
  }
  return {
    title: guide ? `${guide.title} | ideal` : `${HOW_WE_WORK_TITLE} | ideal`,
  }
}

/**
 * デモ別の進め方は活用イメージ詳細へ統合済み。
 * 旧 URL は対応する活用イメージへリダイレクトする。
 */
export default async function HowWeWorkDemoRedirectPage({ params }: PageProps) {
  const { demoSlug } = await params
  const relatedCase = getCaseByRelatedDemoSlug(demoSlug)
  if (relatedCase) {
    redirect(getCaseHref(relatedCase.slug))
  }
  redirect('/how-we-work')
}
