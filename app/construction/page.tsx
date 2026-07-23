import type { Metadata } from 'next'
import { ConstructionHubView } from '@/components/construction/ConstructionHubView'

export const metadata: Metadata = {
  title: '建設の記録デモ（3体験）| ideal',
  description:
    '撮る→整える→報告・管理に載せる。建設現場の写真分類・報告書下書き・現場オペを体験できます。',
  openGraph: {
    title: '建設の記録デモ（3体験）| ideal',
    description:
      '撮る→整える→報告・管理に載せる。建設現場の写真分類・報告書下書き・現場オペを体験できます。',
  },
}

export default function ConstructionHubPage() {
  return <ConstructionHubView />
}
