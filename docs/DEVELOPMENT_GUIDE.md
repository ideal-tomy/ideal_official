# 開発ガイド (DEVELOPMENT_GUIDE.md)

このプロジェクトを開発する上での作業ルールと、参照すべきリソースをまとめる。

---

## 1. 作業ルール

### A. 問題発生時の対応フロー

1.  **公式ドキュメントの確認 (最優先)**
    - エラーメッセージに関連する技術（Next.js, Tailwind, microCMSなど）の「公式サイト」をまず確認する。
2.  **GitHub Issues の検索**
    - 公式サイトで解決しない場合、そのライブラリのGitHubリポジトリの `Issues` タブで、同様のエラーが報告されていないか検索する。


### B. バージョン管理

- **互換性:** `npm install` で新しいパッケージを追加する際は、既存のパッケージ（特にNext.js）との互換性（バージョン）に注意する。
- **環境の統一:** 複数人で作業する場合（またはAIエージェントと環境を合わせる場合）、`package-lock.json` をコミットし、`npm ci` を使ってパッケージをインストールすることを推奨する。

### C. コミットルール

- コミットは「1つの機能追加」や「1つのバグ修正」など、できるだけ小さい単位で行う。
- コミットメッセージには、関連するIssue番号（例: `#3`）を必ず含める。

---

## 2. 公式リソースリンク集

困った時に最初に見るべきサイト。

- **Next.js (フレームワーク):**
  - [https://nextjs.org/docs](https://nextjs.org/docs)
- **React (UIライブラリ):**
  - [https://react.dev/](https://react.dev/)
- **Tailwind CSS (CSS):**
  - [https://tailwindcss.com/docs/](https://tailwindcss.com/docs/)
- **microCMS (CMS):**
  - [https://microcms.io/docs/](https://microcms.io/docs/)
- **GitHub (バージョン管理):**
  - [https://docs.github.com/ja](https://docs.github.com/ja)
- **(カルーセルライブラリ - 例: Swiper):**
  - [https://swiperjs.com/react](https://swiperjs.com/react)
- **npm (パッケージ検索):**
  - [https://www.npmjs.com/](https://www.npmjs.com/)