import { whatWeBuild } from '@/data/services/ai-hub'
import { AiWhatWeBuildCards } from '@/components/services/ai-hub/AiWhatWeBuildCards'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

export function AiWhatWeBuild() {
  return (
    <ServiceSectionShell
      surface="default"
      headingLevel="h3"
      title="こんなAI活用ツールが作れます"
      lead="業務への組み込みから、ワークフロー設計、Web・アプリ連携まで。よくご依頼いただく型です。"
      maxWidth="5xl"
    >
      <AiWhatWeBuildCards items={whatWeBuild} />
    </ServiceSectionShell>
  )
}
