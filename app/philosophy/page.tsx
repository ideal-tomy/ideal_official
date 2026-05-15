/**
 * Philosophy ページ - パフォーマンス最適化版
 * 元のファイルの完全復元 + パフォーマンス改善
 */

'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Header } from '../../components/layout/Header'
import { HeroSection } from '../../components/sections/HeroSection'

// 動的インポートでパフォーマンス最適化
const VisionSection = dynamic(() => import('../../components/philosophy/VisionSection'), {
  ssr: false
})

const ValueClogSection = dynamic(() => import('../../components/philosophy/ValueClogSection'), {
  ssr: false
})

const PhilosophySection = dynamic(() => import('../../components/philosophy/PhilosophySection'), {
  ssr: false
})

const MechanismSection = dynamic(() => import('../../components/philosophy/MechanismSection'), {
  ssr: false
})

const StructureSection = dynamic(() => import('../../components/philosophy/StructureSection'), {
  ssr: false
})

const RoadmapSection = dynamic(() => import('../../components/philosophy/RoadmapSection'), {
  ssr: false
})

const DeclarationSection = dynamic(() => import('../../components/philosophy/DeclarationSection'), {
  ssr: false
})

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* グローバルヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="">
        {/* ページタイトル */}
        <HeroSection
          title="自由と秩序が両立した社会を設計する"
          subText="正直であることが合理的な環境の設計へ"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* セクション0: はじめに */}
          <div>
            <VisionSection />
              </div>
      
          {/* セクション1: 問題と課題 */}
          <div>
            <ValueClogSection />
              </div>

          {/* セクション2: 歪められた価値の再定義 */}
          <div>
            <PhilosophySection />
            </div>
        
          {/* セクション3: 基本設計 */}
          <div>
            <MechanismSection />
            </div>

          {/* セクション4: 価値観で進化する組織構造 */}
          <div>
            <StructureSection />
              </div>
      
          {/* セクション5: ロードマップ */}
          <div>
            <RoadmapSection />
              </div>

          {/* セクション6: 技術の進化がもたらす新しい『最適化』 */}
          <div>
            <DeclarationSection />
            </div>           
        </div>
      </main>
    </div>
  )
}