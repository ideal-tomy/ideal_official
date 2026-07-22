import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { PageHero, pageHeroActionsClass } from '@/components/sections/PageHero'
import { galleryImages } from '@/data/ai-capability-gallery/capabilities'
import { aiHubHero } from '@/data/services/ai-hub'

export function AiHubHero() {
  return (
    <PageHero
      title={aiHubHero.title}
      description={aiHubHero.subtitle}
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
    >
      <div className={pageHeroActionsClass}>
        <Link href={aiHubHero.primaryCta.href} className="min-w-0 flex-1 basis-1/2">
          <Button variant="primary" size="lg" className="w-full">
            {aiHubHero.primaryCta.label}
          </Button>
        </Link>
        <Link href={aiHubHero.secondaryCta.href} className="min-w-0 flex-1 basis-1/2">
          <Button variant="secondary" size="lg" className="w-full">
            {aiHubHero.secondaryCta.label}
          </Button>
        </Link>
      </div>
    </PageHero>
  )
}
