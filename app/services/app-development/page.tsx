import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ServiceNavigation } from '@/components/sections/ServiceNavigation'
import { AppHubHero } from '@/components/services/app-hub/AppHubHero'
import { ProductShowcase } from '@/components/services/app-hub/ProductShowcase'
import {
  AppWhatWeBuild,
  AppProblemSolution,
  AppRelatedDemos,
  AppProcess,
} from '@/components/services/app-hub/AppWhatWeBuild'
import { AppUnderTheHood } from '@/components/services/app-hub/AppUnderTheHood'
import { ServiceAiCta } from '@/components/sections/ServiceAiCta'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import {
  appHubFaqs,
  appHubRelatedServices,
} from '@/data/services/app-hub'
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
  title: 'Webアプリ・業務ツール開発 | ideal',
  description:
    '入力する。処理する。結果が返る。Excel、紙、手作業の業務を、使いやすいWebアプリや業務ツールにします。',
  openGraph: {
    title: 'Webアプリ・業務ツール開発 | ideal',
    description:
      '業務を動く仕組みに。操作体験デモでWebアプリの可能性を確認しながら相談できます。',
  },
}

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <AppHubHero />

      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="app-development"
      />

      <ProductShowcase />
      <AppWhatWeBuild />
      <AppProblemSolution />
      <AppRelatedDemos />
      <AppUnderTheHood />
      <AppProcess />

      <ServiceSectionShell surface="default" padded={false} maxWidth="4xl">
        <FAQSection
          title="よくある質問"
          faqs={appHubFaqs.map((f) => ({ ...f }))}
          variant="default"
        />
      </ServiceSectionShell>

      <ServiceSectionShell surface="elevated" padded={false} maxWidth="7xl">
        <RelatedServicesSection
          title="関連サービス"
          services={appHubRelatedServices.map((s) => ({
            ...s,
            tags: [...s.tags],
          }))}
          variant="default"
        />
      </ServiceSectionShell>

      <ServiceAiCta serviceId="app-development" />
    </div>
  )
}
