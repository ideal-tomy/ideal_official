# ideal 公式サイト 現在仕様

更新日: 2026-08-23

## この文書の役割

この文書は、現在のサイト構成を把握するための最小仕様である。
表示内容、URL、リダイレクト、利用可能なデモが実装と異なる場合は、実装コードと設定を正本とする。

## サイトの目的

idealのWebサイト・LP、業務ツール、AI開発を紹介し、動くデモや記事を通じて相談と製作依頼につなげる。

## 公開導線

共通ヘッダーの主な導線は次のとおり。

- `/` — トップ。代表デモ、現場の記事、LAB、問い合わせへの入口
- `/flow` — 導入の流れと自動見積もり
- `/services` — 相談・設計、Webサイト・LP、AI、アプリ開発
- `/lab` — 研究・実験領域
- `/contact` — 問い合わせ

ヘッダーとフッターの表示内容は、それぞれ
`components/layout/Header.tsx` と `components/layout/Footer.tsx` を正本とする。

## コンテンツ

### デモ

- トップの代表デモは `data/demo-first/top-featured-demos.ts` を正本とする。
- デモLPの登録内容は `data/demo-lp/index.ts` と各設定ファイルを正本とする。
- `/demo/w/[slug]` は業務・業種別のデモLPを表示する。
- `/demo/[slug]` は能力別のデモLPを表示する。
- `/ai-capability-gallery/[slug]` は能力デモの体験ページとして残っている。
- 外部デモのURLは `data/demo-first/portfolio.ts` など、実際に参照しているコードを正本とする。

### 記事

- 業界記事は `/articles/[slug]` で公開する。
- 悩み別の記事は `/articles/t/[slug]` で公開する。
- 記事の一覧・メタデータは `data/articles/index.ts` を正本とする。
- 公開本文は `content/articles/` 内のHTMLを正本とする。
- `docs/` 内の下書きやMarkdownは公開本文の正本にしない。

### サービスとLAB

- サービスの表示内容は `app/services/page.tsx`、`components/services/`、`data/services/`を正本とする。
- LABの表示内容は `app/lab/`、`components/lab/`、`data/lab/`を正本とする。
- Blockchain、DAO、VR・ARなどは主力サービスと分け、LABの研究・実験領域として扱う。

## URLとリダイレクト

URLの書き換えとリダイレクトは `next.config.ts` を唯一の正本とする。

現在の主要な統合先は次のとおり。

- `/cases`、`/estimate`、`/ai-capability-gallery`、`/how-we-work` → `/flow`
- 旧サービス詳細URL → `/services`内の対応セクション、またはLAB
- 一部の旧業種事例URL → 対応する `/demo/w/[slug]`

リダイレクト一覧を別のMarkdownへ複製しない。

## 問い合わせ・外部連携

- 問い合わせ画面は `/contact`、送信先は `/api/contact`。
- `CONTACT_WEBHOOK_URL` が未設定の場合、問い合わせ送信を成功扱いにしない。
- サイト案内コンシェルジュはAPIキー未設定でもテンプレート案内を利用できる。
- 自動見積もりは `NEXT_PUBLIC_ROI_SIMULATOR_URL` を利用する。
- 環境変数の名称と挙動は `.env.example` と実装コードを正本とする。
- 秘密情報をクライアントコード、文書、リポジトリへ記載しない。

## 実装上の基準

- Next.js App Router、React、TypeScript、Tailwind CSSを使用する。
- 共通デザイン値は `lib/design-tokens.ts` と既存のCSS変数を優先する。
- 新しい画面は既存のレイアウト、レスポンシブ対応、アクセシビリティの実装に合わせる。
- 実装を変更した場合、必要に応じてこの文書も更新する。ただしコードや設定の値を全文複製しない。

## 正本ではないもの

整理が完了するまで、`docs/PRODUCT_SPEC.md`以外の`docs/`内の文書は参考資料として扱う。
過去の計画、監査、コピー案、作業記録、`archive/`、`export/`を新しい実装判断の根拠にしない。
