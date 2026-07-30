import { whatWeBuild, webProcessSteps } from '@/data/services/web-hub'
import { ServiceProcessSteps } from '@/components/services/ServiceProcessSteps'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export function WebWhatWeBuild() {
  return (
    <ServiceSectionShell
      surface="default"
      title="こんなサイトが作れます"
      lead="会社の顔になるサイトから、申込・会員まで。よくご依頼いただく型です。"
      maxWidth="5xl"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {whatWeBuild.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] p-6 shadow-[var(--service-card-shadow)]"
          >
            <h3 className="mb-2 text-lg font-semibold text-[var(--site-fg)]">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </ServiceSectionShell>
  )
}

export function WebProcess() {
  return (
    <ServiceProcessSteps
      lead="質感を先に合わせ、設計・実装、公開後の改善まで伴走します。"
      steps={webProcessSteps}
      surface="elevated"
    />
  )
}
