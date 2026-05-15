# デザインガイドライン (design.md)

## 1. コンセプト

- **高級感:** たっぷりの余白と、ミニマル（最小限）な要素で表現する。
- **宇宙:** 漆黒やダークネイビーを背景色とし、空間の広がりを感じさせる。
- **最先端:** クリーンなフォントと、滑らかなアニメーションでモダンな印象を与える。

---

## 2. カラーパレット（Tailwind CSS）

- **ベース背景:** `bg-gray-900` または `bg-black`
  - サイト全体の背景。宇宙空間のイメージ。
- **メインテキスト:** `text-gray-200` または `text-white`
  - 暗い背景に映える、白または薄いグレー。
- **アクセント（最先端）:** `text-blue-400` または `text-cyan-400`
  - 重要なボタンやリンク。宇宙船の計器類のような明るい青。
- **アクセント（高級感）:** `border-gray-700` または `text-yellow-400`
  - 控えめな区切り線（メタリックグレー）や、限定的な差し色（金）。
- **状態カラー:**
  - ホバー: `hover:bg-blue-500` `hover:text-white`
  - フォーカス: `focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900`
  - 無効化: `disabled:opacity-50 disabled:cursor-not-allowed`

---

## 3. フォント（タイポグラフィ）

- **基本フォント:** `font-sans`（Noto Sans JP, Inter など）
  - クリーンでモダンなサンセリフ体（ゴシック体）を基本とする。
- **見出し (h1, h2):** `text-3xl lg:text-4xl font-bold`（または `font-light`）
  - サイズを大きく取り、太字または細字でメリハリをつける。
- **本文 (p):** `text-base lg:text-lg leading-relaxed`
  - 少し大きめ（`text-lg`）を推奨。行間（`leading-relaxed`）を広めに取ることで高級感を演出。
- **文字サイズスケール:**
  - h1: `text-4xl lg:text-6xl`（トップページのヒーロー）
  - h2: `text-3xl lg:text-5xl`（セクション見出し）
  - h3: `text-2xl lg:text-3xl`（サブセクション）
  - h4: `text-xl lg:text-2xl`（カード見出し）
  - body: `text-base lg:text-lg`（通常テキスト）
  - small: `text-sm lg:text-base`（キャプション、注釈）

---

## 4. レイアウト・エフェクト

- **余白 (Spacing):**
  - セクション間の余白は非常に大きく取る。（例: `py-24` や `py-32`）
  - 要素をギチギチに詰め込まず、余白（宇宙空間）を意識する。
  - コンテナ幅: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`（標準）
- **コンポーネント:**
  - 角の丸みは控えめに。（例: `rounded-lg`）
  - 不要な線や装飾は極力排除し、ミニマルに。
- **エフェクト (Animation):**
  - ボタンホバー時などは、必ず `transition-colors duration-300` を入れ、色がフワッと変わるようにする。
  - スクロールに応じたフェードインなど、滑らかなアニメーションで「最先端」感を演出する。
  - **推奨トランジション:**
    - 色変更: `transition-colors duration-300`
    - サイズ変更: `transition-transform duration-300`
    - 透明度: `transition-opacity duration-500`
    - 複合: `transition-all duration-300 ease-in-out`
- **背景:**
  - 背景はベタ塗り（`bg-black`）だけでなく、`bg-gradient-to-b from-black to-gray-900` のような微妙なグラデーションも検討する。

---

## 5. レスポンシブデザイン

### ブレークポイント（Tailwind CSS デフォルト）

- **sm:** 640px 以上（スマートフォン横向き、小型タブレット）
- **md:** 768px 以上（タブレット）
- **lg:** 1024px 以上（ノートPC、デスクトップ）
- **xl:** 1280px 以上（大型デスクトップ）
- **2xl:** 1536px 以上（超大型ディスプレイ）

### モバイルファースト設計

- **原則:** 常にモバイル（小画面）を基準にデザインし、大画面用のスタイルを `lg:` などで上書きする。
- **例:**
  ```tsx
  <div className="text-2xl lg:text-4xl py-12 lg:py-24">
  ```

### レスポンシブ画像

- **Next.js Image コンポーネント必須:**
  ```tsx
  import Image from 'next/image'
  <Image src="..." alt="..." width={1920} height={1080} className="w-full h-auto" />
  ```
- **アスペクト比の維持:** `aspect-video` (16:9), `aspect-square` (1:1) を活用

---

## 6. 画像・メディアの最適化

### 画像フォーマット

- **推奨:** WebP（`next/image` が自動変換）
- **アイコン・ロゴ:** SVG（ベクター、サイズ不問）
- **写真:** WebP、JPEG（高解像度は Next.js で自動圧縮）

### パフォーマンス

- **遅延読み込み:** `loading="lazy"`（Next.js Image はデフォルト）
- **優先読み込み:** ファーストビューの画像は `priority` を指定
  ```tsx
  <Image src="..." alt="..." priority />
  ```

### アクセシビリティ

- **alt 属性は必須:** 装飾画像でも `alt=""` を明示
- **意味のある説明:** スクリーンリーダーユーザーを意識した具体的な説明文

---

## 7. アニメーション・インタラクションパターン

### ボタン

```tsx
<button className="
  bg-blue-500 text-white px-6 py-3 rounded-lg
  hover:bg-blue-600 hover:scale-105
  active:scale-95
  transition-all duration-300
  focus:outline-none focus:ring-2 focus:ring-blue-400
  disabled:opacity-50 disabled:cursor-not-allowed
">
  CTA ボタン
</button>
```

### カード（ホバーエフェクト）

```tsx
<div className="
  bg-gray-800 rounded-lg p-6
  hover:bg-gray-750 hover:shadow-2xl hover:-translate-y-2
  transition-all duration-300
  border border-gray-700
">
  カード内容
</div>
```

### フェードイン（スクロール時）

- **ライブラリ推奨:** `framer-motion` または `react-intersection-observer`
- **原則:** 過度なアニメーションは避け、ユーザーの読書体験を妨げない

---

## 8. コンポーネント別スタイルガイド

### ナビゲーション（Header）

- **高さ:** `h-16` または `h-20`（固定）
- **背景:** `bg-black/80 backdrop-blur-md`（半透明＋ブラー効果）
- **固定:** `fixed top-0 w-full z-50`

### ヒーローセクション

- **高さ:** `min-h-screen`（画面いっぱい）
- **配置:** `flex items-center justify-center`（中央配置）
- **テキスト:** 大きく（`text-6xl`）、太く（`font-bold`）

### フッター

- **背景:** `bg-gray-900`
- **余白:** `py-12 lg:py-16`
- **区切り線:** `border-t border-gray-800`

### フォーム

- **入力フィールド:**
  ```tsx
  <input className="
    bg-gray-800 text-white border border-gray-700 rounded-lg
    px-4 py-3
    focus:outline-none focus:ring-2 focus:ring-blue-400
    placeholder:text-gray-500
  " />
  ```

---

## 9. アクセシビリティ（a11y）

### 必須対応

- **色のコントラスト:** WCAG AA 基準（4.5:1 以上）を満たす
  - `text-gray-200` on `bg-black` は OK
  - `text-gray-500` on `bg-gray-700` は NG
- **キーボード操作:** すべてのインタラクティブ要素に `Tab` キーでアクセス可能
- **フォーカス表示:** `focus:ring-2 focus:ring-blue-400` で視覚的に明示
- **セマンティックHTML:** `<button>`, `<nav>`, `<main>`, `<article>` など意味のあるタグを使用

### スクリーンリーダー対応

- **ランドマーク:** `<header>`, `<main>`, `<footer>` で構造化
- **見出し階層:** `h1` → `h2` → `h3` の順序を守る（飛ばさない）
- **ARIA ラベル:** 必要に応じて `aria-label`, `aria-describedby` を追加

---

## 10. ダークモード（統一方針）

**このサイトはダークモードのみを提供します。**

- **理由:** 「宇宙」「高級感」のコンセプトと一致
- **Tailwind 設定:** `darkMode: 'class'` は不要（常にダーク）
- **将来の拡張:** ライトモード追加時は、`dark:` プレフィックスで対応

---

## 11. パフォーマンス（デザイン視点）

### 重要指標（Core Web Vitals）

- **LCP（Largest Contentful Paint）:** 2.5秒以内
  - ヒーロー画像は `priority` 指定、WebP 使用
- **FID（First Input Delay）:** 100ms 以内
  - JavaScript は最小限、クライアントコンポーネントを限定
- **CLS（Cumulative Layout Shift）:** 0.1 以下
  - 画像は必ず `width`, `height` 指定でレイアウトシフト防止

### フォント読み込み

- **`next/font` 使用:**
  ```tsx
  import { Noto_Sans_JP } from 'next/font/google'
  const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '700'] })
  ```
- **フォント表示:** `font-display: swap`（デフォルト）で即座に表示