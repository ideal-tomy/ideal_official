import Link from 'next/link'
import {
  whatWeBuild,
  problemSolutions,
  relatedDemos,
  appProcessSteps,
} from '@/data/services/app-hub'

export function AppWhatWeBuild() {
  return (
    <section className="bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--site-fg)]">
            What we build
          </h2>
          <p className="text-base text-[var(--site-fg-muted)] max-w-xl mx-auto">
            毎日の作業を楽にする、動く仕組みを作ります。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-5">
          {whatWeBuild.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--site-fg)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AppProblemSolution() {
  return (
    <section className="bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--site-fg)]">
            課題 → 仕組み
          </h2>
          <p className="text-base text-[var(--site-fg-muted)] max-w-xl mx-auto">
            よくある業務の困りごとを、動く仕組みに置き換えます。
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-4">
          {problemSolutions.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-5"
            >
              <p className="text-sm text-[var(--site-fg-muted)] mb-1">課題</p>
              <p className="text-lg font-semibold text-[var(--site-fg)] mb-3">{item.problem}</p>
              <p className="text-sm text-brand/90 leading-relaxed">→ {item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AppRelatedDemos() {
  return (
    <section className="bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--site-fg)]">
            関連する実デモ
          </h2>
          <p className="text-base text-[var(--site-fg-muted)] max-w-xl mx-auto">
            業務ツールに近いデモや活用イメージから、自社への置き換えを想像できます。
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-3">
          {relatedDemos.map((demo) => (
            <Link
              key={demo.id}
              href={demo.href}
              className="rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 px-4 py-4 hover:border-brand/40 hover:bg-[var(--site-bg-elevated)]/70 transition-colors"
            >
              <p className="text-[var(--site-fg)] font-semibold mb-1">{demo.label}</p>
              <p className="text-sm text-[var(--site-fg-muted)]">{demo.hint}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ai-capability-gallery"
            className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
          >
            AIデモギャラリー →
          </Link>
          <Link
            href="/cases"
            className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
          >
            活用イメージ一覧 →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function AppProcess() {
  return (
    <section className="bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--site-fg)]">
            進め方
          </h2>
          <p className="text-base text-[var(--site-fg-muted)] max-w-xl mx-auto">
            プロトタイプで方向を合わせ、本番運用まで伴走します。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {appProcessSteps.map((item) => (
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
