/**
 * Philosophy ページ
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '../../components/sections/HeroSection'
import { PhilosophyNav } from '../../components/philosophy/PhilosophyNav'
import VisionSection from '../../components/philosophy/VisionSection'
import ValueClogSection from '../../components/philosophy/ValueClogSection'
import PhilosophySection from '../../components/philosophy/PhilosophySection'
import MechanismSection from '../../components/philosophy/MechanismSection'
import StructureSection from '../../components/philosophy/StructureSection'
import RoadmapSection from '../../components/philosophy/RoadmapSection'
import DeclarationSection from '../../components/philosophy/DeclarationSection'

export const metadata: Metadata = {
  title: 'Philosophy | LAB | ideal',
  description:
    '自由と秩序が両立した社会を設計する。Proof of Contribution を中心とした、公正な評価と組織進化の思想と研究開発計画。',
  openGraph: {
    title: 'Philosophy | LAB | ideal',
    description:
      '自由と秩序が両立した社会を設計する。Proof of Contribution を中心とした、公正な評価と組織進化の思想と研究開発計画。',
  },
}

export default function PhilosophyPage() {
  return (
    <>
      <div className="border-b border-brand/40 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-400">
          <Link href="/lab" className="text-brand hover:text-brand-hover transition-colors">
            ← LAB
          </Link>
          <span className="mx-2 text-gray-600">/</span>
          <span className="text-gray-300">Philosophy</span>
        </div>
      </div>

      <HeroSection
        title="自由と秩序が両立した社会を設計する"
        subText="正直であることが合理的な環境の設計へ"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="lg:grid lg:grid-cols-[11rem_1fr] xl:grid-cols-[13rem_1fr] lg:gap-10 xl:gap-16">
          <PhilosophyNav />

          <div className="min-w-0">
            <VisionSection />
            <ValueClogSection />
            <PhilosophySection />
            <MechanismSection />
            <StructureSection />
            <RoadmapSection />
            <DeclarationSection />
          </div>
        </div>
      </div>
    </>
  )
}
