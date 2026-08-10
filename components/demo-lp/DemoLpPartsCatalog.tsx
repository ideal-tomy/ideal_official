import type { PartsCatalogBlock } from '@/lib/demo-lp/types'

export function DemoLpPartsCatalog({ block }: { block: PartsCatalogBlock }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lp-primary)]">
          {block.label}
        </p>
        <h2 className="mb-3 text-2xl font-bold md:text-3xl [text-wrap:balance]">
          {block.headline}
        </h2>
        <p className="mb-8 max-w-2xl text-[var(--lp-ink)]/75">{block.lead}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {block.items.map((part) => (
            <article
              key={part.no}
              className="flex flex-col rounded-xl border border-[var(--lp-ink)]/10 p-5"
            >
              <p className="text-xs font-semibold text-[var(--lp-primary)]">
                {part.no}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[var(--lp-ink)]">
                {part.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--lp-ink)]/70">
                {part.body}
              </p>
              <p className="mt-3 rounded-lg bg-[var(--lp-surface)] px-3 py-2 text-xs font-medium text-[var(--lp-ink)]/80">
                消す継ぎ目: {part.seamRemoved}
              </p>
              <p className="mt-2 text-xs text-[var(--lp-ink)]/55">
                {part.standalone
                  ? '単独導入可'
                  : `依存: ${(part.dependsOn ?? []).join('、')}`}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {part.lpUrl ? (
                  <a
                    href={part.lpUrl}
                    className="text-sm font-semibold text-[var(--lp-primary)] hover:underline"
                  >
                    詳しく見る →
                  </a>
                ) : null}
                <a
                  href={part.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--lp-ink)]/80 hover:text-[var(--lp-primary)] hover:underline"
                >
                  デモを開く ↗
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-[var(--lp-ink)]">
          {block.closing}
        </p>
      </div>
    </section>
  )
}
