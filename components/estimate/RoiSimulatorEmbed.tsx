'use client'

import { useEffect, useRef, useState } from 'react'

const DEFAULT_HEIGHT = 1400
const MIN_HEIGHT = 720

type RoiSimulatorEmbedProps = {
  src: string | null
  title?: string
}

/**
 * roi-simulator の iframe 埋め込み。
 * 金額は受け取らず、高さ通知（roi-simulator:height）のみ購読する。
 */
export function RoiSimulatorEmbed({
  src,
  title = '自動見積もりシミュレーター',
}: RoiSimulatorEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(DEFAULT_HEIGHT)

  useEffect(() => {
    if (!src) return

    const onMessage = (event: MessageEvent) => {
      const data = event.data
      if (
        !data ||
        typeof data !== 'object' ||
        data.type !== 'roi-simulator:height' ||
        typeof data.height !== 'number'
      ) {
        return
      }
      const next = Math.max(MIN_HEIGHT, Math.ceil(data.height))
      setHeight(next)
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [src])

  if (!src) {
    return (
      <div className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 px-6 py-10 text-center">
        <p className="text-sm text-[var(--site-fg-muted)]">
          見積ツールの接続先が未設定です。
        </p>
        <p className="mt-2 text-xs text-[var(--site-fg-muted)]">
          環境変数{' '}
          <code className="text-[var(--site-fg)]">NEXT_PUBLIC_ROI_SIMULATOR_URL</code>{' '}
          を設定してください。
        </p>
      </div>
    )
  }

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      loading="lazy"
      className="w-full rounded-2xl border border-[var(--site-border)] bg-white"
      style={{ height }}
    />
  )
}
