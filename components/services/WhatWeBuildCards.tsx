import {
  WhatWeBuildIllustration,
  type WhatWeBuildIllustrationId,
} from '@/components/services/what-we-build/WhatWeBuildIllustration'
import { WhatWeBuildEditorial } from '@/components/services/WhatWeBuildEditorial'

export type WhatWeBuildItem = {
  title: string
  description: string
  illustrationId: WhatWeBuildIllustrationId
  imageAlt: string
}

type WhatWeBuildCardsProps = {
  items: readonly WhatWeBuildItem[]
}

export function WhatWeBuildCards({ items }: WhatWeBuildCardsProps) {
  return (
    <WhatWeBuildEditorial
      items={items.map((item) => ({
        title: item.title,
        description: item.description,
        media: (
          <div
            className="mock flex aspect-[16/10] w-full items-center justify-center p-3"
            role="img"
            aria-label={item.imageAlt}
          >
            <WhatWeBuildIllustration id={item.illustrationId} />
          </div>
        ),
      }))}
    />
  )
}
