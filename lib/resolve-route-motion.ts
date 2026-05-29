import type { RouteMotionVariant } from './motion-tokens'

/**
 * Resolve page transition variant from pathname.
 * 全ページ共通でふわっと crossfade。
 */
export function resolveRouteMotion(_pathname: string): RouteMotionVariant {
  return 'crossfade'
}
