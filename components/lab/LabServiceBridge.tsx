import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { HeroReveal } from '@/components/motion/HeroReveal'
import { HeroBackground } from '@/components/motion/HeroBackground'
import { typography, colors, layout } from '@/lib/design-tokens'

interface LabServiceBridgeProps {
  title: string
  subtitle: string
  labHref: string
  labLabel: string
  contactHref: string
}

/**
 * BC / Metaverse など、SERVICES URL を残しつつ LAB へ誘導する薄いブリッジページ
 */
export function LabServiceBridge({
  title,
  subtitle,
  labHref,
  labLabel,
  contactHref,
}: LabServiceBridgeProps) {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-b border-blue-400/40">
        <HeroBackground />
        <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400/90 mb-4">
            LAB へ移動しました
          </p>
          <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>{title}</h1>
          <p className={`${typography.bodyLarge} ${colors.text.muted} max-w-2xl mx-auto mb-10`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={labHref}>
              <Button variant="primary" size="lg">
                {labLabel}を見る
              </Button>
            </Link>
            <Link href={contactHref}>
              <Button variant="secondary" size="lg">
                相談する
              </Button>
            </Link>
          </div>
        </HeroReveal>
      </section>

      <section className="py-12 border-b border-blue-400/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400 leading-relaxed">
            この領域は、依頼の主力サービスではなく研究・実験の領域として LAB に集約しています。
            思想・デモ・過去の企画は{' '}
            <Link href="/lab" className="text-cyan-400 hover:text-cyan-300">
              LAB トップ
            </Link>
            からも辿れます。
          </p>
        </div>
      </section>
    </div>
  )
}
