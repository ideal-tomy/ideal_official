'use client'

/**
 * コンシェルジュ・ロボット SVG（FAB / Footer 共用）
 */

interface ConciergeRobotProps {
  talking?: boolean
  className?: string
  size?: number
}

export function ConciergeRobot({
  talking = false,
  className = '',
  size = 104,
}: ConciergeRobotProps) {
  return (
    <div className={`ideal-bob${talking ? ' ideal-talking' : ''} ${className}`}>
      <svg
        viewBox="0 0 100 104"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden
      >
        <ellipse cx="50" cy="96" rx="30" ry="12" fill="#2a2a2a" />
        <rect x="21" y="26" width="58" height="54" rx="21" fill="#f0c020" />
        <path
          d="M24 44 Q24 20 50 20 Q76 20 76 44"
          fill="none"
          stroke="#1c1c1c"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect x="14" y="40" width="12" height="20" rx="6" fill="#1c1c1c" />
        <rect x="74" y="40" width="12" height="20" rx="6" fill="#1c1c1c" />
        <path
          d="M20 58 Q22 74 40 74"
          fill="none"
          stroke="#1c1c1c"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="42" cy="74" r="4" fill="#ff521c" />
        <ellipse cx="34" cy="54" rx="7" ry="7" fill="#ff9a6a" opacity="0.55" />
        <ellipse cx="66" cy="54" rx="7" ry="7" fill="#ff9a6a" opacity="0.55" />
        <g className="ideal-eyes">
          <circle cx="40" cy="48" r="5" fill="#1c1c1c" />
          <circle cx="60" cy="48" r="5" fill="#1c1c1c" />
        </g>
        <rect
          className="ideal-mouth"
          x="43"
          y="60"
          width="14"
          height="6"
          rx="3"
          fill="#1c1c1c"
        />
      </svg>
    </div>
  )
}

/** FAB / Footer 共用のモーション CSS（1回だけ注入） */
export const CONCIERGE_ROBOT_CSS = `
.ideal-bob{animation:ideal-bob 3s ease-in-out infinite;transform-origin:center bottom;}
.ideal-eyes{animation:ideal-blink 4.2s infinite;transform-box:fill-box;transform-origin:center;}
.ideal-talking .ideal-mouth{animation:ideal-talk .26s ease-in-out infinite;transform-box:fill-box;transform-origin:center;}
@keyframes ideal-bob{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(-4px) rotate(1.5deg)}}
@keyframes ideal-blink{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.12)}}
@keyframes ideal-talk{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.35)}}
@media (prefers-reduced-motion:reduce){
  .ideal-bob,.ideal-eyes,.ideal-talking .ideal-mouth{animation:none!important;}
}
`
