import { AccordionItem } from '../../components/ui/Accordion'

export const philosophyItems: AccordionItem[] = [
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