import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { WebHubHero } from '../../../components/services/web-hub/WebHubHero'
import { InteractionShowcase } from '../../../components/services/web-hub/InteractionShowcase'
import {
  WebWhatWeBuild,
  WebProcess,
} from '../../../components/services/web-hub/WebWhatWeBuild'
import { WebUnderTheHood } from '../../../components/services/web-hub/WebUnderTheHood'
import { ServiceAiCta } from '../../../components/sections/ServiceAiCta'
import { webDevelopmentData } from '../../../data/services/web-development'
import { serviceNavLinks } from '../../../data/services/service-links'

const FAQSection = dynamic(
  () =>
    import('../../../components/sections/FAQSection').then((mod) => ({
      default: mod.FAQSection,
    })),
  { loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" /> }
)

const RelatedServicesSection = dynamic(
  () =>
    import('../../../components/sections/RelatedServicesSection').then((mod) => ({
      default: mod.RelatedServicesSection,
    })),
  { loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" /> }
)

export const metadata: Metadata = {
  title: 'Web開発 | ideal',
  description:
    '見るだけではなく、触れたくなるWebを。モーダル・モーション・インタラクションを体験しながら、Web制作の依頼内容を確認できます。',
  openGraph: {
    title: 'Web開発 | ideal',
    description:
      '見るだけではなく、触れたくなるWebを。制作技術を体験しながら相談できます。',
  },
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-blue-400">
        <WebHubHero />
      </div>

      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="web-development"
      />

      <InteractionShowcase />
      <WebWhatWeBuild />
      <WebUnderTheHood />
      <WebProcess />

      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={webDevelopmentData.faqs || []}
          variant="dark"
        />
      </div>

      <div className="border-b border-blue-400">
        <RelatedServicesSection
          title="関連サービス"
          services={webDevelopmentData.relatedServices || []}
          variant="dark"
        />
      </div>

      <ServiceAiCta serviceId="web-development" />
    </div>
  )
}
