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
import { ServicesBuildSection } from '@/components/services/hub/ServicesBuildSection'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

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

const labTeaserLinks = [
  { href: '/lab/insights', label: '解説記事' },
  { href: '/lab/blockchain', label: 'DAO研究' },
  { href: '/lab/metaverse', label: 'VR・AR' },
] as const

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <ServicesHashScroll />
      <ServiceHubHero />
      <ServicesPageToc />
      <ServicesOverviewSection />
      <ServicesBuildSection />

      <div className="bg-[var(--service-cta-tint)]">
        <CallToAction />
      </div>

      <ServiceSectionShell
        surface="default"
        title="深い技術・研究は LAB へ"
        lead="Blockchain / DAO、Spatial / VR・AR、解説記事など、依頼の主力サービスではなく研究・実験の領域としてまとめています。"
        align="left"
        emphasis="feature"
        maxWidth="5xl"
      >
        <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {labTeaserLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center text-[15px] font-medium text-[var(--site-fg)] transition-colors hover:text-brand"
              >
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </ServiceSectionShell>
    </div>
  )
}
