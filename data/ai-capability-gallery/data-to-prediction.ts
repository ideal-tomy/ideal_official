export interface PredictionDataPoint {
  label: string
  value: number
  isForecast?: boolean
}

export interface PredictionFactor {
  label: string
  impact: 'positive' | 'negative' | 'neutral'
  description: string
}

export interface PredictionSampleSet {
  id: string
  name: string
  industry: string
  metric: string
  unit: string
  dataPoints: PredictionDataPoint[]
  forecast: {
    value: number
    confidenceLow: number
    confidenceHigh: number
    period: string
  }
  factors: PredictionFactor[]
}

export const predictionProcessingSteps = [
  '過去データを読み込み中…',
  'トレンドを分析中…',
  '予測モデルを適用中…',
  '影響要因を算出中…',
  '予測が完了しました',
]

export const predictionSampleSets: PredictionSampleSet[] = [
  {
    id: 'foot-traffic',
    name: '来客数予測',
    industry: '小売',
    metric: '日次来客数',
    unit: '人',
    dataPoints: [
      { label: '月', value: 820 },
      { label: '火', value: 750 },
      { label: '水', value: 780 },
      { label: '木', value: 810 },
      { label: '金', value: 920 },
      { label: '土', value: 1150 },
      { label: '日', value: 1080, isForecast: true },
    ],
    forecast: {
      value: 1080,
      confidenceLow: 980,
      confidenceHigh: 1180,
      period: '翌日（日曜）',
    },
    factors: [
      { label: '天気', impact: 'positive', description: '晴れ予報（+8%）' },
      { label: '曜日効果', impact: 'positive', description: '日曜の来客増加傾向' },
      { label: '近隣イベント', impact: 'neutral', description: '影響なし' },
      { label: '前週比', impact: 'negative', description: '前週日曜比 -3%' },
    ],
  },
  {
    id: 'demand',
    name: '需要予測',
    industry: '製造',
    metric: '週次出荷数',
    unit: '個',
    dataPoints: [
      { label: 'W1', value: 2400 },
      { label: 'W2', value: 2550 },
      { label: 'W3', value: 2480 },
      { label: 'W4', value: 2620 },
      { label: 'W5', value: 2780, isForecast: true },
    ],
    forecast: {
      value: 2780,
      confidenceLow: 2550,
      confidenceHigh: 3010,
      period: '来週（W5）',
    },
    factors: [
      { label: '受注残', impact: 'positive', description: '受注残が前週比+12%' },
      { label: '季節性', impact: 'positive', description: '需要旺季に入る時期' },
      { label: '在庫制約', impact: 'negative', description: '一部部品の納期遅延' },
    ],
  },
]

export const predictionDetailPage = {
  slug: 'data-to-prediction',
  metaTitle: 'データ → 予測 | AI Capability Demo Gallery | ideal',
  metaDescription:
    '過去データから未来の意思決定を支援するデモ。予測値と影響要因をセットで確認できます。',
  eyebrow: 'Data to Prediction',
  title: '過去データから、次の判断を支援する。',
  lead: '過去データから未来の意思決定を支援します。予測値だけでなく、信頼区間と影響要因をセットで見せることで、判断の根拠を明確にします。',
  tags: ['小売', '物流', '製造', '人事'],
  beforeTitle: 'Before',
  beforeText: '来客数や需要を感覚と経験で見積もり、根拠のない判断になりがち。',
  afterTitle: 'After',
  afterText: '予測値・信頼区間・影響要因がセットで提示され、データに基づく意思決定ができる。',
}
