import type { Metadata } from 'next'
import {
  LabAreaHero,
  LabCardGrid,
  LabTechList,
  LabSoftCta,
} from '@/components/lab/LabAreaViews'
import {
  metaverseLabHero,
  metaverseCategories,
  metaverseProjects,
  metaverseTechnologies,
  metaverseSoftCta,
} from '@/data/lab/metaverse'

export const metadata: Metadata = {
  title: 'Spatial / VR・AR Lab | ideal',
  description:
    '空間体験を研究する LAB。VR訓練、バーチャルイベント、3Dシミュレーション、インタラクティブ体験の企画と制作。',
  openGraph: {
    title: 'Spatial / VR・AR Lab | ideal',
    description:
      '画面を見るだけではなく、空間を体験する。VR・AR・3Dの研究・プロジェクト集。',
  },
}

export default function LabMetaversePage() {
  return (
    <div className="min-h-screen bg-black">
      <LabAreaHero
        eyebrow={metaverseLabHero.eyebrow}
        title={metaverseLabHero.title}
        subtitle={metaverseLabHero.subtitle}
        breadcrumbLabel="Spatial / VR・AR"
      />

      <LabCardGrid
        title="Experience Categories"
        description="空間体験の主要カテゴリ"
        items={metaverseCategories.map((c) => ({
          id: c.id,
          title: c.title,
          description: c.description,
        }))}
      />

      <LabCardGrid
        title="Projects / Concepts"
        description="過去に検討・制作してきた空間体験の企画"
        items={metaverseProjects.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          category: p.category,
        }))}
      />

      <LabTechList title="Technology" technologies={metaverseTechnologies} />

      <LabSoftCta
        title={metaverseSoftCta.title}
        description={metaverseSoftCta.description}
        href={metaverseSoftCta.href}
      />
    </div>
  )
}
