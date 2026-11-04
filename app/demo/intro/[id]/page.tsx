import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DemoIntroPage } from '@/components/demo-intro/DemoIntroPage'
import {
  getTopFeaturedDemo,
  getTopFeaturedDemos,
  type TopFeaturedDemo,
} from '@/data/demo-first/top-featured-demos'
import { DEMO_INTRO_STORIES } from '@/data/demo-intro/stories'

type PageProps = {
  params: Promise<{ id: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getTopFeaturedDemos().map((demo) => ({ id: demo.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const demo = getTopFeaturedDemo(id)
  if (!demo) return {}
  const story = DEMO_INTRO_STORIES[demo.id]
  const title = `${demo.plain}｜ideal`
  const description = story.intro.join('')
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: story.heroImage.src }],
    },
  }
}

export default async function DemoIntroRoute({ params }: PageProps) {
  const { id } = await params
  const demo = getTopFeaturedDemo(id)
  if (!demo) notFound()
  const story = DEMO_INTRO_STORIES[demo.id]
  const related = story.related
    .map((relatedId) => getTopFeaturedDemo(relatedId))
    .filter((item): item is TopFeaturedDemo => item !== undefined)

  return <DemoIntroPage demo={demo} story={story} related={related} />
}
