# 開発コンセプトと原則 (concept.md)

このプロジェクトは、`design.md` に定義されたデザインコンセプト（高級感・宇宙・最先端）を実現するために、以下の開発原則を絶対的なルールとして定めます。

---

## 1. 基本理念（Why）

- **目的:** 訪問者に対し、圧倒的なブランドイメージ（高級感・最先端）を直感的に伝え、信頼を獲得する。
- **原則:** 速度（パフォーマンス）は機能やデザインと同じ、あるいはそれ以上に重要である。

---

## 2. 絶対的なルール（How）

### A. 単一責任の原則 (Single Responsibility Principle)

すべてのコンポーネントとファイルは、**ただ1つの責任**だけを持たなければなりません。

- **NG例:**
  - データを取得（fetch）しながら、カルーセルの状態（State）も管理し、カードのデザイン（CSS）も持つコンポーネント。
- **OK例:**
  - **`page.tsx`（ページ）:** データを取得し、子コンポーネントに渡す **だけ**。
  - **`Carousel.tsx`（機能）:** 状態（State）を管理し、スライドを制御するロジック **だけ** を持つ。
  - **`Card.tsx`（見た目）:** Propsでデータを受け取り、表示する **だけ**。

### B. 命名規則 (Naming Convention)

AIも人間も迷わないよう、命名規則を統一します。

- **コンポーネント:** `PascalCase`（パスカルケース）
  - 例: `Header.tsx`, `CarouselSlider.tsx`
- **フォルダ:** `kebab-case`（ケバブケース） または `snake_case`
  - 例: `components`, `lib`, `utils`
- **変数・関数:** `camelCase`（キャメルケース）
  - 例: `const slideItems = ...`, `function handleSlideChange() { ... }`

### C. パフォーマンス（速度）の優先

「高級感」「最先端」は、サイトの表示速度が遅い時点で失われます。

- **原則:** `useState` や `useEffect`（クライアント側の機能）は、それが**本当に必要なコンポーネント（例: カルーセル）以外では絶対に使用しません**。
- **実装:**
  - ページ（`page.tsx`）や、ただ表示するだけ（`Header`, `Footer`）のコンポーネントは、**必ずサーバーコンポーネント（デフォルト）**として作成します。
  - クライアントコンポーネントにする場合は、ファイルの先頭に `'use client';` と明記し、その理由を明確にします。

### D. GitHub Flow の徹底

作業は必ず以下のフローで行い、`main` ブランチを常にクリーンに保ちます。

1. **`Issue` の作成:** まず「何を」するかをIssueに立てる。
2. **`Branch` の作成:** `main` から作業用ブランチを切る。（例: `feature/header`）
3. **`Commit` & `Push`:** 作業し、Issue番号（`#1` など）を含めてコミットする。
4. **`Pull Request` の作成:** `main` へのマージ依頼（プルリクエスト）を作成する。
5. **`Merge` & `Close`:** レビュー（AIや自分）後、`main` にマージし、Issueを閉じる。

### E. DRY原則（Don't Repeat Yourself）

**同じコードを2回以上書かない。繰り返しは必ず関数化・コンポーネント化すること。**

- **NG例:**
  ```tsx
  // ページA
  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
    ダウンロード
  </button>
  
  // ページB
  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
    お問い合わせ
  </button>
  ```

- **OK例:**
  ```tsx
  // app/components/ui/Button.tsx
  export function Button({ children, ...props }: ButtonProps) {
    return (
      <button 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        {...props}
      >
        {children}
      </button>
    )
  }
  
  // 使用時
  <Button>ダウンロード</Button>
  <Button>お問い合わせ</Button>
  ```

### F. 型安全性の徹底（TypeScript）

**すべての関数、コンポーネントに型定義を明示すること。**

- **必須:**
  - Props の型定義（`type`, `interface`）
  - 関数の引数と返り値の型
  - API レスポンスの型
- **禁止:**
  - `any` 型の使用（例外: 外部ライブラリの型定義が不完全な場合のみ、`unknown` を経由）
  - 型アサーション（`as`）の乱用

**例:**
```tsx
// 型定義を別途定義
type CardProps = {
  title: string
  description: string
  imageUrl: string
  onClick?: () => void
}

// コンポーネントで使用
export function Card({ title, description, imageUrl, onClick }: CardProps) {
  // 実装
}
```

### G. エラーハンドリングの原則

**すべての非同期処理（`fetch`, `async/await`）には、必ずエラーハンドリングを実装すること。**

- **サーバーコンポーネント（`page.tsx`）:**
  ```tsx
  export default async function Page() {
    try {
      const data = await fetchData()
      return <Component data={data} />
    } catch (error) {
      // Next.js の error.tsx にフォールバック
      throw error
    }
  }
  ```

- **クライアントコンポーネント:**
  ```tsx
  'use client'
  
  export function Component() {
    const [error, setError] = useState<string | null>(null)
    
    useEffect(() => {
      fetchData()
        .then(setData)
        .catch((err) => setError(err.message))
    }, [])
    
    if (error) return <ErrorMessage message={error} />
    // 正常な表示
  }
  ```

### H. アクセシビリティ（a11y）の原則

**すべてのインタラクティブ要素は、キーボードとスクリーンリーダーでアクセス可能であること。**

- **セマンティックHTML の使用:**
  - リンクは `<a>`、ボタンは `<button>`、見出しは `<h1>` ～ `<h6>`
  - `<div>` に `onClick` を付けない（ボタンの代わりにしない）
- **ARIA 属性の適切な使用:**
  - 画像には `alt` 属性必須
  - フォームには `<label>` 必須
  - 状態変化は `aria-live`, `aria-expanded` などで通知
- **キーボード操作:**
  - Tab キーですべての要素にアクセス可能
  - Enter/Space キーでボタンを操作可能
  - Esc キーでモーダルを閉じる

### I. SEO の原則

**検索エンジン最適化（SEO）は、設計段階から考慮すること。**

- **メタデータ（Next.js App Router）:**
  ```tsx
  // app/page.tsx
  import { Metadata } from 'next'
  
  export const metadata: Metadata = {
    title: 'ページタイトル | サイト名',
    description: 'ページの説明文（120～160文字）',
    openGraph: {
      title: 'OGP タイトル',
      description: 'OGP 説明文',
      images: ['/og-image.jpg'],
    },
  }
  ```

- **構造化データ（Schema.org）:**
  - JSON-LD 形式で組織情報、記事情報などを追加
- **URLの設計:**
  - 意味のある URL（`/blog/article-title` 良、`/blog/123` 悪）
  - 日本語 URL は避ける（エンコード後が長くなる）

### J. パフォーマンス計測の習慣

**実装後は必ず Lighthouse でパフォーマンスを計測し、スコア 90 以上を目指すこと。**

- **計測方法:**
  1. Chrome DevTools → Lighthouse タブ
  2. Mode: Navigation, Device: Mobile
  3. カテゴリ: Performance, Accessibility, Best Practices, SEO
- **改善の優先順位:**
  1. Performance（パフォーマンス）
  2. Accessibility（アクセシビリティ）
  3. Best Practices（ベストプラクティス）
  4. SEO

---

## 3. サイトの目的（What）

- （ここに、このWebサイトが「誰に」「何を」提供するのかを具体的に書いておく）
- 例: ホワイトペーパーのダウンロード促進、会社（ideal）の技術力とブランドイメージの向上。

---

## 4. 技術スタック（Tech Stack）

このプロジェクトで使用する技術を明確に定義します。

### コア技術

- **フレームワーク:** Next.js 15.x（App Router）
- **言語:** TypeScript 5.x
- **スタイリング:** Tailwind CSS 4.x
- **CMS:** microCMS
- **ホスティング:** Vercel（推奨）

### 推奨ライブラリ

- **アニメーション:** `framer-motion`（スクロールエフェクト、トランジション）
- **フォーム:** `react-hook-form` + `zod`（バリデーション）
- **画像:** Next.js `next/image`（最適化）
- **アイコン:** `lucide-react` または `heroicons`（軽量、Tree-shaking 対応）

### 非推奨・禁止ライブラリ

- **jQuery:** 使用禁止（React と相性が悪い）
- **Bootstrap, Material-UI:** 使用禁止（Tailwind CSS のみ使用）
- **Moment.js:** 使用禁止（重い。代わりに `date-fns` または標準の `Intl.DateTimeFormat`）

---

## 5. 開発環境のセットアップ

新しい開発者（または AI）がプロジェクトに参加する際の手順。

```bash
# 1. リポジトリのクローン
git clone <repository-url>
cd ideal_official

# 2. 依存関係のインストール（package-lock.json を尊重）
npm ci

# 3. 環境変数の設定
# .env.local ファイルを作成し、以下を設定
MICROCMS_API_KEY=your_api_key
MICROCMS_SERVICE_DOMAIN=your_domain

# 4. 開発サーバーの起動
npm run dev

# 5. ブラウザで確認
# http://localhost:3000 にアクセス
```

---

## 6. 品質チェックリスト

実装完了時に必ず確認する項目。

### 機能面

- [ ] すべてのリンクが正しく動作する
- [ ] フォームのバリデーションが機能する
- [ ] 画像がすべて表示される
- [ ] API との通信が正常に行われる

### デザイン面

- [ ] `design.md` のスタイルガイドに準拠している
- [ ] レスポンシブデザインが機能する（mobile, tablet, desktop）
- [ ] ホバーエフェクトが滑らかに動作する
- [ ] 余白（spacing）が適切に取られている

### パフォーマンス面

- [ ] Lighthouse のパフォーマンススコアが 90 以上
- [ ] 画像が最適化されている（WebP, `next/image`）
- [ ] 不要な JavaScript が読み込まれていない
- [ ] クライアントコンポーネントが最小限に抑えられている

### アクセシビリティ面

- [ ] キーボードですべての操作が可能
- [ ] フォーカス状態が視覚的に分かる
- [ ] スクリーンリーダーで読み上げられる（ARIA 属性）
- [ ] 色のコントラストが WCAG AA 基準を満たす

### SEO 面

- [ ] メタデータ（title, description）が設定されている
- [ ] OGP（Open Graph Protocol）が設定されている
- [ ] 構造化データ（Schema.org）が設定されている
- [ ] URL が意味のある命名になっている

---