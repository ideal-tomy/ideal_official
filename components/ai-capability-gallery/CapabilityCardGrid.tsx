import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { CapabilityCard } from './CapabilityCard'
import { MobileScrollTilt } from './MobileScrollTilt'

export function CapabilityCardGrid() {
  return (
    <section
      id="capabilities"
      className="bg-[var(--site-bg)] py-10 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-bold text-[var(--site-fg)] md:mb-4 md:text-3xl lg:text-4xl">
            7つの業務変化パターン
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[var(--site-fg-muted)] md:text-lg">
            カードを選んで、すぐ体験できます。
            <span className="text-brand">自社への変化</span>
            をイメージしてください。
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
          {capabilities.map((capability) => (
            <MobileScrollTilt key={capability.id}>
              <CapabilityCard capability={capability} />
            </MobileScrollTilt>
          ))}
        </div>
      </div>
    </section>
  )
}


