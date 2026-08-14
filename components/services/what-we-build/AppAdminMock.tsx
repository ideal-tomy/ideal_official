import { MOCK_VIEWBOX, mockFill } from './mock-tokens'
import { MockFrameDesktop } from './MockFrameDesktop'
import { MockButton, MockKpiChip, MockSvgShell, MockTableRow } from './MockParts'

export function AppAdminMock() {
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX}>
      <rect width="320" height="200" fill={mockFill.bg} rx="12" />
      <MockFrameDesktop x={28} y={20} w={264} h={150}>
        <MockKpiChip x={40} y={32} />
        <MockKpiChip x={100} y={32} />
        <MockKpiChip x={160} y={32} />
        <MockButton x={232} y={36} w={44} h={14} />
        <rect
          x={40}
          y={62}
          width={236}
          height={10}
          rx={3}
          fill={mockFill.bg}
          stroke={mockFill.border}
          strokeWidth={0.5}
        />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle
              cx={48}
              cy={86 + i * 18}
              r={3.5}
              fill={i === 0 ? mockFill.accent : mockFill.surface}
              stroke={mockFill.accent}
              strokeWidth={0.8}
            />
            <MockTableRow x={58} y={80 + i * 18} w={206} h={12} />
          </g>
        ))}
      </MockFrameDesktop>
      <g opacity={0.35}>
        <rect
          x={36}
          y={176}
          width={18}
          height={14}
          rx={2}
          fill={mockFill.muted}
        />
        <rect
          x={58}
          y={176}
          width={14}
          height={14}
          rx={2}
          fill={mockFill.muted}
        />
        <rect
          x={76}
          y={178}
          width={20}
          height={10}
          rx={2}
          fill={mockFill.muted}
        />
      </g>
    </MockSvgShell>
  )
}
