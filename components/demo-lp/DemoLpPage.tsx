'use client'

import { useEffect } from 'react'
import type { LpConfig, UseCasesBlock } from '@/lib/demo-lp/types'
import { getLpPublicPath } from '@/lib/demo-lp/types'
import { DemoLpCtaLink } from './DemoLpCtaLink'
import { DemoLpHeroVisual } from './DemoLpHeroVisual'
import { DemoLpRoiSection } from './DemoLpRoiSection'
import { DemoLpFaq } from './DemoLpFaq'
import { DemoLpFinalForm } from './DemoLpFinalForm'
import { DemoLpPartsCatalog } from './DemoLpPartsCatalog'
import { DemoLpProcess } from './DemoLpProcess'
import { DemoLpResultTabs } from './DemoLpResultTabs'
import { DemoLpIllustration } from './DemoLpIllustration'
import { DemoLpRecurringProblems } from './DemoLpRecurringProblems'
import { DemoLpRoleImpact } from './DemoLpRoleImpact'
import {
  lpAffirm,
  lpBody,
  lpCardMeta,
  lpCardTitle,
  lpCardTitleLg,
  lpCompareCommon,
  lpCompareOurs,
  lpH1,
  lpH2,
  lpHeroBody,
  lpHeroSub,
  lpLead,
  lpNote,
  lpQuote,
  lpSectionLabel,
  lpSummaryBox,
  lpSummaryHeadline,
} from './lpTypography'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={lpSectionLabel}>{children}</p>
}

function UseCasesSection({ block }: { block: UseCasesBlock }) {
  const compact = block.layout === 'compact'
  const names = block.layout === 'names'
  return (
    <section className="bg-white py-14 md:py-20">
      <div
        className={`mx-auto px-4 sm:px-6 ${names ? 'max-w-3xl' : 'max-w-5xl'}`}
      >
        <SectionLabel>{block.label}</SectionLabel>
        <h2 className={lpH2}>{block.headline}</h2>
        <p className={lpLead}>{block.lead}</p>
        {names ? (
          <p className={`mt-6 ${lpBody}`}>
            {block.items.map((u, i) => (
              <span key={u.industry}>
                {i > 0 ? (
                  <span className="mx-1.5 text-[var(--lp-ink)]/30" aria-hidden>
                    ／
                  </span>
                ) : null}
                <span className="font-medium text-[var(--lp-ink)]">
                  {u.industry}
                </span>
              </span>
            ))}
          </p>
        ) : compact ? (
          <ul className="mt-6 divide-y divide-[var(--lp-ink)]/10 border-y border-[var(--lp-ink)]/10">
            {block.items.map((u) => (
              <li key={u.industry} className="py-4">
                <p className="font-semibold text-[var(--lp-ink)]">
                  {u.industry}
                  <span className={`ml-2 font-normal ${lpNote}`}>{u.scope}</span>
                </p>
                <p className={`mt-1 ${lpBody}`}>{u.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {block.items.map((u) => (
              <div
                key={u.industry}
                className="rounded-xl border border-[var(--lp-ink)]/10 p-5"
              >
                <p className={lpCardMeta}>{u.industry}</p>
                <p className={`mt-1 ${lpNote}`}>{u.scope}</p>
                <p className={lpQuote}>「{u.quote}」</p>
                <p className={`mt-3 ${lpBody}`}>{u.body}</p>
              </div>
            ))}
          </div>
        )}
        {block.more ? <p className={`mt-6 ${lpNote}`}>{block.more}</p> : null}
      </div>
    </section>
  )
}

export function DemoLpPage({ config }: { config: LpConfig }) {
  const { brand, delivery } = config
  const publicPath = getLpPublicPath(delivery)

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
            <h1 className={`mb-4 ${lpH1}`}>
              {config.hero.headline}
            </h1>
            <p className={`mb-3 ${lpHeroSub}`}>
              {config.hero.subline}
            </p>
            <p className={`mb-6 ${lpHeroBody}`}>
              {config.hero.body}
            </p>
            {config.hero.demoNote ? (
              <p className={`-mt-3 mb-6 ${lpNote}`}>{config.hero.demoNote}</p>
            ) : null}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <DemoLpCtaLink cta={config.hero.ctas[0]} />
              <DemoLpCtaLink cta={config.hero.ctas[1]} />
            </div>
            {config.hero.badges && config.hero.badges.length > 0 ? (
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
            ) : null}
          </div>
          <DemoLpHeroVisual visual={config.hero.visual} />
        </div>
      </section>

      {/* B02 impact */}
      <section className="border-b border-[var(--lp-ink)]/10 bg-[var(--lp-ink)] py-12 text-white md:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-center text-base text-white/85 md:text-lg">
            {config.impact.mainFigure.lead}
          </p>
          <p className="mt-2 text-center text-3xl font-bold tabular-nums md:text-4xl">
            {config.impact.mainFigure.value}
            <span className="ml-1 text-lg font-medium text-white/80">
              {config.impact.mainFigure.trail}
            </span>
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/55">
            {config.impact.basis}
          </p>
          {config.impact.metrics && config.impact.metrics.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {config.impact.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-4 text-center"
              >
                <p className="text-lg font-bold">{m.value}</p>
                <p className="mt-1 text-sm text-white/65">{m.label}</p>
              </div>
            ))}
          </div>
          ) : null}
        </div>
      </section>

      {/* B03 pillars */}
      {config.pillars && (
        <section className="py-14 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
            {config.pillars.map((p) => (
              <div key={p.title}>
                <h3 className={`mb-2 ${lpCardTitleLg}`}>
                  {p.title}
                </h3>
                <p className={lpBody}>
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
          <h2 className={lpH2}>
            {config.problem.headline}
          </h2>
          <p className={`${lpLead} max-w-2xl`}>
            {config.problem.lead}
          </p>

          {config.problem.spotDiagrams
            ?.filter((d) => d.placement === 'after-lead')
            .map((d) => (
              <DemoLpIllustration
                key={d.asset.src}
                asset={d.asset}
                className="mb-10"
              />
            ))}

          {config.problem.items.some(
            (item) => !config.problem.cardHiddenItemNos?.includes(item.no),
          ) ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {config.problem.items
                .filter(
                  (item) =>
                    !config.problem.cardHiddenItemNos?.includes(item.no),
                )
                .map((item) => (
                  <div
                    key={item.no}
                    className="rounded-xl border border-[var(--lp-ink)]/10 p-5"
                  >
                    <p className={`mb-1 ${lpCardMeta}`}>
                      {item.no}
                    </p>
                    <h3 className={`mb-2 ${lpCardTitle}`}>{item.title}</h3>
                    <p className={lpBody}>
                      {item.body}
                    </p>
                  </div>
                ))}
            </div>
          ) : null}

          {config.problem.spotDiagrams
            ?.filter((d) => d.placement === 'before-summary')
            .map((d) => (
              <DemoLpIllustration
                key={d.asset.src}
                asset={d.asset}
                className="mt-10"
              />
            ))}

          <div className={lpSummaryBox}>
            <p className={lpSummaryHeadline}>
              {config.problem.summary.headline}
            </p>
            <p className={`mt-2 ${lpBody}`}>
              {config.problem.summary.body}
            </p>
          </div>
        </div>
      </section>

      {config.recurringProblems && (
        <DemoLpRecurringProblems block={config.recurringProblems} />
      )}

      {config.roleImpact && <DemoLpRoleImpact block={config.roleImpact} />}

      {config.fit.layout === 'prose' ? (
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionLabel>{config.fit.label}</SectionLabel>
            <h2 className={lpH2}>{config.fit.headline}</h2>
            {config.fit.scopeNote ? (
              <p className={`mb-6 ${lpNote}`}>{config.fit.scopeNote}</p>
            ) : null}
            <div className="space-y-5">
              {config.fit.conditions.map((c) => (
                <div key={c.no} className="border-b border-[var(--lp-ink)]/10 pb-5">
                  <p className={lpCardMeta}>
                    {c.no}
                    {c.roleLabel ? ` · ${c.roleLabel}` : ''}
                  </p>
                  <h3 className={`mt-1 ${lpCardTitle}`}>{c.title}</h3>
                  <p className={`mt-2 ${lpBody}`}>{c.body}</p>
                </div>
              ))}
            </div>
            <p className={`mt-6 ${lpAffirm}`}>{config.fit.affirm}</p>
            <p className={`mt-3 ${lpNote}`}>{config.fit.exclude}</p>
          </div>
        </section>
      ) : (
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionLabel>{config.fit.label}</SectionLabel>
          <h2 className={lpH2}>
            {config.fit.headline}
          </h2>
          <p className={lpLead}>{config.fit.lead}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {config.fit.conditions.map((c) => (
              <div
                key={c.no}
                className="rounded-xl border border-[var(--lp-ink)]/10 bg-white p-5"
              >
                <p className={`mb-1 ${lpCardMeta}`}>
                  {c.no}
                  {c.roleLabel ? ` · ${c.roleLabel}` : ''}
                </p>
                <h3 className={`mb-2 ${lpCardTitle} leading-snug`}>{c.title}</h3>
                <p className={lpBody}>{c.body}</p>
              </div>
            ))}
          </div>
          {config.fit.scopeNote && (
            <p className={`mt-6 ${lpNote}`}>
              {config.fit.scopeNote}
            </p>
          )}
          <p className={`mt-4 ${lpAffirm}`}>
            {config.fit.affirm}
          </p>
          <p className={`mt-3 ${lpNote}`}>
            {config.fit.exclude}
          </p>
        </div>
      </section>
      )}

      {config.usecases && !config.usecasesAfterResult && (
        <UseCasesSection block={config.usecases} />
      )}

      {/* W-B07a parts catalog */}
      {config.partsCatalog && !config.partsCatalogAfterResult && (
        <DemoLpPartsCatalog block={config.partsCatalog} />
      )}

      {/* B07 mechanism（省略可） */}
      {config.mechanism && (
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionLabel>{config.mechanism.label}</SectionLabel>
          <h2 className={lpH2}>
            {config.mechanism.headline}
          </h2>
          <p className={lpLead}>{config.mechanism.lead}</p>
          <div className="space-y-4">
            {config.mechanism.items.map((item) => (
              <div
                key={item.techNo}
                className="grid gap-2 rounded-xl border border-[var(--lp-ink)]/10 bg-white p-5 md:grid-cols-[1fr_1.2fr]"
              >
                <div>
                  <p className={lpNote}>
                    {config.mechanism!.wallLabel ?? '壁'}
                  </p>
                  <p className="font-semibold text-[var(--lp-ink)]">{item.wall}</p>
                </div>
                <div>
                  <p className={lpCardMeta}>
                    {item.techNo} · {item.techName}
                  </p>
                  <p className={`mt-1 ${lpBody}`}>
                    {item.body}
                  </p>
                  <p className="mt-2 text-base font-medium text-[var(--lp-primary)]">
                    {item.effect}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* B08 result — tabs (W) 優先、なければ単発ショット */}
      {config.resultTabs ? (
        <DemoLpResultTabs
          sectionLabel={config.resultTabs.sectionLabel}
          headline={config.resultTabs.headline}
          tabs={config.resultTabs.tabs}
          note={config.resultTabs.note}
        />
      ) : config.resultShot ? (
        <section className="bg-white py-14 md:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="mb-4 text-base font-semibold text-[var(--lp-ink)] md:text-lg">
              {config.resultShot.caption}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={config.resultShot.image.src}
              alt={config.resultShot.image.alt}
              className="mx-auto w-full rounded-xl border border-[var(--lp-ink)]/10"
            />
            <p className={`mt-3 ${lpNote}`}>
              {config.resultShot.note}
            </p>
          </div>
        </section>
      ) : null}

      {config.partsCatalog && config.partsCatalogAfterResult && (
        <DemoLpPartsCatalog block={config.partsCatalog} />
      )}

      {config.usecases && config.usecasesAfterResult && (
        <UseCasesSection block={config.usecases} />
      )}

      {/* B09 comparison */}
      {config.comparison && (
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl overflow-x-auto px-4 sm:px-6">
            <SectionLabel>{config.comparison.label}</SectionLabel>
            <h2 className={lpH2}>
              {config.comparison.headline}
            </h2>
            <p className={`mb-6 ${lpLead}`}>{config.comparison.lead}</p>
            <table className="w-full min-w-[560px] border-collapse text-left text-base">
              <thead>
                <tr className="border-b border-[var(--lp-ink)]/15">
                  <th className="py-3 pr-3 font-semibold">観点</th>
                  <th className={`py-3 pr-3 font-semibold ${lpCompareCommon}`}>
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
                    <td className={`py-3 pr-3 ${lpCompareCommon}`}>
                      {row.common}
                    </td>
                    <td className={`py-3 ${lpCompareOurs}`}>{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={`mt-4 ${lpNote}`}>
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
            <h2 className={lpH2}>
              {config.growth.headline}
            </h2>
            <p className={lpLead}>{config.growth.lead}</p>
            <div className="grid gap-4 md:grid-cols-3">
              {config.growth.cycles.map((c) => (
                <div
                  key={c.no}
                  className="rounded-xl border border-[var(--lp-ink)]/10 p-5"
                >
                  <p className={lpCardMeta}>
                    {c.no}
                  </p>
                  <h3 className={`mt-1 ${lpCardTitle}`}>{c.title}</h3>
                  <p className={`mt-2 ${lpBody}`}>{c.body}</p>
                </div>
              ))}
            </div>
            <p className={`mt-6 ${lpBody}`}>
              {config.growth.closing}
            </p>
          </div>
        </section>
      )}

      {/* B11 ROI */}
      <DemoLpRoiSection
        block={config.roi}
        demoSlug={delivery.slug}
        returnPath={publicPath}
      />

      {/* B12 process */}
      <DemoLpProcess block={config.process} />

      {/* B13 FAQ */}
      <DemoLpFaq items={config.faq} />

      {/* B14 */}
      <DemoLpFinalForm
        block={config.finalCta}
        brand={brand}
        demoSlug={delivery.slug}
      />

      <footer className={`border-t border-[var(--lp-ink)]/10 bg-white py-8 text-center ${lpNote}`}>
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
