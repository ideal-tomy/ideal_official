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
    <div className="min-h-screen bg-[var(--site-bg)]">
      <LabHubHero />

      <section className="border-b border-brand/40 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
          <header className="mb-12">
            <h2 className="mb-3 text-[clamp(1.5rem,3.5vw,2rem)] font-black text-[var(--site-fg)]">
              領域を選ぶ
            </h2>
          </header>

          <div className="grid sm:grid-cols-2 gap-4">
            {labHubAreas.map((area) => (
              <Link
                key={area.id}
                href={area.href}
                className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-6 hover:border-brand/30 hover:bg-[var(--site-bg-elevated)]/60 transition-colors"
              >
                <p className="mb-2 hidden text-xs uppercase tracking-[0.16em] text-brand/90 md:block">
                  {area.eyebrow}
                </p>
                <h3 className="text-lg font-semibold text-[var(--site-fg)] mb-2">{area.title}</h3>
                <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
          <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-2 text-[clamp(1.5rem,3.5vw,2rem)] font-black text-[var(--site-fg)]">
                Insights
              </h2>
              <p className="text-sm text-[var(--site-fg-muted)] md:text-base">
                サービス長文から再配置した解説記事
              </p>
            </div>
            <Link
              href="/lab/insights"
              className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
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
