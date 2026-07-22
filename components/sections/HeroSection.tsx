import { HeroSectionProps } from '../../types/service'
import { PageHero } from './PageHero'

/**
 * 下層ページ用ヒーロー（トップと同設定）
 */
export function HeroSection({
  title,
  subText,
  className = '',
  overlapHeader = true,
}: HeroSectionProps) {
  return (
    <PageHero
      title={title}
      description={subText}
      className={className}
      overlapHeader={overlapHeader}
    />
  )
}
