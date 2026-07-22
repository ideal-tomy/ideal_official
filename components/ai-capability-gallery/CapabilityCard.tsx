import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

interface CapabilityCardProps {
  capability: Capability
  /** マーキー用の縮小カード（比率はそのまま） */
  size?: 'default' | 'compact'
}

export function CapabilityCard({
  capability,
  size = 'default',
}: CapabilityCardProps) {
  const isReady = capability.status === 'ready'
  const compact = size === 'compact'

  const content = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--site-bg)]">
        <ThemeImage
          src={capability.image}
          alt=""
          fill
          sizes={
            compact
              ? '176px'
              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          }
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span
          className={
            compact
              ? 'absolute left-1.5 top-1.5 hidden rounded bg-black/55 px-1 py-px font-mono text-[9px] text-white md:inline'
              : 'absolute left-3 top-3 hidden rounded bg-black/55 px-2 py-0.5 font-mono text-xs text-white md:inline'
          }
        >
          {String(capability.number).padStart(2, '0')}
        </span>
        {!isReady && (
          <span
            className={
              compact
                ? 'absolute right-1.5 top-1.5 rounded border border-white/30 bg-black/60 px-1 py-px text-[8px] uppercase tracking-wider text-white'
                : 'absolute right-3 top-3 rounded border border-white/30 bg-black/60 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-white'
            }
          >
            準備中
          </span>
        )}
      </div>

      <div
        className={
          compact
            ? 'flex flex-1 flex-col bg-[var(--site-bg-elevated)] p-2.5'
            : 'flex flex-1 flex-col bg-[var(--site-bg-elevated)] p-4'
        }
      >
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
          <>
            <p className="mb-1.5 text-xs font-medium text-brand/90">
              {capability.subtitle}
            </p>
            <p className="mb-3 text-xs leading-relaxed text-[var(--site-fg-muted)]">
              {capability.before} → {capability.after}
            </p>
          </>
        )}

        <div
          className={
            compact ? 'mb-2 flex flex-wrap gap-1' : 'mb-4 flex flex-wrap gap-1.5'
          }
        >
          {(compact ? capability.tags.slice(0, 3) : capability.tags).map(
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
              デモを見る →
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
    ? 'group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)] transition-colors hover:border-brand/40'
    : 'group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] transition-colors hover:border-brand/40'

  if (isReady) {
    return (
      <Link href={capability.href} className={shellClass}>
        {content}
      </Link>
    )
  }

  return (
    <div className={`${shellClass} opacity-75`}>{content}</div>
  )
}
