import { MOCK_VIEWBOX, mockFill } from './mock-tokens'
import { MockFrameBrowser } from './MockFrameBrowser'
import { MockSvgShell } from './MockParts'

export function AiProductMock() {
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX}>
      <rect width="320" height="200" fill={mockFill.bg} rx="12" />
      <MockFrameBrowser x={40} y={24} w={240} h={152}>
        <rect
          x={52}
          y={48}
          width={216}
          height={56}
          rx={4}
          fill={mockFill.bg}
          stroke={mockFill.border}
          strokeWidth={0.6}
        />
        <rect
          x={60}
          y={56}
          width={120}
          height={5}
          rx={1}
          fill={mockFill.muted}
          opacity={0.35}
        />
        <rect
          x={60}
          y={68}
          width={88}
          height={4}
          rx={1}
          fill={mockFill.muted}
          opacity={0.25}
        />
        <rect
          x={52}
          y={112}
          width={216}
          height={52}
          rx={8}
          fill={mockFill.accentSoft}
          stroke={mockFill.accent}
          strokeWidth={0.8}
        />
        <rect
          x={64}
          y={124}
          width={96}
          height={5}
          rx={1}
          fill={mockFill.accent}
          opacity={0.75}
        />
        <rect
          x={64}
          y={136}
          width={140}
          height={4}
          rx={1}
          fill={mockFill.muted}
          opacity={0.35}
        />
        <rect
          x={64}
          y={148}
          width={56}
          height={10}
          rx={4}
          fill={mockFill.accent}
          opacity={0.9}
        />
      </MockFrameBrowser>
    </MockSvgShell>
  )
}
