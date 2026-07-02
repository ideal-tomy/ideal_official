export type LoopStep = {
  number: string
  title: string
  subtitle: string
  description: string
}

export const loopSteps: LoopStep[] = [
  {
    number: '01',
    title: '観測',
    subtitle: 'AI observation',
    description: '人間には不可能なスケールで、微細な貢献と広範な影響を24/365で感知する。',
  },
  {
    number: '02',
    title: '記録',
    subtitle: 'on-chain PoC',
    description:
      '感知された貢献要素を改ざん困難な履歴として刻む。組織移動や解散でもリセットされない。',
  },
  {
    number: '03',
    title: '測定',
    subtitle: 'ξ integrity',
    description:
      '「観測された指標」と「実現した価値」の関数従属性を測る。乖離＝ゲーミングを検知する。',
  },
  {
    number: '04',
    title: '執行',
    subtitle: 'smart contract',
    description:
      '合意済みロジックに従い、人間の裁量も遅延も挟まずインセンティブを自動執行する。',
  },
  {
    number: '05',
    title: 'フィードバック',
    subtitle: 'long-term',
    description:
      '数年単位の影響分析が未来の計算に反映され、「逃げ得」が合理的か未知数になる。',
  },
]
