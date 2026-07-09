import type { Metadata } from 'next'
import { LabServiceBridge } from '@/components/lab/LabServiceBridge'

export const metadata: Metadata = {
  title: 'メタバース・空間構築 | ideal',
  description:
    'VR・AR・3D の研究・企画は LAB に集約しています。空間体験のプロジェクトとプロトタイプ相談への入口です。',
  openGraph: {
    title: 'Spatial / VR・AR Lab | ideal',
    description: '空間体験の研究・企画は LAB へ。VR訓練、バーチャルイベント等のプロジェクトをご覧ください。',
  },
}

export default function MetaversePage() {
  return (
    <LabServiceBridge
      title="メタバース・空間構築"
      subtitle="VR、AR、3D、バーチャルイベントの研究・企画は LAB に移動しました。防災VR、プラネタリウム、体験型コンテンツなどのプロジェクトをご覧ください。"
      labHref="/lab/metaverse"
      labLabel="Spatial / VR・AR Lab"
      contactHref="/contact?service=metaverse"
    />
  )
}
