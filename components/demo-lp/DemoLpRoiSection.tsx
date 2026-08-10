'use client'

import { useMemo, useState } from 'react'
import type { RoiBlock } from '@/lib/demo-lp/types'
import { formatManYen } from '@/lib/demo-lp/format'
import { DemoLpCtaLink } from './DemoLpCtaLink'
import { buildRoiSimulatorHrefForGalleryDemo } from '@/lib/roiSimulator'

export function DemoLpRoiSection({
  block,
  demoSlug,
  returnPath,
}: {
  block: RoiBlock
  demoSlug: string
  /** 未指定時は /demo/{slug}（F型）。W型は呼び出し側で publicPath を渡す */
  returnPath?: string
}) {
  const { config } = block
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(config.sliders.map((s) => [s.key, s.defaultValue])),
  )

  const loss = useMemo(() => config.computeAnnualLoss(values), [config, values])
  const recoverable = useMemo(
    () => config.computeRecoverable(values),
    [config, values],
  )
  const dev = useMemo(
    () => config.estimateDevCost?.(values),
    [config, values],
  )
  const payback =
    dev && recoverable > 0
      ? `${((dev.low / recoverable) * 12).toFixed(1)}〜${((dev.high / recoverable) * 12).toFixed(1)}ヶ月`
      : null

  const externalRoi = buildRoiSimulatorHrefForGalleryDemo(demoSlug, {
    returnPath: returnPath ?? `/demo/${demoSlug}`,
  })
  const { leadTimeLabel, leadTimeValue } = config.outputs
  const hasLeadTime = Boolean(leadTimeLabel && leadTimeValue)

  return (
    <section
      id="roi"
      className="scroll-mt-24 border-y border-[var(--lp-ink)]/10 bg-white py-14 md:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lp-primary)]">
          {block.label}
        </p>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--lp-ink)] md:text-3xl [text-wrap:balance]">
          {block.headline}
        </h2>
        <p className="mb-8 text-[var(--lp-ink)]/80 leading-relaxed">
          {block.lead}
        </p>

        <div className="space-y-6">
          {config.sliders.map((s) => (
            <label key={s.key} className="block">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-[var(--lp-ink)]">
                  {s.label}
                </span>
                <span className="text-sm tabular-nums text-[var(--lp-primary)]">
                  {values[s.key].toLocaleString('ja-JP')}
                  {s.unit}
                </span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={values[s.key]}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    [s.key]: Number(e.target.value),
                  }))
                }
                className="w-full accent-[var(--lp-primary)]"
              />
              <p className="mt-1 text-xs text-[var(--lp-ink)]/55">{s.note}</p>
            </label>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--lp-ink)]/10 bg-[var(--lp-surface)] p-5">
            <p className="text-xs text-[var(--lp-ink)]/60">
              {config.outputs.lossLabel}
            </p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-[var(--lp-ink)]">
              {formatManYen(loss)}
            </p>
          </div>
          <div className="rounded-xl border border-[var(--lp-primary)]/30 bg-[var(--lp-primary)]/5 p-5">
            <p className="text-xs text-[var(--lp-ink)]/60">
              {config.outputs.recoverableLabel}
            </p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-[var(--lp-primary)]">
              {formatManYen(recoverable)}
            </p>
          </div>
          {hasLeadTime && (
            <div className="rounded-xl border border-[var(--lp-primary)]/25 bg-[var(--lp-primary)]/5 p-5 sm:col-span-2">
              <p className="text-xs text-[var(--lp-ink)]/60">{leadTimeLabel}</p>
              <p className="mt-1 text-xl font-bold tracking-tight text-[var(--lp-primary)] md:text-2xl">
                {leadTimeValue}
              </p>
            </div>
          )}
          {payback && config.outputs.paybackLabel && (
            <div className="rounded-xl border border-[var(--lp-ink)]/10 bg-white p-5 sm:col-span-2">
              <p className="text-xs text-[var(--lp-ink)]/60">
                {config.outputs.paybackLabel}
              </p>
              <p className="mt-1 text-xl font-semibold text-[var(--lp-ink)]">
                {payback}
              </p>
            </div>
          )}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[var(--lp-ink)]/55">
          {config.disclaimer}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <DemoLpCtaLink cta={config.cta} />
          {externalRoi ? (
            <a
              href={externalRoi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--lp-ink)]/20 bg-white px-5 py-3 text-sm font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-primary)]/50"
            >
              詳細シミュレーターで試す
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
