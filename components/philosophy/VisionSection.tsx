/**
 * セクション0: はじめに（The Vision）
 */

import React from 'react'
import {
  PhilosophySectionShell,
  PhilosophyProse,
  PhilosophyLead,
  PhilosophyCallout,
} from './PhilosophyLayout'
import { PhilosophySolutionLink } from './PhilosophySolutionLink'

const VisionSection = React.memo(() => {
  return (
    <PhilosophySectionShell id="vision" label="0. The Vision" title="はじめに">
      <PhilosophyProse>
        <p>
          目指すのは単一の理想郷ではなく、無数の理想郷が共存・進化できる『メタシステム』設計。
        </p>
        <PhilosophyLead>
          現代社会は未成熟で、真の問題は<strong>&ldquo;選択肢の欠如&rdquo;</strong>にあると考えています。
        </PhilosophyLead>
        <p>
          これは既存システムとの共存・進化を促すもの。「正直者が報われ」「どの価値観で生きるか」を選べる自由を目指します。
        </p>
      </PhilosophyProse>

      <PhilosophyCallout className="mt-8 lg:mt-10">
        <p>
          このシステムの上では、各コミュニティ（DAO）が、自らの価値観に基づき&ldquo;貢献の定義&rdquo;や&ldquo;公正さの形&rdquo;を自由に設計できます。
        </p>
        <hr className="border-blue-400/20" />
        <p>
          そして、個人は自らの行動履歴を、プライバシーを守ったまま組織を超えて持ち運び、最も価値観の合うコミュニティを主体的に選択できるようにします。
        </p>
        <hr className="border-blue-400/20" />
        <p>
          個人のメリット追求行動が組織全体の価値創造に直結させ、人間が行う内部調整や監視コストをゼロに近づけ、人間の活動の大部分が組織発展のために使えるようになります。
        </p>
      </PhilosophyCallout>
      <PhilosophySolutionLink sectionId="vision" />
    </PhilosophySectionShell>
  )
})

VisionSection.displayName = 'VisionSection'

export default VisionSection
