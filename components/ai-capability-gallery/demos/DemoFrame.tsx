import type { ReactNode } from 'react'

interface DemoFrameProps {
  title?: string
  children: ReactNode
}

export function DemoFrame({ title = 'デモ体験', children }: DemoFrameProps) {
  return (
    <div className="rounded-2xl border border-[#D9DDE3] bg-[#F4F5F7] text-gray-900 overflow-hidden shadow-lg">
      <div className="px-4 sm:px-6 py-3 border-b border-[#D9DDE3] bg-white flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" aria-hidden="true" />
        <span className="ml-2 text-xs font-medium text-gray-500">{title}</span>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  )
}
