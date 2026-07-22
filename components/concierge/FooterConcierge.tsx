'use client'

// Footer 直前までスクロールした人へのあいさつ（ページごと1回・直リンクチップ）
// ①ありがとう吹き出し → クロスフェード → ②ボタンのみ吹き出し

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ConciergeRobot, CONCIERGE_ROBOT_CSS } from './ConciergeRobot'
import { useConcierge } from './concierge-context'
import {
  FOOTER_CHIP_DELAY_MS,
  footerGreetedStorageKey,
  getFooterPrompt,
} from '@/lib/concierge/guide/footer-prompts'

type BubblePhase = 'thanks' | 'chips'

export function FooterConcierge() {
  const pathname = usePathname() ?? '/'
  const sentinelRef = useRef<HTMLDivElement>(null)
  const { setFooterGreetingVisible, open, welcomeVisible, welcomeReady } =
    useConcierge()
  const [show, setShow] = useState(false)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState<BubblePhase>('thanks')
  const [talking, setTalking] = useState(false)

  const prompt = getFooterPrompt(pathname)

  useEffect(() => {
    setShow(false)
    setTyped('')
    setPhase('thanks')
    setTalking(false)
    setFooterGreetingVisible(false)
  }, [pathname, setFooterGreetingVisible])

  useEffect(() => {
    const el = sentinelRef.current
    if (!el || !prompt.enabled) return
    if (!welcomeReady || welcomeVisible) return

    let already = false
    try {
      already = Boolean(sessionStorage.getItem(footerGreetedStorageKey(pathname)))
    } catch {
      already = false
    }
    if (already) return

    let triggered = false
    const trigger = () => {
      if (triggered) return
      triggered = true
      setShow(true)
      try {
        sessionStorage.setItem(footerGreetedStorageKey(pathname), '1')
      } catch {
        /* ignore */
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trigger()
          io.disconnect()
        }
      },
      { threshold: 0 },
    )
    io.observe(el)

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      trigger()
      io.disconnect()
    }

    return () => io.disconnect()
  }, [pathname, prompt.enabled, welcomeReady, welcomeVisible])

  useEffect(() => {
    setFooterGreetingVisible(show && !open && !welcomeVisible)
  }, [show, open, welcomeVisible, setFooterGreetingVisible])

  useEffect(() => {
    if (!show || !prompt.enabled) return

    const greeting = prompt.greeting
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let chipTimer: ReturnType<typeof setTimeout> | undefined
    let typeTimer: ReturnType<typeof setInterval> | undefined

    const goToChips = () => setPhase('chips')

    if (reduce) {
      setTyped(greeting)
      chipTimer = setTimeout(goToChips, 400)
      return () => {
        if (chipTimer) clearTimeout(chipTimer)
      }
    }

    setPhase('thanks')
    setTalking(true)
    let i = 0
    typeTimer = setInterval(() => {
      i += 1
      setTyped(greeting.slice(0, i))
      if (i >= greeting.length) {
        if (typeTimer) clearInterval(typeTimer)
        setTalking(false)
        chipTimer = setTimeout(goToChips, FOOTER_CHIP_DELAY_MS)
      }
    }, 34)

    return () => {
      if (typeTimer) clearInterval(typeTimer)
      if (chipTimer) clearTimeout(chipTimer)
    }
  }, [show, prompt.greeting, prompt.enabled])

  const dismiss = () => {
    setShow(false)
    setFooterGreetingVisible(false)
  }

  const visible = show && !open && !welcomeVisible && prompt.enabled

  return (
    <>
      <style>{footerCss}</style>
      <div ref={sentinelRef} aria-hidden style={{ height: 1 }} />

      {visible ? (
        <div
          className="ideal-greet"
          role="dialog"
          aria-label="コンシェルジュからのメッセージ"
        >
          <div className="ideal-charwrap">
            <ConciergeRobot talking={talking} size={104} />
          </div>

          <div className="ideal-bubble-stack">
            <button
              type="button"
              className="ideal-close"
              aria-label="閉じる"
              onClick={dismiss}
            >
              ×
            </button>

            {/* ① ありがとう */}
            <div
              className={`ideal-bubble ideal-bubble-panel${
                phase === 'thanks' ? ' is-active' : ' is-exit'
              }`}
              aria-hidden={phase !== 'thanks'}
            >
              <p className="ideal-text">{typed}</p>
            </div>

            {/* ② ボタンのみ */}
            <div
              className={`ideal-bubble ideal-bubble-panel ideal-bubble-chips${
                phase === 'chips' ? ' is-active' : ' is-idle'
              }`}
              aria-hidden={phase !== 'chips'}
            >
              <div className="ideal-chips">
                {prompt.chips.map((c) => (
                  <a key={c.label} className="ideal-chip" href={c.href}>
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

const footerCss = `
${CONCIERGE_ROBOT_CSS}
.ideal-greet{position:fixed;left:20px;bottom:20px;z-index:50;width:340px;height:240px;pointer-events:none;font-family:var(--font-noto-sans-jp),system-ui,sans-serif;}
.ideal-charwrap{position:absolute;left:0;bottom:0;width:104px;height:104px;animation:ideal-rise .6s cubic-bezier(.34,1.4,.5,1) both;pointer-events:none;}
.ideal-bubble-stack{position:absolute;left:112px;bottom:112px;display:grid;width:max-content;max-width:220px;min-width:160px;pointer-events:none;}
.ideal-bubble{background:#17191d;border:.5px solid #2b2f36;border-radius:14px;border-bottom-left-radius:4px;padding:13px 15px;box-sizing:border-box;}
.ideal-bubble-panel{grid-area:1/1;width:100%;min-width:160px;transition:opacity .45s ease,transform .45s ease;pointer-events:none;}
.ideal-bubble-panel.is-active{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;z-index:2;}
.ideal-bubble-panel.is-exit{opacity:0;transform:translateY(-6px) scale(.98);z-index:1;}
.ideal-bubble-panel.is-idle{opacity:0;transform:translateY(8px) scale(.98);z-index:1;}
.ideal-bubble-chips{padding:12px 12px;}
.ideal-text{margin:0;font-size:13px;line-height:1.6;color:#eaeaea;}
.ideal-close{position:absolute;top:-6px;right:-6px;z-index:5;background:#17191d;border:.5px solid #2b2f36;border-radius:999px;color:#6a6a6a;font-size:14px;line-height:1;cursor:pointer;padding:2px 7px;pointer-events:auto;}
.ideal-close:hover{color:#cfcfcf;}
.ideal-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0;}
.ideal-chip{font-size:12px;font-weight:700;color:#fff;text-decoration:none;background:#FF521C;border:none;border-radius:14px;padding:7px 12px;transition:filter .18s ease,transform .18s ease;}
.ideal-chip:hover{filter:brightness(1.08);transform:translateY(-1px);color:#fff;}
@keyframes ideal-rise{from{transform:translateY(135%)}to{transform:translateY(0)}}
@media (prefers-reduced-motion:reduce){
  .ideal-charwrap{animation:none!important;opacity:1!important;transform:none!important;}
  .ideal-bubble-panel{transition:none!important;}
  .ideal-bubble-panel.is-exit,.ideal-bubble-panel.is-idle{visibility:hidden;}
  .ideal-bubble-panel.is-active{opacity:1!important;transform:none!important;}
}
@media (max-width:480px){
  .ideal-greet{width:min(340px,calc(100vw - 24px));left:12px;bottom:12px;}
}
`
