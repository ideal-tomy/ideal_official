import type { CaseStudy } from '@/data/cases'

type CaseDemoScopeProps = {
  demoScope: CaseStudy['demoScope']
  hasExternalDemo: boolean
}

export function CaseDemoScope({
  demoScope,
  hasExternalDemo,
}: CaseDemoScopeProps) {
  return (
    <section className="border-b border-[var(--site-border)] py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          Demo scope
        </p>
        <h2 className="mb-3 text-2xl font-bold text-[var(--site-fg)] md:text-3xl">
          デモで分かること
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-base">
          触れる範囲と、まだ触れない範囲を分けて書いています。期待値を揃えるためのメモです。
        </p>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <div className="rounded-2xl border border-brand/25 bg-brand/5 p-5 md:p-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-brand/90">
              簡易デモ
            </p>
            <p className="mb-4 text-sm font-semibold text-[var(--site-fg)]">
              ここで体験できること
            </p>
            <p className="text-sm leading-relaxed text-[var(--site-fg)]/85">
              {demoScope.simpleShows}
            </p>
            <div className="mt-5 border-t border-brand/20 pt-4">
              <p className="mb-2 text-xs font-medium text-[var(--site-fg-muted)]">
                含めないこと
              </p>
              <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">
                {demoScope.simpleLimits}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] p-5 md:p-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
              業務デモ
            </p>
            <p className="mb-4 text-sm font-semibold text-[var(--site-fg)]">
              {hasExternalDemo && demoScope.externalShows
                ? '画面寄りの体験'
                : 'このページでの位置づけ'}
            </p>
            <p className="text-sm leading-relaxed text-[var(--site-fg)]/85">
              {demoScope.externalShows ??
                '業務アプリ寄りの外部デモは、このテーマでは未掲載です。簡易デモと相談で進め方を確認できます。'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
