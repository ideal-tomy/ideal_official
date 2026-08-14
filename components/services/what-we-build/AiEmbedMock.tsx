import { MOCK_VIEWBOX, mockFill } from './mock-tokens'
import { MockFrameDesktop } from './MockFrameDesktop'
import { MockSvgShell, MockTableRow } from './MockParts'

export function AiEmbedMock() {
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX}>
      <rect width="320" height="200" fill={mockFill.bg} rx="12" />
      <MockFrameDesktop x={24} y={28} w={272} h={144}>
        <MockTableRow x={36} y={44} w={148} h={12} />
        <MockTableRow x={36} y={62} w={148} h={12} highlighted />
        <MockTableRow x={36} y={80} w={148} h={12} />
        <rect
          x={196}
          y={40}
          width={88}
          height={120}
          rx={8}
          fill={mockFill.accentSoft}
          stroke={mockFill.accent}
          strokeWidth={1}
        />
        <rect
          x={206}
          y={52}
          width={68}
          height={6}
          rx={2}
          fill={mockFill.accent}
          opacity={0.75}
        />
        <rect
          x={206}
          y={66}
          width={58}
          height={4}
          rx={1}
          fill={mockFill.muted}
          opacity={0.35}
        />
        <rect
          x={206}
          y={78}
          width={48}
          height={4}
          rx={1}
          fill={mockFill.muted}
          opacity={0.3}
        />
        <rect
          x={206}
          y={96}
          width={52}
          height={14}
          rx={4}
          fill={mockFill.accent}
          opacity={0.85}
        />
      </MockFrameDesktop>
    </MockSvgShell>
  )
}
