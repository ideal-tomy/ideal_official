'use client'

import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Modal } from '@/components/ui/Modal'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'
import { AsymmetricFeatureGrid } from '@/components/services/AsymmetricFeatureGrid'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

function ModalPanel({ featured = true }: { featured?: boolean }) {
  const content = (
    <>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand/90">
        01 · 詳しく見る
      </p>
      <h3
        className={`mb-3 font-bold text-[var(--site-fg)] ${
          featured ? 'text-xl md:text-2xl' : 'text-xl font-semibold'
        }`}
      >
        開いて、閉じる体験
      </h3>
      <p
        className={`leading-relaxed text-[var(--site-fg-muted)] ${
          featured ? 'text-sm md:text-base' : 'text-sm'
        }`}
      >
        別ページへ飛ばさず、その場で詳細を開けます。探したい情報にすぐ戻れる体験です。
      </p>
    </>
  )

  const demoArea = (
    <>
      <div
        className={`relative overflow-hidden rounded-lg bg-[var(--site-bg-elevated)] p-4 ${
          featured ? 'min-h-[160px] flex-1' : 'mb-4 min-h-[120px]'
        }`}
        aria-hidden
      >
        <div className="mb-3 h-2 w-24 rounded-full bg-[var(--site-border)]" />
        <div className="space-y-2">
          <div className="h-2 w-full rounded bg-[var(--site-border)]/60" />
          <div className="h-2 w-4/5 rounded bg-[var(--site-border)]/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
          <div className="w-[min(88%,280px)] rounded-lg border border-[var(--site-border)] bg-[var(--site-bg)] p-4 shadow-lg">
            <div className="mb-2 h-2 w-20 rounded bg-brand/30" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[var(--site-border)]" />
              <div className="h-1.5 w-5/6 rounded bg-[var(--site-border)]" />
            </div>
          </div>
        </div>
      </div>

      <Modal buttonText="モーダルを開く" title="詳しく見る" size="md">
        <div className="space-y-4">
          <p className="leading-relaxed text-[var(--site-fg-muted)]">
            重要な説明を、ページ遷移なしでその場に重ねて表示できます。閉じれば元の位置に戻れます。
          </p>
          <ul className="space-y-2 text-sm text-[var(--site-fg-muted)]">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--df-text-muted)]" />
              背景がやわらかく暗くなる
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--df-text-muted)]" />
              パネルがスムーズに現れる
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--df-text-muted)]" />
              Esc や外側クリックで閉じる
            </li>
          </ul>
        </div>
      </Modal>
    </>
  )

  if (!featured) {
    return (
      <div className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-6">
        {content}
        <div className="mt-4 flex flex-1 flex-col">{demoArea}</div>
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-brand/20 bg-[var(--site-bg)]">
      <div className="p-6 md:p-8">{content}</div>
      <div className="flex min-h-[220px] flex-1 flex-col justify-between gap-6 border-t border-[var(--site-border)] bg-[color-mix(in_srgb,var(--color-brand)_4%,var(--site-bg))] p-6 md:p-8">
        {demoArea}
      </div>
    </div>
  )
}

function MotionPanel({ featured = false }: { featured?: boolean }) {
  const prefersReduced = usePrefersReducedMotion()
  const [key, setKey] = useState(0)

  const content = (
    <>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand/90">
        02 · 動き
      </p>
      <h3
        className={`mb-3 font-bold text-[var(--site-fg)] ${
          featured ? 'text-xl md:text-2xl' : 'text-xl font-semibold'
        }`}
      >
        意図のある動き
      </h3>
      <p
        className={`leading-relaxed text-[var(--site-fg-muted)] ${
          featured ? 'mb-0 text-sm md:text-base' : 'mb-6 text-sm'
        }`}
      >
        常に動かし続けず、必要なときにだけ印象づける。見ていて疲れにくい動き方です。
      </p>
    </>
  )

  const demoArea = (
    <>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-lg bg-[var(--site-bg-elevated)] ${
          featured ? 'mb-6 min-h-[220px] flex-1' : 'mb-4 min-h-[140px] flex-1'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
            transition={{
              duration: prefersReduced ? 0 : 0.45,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="rounded-lg border border-brand/30 bg-brand/10 px-6 py-4 text-center"
          >
            <p className="text-sm font-medium text-[var(--site-fg)]">やわらかく現れる</p>
            <p className="mt-1 text-xs text-[var(--site-fg-muted)]">再生 #{key + 1}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => setKey((k) => k + 1)}
        className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-[var(--df-on-primary)] transition-colors hover:bg-brand-hover"
      >
        モーションを再生
      </button>
    </>
  )

  if (featured) {
    return (
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-brand/20 bg-[var(--site-bg)]">
        <div className="p-6 md:p-8">{content}</div>
        <div className="flex min-h-[220px] flex-1 flex-col border-t border-[var(--site-border)] bg-[color-mix(in_srgb,var(--color-brand)_4%,var(--site-bg))] p-6 md:p-8">
          {demoArea}
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-6">
      {content}
      {demoArea}
    </div>
  )
}

function InteractionPanel() {
  const prefersReduced = usePrefersReducedMotion()
  const [tabIndex, setTabIndex] = useState(0)
  const fadeMs = prefersReduced ? 0 : 400
  const panels = [
    {
      name: '構成',
      body: '伝えたい順にセクションを並べ、読み手が迷わない流れをつくります。',
      image: '/images/web/tab01.png',
      imageAlt: '構成のイメージ',
    },
    {
      name: 'UI',
      body: 'タブやカードなど、触って理解できる部品で情報を整理します。',
      image: '/images/web/tab02.png',
      imageAlt: 'UIのイメージ',
    },
    {
      name: '実装',
      body: '見た目だけでなく、スマホ操作や開閉の快適さまで含めて作り込みます。',
      image: '/images/web/tab03.png',
      imageAlt: '実装のイメージ',
    },
  ]

  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-6">
      <p className="mb-2 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-brand/90 md:block">
        03 · 切り替え
      </p>
      <h3 className="mb-3 text-xl font-semibold text-[var(--site-fg)]">
        切り替えて理解する
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-[var(--site-fg-muted)]">
        タブで視点を変えながら読めます。長い説明を一気に並べず、必要なところだけ開けます。
      </p>

      <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
        <Tab.List className="mb-4 flex gap-4 border-b border-[var(--site-border)]">
          {panels.map((panel) => (
            <Tab as={Fragment} key={panel.name}>
              {({ selected }) => (
                <button
                  type="button"
                  className={`relative pb-2 text-sm font-semibold focus:outline-none ${
                    selected
                      ? '-mb-px border-b-2 border-brand text-[var(--site-fg)]'
                      : 'text-[var(--site-fg-muted)] hover:text-[var(--site-fg)]'
                  }`}
                >
                  {panel.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>

        <div className="relative min-h-[160px] flex-1 overflow-hidden rounded-lg">
          {panels.map((panel, index) => (
            <div
              key={panel.name}
              className="absolute inset-0"
              style={{
                opacity: index === tabIndex ? 1 : 0,
                transition: `opacity ${fadeMs}ms ease`,
                pointerEvents: 'none',
              }}
              aria-hidden={index !== tabIndex}
            >
              <Image
                src={panel.image}
                alt={index === tabIndex ? panel.imageAlt : ''}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          ))}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)]/92 via-[var(--site-bg)]/55 to-[var(--site-bg)]/20"
            aria-hidden
          />
          <Tab.Panels className="relative z-10 flex h-full min-h-[160px] items-end p-4">
            {panels.map((panel) => (
              <Tab.Panel
                key={panel.name}
                className="w-full text-sm leading-relaxed text-[var(--site-fg)] outline-none focus:outline-none"
              >
                {panel.body}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}

export function InteractionShowcaseContent() {
  return (
    <AsymmetricFeatureGrid
      primary={<MotionPanel featured />}
      secondary={[
        <ModalPanel key="modal" featured={false} />,
        <InteractionPanel key="interaction" />,
      ]}
    />
  )
}

export function InteractionShowcase() {
  return (
    <ServiceSectionShell
      tone="interactive"
      title="ここで触ってみる"
      align="left"
      emphasis="feature"
      contentBleed
    >
      <InteractionShowcaseContent />
    </ServiceSectionShell>
  )
}
