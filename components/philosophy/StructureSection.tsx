/**
 * セクション4: 価値観で進化する組織構造（The Structure）
 */

import React from 'react'
import {
  PhilosophySectionShell,
  PhilosophySubheading,
  PhilosophyProse,
} from './PhilosophyLayout'
import { PhilosophySolutionLink } from './PhilosophySolutionLink'

const StructureSection = React.memo(() => {
  return (
    <PhilosophySectionShell id="structure" label="4. The Structure" title="価値観で進化する組織構造">
      <PhilosophySubheading className="mt-0">「価値観による分岐の自由」へ</PhilosophySubheading>

      <PhilosophyProse>
        <p>
          DAOの本質は、善悪という単一の価値基準を押し付けることではありません。
        </p>
        <p>
          重要なのは、<strong>組織内の意見の相違を、内部抗争や権力闘争といった破壊的な&ldquo;対立&rdquo;ではなく、創造的な&ldquo;分岐（フォーク）&rdquo;へと昇華させる</strong>ことにあります。
          これは、各々が信じる理想やアプローチを追求するための、システムに組み込まれた基本的な仕組みです。
          これは、内部抗争や権力闘争、現状維持にエネルギーを浪費するのではなく、各々が目指したい理想を追求するための、システムに組み込まれた基本的な仕組みです。
        </p>
      </PhilosophyProse>

      <PhilosophySubheading>フォーク：二つの進化のかたち</PhilosophySubheading>
      <PhilosophyProse className="mb-6">
        <p>
          フォークは、主に二つの形で組織の健全な進化を促します。
        </p>
      </PhilosophyProse>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
        <div className="rounded-xl bg-[var(--site-bg-elevated)]/35 border border-[var(--site-border)]/40 p-5 sm:p-6">
          <p className="font-bold text-brand mb-2">1. 価値観による分岐</p>
          <p className="text-base text-[var(--site-fg-muted)] leading-relaxed">
            組織の根本的な価値観やミッションとの間にズレが生じた場合、メンバーは自らの貢献履歴を保持したまま、新しい価値観を掲げる組織を立ち上げることができます。
          </p>
        </div>
        <div className="rounded-xl bg-[var(--site-bg-elevated)]/35 border border-[var(--site-border)]/40 p-5 sm:p-6">
          <p className="font-bold text-brand mb-2">2. アプローチによる分岐</p>
          <p className="text-base text-[var(--site-fg-muted)] leading-relaxed">
            共通の価値観や目標は維持しつつも、その達成手段（戦略、戦術）について異なるアイデアを持つグループが、
            それぞれの方法を試すために分岐することができます。
          </p>
        </div>
      </div>

      <PhilosophySubheading>フォークが促す健全な進化のメカニズム</PhilosophySubheading>
      <PhilosophyProse>
        <p>
          この「フォークの権利」は、組織や所属する個人に自律的進化のメカニズムをもたらします。
        </p>

        <ul className="list-none space-y-5 ml-0">
          <li className="pl-0">
            <strong className="text-[var(--site-fg)]">価値観の一致が協力な引力を生む：</strong>{' '}
            組織の方向性と自身の価値観がズレ始めたメンバーは、無理に内部で戦う必要はありません。
            自身の活動履歴（価値持続スコア）を保持したまま、同じ価値観を持つ仲間と共に新しい組織をフォークできます。
            これにより、最も貢献度の高いメンバーほど、最も自身の価値観と一致する組織へと自然に引き寄せられます。
          </li>
          <li className="pl-0">
            <strong className="text-[var(--site-fg)]">健全な淘汰と多様性の創出：</strong>{' '}
            フォークは、元の組織からの単なる「離脱」ではありません。
            それは、新しい価値観や創造性、技術やアイデアを持つ組織の誕生を意味します。
            これにより、社会には多様な選択肢が生まれ、健全なエコシステムの形成が期待できます。
          </li>
          <li className="pl-0">
            <strong className="text-[var(--site-fg)]">価値観の表明が組織の価値を強める：</strong>{' '}
            運営者は常に『価値観を表明し続ける』事が重要となる。「腐敗しないように」や「体裁を整える」
            と考えるのではなく、「コミュニティの価値観を共有し続けること」を常に考えます。
            また、組織が採用するアプローチについても、メンバーとの継続的な対話と合意形成を意識します。
            メンバーとの価値観の一致、成長や発展のためのプロセス、方向性など、魅力的な人材との一致こそが、組織そのものの価値や魅力に直結することが期待できます。
          </li>
        </ul>

        <p className="pt-6 mt-6 border-t border-[var(--site-border)]/60">
          フォーク&ldquo;創造的な分岐の自由&rdquo;こそが、DAOがもたらす最大の価値だと考えています。
          組織内に設定された上下関係による顔色の伺いあいから、立場や役割が違う&ldquo;対等な関係&rdquo;を目指せる組織構造に技術を活用し、
          個々人の価値観や得手不得手、やりたい事への正直な実行そのものが、組織の原動力へと変換される事を目指せます。
        </p>
      </PhilosophyProse>
      <PhilosophySolutionLink sectionId="structure" />
    </PhilosophySectionShell>
  )
})

StructureSection.displayName = 'StructureSection'

export { StructureSection }
