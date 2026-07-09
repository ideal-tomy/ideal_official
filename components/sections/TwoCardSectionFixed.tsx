'use client'

import { colors } from '../../lib/design-tokens'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '../motion/ScrollReveal'
import { ScrollStagger } from '../motion/ScrollStagger'

export interface TwoCardData {
  id: string
  title: string
  description: string
  image: string
  link: string
  linkText: string
  priority?: boolean
}

export interface TwoCardSectionFixedProps {
  title?: string
  subtitle?: string
  description?: string
  cards: TwoCardData[]
  className?: string
}

export function TwoCardSectionFixed({
  title,
  subtitle,
  description,
  cards,
  className = '',
}: TwoCardSectionFixedProps) {
  return (
    <section className={`bg-black pt-0 pb-16 md:pb-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <ScrollReveal className="mb-12 text-center">
            {subtitle && (
              <p className={`text-sm font-medium ${colors.accent.text} mb-2`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-brand to-brand-hover bg-clip-text text-transparent">
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

        <ScrollStagger className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className={`
                group ${colors.bg.secondary} ${colors.border.default} border rounded-lg
                p-6
                ${colors.state.hover} ${colors.state.focus}
                focus:outline-none cursor-pointer
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-xl hover:shadow-[0_8px_24px_var(--color-brand-glow)]
                block h-96
              `}
            >
              {card.image && (
                <div className="mb-4 text-center">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1200}
                      height={450}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                      priority={card.priority || false}
                      loading={card.priority ? undefined : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              )}

              <div className="h-48 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3`}>
                    {card.title}
                  </h3>
                  <p className={`${colors.text.secondary} text-sm leading-relaxed`}>
                    {card.description}
                  </p>
                </div>

                <div className="mt-4">
                  <span className="inline-flex items-center text-sm font-medium text-brand group-hover:text-brand-hover transition-colors duration-200">
                    {card.linkText}
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
      </div>
    </section>
  )
}
