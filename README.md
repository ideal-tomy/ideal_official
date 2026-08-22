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

## ドキュメント

- [`AGENTS.md`](./AGENTS.md) — AIによる作業のルール
- [`docs/PRODUCT_SPEC.md`](./docs/PRODUCT_SPEC.md) — 現在のサイト仕様
- [`docs/ARTICLE_RULES.md`](./docs/ARTICLE_RULES.md) — 記事を作成・更新するときだけ使うルール

上記以外の設計・計画文書は残さず、過去の内容はGit履歴から確認する。

## E2E

初回のみPlaywrightのブラウザを準備する。

```bash
npx playwright install chromium
```

既存の開発サーバーを使う場合は`PLAYWRIGHT_BASE_URL`を指定する。未指定の場合はPlaywrightが開発サーバーを起動する。

```powershell
$env:PLAYWRIGHT_BASE_URL='http://127.0.0.1:3000'; npm run test:e2e
```

ビジュアルテストの基準画像を意図して更新する場合だけ、次を実行する。

```bash
npx playwright test e2e/visual --update-snapshots
```

コピーやナビゲーションを変更した場合は、関連する`e2e/`のテストも確認する。

## 環境変数

`.env.example` を参照。AIコンシェルジュ（`OPENAI_API_KEY` 等）・お問い合わせ送信Webhook・ROIシミュレーター連携など、未設定でも基本機能は動作するようフォールバックしてある。

## Tech Stack

Next.js 16 / React 19 / TypeScript / Tailwind CSS v4 / Framer Motion / React Hook Form + Zod / Playwright
