import Link from 'next/link'
import { CapabilityCard } from '@/components/ai-capability-gallery/CapabilityCard'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export function AiHubCapabilityGrid() {
  return (
    <ServiceSectionShell
      tone="interactive"
      title="7つの業務変化パターン"
      lead="機能ラベルで見比べて、近いパターンから体験できます。"
    >
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 xl:grid-cols-4">
        {capabilities.map((capability) => (
          <div key={capability.id} className="w-[min(280px,85vw)] shrink-0 md:w-auto">
            <CapabilityCard capability={capability} />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/flow"
          className="inline-flex items-center text-sm font-medium text-brand transition-colors hover:text-brand-hover"
        >
          デモ一覧を見る →
        </Link>
      </div>
    </ServiceSectionShell>
  )
}
