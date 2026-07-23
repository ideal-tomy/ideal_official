import { colors, typography } from '../../lib/design-tokens'

interface ServiceIntroBannerProps {
  paragraph: string
  useCases: readonly string[]
}

export function ServiceIntroBanner({ paragraph, useCases }: ServiceIntroBannerProps) {
  return (
    <div className="border-b border-brand bg-[var(--site-bg-elevated)]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-6 text-center`}>
          {paragraph}
        </p>
        <ul className="space-y-2 max-w-xl mx-auto">
          {useCases.map((item) => (
            <li key={item} className={`flex items-start gap-3 ${typography.body} ${colors.text.secondary}`}>
              <span className="w-2 h-2 bg-brand-hover rounded-full mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
