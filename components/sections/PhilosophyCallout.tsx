import Link from 'next/link'
import { colors, typography } from '../../lib/design-tokens'

export function PhilosophyCallout() {
  return (
    <div className="border-b border-brand bg-[var(--site-bg-elevated)]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className={`${typography.body} ${colors.text.muted}`}>
          DAOの思想・研究は{' '}
          <Link
            href="/lab"
            className="text-brand hover:text-brand-hover underline underline-offset-2"
          >
            LAB
          </Link>
          {' '}（
          <Link
            href="/philosophy"
            className="text-brand hover:text-brand-hover underline underline-offset-2"
          >
            Philosophy
          </Link>
          ・
          <Link
            href="/research"
            className="text-brand hover:text-brand-hover underline underline-offset-2"
          >
            Research
          </Link>
          ）へ。本ページはトークン設計・スマートコントラクト実装・組織ルールの実務領域です。
        </p>
      </div>
    </div>
  )
}
