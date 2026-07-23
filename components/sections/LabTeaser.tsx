import Link from 'next/link'

export function LabTeaser() {
  return (
    <section className="bg-[var(--site-bg)] py-12 md:py-16 border-t border-[var(--site-border)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--site-fg-muted)] mb-3">
          LAB
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--site-fg)] mb-3">
          思想・研究・深い技術解説は LAB へ
        </h2>
        <p className="text-sm text-[var(--site-fg-muted)] mb-6 leading-relaxed">
          最先端技術の社会実装についての考察など、研究内容に興味がある方はこちらへ。
        </p>
        <Link
          href="/lab"
          className="inline-flex items-center text-sm font-medium text-[var(--site-fg-muted)] hover:text-brand transition-colors"
        >
          LAB を見る →
        </Link>
      </div>
    </section>
  )
}
