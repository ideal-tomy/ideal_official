import type { ReactNode } from 'react'
import type { CardData } from '@/components/sections/ThreeCardSection'
import type { TabData } from '@/types/service'

export type ThreeCardsSectionData = {
  cards: CardData[]
}

export type TwoColumnSectionData = {
  leftContent: ReactNode
  rightContent: ReactNode
}

export type TabsSectionData = {
  tabs: TabData[]
  defaultTab: string
}

export function getThreeCardsData(data: unknown): ThreeCardsSectionData {
  const section = data as ThreeCardsSectionData & { type?: string }
  if (section && Array.isArray(section.cards)) {
    return { cards: section.cards }
  }
  return { cards: [] }
}

export function getTwoColumnData(data: unknown): TwoColumnSectionData {
  return data as TwoColumnSectionData
}

export function getTabsData(data: unknown): TabsSectionData {
  return data as TabsSectionData
}
