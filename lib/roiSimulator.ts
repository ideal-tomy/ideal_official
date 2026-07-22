/**
 * roi-simulator フル版への同一タブ導線。
 * ORIGIN は NEXT_PUBLIC_ROI_SIMULATOR_URL（末尾スラッシュなし）。
 */

export function getRoiSimulatorOrigin(): string | null {
  const raw = process.env.NEXT_PUBLIC_ROI_SIMULATOR_URL?.trim()
  if (!raw) return null
  return raw.replace(/\/$/, '')
}

export function buildRoiSimulatorHref(opts?: {
  kit?: string
}): string | null {
  const origin = getRoiSimulatorOrigin()
  if (!origin) return null
  const q = new URLSearchParams()
  q.set('brand', 'ideal')
  q.set('from', 'ideal-site')
  if (opts?.kit) q.set('kit', opts.kit)
  return `${origin}/?${q.toString()}`
}
