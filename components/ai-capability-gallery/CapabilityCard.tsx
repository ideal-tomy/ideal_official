import Image from 'next/image'
import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { ChangeLabel } from '@/components/ui/ChangeLabel'

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
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
        <Image
          src={capability.image}
          alt=""
          fill
          sizes={
            compact
              ? '176px'
              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span
          className={
            compact
              ? 'absolute left-1.5 top-1.5 rounded bg-black/50 px-1 py-px font-mono text-[9px] text-white/90'
              : 'absolute left-3 top-3 rounded bg-black/50 px-2 py-0.5 font-mono text-xs text-white/90'
          }
        >
          {String(capability.number).padStart(2, '0')}
        </span>
        {!isReady && (
          <span
            className={
              compact
                ? 'absolute right-1.5 top-1.5 rounded border border-gray-600 bg-black/60 px-1 py-px text-[8px] uppercase tracking-wider text-gray-300'
                : 'absolute right-3 top-3 rounded border border-gray-600 bg-black/60 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-300'
            }
          >
            準備中
          </span>
        )}
      </div>

      <div
        className={
          compact
            ? 'flex flex-1 flex-col p-2.5'
            : 'flex flex-1 flex-col p-4'
        }
      >
        <p className={compact ? 'mb-1 text-[8px] leading-tight' : 'mb-2 text-[11px]'}>
          <ChangeLabel
            label={capability.englishLabel}
            className={compact ? 'tracking-[0.1em]' : undefined}
          />
        </p>
        <h3
          className={
            compact
              ? 'mb-1.5 line-clamp-2 text-[11px] font-semibold leading-snug text-white'
              : 'mb-2 text-base font-semibold leading-snug text-white md:text-lg'
          }
        >
          {capability.title}
        </h3>

        <div className={compact ? 'mb-2 flex flex-wrap gap-1' : 'mb-4 flex flex-wrap gap-1.5'}>
          {(compact ? capability.tags.slice(0, 3) : capability.tags).map((tag) => (
            <span
              key={tag}
              className={
                compact
                  ? 'rounded-full border border-gray-700 px-1.5 py-px text-[8px] text-gray-400'
                  : 'rounded-full border border-gray-700 px-2 py-0.5 text-[11px] text-gray-400'
              }
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {isReady ? (
            <span
              className={
                compact
                  ? 'inline-flex items-center text-[10px] font-medium text-gray-300 transition-colors group-hover:text-brand'
                  : 'inline-flex items-center text-sm font-medium text-gray-300 transition-colors group-hover:text-brand'
              }
            >
              デモを見る →
            </span>
          ) : (
            <span
              className={
                compact
                  ? 'inline-flex items-center text-[10px] text-gray-500'
                  : 'inline-flex items-center text-sm text-gray-500'
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
    ? 'group flex h-full flex-col overflow-hidden rounded-lg border border-gray-800 bg-gray-900/40 transition-colors hover:border-brand/35 hover:bg-gray-900/60'
    : 'group flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 transition-colors hover:border-brand/35 hover:bg-gray-900/60'

  if (isReady) {
    return (
      <Link href={capability.href} className={shellClass}>
        {content}
      </Link>
    )
  }

  return (
    <div
      className={
        compact
          ? 'flex h-full flex-col overflow-hidden rounded-lg border border-gray-800 bg-gray-900/20 opacity-75'
          : 'flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/20 opacity-75'
      }
    >
      {content}
    </div>
  )
}
