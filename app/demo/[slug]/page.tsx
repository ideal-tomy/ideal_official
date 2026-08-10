import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { demoLpSlugs, getDemoLp } from '@/data/demo-lp'
import { assertLpConfig } from '@/lib/demo-lp/assert'
import { DemoLpClient } from '@/components/demo-lp/DemoLpClient'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return demoLpSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cfg = getDemoLp(slug)
  if (!cfg) return {}
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

export default async function DemoLpRoutePage({ params }: PageProps) {
  const { slug } = await params
  const cfg = getDemoLp(slug)
  if (!cfg) notFound()

  const errors = assertLpConfig(cfg)
  if (errors.length) {
    console.error(`LpConfig issues for ${slug}:`, errors)
  }

  return <DemoLpClient slug={slug} />
}
