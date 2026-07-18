import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LabBreadcrumb } from '@/components/lab/LabChrome'
import { LabInsightArticle } from '@/components/lab/LabInsightViews'
import {
  getAllInsightSlugs,
  getInsightBySlug,
  labInsights,
} from '@/data/lab/insights'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const insight = getInsightBySlug(slug)
  if (!insight) return { title: 'Insights | LAB | ideal' }
  return {
    title: `${insight.title} | LAB | ideal`,
    description: insight.description,
    openGraph: {
      title: `${insight.title} | LAB | ideal`,
      description: insight.description,
    },
  }
}

export default async function LabInsightPage({ params }: PageProps) {
  const { slug } = await params
  const insight = getInsightBySlug(slug)

  if (!insight) {
    notFound()
  }

  const others = labInsights.filter((i) => i.slug !== insight.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <LabBreadcrumb
        items={[
          { href: '/lab/insights', label: 'Insights' },
          { label: insight.title },
        ]}
      />
      <LabInsightArticle insight={insight} />

      {others.length > 0 && (
        <section className="border-t border-gray-800 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-medium tracking-wider uppercase text-gray-500 mb-4">
              他の Insights
            </h2>
            <ul className="space-y-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/lab/insights/${item.slug}`}
                    className="text-sm text-brand hover:text-brand-hover transition-colors"
                  >
                    {item.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}
