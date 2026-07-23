import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ResearchDetailShell } from '@/components/research/ResearchDetailShell'
import { GapsDemo } from '@/components/research/demos/GapsDemo'
import { getDetailPage } from '@/data/research/detail-pages'

const page = getDetailPage('gaps')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
}

export default function GapsDetailPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--site-bg)] min-h-screen" />}>
      <ResearchDetailShell page={page}>
        <GapsDemo />
      </ResearchDetailShell>
    </Suspense>
  )
}
