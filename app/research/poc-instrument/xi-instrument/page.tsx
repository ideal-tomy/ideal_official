import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ResearchDetailShell } from '@/components/research/ResearchDetailShell'
import { XiInstrumentDemo } from '@/components/research/demos/XiInstrumentDemo'
import { getDetailPage } from '@/data/research/detail-pages'

const page = getDetailPage('xi-instrument')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
}

export default function XiInstrumentDetailPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--site-bg)] min-h-screen" />}>
      <ResearchDetailShell page={page}>
        <XiInstrumentDemo />
      </ResearchDetailShell>
    </Suspense>
  )
}
