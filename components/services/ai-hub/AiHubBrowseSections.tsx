import Link from 'next/link'
import { industryEntries, problemEntries, processSteps } from '@/data/services/ai-hub'

export function AiHubIndustryGrid() {
  return (
    <section className="bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--site-fg)]">
            業界で見る
          </h2>
          <p className="text-base text-[var(--site-fg-muted)] max-w-xl mx-auto">
            公開済みの活用イメージから読むか、近いデモから自社業務への置き換えを想像できます。
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {industryEntries.map((entry) => (
            <Link
              key={entry.id}
              href={entry.href}
              className="rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 px-4 py-4 hover:border-brand/40 hover:bg-[var(--site-bg-elevated)]/70 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <p className="text-[var(--site-fg)] font-semibold">{entry.label}</p>
                {entry.status === 'case' && (
                  <span className="text-[10px] uppercase tracking-wider text-brand/90 border border-brand/30 px-1.5 py-0.5 rounded">
                    Case
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--site-fg-muted)]">{entry.hint}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/cases"
            className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
          >
            活用イメージ一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function AiHubProblemGrid() {
  return (
    <section className="bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--site-fg)]">
            課題から見る
          </h2>
          <p className="text-base text-[var(--site-fg-muted)] max-w-xl mx-auto">
            よくある現場の困りごとから、対応するデモへ直接進めます。
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4">
          {problemEntries.map((entry) => (
            <Link
              key={entry.id}
              href={entry.href}
              className="group rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-5 hover:border-brand/30 transition-colors"
            >
              <p className="text-sm text-[var(--site-fg-muted)] mb-1">課題</p>
              <p className="text-lg font-semibold text-[var(--site-fg)] mb-3">{entry.problem}</p>
              <p className="text-sm text-brand/90 group-hover:text-brand-hover transition-colors">
                → {entry.solution}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AiHubProcess() {
  return (
    <section className="bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--site-fg)]">
            開発の進め方
          </h2>
          <p className="text-base text-[var(--site-fg-muted)] max-w-xl mx-auto">
            機能を先に作るのではなく、変えるべき業務を見極めてから進めます。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-6"
            >
              <span className="text-2xl font-bold text-brand/70 mb-3 block">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-[var(--site-fg)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
