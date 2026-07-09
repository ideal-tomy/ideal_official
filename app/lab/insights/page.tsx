import type { Metadata } from 'next'
import { LabBreadcrumb } from '@/components/lab/LabChrome'
import { LabInsightCard } from '@/components/lab/LabInsightViews'
import { labInsights } from '@/data/lab/insights'

export const metadata: Metadata = {
  title: 'Insights | LAB | ideal',
  description:
    'AI導入の考え方など、サービスページから退避した深い解説記事の一覧です。',
}

export default function LabInsightsIndexPage() {
  return (
    <div className="min-h-screen bg-black">
      <LabBreadcrumb items={[{ label: 'Insights' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-6">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Insights</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            入口ページを軽く保つため、比較・導入理由・働き方などの解説をここに集約しています。
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4">
          {labInsights.map((insight) => (
            <LabInsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </div>
    </div>
  )
}
