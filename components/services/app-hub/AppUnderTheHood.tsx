'use client'

import { ModalTrigger } from '@/components/ui/ModalTrigger'
import { underTheHoodCards } from '@/data/services/app-hub'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export function AppUnderTheHood() {
  return (
    <ServiceSectionShell
      id="under-the-hood"
      surface="default"
      title="どう作っているか"
      lead="業務ツールを支える技術と、このページでの使われ方を開けます。興味のある方だけどうぞ。"
      maxWidth="6xl"
      className="scroll-mt-24"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {underTheHoodCards.map((card) => (
          <ModalTrigger
            key={card.id}
            title={card.modalTitle}
            size="lg"
            modalContent={card.modalBody}
          >
            <div className="h-full rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--service-card-shadow)]">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-[var(--site-fg)]">
                  {card.title}
                </h3>
                <span className="shrink-0 rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-bold text-brand">
                  開く →
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[var(--site-fg-muted)]">
                {card.description}
              </p>
              <p className="mb-3 text-xs leading-relaxed text-brand/80">
                使用: {card.siteUsage}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--site-border)] px-2 py-0.5 text-[11px] text-[var(--site-fg-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ModalTrigger>
        ))}
      </div>
    </ServiceSectionShell>
  )
}
