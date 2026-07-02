'use client'

import { useCallback, useMemo, useState } from 'react'
import {
  arcPath,
  gaugeColor,
  generatePoints,
  getVerdict,
  xiCorrelation,
  type DataPoint,
} from '@/lib/research/xi-correlation'

const SC = { w: 460, h: 340, pad: 34 }

function ScatterPlot({ pts }: { pts: DataPoint[] }) {
  const x0 = SC.pad
  const x1 = SC.w - 14
  const y0 = SC.h - SC.pad
  const y1 = 14
  const X = (v: number) => x0 + v * (x1 - x0)
  const Y = (v: number) => y0 - v * (y0 - y1)

  return (
    <svg viewBox={`0 0 ${SC.w} ${SC.h}`} className="w-full h-auto" role="img" aria-label="観測シグナルと実インパクトの散布図">
      <line x1={x0} y1={y0} x2={x1} y2={y0} stroke="#343B4A" strokeWidth={1} />
      <line x1={x0} y1={y0} x2={x0} y2={y1} stroke="#343B4A" strokeWidth={1} />
      {[1, 2, 3, 4].map((g) => (
        <g key={g}>
          <line x1={x0} y1={Y(g / 4)} x2={x1} y2={Y(g / 4)} stroke="#1C2029" strokeWidth={1} />
          <line x1={X(g / 4)} y1={y0} x2={X(g / 4)} y2={y1} stroke="#1C2029" strokeWidth={1} />
        </g>
      ))}
      <line
        x1={X(0)}
        y1={Y(0)}
        x2={X(1)}
        y2={Y(1)}
        stroke="#565C6B"
        strokeWidth={1}
        strokeDasharray="3 5"
        opacity={0.6}
      />
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={X(p.x)}
          cy={Y(p.y)}
          r={p.gaming ? 4.5 : 3.6}
          fill={p.gaming ? 'rgba(217,112,90,.9)' : 'rgba(94,200,216,.85)'}
          stroke={p.gaming ? '#D9705A' : '#5EC8D8'}
          strokeWidth={p.gaming ? 1 : 0.5}
          fillOpacity={p.gaming ? 0.85 : 0.7}
        />
      ))}
    </svg>
  )
}

function Gauge({ xi }: { xi: number }) {
  const cx = 115
  const cy = 125
  const rad = 92
  const start = Math.PI
  const end = 2 * Math.PI
  const t = Math.max(0, Math.min(1, xi))
  const ang = start + (end - start) * t
  const col = gaugeColor(t)
  const nx = cx + (rad - 18) * Math.cos(ang)
  const ny = cy + (rad - 18) * Math.sin(ang)

  return (
    <svg viewBox="0 0 230 140" className="w-full max-w-[230px] mx-auto" aria-hidden="true">
      <path
        d={arcPath(cx, cy, rad, start, end)}
        fill="none"
        stroke="#262B36"
        strokeWidth={10}
        strokeLinecap="round"
      />
      {t > 0.001 && (
        <path
          d={arcPath(cx, cy, rad, start, ang)}
          fill="none"
          stroke={col}
          strokeWidth={10}
          strokeLinecap="round"
        />
      )}
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={col} strokeWidth={2.5} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={5} fill={col} />
      {[
        ['0', start],
        ['0.5', start + (end - start) * 0.5],
        ['1', end],
      ].map(([lab, a]) => {
        const angle = a as number
        const lx = cx + (rad + 16) * Math.cos(angle)
        const ly = cy + (rad + 16) * Math.sin(angle)
        return (
          <text
            key={lab}
            x={lx}
            y={ly + 4}
            fill="#565C6B"
            fontSize={10}
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
          >
            {lab}
          </text>
        )
      })}
    </svg>
  )
}

export function XiInstrumentDemo() {
  const [gamingPct, setGamingPct] = useState(4)
  const [noisePct, setNoisePct] = useState(5)
  const [pts, setPts] = useState<DataPoint[]>(() => generatePoints(0.04, 0.05))

  const regen = useCallback((gaming: number, noise: number) => {
    setPts(generatePoints(gaming / 100, noise / 100))
  }, [])

  const xi = useMemo(() => {
    const val = xiCorrelation(
      pts.map((p) => p.x),
      pts.map((p) => p.y),
    )
    return Math.max(0, val)
  }, [pts])

  const verdict = getVerdict(xi)

  return (
    <div className="space-y-10">
      <section>
        <p className="text-gray-300 leading-relaxed mb-6">
          Chatterjee の ξ は「Y が X の関数か」を検出します。X＝AIが観測した貢献シグナル、Y＝実際に実現した中長期インパクト。ゲーミング混入率と観測ノイズを変えて、測定系の健全性を診断してください。
        </p>

        <div className="grid lg:grid-cols-2 gap-8 p-6 rounded-xl border border-gray-800 bg-gray-900/40">
          <div>
            <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-400 mb-2 font-mono">
              <span>Y ↑ 実インパクト</span>
              <span>X → 観測シグナル</span>
            </div>
            <ScatterPlot pts={pts} />
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-300">
              <span className="flex items-center gap-2">
                <i className="w-2 h-2 rounded-full bg-cyan-400" />
                誠実な貢献 — Y は X に従属
              </span>
              <span className="flex items-center gap-2">
                <i className="w-2 h-2 rounded-full bg-orange-400" />
                ゲーミング — 高い X・低い Y で乖離
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Gauge xi={xi} />
            <p className="text-3xl font-medium text-gray-300 mt-2">
              <span className="italic">ξ</span>&nbsp;
              <span className="text-white">{xi.toFixed(2)}</span>
            </p>
            <p
              className="mt-3 px-4 py-2 rounded border text-sm font-medium"
              style={{ color: verdict.color, borderColor: verdict.borderColor }}
            >
              {verdict.label}
            </p>
            <p className="mt-3 text-xs text-gray-400 text-center max-w-[24ch] leading-relaxed">
              {verdict.note}
            </p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-6 p-6 rounded-xl border border-gray-800 bg-gray-900/30">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-mono">
              ゲーミング混入率 <b className="text-gray-200">{gamingPct}%</b>
            </label>
            <input
              type="range"
              min={0}
              max={70}
              value={gamingPct}
              onChange={(e) => {
                const v = +e.target.value
                setGamingPct(v)
                regen(v, noisePct)
              }}
              className="w-full accent-cyan-400"
              aria-label="ゲーミング混入率"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-mono">
              観測ノイズ（オラクル品質）{' '}
              <b className="text-gray-200">{(noisePct / 100).toFixed(2)}</b>
            </label>
            <input
              type="range"
              min={0}
              max={30}
              value={noisePct}
              onChange={(e) => {
                const v = +e.target.value
                setNoisePct(v)
                regen(gamingPct, v)
              }}
              className="w-full accent-amber-400"
              aria-label="観測ノイズ"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="button"
              onClick={() => regen(gamingPct, noisePct)}
              className="px-4 py-2 text-sm border border-gray-700 rounded text-gray-200 hover:border-gray-500 transition-colors"
            >
              再サンプル ↻
            </button>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
        <p className="text-gray-200 leading-relaxed">
          <strong className="text-white">この計器が示すこと。</strong> ξ は個々のメンバーを名指ししません。
          高X・低Y の点が混じるほど集計 ξ が落ち、DAO は「測定系が信用できない」という
          <strong className="text-white">システムレベルの警報</strong>を受け取ります。誰が不正かは開示せず、
          <strong className="text-white">基準の再設計や監査を発動する引き金</strong>としてだけ機能します。
        </p>
      </section>
    </div>
  )
}
