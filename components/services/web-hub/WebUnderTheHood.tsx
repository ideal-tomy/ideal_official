'use client'

import { ModalTrigger } from '@/components/ui/ModalTrigger'
import { underTheHoodCards } from '@/data/services/web-hub'

export function WebUnderTheHood() {
  return (
    <section
      id="under-the-hood"
      className="scroll-mt-24 bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--site-fg)]">
            Under the Hood
          </h2>
          <p className="text-lg text-[var(--site-fg-muted)] max-w-2xl mx-auto">
            使っている技術を、このサイトのどこで使っているかとセットで開けます。
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4">
          {underTheHoodCards.map((card) => (
            <ModalTrigger
              key={card.id}
              title={card.modalTitle}
              size="lg"
              modalContent={card.modalBody}
            >
              <div className="h-full rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-5 hover:border-brand/40 hover:bg-[var(--site-bg-elevated)]/70 transition-colors text-left">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-[var(--site-fg)]">{card.title}</h3>
                  <span className="text-xs text-brand shrink-0">開く →</span>
                </div>
                <p className="text-sm text-[var(--site-fg-muted)] mb-4 leading-relaxed">
                  {card.description}
                </p>
                <p className="text-xs text-brand/80 mb-3 leading-relaxed">
                  使用: {card.siteUsage}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full border border-[var(--site-border)] text-[var(--site-fg-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ModalTrigger>
          ))}
        </div>
      </div>
    </section>
  )
}
