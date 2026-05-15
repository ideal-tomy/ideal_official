/**
 * セクション5: ロードマップ（The Path）
 * ロードマップセクション
 */

import React from 'react'
import { Accordion, AccordionItem } from '../ui/Accordion'
import { colors } from '../../lib/design-tokens'

// ロードマップのアコーディオンデータ
const roadmapItems: AccordionItem[] = [
  {
    id: 'phase-1',
    title: (
      <span>
        <span className="text-blue-400">フェーズ1</span>：基礎研究とプロトタイプの構築
      </span>
    ),
    content: (
      <div className="space-y-4">
        <p>
          この段階では、環境提供のために必要な要素をコードに変換するための開発・検証をします。
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>価値の定義と設計：</strong> 何を「貢献」とし、それに対してどのような対価（トークン等）を紐付けるのか。その価値交換システムの基本設計を確立します。
          </li>
          <li>
            <strong>技術的基盤の確立：</strong> 貢献を検知するAIと、それを記録するブロックチェーンが連携するための、基本的なアーキテクチャを設計・検証します。
          </li>
          <li>
            <strong>プライバシーと透明性の両立：</strong> ゼロ知識証明（zk-SNARKs等）の技術を活用し、貢献の事実は検証可能でありながら、個人のプライバシーを完全に保護する技術的アプローチを研究、検証します。
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'phase-2',
    title: (
      <span>
        <span className="text-blue-400">フェーズ2</span>：AI仮想社会を活用したシミュレーション
      </span>
    ),
    content: (
      <div className="space-y-4">
        <p>
          開発したプロトタイプを、現実世界を模したAIによる仮想社会（デジタルサンドボックス）に投入し、テストと調整を繰り返します。
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>多様な組織モデルでの検証：</strong> 数人規模のチームから数万人規模のコミュニティまで、様々な組織、社会モデルをシミュレートし、システムの有効性と限界を洗い出します。
          </li>
          <li>
            <strong>報酬バランスの最適化：</strong> 貢献度に対する報酬の変数（インセンティブの強弱や時間経過による減衰率など）を動的に調整し、最も健全なエコシステムが生まれるパラメータを探求します。
          </li>
          <li>
            <strong>耐攻撃性のストレステスト：</strong> あらゆる「攻略法」を試みる敵対的なAIエージェントを投入し、システムの免疫機能が正しく作動するかを徹底的にテストします。
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'phase-3',
    title: (
      <span>
        <span className="text-blue-400">フェーズ3</span>：社会実験と実装へ
      </span>
    ),
    content: (
      <div className="space-y-4">
        <p>
          技術そのものだけではなく<strong>&ldquo;中心に据える価値観を何にするか&rdquo;</strong>によって、
          &ldquo;貢献の定義&rdquo;と&ldquo;公正さの形&rdquo;がどう変わるのかという視点での検証を行い常に進化できる環境であることを確認、検証します。
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>価値観による適応性の検証：</strong> &ldquo;中心に据える価値観&rdquo;によって、&ldquo;貢献の定義&rdquo;と&ldquo;公正さの形&rdquo;がどう変化し、システムがそれに適応できるかを検証します。
          </li>
          <li>
            <strong>多様なユースケースでの実証：</strong> 個人の哲学、企業理念、社会課題解決など、様々な価値観を持つコミュニティでの適用可能性を実証します。
          </li>
        </ul>
        
        <p className="mt-4">
          DAOの実現に必要なのは&ldquo;環境&rdquo;であり、その環境に必要な要素を開発し、誰もが入手可能な状態とすることが、本格的な社会実装のスタートラインであり、当面の目標地点です。
        </p>
        <p className="mt-4 font-bold">
          持続可能で多様な組織の未来が形作られ、選択肢が広がる未来に必要なシステムとして機能するかの重要なフェーズです。
        </p>
      </div>
    )
  }
]

const RoadmapSection = React.memo(() => {
  return (
    <section id="path" className="py-8 md:py-16 border-b border-gray-800">
      <p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>5. The Path</p>
      <h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
        ロードマップ
      </h2>
      
      <div className="space-y-8 text-base md:text-lg leading-relaxed">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">思想の具現化：100年続くインフラへの道筋</h3>
        <p>
          idealの行う活動は、<strong>技術の進化の先に起こることが予想される変化に対する、社会基盤構築するための長期的な研究開発計画</strong>です。
        </p>
        <p>
          <strong>未来の誰もが使える&ldquo;部品（プリミティブ）&rdquo;を一つひとつ丹念に作り上げ、その有効性を徹底的に検証していく</strong>こと。
          それが、ideal合同会社の&ldquo;経営戦略&rdquo;です。
        </p>
      </div>

      <div className="mt-12">
        <div className="border border-blue-400 rounded-lg p-4">
          <Accordion 
            items={roadmapItems}
            className="space-y-4"
          />
        </div>
      </div>
    </section>
  )
})

RoadmapSection.displayName = 'RoadmapSection'

export default RoadmapSection