import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { galleryImages } from '@/data/ai-capability-gallery/capabilities'

export function DemoEntryBanner() {
  return (
    <section className="bg-black py-16 md:py-20 border-y border-blue-400/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/25 min-h-[280px] md:min-h-[320px] flex items-center">
          <Image
            src={galleryImages.hero}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50"
            aria-hidden="true"
          />

          <div className="relative z-10 p-8 md:p-12 max-w-xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400/90 mb-3">
              Demo Gallery
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
              AIで、仕事はどこまで
              <br />
              変えられるか。
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
              7つの業務変化デモを、実際に触って体験できます。説明する前に、感じてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ai-capability-gallery">
                <Button variant="primary" size="lg">
                  デモを体験する
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="secondary" size="lg">
                  事例を読む
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
