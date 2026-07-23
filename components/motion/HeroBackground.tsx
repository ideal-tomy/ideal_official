/**
 * ヒーロー背景 — テーマ連動グラデーション＋微細な星粒
 * サーバーコンポーネント（CSS のみ）
 */

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--hero-grad-from), var(--hero-grad-via), var(--hero-grad-to))',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, var(--hero-glow-primary), transparent)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 80% 20%, var(--hero-glow-secondary), transparent)',
        }}
      />
      <div className="hero-stars absolute inset-0 opacity-40" />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, var(--site-bg), transparent)',
        }}
      />
    </div>
  )
}
