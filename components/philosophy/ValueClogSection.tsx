/**
 * セクション1: 問題と課題（The Conflict）
 */

import React from 'react'
import { ThreeCardSection, CardData } from '@/components/sections/ThreeCardSection'
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
    <PhilosophySectionShell id="conflict" label="問題と課題" title="問題と課題">
      <PhilosophySubheading className="mt-0">高すぎる「信用のコスト」</PhilosophySubheading>

      <PhilosophyWideContent>
        <div className="rounded-md border border-[#262B36] bg-[#171A22] p-6 text-[#E6E8EE] md:p-10">
          <h4 className="mb-8 text-center text-lg font-semibold tracking-wide text-[#5EC8D8] [word-break:keep-all] [overflow-wrap:anywhere] md:text-xl">
            構造的矛盾が誘発する「不誠実の連鎖」
          </h4>

          <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-4 md:grid-cols-5">
            <div className="col-span-1 flex h-full flex-col justify-center rounded-md border border-[#343B4A] bg-[#1C202A] p-5 text-center md:col-span-2 md:p-6">
              <svg className="mx-auto mb-3 h-10 w-10 text-[#5EC8D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <p className="mb-2 text-base font-bold text-[#E6E8EE] md:text-lg">貢献把握の限界</p>
              <p className="text-sm leading-relaxed text-[#A8AEBB] [word-break:keep-all] [overflow-wrap:anywhere]">小さな貢献が評価できず、貢献者の不満が蓄積</p>
            </div>

            <div className="col-span-1 flex h-full items-center justify-center">
              <svg className="h-8 w-8 rotate-90 text-[#5EC8D8] md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            <div className="col-span-1 flex h-full flex-col justify-center rounded-md border border-[#343B4A] bg-[#1C202A] p-5 text-center md:col-span-2 md:p-6">
              <svg className="mx-auto mb-3 h-10 w-10 text-[#5EC8D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mb-2 text-base font-bold text-[#E6E8EE] md:text-lg">不正や怠惰の誘惑</p>
              <p className="text-sm leading-relaxed text-[#A8AEBB] [word-break:keep-all] [overflow-wrap:anywhere]">短期利益や個人の利得を求めると、組織や集団への不誠実な行動が合理的となる</p>
            </div>
          </div>

          <div className="my-6 flex justify-center">
            <svg className="h-8 w-8 text-[#D9705A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          <div className="mx-auto max-w-2xl rounded-md border border-[#D9705A]/70 bg-[rgba(217,112,90,0.14)] p-5 text-center md:p-6">
            <svg className="mx-auto mb-3 h-10 w-10 text-[#D9705A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <p className="mb-2 text-lg font-bold text-[#D9705A] md:text-xl">信用コストの肥大化</p>
            <p className="text-sm leading-relaxed text-[#E6E8EE] [word-break:keep-all] [overflow-wrap:anywhere] md:text-base">監査・管理・監視コストが増大し、組織の合理性を意識した行動者が損をする悪循環</p>
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

export { ValueClogSection }
