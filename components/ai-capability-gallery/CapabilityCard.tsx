import Image from 'next/image'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

interface CapabilityCardProps {
  capability: Capability
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const isReady = capability.status === 'ready'
  const href = `#capability-${capability.slug}`

  const content = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
        <Image
          src={capability.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span className="absolute top-3 left-3 text-xs font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded">
          {String(capability.number).padStart(2, '0')}
        </span>
        {!isReady && (
          <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-gray-300 border border-gray-600 bg-black/60 px-1.5 py-0.5 rounded">
            準備中
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-[11px] tracking-[0.18em] text-cyan-400/90 mb-2">
          {capability.englishLabel}
        </p>
        <h3 className="text-base md:text-lg font-semibold text-white mb-2 leading-snug">
          {capability.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {capability.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full border border-gray-700 text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {isReady ? (
            <span className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
              View →
            </span>
          ) : (
            <span className="inline-flex items-center text-sm text-gray-500">
              近日公開
            </span>
          )}
        </div>
      </div>
    </>
  )

  if (isReady) {
    return (
      <a
        href={href}
        className="group flex flex-col h-full rounded-xl border border-gray-800 bg-gray-900/40 overflow-hidden hover:border-blue-400/30 hover:bg-gray-900/60 transition-colors"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex flex-col h-full rounded-xl border border-gray-800 bg-gray-900/20 overflow-hidden opacity-75">
      {content}
    </div>
  )
}
