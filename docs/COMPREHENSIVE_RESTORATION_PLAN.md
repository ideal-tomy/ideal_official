# 完全復元実行計画書

## 🎯 目標
元の`app/philosophy/page.tsx`ファイルの完全な構造を維持しながら、パフォーマンス改善を段階的に適用する。

## 📋 実行手順

### ステップ1: 各セクションの詳細分析

#### 1.1 セクション1: 問題と課題（The Conflict）
**分析対象**: 行500-624
**内容**:
- セクションタイトル構造
- 高すぎる「信用のコスト」の詳細レイアウト
- 構造的矛盾が誘発する「不誠実の連鎖」の複雑なグリッドレイアウト
- 「正直者が報われない」構造の正体
- そもそも「正当な評価」とは何か？
- 日常に潜む「価値の目詰まり」の具体例（ThreeCardSection）
- セクション終了部分の詳細テキスト

**出力ファイル**: `docs/section-analysis/01-conflict-section.md`

#### 1.2 セクション2: 歪められた価値の再定義（The Philosophy）
**分析対象**: 行626-716
**内容**:
- セクションタイトル構造
- アコーディオン項目（philosophyItems）
- 評価をごまかす優しさは、誰も救わない
- ラディカルな正直さの物理法則
- セクション内の詳細なテキスト構造

**出力ファイル**: `docs/section-analysis/02-philosophy-section.md`

#### 1.3 セクション3: 基本設計（The Mechanism）
**分析対象**: 行718-760
**内容**:
- セクションタイトル構造
- 設計思想の説明
- 公正さを支える6つの絶対条件（ThreeCardSection）
- 各工程（Accordion）
- セクション内の詳細なレイアウト

**出力ファイル**: `docs/section-analysis/03-mechanism-section.md`

#### 1.4 セクション4: 価値観で進化する組織構造（The Structure）
**分析対象**: 行762-830
**内容**:
- セクションタイトル構造
- 「価値観による分岐の自由」へ
- フォーク：二つの進化のかたち
- フォークが促す健全な進化のメカニズム
- セクション内の詳細なテキスト構造

**出力ファイル**: `docs/section-analysis/04-structure-section.md`

#### 1.5 セクション5: ロードマップ（The Path）
**分析対象**: 行832-858
**内容**:
- セクションタイトル構造
- 思想の具現化：100年続くインフラへの道筋
- ロードマップアコーディオン（青枠付き）
- セクション内の詳細なレイアウト

**出力ファイル**: `docs/section-analysis/05-path-section.md`

#### 1.6 セクション6: 技術の進化がもたらす新しい『最適化』（The Declaration）
**分析対象**: 行860-937
**内容**:
- セクションタイトル構造
- 生き方の選択肢を増やしたい
- 技術が可能にする『新しい最適化』
- セクション内の詳細なテキスト構造

**出力ファイル**: `docs/section-analysis/06-declaration-section.md`

### ステップ2: データ構造の詳細分析

#### 2.1 カードデータの分析
**分析対象**: 行25-192
**内容**:
- valueClogCards（価値の目詰まり具体例）
- absoluteConditionsCards（公正さを支える6つの絶対条件）
- 各カードの正確な構造
- モーダルコンテンツの詳細

**出力ファイル**: `docs/data-analysis/card-data.md`

#### 2.2 アコーディオンデータの分析
**分析対象**: 行194-424
**内容**:
- processSteps（各工程）
- philosophyItems（哲学セクション）
- roadmapItems（ロードマップ）
- 各アコーディオン項目の正確な構造

**出力ファイル**: `docs/data-analysis/accordion-data.md`

### ステップ3: セクションコンポーネントの段階的作成

#### 3.1 ValueClogSection.tsx の作成
**手順**:
1. セクション1の分析結果を基にコンポーネントを作成
2. 元のファイルの該当部分と一文字ずつ比較
3. スタイリングクラスの正確な適用
4. ThreeCardSectionの正確な使用方法
5. データの正確な配置

**検証手順**:
```bash
# 元のファイルの該当部分を抽出
sed -n '500,624p' original_page.tsx > temp_conflict_section.txt

# 作成したコンポーネントの内容と比較
diff -u temp_conflict_section.txt ValueClogSection.tsx
```

#### 3.2 PhilosophySection.tsx の作成
**手順**:
1. セクション2の分析結果を基にコンポーネントを作成
2. 元のファイルの該当部分と一文字ずつ比較
3. アコーディオンの正確な使用方法
4. テキスト構造の正確な再現

**検証手順**:
```bash
# 元のファイルの該当部分を抽出
sed -n '626,716p' original_page.tsx > temp_philosophy_section.txt

# 作成したコンポーネントの内容と比較
diff -u temp_philosophy_section.txt PhilosophySection.tsx
```

#### 3.3 MechanismSection.tsx の作成
**手順**:
1. セクション3の分析結果を基にコンポーネントを作成
2. 元のファイルの該当部分と一文字ずつ比較
3. 公正さを支える6つの絶対条件の正確な配置
4. 各工程アコーディオンの正確な使用方法

**検証手順**:
```bash
# 元のファイルの該当部分を抽出
sed -n '718,760p' original_page.tsx > temp_mechanism_section.txt

# 作成したコンポーネントの内容と比較
diff -u temp_mechanism_section.txt MechanismSection.tsx
```

#### 3.4 StructureSection.tsx の作成
**手順**:
1. セクション4の分析結果を基にコンポーネントを作成
2. 元のファイルの該当部分と一文字ずつ比較
3. テキスト構造の正確な再現
4. スタイリングの正確な適用

**検証手順**:
```bash
# 元のファイルの該当部分を抽出
sed -n '762,830p' original_page.tsx > temp_structure_section.txt

# 作成したコンポーネントの内容と比較
diff -u temp_structure_section.txt StructureSection.tsx
```

#### 3.5 PathSection.tsx の作成
**手順**:
1. セクション5の分析結果を基にコンポーネントを作成
2. 元のファイルの該当部分と一文字ずつ比較
3. ロードマップアコーディオンの正確な使用方法
4. 青枠の正確な適用

**検証手順**:
```bash
# 元のファイルの該当部分を抽出
sed -n '832,858p' original_page.tsx > temp_path_section.txt

# 作成したコンポーネントの内容と比較
diff -u temp_path_section.txt PathSection.tsx
```

#### 3.6 DeclarationSection.tsx の作成
**手順**:
1. セクション6の分析結果を基にコンポーネントを作成
2. 元のファイルの該当部分と一文字ずつ比較
3. テキスト構造の正確な再現
4. スタイリングの正確な適用

**検証手順**:
```bash
# 元のファイルの該当部分を抽出
sed -n '860,937p' original_page.tsx > temp_declaration_section.txt

# 作成したコンポーネントの内容と比較
diff -u temp_declaration_section.txt DeclarationSection.tsx
```

### ステップ4: データファイルの段階的作成

#### 4.1 カードデータファイルの作成
**手順**:
1. 分析したカードデータを基にファイルを作成
2. 元のファイルの該当部分と一文字ずつ比較
3. モーダルコンテンツの正確な再現

**出力ファイル**:
- `data/philosophy/valueClogCards.tsx`
- `data/philosophy/absoluteConditionsCards.tsx`

#### 4.2 アコーディオンデータファイルの作成
**手順**:
1. 分析したアコーディオンデータを基にファイルを作成
2. 元のファイルの該当部分と一文字ずつ比較
3. 各アコーディオン項目の正確な構造

**出力ファイル**:
- `data/philosophy/processSteps.tsx`
- `data/philosophy/philosophyItems.tsx`
- `data/philosophy/roadmapItems.tsx`

### ステップ5: メインページファイルの段階的構築

#### 5.1 基本構造の作成
**手順**:
1. 元のファイルの基本構造をコピー
2. インポート文の正確な配置
3. メタデータの正確な設定
4. ヘッダーとナビゲーションの正確な配置

#### 5.2 セクションコンポーネントの段階的統合
**手順**:
1. 各セクションコンポーネントを順番通りに配置
2. セクション間の正確な関係性を維持
3. スタイリングの正確な適用
4. 機能の正確な動作確認

#### 5.3 最終検証
**手順**:
1. 完成したページと元のファイルの完全な比較
2. 一文字ずつの確認
3. スタイリングの確認
4. 機能の動作確認

### ステップ6: パフォーマンス改善の段階的適用

#### 6.1 データの外部化
**手順**:
1. 作成したデータファイルをインポート
2. メインページファイルからデータ定義を削除
3. 動作確認

#### 6.2 セクションコンポーネントの分離
**手順**:
1. 作成したセクションコンポーネントをインポート
2. メインページファイルからセクション内容を削除
3. 動作確認

#### 6.3 遅延読み込みの適用
**手順**:
1. セクションコンポーネントに遅延読み込みを適用
2. ローディング状態の設定
3. 動作確認

## 🔍 検証手順

### 各ステップでの検証
1. **内容の正確性**: 元のファイルとの一文字ずつの比較
2. **スタイリングの正確性**: クラス名とスタイルの確認
3. **機能の正確性**: コンポーネントの動作確認
4. **構造の正確性**: セクション間の関係性の確認

### 最終検証
1. **完全な比較**: 完成したページと元のファイルの完全な比較
2. **機能テスト**: すべての機能の動作確認
3. **パフォーマンステスト**: パフォーマンス改善の確認

## 📁 出力ファイル構造

```
docs/
├── section-analysis/
│   ├── 01-conflict-section.md
│   ├── 02-philosophy-section.md
│   ├── 03-mechanism-section.md
│   ├── 04-structure-section.md
│   ├── 05-path-section.md
│   └── 06-declaration-section.md
├── data-analysis/
│   ├── card-data.md
│   └── accordion-data.md
└── COMPREHENSIVE_RESTORATION_PLAN.md

components/philosophy/
├── ValueClogSection.tsx
├── PhilosophySection.tsx
├── MechanismSection.tsx
├── StructureSection.tsx
├── PathSection.tsx
├── DeclarationSection.tsx
└── index.tsx

data/philosophy/
├── valueClogCards.tsx
├── absoluteConditionsCards.tsx
├── processSteps.tsx
├── philosophyItems.tsx
├── roadmapItems.tsx
└── index.tsx
```

## ⚠️ 重要な注意事項

1. **一文字ずつの確認**: 各ステップで元のファイルとの完全な一致を確認
2. **段階的な検証**: 各ステップで動作確認を行う
3. **バックアップの維持**: 各ステップでバックアップを作成
4. **ロールバック準備**: 問題が発生した場合のロールバック手順を準備

## 🎯 成功基準

- [ ] 元のファイルの完全な構造を維持
- [ ] セクション配置が正確
- [ ] セクションタイトルのデザインが統一
- [ ] すべての機能が正しく動作
- [ ] パフォーマンス改善を維持
- [ ] 一文字残らず元のファイルと一致
