# 建設 — 3本建てデモ構成 PLAN

最終更新: 2026-07-24  
Industry ID: `construction`  
サイト業界カード id: `construction`

共通原則: [`README.md`](./README.md)  
型の先行例: [`manufacturing.md`](./manufacturing.md)  
UX／業種別UI: [`ux-saas-principles.md`](./ux-saas-principles.md) §4.2

---

## 0. ビジュアル方針

| 項目 | 決定 |
|------|------|
| トーン | 屋外・手袋でも押せる。目立つ色・大きな文字 |
| 色 | 高コントラスト。完了／注意が遠くから分かる |
| 文字 | 大きめ・短いラベル |
| 主端末 | **スマホメイン** |
| 参考 | 優れた現場／工事・配送系モバイルアプリ |
| 禁止 | 製造プレイヤーシェルの流用 |

---

## 1. 楔（隙間）と証明する一文

### 楔

**現場で撮る・見る** と **事務所に戻ってからの整理・転記・報告・管理** のあいだ。  
写真は溜まるが、仕事になる形にする工程が別業務になっている。

### 証明する一文

現場の記録が、退勤後の山積み作業ではなく、その場〜短時間で「仕事の材料・報告・管理」に載る。

---

## 2. ハブ構成

組み合わせ文（ハブに必ず出す）:

> 撮る → 整える → 報告・管理に載せる。つながると「写真と記録が現場の延長で仕事になる」。

| # | Demo ID | テーマ名 | 体験の核（一言） | 主役役割 | status |
|---|---------|----------|------------------|----------|--------|
| ① | `con-photo-sort` | 写真の仕事化 | 散在写真 → 分類・命名 | 現場・事務 | `ready_asset` |
| ② | `con-report-draft` | 報告書・朝礼下書き | 写真 → 報告書/朝礼 → 確認提出 | 現場・内勤 | `ready_asset` |
| ③ | `con-site-ops` | 現場オペ画面 | 記録・確認が回る業務アプリ | 管理・監督 | `external_only` |

推奨の初回着地: **Demo①**（最短）または商談では②（実務感が強い）  
現場段取り（`fieldDandori`）: **関連部品**。公開3本に同格で並べない。

---

## 3. Demo 詳細

### Demo① — 写真の仕事化

- **Demo ID:** `con-photo-sort`
- **公開UI:** [`construction_demo` `/photo`](../../../../construction_demo)（外部ハブ内）
- **status:** `ready_asset`
- **ギャップ:** なし（サイト内ギャラリーは本線に使わない）
- **受け入れ（Demo単体）:** 「写真が分類・命名される」を自分の現場に置き換えられる

### Demo② — 報告書・朝礼下書き

- **Demo ID:** `con-report-draft`
- **公開UI:** `construction_demo` `/report`
- **リポジトリ:** [`construction_demo`](../../../../construction_demo)（https://github.com/ideal-tomy/construction_demo）
- **公開:** `https://construction-demo-two.vercel.app`
- **status:** `ready_asset`
- **受け入れ（Demo単体）:** 「写真から報告書下書きまで」を説明できる

### Demo③ — 現場オペ画面

- **Demo ID:** `con-site-ops`
- **公開:** `https://kanri-kensetsu.vercel.app/login`（ハブ③）
- **status:** `external_only`
- **受け入れ（Demo単体）:** 「現場記録がアプリで回る」が、①②の延長として想像できる

---

## 4. サイト導線（ideal_official）

| 箇所 | 現状 | 方針 |
|------|------|------|
| TOP 建設カード `tryHref` | 外部ハブ | `EXTERNAL_DEMO_URLS.construction` · `tryExternal: true` |
| `/construction` | 外部へ redirect | 互換用 |
| ギャラリー photo-to-classification | 部品・試食 | **建設本線には使わない** |
| portfolio | 外部ハブ | ready |

---

## 6. 実装優先度

| Phase | 内容 | 完了条件 |
|-------|------|----------|
| P1 | ② 本格デモ掲載 | **done** |
| P2 | 建設ハブ（外部） | **done** `construction_demo` `/` |
| P3 | TOP → 外部ハブ | **done**（製造と同型） |

---

## 7. ハブ受け入れ（業界単位）

- [x] 楔と組み合わせ文がハブ上で読める（外部 `/`）
- [x] ①写真／②報告書／③オペの違いが30秒で分かる
- [x] サイト内ギャラリーに建設本線が着地しない
- [x] 「撮る→整える→載せる」が想像できる
- [x] ROI / 相談へ進める
