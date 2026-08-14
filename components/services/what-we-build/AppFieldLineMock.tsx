import { MOCK_VIEWBOX_WIDE, mockFill } from './mock-tokens'
import { MockFrameDesktop } from './MockFrameDesktop'
import { MockFramePhone } from './MockFramePhone'
import { MockArrow, MockButton, MockSvgShell, MockTableRow } from './MockParts'

export function AppFieldLineMock() {
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX_WIDE}>
      <rect width="360" height="200" fill={mockFill.bg} rx="12" />

      <MockFramePhone x={28} y={36} w={70} h={128}>
        <rect
          x={36}
          y={52}
          width={54}
          height={12}
          rx={3}
          fill={mockFill.bg}
          stroke={mockFill.border}
          strokeWidth={0.6}
        />
        <rect
          x={36}
          y={70}
          width={54}
          height={12}
          rx={3}
          fill={mockFill.bg}
          stroke={mockFill.border}
          strokeWidth={0.6}
        />
        <MockButton x={42} y={94} w={42} h={12} />
      </MockFramePhone>

      <MockArrow x1={102} y={100} x2={128} />

      <rect
        x={132}
        y={58}
        width={96}
        height={84}
        rx={10}
        fill={mockFill.surface}
        stroke={mockFill.border}
        strokeWidth={1}
      />
      <rect
        x={142}
        y={72}
        width={76}
        height={52}
        rx={8}
        fill={mockFill.accentSoft}
        stroke={mockFill.accent}
        strokeWidth={0.8}
      />
      <rect
        x={150}
        y={84}
        width={48}
        height={5}
        rx={1}
        fill={mockFill.accent}
        opacity={0.75}
      />
      <rect
        x={150}
        y={96}
        width={60}
        height={4}
        rx={1}
        fill={mockFill.muted}
        opacity={0.4}
      />
      <rect
        x={150}
        y={106}
        width={36}
        height={4}
        rx={1}
        fill={mockFill.muted}
        opacity={0.3}
      />

      <MockArrow x1={232} y={100} x2={258} />

      <MockFrameDesktop x={262} y={48} w={74} h={104}>
        <MockTableRow x={270} y={62} w={58} h={14} />
        <MockTableRow x={270} y={82} w={58} h={14} highlighted />
        <MockTableRow x={270} y={102} w={58} h={14} />
      </MockFrameDesktop>
    </MockSvgShell>
  )
}
