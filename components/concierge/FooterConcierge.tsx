'use client'

// Footer 直前までスクロールした人へのあいさつ（直リンクチップ・チャット起動なし）

import { useEffect, useRef, useState } from 'react'
import { ConciergeRobot, CONCIERGE_ROBOT_CSS } from './ConciergeRobot'
import { useConcierge } from './concierge-context'

const GREETING =
  'ここまで見てくれて、ありがとう。せっかくなので、何か触っていきませんか？'

const CHIPS: { label: string; href: string }[] = [
  { label: 'デモを触る', href: '/ai-capability-gallery' },
  { label: '概算を出す', href: '/estimate' },
  { label: '相談する', href: '/contact' },
]

const SESSION_KEY = 'ideal_greeted'

export function FooterConcierge() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const { setFooterGreetingVisible, open } = useConcierge()
  const [show, setShow] = useState(false)
  const [typed, setTyped] = useState('')
  const [showChips, setShowChips] = useState(false)
  const [talking, setTalking] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) {
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          try {
            sessionStorage.setItem(SESSION_KEY, '1')
          } catch {
            /* ignore */
          }
          io.disconnect()
        }
      },
      { threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    setFooterGreetingVisible(show && !open)
  }, [show, open, setFooterGreetingVisible])

  useEffect(() => {
    if (!show) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setTyped(GREETING)
      setShowChips(true)
      return
    }
    setTalking(true)
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setTyped(GREETING.slice(0, i))
      if (i >= GREETING.length) {
        clearInterval(timer)
        setTalking(false)
        setShowChips(true)
      }
    }, 34)
    return () => clearInterval(timer)
  }, [show])

  const dismiss = () => {
    setShow(false)
    setFooterGreetingVisible(false)
  }

  // 案内パネルが開いているときはフッターあいさつを隠す
  const visible = show && !open

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

          <div className="ideal-bubble">
            <button
              type="button"
              className="ideal-close"
              aria-label="閉じる"
              onClick={dismiss}
            >
              ×
            </button>
            <p className="ideal-text">{typed}</p>
            <div
              className="ideal-chips"
              style={{ opacity: showChips ? 1 : 0 }}
            >
              {CHIPS.map((c) => (
                <a key={c.label} className="ideal-chip" href={c.href}>
                  {c.label}
                </a>
              ))}
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
.ideal-bubble{position:absolute;left:112px;bottom:112px;max-width:212px;background:#17191d;border:.5px solid #2b2f36;border-radius:14px;border-bottom-left-radius:4px;padding:13px 15px;pointer-events:auto;animation:ideal-pop .4s ease .56s both;}
.ideal-text{margin:0;font-size:13px;line-height:1.6;color:#eaeaea;min-height:44px;}
.ideal-close{position:absolute;top:6px;right:8px;background:none;border:none;color:#6a6a6a;font-size:16px;line-height:1;cursor:pointer;padding:2px;}
.ideal-close:hover{color:#cfcfcf;}
.ideal-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px;transition:opacity .4s ease;}
.ideal-chip{font-size:12px;color:#dcdcdc;text-decoration:none;border:.5px solid #3a3d44;border-radius:14px;padding:5px 11px;transition:all .18s ease;}
.ideal-chip:hover{border-color:#ff521c;color:#ff8a5c;}
@keyframes ideal-rise{from{transform:translateY(135%)}to{transform:translateY(0)}}
@keyframes ideal-pop{from{opacity:0;transform:translateY(14px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
@media (prefers-reduced-motion:reduce){
  .ideal-charwrap,.ideal-bubble{animation:none!important;opacity:1!important;transform:none!important;}
}
@media (max-width:480px){
  .ideal-greet{width:min(340px,calc(100vw - 24px));left:12px;bottom:12px;}
}
`
