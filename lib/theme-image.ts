/**
 * `/images/lp/foo.png` → `/images/lp/foo_light.png`
 * lp 以外、または既に _light 付きなら null
 */
export function toLightImagePath(src: string): string | null {
  if (!src.includes('/images/lp/')) return null
  if (/_light\.[^.]+$/i.test(src)) return null
  const dot = src.lastIndexOf('.')
  if (dot < 0) return null
  return `${src.slice(0, dot)}_light${src.slice(dot)}`
}
