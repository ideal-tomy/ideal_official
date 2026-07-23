import Link from 'next/link'
import { CapabilityCard } from '@/components/ai-capability-gallery/CapabilityCard'
import {
  AI_HUB_GALLERY,
  getFeaturedCapabilities,
} from '@/data/services/ai-hub'

export function AiHubFeaturedDemos() {
  const featured = getFeaturedCapabilities()

  return (
    <section className="border-b border-brand/40 bg-black py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            まずはここから触る
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            トップと同じ代表3本です。機能ラベルで見比べて、すぐ体験できます。
          </p>
        </header>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {featured.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={AI_HUB_GALLERY}
            className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            デモ一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
