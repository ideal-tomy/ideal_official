'use client'

import { Tab } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { AiServicesShowcaseContent } from '@/components/services/ai-hub/AiServicesShowcase'
import { ProductShowcaseContent } from '@/components/services/app-hub/ProductShowcase'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { InteractionShowcaseContent } from '@/components/services/web-hub/InteractionShowcase'
import { hubServices, servicesBuildCopy } from '@/data/services/hub'

const BUILD_TABS = [
  { id: 'web', label: 'Webサイト・LP', hash: 'web' },
  { id: 'app', label: '業務ツール', hash: 'app' },
  { id: 'ai', label: 'AIプロトタイプ', hash: 'ai' },
] as const

const SHOWCASE_LEADS: Record<(typeof BUILD_TABS)[number]['id'], string> = {
  web: 'モーダル・モーション・切り替え。このページ自体がWeb制作の操作イメージです。',
  app: '言葉で説明する前に、動く仕組みの感触を確かめてください。入力・進捗・一覧の3つです。',
  ai: 'サンプルデータで完走できるデモです。自社に近いパターンから、AI活用のイメージを掴めます。',
}

const tabButtonClass = (selected: boolean) =>
  `shrink-0 border-b-2 px-1 pb-2.5 text-base transition-colors ${
    selected
      ? 'border-brand font-bold text-[var(--site-fg)]'
      : 'border-transparent font-medium text-[var(--site-fg-muted)] hover:text-[var(--site-fg)]'
  }`

function tabIndexFromHash(hash: string): number {
  const id = hash.replace(/^#/, '')
  const legacyMap: Record<string, number> = {
    web: 0,
    app: 1,
    ai: 2,
    'build-web': 0,
    'build-app': 1,
    'build-ai': 2,
  }
  if (legacyMap[id] !== undefined) {
    return legacyMap[id]
  }
  const idx = BUILD_TABS.findIndex((t) => t.id === id)
  return idx >= 0 ? idx : 0
}

function scrollToBuildStart() {
  document.getElementById('build-tab-start')?.scrollIntoView({ block: 'start' })
}

function BuildPreviewImage({
  src,
  alt,
}: {
  src?: string
  alt: string
}) {
  if (src) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 720px"
        />
      </div>
    )
  }

  return (
    <div
      className="flex aspect-[16/10] w-full items-center justify-center rounded-lg border border-[var(--site-border)] bg-[#F4F5F7] text-xs text-[var(--site-fg-muted)]"
      aria-hidden
    >
      完成イメージ（準備中）
    </div>
  )
}

function BuildPreviewCard({
  service,
}: {
  service: (typeof hubServices)[number]
}) {
  return (
    <article
      id={service.buildAnchor}
      className="scroll-mt-28 overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] shadow-[var(--service-card-shadow)]"
    >
      <div className="p-5 md:p-6">
        <BuildPreviewImage src={service.image} alt={service.title} />
        <h3 className="mt-5 text-xl font-bold text-[var(--site-fg)] md:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-base">
          {service.description}
        </p>
        <Link
          href={service.contactHref}
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-[var(--df-on-primary)] transition-colors hover:bg-brand-hover"
        >
          相談する
        </Link>
      </div>
    </article>
  )
}

function BuildTabNav() {
  return (
    <Tab.List
      className="mb-8 flex gap-6 overflow-x-auto border-b border-[var(--site-border)] scrollbar-hide"
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

function ShowcasePanel({ tabId }: { tabId: (typeof BUILD_TABS)[number]['id'] }) {
  if (tabId === 'web') {
    return <InteractionShowcaseContent />
  }
  if (tabId === 'app') {
    return <ProductShowcaseContent />
  }
  return <AiServicesShowcaseContent />
}

export function ServicesBuildSection() {
  const [tabIndex, setTabIndex] = useState(0)

  const syncFromHash = useCallback(() => {
    const hash = window.location.hash
    const idx = tabIndexFromHash(hash)
    setTabIndex(idx)
    const normalized = hash.replace(/^#/, '')
    if (['web', 'app', 'ai', 'build-web', 'build-app', 'build-ai'].includes(normalized)) {
      requestAnimationFrame(() => {
        scrollToBuildStart()
      })
    }
  }, [])

  useEffect(() => {
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [syncFromHash])

  const handleTabChange = (index: number) => {
    setTabIndex(index)
    const hash = BUILD_TABS[index]?.hash
    if (hash) {
      window.history.replaceState(null, '', `#${hash}`)
    }
  }

  const activeTab = BUILD_TABS[tabIndex] ?? BUILD_TABS[0]

  return (
    <Tab.Group selectedIndex={tabIndex} onChange={handleTabChange}>
      <ServiceSectionShell
        id="build"
        surface="default"
        title={servicesBuildCopy.heading}
        lead={servicesBuildCopy.lead}
        align="left"
        emphasis="feature"
        maxWidth="6xl"
      >
        <div id="build-tab-start" className="scroll-mt-24" aria-hidden />
        <BuildTabNav />

        <Tab.Panels>
          {BUILD_TABS.map((tab, index) => (
            <Tab.Panel key={tab.id} className="focus:outline-none">
              <BuildPreviewCard service={hubServices[index]!} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </ServiceSectionShell>

      <ServiceSectionShell
        id="build-demos"
        tone="interactive"
        title="ここで触ってみる"
        lead={SHOWCASE_LEADS[activeTab.id]}
        align="left"
        emphasis="feature"
        contentBleed
      >
        <ShowcasePanel tabId={activeTab.id} />
      </ServiceSectionShell>
    </Tab.Group>
  )
}
