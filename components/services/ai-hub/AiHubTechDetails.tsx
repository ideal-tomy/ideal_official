'use client'



import { techDetailItems } from '@/data/services/ai-hub-tech'

import { ServiceTechAccordion } from '@/components/services/ServiceTechAccordion'



export function AiHubTechDetails() {

  return (

    <ServiceTechAccordion

      items={techDetailItems.map((item) => ({

        id: item.id,

        title: item.title,

        content: item.modalBody,

        tags: item.tags,

        siteUsage: item.siteUsage,

      }))}

    />

  )

}

