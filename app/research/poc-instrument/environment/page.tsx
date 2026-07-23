import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ResearchDetailShell } from '@/components/research/ResearchDetailShell'
import { EnvironmentShiftDemo } from '@/components/research/demos/EnvironmentShiftDemo'
import { getDetailPage } from '@/data/research/detail-pages'

const page = getDetailPage('environment')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
}

export default function EnvironmentDetailPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--site-bg)] min-h-screen" />}>
      <ResearchDetailShell page={page}>
        <EnvironmentShiftDemo />
      </ResearchDetailShell>
    </Suspense>
  )
}
