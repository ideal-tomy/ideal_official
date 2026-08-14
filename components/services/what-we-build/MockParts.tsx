import type { ReactNode } from 'react'
import { mockFill } from './mock-tokens'

export function MockButton({
  x,
  y,
  w = 48,
  h = 14,
}: {
  x: number
  y: number
  w?: number
  h?: number
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={4}
      fill={mockFill.accent}
    />
  )
}

export function MockTableRow({
  x,
  y,
  w,
  h = 12,
  highlighted = false,
}: {
  x: number
  y: number
  w: number
  h?: number
  highlighted?: boolean
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={2}
      fill={highlighted ? mockFill.accentSoft : mockFill.bg}
      stroke={mockFill.border}
      strokeWidth={0.6}
    />
  )
}

export function MockKpiChip({
  x,
  y,
  w = 52,
  h = 22,
}: {
  x: number
  y: number
  w?: number
  h?: number
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={mockFill.accentSoft}
        stroke={mockFill.border}
        strokeWidth={0.6}
      />
      <rect
        x={x + 8}
        y={y + 6}
        width={w - 22}
        height={4}
        rx={1}
        fill={mockFill.accent}
        opacity={0.7}
      />
      <rect
        x={x + 8}
        y={y + 13}
        width={w * 0.4}
        height={3}
        rx={1}
        fill={mockFill.muted}
        opacity={0.5}
      />
    </g>
  )
}

export function MockArrow({
  x1,
  y,
  x2,
}: {
  x1: number
  y: number
  x2: number
}) {
  return (
    <g>
      <line
        x1={x1}
        y1={y}
        x2={x2 - 4}
        y2={y}
        stroke={mockFill.muted}
        strokeWidth={1.4}
      />
      <polygon
        points={`${x2},${y} ${x2 - 6},${y - 4} ${x2 - 6},${y + 4}`}
        fill={mockFill.muted}
      />
    </g>
  )
}

export function MockChromeDots({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={2.2} fill={mockFill.muted} opacity={0.45} />
      <circle cx={x + 8} cy={y} r={2.2} fill={mockFill.muted} opacity={0.45} />
      <circle cx={x + 16} cy={y} r={2.2} fill={mockFill.muted} opacity={0.45} />
    </g>
  )
}

export function MockSvgShell({
  viewBox,
  children,
}: {
  viewBox: string
  children: ReactNode
}) {
  return (
    <svg
      viewBox={viewBox}
      className="h-auto max-h-full w-full max-w-[85%]"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}
