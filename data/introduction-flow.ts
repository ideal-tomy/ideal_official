/** 導入までの短い流れ（見積・活用イメージ末尾で共有） */

export type IntroductionFlowStep = {
  step: number
  title: string
  detail: string
}

export const INTRODUCTION_FLOW_STEPS: IntroductionFlowStep[] = [
  {
    step: 1,
    title: '体験する',
    detail: '簡易デモや業務デモで、変化のイメージをつかむ',
  },
  {
    step: 2,
    title: '課題を整理する',
    detail: '活用イメージやAIコンシェルジュで、自社の手順に置き換える',
  },
  {
    step: 3,
    title: '概算を見る',
    detail: '自動見積もりで、参考の価格レンジを確認する',
  },
  {
    step: 4,
    title: '相談・試作へ',
    detail: '要件をすり合わせ、プロトタイプから本番へ進める',
  },
]

export const INTRODUCTION_FLOW_TITLE = '導入までの流れ'
export const INTRODUCTION_FLOW_LEAD =
  'いきなり本番開発ではなく、体験と整理から進められます。'
