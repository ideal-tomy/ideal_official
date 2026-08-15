# ideal 公式サイト

Next.js (App Router) 製の `ideal_official` コーポレートサイト。AI / Web / App 受託開発と、建設・介護・小売など業種別の体験デモを中心に構成。

## セットアップ

```bash
npm install
cp .env.example .env.local  # 必要な値を設定（未設定でもテンプレート案内は動作）
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認。

## スクリプト

```bash
npm run dev            # 開発サーバー
npm run build           # 本番ビルド
npm run start           # 本番サーバー起動
npm run lint             # ESLint
npm run test:e2e         # Playwright（導線回帰テスト）
npm run test:e2e:ui      # Playwright UIモード
npm run test:e2e:visual  # ビジュアル回帰テスト
```

e2e の詳細は [`e2e/README.md`](./e2e/README.md) を参照。

## ドキュメント

`docs/` 配下に設計・運用ドキュメントをまとめている。まず読むべきもの:

- [`docs/SITE_IA_DIRECTION.md`](./docs/SITE_IA_DIRECTION.md) — サイト情報設計の正本（実装前の合意文書）
- [`docs/SITE_MAP_v2.md`](./docs/SITE_MAP_v2.md) — URLツリー
- [`docs/REDIRECT_MAP.md`](./docs/REDIRECT_MAP.md) — リダイレクト定義の正本
- [`docs/UX_AUDIT.md`](./docs/UX_AUDIT.md) — サイト全体の導線監査
- [`docs/DEVELOPMENT_GUIDE.md`](./docs/DEVELOPMENT_GUIDE.md) — 開発ガイド

完了済みの計画・調査ドキュメントは [`docs/archive/`](./docs/archive/) に格納している。

## 環境変数

`.env.example` を参照。AIコンシェルジュ（`OPENAI_API_KEY` 等）・お問い合わせ送信Webhook・ROIシミュレーター連携など、未設定でも基本機能は動作するようフォールバックしてある。

## Tech Stack

Next.js 16 / React 19 / TypeScript / Tailwind CSS v4 / Framer Motion / React Hook Form + Zod / Playwright
