import type { Cta, RoiConfig } from './types'
import { formatManYen } from './format'

export type LaborRoiDefaults = {
  people: number
  minutesPerDay: number
  hourlyYen: number
  workDays: number
  recoverRate?: number
  devLow?: number
  devHigh?: number
}

/** 人×時間ロス型の ROI Config を生成 */
export function createLaborRoiConfig(
  defaults: LaborRoiDefaults,
  externalCta?: Cta,
): RoiConfig {
  const recoverRate = defaults.recoverRate ?? 0.55
  const computeAnnualLoss = (v: Record<string, number>) => {
    const people = v.people ?? 0
    const minutes = v.minutesPerDay ?? 0
    const hourly = v.hourlyYen ?? 0
    const days = v.workDays ?? 0
    return people * (minutes / 60) * hourly * days
  }

  return {
    sliders: [
      {
        key: 'people',
        label: '影響する人数',
        unit: '人',
        min: 5,
        max: 200,
        step: 5,
        defaultValue: defaults.people,
        note: 'この業務に関わる人数を想定してください',
      },
      {
        key: 'minutesPerDay',
        label: '1人あたりの損失時間',
        unit: '分/日',
        min: 5,
        max: 120,
        step: 5,
        defaultValue: defaults.minutesPerDay,
        note: '控えめに見たい場合は下げてください',
      },
      {
        key: 'hourlyYen',
        label: '時間単価',
        unit: '円/時',
        min: 1500,
        max: 8000,
        step: 100,
        defaultValue: defaults.hourlyYen,
        note: '人件費の目安（負担単価）',
      },
      {
        key: 'workDays',
        label: '稼働日数',
        unit: '日/年',
        min: 100,
        max: 260,
        step: 10,
        defaultValue: defaults.workDays,
        note: '年間の稼働日',
      },
    ],
    computeAnnualLoss,
    computeRecoverable: (v) => Math.round(computeAnnualLoss(v) * recoverRate),
    estimateDevCost: () => ({
      low: defaults.devLow ?? 1_500_000,
      high: defaults.devHigh ?? 4_500_000,
    }),
    outputs: {
      lossLabel: '想定される年間ロス',
      recoverableLabel: '取り戻せる金額（試算）',
      paybackLabel: '回収期間の目安',
    },
    cta: externalCta ?? {
      label: '詳細シミュレーターで試す',
      href: '#roi',
      variant: 'secondary',
    },
    disclaimer:
      '想定モデルによる試算です（効果の保証ではありません）。実際の効果は業務範囲・データ品質により異なります。',
  }
}

export function impactMainFigureValue(roi: RoiConfig): string {
  const defaults = Object.fromEntries(
    roi.sliders.map((s) => [s.key, s.defaultValue]),
  )
  return formatManYen(roi.computeAnnualLoss(defaults))
}

export function laborBasisNote(d: LaborRoiDefaults): string {
  return `計算根拠（初期値）: 1人${d.minutesPerDay}分/日 × 時給${d.hourlyYen.toLocaleString('ja-JP')}円 × ${d.workDays}営業日 × ${d.people}人`
}
