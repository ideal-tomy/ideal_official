import Image from 'next/image'
import { PageHero } from '@/components/sections/PageHero'
import { galleryImages } from '@/data/ai-capability-gallery/capabilities'

export function GalleryHero() {
  return (
    <PageHero
      title="AIで仕事は変わっていく"
      description="日々の業務を変えるヒントが、7つのデモ体験から得られます。"
      background={
        <>
          <Image
            src={galleryImages.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/55 to-black/85"
            aria-hidden="true"
          />
        </>
      }
    />
  )
}
