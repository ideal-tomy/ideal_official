import type { ReactNode } from 'react'
import type { HowWeWorkStep } from '@/data/how-we-work'

type HowWeWorkDetailProps = {
  steps: HowWeWorkStep[]
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M4.5 10.5 7.5 13.5 15.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 14.5 7.5 17.5 15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  )
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 16.5c1.2-2.4 3.2-3.5 6-3.5s4.8 1.1 6 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 6.5V10l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RoleColumn({
  label,
  items,
  accent,
  icon,
}: {
  label: string
  items: string[]
  accent: 'brand' | 'sky'
  icon: ReactNode
}) {
  if (items.length === 0) return null

  const accentText =
    accent === 'brand' ? 'text-brand' : 'text-sky-400'
  const bullet =
    accent === 'brand' ? 'bg-brand' : 'bg-sky-400'

  return (
    <div>
      <div className={`mb-3 flex items-center gap-2 ${accentText}`}>
        {icon}
        <p className="text-sm font-semibold text-[var(--site-fg)]">{label}</p>
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[var(--site-fg)]/85">
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${bullet}`}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function HowWeWorkDetail({ steps }: HowWeWorkDetailProps) {
  return (
    <ol className="relative">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        return (
          <li key={step.id} className="relative flex gap-4 pb-8 last:pb-0 md:gap-6 md:pb-10">
            {/* timeline */}
            <div className="flex w-8 shrink-0 flex-col items-center md:w-9">
              <span
                className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-[0_0_0_4px_var(--site-bg)] md:h-9 md:w-9"
                aria-hidden
              >
                {index + 1}
              </span>
              {!isLast && (
                <span
                  className="mt-1 w-px flex-1 bg-[color-mix(in_srgb,var(--site-fg)_22%,transparent)]"
                  aria-hidden
                />
              )}
            </div>

            {/* card */}
            <div className="min-w-0 flex-1 rounded-2xl border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-fg)_4%,transparent)] p-5 md:p-6">
              <h2 className="text-lg font-bold tracking-tight text-amber-300 md:text-xl">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-[15px]">
                {step.summary}
              </p>

              <div className="mt-5 grid gap-6 border-t border-[var(--site-border)] pt-5 sm:grid-cols-2 sm:gap-0">
                <div className="sm:pr-6">
                  <RoleColumn
                    label="こちらがやること"
                    items={step.weDo}
                    accent="brand"
                    icon={<CheckIcon className="h-4 w-4 shrink-0" />}
                  />
                </div>
                <div className="border-[var(--site-border)] sm:border-l sm:pl-6">
                  <RoleColumn
                    label="お願いすること"
                    items={step.youDo}
                    accent="sky"
                    icon={<PersonIcon className="h-4 w-4 shrink-0" />}
                  />
                </div>
              </div>

              {step.notDecidedYet.length > 0 && (
                <div className="mt-5 flex gap-3 rounded-xl bg-[color-mix(in_srgb,var(--site-fg)_6%,transparent)] px-4 py-3">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--site-fg-muted)]" />
                  <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">
                    <span className="font-semibold text-[var(--site-fg)]/80">
                      まだ決めなくてOK
                    </span>
                    <span className="mx-2 text-[var(--site-fg)]/25" aria-hidden>
                      /
                    </span>
                    {step.notDecidedYet.join('／')}
                  </p>
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
