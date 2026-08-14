# WhatWeBuild ミニモック仕様（L1）

最終更新: 2026-08-14  
対象: `/services` の「こんなサイトが作れます」「こんなツールが作れます」カード挿絵  
v1 参考: [site_type_card_structure_glyphs.svg](./site_type_card_structure_glyphs.svg)

## 役割

- 触るデモ（InteractionShowcase / ProductShowcase）ではない
- 実デモ PNG（`#experience`）ほど写実的にしない
- **型の違い + 業務イメージ 1 要素** を 3 秒で判別できるようにする

## キャンバス

| 項目 | 値 |
|------|-----|
| viewBox | `0 0 320 200`（field-line のみ `0 0 360 200`） |
| 安全域 | 上下左右 20px（中身は 280×160） |
| カード枠 | `aspect-[16/10]`、中央配置、`max-w-[85%]` |
| 角丸 | カード 12 / UI 部品 8 / スマホ 24 |
| 要素数 | 7±2 |
| ラベル | 0〜2 語。カード見出しと重複する語は入れない |

## 色（CSS 変数。ハードコード禁止）

| トークン | 参照 |
|----------|------|
| `--mock-bg` | `--site-bg-elevated` |
| `--mock-surface` | `--site-bg` |
| `--mock-border` | `--site-border` |
| `--mock-fg` | `--site-fg` |
| `--mock-muted` | `--site-fg-muted` |
| `--mock-accent` | `--color-brand` |
| `--mock-accent-soft` | brand 12% mix |

v1 グリフの緑 `#0f6e56` は使わない。LINE 緑も使わない。

## 禁止

- 人物・ストックフォト・実スクショ
- 読めない細かい本文
- Web 流用を App に使うこと

---

## 6 枚

### web-corporate — 複数ページ + 共通ヘッダー

```
  [ nav bar ]
   [back] [mid]
      [FRONT: hero + 2 blocks]
```

- 3 ページ扇状。前面のみヒーロー帯 + セクション 2 塊
- 背面はヘッダー／フッター線のみ一致
- alt: 複数ページで構成され、共通ヘッダーを持つコーポレートサイトの構造

### web-lp — 1 カラム縦スクロール + CTA

```
  [hero]
  [block]
  [CTA]
  |scrollbar|
```

- 狭いビューポート 1 枚。視線が下へ
- alt: 縦長1枚と下部CTAを持つLPの画面構造

### web-business — サイドバー + テーブル + 詳細

```
 [nav] [search]
 [nav] [4 rows] |detail|
```

- 1 行だけ右から詳細パネル
- alt: サイドバーと一覧・詳細を持つ業務Webの画面構造

### app-admin — ダッシュボード集約

```
 [KPI][KPI][KPI]  [+]
 [filter]
 [☑ rows]
 (excel/paper/mail 小・半透明)
```

- alt: KPIと一覧に集約された管理画面の構造

### app-member — スマホ予約

```
     [phone]
      card
      status
      CTA
```

- alt: スマホで予約・確認できる顧客向け画面の構造

### app-field-line — 3 コマフロー（最重要）

```
 phone入力 → 通知 → 管理行ハイライト
```

- viewBox `0 0 360 200`
- ②は brand の通知カード（LINE 緑禁止）
- ③は 2 行目だけ accent-soft
- alt: 現場入力から通知、管理画面反映までの流れ

---

## 実装

- Inline React SVG（`<img>` 不使用）
- ラッパー `role="img"` + `aria-label`
- 旧 `public/images/services/what-we-build/*.svg` は削除
