/**
 * Philosophy ページ
 */

'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '../../components/sections/HeroSection'

const VisionSection = dynamic(
  () => import('../../components/philosophy/VisionSection'),
  { ssr: false },
)
const ValueClogSection = dynamic(
  () => import('../../components/philosophy/ValueClogSection'),
  { ssr: false },
)
const PhilosophySection = dynamic(
  () => import('../../components/philosophy/PhilosophySection'),
  { ssr: false },
)
const MechanismSection = dynamic(
  () => import('../../components/philosophy/MechanismSection'),
  { ssr: false },
)
const StructureSection = dynamic(
  () => import('../../components/philosophy/StructureSection'),
  { ssr: false },
)
const RoadmapSection = dynamic(
  () => import('../../components/philosophy/RoadmapSection'),
  { ssr: false },
)
const DeclarationSection = dynamic(
  () => import('../../components/philosophy/DeclarationSection'),
  { ssr: false },
)

export default function PhilosophyPage() {
  return (
    <>
      <HeroSection
        title="自由と秩序が両立した社会を設計する"
        subText="正直であることが合理的な環境の設計へ"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VisionSection />
        <ValueClogSection />
        <PhilosophySection />
        <MechanismSection />
        <StructureSection />
        <RoadmapSection />
        <DeclarationSection />
      </div>
    </>
  )
}
