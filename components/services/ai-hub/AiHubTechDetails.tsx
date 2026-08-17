'use client'



import Link from 'next/link'

import { techDetailItems } from '@/data/services/ai-hub-tech'

import { ServiceTechAccordion } from '@/components/services/ServiceTechAccordion'



export function AiHubTechDetails() {

  return (

    <>

      <ServiceTechAccordion

        items={techDetailItems.map((item) => ({

          id: item.id,

          title: item.title,

          content: item.modalBody,

          tags: item.tags,

          siteUsage: item.siteUsage,

        }))}

      />

      <p className="-mt-4 pb-10 text-left text-sm text-[var(--site-fg-muted)]">

        比較・導入理由・働き方などの解説は{' '}

        <Link

          href="/lab/insights"

          className="text-brand transition-colors hover:text-brand-hover"

        >

          LAB Insights

        </Link>

        へ。

      </p>

    </>

  )

}

