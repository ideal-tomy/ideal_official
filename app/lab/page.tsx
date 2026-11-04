import type { Metadata } from 'next'
import { LabHubHero } from '@/components/lab/LabChrome'
import { LabHashScroll } from '@/components/lab/LabHashScroll'
import {
  LabContact,
  LabInstrument,
  LabPhilosophy,
} from '@/components/lab/LabAreaViews'

const labDescription =
  '自由と秩序が両立した社会を設計する思想を読む LAB です。仕組みを動かす計器は、別ページにまとめています。'

export const metadata: Metadata = {
  title: 'LAB | ideal',
  description: labDescription,
  openGraph: {
    title: 'LAB | ideal',
    description: labDescription,
  },
}

export default function LabHubPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <LabHashScroll />
      <LabHubHero />
      <LabPhilosophy />
      <LabInstrument />
      <LabContact />
    </div>
  )
}
