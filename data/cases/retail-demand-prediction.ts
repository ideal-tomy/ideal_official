import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const retailDemandPrediction: CaseStudy = {
  slug: 'retail-demand-prediction',
  industry: 'retail',
  industryLabel: '店舗 / 小売',
  title: '発注判断が、感覚と経験に頼り続ける。',
  subtitle: '店舗 / 小売 × 需要予測',
  lead:
    '感覚で発注し、実績確認が遅い流れを、データ投入から予測値と影響要因をセットで得て判断する活用イメージです。',
  metaTitle: '店舗 / 小売 × 需要予測 | 活用イメージ | ideal',
  metaDescription:
    '小売の発注・在庫判断を、感覚ベースから、予測値と影響要因による意思決定へ。関連デモを体験できます。',
  tags: ['小売', '店舗', '需要予測', '在庫'],
  pain: {
    who: '店舗責任者・発注担当・本部の需給担当',
    headline: '売れた／余ったあとで振り返っても、次の発注はまた感覚に戻る。',
    body: '経験と勘で数量を決め、週次や月次で実績を見る。欠品や余剰が出てから調整し、また感覚に戻る。データはあるのに、判断のテーブルに「予測値と理由」が載っていない状態が続きがちです。',
  },
  outcomes: [
    '予測値と影響要因がセットで示され、次の一手の材料になる',
    '「なぜその数字か」を共有しやすくなり、属人的な発注が減る方向に寄せられる',
    '振り返りが「結果の確認」だけでなく「次の判断」に使いやすくなる',
  ],
  demoScope: {
    simpleShows:
      '小売・来客数サンプルで、予測値と影響要因がセットで示される流れを体験できます。',
    simpleLimits:
      '予測精度の保証や、自動発注の完全自動化は含みません。使えるデータ期間・粒度は現場ごとに違います。',
  },
  fit: {
    goodFor: [
      '発注・人員・在庫判断を、感覚からデータ材料へ寄せたい店舗・本部',
      '履歴データはあるが、判断画面に載せていないチーム',
      'まず「予測の見方」を関係者で揃えたい場合',
    ],
    notIdealFor: [
      '履歴データがほぼ無く、収集から始める段階だけの場合（先にデータ整備が必要）',
      '予測結果を無確認で自動発注まで一気に任せたい場合',
      '単発キャンペーンなど、パターン化できない判断が主の場合',
    ],
  },
  before: {
    title: 'いまの流れ',
    summary: '売れ行きの変化に、データが追いつかない。',
    steps: [
      { label: '感覚で発注', detail: '経験と直感で数量を決める' },
      { label: '実績確認', detail: '週次や月次で売上を振り返る' },
      { label: '在庫調整', detail: '欠品や余剰が出てから対応' },
      { label: '次回判断', detail: 'また感覚に戻る' },
    ],
  },
  after: {
    title: 'AI介入後の流れ',
    summary: '予測値と要因を見て、次の一手を早く決められる。',
    steps: [
      { label: 'データ投入', detail: '来客・売上・在庫などの履歴を渡す' },
      { label: '予測', detail: '需要予測値と信頼区間を算出' },
      { label: '判断', detail: '影響要因を見ながら発注・人員を調整' },
    ],
  },
  relatedDemo: {
    slug: 'data-to-prediction',
    label: 'データ → 予測',
    href: `${GALLERY_BASE}/data-to-prediction`,
    description:
      '小売・来客数サンプルで、予測値と影響要因がセットで示される流れを体験できます。',
  },
  contactHref:
    '/contact?service=ai-consulting&intent=cases&case=retail-demand-prediction',
  status: 'published',
}
