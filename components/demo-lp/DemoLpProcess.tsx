import type { ProcessBlock } from '@/lib/demo-lp/types'
import { DemoLpCtaLink } from './DemoLpCtaLink'
import {
  lpBody,
  lpCardMeta,
  lpCardTitle,
  lpH2,
  lpLead,
  lpNote,
  lpSectionLabel,
} from './lpTypography'

export function DemoLpProcess({ block }: { block: ProcessBlock }) {
  const timeline = block.layout === 'timeline'

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className={lpSectionLabel}>{block.label}</p>
        <h2 className={lpH2}>{block.headline}</h2>
        <p className={`${lpLead} max-w-2xl`}>{block.lead}</p>

        {timeline ? (
          <ol className="relative mt-8 max-w-3xl">
            {block.steps.map((step, index) => {
              const isLast = index === block.steps.length - 1
              return (
                <li
                  key={step.no}
                  className="relative flex gap-4 pb-4 last:pb-0"
                >
                  <div className="flex w-7 shrink-0 flex-col items-center">
                    <span
                      className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--lp-ink)]/15 bg-white text-xs font-bold text-[var(--lp-ink)] shadow-[0_0_0_3px_var(--lp-surface)]"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    {!isLast && (
                      <span
                        className="mt-1 w-px flex-1 bg-[var(--lp-ink)]/15"
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 rounded-xl border border-[var(--lp-ink)]/10 bg-white px-4 py-3">
                    <p className="font-semibold text-[var(--lp-primary)]">
                      {step.title}
                    </p>
                    <p className={`mt-0.5 ${lpBody}`}>{step.body}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {block.steps.map((s) => (
              <div
                key={s.no}
                className="rounded-xl border border-[var(--lp-ink)]/10 bg-white p-5"
              >
                <p className={lpCardMeta}>{s.no}</p>
                <h3 className={`mt-1 ${lpCardTitle}`}>{s.title}</h3>
                {s.costLabel ? (
                  <p className="mt-1 text-sm font-semibold text-[var(--lp-primary)]">
                    {s.costLabel}
                  </p>
                ) : null}
                <p className={`mt-2 ${lpBody}`}>{s.body}</p>
              </div>
            ))}
          </div>
        )}

        <p className={`mt-6 ${lpNote}`}>{block.exitNote}</p>
        {block.detailHref && (
          <div className="mt-5">
            <DemoLpCtaLink
              cta={{
                label: block.detailLabel ?? '導入の流れの詳細を見る →',
                href: block.detailHref,
                variant: 'secondary',
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
