import { MOCK_VIEWBOX, mockFill } from './mock-tokens'
import { MockFrameDesktop } from './MockFrameDesktop'
import { MockSvgShell, MockTableRow } from './MockParts'

export function WebBusinessMock() {
  const rows = [0, 1, 2, 3]
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX}>
      <rect width="320" height="200" fill={mockFill.bg} rx="12" />
      <MockFrameDesktop x={24} y={24} w={272} h={152}>
        <rect
          x={24}
          y={24}
          width={48}
          height={152}
          rx={8}
          fill={mockFill.accentSoft}
        />
        <rect x={64} y={24} width={8} height={152} fill={mockFill.accentSoft} />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={32}
            y={40 + i * 22}
            width={28}
            height={6}
            rx={2}
            fill={i === 0 ? mockFill.accent : mockFill.muted}
            opacity={i === 0 ? 0.9 : 0.4}
          />
        ))}
        <rect
          x={84}
          y={36}
          width={118}
          height={14}
          rx={4}
          fill={mockFill.bg}
          stroke={mockFill.border}
          strokeWidth={0.6}
        />
        {rows.map((i) => (
          <MockTableRow
            key={i}
            x={84}
            y={58 + i * 18}
            w={118}
            h={14}
            highlighted={i === 1}
          />
        ))}
        <rect
          x={210}
          y={52}
          width={74}
          height={108}
          rx={6}
          fill={mockFill.surface}
          stroke={mockFill.accent}
          strokeWidth={1}
        />
        <rect
          x={218}
          y={62}
          width={58}
          height={8}
          rx={2}
          fill={mockFill.accent}
          opacity={0.7}
        />
        <rect
          x={218}
          y={78}
          width={58}
          height={6}
          rx={1}
          fill={mockFill.muted}
          opacity={0.35}
        />
        <rect
          x={218}
          y={90}
          width={42}
          height={6}
          rx={1}
          fill={mockFill.muted}
          opacity={0.3}
        />
      </MockFrameDesktop>
    </MockSvgShell>
  )
}
