'use client'

import { useEffect, useRef } from 'react'

type Props = {
  html: string
}

/** 公開記事の本文幅・図幅・段階見出し。各記事CSSの上に載せる。 */
const RHYTHM_CSS = `
:host{
  display:block;
  width:100%;
  background:var(--paper, var(--bg, #fff));
  color:var(--ink, inherit);
  overflow-x:clip;
}
.wrap{
  max-width:940px !important;
  overflow:visible;
}
.col{
  max-width:620px !important;
}
.figure{
  width:min(900px, calc(100vw - 40px)) !important;
  max-width:min(900px, calc(100vw - 40px)) !important;
  margin:0 0 2.5em !important;
}
.figure + p{
  margin-bottom:2.2em;
}
.figure + p + .sec,
.figure + p + .phase,
.figure + p + h2{
  margin-top:1.2em;
}
.phase{
  margin-top:4.75em !important;
  margin-bottom:1.85em !important;
  padding-top:1.4em !important;
}
.phase h2{
  font-size:clamp(26px, 3.5vw, 34px) !important;
}
@media (max-width:640px){
  .figure{
    width:calc(100vw - 36px) !important;
    max-width:calc(100vw - 36px) !important;
  }
  .phase{
    margin-top:3.4em !important;
  }
  .phase h2{
    font-size:24px !important;
  }
}
`

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
${RHYTHM_CSS}
</style>${body}`
  }, [html])

  return <div ref={hostRef} className="article-shadow-host w-full" />
}
