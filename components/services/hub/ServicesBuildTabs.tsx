'use client'



import { Tab } from '@headlessui/react'

import { Fragment, useCallback, useEffect, useState } from 'react'

import { InteractionShowcase } from '@/components/services/web-hub/InteractionShowcase'

import { WebWhatWeBuild } from '@/components/services/web-hub/WebWhatWeBuild'

import { WebUnderTheHood } from '@/components/services/web-hub/WebUnderTheHood'

import { ProductShowcase } from '@/components/services/app-hub/ProductShowcase'

import { AppWhatWeBuild } from '@/components/services/app-hub/AppWhatWeBuild'

import { AppUnderTheHood } from '@/components/services/app-hub/AppUnderTheHood'

import { AiInteractionShowcase } from '@/components/services/ai-hub/AiInteractionShowcase'

import { AiWhatWeBuild } from '@/components/services/ai-hub/AiWhatWeBuild'

import { AiHubTechDetails } from '@/components/services/ai-hub/AiHubTechDetails'

import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

import { servicesBuildCopy } from '@/data/services/hub'



const BUILD_TABS = [
  { id: 'web', label: 'Webサイト・LP' },
  { id: 'app', label: '業務ツール' },
  { id: 'ai', label: 'AIプロトタイプ' },
] as const



const tabButtonClass = (selected: boolean) =>

  `shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${

    selected

      ? 'border-brand/50 bg-brand/15 text-brand-hover'

      : 'border-[var(--site-border)] bg-[var(--site-bg-elevated)] text-[var(--site-fg-muted)] hover:border-brand/30 hover:text-[var(--site-fg)]'

  }`



function scrollToBuildTabStart() {

  document.getElementById('build-tab-start')?.scrollIntoView({ block: 'start' })

}



function BuildTabNav({

  selectedIndex,

  onSelect,

  placement,

}: {

  selectedIndex: number

  onSelect: (index: number) => void

  placement: 'top' | 'bottom'

}) {

  const isBottom = placement === 'bottom'



  const buttons = BUILD_TABS.map((tab, index) => (

    <button

      key={`${placement}-${tab.id}`}

      type="button"

      aria-current={selectedIndex === index ? 'true' : undefined}

      onClick={() => onSelect(index)}

      className={tabButtonClass(selectedIndex === index)}

    >

      {tab.label}

    </button>

  ))



  if (isBottom) {

    return (

      <nav

        className="mt-10 flex flex-col items-center gap-3 border-t border-[var(--site-border)] pt-8"

        aria-label="他の製作領域を見る"

      >

        <p className="text-sm text-[var(--site-fg-muted)]">

          他の製作領域を見る

        </p>

        <div className="flex w-full gap-2 overflow-x-auto pb-1 scrollbar-hide sm:justify-center">

          {buttons}

        </div>

      </nav>

    )

  }



  return (

    <Tab.List

      className="mb-8 flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:justify-center"

      aria-label="製作の種類"

    >

      {BUILD_TABS.map((tab) => (

        <Tab as={Fragment} key={tab.id}>

          {({ selected }) => (

            <button type="button" className={tabButtonClass(selected)}>

              {tab.label}

            </button>

          )}

        </Tab>

      ))}

    </Tab.List>

  )

}



function tabIndexFromHash(hash: string): number {

  const id = hash.replace(/^#/, '')

  const idx = BUILD_TABS.findIndex((t) => t.id === id)

  return idx >= 0 ? idx : 0

}



export function ServicesBuildTabs() {

  const [tabIndex, setTabIndex] = useState(0)



  const syncFromHash = useCallback(() => {

    const hash = window.location.hash

    const idx = tabIndexFromHash(hash)

    setTabIndex(idx)

    if (['web', 'app', 'ai'].includes(hash.replace(/^#/, ''))) {

      requestAnimationFrame(() => {

        scrollToBuildTabStart()

      })

    }

  }, [])



  useEffect(() => {

    syncFromHash()

    window.addEventListener('hashchange', syncFromHash)

    return () => window.removeEventListener('hashchange', syncFromHash)

  }, [syncFromHash])



  const handleTabChange = (index: number, scrollToStart = false) => {

    setTabIndex(index)

    const id = BUILD_TABS[index]?.id

    if (id) {

      window.history.replaceState(null, '', `#${id}`)

    }

    if (scrollToStart) {

      requestAnimationFrame(() => {

        scrollToBuildTabStart()

      })

    }

  }



  return (

    <ServiceSectionShell

      id="build"

      surface="default"

      kicker="BUILD"

      title={servicesBuildCopy.heading}

      lead={servicesBuildCopy.lead}

      maxWidth="6xl"

    >

      <Tab.Group

        selectedIndex={tabIndex}

        onChange={(index) => handleTabChange(index)}

      >

        <div id="build-tab-start" className="scroll-mt-24" aria-hidden />

        <BuildTabNav

          selectedIndex={tabIndex}

          onSelect={(index) => handleTabChange(index)}

          placement="top"

        />



        <Tab.Panels>

          {BUILD_TABS.map((tab) => (

            <Tab.Panel key={tab.id} className="focus:outline-none">
              {tab.id === 'web' ? (

                <>

                  <InteractionShowcase />

                  <WebWhatWeBuild />

                  <WebUnderTheHood />

                </>

              ) : null}



              {tab.id === 'app' ? (

                <>

                  <ProductShowcase />

                  <AppWhatWeBuild />

                  <AppUnderTheHood />

                </>

              ) : null}



              {tab.id === 'ai' ? (

                <>

                  <AiInteractionShowcase />

                  <AiWhatWeBuild />

                  <AiHubTechDetails />

                </>

              ) : null}



              <BuildTabNav

                selectedIndex={tabIndex}

                onSelect={(index) => handleTabChange(index, true)}

                placement="bottom"

              />

            </Tab.Panel>

          ))}

        </Tab.Panels>

      </Tab.Group>

    </ServiceSectionShell>

  )

}

