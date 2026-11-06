import type { Metadata } from 'next'
import { HowWeWorkFlowPage } from '@/components/how-we-work/HowWeWorkFlowPage'

const description =
  '相談から運用保守までの5つの段で、それぞれ何が決まり、何をまだ決めないか、何を用意するかをまとめています。'

export const metadata: Metadata = {
  title: '導入の流れ | ideal',
  description,
  openGraph: {
    title: '導入の流れ | ideal',
    description,
  },
}

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <HowWeWorkFlowPage />
    </div>
  )
}
