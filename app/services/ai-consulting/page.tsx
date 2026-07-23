import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { AiHubHero } from '../../../components/services/ai-hub/AiHubHero'
import { AiHubCapabilityGrid } from '../../../components/services/ai-hub/AiHubCapabilityGrid'
import { AiHubFeaturedDemos } from '../../../components/services/ai-hub/AiHubFeaturedDemos'
import {
  AiHubIndustryGrid,
  AiHubProblemGrid,
  AiHubProcess,
} from '../../../components/services/ai-hub/AiHubBrowseSections'
import { AiHubTechDetails } from '../../../components/services/ai-hub/AiHubTechDetails'
import { ServiceAiCta } from '../../../components/sections/ServiceAiCta'
import { aiServiceData } from '../../../data/services/ai'
import { serviceNavLinks } from '../../../data/services/service-links'

const FAQSection = dynamic(
  () =>
    import('../../../components/sections/FAQSection').then((mod) => ({
      default: mod.FAQSection,
    })),
  { loading: () => <div className="animate-pulse bg-[var(--site-bg-elevated)] rounded-lg h-64" /> }
)

const RelatedServicesSection = dynamic(
  () =>
    import('../../../components/sections/RelatedServicesSection').then((mod) => ({
      default: mod.RelatedServicesSection,
    })),
  { loading: () => <div className="animate-pulse bg-[var(--site-bg-elevated)] rounded-lg h-64" /> }
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
      <div className="border-b border-brand">
        <AiHubHero />
      </div>

      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="ai-consulting"
      />

      <AiHubCapabilityGrid />
      <AiHubFeaturedDemos />
      <AiHubIndustryGrid />
      <AiHubProblemGrid />
      <AiHubProcess />
      <AiHubTechDetails />

      <div className="border-b border-brand">
        <FAQSection
          title="よくある質問"
          faqs={aiServiceData.faqs!}
          variant="dark"
        />
      </div>

      <div className="border-b border-brand">
        <RelatedServicesSection
          title="関連サービス"
          services={aiServiceData.relatedServices!}
          variant="dark"
        />
      </div>

      <ServiceAiCta serviceId="ai-consulting" />
    </div>
  )
}
