import type { Metadata } from 'next'
import { HowWeWorkFlowPage } from '@/components/how-we-work/HowWeWorkFlowPage'

const description =
  '頼みたい内容に合わせた依頼の仕方と、相談から契約、次の依頼までの進め方をまとめています。小規模のページから中堅企業の業務システムまで対応します。'

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
