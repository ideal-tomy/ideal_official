# E2E（Playwright）

導線回帰テストの骨組み。設計・監査は [`docs/UX_AUDIT.md`](../docs/UX_AUDIT.md) を参照。

## セットアップ

```bash
npm install
npx playwright install chromium
```

開発サーバーが既に動いている場合は `PLAYWRIGHT_BASE_URL` を指定する（推奨）。

## 実行

```bash
# 既存の npm run dev に対して（ポート 3000）
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000 npm run test:e2e

# サーバー未起動時は Playwright が npm run dev を自動起動
npm run test:e2e

# UI モード
npm run test:e2e:ui

# Visual Regression（任意）
npm run test:e2e:visual
# 基準画像更新
npx playwright test e2e/visual --update-snapshots
```

PowerShell の場合:

```powershell
$env:PLAYWRIGHT_BASE_URL='http://127.0.0.1:3000'; npm run test:e2e
```

## 構成

| パス | 内容 |
|------|------|
| `journeys/demo-to-concierge.spec.ts` | デモ → コンシェルジュ |
| `journeys/services.spec.ts` | 主力3サービス到達 |
| `journeys/lab.spec.ts` | LAB 孤立防止 |
| `smoke/nav-and-redirects.spec.ts` | ナビ + 旧 URL redirect |
| `visual/home.spec.ts` | スクショ比較（オプトイン） |

セレクタは文言依存のため、コピー変更時はテストも合わせて更新する。
