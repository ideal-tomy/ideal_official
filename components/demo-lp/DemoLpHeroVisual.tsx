'use client'

import { useState } from 'react'
import type { HeroBlock } from '@/lib/demo-lp/types'
import { lpNote } from './lpTypography'

type Props = {
  visual: HeroBlock['visual']
}

export function DemoLpHeroVisual({ visual }: Props) {
  const [useVideo, setUseVideo] = useState(Boolean(visual.videoSrc))
  const fitClass =
    visual.fit === 'contain'
      ? 'object-contain object-center'
      : 'h-full w-full object-cover'

  return (
    <div>
      <div className="relative aspect-square w-full max-w-xl mx-auto md:max-w-none">
        {useVideo && visual.videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={visual.src}
            aria-label={visual.alt}
            className={`absolute inset-0 h-full w-full rounded-xl ${fitClass}`}
            onError={() => setUseVideo(false)}
          >
            <source src={visual.videoSrc} type="video/mp4" />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={visual.src}
            alt={visual.alt}
            className={
              visual.fit === 'contain'
                ? `absolute inset-0 h-full w-full rounded-xl ${fitClass}`
                : `h-full w-full rounded-xl border border-[var(--lp-ink)]/10 shadow-sm ${fitClass}`
            }
          />
        )}
      </div>
      {visual.note && (
        <p className={`mt-2 text-center ${lpNote}`}>{visual.note}</p>
      )}
    </div>
  )
}
