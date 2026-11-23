import type { Metadata } from 'next'
import { HomeHub } from '@/components/home'
import { homeHubMetadata } from '@/data/home/hub'

export const metadata: Metadata = {
  title: homeHubMetadata.title,
  description: homeHubMetadata.description,
  openGraph: {
    title: homeHubMetadata.title,
    description: homeHubMetadata.description,
  },
}

export default function Home() {
  return <HomeHub />
}
