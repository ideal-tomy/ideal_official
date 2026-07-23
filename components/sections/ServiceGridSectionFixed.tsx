'use client'

import { colors } from '../../lib/design-tokens'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '../motion/ScrollReveal'
import { ScrollStagger } from '../motion/ScrollStagger'

export interface ServiceData {
  id: string
  title: string
  description: string
  image: string
  link: string
  linkText: string
}

export interface ServiceGridSectionFixedProps {
  title?: string
  subtitle?: string
  description?: string
  services: ServiceData[]
  className?: string
}

export default function ServiceGridSectionFixed({
  title,
  subtitle,
  description,
  services,
  className = '',
}: ServiceGridSectionFixedProps) {
  return (
    <section className={`bg-[var(--site-bg)] py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <ScrollReveal className="mb-12 text-center">
            {subtitle && (
              <p className={`text-sm font-medium ${colors.accent.text} mb-2`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--site-fg)] mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${colors.text.secondary} max-w-3xl mx-auto`}>
                {description}
              </p>
            )}
          </ScrollReveal>
        )}

        <ScrollStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className={`
                group ${colors.bg.secondary} ${colors.border.default} border rounded-lg
                p-6
                ${colors.state.hover} ${colors.state.focus}
                focus:outline-none cursor-pointer
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-xl hover:shadow-[0_8px_24px_var(--color-brand-glow)]
                block
              `}
            >
              {service.image && (
                <div className="mb-4 text-center">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              <div>
                <h3 className={`text-lg font-semibold ${colors.text.primary} mb-3`}>
                  {service.title}
                </h3>
                <p className={`${colors.text.secondary} text-sm leading-relaxed mb-4`}>
                  {service.description}
                </p>

                <div className="text-center">
                  <span className="inline-flex items-center text-sm font-medium text-[var(--site-fg-muted)] group-hover:text-brand transition-colors duration-200">
                    {service.linkText}
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </ScrollStagger>

        <ScrollReveal className="text-center mt-12" delay={0.2}>
          <Link
            href="/services"
            className={`
              inline-flex items-center px-6 py-3 ${colors.accent.bg} text-[var(--site-fg)] font-medium rounded-lg ${colors.accent.bgHover} transition-all duration-300 hover:scale-105
            `}
          >
            全サービス一覧を見る
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
