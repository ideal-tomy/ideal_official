import Link from 'next/link'
import { HeroReveal } from '@/components/motion/HeroReveal'
import { HeroBackground } from '@/components/motion/HeroBackground'
import { typography, colors, layout } from '@/lib/design-tokens'
import { LabBreadcrumb } from '@/components/lab/LabChrome'
import { Button } from '@/components/ui/Button'

export function LabAreaHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbLabel,
}: {
  eyebrow: string
  title: string
  subtitle: string
  breadcrumbLabel: string
}) {
  return (
    <>
      <LabBreadcrumb items={[{ label: breadcrumbLabel }]} />
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden border-b border-brand/40 md:min-h-[45vh]">
        <HeroBackground />
        <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
          <p className="mb-4 hidden text-xs font-medium uppercase tracking-[0.2em] text-brand/90 md:block">
            {eyebrow}
          </p>
          <h1 className={`${typography.h1} ${colors.text.primary} mb-6 whitespace-pre-line`}>
            {title}
          </h1>
          <p className={`${typography.bodyLarge} ${colors.text.muted} max-w-2xl mx-auto`}>
            {subtitle}
          </p>
        </HeroReveal>
      </section>
    </>
  )
}

export function LabCardGrid({
  title,
  description,
  items,
}: {
  title: string
  description?: string
  items: { id: string; title: string; description: string; href?: string; status?: string; category?: string }[]
}) {
  return (
    <section className="py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
          {description && (
            <p className="text-base text-gray-400 max-w-xl mx-auto">{description}</p>
          )}
        </header>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => {
            const inner = (
              <>
                {item.category && (
                  <p className="text-xs text-brand/80 mb-1">{item.category}</p>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                {item.status === 'ready' && item.href && (
                  <p className="text-xs text-brand mt-3">体験する →</p>
                )}
              </>
            )

            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 hover:border-brand/30 hover:bg-gray-900/60 transition-colors"
                >
                  {inner}
                </Link>
              )
            }

            return (
              <div
                key={item.id}
                className="rounded-xl border border-gray-800 bg-gray-900/40 p-6"
              >
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function LabPhilosophyGrid({
  title,
  description,
  points,
  deepLink,
  deepLinkLabel,
}: {
  title: string
  description: string
  points: readonly { title: string; description: string }[]
  deepLink?: string
  deepLinkLabel?: string
}) {
  return (
    <section className="py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">{description}</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-gray-800 bg-gray-900/40 p-5"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {deepLink && deepLinkLabel && (
          <div className="text-center">
            <Link
              href={deepLink}
              className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
            >
              {deepLinkLabel} →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export function LabTechList({
  title,
  technologies,
}: {
  title: string
  technologies: readonly { name: string; description: string }[]
}) {
  return (
    <section className="py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-lg border border-gray-800 bg-gray-900/40 px-4 py-4"
            >
              <p className="text-white font-semibold mb-1">{tech.name}</p>
              <p className="text-sm text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LabSoftCta({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="text-base text-gray-400 leading-relaxed mb-8">{description}</p>
        <Link href={href}>
          <Button variant="secondary" size="lg">
            相談する
          </Button>
        </Link>
      </div>
    </section>
  )
}
