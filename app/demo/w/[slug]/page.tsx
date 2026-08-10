import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDemoLp, listWorkflowLpSlugs } from '@/data/demo-lp'
import { assertLpConfig } from '@/lib/demo-lp/assert'
import { DemoLpClient } from '@/components/demo-lp/DemoLpClient'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return listWorkflowLpSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cfg = getDemoLp(slug)
  if (!cfg || cfg.delivery.kind !== 'workflow') return {}
  const { ogp, noindex } = cfg.delivery
  return {
    title: ogp.title,
    description: ogp.description,
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: ogp.title,
      description: ogp.description,
      images: [{ url: ogp.image.src, alt: ogp.image.alt }],
    },
    other: {
      'color-scheme': 'light',
    },
  }
}

export default async function WorkflowDemoLpPage({ params }: PageProps) {
  const { slug } = await params
  const cfg = getDemoLp(slug)
  if (!cfg || cfg.delivery.kind !== 'workflow') notFound()

  const errors = assertLpConfig(cfg)
  if (errors.length) {
    console.error(`LpConfig issues for ${slug}:`, errors)
  }

  return <DemoLpClient slug={slug} />
}
