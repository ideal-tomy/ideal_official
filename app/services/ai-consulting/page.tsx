import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ServiceNavigation } from '@/components/sections/ServiceNavigation'
import { AiHubHero } from '@/components/services/ai-hub/AiHubHero'
import { AiHubCapabilityGrid } from '@/components/services/ai-hub/AiHubCapabilityGrid'
import { AiHubFeaturedDemos } from '@/components/services/ai-hub/AiHubFeaturedDemos'
import {
  AiHubIndustryGrid,
  AiHubProblemGrid,
  AiHubProcess,
} from '@/components/services/ai-hub/AiHubBrowseSections'
import { AiHubTechDetails } from '@/components/services/ai-hub/AiHubTechDetails'
import { ServiceAiCta } from '@/components/sections/ServiceAiCta'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { aiServiceData } from '@/data/services/ai'
import { serviceNavLinks } from '@/data/services/service-links'

const FAQSection = dynamic(
  () =>
    import('@/components/sections/FAQSection').then((mod) => ({
      default: mod.FAQSection,
    })),
  {
    loading: () => (
      <div className="h-64 animate-pulse rounded-lg bg-[var(--site-bg-elevated)]" />
    ),
  },
)

const RelatedServicesSection = dynamic(
  () =>
    import('@/components/sections/RelatedServicesSection').then((mod) => ({
      default: mod.RelatedServicesSection,
    })),
  {
    loading: () => (
      <div className="h-64 animate-pulse rounded-lg bg-[var(--site-bg-elevated)]" />
    ),
  },
)

export const metadata: Metadata = {
  title: 'AI | ideal',
  description:
    'AIで仕事はどこまで変えられるか。7つの業務変化デモを体験し、自社向けのAI開発・導入を相談できます。',
  openGraph: {
    title: 'AI | ideal',
    description:
      'AIで仕事はどこまで変えられるか。7つの業務変化デモを体験し、自社向けのAI開発・導入を相談できます。',
  },
}

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <AiHubHero />

      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="ai-consulting"
      />

      <AiHubFeaturedDemos />
      <AiHubCapabilityGrid />
      <AiHubIndustryGrid />
      <AiHubProblemGrid />
      <AiHubProcess />
      <AiHubTechDetails />

      <ServiceSectionShell surface="default" padded={false} maxWidth="4xl">
        <FAQSection
          title="よくある質問"
          faqs={aiServiceData.faqs!}
          variant="default"
        />
      </ServiceSectionShell>

      <ServiceSectionShell surface="elevated" padded={false} maxWidth="7xl">
        <RelatedServicesSection
          title="関連サービス"
          services={aiServiceData.relatedServices!}
          variant="default"
        />
      </ServiceSectionShell>

      <ServiceAiCta serviceId="ai-consulting" />
    </div>
  )
}
