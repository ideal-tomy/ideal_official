/**
 * セクション6: 技術の進化がもたらす新しい『最適化』（The Declaration）
 */

import React from 'react'
import {
  PhilosophySectionShell,
  PhilosophySubheading,
  PhilosophyProse,
  PhilosophyCallout,
} from './PhilosophyLayout'
import { PhilosophySolutionLink } from './PhilosophySolutionLink'

const DESIGN_ITEMS = [
  {
    title: 'AIによる貢献の観測・分析',
    body: 'AIが、ブロックチェーン上に記録した独自の価値基準（アルゴリズム）に基づき、貢献活動を観測できるように仕組みを実装。',
  },
  {
    title: 'ブロックチェーンへの貢献記録',
    body: '観測された貢献要素（PoC要素）を、ブロックチェーン上に記録。',
  },
  {
    title: 'スマートコントラクトによる自動執行',
    body: 'ブロックチェーン上の記録をトリガーとし、事前に合意されたロジックに従ってスマートコントラクトがインセンティブを自動的に執行するように実装（人間の介入なし）。',
  },
  {
    title: '完全な検証可能性',
    body: 'AIの価値基準、記録された貢献要素、スマートコントラクトの実行結果など、全てが過去に遡って誰でも検証可能な状態に実装。',
  },
  {
    title: '価値基準の更新可能性',
    body: 'AIの価値基準変更、貢献度測定に対する価値変数の変更など含め、DAOの透明なガバナンスプロセスを経て更新可能であり、その変更履歴もブロックチェーンに記録されるよう実装。',
  },
  {
    title: 'プライバシー保護と個人主権',
    body: 'ゼロ知識証明等を活用し、貢献の事実は検証可能にしつつ、具体的な行動内容は秘匿できるよう実装。この検証可能な貢献履歴は、個人が主権を持つ形で（NFT等で）管理・活用できる&ldquo;ポータブルな証明書&rdquo;となるよう設計。',
  },
  {
    title: '永続的なフィードバック',
    body: '記録された履歴は長期的な影響分析に利用され、その結果が未来のインセンティブ計算に継続的にフィードバックされるよう設計。',
  },
] as const

const DeclarationSection = React.memo(() => {
  return (
    <PhilosophySectionShell
      id="declaration"
      label="6. The Genesis"
      title="技術の進化がもたらす新しい『最適化』"
      className="border-b-0"
    >
      <PhilosophySubheading className="mt-0">生き方の選択肢を増やしたい</PhilosophySubheading>
      <PhilosophyProse>
        <p>
          問題の本質は、既存のシステムが未成熟であること以上に、<strong>&ldquo;そのシステム以外に、生きる術がない&rdquo;という選択肢の欠如</strong>だと考えています。
          社会的な進化とは、より優れたシステムへ強制的に移行させることだけではありません。
          新たな「生き方の選択肢」を提示し、誰もが主体的に所属を選択できるようになることです。
        </p>
      </PhilosophyProse>

      <PhilosophySubheading>技術が可能にする『新しい最適化』</PhilosophySubheading>
      <PhilosophyProse>
        <p>
          このメタシステムは、単なる理想論ではなく、AIとブロックチェーンという二つの技術革新によって初めて実現可能となった、新しい形の&ldquo;最適化&rdquo;に基づいています。
        </p>
      </PhilosophyProse>

      <PhilosophyCallout className="mt-6">
        <div>
          <p className="font-bold text-brand mb-3">人間だけでは不可能だった&ldquo;観測&rdquo;と&ldquo;記録&rdquo;</p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-[var(--site-fg-muted)]">
            <li>
              <strong className="text-[var(--site-fg)]">AIによる継続的な観測：</strong>{' '}
              人間には不可能なスケールで、あらゆる行動とその文脈、影響範囲を24時間365日観測し続けることが可能になった。
            </li>
            <li>
              <strong className="text-[var(--site-fg)]">ブロックチェーンによる永続的な記録：</strong>{' '}
              観測された行動とその結果は、改ざん困難な履歴としてブロックチェーンに刻まれ、
              個人に紐づく&ldquo;検証可能なアイデンティティ&rdquo;ととして活用できる技術に応用できるようになった。
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-brand mb-3">時間と範囲を超えた&ldquo;影響測定&rdquo;と&ldquo;フィードバック&rdquo;</p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-[var(--site-fg-muted)]">
            <li>
              <strong className="text-[var(--site-fg)]">長期的な影響分析：</strong>{' '}
              AIとブロックチェーンにより、個々の行動、活動が時間（数年、数十年）と範囲（チーム、社会）を超えて
              どのような影響を与えたかを確認できるようになった。
            </li>
            <li>
              <strong className="text-[var(--site-fg)]">永続的なフィードバックループ：</strong>{' '}
              その結果は、未来のあらゆるインセンティブ計算に自動的に反映され、
              責任もリスクもメリットも公平に分散できる可能性を拡げました。
            </li>
          </ul>
        </div>
      </PhilosophyCallout>

      <PhilosophyProse className="mt-8">
        <p>
          この&ldquo;観測→記録→影響測定→フィードバック&rdquo;を個人単位から社会全体を含めて永続的に行える環境は、
          人間だけでは困難だった公正で長期的な最適化を可能にする技術的基盤です。
        </p>
        <p>
          そして、この技術革新によってもたらされた可能性を利用し、具体的な構成要素として、以下を設計します。
        </p>
      </PhilosophyProse>

      <ol className="mt-8 max-w-3xl space-y-5">
        {DESIGN_ITEMS.map((item, index) => (
          <li key={item.title} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/15 border border-brand/30 text-brand text-sm font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="font-semibold text-brand mb-1">{item.title}</p>
              <p className="text-base text-[var(--site-fg-muted)] leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <PhilosophySolutionLink sectionId="declaration" />
    </PhilosophySectionShell>
  )
})

DeclarationSection.displayName = 'DeclarationSection'

export default DeclarationSection
