'use client'

import { useEffect, useRef } from 'react'
import { loopSteps } from '@/data/research/loop-steps'
import { arcPath } from '@/lib/research/xi-correlation'

const LABELS = ['観測', '記録', '測定', '執行', 'FB']
const COLS = ['#5EC8D8', '#8A90A0', '#E0A24E', '#8A90A0', '#5EC8D8']

export function LoopDiagramDemo() {
  const dotRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !dotRef.current) return

    const cx = 200
    const cy = 200
    const R = 140
    let ang = -Math.PI / 2
    let frame: number

    const anim = () => {
      ang += 0.008
      const x = cx + R * Math.cos(ang)
      const y = cy + R * Math.sin(ang)
      dotRef.current?.setAttribute('cx', String(x))
      dotRef.current?.setAttribute('cy', String(y))
      frame = requestAnimationFrame(anim)
    }
    frame = requestAnimationFrame(anim)
    return () => cancelAnimationFrame(frame)
  }, [])

  const cx = 200
  const cy = 200
  const R = 140
  const n = 5
  const pts = Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + i * ((2 * Math.PI) / n)
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), a }
  })

  return (
    <div className="space-y-10">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto" role="img" aria-label="貢献測定の循環図">
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="#262B36" strokeWidth={1} />
          {pts.map((pt, i) => {
            const a0 = pt.a + 0.34
            const a1 = pts[(i + 1) % n].a - 0.34
            const am = (a0 + a1) / 2
            const ax = cx + R * Math.cos(am)
            const ay = cy + R * Math.sin(am)
            const tang = am + Math.PI / 2
            const arrow = `M ${ax + 7 * Math.cos(tang)} ${ay + 7 * Math.sin(tang)} L ${ax - 4 * Math.cos(tang) + 5 * Math.cos(am)} ${ay - 4 * Math.sin(tang) + 5 * Math.sin(am)} L ${ax - 4 * Math.cos(tang) - 5 * Math.cos(am)} ${ay - 4 * Math.sin(tang) - 5 * Math.sin(am)} Z`
            return (
              <g key={i}>
                <path d={arcPath(cx, cy, R, a0, a1)} fill="none" stroke="#343B4A" strokeWidth={1.5} />
                <path d={arrow} fill="#343B4A" />
              </g>
            )
          })}
          {pts.map((pt, i) => (
            <g key={`node-${i}`}>
              <circle cx={pt.x} cy={pt.y} r={30} fill="#171A22" stroke={COLS[i]} strokeWidth={1.5} />
              <text x={pt.x} y={pt.y - 4} fill="#565C6B" fontSize={9} textAnchor="middle" fontFamily="ui-monospace, monospace">
                0{i + 1}
              </text>
              <text x={pt.x} y={pt.y + 11} fill="#E6E8EE" fontSize={12} textAnchor="middle" fontWeight={500}>
                {LABELS[i]}
              </text>
            </g>
          ))}
          <text x={cx} y={cy - 6} fill="#565C6B" fontSize={10} textAnchor="middle" fontFamily="ui-monospace, monospace" letterSpacing={2}>
            PERPETUAL
          </text>
          <text x={cx} y={cy + 12} fill="#8A90A0" fontSize={12} textAnchor="middle">
            個人に永続
          </text>
          <circle ref={dotRef} r={4.5} fill="#5EC8D8" cx={pts[0].x} cy={pts[0].y} style={{ filter: 'drop-shadow(0 0 6px #5EC8D8)' }} />
        </svg>

        <div className="divide-y divide-gray-800">
          {loopSteps.map((step) => (
            <div key={step.number} className="grid grid-cols-[34px_1fr] gap-4 py-4">
              <span className="text-xs font-mono text-[var(--site-fg-muted)] pt-1">{step.number}</span>
              <div>
                <h3 className="text-base font-medium text-[var(--site-fg)] mb-1">
                  {step.title} — {step.subtitle}
                </h3>
                <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
