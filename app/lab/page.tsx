import type { Metadata } from 'next'
import Link from 'next/link'
import { LabHubHero } from '@/components/lab/LabChrome'
import { LabInsightCard } from '@/components/lab/LabInsightViews'
import { labHubAreas } from '@/data/lab/hub'
import { labInsights } from '@/data/lab/insights'

export const metadata: Metadata = {
  title: 'LAB | ideal',
  description:
    '思想・研究・導入解説を集約した LAB。Philosophy、Research、Insights、深い技術領域への入口です。',
  openGraph: {
    title: 'LAB | ideal',
    description:
      '思想・研究・導入解説を集約した LAB。Philosophy、Research、Insights への入口です。',
  },
}

export default function LabHubPage() {
  return (
    <div className="min-h-screen bg-black">
      <LabHubHero />

      <section className="py-16 lg:py-20 border-b border-blue-400/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">領域を選ぶ</h2>
            <p className="text-base text-gray-400">
              入口のデモや依頼ページは軽く保ち、深さはここに置いています。
            </p>
          </header>

          <div className="grid sm:grid-cols-2 gap-4">
            {labHubAreas.map((area) => (
              <Link
                key={area.id}
                href={area.href}
                className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 hover:border-blue-400/30 hover:bg-gray-900/60 transition-colors"
              >
                <p className="text-xs tracking-[0.16em] uppercase text-cyan-400/90 mb-2">
                  {area.eyebrow}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Insights</h2>
              <p className="text-base text-gray-400">
                サービス長文から再配置した解説記事
              </p>
            </div>
            <Link
              href="/lab/insights"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              すべて見る →
            </Link>
          </header>

          <div className="grid md:grid-cols-2 gap-4">
            {labInsights.slice(0, 4).map((insight) => (
              <LabInsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
