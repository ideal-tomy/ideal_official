import { CardData } from '../../types/common'

export const absoluteConditionsCards: CardData[] = [
  {
    id: 'transparency-automation',
    title: '1. 透明性と自動化',
    description: '意思決定プロセスと実行の自動化と検証可能性',
    modalTitle: '透明性と自動化',
    modalContent: (
      <div className="space-y-4">
        <p>
          意思決定プロセスと実行はプログラムにより自動化され、それらを全て誰もが検証可能な状態とし、
          人間の恣意的な介入の実行を高コストな状態となっていること。
        </p>
        <p>
          この条件により、システムの公平性と信頼性が担保され、人間の主観的な判断による歪みを排除できます。
        </p>
      </div>
    ),
    modalSize: 'md'
  },
  {
    id: 'wide-range-detection',
    title: '2. 広範囲の検知',
    description: 'AIによる微細な貢献の検知と広範囲な影響の把握',
    modalTitle: '広範囲の影響と活動（貢献）の検知',
    modalContent: (
      <div className="space-y-4">
        <p>
          AIが、広範囲に及ぶ影響と、人間には見過ごされる微細な貢献の両方を検知できること。
        </p>
        <p>
          人間の認知限界を超えた貢献の可視化により、これまで見落とされていた価値創造活動を適切に評価できるようになります。
        </p>
      </div>
    ),
    modalSize: 'md'
  },
  {
    id: 'correction-adjustment-system',
    title: '3. 補正・調整システム',
    description: '定量化による攻略活動を防ぐ仕組み',
    modalTitle: '補正、調整システム',
    modalContent: (
      <div className="space-y-4">
        <p>
          定量化による攻略活動が合理的とならない仕組みを導入・実現できること
        </p>
        <p>
          システムの公平性を維持するため、数値化された指標を悪用する行為を防ぐ仕組みが不可欠です。
        </p>
      </div>
    ),
    modalSize: 'md'
  },
  {
    id: 'long-term-impact-reflection',
    title: '4. 中長期的影響の反映',
    description: '長期的な貢献度と影響の評価システム',
    modalTitle: '中長期的に影響を反映させる仕組み',
    modalContent: (
      <div className="space-y-4">
        <p>
          中長期的な貢献度が与える中長期的な影響を加味できること
        </p>
        <p>
          短期的な成果だけでなく、時間をかけて実現される価値創造も適切に評価される仕組みです。
        </p>
      </div>
    ),
    modalSize: 'md'
  },
  {
    id: 'evolving-value-standards',
    title: '5. 進化する価値基準',
    description: '時代に合わせて価値基準を更新する仕組み',
    modalTitle: '進化する価値基準',
    modalContent: (
      <div className="space-y-4">
        <p>
          時代や環境の変化に合わせ、コミュニティが透明なプロセスで価値基準を更新できること。
        </p>
        <p>
          固定化された価値観ではなく、社会の変化に応じて柔軟に進化する評価システムの重要性を示しています。
        </p>
      </div>
    ),
    modalSize: 'md'
  },
  {
    id: 'transparency-privacy',
    title: '6. 透明性の秘匿性',
    description: '個人のプライバシー保護とシステムの透明性',
    modalTitle: 'プライバシーと透明性の両立',
    modalContent: (
      <div className="space-y-4">
        <p>
          プロセスの透明性を担保しつつ、個人の心理的安全性を守るプライバシー保護がなされていること。
        </p>
        <p>
          公正な評価システムでありながら、個人の尊厳とプライバシーを守る技術的解決策が求められます。
        </p>
      </div>
    ),
    modalSize: 'md'
  }
]