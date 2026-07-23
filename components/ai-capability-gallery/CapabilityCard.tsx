import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

interface CapabilityCardProps {
  capability: Capability
  /** マーキー用の縮小カード */
  size?: 'default' | 'compact'
}

/**
 * 機能／パターン選択カード（画像なし）
 * 目的＝読む（CaseCard）と対になる「選んで体験」の視覚言語
 */
export function CapabilityCard({
  capability,
  size = 'default',
}: CapabilityCardProps) {
  const isReady = capability.status === 'ready'
  const compact = size === 'compact'

  const content = (
    <>
      <div
        className={
          compact
            ? 'flex flex-1 flex-col p-2.5'
            : 'flex flex-1 flex-col p-4 sm:p-5'
        }
      >
        <div
          className={
            compact
              ? 'mb-1.5 flex items-center justify-between gap-1'
              : 'mb-3 flex items-center justify-between gap-2'
          }
        >
          <span
            className={
              compact
                ? 'font-mono text-[9px] font-bold tabular-nums text-brand/70'
                : 'font-mono text-xs font-bold tabular-nums text-brand/80'
            }
          >
            {String(capability.number).padStart(2, '0')}
          </span>
          {isReady ? (
            <span
              className={
                compact
                  ? 'rounded-full bg-brand/15 px-1.5 py-px text-[8px] font-bold text-brand'
                  : 'rounded-full bg-brand/15 px-2.5 py-0.5 text-[11px] font-bold text-brand'
              }
            >
              体験
            </span>
          ) : (
            <span
              className={
                compact
                  ? 'rounded-full border border-[var(--site-border)] px-1.5 py-px text-[8px] text-[var(--site-fg-muted)]'
                  : 'rounded-full border border-[var(--site-border)] px-2 py-0.5 text-[10px] text-[var(--site-fg-muted)]'
              }
            >
              準備中
            </span>
          )}
        </div>

        <p
          className={
            compact
              ? 'mb-1 text-[10px] font-bold tracking-wide text-brand'
              : 'mb-1.5 text-sm font-bold tracking-wide text-brand'
          }
        >
          {capability.subtitle}
        </p>

        <h3
          className={
            compact
              ? 'mb-1.5 line-clamp-2 text-[11px] font-semibold leading-snug text-[var(--site-fg)]'
              : 'mb-2 text-base font-semibold leading-snug text-[var(--site-fg)] md:text-lg'
          }
        >
          {capability.title}
        </h3>

        {!compact && (
          <p className="mb-3 text-xs leading-relaxed text-[var(--site-fg-muted)]">
            {capability.before}
            <span className="mx-1.5 font-bold text-brand">→</span>
            {capability.after}
          </p>
        )}

        <div
          className={
            compact ? 'mb-2 flex flex-wrap gap-1' : 'mb-4 flex flex-wrap gap-1.5'
          }
        >
          {(compact ? capability.tags.slice(0, 2) : capability.tags).map(
            (tag) => (
              <span
                key={tag}
                className={
                  compact
                    ? 'rounded-full border border-[var(--site-border)] bg-[var(--site-bg)] px-1.5 py-px text-[8px] text-[var(--site-fg-muted)]'
                    : 'rounded-full border border-[var(--site-border)] bg-[var(--site-bg)] px-2 py-0.5 text-[11px] text-[var(--site-fg-muted)]'
                }
              >
                {tag}
              </span>
            ),
          )}
        </div>

        <div className="mt-auto">
          {isReady ? (
            <span
              className={
                compact
                  ? 'inline-flex items-center text-[10px] font-medium text-brand transition-colors group-hover:text-brand-hover'
                  : 'inline-flex items-center text-sm font-medium text-brand transition-colors group-hover:text-brand-hover'
              }
            >
              体験する →
            </span>
          ) : (
            <span
              className={
                compact
                  ? 'inline-flex items-center text-[10px] text-[var(--site-fg-muted)]'
                  : 'inline-flex items-center text-sm text-[var(--site-fg-muted)]'
              }
            >
              近日公開
            </span>
          )}
        </div>
      </div>
    </>
  )

  const shellClass = compact
    ? 'group flex h-full min-w-[9.5rem] flex-col overflow-hidden rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)] transition-colors hover:border-brand/40'
    : 'group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] transition-colors hover:border-brand/40'

  if (isReady) {
    return (
      <Link href={capability.href} className={shellClass}>
        {content}
      </Link>
    )
  }

  return <div className={`${shellClass} opacity-75`}>{content}</div>
}
