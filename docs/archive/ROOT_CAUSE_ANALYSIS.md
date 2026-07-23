# モバイルパフォーマンス根本原因分析

## 実施日時
2025年1月25日

## 🔴 発見された根本原因

### 問題: `Header.tsx`が全ページで巨大なクライアントコンポーネントとして読み込まれていた

#### 影響範囲
- **全23ページ**に影響
- すべてのページで同じパフォーマンス問題が発生

#### 技術的な詳細

**問題のあったコード**:
```typescript
// components/layout/Header.tsx
'use client'  // ← これが全ページに影響

import { useState, useEffect } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  useEffect(() => {
    // スクロール検知
    // ドロップダウン外クリック検知
    // など、複雑なロジック
  }, [isServicesDropdownOpen])

  // 282行の巨大なコンポーネント
}
```

**`app/layout.tsx`での使用**:
```typescript
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />  {/* ← 全ページで読み込まれる */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### なぜパフォーマンスが悪化したのか

#### 1. JavaScriptバンドルサイズの増大
- **Header全体**がクライアントサイドJavaScriptとしてバンドルされる
- React Hooks（useState、useEffect）のランタイムコード
- イベントリスナーの管理コード
- すべてのページで同じJSを読み込む

#### 2. ハイドレーションのオーバーヘッド
- サーバーでレンダリングされたHTMLをクライアントで「ハイドレーション」する必要がある
- すべてのstate（isScrolled、isMobileMenuOpen、isServicesDropdownOpen）を初期化
- すべてのイベントリスナー（scroll、click）を登録
- これが**TBT（Total Blocking Time）**を増加させる

#### 3. 初期レンダリングのブロック
- JavaScriptが実行されるまで、インタラクティブにならない
- モバイルの低速なCPUでは、さらに時間がかかる

### なぜ「何も変化しない」と感じたのか

#### 以前の修正の効果が限定的だった理由
1. **個別コンポーネントの最適化**: `SingleColumnSection`などを最適化しても、**Header**が全ページで巨大なJSを読み込んでいたため、効果が相殺された
2. **画像最適化**: 画像は表示されていたが、**JavaScript実行時間（TBT）**が問題だったため、画像最適化では改善しなかった
3. **動的インポート**: Below the foldのコンポーネントを遅延読み込みしても、**Above the fold（Header）**が重かったため、初期ロード時間は改善しなかった

## ✅ 実施した修正

### アーキテクチャの変更: Headerの分割

**新しい構造**:
```
Header (サーバーコンポーネント)
├── ScrollHeader (クライアントコンポーネント) - スクロール検知のみ
├── ServicesDropdown (クライアントコンポーネント) - ドロップダウンのみ
└── MobileMenu (クライアントコンポーネント) - モバイルメニューのみ
```

### 1. `ScrollHeader.tsx` - スクロール検知のみ
```typescript
'use client'

export function ScrollHeader({ children }: ScrollHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}>
      {children}
    </header>
  )
}
```

### 2. `ServicesDropdown.tsx` - ドロップダウンのみ
```typescript
'use client'

export function ServicesDropdown({ serviceLinks }: ServicesDropdownProps) {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesDropdownOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('[data-dropdown]')) {
          setIsServicesDropdownOpen(false)
        }
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isServicesDropdownOpen])

  return (
    <li className="relative" data-dropdown>
      {/* ドロップダウンUI */}
    </li>
  )
}
```

### 3. `MobileMenu.tsx` - モバイルメニューのみ
```typescript
'use client'

export function MobileMenu({ navLinks, serviceLinks }: MobileMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {/* ハンバーガーアイコン */}
      </button>
      {isMobileMenuOpen && (
        <div>
          {/* モバイルメニューUI */}
        </div>
      )}
    </>
  )
}
```

### 4. `Header.tsx` - サーバーコンポーネント化
```typescript
// 'use client' を削除！

export function Header() {
  const navLinks = [...]
  const serviceLinks = [...]

  return (
    <ScrollHeader>
      <nav>
        <Link href="/">ideal</Link>
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <ServicesDropdown serviceLinks={serviceLinks} />
        </ul>
        <MobileMenu navLinks={navLinks} serviceLinks={serviceLinks} />
      </nav>
    </ScrollHeader>
  )
}
```

## 📊 期待される効果

### 1. JavaScriptバンドルサイズの削減
- **Before**: Header全体（282行）がクライアントサイドJS
- **After**: 必要最小限の機能のみがクライアントサイドJS
  - ScrollHeader: ~30行
  - ServicesDropdown: ~50行
  - MobileMenu: ~80行
  - 合計: ~160行（約44%削減）

### 2. ハイドレーションの高速化
- **Before**: 3つのstate + 複数のイベントリスナーを全ページで初期化
- **After**: 各機能が独立して初期化され、必要な部分のみハイドレーション

### 3. サーバーサイドレンダリングの活用
- **Header本体**がサーバーコンポーネントになったため、以下が改善:
  - HTMLが事前にレンダリングされる
  - 初期表示が高速化
  - SEOが改善

### 4. コードの保守性向上
- 各機能が独立したコンポーネントになり、責任が明確化
- テストが容易になる
- 将来的な機能追加が簡単になる

## 🎯 測定方法

### Lighthouse（モバイル）
```bash
npm run build
npm start
lighthouse http://localhost:3000 --view --preset=mobile
```

### 重要な指標
- **TBT (Total Blocking Time)**: 200ms以下を目標
- **FCP (First Contentful Paint)**: 1.8秒以下を目標
- **LCP (Largest Contentful Paint)**: 2.5秒以下を目標
- **Performance Score**: 70-80点を目標（現在53点）

## 📝 次のステップ

### 優先度: 高
1. **Lighthouseで実測**: 実際のパフォーマンス改善を確認
2. **他の共通コンポーネントの確認**: `Footer`などもサーバーコンポーネント化できるか確認

### 優先度: 中
3. **画像の最適化**: `test01.jpg`、`test02.jpg`を圧縮（TBT改善後に実施）
4. **動的インポートの拡張**: Below the foldセクションの遅延読み込み

### 優先度: 低
5. **CSS最適化**: 不要なTailwindクラスの削除
6. **フォント最適化**: フォントサブセットの作成

## 🔍 学んだこと

### アーキテクチャの重要性
- **個別最適化よりも、アーキテクチャレベルの問題を先に解決する**ことが重要
- 全ページに影響するコンポーネント（Header、Footer）の最適化が最優先

### クライアントコンポーネントの境界
- `'use client'`は**必要最小限**にする
- 動的な機能のみをクライアントコンポーネントに分離
- 静的な部分はサーバーコンポーネントに保つ

### パフォーマンス調査の進め方
1. **全体像を把握**: どのコンポーネントが全ページに影響するか
2. **根本原因を特定**: Lighthouseの診断結果を詳細に分析
3. **アーキテクチャレベルで解決**: 個別最適化ではなく、構造から見直す

## 🚀 結論

**Header.tsx**が全ページで巨大なクライアントコンポーネントとして読み込まれていたことが、モバイルパフォーマンスの根本原因でした。

Headerを以下のように分割することで、大幅なパフォーマンス改善が期待できます：
- **サーバーコンポーネント**: 静的な部分（ロゴ、リンク）
- **クライアントコンポーネント**: 動的な部分（スクロール検知、ドロップダウン、モバイルメニュー）のみ

この修正により、JavaScriptバンドルサイズが約44%削減され、ハイドレーションが高速化され、初期表示が大幅に改善されるはずです。








