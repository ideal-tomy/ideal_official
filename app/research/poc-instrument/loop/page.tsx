import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ResearchDetailShell } from '@/components/research/ResearchDetailShell'
import { LoopDiagramDemo } from '@/components/research/demos/LoopDiagramDemo'
import { getDetailPage } from '@/data/research/detail-pages'

const page = getDetailPage('loop')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
}

export default function LoopDetailPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <ResearchDetailShell page={page}>
        <LoopDiagramDemo />
      </ResearchDetailShell>
    </Suspense>
  )
}
