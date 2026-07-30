import Link from 'next/link'
import { CapabilityCard } from '@/components/ai-capability-gallery/CapabilityCard'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { AI_HUB_GALLERY } from '@/data/services/ai-hub'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export function AiHubCapabilityGrid() {
  return (
    <ServiceSectionShell
      id="capabilities"
      surface="default"
      kicker="Patterns"
      title="7つの業務変化パターン"
      lead="機能ラベルで見比べて、近いパターンから体験できます。"
      maxWidth="7xl"
    >
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
    </ServiceSectionShell>
  )
}
