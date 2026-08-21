'use client'

import { useEffect, useRef } from 'react'

type Props = {
  html: string
}

/**
 * 業界記事HTMLを Shadow DOM に隔離して描画する。
 * 記事固有の .hero / .wrap / .btn 等がサイトCSSと衝突しないようにする。
 */
export function ArticleShadowHost({ html }: Props) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let shadow = host.shadowRoot
    if (!shadow) {
      shadow = host.attachShadow({ mode: 'open' })
    }

    const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i)
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
    const rawStyle = styleMatch?.[1] ?? ''
    const body = bodyMatch?.[1] ?? html

    // Shadow CSS の :root / html / body は文書側を指す。
    // 記事の色変数（--shu, --green 等）と紙色が図に届くよう :host へ載せ替える。
    const style = rawStyle
      .replace(/:root\b/g, ':host')
      .replace(/\bhtml\s*,\s*body\b/g, ':host')
      .replace(/\bhtml\s*\{/g, ':host{')
      .replace(/\bbody\s*\{/g, ':host{')

    shadow.innerHTML = `<style>
:host{ display:block; }
${style}
</style>${body}`
  }, [html])

  return <div ref={hostRef} className="article-shadow-host w-full" />
}
