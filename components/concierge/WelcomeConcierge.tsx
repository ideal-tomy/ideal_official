'use client'

/**
 * サイト初回訪問のみ — 存在認知用の短いあいさつ（約3秒で自動消去）
 */

import { useEffect, useState } from 'react'
import { ConciergeRobot, CONCIERGE_ROBOT_CSS } from './ConciergeRobot'
import { useConcierge } from './concierge-context'
import {
  WELCOME_AUTO_DISMISS_MS,
  WELCOME_MESSAGE,
  WELCOME_STORAGE_KEY,
} from '@/lib/concierge/guide/footer-prompts'

export function WelcomeConcierge() {
  const { open, setWelcomeVisible, setWelcomeReady } = useConcierge()
  const [show, setShow] = useState(false)
  const [typed, setTyped] = useState('')
  const [talking, setTalking] = useState(false)

  useEffect(() => {
    let already = false
    try {
      already = Boolean(sessionStorage.getItem(WELCOME_STORAGE_KEY))
    } catch {
      already = false
    }

    if (already) {
      setWelcomeReady(true)
      return
    }

    setShow(true)
    setWelcomeVisible(true)
    try {
      sessionStorage.setItem(WELCOME_STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }, [setWelcomeReady, setWelcomeVisible])

  useEffect(() => {
    setWelcomeVisible(show && !open)
  }, [show, open, setWelcomeVisible])

  useEffect(() => {
    if (!show) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let dismissTimer: ReturnType<typeof setTimeout> | undefined
    let typeTimer: ReturnType<typeof setInterval> | undefined

    const finish = () => {
      setShow(false)
      setWelcomeVisible(false)
      setWelcomeReady(true)
    }

    // 表示開始から約3秒で消去（タイピングと並行）
    dismissTimer = setTimeout(finish, WELCOME_AUTO_DISMISS_MS)

    if (reduce) {
      setTyped(WELCOME_MESSAGE)
      return () => {
        if (dismissTimer) clearTimeout(dismissTimer)
      }
    }

    setTalking(true)
    let i = 0
    typeTimer = setInterval(() => {
      i += 1
      setTyped(WELCOME_MESSAGE.slice(0, i))
      if (i >= WELCOME_MESSAGE.length) {
        if (typeTimer) clearInterval(typeTimer)
        setTalking(false)
      }
    }, 40)

    return () => {
      if (typeTimer) clearInterval(typeTimer)
      if (dismissTimer) clearTimeout(dismissTimer)
    }
  }, [show, setWelcomeVisible, setWelcomeReady])

  const dismiss = () => {
    setShow(false)
    setWelcomeVisible(false)
    setWelcomeReady(true)
  }

  const visible = show && !open
  if (!visible) return null

  return (
    <>
      <style>{welcomeCss}</style>
      <div
        className="ideal-greet"
        role="status"
        aria-live="polite"
        aria-label="コンシェルジュからのあいさつ"
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
        </div>
      </div>
    </>
  )
}

const welcomeCss = `
${CONCIERGE_ROBOT_CSS}
.ideal-greet{position:fixed;left:20px;bottom:20px;z-index:50;width:340px;height:200px;pointer-events:none;font-family:var(--font-noto-sans-jp),system-ui,sans-serif;}
.ideal-charwrap{position:absolute;left:0;bottom:0;width:104px;height:104px;animation:ideal-rise .6s cubic-bezier(.34,1.4,.5,1) both;pointer-events:none;}
.ideal-bubble{position:absolute;left:112px;bottom:112px;max-width:212px;background:#17191d;border:.5px solid #2b2f36;border-radius:14px;border-bottom-left-radius:4px;padding:13px 15px;pointer-events:auto;animation:ideal-pop .4s ease .56s both;}
.ideal-text{margin:0;font-size:13px;line-height:1.6;color:#eaeaea;min-height:1.6em;}
.ideal-close{position:absolute;top:6px;right:8px;background:none;border:none;color:#6a6a6a;font-size:16px;line-height:1;cursor:pointer;padding:2px;}
.ideal-close:hover{color:#cfcfcf;}
@keyframes ideal-rise{from{transform:translateY(135%)}to{transform:translateY(0)}}
@keyframes ideal-pop{from{opacity:0;transform:translateY(14px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
@media (prefers-reduced-motion:reduce){
  .ideal-charwrap,.ideal-bubble{animation:none!important;opacity:1!important;transform:none!important;}
}
@media (max-width:480px){
  .ideal-greet{width:min(340px,calc(100vw - 24px));left:12px;bottom:12px;}
}
`
