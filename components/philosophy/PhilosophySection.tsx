/**
 * セクション2: 歪められた価値の再定義（The Philosophy）
 * 哲学セクション
 */

import React from 'react'
import { Accordion, AccordionItem } from '../ui/Accordion'
import { ReadMore } from '../ui/ReadMore'
import { colors } from '../../lib/design-tokens'

// 哲学セクションのアコーディオンデータ
const philosophyItems: AccordionItem[] = [
  {
    id: 'philosophy-1',
    title: '『能力』の強制的な社会保障化',
    content: (
      <div className="space-y-4">
        <p>
          現代日本の雇用システムでは、<strong>成果や能力を理由に正社員を解雇することは極めて困難です。</strong>これは本来、個人の生活を守るためのセーフティネットでした。
        </p>
        <p>
          しかし、この制度は意図せずして<strong>&ldquo;有能で誠実な人間が生み出す価値の余剰が、価値を生まない人間のコストに強制的に再分配される&rdquo;</strong>という仕組みを組織に強いています。
          組織は、このコストを払い続けなければならず、その原資は、本来報われるべき誠実な貢献者からの搾取によって賄われているのです。
        </p>
      </div>
    )
  },
  {
    id: 'philosophy-2',
    title: '評価システムを歪める『温情主義』',
    content: (
      <div className="space-y-4">
        <p>
          <strong>能力の欠如や貢献の不足という事実から目を背け、評価そのものを歪めてしまう文化</strong>
        </p>
        <p>
          個々の得意不得意や向き不向きも含め、個別環境化での&ldquo;無能&rdquo;は罪ではない。しかし、その事実が曖昧な評価基準で&ldquo;調整&rdquo;され、二つの悲劇を生みます。
        </p>
        <div className="space-y-4 border-t border-gray-600 pt-4 mt-4">
          <p className="underline decoration-blue-400 underline-offset-4 decoration-2 mb-2"> 
            １，組織全体の評価基準を破壊し、誠実な貢献者の意欲を削いでしまうこと。
          </p>
          <p className="underline decoration-blue-400 underline-offset-4 decoration-2"> 
            ２，本来であれば適切な支援や別の道によって救われるべき個人から、その機会を奪ってしまうこと。
          </p>
        </div>
      </div>
    )
  }
]

const PhilosophySection = React.memo(() => {
  return (
    <section id="philosophy" className="py-8 md:py-16 border-b border-gray-800">
      <p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>2. The Philosophy</p>
      <h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
        歪められた価値の再定義
      </h2>
      
      <div className="space-y-8 text-base md:text-lg leading-relaxed">
        <p>
          なぜこのような矛盾が社会の当然として受け入れられているのか。
          現代の社会システムが内包する、二つの代表的な構造的問題から解決が測れるのではないかと考えています。
        </p>

        <Accordion 
          items={philosophyItems}
          className="mt-8"
        />

        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-6 border-l-4 border-blue-400 pl-4">
            評価をごまかす優しさは、誰も救わない。人が人を評価、判断しなくていい社会へ
          </h3>
          <div className="space-y-4">
            <p>
              この構造的な問題や、それによって不自由を強いられる全てに対し、新しい評価の形が必要だと考えています。
              それは、<strong>&ldquo;評価&rdquo;と&ldquo;救済&rdquo;をシステムレベルで完全に分離する</strong>ことからはじまります。
            </p>
            
            <ReadMore
              previewText=""
              fullText={
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li><strong>評価の絶対性：</strong>個人の貢献、能力、誠実さは、透明なロジックの下で絶対的に評価される。
                        貢献や活動結果に対する報酬や対価は、この評価によってのみ得られるべきです。</li>
                    <li><strong>救済の透明性：</strong>評価をごまかすのではなく、<strong>事実を認めた上で、尊厳ある評価と対応をする。</strong></li>
                  </ul>
                  <p>
                    誠実な貢献者が報われる環境と、得意不得意を含めた人間の一側面である活動の結果を明確にしてもなお、
                    尊厳を失わずに生きていける社会を両立させるために、公的機関に留まらない社会全体でのセーフティネット構想が必要だと考えています。
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 border-l-4 border-blue-400 pl-4">
                      ラディカルな正直さの物理法則
                    </h4>
                    <div className="space-y-6 text-base md:text-lg leading-relaxed">
                      <p>
                        <strong>&ldquo;生きるために、正直な感情や行動を抑制しなければならない社会は、本当に成熟していると言えるのか？&rdquo;</strong>
                      </p>
              
                      <blockquote className="border-l-4 border-blue-400 pl-6 py-2 my-8">
                        <p className="text-xl font-bold text-blue-400 italic">
                          秩序のために&ldquo;正直さ&rdquo;を制限することではなく
                          <br />
                          あらゆる&ldquo;正直さ&rdquo;が、その結果と物理法則のように結びつく環境を設計するべき。
                        </p>
                      </blockquote>
                          
                      <p>
                        ここで言う&ldquo;正直さ&rdquo;とは、倫理的なものではありません。
                        短期的な利益の追求、欲望、好き嫌いの表明、あるいは逃避。それらすべてが、人間のありのままの「正直な」行動です。
                      </p>
                      <p>
                        それらの行動は禁止も否定もされるべきではない。しかし、すべての行動は、その結果として&ldquo;活動履歴&rdquo;に記録され、
                        未来永続的に引き継がれることが必要だと考えます。
                      </p>
                      <p>
                        メタシステム自体は、その行動を&ldquo;善&rdquo;とも&ldquo;悪&rdquo;とも判断しません。
                        その判断は、自分が所属を選択した組織や集団（DAO）、自分自身の価値観に委ねられます。
                      </p>
                      <p>
                        欲望に正直な行動が、あるDAOでは最大の貢献とみなされ、別のDAOではマイナスとみなされる。
                        この<strong>&ldquo;ラディカルな正直さの許容&rdquo;</strong>と<strong>&ldquo;価値観ごとの厳格な結果責任&rdquo;</strong>の両立こそが、
                        我々の設計する&ldquo;正直さの物理法則&rdquo;によって描かれる世界の断片です。
                      </p>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <div className="mt-12">
          <p className="mt-6 pt-6 border-t border-gray-700 font-bold text-blue-400 text-xl">
            個人の合理的な選択を、根本から変える。
          </p>
          <p>
            もはや、集団の価値観に合わせるために自分を偽り、摩擦コストを生み出す必要はありません。
          </p>
          <p className="font-bold text-gray-100">
            <strong>&ldquo;正直さを隠して現在の集団に留まる&rdquo;よりも、&ldquo;ありのままの自分でいられる最適な集団（DAO）を探し、移動する&rdquo;ことが合理的になる</strong>からです。
          </p>
          <p>
            個人はミスマッチからの解放、組織は内部摩擦の解消、双方にとっての最適解となる可能性があり、
            このメタシステムを通じて実現したい、次の進化を遂げた社会の姿です。
          </p>
        </div>
      </div>
    </section>
  )
})

PhilosophySection.displayName = 'PhilosophySection'

export default PhilosophySection