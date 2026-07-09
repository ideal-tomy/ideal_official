import type { ReactNode } from 'react'

export type ServiceModalPack =
  | 'ai'
  | 'app-development'
  | 'blockchain'
  | 'metaverse'

/**
 * サービスページのモーダル本文を、開いた瞬間だけ動的 import する。
 * 初期バンドルから巨大な modalContent JSX を外すためのローダー。
 */
export async function loadServiceModal(
  pack: ServiceModalPack,
  id: string,
): Promise<ReactNode> {
  switch (pack) {
    case 'ai': {
      const { modalContents } = await import('@/data/services/modals/ai')
      return modalContents[id] ?? null
    }
    case 'app-development': {
      const { modalContents } = await import(
        '@/data/services/modals/app-development'
      )
      return modalContents[id] ?? null
    }
    case 'blockchain': {
      const { modalContents } = await import('@/data/services/modals/blockchain')
      return modalContents[id] ?? null
    }
    case 'metaverse': {
      const { modalContents } = await import('@/data/services/modals/metaverse')
      return modalContents[id] ?? null
    }
    default:
      return null
  }
}
