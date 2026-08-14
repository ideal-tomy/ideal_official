import { whatWeBuild, webProcessSteps } from '@/data/services/web-hub'
import { ServiceProcessSteps } from '@/components/services/ServiceProcessSteps'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'
import { WhatWeBuildCards } from '@/components/services/WhatWeBuildCards'

export function WebWhatWeBuild() {
  return (
    <ServiceSectionShell
      surface="default"
      headingLevel="h3"
      title="こんなサイトが作れます"
      lead="会社の顔になるサイトから、申込・会員まで。よくご依頼いただく型です。"
      maxWidth="5xl"
    >
      <WhatWeBuildCards items={whatWeBuild} />
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
