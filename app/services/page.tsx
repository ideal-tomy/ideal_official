/**
 * サービス一覧（相談・設計 / 製作を1ページに集約）
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { CallToAction } from '@/components/sections/CallToAction'
import { ServiceHubHero } from '@/components/services/hub/ServiceHubHero'
import { ServicesHashScroll } from '@/components/services/hub/ServicesHashScroll'
import { ServicesPageToc } from '@/components/services/hub/ServicesPageToc'
import { ServicesOverviewSection } from '@/components/services/hub/ServicesOverviewSection'
import { ServicesBuildTabs } from '@/components/services/hub/ServicesBuildTabs'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { labNavLinks } from '@/data/services/service-links'

const servicesDescription =
  '相談・設計からWeb・業務ツール・AI製作まで。課題の整理と実装を同じチームで一気通貫に伴走します。'

export const metadata: Metadata = {
  title: 'サービス | ideal',
  description: servicesDescription,
  openGraph: {
    title: 'サービス | ideal',
    description: servicesDescription,
  },
}

const labTeaserLinks = labNavLinks.filter((l) =>
  ['/lab', '/lab/insights', '/lab/blockchain', '/lab/metaverse'].includes(l.href),
)

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <ServicesHashScroll />
      <ServiceHubHero />
      <ServicesPageToc />
      <ServicesOverviewSection />
      <ServicesBuildTabs />

      <div className="bg-[var(--service-cta-tint)]">
        <CallToAction />
      </div>

      <ServiceSectionShell
        surface="default"
        kicker="LAB"
        title="深い技術・研究は LAB へ"
        lead="Blockchain / DAO、Spatial / VR・AR、Insights など、依頼の主力サービスではなく研究・実験の領域としてまとめています。"
        maxWidth="3xl"
      >
        <ul className="flex flex-wrap justify-center gap-3">
          {labTeaserLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block rounded-lg border border-[var(--site-border)] px-4 py-2 text-sm text-[var(--site-fg-muted)] transition-colors hover:border-brand/40 hover:text-[var(--site-fg)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </ServiceSectionShell>
    </div>
  )
}
