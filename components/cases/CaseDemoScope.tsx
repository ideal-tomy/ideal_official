import type { CaseStudy } from '@/data/cases'
import { CaseFoldSection } from '@/components/cases/CaseFoldSection'

type CaseDemoScopeProps = {
  demoScope: CaseStudy['demoScope']
  hasExternalDemo: boolean
}

export function CaseDemoScope({
  demoScope,
  hasExternalDemo,
}: CaseDemoScopeProps) {
  return (
    <CaseFoldSection title="デモで分かること">
      <p className="mb-5 text-sm leading-relaxed text-[var(--site-fg)]/85 md:mb-8 md:text-base">
        触れる範囲と、まだ触れない範囲を分けて書いています。期待値を揃えるためのメモです。
      </p>

      <div className="grid gap-3 md:grid-cols-2 md:gap-5">
        <div className="rounded-xl border border-brand/25 bg-brand/5 p-4 md:rounded-2xl md:p-6">
          <p className="mb-1.5 text-xs font-medium text-brand/90">
            簡易デモ
          </p>
          <p className="mb-3 text-sm font-semibold text-[var(--site-fg)]">
            ここで体験できること
          </p>
          <p className="text-sm leading-relaxed text-[var(--site-fg)]/90">
            {demoScope.simpleShows}
          </p>
          <div className="mt-4 border-t border-brand/20 pt-3 md:mt-5 md:pt-4">
            <p className="mb-1.5 text-xs font-medium text-[var(--site-fg-muted)]">
              含めないこと
            </p>
            <p className="text-sm leading-relaxed text-[var(--site-fg)]/80">
              {demoScope.simpleLimits}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] p-4 md:rounded-2xl md:p-6">
          <p className="mb-1.5 text-xs font-medium text-[var(--site-fg-muted)]">
            業務デモ
          </p>
          <p className="mb-3 text-sm font-semibold text-[var(--site-fg)]">
            {hasExternalDemo && demoScope.externalShows
              ? '画面寄りの体験'
              : 'このページでの位置づけ'}
          </p>
          <p className="text-sm leading-relaxed text-[var(--site-fg)]/90">
            {demoScope.externalShows ??
              '業務アプリ寄りの外部デモは、このテーマでは未掲載です。簡易デモと相談で進め方を確認できます。'}
          </p>
        </div>
      </div>
    </CaseFoldSection>
  )
}
