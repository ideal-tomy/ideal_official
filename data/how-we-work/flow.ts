import type { PricingLineId } from '@/lib/concierge/pricing-rules'

export type HowWeWorkFlowStep = {
  stepId: string
  no?: string
  name?: string
  goal?: string
  weDo: readonly string[]
  decided: readonly string[]
  notYet: readonly string[]
  prepare: readonly string[]
}

/** 導入の流れ。01から05の名前はサービスページの段から引き、06はここで足す */
export const howWeWorkFlow = {
  eyebrow: '導入の流れ',
  heading: ['契約の前に、止められる。', 'どこで決まるかを見る。'],
  body: ['相談だけで終えても、テスト開発のあとで止めても構いません。'],
  labels: {
    weDo: 'こちらがすること',
    decided: 'この段で決まること',
    notYet: 'まだ決めないこと',
    prepare: '用意するもの',
  },
  steps: [
    {
      stepId: 'step-consult',
      weDo: ['業務の流れと、使っている道具を聞く', '課題の優先を整理する', '次に進むかの材料を揃える'],
      decided: ['論点と、次に決めること'],
      notYet: ['正式な要件、日程、確定金額', '導入するかどうか'],
      prepare: ['困っている場面', '帳票や画面の例（あれば）'],
    },
    {
      stepId: 'step-requirements',
      weDo: ['作るものと、作らないものを分ける', '参考の価格の幅と、進め方を出す', 'テストで確かめる点を決める'],
      decided: ['作る範囲と、作らない範囲', '参考の価格の幅'],
      notYet: ['正式な見積', '画面と連携の細かい仕様'],
      prepare: ['決裁する人', '予算と時期の目安'],
    },
    {
      stepId: 'step-test',
      weDo: ['絞った範囲の試作を作る', 'サンプルか、合意したデータで動かす', '進む、止める、範囲を変える案を出す'],
      decided: ['本番に進む、止める、範囲を変える'],
      notYet: ['本番と同じ完成度', 'すべての機能'],
      prepare: ['試すデータ', '触って意見を返す現場の人'],
    },
    {
      stepId: 'step-production',
      weDo: ['合意した範囲を実装する', '進捗と変更を共有する', '納品と、使い始めの質問の窓口'],
      decided: ['合意した範囲の実装と納品', '使い始めの質問を受ける窓口'],
      notYet: ['範囲外の追加'],
      prepare: ['確認する人と時間', '本番の環境とアカウント'],
    },
    {
      stepId: 'step-maintain',
      weDo: ['軽い改修と障害対応', '使われ方の振り返り', '次の改善の相談'],
      decided: ['軽い改修', '次の改善の候補'],
      notYet: ['大きな追加', '保守の範囲（別に合意します）'],
      prepare: ['運用で変わったこと', '新しい困りごと'],
    },
    {
      stepId: 'step-improve',
      no: '06',
      name: '機能改善',
      goal: '使いながら、次の機能を足す。',
      weDo: ['残った手間から、次に足す機能を切る', '範囲と参考の金額を出す', '進めるか、止めるかを一緒に決める'],
      decided: ['次に足す機能と、足さないもの'],
      notYet: ['正式な見積', '保守の範囲（別に合意します）'],
      prepare: ['運用で残った手間', '優先したい場面'],
    },
  ] satisfies readonly HowWeWorkFlowStep[],
  prices: {
    heading: ['金額は、はじめる目安です。'],
    promise: ['正式な見積もりは、お問い合わせください。'],
    basesLabel: 'はじめる業務の目安',
    addonsLabel: '足すと広がる目安',
    bases: [
      { id: 'discovery', period: '相談して決める', points: ['課題の整理', '作る範囲の切り分け'] },
      { id: 'lp', period: '相談して決める', points: ['案内のページ', '問い合わせまでの構成'] },
      { id: 'corporate', period: '相談して決める', points: ['会社案内', '複数ページの公開'] },
      { id: 'small_web_app', period: '相談して決める', points: ['業務で使う画面', '小さなツール'] },
      { id: 'ai_prototype', period: '相談して決める', points: ['試すための試作', '精度を見る範囲'] },
    ] satisfies readonly { id: PricingLineId; period: string; points: readonly string[] }[],
    addons: [
      { id: 'ocr', points: ['文書や画像の読み取り'] },
      { id: 'external_api', points: ['別のサービスとの接続'] },
      { id: 'admin', points: ['中の人向けの画面'] },
      { id: 'db_integration', points: ['記録を残す基盤'] },
    ] satisfies readonly { id: PricingLineId; points: readonly string[] }[],
    estimateLink: { label: '概算を試す →', href: '/services#roi' },
    contactLink: { label: '正式な見積もりを問い合わせる →', href: '/contact' },
  },
  outro: {
    heading: ['どこで止めるかも、', '相談して決められます。'],
    servicesLink: { label: 'サービスの5ステップを見る →', href: '/services#steps' },
  },
} as const

export const howWeWorkTopBand = {
  text: '契約までの判断は、導入の流れにまとめています。',
  link: { label: '導入の流れを見る →', href: '/how-we-work' },
} as const
