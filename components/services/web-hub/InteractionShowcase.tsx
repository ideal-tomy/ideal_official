'use client'

import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Modal } from '@/components/ui/Modal'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

function ModalPanel() {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 h-full flex flex-col">
      <p className="text-xs tracking-[0.16em] text-cyan-400/90 mb-2">01 · Modal</p>
      <h3 className="text-xl font-semibold text-white mb-3">開いて、閉じる体験</h3>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-1">
        詳細はページ遷移ではなく、その場で開く。このサイトのサービス説明や技術詳細でも同じ仕組みを使っています。
      </p>
      <Modal
        buttonText="モーダルを開く"
        title="Premium Dialog"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            このダイアログは framer-motion 付きの PremiumDialog です。開いたときだけマウントし、初期表示を軽く保ちます。
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              オーバーレイのフェードイン
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              パネルの出現タイミング制御
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              Esc / 外側クリックで閉じる
            </li>
          </ul>
          <p className="text-xs text-cyan-400/80 pt-2 border-t border-gray-700">
            使用箇所: サービスカード詳細、Under the Hood、各種説明モーダル
          </p>
        </div>
      </Modal>
    </div>
  )
}

function MotionPanel() {
  const prefersReduced = usePrefersReducedMotion()
  const [key, setKey] = useState(0)

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 h-full flex flex-col">
      <p className="text-xs tracking-[0.16em] text-cyan-400/90 mb-2">02 · Motion</p>
      <h3 className="text-xl font-semibold text-white mb-3">意図のある動き</h3>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        常時動かさず、再生したときだけ印象づける。ページ遷移や Hero でも同じ思想です。
      </p>

      <div className="relative flex-1 min-h-[140px] rounded-lg border border-gray-700 bg-black/60 overflow-hidden mb-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReduced ? 0 : 0.45, ease: [0.33, 1, 0.68, 1] }}
            className="px-6 py-4 rounded-lg border border-blue-400/30 bg-blue-500/10 text-center"
          >
            <p className="text-sm font-medium text-white">Fade &amp; Rise</p>
            <p className="text-xs text-gray-400 mt-1">再生 #{key + 1}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => setKey((k) => k + 1)}
        className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
      >
        モーションを再生
      </button>
    </div>
  )
}

function InteractionPanel() {
  const [tabIndex, setTabIndex] = useState(0)
  const panels = [
    {
      name: '構成',
      body: '情報設計とセクションの役割分担。このページも Hero → Showcase → Build → Hood の流れです。',
    },
    {
      name: 'UI',
      body: 'タブ・カード・アコーディオンなど、触って理解できる部品を組み合わせます。',
    },
    {
      name: '実装',
      body: '見た目だけでなく、開閉コストやモバイル操作まで含めて作り込みます。',
    },
  ]

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 h-full flex flex-col">
      <p className="text-xs tracking-[0.16em] text-cyan-400/90 mb-2">03 · Interaction</p>
      <h3 className="text-xl font-semibold text-white mb-3">切り替えて理解する</h3>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        タブで視点を変えながら読む。サービスページの技術提供でも同じパターンを使っています。
      </p>

      <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
        <Tab.List className="flex gap-4 border-b border-gray-700 mb-4">
          {panels.map((panel) => (
            <Tab as={Fragment} key={panel.name}>
              {({ selected }) => (
                <button
                  type="button"
                  className={`pb-2 text-sm font-semibold focus:outline-none relative ${
                    selected
                      ? 'text-white border-b-2 border-blue-400 -mb-px'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {panel.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="flex-1">
          {panels.map((panel) => (
            <Tab.Panel key={panel.name} className="text-sm text-gray-300 leading-relaxed">
              {panel.body}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export function InteractionShowcase() {
  return (
    <section
      id="interaction-showcase"
      className="scroll-mt-24 bg-black py-16 lg:py-20 border-b border-blue-400/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Interaction Showcase
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            「実装できます」ではなく、ここで触ってください。Modal / Motion / Interaction の3つです。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-5">
          <ModalPanel />
          <MotionPanel />
          <InteractionPanel />
        </div>
      </div>
    </section>
  )
}
