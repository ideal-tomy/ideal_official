import type { CSSProperties, ReactNode } from 'react'

/** 出現の遅れ（--d）とハイライトの遅れ（--d2）。値は globals.css の .svc-* が使う */
export function delay(d: number, d2?: number): CSSProperties {
  return {
    '--d': `${d}s`,
    ...(d2 === undefined ? {} : { '--d2': `${d2}s` }),
  } as CSSProperties
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="svc-eyebrow">{children}</p>
}

export function LpHeading({
  lines,
  as: Tag = 'h2',
  reveal = true,
}: {
  lines: readonly string[]
  as?: 'h1' | 'h2' | 'h3'
  reveal?: boolean
}) {
  return (
    <Tag className={`svc-h2${reveal ? ' svc-rv' : ''}`}>
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </Tag>
  )
}

export function Ribbon({
  items,
  reverse = false,
}: {
  items: readonly string[]
  reverse?: boolean
}) {
  return (
    <div className={`svc-ribbon${reverse ? ' svc-ribbon--rev' : ''}`} aria-hidden>
      <div className="svc-track">
        {[0, 1].map((copy) =>
          items.map((item) => (
            <span key={`${copy}-${item}`} className="svc-ri">
              {item}
            </span>
          )),
        )}
      </div>
    </div>
  )
}

export function BrandRibbon({
  lead,
  steps,
}: {
  lead: string
  steps: readonly string[]
}) {
  return (
    <div className="svc-ribbon svc-ribbon--brand" role="img" aria-label={`${lead}${steps.join('、')}。`}>
      <div className="svc-track" aria-hidden>
        {[0, 1].map((copy) => (
          <span key={copy} className="svc-copy">
            <b>{lead}</b>
            {steps.map((step) => (
              <i key={step}>{step}</i>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Win({
  bar,
  label,
  children,
  className = '',
}: {
  bar: string
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`svc-win svc-obs ${className}`} role="img" aria-label={label}>
      <div className="svc-win__bar">
        <span>{bar}</span>
        <small>画面の例</small>
      </div>
      <div className="svc-win__body">{children}</div>
    </div>
  )
}

export function DoneMark() {
  return (
    <svg viewBox="0 0 22 22" aria-hidden>
      <circle cx="11" cy="11" r="10" fill="#2b6fe0" />
      <path
        d="M6 11.5l3.2 3L16 8"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
