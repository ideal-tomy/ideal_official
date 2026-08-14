'use client'

import { underTheHoodCards } from '@/data/services/app-hub'
import { ServiceTechAccordion } from '@/components/services/ServiceTechAccordion'

export function AppUnderTheHood() {
  return (
    <ServiceTechAccordion
      items={underTheHoodCards.map((card) => ({
        id: card.id,
        title: card.title,
        content: card.modalBody,
        tags: card.tags,
        siteUsage: card.siteUsage,
      }))}
    />
  )
}
