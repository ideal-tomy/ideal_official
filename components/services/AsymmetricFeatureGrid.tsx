import type { ReactNode } from 'react'

type AsymmetricFeatureGridProps = {
  primary: ReactNode
  secondary: [ReactNode, ReactNode]
}

/**
 * 主役1 + サブ2 の非対称グリッド
 * PC: 左にサブ2（密度高）、右に主役1 / SP: 主役 → サブ
 */
export function AsymmetricFeatureGrid({
  primary,
  secondary,
}: AsymmetricFeatureGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)] lg:grid-rows-2 lg:items-stretch">
      <div className="flex h-full min-h-0 flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1">
        {primary}
      </div>
      <div className="flex min-h-0 flex-col lg:col-start-1 lg:row-start-1">
        {secondary[0]}
      </div>
      <div className="flex min-h-0 flex-col lg:col-start-1 lg:row-start-2">
        {secondary[1]}
      </div>
    </div>
  )
}
