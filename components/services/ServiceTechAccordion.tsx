'use client'

import type { ReactNode } from 'react'
import { Accordion } from '@/components/ui/Accordion'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export type ServiceTechItem = {
  id: string
  title: string
  content: ReactNode
  tags?: readonly string[]
  siteUsage?: string
}

type ServiceTechAccordionProps = {
  title?: string
  lead?: string
  items: readonly ServiceTechItem[]
}

export function ServiceTechAccordion({
  title = '使用技術',
  lead,
  items,
}: ServiceTechAccordionProps) {
  return (
    <ServiceSectionShell tone="technical" title={title} lead={lead}>
      <Accordion
        variant="card"
        allowMultiple
        items={items.map((item) => ({
          id: item.id,
          title: item.title,
          content: (
            <div className="space-y-4">
              {item.content}
              {item.siteUsage ? (
                <p className="text-xs leading-relaxed text-[var(--site-fg-muted)]">
                  使用: {item.siteUsage}
                </p>
              ) : null}
              {item.tags?.length ? (
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--site-border)] px-2 py-0.5 text-[11px] text-[var(--site-fg-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ),
        }))}
      />
    </ServiceSectionShell>
  )
}
