import type { Metadata } from 'next'
import {
  LabAreaHero,
  LabPhilosophyGrid,
  LabCardGrid,
  LabSoftCta,
} from '@/components/lab/LabAreaViews'
import {
  blockchainLabHero,
  blockchainPhilosophyPoints,
  blockchainResearchTopics,
  blockchainExperiments,
  blockchainSoftCta,
} from '@/data/lab/blockchain'

export const metadata: Metadata = {
  title: 'Blockchain / DAO Lab | ideal',
  description:
    '分散型技術を研究する LAB。透明性・貢献・ガバナンスの思想と、DAO・スマートコントラクトの実験・プロトタイプ。',
  openGraph: {
    title: 'Blockchain / DAO Lab | ideal',
    description:
      '分散型技術を研究する LAB。Philosophy、Research、実験への入口です。',
  },
}

export default function LabBlockchainPage() {
  return (
    <div className="min-h-screen bg-black">
      <LabAreaHero
        eyebrow={blockchainLabHero.eyebrow}
        title={blockchainLabHero.title}
        subtitle={blockchainLabHero.subtitle}
        breadcrumbLabel="Blockchain / DAO"
      />

      <LabPhilosophyGrid
        title="Philosophy"
        description="なぜ ideal は分散型技術を研究するのか"
        points={blockchainPhilosophyPoints}
        deepLink="/philosophy"
        deepLinkLabel="思想を深く読む"
      />

      <div id="dao-governance" className="scroll-mt-24">
        <LabCardGrid
          title="Research Topics"
          description="研究・設計の主要テーマ"
          items={blockchainResearchTopics.map((t) => ({
            id: t.id,
            title: t.title,
            description: t.description,
          }))}
        />
      </div>

      <LabCardGrid
        title="Experiments / Prototypes"
        description="思想を技術として体感できるデモと実験"
        items={blockchainExperiments.map((e) => ({
          id: e.id,
          title: e.title,
          description: e.description,
          href: e.href,
          status: e.status,
        }))}
      />

      <LabSoftCta
        title={blockchainSoftCta.title}
        description={blockchainSoftCta.description}
        href={blockchainSoftCta.href}
      />
    </div>
  )
}
