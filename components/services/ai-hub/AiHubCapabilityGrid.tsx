import Link from 'next/link'
import { CapabilityCard } from '@/components/ai-capability-gallery/CapabilityCard'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { AI_HUB_GALLERY } from '@/data/services/ai-hub'

export function AiHubCapabilityGrid() {
  return (
    <section
      id="capabilities"
      className="border-b border-brand/40 bg-black py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-brand to-brand-hover bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            7つの業務変化パターン
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            機能ラベルで見比べて、近いパターンから体験できます。
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 lg:gap-3 xl:grid-cols-3 2xl:grid-cols-4">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={AI_HUB_GALLERY}
            className="inline-flex items-center text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            デモ一覧をすべて見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
