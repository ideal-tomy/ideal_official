import Link from 'next/link'
import type { CaseStudy } from '@/data/cases'
import { Button } from '@/components/ui/Button'

interface CaseDemoCtaProps {
  caseStudy: CaseStudy
}

export function CaseDemoCta({ caseStudy }: CaseDemoCtaProps) {
  const { relatedDemo, contactHref } = caseStudy

  return (
    <section className="bg-black py-16 lg:py-20 border-b border-blue-400/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400/90 mb-3">
          Related Demo
        </p>
        <h2 className="text-3xl font-bold text-white mb-3">{relatedDemo.label}</h2>
        <p className="text-base text-gray-300 mb-10 leading-relaxed">
          {relatedDemo.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={relatedDemo.href}>
            <Button variant="primary" size="lg">
              デモを体験する
            </Button>
          </Link>
          <Link href={contactHref}>
            <Button variant="secondary" size="lg">
              自社向けに相談する
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
