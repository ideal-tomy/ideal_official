import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

interface CapabilityCardProps {
  capability: Capability
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const isReady = capability.status === 'ready'

  const content = (
    <>
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-xs font-mono text-blue-400/80">
          {String(capability.number).padStart(2, '0')}
        </span>
        {!isReady && (
          <span className="text-[10px] uppercase tracking-wider text-gray-400 border border-gray-700 px-1.5 py-0.5 rounded shrink-0">
            準備中
          </span>
        )}
      </div>

      <p className="text-xs text-cyan-400/90 mb-2">{capability.subtitle}</p>
      <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
        {capability.title}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed mb-4">
        {capability.description}
      </p>

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

      <div className="space-y-2 mb-5 text-xs">
        <div className="flex gap-2">
          <span className="text-gray-500 shrink-0 w-12">Before</span>
          <span className="text-gray-400">{capability.before}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-cyan-400/80 shrink-0 w-12">After</span>
          <span className="text-gray-200">{capability.after}</span>
        </div>
      </div>

      {isReady ? (
        <span className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
          デモを体験する →
        </span>
      ) : (
        <span className="inline-flex items-center text-sm text-gray-500">
          近日公開
        </span>
      )}
    </>
  )

  if (isReady) {
    return (
      <Link
        href={capability.href}
        className="group block h-full p-6 rounded-xl border border-gray-800 bg-gray-900/40 hover:border-blue-400/30 hover:bg-gray-900/60 transition-colors"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="block h-full p-6 rounded-xl border border-gray-800 bg-gray-900/20 opacity-75">
      {content}
    </div>
  )
}
