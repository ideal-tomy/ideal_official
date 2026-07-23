import { ThemeImage } from '@/components/ui/ThemeImage'
import { PageHero } from '@/components/sections/PageHero'
import { galleryImages } from '@/data/ai-capability-gallery/capabilities'

export function GalleryHero() {
  return (
    <PageHero
      title="AIで仕事は変わっていく"
      description="日々の業務を変えるヒントが、7つのデモ体験から得られます。"
      background={
        <>
          <ThemeImage
            src={galleryImages.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black/75"
            aria-hidden="true"
          />
        </>
      }
    />
  )
}
