# パフォーマンス改善計画: 69点 → 80点以上

## 現状
- **Performance**: 69点（本番モード）
- **改善**: +16点（53点 → 69点）
- **目標**: 80点以上

## 次の最適化ステップ

### 優先度: 最高 🔥

#### 1. 画像の最適化
**現状の問題**:
- `test01.jpg`、`test02.jpg`が大きすぎる（おそらく数MB）
- モバイルでも同じサイズの画像を読み込んでいる
- LCP（Largest Contentful Paint）に影響

**対策**:
```bash
# 画像を圧縮・最適化
# 推奨ツール: TinyPNG, Squoosh, ImageOptim

# 目標:
- デスクトップ用: 最大200KB
- モバイル用: 最大100KB
- フォーマット: WebP/AVIF（Next.jsが自動変換）
```

**実装**:
```typescript
// components/sections/TwoCardSectionFixed.tsx
<Image
  src="/images/test02.jpg"
  alt="..."
  fill
  sizes="(max-width: 768px) 100vw, 50vw"  // ✅ 既に設定済み
  quality={75}  // ✅ 既に設定済み
  priority={false}  // ✅ 既に設定済み
/>
```

**期待される効果**: +5-8点

---

#### 2. Above the Fold画像の優先読み込み
**現状の問題**:
- トップページの最初の画像（DAO研究・取り組み、ITサービス提供）が遅延読み込みされている
- LCPに影響

**対策**:
```typescript
// app/page.tsx
const twoCardData = [
  {
    id: 'dao-research',
    title: 'DAO研究・取り組み',
    image: '/images/test02.jpg',
    priority: true,  // ← 追加
  },
  {
    id: 'it-services',
    title: 'ITサービス提供',
    image: '/images/test02.jpg',
    priority: true,  // ← 追加
  }
]

// components/sections/TwoCardSectionFixed.tsx
<Image
  src={card.image}
  alt={card.title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={75}
  priority={card.priority || false}  // ← 修正
/>
```

**期待される効果**: +3-5点

---

### 優先度: 高 ⚡

#### 3. フォントの最適化
**現状の問題**:
- Noto Sans JPの3つのウェイト（400, 500, 700）をすべて読み込んでいる
- 使用していないウェイトがある可能性

**対策**:
```typescript
// app/layout.tsx
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],  // 500を削除（使用していない場合）
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});
```

**期待される効果**: +1-2点

---

#### 4. 不要なJavaScriptの削除
**現状の問題**:
- `ThreeCardSection`と`TabSection`がすべてのページで読み込まれている可能性
- 使用していないページでもJSがバンドルされている

**対策**:
```typescript
// 各サービスページで動的インポート
const ThreeCardSection = dynamic(() => import('@/components/sections/ThreeCardSection'))
const TabSection = dynamic(() => import('@/components/sections/TabSection'))
```

**期待される効果**: +2-3点

---

### 優先度: 中 📊

#### 5. CSSの最適化
**現状の問題**:
- Tailwind CSSの未使用クラスが含まれている可能性
- Critical CSSが最適化されていない

**対策**:
```typescript
// tailwind.config.ts
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // 未使用クラスを自動削除（Tailwindのデフォルト機能）
}
```

**期待される効果**: +1-2点

---

#### 6. プリフェッチの最適化
**現状の問題**:
- すべてのリンクがプリフェッチされている可能性
- 不要なページのプリフェッチでバンドルサイズが増大

**対策**:
```typescript
// components/layout/Header.tsx（既に実装済み）
<Link
  href={link.href}
  prefetch={link.href === '/' ? true : false}  // ✅ 既に最適化済み
>
  {link.label}
</Link>
```

**期待される効果**: 既に実装済み

---

## 実装の優先順位

### フェーズ1: 即座に実施（期待効果: +8-13点）
1. ✅ **画像の圧縮**: `test01.jpg`、`test02.jpg`を最適化
2. ✅ **Above the Fold画像の優先読み込み**: `priority={true}`を設定

### フェーズ2: 次に実施（期待効果: +3-5点）
3. ✅ **フォントの最適化**: 不要なウェイトを削除
4. ✅ **不要なJavaScriptの削除**: 動的インポートを拡張

### フェーズ3: 最後に実施（期待効果: +1-2点）
5. ✅ **CSSの最適化**: 未使用クラスの削除
6. ✅ **その他の微調整**: キャッシュ設定など

---

## 目標スコア

| フェーズ | 実施内容 | 期待スコア |
|---------|---------|-----------|
| 現在 | Header分割完了 | **69点** |
| フェーズ1 | 画像最適化 + 優先読み込み | **77-82点** |
| フェーズ2 | フォント + JS最適化 | **80-85点** |
| フェーズ3 | CSS最適化 + 微調整 | **85-90点** |

---

## 測定方法

### Lighthouseで測定
```bash
# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# Chrome DevTools → Lighthouse → Mobile → Analyze
```

### 重要な指標
- **LCP (Largest Contentful Paint)**: 2.5秒以下
- **TBT (Total Blocking Time)**: 200ms以下
- **FCP (First Contentful Paint)**: 1.8秒以下
- **CLS (Cumulative Layout Shift)**: 0.1以下

---

## 次のアクション

1. **画像を圧縮**: TinyPNG（https://tinypng.com/）で`test01.jpg`、`test02.jpg`を圧縮
2. **Above the Fold画像を優先読み込み**: `priority={true}`を設定
3. **再測定**: Lighthouseで効果を確認

**これで80点以上を達成できるはずです！**








