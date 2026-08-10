'use client'

import { useEffect } from 'react'
import type { LpConfig } from '@/lib/demo-lp/types'
import { DemoLpCtaLink } from './DemoLpCtaLink'
import { DemoLpRoiSection } from './DemoLpRoiSection'
import { DemoLpFaq } from './DemoLpFaq'
import { DemoLpFinalForm } from './DemoLpFinalForm'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lp-primary)]">
      {children}
    </p>
  )
}

export function DemoLpPage({ config }: { config: LpConfig }) {
  const { brand, delivery } = config

  useEffect(() => {
    if (!delivery.trackReferrer || typeof window === 'undefined') return
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (ref) {
      try {
        sessionStorage.setItem(`demo-lp-ref:${delivery.slug}`, ref)
      } catch {
        /* ignore */
      }
    }
  }, [delivery.slug, delivery.trackReferrer])

  return (
    <div
      className="demo-lp min-h-screen bg-[var(--lp-surface)] text-[var(--lp-ink)]"
      style={
        {
          '--lp-primary': brand.colors.primary,
          '--lp-accent': brand.colors.accent,
          '--lp-ink': brand.colors.ink,
          '--lp-surface': brand.colors.surface,
          colorScheme: 'light',
        } as React.CSSProperties
      }
    >
      {/* B00 header */}
      <header className="sticky top-0 z-30 border-b border-[var(--lp-ink)]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.logo.src}
              alt={brand.logo.alt}
              className="h-7 w-auto"
            />
            <span className="truncate text-sm font-semibold text-[var(--lp-ink)]">
              {delivery.demoName}
            </span>
          </div>
          <DemoLpCtaLink cta={config.hero.ctas[0]} className="shrink-0 !py-2" />
        </div>
      </header>

      {/* B01 hero */}
      <section className="relative overflow-hidden border-b border-[var(--lp-ink)]/10 bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:py-16">
          <div>
            {config.hero.eyebrow && (
              <p className="mb-3 text-xs font-medium tracking-wide text-[var(--lp-primary)]">
                {config.hero.eyebrow}
              </p>
            )}
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl [text-wrap:balance] [word-break:auto-phrase]">
              {config.hero.headline}
            </h1>
            <p className="mb-3 text-lg font-medium text-[var(--lp-ink)]/85 [text-wrap:balance]">
              {config.hero.subline}
            </p>
            <p className="mb-6 text-sm leading-relaxed text-[var(--lp-ink)]/70 md:text-base">
              {config.hero.body}
            </p>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <DemoLpCtaLink cta={config.hero.ctas[0]} />
              <DemoLpCtaLink cta={config.hero.ctas[1]} />
            </div>
            <ul className="flex flex-wrap gap-2 text-xs text-[var(--lp-ink)]/65">
              {config.hero.badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-[var(--lp-ink)]/15 px-2.5 py-1"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={config.hero.visual.src}
              alt={config.hero.visual.alt}
              className="w-full rounded-xl border border-[var(--lp-ink)]/10 object-cover shadow-sm"
            />
            {config.hero.visual.note && (
              <p className="mt-2 text-center text-xs text-[var(--lp-ink)]/45">
                {config.hero.visual.note}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* B02 impact */}
      <section className="border-b border-[var(--lp-ink)]/10 bg-[var(--lp-ink)] py-12 text-white md:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-center text-sm text-white/70">
            {config.impact.mainFigure.lead}
          </p>
          <p className="mt-2 text-center text-3xl font-bold tabular-nums md:text-4xl">
            {config.impact.mainFigure.value}
            <span className="ml-1 text-lg font-medium text-white/80">
              {config.impact.mainFigure.trail}
            </span>
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-white/50">
            {config.impact.basis}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {config.impact.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-4 text-center"
              >
                <p className="text-lg font-bold">{m.value}</p>
                <p className="mt-1 text-xs text-white/60">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B03 pillars */}
      {config.pillars && (
        <section className="py-14 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
            {config.pillars.map((p) => (
              <div key={p.title}>
                <h3 className="mb-2 text-lg font-bold text-[var(--lp-ink)]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--lp-ink)]/75">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* B04 problem */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionLabel>{config.problem.label}</SectionLabel>
          <h2 className="mb-3 text-2xl font-bold md:text-3xl [text-wrap:balance]">
            {config.problem.headline}
          </h2>
          <p className="mb-8 max-w-2xl text-[var(--lp-ink)]/75">
            {config.problem.lead}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {config.problem.items.map((item) => (
              <div
                key={item.no}
                className="rounded-xl border border-[var(--lp-ink)]/10 p-5"
              >
                <p className="mb-1 text-xs font-semibold text-[var(--lp-primary)]">
                  {item.no}
                </p>
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--lp-ink)]/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-[var(--lp-surface)] px-5 py-6">
            <p className="font-bold text-[var(--lp-ink)]">
              {config.problem.summary.headline}
            </p>
            <p className="mt-2 text-sm text-[var(--lp-ink)]/75">
              {config.problem.summary.body}
            </p>
          </div>
        </div>
      </section>

      {/* B05 fit */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionLabel>{config.fit.label}</SectionLabel>
          <h2 className="mb-3 text-2xl font-bold md:text-3xl [text-wrap:balance]">
            {config.fit.headline}
          </h2>
          <p className="mb-8 text-[var(--lp-ink)]/75">{config.fit.lead}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {config.fit.conditions.map((c) => (
              <div
                key={c.no}
                className="rounded-xl border border-[var(--lp-ink)]/10 bg-white p-5"
              >
                <p className="mb-1 text-xs font-semibold text-[var(--lp-primary)]">
                  {c.no}
                </p>
                <h3 className="mb-2 font-bold leading-snug">{c.title}</h3>
                <p className="text-sm text-[var(--lp-ink)]/70">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium text-[var(--lp-ink)]">
            {config.fit.affirm}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--lp-ink)]/60">
            {config.fit.exclude}
          </p>
        </div>
      </section>

      {/* B06 usecases */}
      {config.usecases && (
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionLabel>{config.usecases.label}</SectionLabel>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              {config.usecases.headline}
            </h2>
            <p className="mb-8 text-[var(--lp-ink)]/75">{config.usecases.lead}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {config.usecases.items.map((u) => (
                <div
                  key={u.industry}
                  className="rounded-xl border border-[var(--lp-ink)]/10 p-5"
                >
                  <p className="text-xs font-semibold text-[var(--lp-primary)]">
                    {u.industry}
                  </p>
                  <p className="mt-1 text-xs text-[var(--lp-ink)]/55">{u.scope}</p>
                  <p className="mt-3 rounded-lg bg-[var(--lp-surface)] px-3 py-2 text-sm font-medium">
                    「{u.quote}」
                  </p>
                  <p className="mt-3 text-sm text-[var(--lp-ink)]/70">{u.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--lp-ink)]/60">
              {config.usecases.more}
            </p>
          </div>
        </section>
      )}

      {/* B07 mechanism */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionLabel>{config.mechanism.label}</SectionLabel>
          <h2 className="mb-3 text-2xl font-bold md:text-3xl [text-wrap:balance]">
            {config.mechanism.headline}
          </h2>
          <p className="mb-8 text-[var(--lp-ink)]/75">{config.mechanism.lead}</p>
          <div className="space-y-4">
            {config.mechanism.items.map((item) => (
              <div
                key={item.techNo}
                className="grid gap-2 rounded-xl border border-[var(--lp-ink)]/10 bg-white p-5 md:grid-cols-[1fr_1.2fr]"
              >
                <div>
                  <p className="text-xs text-[var(--lp-ink)]/50">壁</p>
                  <p className="font-semibold">{item.wall}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--lp-primary)]">
                    {item.techNo} · {item.techName}
                  </p>
                  <p className="mt-1 text-sm text-[var(--lp-ink)]/70">
                    {item.body}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[var(--lp-primary)]">
                    {item.effect}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B08 result */}
      {config.resultShot && (
        <section className="bg-white py-14 md:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="mb-4 font-semibold text-[var(--lp-ink)]">
              {config.resultShot.caption}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={config.resultShot.image.src}
              alt={config.resultShot.image.alt}
              className="mx-auto w-full rounded-xl border border-[var(--lp-ink)]/10"
            />
            <p className="mt-3 text-sm text-[var(--lp-ink)]/65">
              {config.resultShot.note}
            </p>
          </div>
        </section>
      )}

      {/* B09 comparison */}
      {config.comparison && (
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl overflow-x-auto px-4 sm:px-6">
            <SectionLabel>{config.comparison.label}</SectionLabel>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl [text-wrap:balance]">
              {config.comparison.headline}
            </h2>
            <p className="mb-6 text-[var(--lp-ink)]/75">{config.comparison.lead}</p>
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--lp-ink)]/15">
                  <th className="py-3 pr-3 font-semibold">観点</th>
                  <th className="py-3 pr-3 font-semibold text-[var(--lp-ink)]/60">
                    {config.comparison.columns.common}
                  </th>
                  <th className="py-3 font-semibold text-[var(--lp-primary)]">
                    {config.comparison.columns.ours}
                  </th>
                </tr>
              </thead>
              <tbody>
                {config.comparison.rows.map((row) => (
                  <tr
                    key={row.point}
                    className="border-b border-[var(--lp-ink)]/10"
                  >
                    <td className="py-3 pr-3 font-medium">{row.point}</td>
                    <td className="py-3 pr-3 text-[var(--lp-ink)]/65">
                      {row.common}
                    </td>
                    <td className="py-3 text-[var(--lp-ink)]">{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs leading-relaxed text-[var(--lp-ink)]/55">
              {config.comparison.fairnessNote}
            </p>
          </div>
        </section>
      )}

      {/* B10 growth */}
      {config.growth && (
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionLabel>{config.growth.label}</SectionLabel>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              {config.growth.headline}
            </h2>
            <p className="mb-8 text-[var(--lp-ink)]/75">{config.growth.lead}</p>
            <div className="grid gap-4 md:grid-cols-3">
              {config.growth.cycles.map((c) => (
                <div
                  key={c.no}
                  className="rounded-xl border border-[var(--lp-ink)]/10 p-5"
                >
                  <p className="text-xs font-semibold text-[var(--lp-primary)]">
                    {c.no}
                  </p>
                  <h3 className="mt-1 font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm text-[var(--lp-ink)]/70">{c.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--lp-ink)]/70">
              {config.growth.closing}
            </p>
          </div>
        </section>
      )}

      {/* B11 ROI */}
      <DemoLpRoiSection block={config.roi} demoSlug={delivery.slug} />

      {/* B12 process */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionLabel>{config.process.label}</SectionLabel>
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            {config.process.headline}
          </h2>
          <p className="mb-8 text-[var(--lp-ink)]/75">{config.process.lead}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {config.process.steps.map((s) => (
              <div
                key={s.no}
                className="rounded-xl border border-[var(--lp-ink)]/10 bg-white p-5"
              >
                <p className="text-xs font-semibold text-[var(--lp-primary)]">
                  {s.no}
                </p>
                <h3 className="mt-1 font-bold">{s.title}</h3>
                <p className="mt-1 text-xs text-[var(--lp-primary)]">
                  {s.costLabel}
                </p>
                <p className="mt-2 text-sm text-[var(--lp-ink)]/70">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--lp-ink)]/55">
            {config.process.exitNote}
          </p>
        </div>
      </section>

      {/* B13 FAQ */}
      <DemoLpFaq items={config.faq} />

      {/* B14 */}
      <DemoLpFinalForm
        block={config.finalCta}
        brand={brand}
        demoSlug={delivery.slug}
      />

      <footer className="border-t border-[var(--lp-ink)]/10 bg-white py-8 text-center text-xs text-[var(--lp-ink)]/50">
        <p>{brand.companyName}</p>
        <a
          href={brand.footer.contactUrl}
          className="mt-2 inline-block text-[var(--lp-primary)]"
        >
          お問い合わせ
        </a>
      </footer>
    </div>
  )
}
