import Image from 'next/image'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { hubProblemItems, hubSolutionItems } from '@/data/services/hub'

export function ServiceProblemSolution({
  surface = 'elevated',
}: {
  surface?: 'default' | 'elevated'
}) {
  return (
    <ServiceSectionShell
      surface={surface}
      title="複雑な作業を、シンプルに。"
      lead="手作業や分断された情報を、動く仕組みに置き換えます。"
      maxWidth="6xl"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1.1fr] lg:gap-6">
        <ul className="space-y-3 rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-5 md:p-6">
          {hubProblemItems.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 text-sm text-[var(--site-fg)] md:text-[0.9375rem]"
            >
              <span
                className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--site-bg-elevated)] text-[10px] font-bold text-[var(--site-fg-muted)]"
                aria-hidden
              >
                !
              </span>
              {item.label}
            </li>
          ))}
        </ul>

        <div
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-[var(--df-on-primary)] shadow-[var(--service-card-shadow)]"
          aria-hidden
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10h10M10 5l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] shadow-[var(--service-card-shadow)]">
          <div className="relative aspect-[16/9] w-full border-b border-[var(--site-border)]">
            <Image
              src="/images/sv_app.png"
              alt=""
              fill
              className="object-cover object-center opacity-95"
              sizes="(max-width: 1024px) 100vw, 40vw"
              aria-hidden
            />
          </div>
          <ul className="space-y-2.5 p-5">
            {hubSolutionItems.map((text) => (
              <li
                key={text}
                className="flex items-start gap-2.5 text-sm text-[var(--site-fg)]"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-xs font-bold text-brand"
                  aria-hidden
                >
                  ✓
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ServiceSectionShell>
  )
}
