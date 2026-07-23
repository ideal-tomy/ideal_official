import Link from 'next/link'

interface LabServiceCalloutProps {
  /** 短い依頼説明の補足 */
  serviceNote: string
}

/**
 * BC / Metaverse など、SERVICES に残しつつ LAB へ深さを誘導する帯
 */
export function LabServiceCallout({ serviceNote }: LabServiceCalloutProps) {
  return (
    <div className="border-b border-brand bg-[var(--site-bg-elevated)]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-[var(--site-fg-muted)] text-center leading-relaxed mb-4">
          {serviceNote}
        </p>
        <p className="text-center text-sm text-[var(--site-fg-muted)]">
          思想・研究・導入の背景解説は{' '}
          <Link
            href="/lab"
            className="text-brand hover:text-brand-hover underline underline-offset-2"
          >
            LAB
          </Link>
          {' '}へ。AI の比較・導入理由などは{' '}
          <Link
            href="/lab/insights"
            className="text-brand hover:text-brand-hover underline underline-offset-2"
          >
            Insights
          </Link>
          にまとめています。
        </p>
      </div>
    </div>
  )
}
