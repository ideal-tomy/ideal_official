# FooterConcierge / WelcomeConcierge

本番実装:

- [`components/concierge/WelcomeConcierge.tsx`](../components/concierge/WelcomeConcierge.tsx) — サイト初回のみ「来てくれてありがとうございます」（約3秒で消去）
- [`components/concierge/FooterConcierge.tsx`](../components/concierge/FooterConcierge.tsx) — 各ページ1回・読了あいさつ → 数秒後にページ別チップ
- 文言・チップ定義: [`lib/concierge/guide/footer-prompts.ts`](../lib/concierge/guide/footer-prompts.ts)

`app/layout.tsx` で `<main>` と `<Footer />` の間に配置。
