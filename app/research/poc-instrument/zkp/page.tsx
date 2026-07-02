import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ResearchDetailShell } from '@/components/research/ResearchDetailShell'
import { ZkpDemo } from '@/components/research/demos/ZkpDemo'
import { getDetailPage } from '@/data/research/detail-pages'

const page = getDetailPage('zkp')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
}

export default function ZkpDetailPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <ResearchDetailShell page={page}>
        <ZkpDemo />
      </ResearchDetailShell>
    </Suspense>
  )
}
