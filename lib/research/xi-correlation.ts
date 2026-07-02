export type DataPoint = {
  x: number
  y: number
  gaming: boolean
}

function gauss(): number {
  let u = 0
  let v = 0
  while (!u) u = Math.random()
  while (!v) v = Math.random()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))

/** Chatterjee's ξ (2020) — general formula with tie handling */
export function xiCorrelation(xs: number[], ys: number[]): number {
  const n = xs.length
  if (n < 2) return 0
  const idx = xs
    .map((_, i) => i)
    .sort((a, b) => xs[a] - xs[b] || Math.random() - 0.5)
  const yo = idx.map((i) => ys[i])
  const r = yo.map((yi) => yo.reduce((c, yj) => c + (yj <= yi ? 1 : 0), 0))
  const l = yo.map((yi) => yo.reduce((c, yj) => c + (yj >= yi ? 1 : 0), 0))
  let sumAbs = 0
  for (let i = 0; i < n - 1; i++) sumAbs += Math.abs(r[i + 1] - r[i])
  let denom = 0
  for (let i = 0; i < n; i++) denom += l[i] * (n - l[i])
  if (denom === 0) return 0
  return 1 - (n * sumAbs) / (2 * denom)
}

const N = 90

export function generatePoints(gamingRate: number, noise: number): DataPoint[] {
  const pts: DataPoint[] = []
  for (let i = 0; i < N; i++) {
    const gaming = Math.random() < gamingRate
    if (!gaming) {
      const effort = Math.random()
      const x = clamp(effort + gauss() * noise, 0, 1.15)
      const impact = Math.pow(effort, 1.05)
      const y = clamp(impact + gauss() * 0.045, 0, 1.15)
      pts.push({ x, y, gaming: false })
    } else {
      const x = clamp(0.62 + Math.random() * 0.45 + gauss() * noise, 0, 1.2)
      const y = clamp(Math.random() * 0.32, 0, 1.15)
      pts.push({ x, y, gaming: true })
    }
  }
  return pts
}

export function getVerdict(xi: number): {
  label: string
  note: string
  color: string
  borderColor: string
} {
  const shown = Math.max(0, xi)
  if (shown >= 0.6) {
    return {
      label: 'システム健全 — 整合性高',
      note: '観測シグナルが実インパクトを正しく予測できている。',
      color: '#5EC8D8',
      borderColor: 'rgba(94,200,216,.4)',
    }
  }
  if (shown >= 0.35) {
    return {
      label: '乖離の兆候 — 要注意',
      note: '指標と実価値のズレが拡大。基準の見直しを検討。',
      color: '#E0A24E',
      borderColor: 'rgba(224,162,78,.4)',
    }
  }
  return {
    label: '指標乖離を検知 — 執行停止圏',
    note: '測定系が信用できない。自動執行を止め監査を発動。',
    color: '#D9705A',
    borderColor: 'rgba(217,112,90,.4)',
  }
}

export function lerpColor(a: string, b: string, t: number): string {
  const pa = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)]
  const pb = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)]
  const r = Math.round(pa[0] + (pb[0] - pa[0]) * t)
  const g = Math.round(pa[1] + (pb[1] - pa[1]) * t)
  const bl = Math.round(pa[2] + (pb[2] - pa[2]) * t)
  return `rgb(${r},${g},${bl})`
}

export function gaugeColor(xi: number): string {
  const t = clamp(xi, 0, 1)
  if (t < 0.35) return '#D9705A'
  if (t < 0.6) return lerpColor('#D9705A', '#E0A24E', (t - 0.35) / 0.25)
  return lerpColor('#E0A24E', '#5EC8D8', (t - 0.6) / 0.4)
}

export function arcPath(cx: number, cy: number, rad: number, a0: number, a1: number): string {
  const p0 = { x: cx + rad * Math.cos(a0), y: cy + rad * Math.sin(a0) }
  const p1 = { x: cx + rad * Math.cos(a1), y: cy + rad * Math.sin(a1) }
  const large = a1 - a0 > Math.PI ? 1 : 0
  return `M ${p0.x} ${p0.y} A ${rad} ${rad} 0 ${large} 1 ${p1.x} ${p1.y}`
}
