import Link from 'next/link'
import type { LabInsight } from '@/data/lab/insights'

export function LabInsightCard({ insight }: { insight: LabInsight }) {
  return (
    <Link
      href={`/lab/insights/${insight.slug}`}
      className="block rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-6 hover:border-brand/30 hover:bg-[var(--site-bg-elevated)]/60 transition-colors"
    >
      <p className="text-xs tracking-[0.16em] uppercase text-brand/90 mb-2">
        {insight.category}
      </p>
      <h2 className="text-xl font-semibold text-[var(--site-fg)] mb-2">{insight.title}</h2>
      <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed mb-4">{insight.description}</p>
      <span className="text-sm font-medium text-brand">読む →</span>
    </Link>
  )
}

export function LabInsightArticle({ insight }: { insight: LabInsight }) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <header className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-brand/90 mb-3">
          Insights · {insight.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--site-fg)] mb-4 leading-tight">
          {insight.title}
        </h1>
        <p className="text-lg text-[var(--site-fg-muted)] mb-4">{insight.subtitle}</p>
        <p className="text-sm text-[var(--site-fg-muted)]">{insight.publishedAt}</p>
      </header>

      <div className="space-y-12">
        {insight.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-[var(--site-fg)] mb-4">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[var(--site-fg-muted)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 mt-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-[var(--site-fg-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {insight.relatedHref && (
        <div className="mt-14 pt-8 border-t border-[var(--site-border)]">
          <Link
            href={insight.relatedHref}
            className="inline-flex items-center text-sm font-medium text-brand hover:text-brand-hover transition-colors"
          >
            {insight.relatedLabel ?? '関連ページへ'} →
          </Link>
        </div>
      )}
    </article>
  )
}
