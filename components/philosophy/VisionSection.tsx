/**
 * セクション0: はじめに（The Vision）
 * ビジョンセクション
 */

import React from 'react'
import { colors } from '../../lib/design-tokens'

const VisionSection = React.memo(() => {
  return (
    <section id="vision" className="py-8 md:py-16 border-b border-gray-800">
      <p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>0. The Vision</p>
      <h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
        はじめに
      </h2>
      
      <div className="space-y-6 text-base md:text-lg leading-relaxed">
        <p>
          目指すのは単一の理想郷ではなく、無数の理想郷が共存・進化できる『メタシステム』設計。
        </p>
        <p className={`text-xl md:text-2xl font-bold ${colors.text.primary}`}>
          現代社会は未成熟で、真の問題は<strong>&ldquo;選択肢の欠如&rdquo;</strong>にあると考えています。
        </p>                   
        <p>
          これは既存システムとの共存・進化を促すもの。「正直者が報われ」「どの価値観で生きるか」を選べる自由を目指します。
        </p>

        <div className="p-4 rounded-lg border border-blue-400/30 bg-gray-900/50">
          <p className="mb-4">
            このシステムの上では、各コミュニティ（DAO）が、自らの価値観に基づき&ldquo;貢献の定義&rdquo;や&ldquo;公正さの形&rdquo;を自由に設計できます。
          </p>
          <hr className="border-blue-400/30 my-4" />
          <p>
            そして、個人は自らの行動履歴を、プライバシーを守ったまま組織を超えて持ち運び、最も価値観の合うコミュニティを主体的に選択できるようにします。
          </p>
          <hr className="border-blue-400/30 my-4" />
          <p>
            個人のメリット追求行動が組織全体の価値創造に直結させ、人間が行う内部調整や監視コストをゼロに近づけ、人間の活動の大部分が組織発展のために使えるようになります。
          </p>
        </div>
      </div>
    </section>
  )
})

VisionSection.displayName = 'VisionSection'

export default VisionSection
