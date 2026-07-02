import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ResearchDetailShell } from '@/components/research/ResearchDetailShell'
import { ForkLensDemo } from '@/components/research/demos/ForkLensDemo'
import { getDetailPage } from '@/data/research/detail-pages'

const page = getDetailPage('fork')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
}

export default function ForkDetailPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <ResearchDetailShell page={page}>
        <ForkLensDemo />
      </ResearchDetailShell>
    </Suspense>
  )
}
