import {
  WhatWeBuildIllustration,
  type WhatWeBuildIllustrationId,
} from '@/components/services/what-we-build/WhatWeBuildIllustration'

export type WhatWeBuildItem = {
  title: string
  description: string
  illustrationId: WhatWeBuildIllustrationId
  imageAlt: string
}

type WhatWeBuildCardsProps = {
  items: readonly WhatWeBuildItem[]
}

export function WhatWeBuildCards({ items }: WhatWeBuildCardsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] shadow-[var(--service-card-shadow)] transition-transform hover:-translate-y-0.5"
        >
          <div
            className="mock flex aspect-[16/10] w-full items-center justify-center border-b border-[var(--site-border)] bg-[var(--site-bg)] p-3"
            role="img"
            aria-label={item.imageAlt}
          >
            <WhatWeBuildIllustration id={item.illustrationId} />
          </div>
          <div className="flex flex-1 flex-col p-5 md:p-6">
            <h3 className="text-lg font-semibold text-[var(--site-fg)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--site-fg-muted)]">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
