'use client'

import { useState } from 'react'
import type { FinalCtaBlock, BrandConfig } from '@/lib/demo-lp/types'
import { DemoLpCtaLink } from './DemoLpCtaLink'

export function DemoLpFinalForm({
  block,
  brand,
  demoSlug,
}: {
  block: FinalCtaBlock
  brand: BrandConfig
  demoSlug: string
}) {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const params = new URLSearchParams()
    params.set('service', 'ai-consulting')
    params.set('intent', 'demo-lp')
    params.set('demo', demoSlug)
    const company = String(fd.get('company') || '')
    const name = String(fd.get('name') || '')
    const email = String(fd.get('email') || '')
    const message = String(fd.get('message') || '')
    params.set(
      'note',
      [`会社: ${company}`, `名前: ${name}`, `email: ${email}`, message]
        .filter(Boolean)
        .join('\n'),
    )
    // contact へ誘導（サイト既存ルート）
    window.location.href = `${brand.form.endpoint}?${params.toString()}`
    setStatus('sent')
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[var(--lp-ink)] py-14 text-white md:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl [text-wrap:balance]">
          {block.headline}
        </h2>
        <p className="mb-6 text-white/80 leading-relaxed">{block.body}</p>
        <ul className="mb-8 flex flex-wrap gap-3 text-sm text-white/75">
          {block.assurances.map((a) => (
            <li
              key={a}
              className="rounded-full border border-white/20 px-3 py-1"
            >
              {a}
            </li>
          ))}
        </ul>

        <div className="mb-8">
          <DemoLpCtaLink
            cta={{ ...block.tryCta, variant: 'secondary' }}
            className="!bg-white !text-[var(--lp-ink)]"
          />
        </div>

        <div className="rounded-2xl bg-white p-6 text-[var(--lp-ink)] shadow-lg md:p-8">
          <h3 className="mb-1 text-lg font-bold">{block.formTitle}</h3>
          <p className="mb-6 text-sm text-[var(--lp-ink)]/65">{block.formNote}</p>
          {status === 'sent' ? (
            <p className="text-sm">送信画面へ移動します…</p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {block.fields.map((field) => {
                if (field.type === 'checkbox') {
                  return (
                    <label
                      key={field.key}
                      className="flex items-start gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        name={field.key}
                        required={field.required}
                        className="mt-1 accent-[var(--lp-primary)]"
                      />
                      <span>
                        {field.label}（
                        <a
                          href={brand.form.privacyUrl}
                          className="text-[var(--lp-primary)] underline"
                        >
                          プライバシーポリシー
                        </a>
                        ）
                      </span>
                    </label>
                  )
                }
                if (field.type === 'textarea') {
                  return (
                    <label key={field.key} className="block text-sm">
                      <span className="mb-1 block font-medium">
                        {field.label}
                      </span>
                      <textarea
                        name={field.key}
                        required={field.required}
                        placeholder={field.placeholder}
                        rows={3}
                        className="w-full rounded-lg border border-[var(--lp-ink)]/15 px-3 py-2"
                      />
                    </label>
                  )
                }
                return (
                  <label key={field.key} className="block text-sm">
                    <span className="mb-1 block font-medium">{field.label}</span>
                    <input
                      type={field.type}
                      name={field.key}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border border-[var(--lp-ink)]/15 px-3 py-2"
                    />
                  </label>
                )
              })}
              <button
                type="submit"
                className="w-full rounded-lg bg-[var(--lp-primary)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                相談する
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
