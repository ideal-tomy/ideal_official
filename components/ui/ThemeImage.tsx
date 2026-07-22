import Image, { type ImageProps } from 'next/image'
import { toLightImagePath } from '@/lib/theme-image'

type ThemeImageProps = Omit<ImageProps, 'src'> & {
  src: string
}

/**
 * html.light / html.dark に応じて画像を切り替え。
 * `/images/lp/*` は同名の `_light` 版があればライトモードで表示する。
 */
export function ThemeImage({ src, className = '', alt, priority, ...props }: ThemeImageProps) {
  const lightSrc = toLightImagePath(src)

  if (!lightSrc) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        priority={priority}
        {...props}
      />
    )
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`theme-img-dark ${className}`.trim()}
        priority={priority}
        {...props}
      />
      <Image
        src={lightSrc}
        alt={alt}
        className={`theme-img-light ${className}`.trim()}
        priority={false}
        {...props}
      />
    </>
  )
}
