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

export type WorkflowSiteRoiDefaults = {
  sites: number
  minutesPerSiteDay: number
  hourlyYen: number
  /** 0–50 の差戻し率（%） */
  reworkRatePercent: number
  workDays?: number
  recoverRate?: number
  /** 差戻しコスト = 整理転記コスト × (reworkRate/100) × reworkFactor */
  reworkFactor?: number
  devLow?: number
  devHigh?: number
  leadTimeLabel?: string
  leadTimeValue?: string
}

/**
 * 現場数×整理転記時間の滞留ベース ROI（W型）。
 * annualLoss = 整理転記 + 差戻し（整理転記 × 差戻し率 × 係数）
 */
export function createWorkflowSiteRoiConfig(
  defaults: WorkflowSiteRoiDefaults,
  externalCta?: Cta,
): RoiConfig {
  const workDays = defaults.workDays ?? 240
  const recoverRate = defaults.recoverRate ?? 0.5
  const reworkFactor = defaults.reworkFactor ?? 0.5

  const transferCost = (v: Record<string, number>) => {
    const sites = v.sites ?? 0
    const minutes = v.minutesPerSiteDay ?? 0
    const hourly = v.hourlyYen ?? 0
    const days = v.workDays ?? workDays
    return sites * (minutes / 60) * hourly * days
  }

  const computeAnnualLoss = (v: Record<string, number>) => {
    const base = transferCost(v)
    const reworkPct = (v.reworkRate ?? 0) / 100
    return base + base * reworkPct * reworkFactor
  }

  return {
    sliders: [
      {
        key: 'sites',
        label: '同時進行している現場数',
        unit: '現場',
        min: 1,
        max: 50,
        step: 1,
        defaultValue: defaults.sites,
        note: 'まず1部署から。全社ならその分大きく',
      },
      {
        key: 'minutesPerSiteDay',
        label: '1現場1日あたりの整理・転記時間',
        unit: '分',
        min: 10,
        max: 120,
        step: 5,
        defaultValue: defaults.minutesPerSiteDay,
        note: '名前つけ・貼り付け・打ち直しの合計',
      },
      {
        key: 'hourlyYen',
        label: '人件費の時間単価（会社負担）',
        unit: '円',
        min: 2000,
        max: 8000,
        step: 100,
        defaultValue: defaults.hourlyYen,
        note: '建設業の実勢に合わせて調整',
      },
      {
        key: 'reworkRate',
        label: '記録不足による差戻し率',
        unit: '%',
        min: 0,
        max: 50,
        step: 1,
        defaultValue: defaults.reworkRatePercent,
        note: '控えめに見たい場合は下げてください',
      },
    ],
    computeAnnualLoss,
    computeRecoverable: (v) => Math.round(computeAnnualLoss(v) * recoverRate),
    estimateDevCost: () => ({
      low: defaults.devLow ?? 2_000_000,
      high: defaults.devHigh ?? 6_000_000,
    }),
    outputs: {
      lossLabel: '「整理・転記・催促」に消えている人件費（年間）',
      recoverableLabel: '導入で取り戻せる金額（年間・試算）',
      paybackLabel: '回収期間の目安',
      leadTimeLabel:
        defaults.leadTimeLabel ?? '提出までのリードタイム（イメージ）',
      leadTimeValue: defaults.leadTimeValue ?? '2〜3日 → 即日',
    },
    cta: externalCta ?? {
      label: 'この数字を、無償トライアルで実測する',
      href: '#final-cta',
      variant: 'primary',
    },
    disclaimer:
      'ご入力にもとづく試算例です（効果の保証ではありません）。実際の効果は現場数・データのばらつきにより異なります。',
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

export function workflowSiteBasisNote(d: WorkflowSiteRoiDefaults): string {
  const days = d.workDays ?? 240
  return `計算根拠（初期値）: 1現場1日あたり整理・転記${d.minutesPerSiteDay}分 × ${d.sites}現場 × ${days}営業日 × 時間単価${d.hourlyYen.toLocaleString('ja-JP')}円（差戻し率${d.reworkRatePercent}%を加算）`
}
