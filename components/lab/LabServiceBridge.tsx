import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { PageHero, pageHeroActionsClass } from '@/components/sections/PageHero'
import { typography, colors } from '@/lib/design-tokens'

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
      <PageHero title={title} description={subtitle}>
        <div className={pageHeroActionsClass}>
          <Link href={labHref} className="w-1/2 sm:w-auto sm:flex-1">
            <Button variant="primary" size="lg" className="w-full">
              {labLabel}を見る
            </Button>
          </Link>
          <Link href={contactHref} className="w-1/2 sm:w-auto sm:flex-1">
            <Button variant="secondary" size="lg" className="w-full">
              相談する
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="py-12 border-b border-brand/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400 leading-relaxed">
            この領域は、依頼の主力サービスではなく研究・実験の領域として LAB に集約しています。
            思想・デモ・過去の企画は{' '}
            <Link href="/lab" className="text-brand hover:text-brand-hover">
              LAB トップ
            </Link>
            からも辿れます。
          </p>
        </div>
      </section>
    </div>
  )
}
