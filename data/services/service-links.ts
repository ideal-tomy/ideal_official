import type { FlowAnswer, IdealTrack } from '@/lib/concierge/ideal-flow'
import { resolveEffectiveTrack } from '@/lib/concierge/ideal-flow'
import { ServiceLinkData } from '@/types/service'

/** 製作サブ分類（コンシェルジュ・関連リンク用） */
export const serviceNavLinks: ServiceLinkData[] = [
  { id: 'web-development', name: 'Webサイト・LP制作', href: '/services#web' },
  { id: 'app-development', name: 'Webアプリ・業務ツール開発', href: '/services#app' },
  { id: 'ai-consulting', name: 'AIプロトタイプ・自動化', href: '/services#ai' },
]

/** Footer 用（相談・設計 / 製作 + 深リンク） */
export const headerFooterServiceLinks: { href: string; label: string }[] = [
  { href: '/services#overview-consult', label: '相談・設計' },
  { href: '/services#build', label: '製作' },
  { href: '/services#web', label: 'Webサイト・LP' },
  { href: '/services#ai', label: 'AI開発' },
  { href: '/services#app', label: 'アプリ開発' },
]

/** Footer LAB 欄など、研究・深掘り系リンク */
export const labNavLinks: { href: string; label: string }[] = [
  { href: '/lab', label: 'LAB トップ' },
  { href: '/lab/insights', label: '解説記事' },
  { href: '/#articles', label: '現場の記事' },
  { href: '/philosophy', label: 'DAO思想' },
  { href: '/research', label: '技術提案デモ' },
  { href: '/lab/blockchain', label: 'Blockchain（DAO研究）' },
  { href: '/lab/metaverse', label: 'Spatial / VR・AR' },
]

/** RelatedServicesSection 等で使う共通リンク（旧 serviceLinks 互換） */
export const serviceLinks: ServiceLinkData[] = serviceNavLinks

export const SERVICE_IDS = {
  web: 'web-development',
  app: 'app-development',
  ai: 'ai-consulting',
  blockchain: 'blockchain-development',
  metaverse: 'metaverse',
} as const

export type ServiceId = (typeof SERVICE_IDS)[keyof typeof SERVICE_IDS]

const TRACK_TO_SERVICE_ID: Record<Exclude<IdealTrack, 'unsure'>, ServiceId> = {
  web: SERVICE_IDS.web,
  app: SERVICE_IDS.app,
  ai: SERVICE_IDS.ai,
  bc: SERVICE_IDS.blockchain,
}

/** コンシェルジュ完了時の contact ?service= 用 */
export function getServiceIdForConciergeTrack(
  track: IdealTrack,
  answers: FlowAnswer[],
): ServiceId {
  const effective = resolveEffectiveTrack(track, answers)
  if (effective === 'unsure') {
    return SERVICE_IDS.web
  }
  return TRACK_TO_SERVICE_ID[effective]
}

export function getServiceHrefForConciergeTrack(
  track: IdealTrack,
  answers: FlowAnswer[],
): string {
  const id = getServiceIdForConciergeTrack(track, answers)
  if (id === SERVICE_IDS.blockchain) {
    return '/lab/blockchain'
  }
  const row = serviceNavLinks.find((s) => s.id === id)
  return row?.href ?? '/services#web'
}

export function getServiceLabelForConciergeTrack(
  track: IdealTrack,
  answers: FlowAnswer[],
): string {
  return getServiceLabel(getServiceIdForConciergeTrack(track, answers))
}

/** サービスページからコンシェルジュを開くときのトラックヒント */
export function serviceIdToIdealTrack(serviceId: string): IdealTrack | null {
  switch (serviceId) {
    case SERVICE_IDS.web:
      return 'web'
    case SERVICE_IDS.app:
      return 'app'
    case SERVICE_IDS.ai:
      return 'ai'
    case SERVICE_IDS.blockchain:
      return 'bc'
    case SERVICE_IDS.metaverse:
      return 'bc'
    default:
      return null
  }
}

export const getServiceLabel = (id: string): string => {
  if (id === SERVICE_IDS.blockchain) {
    return 'Blockchain / DAO'
  }
  if (id === SERVICE_IDS.metaverse) {
    return 'Spatial / VR・AR'
  }
  const found = serviceNavLinks.find((s) => s.id === id)
  return found?.name ?? id
}

const HASH_TO_SERVICE_ID: Record<string, string> = {
  web: 'web-development',
  app: 'app-development',
  ai: 'ai-consulting',
  'build-web': 'web-development',
  'build-app': 'app-development',
  'build-ai': 'ai-consulting',
}

export const getCurrentServiceId = (
  pathname: string,
  hash = '',
): string | undefined => {
  const normalizedHash = hash.replace(/^#/, '')
  if (HASH_TO_SERVICE_ID[normalizedHash]) {
    return HASH_TO_SERVICE_ID[normalizedHash]
  }

  const pathSegments = pathname.split('/')
  const servicePath = pathSegments[pathSegments.length - 1]

  switch (servicePath) {
    case 'ai-consulting':
      return 'ai-consulting'
    case 'web-development':
      return 'web-development'
    case 'app-development':
      return 'app-development'
    case 'blockchain-development':
      return 'blockchain-development'
    case 'metaverse':
      return 'metaverse'
    case 'dao-design':
      return 'blockchain-development'
    case 'services':
      return undefined
    default:
      return undefined
  }
}
