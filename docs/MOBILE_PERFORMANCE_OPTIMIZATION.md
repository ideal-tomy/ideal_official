# モバイルパフォーマンス最適化ガイド

## 実装状況

### ✅ 実装完了（2025年1月）
以下の最適化を全ページに適用しました：

1. **Next.js Image設定の最適化**
   - `deviceSizes`と`imageSizes`の最適化
   - WebP/AVIF形式への自動変換
   - 画像品質を75%に設定

2. **画像コンポーネントの最適化**
   - `sizes`属性を追加（レスポンシブ対応）
   - `quality={75}`を設定
   - `loading="lazy"`を設定
   - `priority={false}`を設定

3. **動的インポートの実装**
   - `ModalTrigger`コンポーネントを動的インポート
   - `TabContainer`コンポーネントを動的インポート
   - SSRを無効化（`ssr: false`）

4. **フォント最適化**
   - `preload: true`を設定
   - `display: "swap"`を設定
   - フォントウェイトを最小化（400, 500, 700のみ）

5. **プリフェッチの最適化**
   - トップページへのリンクは`prefetch={true}`
   - その他のリンクは`prefetch={false}`

### 📊 現状分析（Lighthouse スコア - 最適化前）
- **Performance**: 53点 ❌
- **Accessibility**: 100点 ✅
- **Best Practices**: 100点 ✅
- **SEO**: 91点 ✅

### 🎯 期待される改善
- **Performance**: 70-80点（+17-27点）
- **FCP**: 改善
- **LCP**: 改善
- **TBT**: 改善

## 主な問題点

### 1. 画像最適化の不足
**問題**:
- `test01.jpg`、`test02.jpg`などの画像が大きすぎる
- モバイルでも同じサイズの画像を読み込んでいる
- WebP/AVIF形式への変換が不十分

**対策**:
```typescript
// 画像を最適化済みのものに置き換える
// または、Next.js Imageコンポーネントの設定を最適化
<Image
  src="/images/test01.jpg"
  alt="..."
  width={800}
  height={400}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={false} // Above the foldでない画像はfalse
  quality={75} // モバイルでは品質を下げる
/>
```

### 2. レイアウトシフト（CLS）
**問題**:
- 画像の読み込み時にレイアウトがずれる
- 動的コンテンツの高さが確定していない

**対策**:
```typescript
// 画像に明示的なwidth/heightを設定
<Image
  src="/images/test01.jpg"
  alt="..."
  width={800}
  height={400}
  className="w-full h-auto"
/>

// または、aspect-ratioを使用
<div className="relative aspect-video">
  <Image
    src="/images/test01.jpg"
    alt="..."
    fill
    className="object-cover"
  />
</div>
```

### 3. JavaScriptバンドルサイズ
**問題**:
- モーダル、タブ、ナビゲーションなどのインタラクティブ要素が多い
- クライアントコンポーネントが多すぎる

**対策**:
```typescript
// 動的インポートを使用
const Modal = dynamic(() => import('./Modal'), {
  loading: () => <div>Loading...</div>,
  ssr: false
})

// 必要な時だけロード
{showModal && <Modal />}
```

### 4. 初期レンダリングの遅延
**問題**:
- トップページに多くのセクションとカードがある
- すべてのコンテンツを一度に読み込んでいる

**対策**:
```typescript
// Intersection Observerを使用した遅延読み込み
'use client'
import { useEffect, useRef, useState } from 'react'

export function LazySection({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: '400px' }} />}
    </div>
  )
}
```

## 実装優先順位

### 🔴 高優先度（即座に実装）
1. **画像の最適化**
   - 画像を圧縮（TinyPNG、ImageOptimなど）
   - WebP/AVIF形式に変換
   - モバイル用の小さいサイズを用意

2. **Next.js Image設定の最適化**
   ```typescript
   // next.config.ts
   images: {
     formats: ['image/webp', 'image/avif'],
     deviceSizes: [640, 750, 828, 1080, 1200],
     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
     minimumCacheTTL: 31536000,
   }
   ```

3. **Critical CSSの最適化**
   - Above the foldのスタイルを優先
   - 不要なTailwindクラスを削除

### 🟡 中優先度（1週間以内）
1. **動的インポート**
   - モーダルコンポーネントを動的インポート
   - タブコンポーネントを動的インポート

2. **遅延読み込み**
   - Below the foldのセクションを遅延読み込み
   - 画像のlazyロード

3. **フォントの最適化**
   ```typescript
   // app/layout.tsx
   import { Noto_Sans_JP } from 'next/font/google'

   const notoSansJP = Noto_Sans_JP({
     weight: ['400', '500', '700'],
     subsets: ['latin'],
     display: 'swap',
     preload: true,
   })
   ```

### 🟢 低優先度（2週間以内）
1. **Service Workerの実装**
   - オフライン対応
   - キャッシュ戦略の最適化

2. **Code Splitting**
   - ルートごとのバンドル分割
   - 共通コンポーネントの最適化

3. **プリフェッチの最適化**
   ```typescript
   <Link href="/services" prefetch={false}>
     Services
   </Link>
   ```

## 測定方法

### Lighthouse CLI
```bash
npm install -g lighthouse
lighthouse http://localhost:3000 --view --preset=desktop
lighthouse http://localhost:3000 --view --preset=mobile
```

### WebPageTest
https://www.webpagetest.org/

### Chrome DevTools
1. F12でDevToolsを開く
2. Lighthouseタブを選択
3. "Analyze page load"をクリック

## 目標スコア
- **Performance**: 90点以上
- **FCP (First Contentful Paint)**: 1.8秒以下
- **LCP (Largest Contentful Paint)**: 2.5秒以下
- **CLS (Cumulative Layout Shift)**: 0.1以下
- **TBT (Total Blocking Time)**: 200ms以下

## 実装チェックリスト

### 画像最適化
- [ ] すべての画像をWebP/AVIF形式に変換（Next.jsが自動変換）
- [x] 画像を圧縮（品質75%に設定）
- [ ] モバイル用の小さいサイズを用意（Next.jsが自動生成）
- [x] Next.js Imageコンポーネントに`sizes`属性を追加
- [ ] Above the fold画像に`priority={true}`を設定（必要に応じて）
- [x] Below the fold画像に`loading="lazy"`を設定

### コンポーネント最適化
- [x] モーダルを動的インポート（ThreeCardSection）
- [x] タブを動的インポート（TabSection）
- [ ] Below the foldセクションを遅延読み込み（今後実装）
- [ ] 不要なクライアントコンポーネントをサーバーコンポーネントに変更（今後実装）

### CSS最適化
- [ ] 不要なTailwindクラスを削除（今後実装）
- [ ] Critical CSSを最適化（今後実装）
- [ ] カスタムCSSを最小化（今後実装）

### JavaScript最適化
- [ ] 不要なライブラリを削除（今後実装）
- [x] Tree shakingを有効化（Next.jsデフォルト）
- [ ] バンドルサイズを分析（`npm run build`）

### フォント最適化
- [x] フォントをプリロード（`preload: true`）
- [x] `font-display: swap`を設定
- [x] 不要なフォントウェイトを削除（400, 500, 700のみ使用）

### Next.js設定最適化
- [x] `deviceSizes`と`imageSizes`を最適化
- [x] 画像フォーマットをWebP/AVIFに設定
- [x] `compress: true`を設定
- [x] `poweredByHeader: false`を設定
- [x] `reactStrictMode: true`を設定

### リンク最適化
- [x] 重要なリンクに`prefetch={true}`を設定（トップページ）
- [x] 不要なリンクに`prefetch={false}`を設定（サービスページ、フッター）

## 参考リンク
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse Performance Scoring](https://web.dev/performance-scoring/)

