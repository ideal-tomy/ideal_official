import Link from 'next/link'
import { CapabilityCard } from '@/components/ai-capability-gallery/CapabilityCard'
import {
  AI_HUB_GALLERY,
  getFeaturedCapabilities,
} from '@/data/services/ai-hub'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export function AiHubFeaturedDemos() {
  const featured = getFeaturedCapabilities()

  return (
    <ServiceSectionShell
      surface="elevated"
      title="まずはここから触る"
      lead="トップと同じ代表3本です。機能ラベルで見比べて、すぐ体験できます。"
      maxWidth="6xl"
    >
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
    </ServiceSectionShell>
  )
}
