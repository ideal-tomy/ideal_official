# 画像サイズと比率の分析レポート

## 実施日時
2025年1月25日

## 📊 元の画像ファイルの情報

### test01.jpg
- **解像度**: 981 x 360 px
- **アスペクト比**: 2.72:1（横長）
- **ファイルサイズ**: 139.86 KB（0.14 MB）
- **使用箇所**: AI、Web開発、ブロックチェーン開発、アプリ開発（4箇所）

### test02.jpg
- **解像度**: 640 x 360 px
- **アスペクト比**: 1.78:1（16:9に近い）
- **ファイルサイズ**: 40.74 KB（0.04 MB）
- **使用箇所**: DAO研究・取り組み、ITサービス提供（2箇所）

---

## 🖼️ 実際の表示サイズ（デスクトップビュー）

### すべてのカード画像
- **表示サイズ**: 284 x 192 px
- **表示アスペクト比**: 1.48:1
- **親要素サイズ**: 284 x 192 px

### Next.jsによる最適化
- **配信URL**: `/_next/image?url=%2Fimages%2Ftest01.jpg&w=1920&q=75`
- **配信サイズ**: 375 x 211 px（test02.jpg）、375 x 137 px（test01.jpg）
- **品質**: 75%
- **フォーマット**: WebP/AVIF（ブラウザがサポートしている場合）

---

## ⚠️ 問題点の分析

### 1. アスペクト比の不一致

| 項目 | test01.jpg | test02.jpg | 表示サイズ |
|------|-----------|-----------|-----------|
| **元の比率** | 2.72:1 | 1.78:1 | 1.48:1 |
| **幅** | 981px | 640px | 284px |
| **高さ** | 360px | 360px | 192px |

**問題**:
- `test01.jpg`は**2.72:1**（非常に横長）
- `test02.jpg`は**1.78:1**（16:9に近い）
- 表示は**1.48:1**（3:2に近い）

→ **アスペクト比が異なるため、`object-cover`で画像が切り取られている**

### 2. 解像度の過剰

**test01.jpg**:
- 元の解像度: 981 x 360 px
- 表示サイズ: 284 x 192 px
- **過剰度**: 約3.5倍（幅）

**test02.jpg**:
- 元の解像度: 640 x 360 px
- 表示サイズ: 284 x 192 px
- **過剰度**: 約2.3倍（幅）

→ **必要以上に大きな画像を読み込んでいる**

### 3. Next.jsの自動最適化の効果

**良い点**:
- ✅ Next.jsが自動的にリサイズ（375px幅に縮小）
- ✅ WebP/AVIF形式に自動変換
- ✅ 品質75%で圧縮
- ✅ レスポンシブ対応（`sizes`属性）

**改善の余地**:
- ❌ `width`と`height`が明示的に指定されていない（`fill`を使用）
- ❌ アスペクト比が統一されていない
- ❌ 元の画像が必要以上に大きい

---

## ✅ 推奨される改善策

### 優先度: 最高 🔥

#### 1. 画像のアスペクト比を統一する

**推奨アスペクト比**: **3:2（1.5:1）**
- カードの表示サイズ（284 x 192 px）に最も近い
- 一般的なカード画像の標準比率

**必要な作業**:
```bash
# test01.jpg: 981 x 360 → 540 x 360（1.5:1）にトリミング
# test02.jpg: 640 x 360 → 540 x 360（1.5:1）にトリミング
```

#### 2. 画像の解像度を最適化する

**推奨解像度**: **600 x 400 px（3:2）**
- デスクトップ表示（284px）の約2倍（Retinaディスプレイ対応）
- モバイル表示（最大375px）にも対応
- ファイルサイズを大幅に削減

**期待される効果**:
- ファイルサイズ: 約50-70%削減
- LCP（Largest Contentful Paint）: 大幅改善
- Performance Score: +5-10点

#### 3. `width`と`height`を明示的に指定する

**現在のコード**:
```typescript
<Image
  src="/images/test02.jpg"
  alt="..."
  fill  // ← これが問題
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={75}
  priority={card.priority || false}
/>
```

**推奨コード**:
```typescript
<Image
  src="/images/test02.jpg"
  alt="..."
  width={600}   // ← 明示的に指定
  height={400}  // ← 明示的に指定
  className="object-cover w-full h-full"
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={75}
  priority={card.priority || false}
/>
```

**メリット**:
- CLS（Cumulative Layout Shift）の改善
- Lighthouseの「Image elements do not have explicit width and height」警告の解消

---

## 🎯 具体的な実装手順

### ステップ1: 画像を最適化する

**ツール**:
- **Squoosh**: https://squoosh.app/
- **TinyPNG**: https://tinypng.com/

**手順**:
1. `test01.jpg`と`test02.jpg`をSquooshで開く
2. **リサイズ**: 600 x 400 px（3:2）にトリミング
3. **圧縮**: WebP形式、品質75-80%
4. **保存**: `public/images/`に上書き

### ステップ2: コンポーネントを修正する

**修正ファイル**:
- `components/sections/TwoCardSectionFixed.tsx`
- `components/sections/ServiceGridSectionFixed.tsx`

**修正内容**:
```typescript
// fill を削除し、width と height を明示的に指定
<Image
  src={card.image}
  alt={card.title}
  width={600}
  height={400}
  className="object-cover w-full h-full"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality={75}
  priority={card.priority || false}
/>
```

### ステップ3: 再ビルドと測定

```bash
npm run build
npm start
# Lighthouseで再測定
```

---

## 📊 期待される改善効果

| 項目 | 現在 | 改善後 | 効果 |
|------|------|--------|------|
| **test01.jpg** | 139.86 KB | 約40-50 KB | -65% |
| **test02.jpg** | 40.74 KB | 約30-40 KB | -25% |
| **LCP** | 遅い | 高速化 | +3-5点 |
| **CLS** | 不安定 | 安定 | +1-2点 |
| **Performance** | 69点 | **75-80点** | **+6-11点** |

---

## 🔍 現在の状況まとめ

### ✅ 良い点
1. **Next.jsの自動最適化が動作している**
   - WebP/AVIF形式に自動変換
   - リサイズと圧縮が適用されている
   - `sizes`属性でレスポンシブ対応

2. **ファイルサイズが小さい**
   - test01.jpg: 139.86 KB（許容範囲）
   - test02.jpg: 40.74 KB（非常に良い）

3. **`priority`属性が設定されている**
   - Above the fold画像が優先読み込み

### ❌ 改善が必要な点
1. **アスペクト比が不統一**
   - test01.jpg: 2.72:1（横長すぎる）
   - test02.jpg: 1.78:1（16:9）
   - 表示: 1.48:1（3:2）

2. **`fill`プロパティの使用**
   - `width`と`height`が明示的でない
   - CLSに悪影響

3. **解像度が過剰**
   - 表示サイズの2-3倍の解像度

---

## 📝 結論

**Next.jsの自動最適化は正しく動作していますが、さらなる改善の余地があります。**

**最優先アクション**:
1. 画像を**600 x 400 px（3:2）**にリサイズ・トリミング
2. `fill`を削除し、`width={600} height={400}`を明示的に指定
3. 再ビルドしてLighthouseで測定

**これで75-80点を達成できるはずです！**








