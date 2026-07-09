import type { Metadata } from 'next'
import { LabServiceBridge } from '@/components/lab/LabServiceBridge'

export const metadata: Metadata = {
  title: 'ブロックチェーン・DAO | ideal',
  description:
    'ブロックチェーン・DAO の研究・実験は LAB に集約しています。思想、デモ、プロトタイプ相談への入口です。',
  openGraph: {
    title: 'Blockchain / DAO Lab | ideal',
    description: '分散型技術の研究・実験は LAB へ。プロトタイプ相談も可能です。',
  },
}

export default function BlockchainDevelopmentPage() {
  return (
    <LabServiceBridge
      title="ブロックチェーン・DAO"
      subtitle="分散型技術の思想・研究・実験は LAB に移動しました。DAO Governance、Contribution Measurement、スマートコントラクトのデモをご覧ください。"
      labHref="/lab/blockchain"
      labLabel="Blockchain / DAO Lab"
      contactHref="/contact?service=blockchain-development"
    />
  )
}
