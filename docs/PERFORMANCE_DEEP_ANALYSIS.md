# パフォーマンス詳細分析

## 現状
- **トップページ**: 68点
- **Web開発ページ**: 57点
- **本番モード**: 有効

## 実施済みの最適化
1. ✅ Header を Server Component に変換
2. ✅ 画像を最適化（1200x450px、200KB以下）
3. ✅ Next.js Image コンポーネント使用
4. ✅ 不要な機能を削除

## 次の調査項目

### 1. JavaScript バンドルサイズ
- [ ] 各ページの JavaScript サイズを確認
- [ ] 未使用のライブラリを特定
- [ ] Code splitting の効果を確認

### 2. フォント読み込み
- [ ] Noto Sans JP の読み込み方法を確認
- [ ] font-display: swap が有効か確認
- [ ] サブセット化されているか確認

### 3. CSS
- [ ] Tailwind CSS のパージが正しく動作しているか
- [ ] 未使用の CSS を特定
- [ ] Critical CSS の抽出

### 4. Third-party Scripts
- [ ] 外部スクリプトの有無を確認
- [ ] Analytics などの影響を確認

### 5. レンダリング
- [ ] First Contentful Paint (FCP)
- [ ] Largest Contentful Paint (LCP)
- [ ] Total Blocking Time (TBT)
- [ ] Cumulative Layout Shift (CLS)

## 目標
- **モバイル**: 80点以上
- **デスクトップ**: 90点以上







