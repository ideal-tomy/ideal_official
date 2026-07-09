import Link from 'next/link'
import type { LabInsight } from '@/data/lab/insights'

export function LabInsightCard({ insight }: { insight: LabInsight }) {
  return (
    <Link
      href={`/lab/insights/${insight.slug}`}
      className="block rounded-xl border border-gray-800 bg-gray-900/40 p-6 hover:border-blue-400/30 hover:bg-gray-900/60 transition-colors"
    >
      <p className="text-xs tracking-[0.16em] uppercase text-cyan-400/90 mb-2">
        {insight.category}
      </p>
      <h2 className="text-xl font-semibold text-white mb-2">{insight.title}</h2>
      <p className="text-sm text-gray-400 leading-relaxed mb-4">{insight.description}</p>
      <span className="text-sm font-medium text-blue-400">読む →</span>
    </Link>
  )
}

export function LabInsightArticle({ insight }: { insight: LabInsight }) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <header className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-blue-400/90 mb-3">
          Insights · {insight.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {insight.title}
        </h1>
        <p className="text-lg text-gray-300 mb-4">{insight.subtitle}</p>
        <p className="text-sm text-gray-500">{insight.publishedAt}</p>
      </header>

      <div className="space-y-12">
        {insight.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-white mb-4">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-gray-300 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 mt-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {insight.relatedHref && (
        <div className="mt-14 pt-8 border-t border-gray-800">
          <Link
            href={insight.relatedHref}
            className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {insight.relatedLabel ?? '関連ページへ'} →
          </Link>
        </div>
      )}
    </article>
  )
}
