/**
 * サービス一覧ハブ（営業 LP 型）
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { CallToAction } from '@/components/sections/CallToAction'
import { ServiceHubHero } from '@/components/services/hub/ServiceHubHero'
import { ServiceProblemSolution } from '@/components/services/hub/ServiceProblemSolution'
import { ServiceCardGrid } from '@/components/services/hub/ServiceCardGrid'
import { ServiceFeaturedDemos } from '@/components/services/hub/ServiceFeaturedDemos'
import { ServiceFeaturedCases } from '@/components/services/hub/ServiceFeaturedCases'
import { ServiceProcessSteps } from '@/components/services/ServiceProcessSteps'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { hubProcessSteps } from '@/data/services/hub'
import { labNavLinks } from '@/data/services/service-links'

const servicesDescription =
  '提案書の前に動くデモを。Webサイト・業務ツール・AI自動化まで、触って確かめてから開発するデモファーストのDX支援。'

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
      <ServiceHubHero />
      <ServiceProblemSolution />
      <ServiceCardGrid />
      <ServiceFeaturedDemos />
      <ServiceFeaturedCases />
      <ServiceProcessSteps
        lead="質感を先に合わせ、設計・実装、公開後の改善まで伴走します。"
        steps={hubProcessSteps}
        surface="elevated"
      />

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
