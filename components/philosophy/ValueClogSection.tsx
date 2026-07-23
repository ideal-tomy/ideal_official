/**
 * セクション1: 問題と課題（The Conflict）
 */

import React from 'react'
import { ThreeCardSection, CardData } from '../sections/ThreeCardSection'
import {
  PhilosophySectionShell,
  PhilosophySubheading,
  PhilosophyProse,
  PhilosophyEmphasis,
  PhilosophyQuote,
  PhilosophyHighlight,
  PhilosophyWideContent,
} from './PhilosophyLayout'
import { PhilosophySolutionLink } from './PhilosophySolutionLink'

const valueClogCards: CardData[] = [
  {
    title: '地域社会',
    description: 'ボランティアや自治会活動がもたらす価値の構造的問題',
    modalTitle: '地域社会における価値の目詰まり',
    modalContent: (
      <div className="space-y-4">
        <p>
          ボランティアや自治会活動がもたらす価値。その真の受益者は、活動に直接関与しない<strong>「フリーライダー」</strong>や、その恩恵を暗黙的に享受する<strong>社会全体</strong>です。
        </p>
        <p>
          環境を提供し維持する貢献者の活動価値は可視化されず、彼らの経済的な豊かさに結びつくことはありません。
        </p>
        <p>
          皮肉なことに、この構造は、貢献する<strong>『内側の人』</strong>よりも、貢献せずに利益だけを享受する<strong>『外側の人』</strong>の方が、結果として欲望を満たしやすい社会を維持してしまっているのです。
        </p>
      </div>
    ),
    modalSize: 'lg',
  },
  {
    title: '組織内',
    description: '後輩指導や情報共有が生み出す価値の構造的問題',
    modalTitle: '組織内における価値の目詰まり',
    modalContent: (
      <div className="space-y-4">
        <p>
          後輩への技術指導や部署を超えた情報共有。これらの活動が生み出す価値の真の受益者は、誰なのか。
        </p>
        <p>
          貢献した個人の努力は、「チームの成果」や「組織の生産性向上」といった、より大きな指標の中に吸収され、希釈されてしまいます。
          貢献の源泉が誰であったかは、もはや誰にも分かりません。
        </p>
        <p>
          この構造は、個人が自身の評価を守るために&ldquo;知識を共有しない&rdquo;という、合理的な防衛行動を誘発します。
          組織の長期的な成長を犠牲にしてでも、個人が短期的な自己利益を追求する事が合理的である。これもまた、貢献者から価値が一方的に吸い上げられる、紛れもない搾取の形の一部です。
        </p>
      </div>
    ),
    modalSize: 'lg',
  },
  {
    title: '企業間連携',
    description: '企業間取引における防衛戦略の構造的問題',
    modalTitle: '企業間連携における価値の目詰まり',
    modalContent: (
      <div className="space-y-4">
        <p>
          企業間取引における暗黙の前提は、共同での価値創造よりも、いかに自社の責任を回避し、リスクを相手に転嫁するかという、
          <strong>徹底した防衛戦略</strong>が最大のコストになっています。
        </p>
        <p>
          その結果、生まれるのがリスク管理と称した責任の押し付け合いです。
          複雑な契約書や厳しい監査は、万が一の際に相手を追及し、自らを守るための<strong>&ldquo;法的武装&rdquo;</strong>であり、
          そのコストは本質的価値を生み出すための活動よりも大きなものになっているでしょう。
        </p>
        <p>
          この環境での最大の被害者は、常に<strong>誠実な事業者</strong>です。
          相手を信頼し、真に価値を創造しようとする姿勢は非合理的な経営になりかねず、一方的にリスクと追加コストを背負わされる。
          <strong>誠実さそのものが、経済的合理性を失う。</strong>社会全体の価値創造を停滞させる、深刻な問題なのです。
        </p>
      </div>
    ),
    modalSize: 'lg',
  },
]

const ValueClogSection = React.memo(() => {
  return (
    <PhilosophySectionShell id="conflict" label="1. The Conflict" title="問題と課題">
      <PhilosophySubheading className="mt-0">高すぎる「信用のコスト」</PhilosophySubheading>

      <PhilosophyWideContent>
        <div className="p-6 md:p-10 rounded-2xl bg-[var(--site-bg-elevated)]/60 border border-[var(--site-border)]/50">
          <h4 className="text-center text-lg md:text-xl font-bold text-brand mb-8 tracking-wide">
            構造的矛盾が誘発する「不誠実の連鎖」
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center max-w-4xl mx-auto">
            <div className="col-span-1 md:col-span-2 p-5 md:p-6 border border-[var(--site-border)]/60 rounded-xl text-center bg-[var(--site-bg-elevated)]/50 h-full flex flex-col justify-center">
              <svg className="w-10 h-10 text-brand mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.970 9.970 0 011.563-3.029m5.61 5.61L12 16a4 4 0 10-4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.385 4.195L4.545 7.355M19.46 19.46l-3.23-3.23m-4.52-4.52l-4.52-4.52M21 12c-1.275 4.057-5.065 7-9.543 7-4.103 0-7.795-2.221-9.397-5" />
              </svg>
              <p className="text-base md:text-lg font-bold mb-2 text-[var(--site-fg)]">貢献把握の限界</p>
              <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed">小さな貢献が評価できず、貢献者の不満が蓄積</p>
            </div>

            <div className="col-span-1 flex justify-center items-center h-full">
              <div className="hidden md:block">
                <svg className="w-8 h-8 text-brand/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="md:hidden transform rotate-90">
                <svg className="w-8 h-8 text-brand/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 p-5 md:p-6 border border-[var(--site-border)]/60 rounded-xl text-center bg-[var(--site-bg-elevated)]/50 h-full flex flex-col justify-center">
              <svg className="w-10 h-10 text-brand mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base md:text-lg font-bold mb-2 text-[var(--site-fg)]">不正や怠惰の誘惑</p>
              <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed">短期利益や個人の利得を求めると、組織や集団への不誠実な行動が合理的となる</p>
            </div>
          </div>

          <div className="flex justify-center my-6">
            <svg className="w-8 h-8 text-red-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          <div className="p-5 md:p-6 border border-red-500/40 rounded-xl text-center bg-red-950/30 max-w-2xl mx-auto">
            <svg className="w-10 h-10 text-red-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11V9a2 2 0 012-2h0a2 2 0 012 2v2" />
            </svg>
            <p className="text-lg md:text-xl font-bold mb-2 text-red-300">信用コストの肥大化</p>
            <p className="text-sm md:text-base text-red-400/90 leading-relaxed">監査・管理・監視コストが増大し、組織の合理性を意識した行動者が損をする悪循環</p>
          </div>
        </div>
      </PhilosophyWideContent>

      <PhilosophySubheading>「正直者が報われない」構造の正体</PhilosophySubheading>
      <PhilosophyHighlight>
        <PhilosophyProse className="max-w-none">
          <p>
            悪循環の核心は、組織と個人が、それぞれ合理的に自身の利益を最大化しようとした結果、意図せず悪い結末を迎える点にあります。
          </p>
          <p>
            <strong>組織への貢献者や誠実な活動者に対し、労いや部分的な還元にとどめ多くを搾取します。</strong>また個人の利益を優先する行動者のコストは、組織への貢献者と搾取した組織によって負担されます。
          </p>
          <PhilosophyEmphasis className="max-w-none">
            この構造によって、有能で誠実な人材ほど、搾取され続けるか静かに組織を去っていくかのどちらかになる。これこそが、曖昧な評価基準や信用コストが引き起こす最も致命的な損失だと考えています。
          </PhilosophyEmphasis>
        </PhilosophyProse>
      </PhilosophyHighlight>

      <PhilosophySubheading>そもそも「正当な評価」とは何か？</PhilosophySubheading>
      <PhilosophyProse>
        <p>
          現在のシステムでは、人の生存が&ldquo;収益&rdquo;に依存しているため、<strong>本質的な価値創造よりも、短期的な収益確保が優先される</strong>という構造的欠陥を抱えています。
          その結果、以下の具体例で示すように、社会のあらゆる場面で価値の目詰まりが発生しているのです。
        </p>
        <p>
          これらの例は、単純な「善意が報われない」や「メリットデメリット」というだけの話ではありません。
          <strong>社会の仕組み自体が、「本質的価値」をどう認識し、何をもって評価するのかという機能そのものを歪めてしまっている</strong>、より深刻な問題だと認識しています。
        </p>
      </PhilosophyProse>

      <PhilosophyWideContent>
        <ThreeCardSection
          title="日常に潜む「価値の目詰まり」の具体例"
          cards={valueClogCards}
          enableMobileScroll={true}
          padding="md"
          cardSize="md"
          className="bg-transparent"
        />
      </PhilosophyWideContent>

      <PhilosophyProse className="mt-10 lg:mt-14">
        <p>
          これは個人の倫理観以前の<strong>システムそのものが&ldquo;不誠実さ&rdquo;を誘発している</strong>という状況なのです。
        </p>
        <p>
          見えない貢献は無視され、正直者は報われない。その結果、誰もが不信感を前提に行動せざるを得なくなり、 社会全体が膨大な&ldquo;信用コスト&rdquo;を支払い続けています。
          このコストこそが、&ldquo;まじめさ&rdquo;&ldquo;誠実さ&rdquo;&ldquo;正直さ&rdquo;を非合理的にし、創造性とイノベーションを阻害する最大の足枷となっていると考えています。
        </p>
      </PhilosophyProse>

      <PhilosophyQuote>
        経済活動での倫理観や信用は、構造的に規定されるべき
      </PhilosophyQuote>

      <PhilosophyProse>
        <p>
          信用や個人、組織の倫理観に依存しない環境構築が、問題解決の第一歩です。
          <strong>不誠実な行動を非合理にする新しいインフラを設計する。</strong>信用を利用できない環境にすることが、この問題に対して提示する解決策であると考えています。
        </p>
      </PhilosophyProse>
      <PhilosophySolutionLink sectionId="conflict" />
    </PhilosophySectionShell>
  )
})

ValueClogSection.displayName = 'ValueClogSection'

export default ValueClogSection
