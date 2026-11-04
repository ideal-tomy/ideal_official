'use client'

import { useMemo, useState, type ChangeEvent, type ReactNode } from 'react'

/** AXEON LP の初期値。スライダーを動かすと、時間・金額・回収月がすべて追従する */
const INITIAL = {
  people: 18,
  cases: 200,
  minutes: 13.5,
  rate: 50,
  wage: 3200,
  initial: 10_000_000,
  monthly: 250_000,
}

const RATES = [30, 50, 70] as const

type CalcInput = typeof INITIAL

const format = (value: number, digits = 0) =>
  new Intl.NumberFormat('ja-JP', { maximumFractionDigits: digits }).format(value)

function calculate(input: CalcInput) {
  const hoursBefore = (input.people * input.cases * input.minutes) / 60
  const hoursSaved = (hoursBefore * input.rate) / 100
  const hoursAfter = hoursBefore - hoursSaved
  const monthlyBenefit = hoursSaved * input.wage
  const monthlyNet = monthlyBenefit - input.monthly
  const payback =
    input.initial === 0 ? 0 : monthlyNet > 0 ? input.initial / monthlyNet : Number.POSITIVE_INFINITY
  return { hoursBefore, hoursAfter, hoursSaved, monthlyBenefit, monthlyNet, payback }
}

/** 効果の累計が費用の累計を追い越したあとを、緑で塗る */
function PaybackChart({ input, payback, monthlyBenefit }: {
  input: CalcInput
  payback: number
  monthlyBenefit: number
}) {
  const width = 720
  const height = 300
  const padL = 58
  const padR = 24
  const padT = 36
  const padB = 40
  const plotW = width - padL - padR
  const plotH = height - padT - padB
  const months = Math.min(
    60,
    Number.isFinite(payback) ? Math.max(12, Math.ceil(payback * 1.6)) : 24,
  )
  const lastCost = input.initial + input.monthly * months
  const lastBenefit = monthlyBenefit * months
  const yMax = Math.max(lastCost, lastBenefit, 1) * 1.08
  const x = (month: number) => padL + (month / months) * plotW
  const y = (value: number) => padT + plotH - (value / yMax) * plotH

  const points = Array.from({ length: months + 1 }, (_, month) => month)
  const costLine = points
    .map((month) => `${x(month)},${y(input.initial + input.monthly * month)}`)
    .join(' ')
  const benefitLine = points
    .map((month) => `${x(month)},${y(monthlyBenefit * month)}`)
    .join(' ')

  const showMarker = Number.isFinite(payback) && payback <= months
  const px = showMarker ? x(payback) : 0
  const py = showMarker ? y(input.initial + input.monthly * payback) : 0
  const label = !showMarker
    ? ''
    : payback < 1
      ? '1ヶ月未満で回収'
      : `${format(Math.round(payback * 10) / 10, 1)}ヶ月で回収`
  const labelWidth = Math.max(118, label.length * 12)
  const labelX = Math.min(Math.max(px - labelWidth / 2, padL), padL + plotW - labelWidth)

  const yTicks = Array.from({ length: 5 }, (_, index) => (yMax / 4) * index)
  const xStep = Math.ceil(months / 5)
  const xTicks = Array.from({ length: Math.floor(months / xStep) + 1 }, (_, index) => index * xStep)
  if (xTicks[xTicks.length - 1] !== months) xTicks.push(months)

  return (
    <svg
      className="svc-calc-chart"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={
        showMarker
          ? `効果の累計と費用の累計の比較。${label}`
          : '効果の累計と費用の累計の比較。この条件では回収に至りません'
      }
    >
      {showMarker ? (
        <rect x={px} y={padT} width={padL + plotW - px} height={plotH} fill="#1f9d5b" opacity="0.12" />
      ) : null}
      {yTicks.map((value) => (
        <g key={value}>
          <line x1={padL} y1={y(value)} x2={padL + plotW} y2={y(value)} stroke="#e5e7eb" />
          <text x={padL - 8} y={y(value) + 4} textAnchor="end" fontSize={11} fill="#6b7280">
            {format(value / 10000, 0)}万
          </text>
        </g>
      ))}
      {xTicks.map((month) => (
        <text key={month} x={x(month)} y={padT + plotH + 22} textAnchor="middle" fontSize={11} fill="#6b7280">
          {month}ヶ月
        </text>
      ))}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#e5e7eb" strokeWidth={1.5} />
      <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="#e5e7eb" strokeWidth={1.5} />
      <polyline points={costLine} fill="none" stroke="#d64550" strokeWidth={3} strokeLinejoin="round" />
      <polyline points={benefitLine} fill="none" stroke="#2b6fe0" strokeWidth={3.5} strokeLinejoin="round" />
      {showMarker ? (
        <>
          <line x1={px} y1={padT} x2={px} y2={padT + plotH} stroke="#1f9d5b" strokeWidth={1.5} strokeDasharray="4 4" />
          <circle cx={px} cy={py} r={6.5} fill="#fff" stroke="#1f9d5b" strokeWidth={3} />
          <g transform={`translate(${labelX},${padT - 28})`}>
            <rect width={labelWidth} height={24} rx={6} fill="#1f9d5b" />
            <text x={labelWidth / 2} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fill="#fff">
              {label}
            </text>
          </g>
        </>
      ) : null}
    </svg>
  )
}

/** サービスページ内の時間と費用の試算。埋め込みの見積ウィザードは使わない */
export function ServicesLpRoiCalc() {
  const [input, setInput] = useState<CalcInput>(INITIAL)
  const result = useMemo(() => calculate(input), [input])

  const set = (key: keyof CalcInput) => (event: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [key]: Number(event.target.value) }))
  }

  const yearCost = input.initial + input.monthly * 12
  const paybackLabel = !Number.isFinite(result.payback)
    ? '回収の見込みなし'
    : result.payback === 0
      ? '初期費用なし'
      : `${format(Math.ceil(result.payback * 10) / 10, 1)}か月`

  let message =
    result.hoursSaved === 0
      ? 'この条件では、作業時間の削減効果はありません。'
      : `毎月${format(result.hoursSaved, 1)}時間減る計算です。`
  if (result.monthlyNet <= 0) message += ' この条件では毎月の換算額が利用費を上回りません。'

  return (
    <div className="svc-calc">
      <div className="svc-calc-bar">
        <strong>確認や記録の作業を想定した試算</strong>
        <span>条件はスライダーで調整できます。</span>
      </div>
      <div className="svc-calc-grid">
        <form
          className="svc-calc-inputs"
          onSubmit={(event) => event.preventDefault()}
        >
          <Field label="この作業をする人数" value={`${format(input.people)}人`}>
            <input type="range" min={1} max={100} step={1} value={input.people} onChange={set('people')} />
          </Field>
          <Field label="1人が1か月に行う件数" value={`${format(input.cases)}件`}>
            <input type="range" min={0} max={1000} step={10} value={input.cases} onChange={set('cases')} />
          </Field>
          <Field label="1件にかかる時間" value={`${format(input.minutes, 1)}分`}>
            <input type="range" min={0} max={60} step={0.5} value={input.minutes} onChange={set('minutes')} />
          </Field>
          <div className="svc-calc-field">
            <div className="svc-calc-label">
              <span>作業時間が減る割合</span>
              <output>{input.rate}%</output>
            </div>
            <div className="svc-calc-rates" role="group" aria-label="作業時間の短縮率">
              {RATES.map((rate) => (
                <button
                  key={rate}
                  type="button"
                  aria-pressed={input.rate === rate}
                  onClick={() => setInput((prev) => ({ ...prev, rate }))}
                >
                  {rate}%で試す
                </button>
              ))}
            </div>
            <p className="svc-calc-hint">確認・修正に残る時間も含めて考えます。</p>
          </div>
          <Field label="1時間あたりの人件費" value={`${format(input.wage)}円／時`}>
            <input type="range" min={0} max={10000} step={100} value={input.wage} onChange={set('wage')} />
          </Field>
          <Field label="導入時にかかる費用" value={`${format(input.initial)}円`}>
            <input type="range" min={0} max={30000000} step={100000} value={input.initial} onChange={set('initial')} />
          </Field>
          <Field label="毎月かかる費用" value={`${format(input.monthly)}円／月`}>
            <input type="range" min={0} max={1500000} step={10000} value={input.monthly} onChange={set('monthly')} />
          </Field>
          <button type="button" className="svc-calc-reset" onClick={() => setInput(INITIAL)}>
            初期値に戻す
          </button>
        </form>

        <div className="svc-calc-results">
          <h3>まず、作業時間の変化を見る。</h3>
          <div className="svc-calc-hours">
            <div>
              <small>いまの作業時間</small>
              <b>{format(result.hoursBefore, 1)}</b>時間／月
            </div>
            <span aria-hidden>→</span>
            <div className="svc-calc-after">
              <small>導入後の想定</small>
              <b>{format(result.hoursAfter, 1)}</b>時間／月
            </div>
            <div className="svc-calc-save">
              <small>減る時間</small>
              <strong>{format(result.hoursSaved, 1)}</strong>時間／月
            </div>
          </div>
          <div className="svc-calc-metrics">
            <div>
              <span>減った時間の金額</span>
              <strong>{format(result.monthlyBenefit * 12 / 10000, 1)}<em> 万円／年</em></strong>
            </div>
            <div>
              <span>初年度にかかる費用</span>
              <strong>{format(yearCost / 10000, 1)}<em> 万円</em></strong>
            </div>
            <div>
              <span>回収までの目安</span>
              <strong>{paybackLabel}</strong>
            </div>
          </div>
          <h3>効果の換算額と、かかる費用の比較</h3>
          <div className="svc-calc-legend">
            <span>減った時間の金額〔累計〕</span>
            <span>導入・利用費〔累計〕</span>
          </div>
          <PaybackChart input={input} payback={result.payback} monthlyBenefit={result.monthlyBenefit} />
          <p className="svc-calc-msg" aria-live="polite">{message}</p>
          <p className="svc-calc-note">
            時間が減っても、給与などの支出が同じ額だけ減るとは限りません。初期値は見積もりではなく、実際の効果を保証するものではありません。
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  children,
}: {
  label: string
  value: string
  children: ReactNode
}) {
  return (
    <div className="svc-calc-field">
      <div className="svc-calc-label">
        <span>{label}</span>
        <output>{value}</output>
      </div>
      {children}
    </div>
  )
}
