# AIコンシェルジュ — サイト案内役（設計ドキュメント）

最終更新: 2026-07-23  
関連: [`SITE_EXPERIENCE_REDESIGN.md`](./SITE_EXPERIENCE_REDESIGN.md) / 営業: [`AI_CONCIERGE_SALES_SCENARIO.md`](./AI_CONCIERGE_SALES_SCENARIO.md)

## 0. 目的

ideal 公式サイトの右下コンシェルジュを、

- **ヒアリング → 要件整理 → 概算** の簡易コンサル

から、

- **自然言語 / チップ → 短い答え + サイト内最適リンク**

の **サイト案内役** に再設計する。

---

## 1. 入口の二層

| 入口 | 挙動 |
|------|------|
| 常駐 FAB（ロボット） | いつでも案内チャットを開く |
| FooterConcierge | フッター直前到達で1セッション1回。チップは直リンク（チャット起動しない） |

Footer あいさつ表示中は右下 FAB を隠し、同じロボットの二重表示を避ける。

---

## 2. 意図カタログ（テンプレ正本）

| id | 主リンク |
|----|----------|
| pricing | `/estimate` |
| demos | `/ai-capability-gallery` |
| cases | `/cases` |
| contact | `/contact` |
| how_we_work | `/how-we-work`（副: `/contact`） |
| difference | `/#reason` |
| off_topic | 拒否 + `/contact` 等 |

実装: `lib/concierge/guide/`

---

## 3. テンプレ vs AI（課金）

| 場面 | 手段 |
|------|------|
| チップ / キーワード一致 | テンプレのみ（OpenAI 不使用） |
| ルール不一致の自由入力 | AI は **intent id 分類のみ** → 本文はテンプレ |
| API キーなし / レート超過 | 曖昧拒否テンプレ + チップ再提示 |
| 根拠つき短文 | `CONCIERGE_GUIDE_GROUNDED=1` のときのみ（初期オフ） |

使わない: チャット内概算、長文要件ドラフト、サイト外一般知識。

API: `POST /api/concierge/guide`

---

## 4. 旧フロー

選択式（IdealConciergeFlow）・パネル内概算・要件 AI は主 UX から切り離し。ファイルは残置してもよいが UI からは呼ばない。

---

## 5. 受け入れ

- 6意図のチップ／典型フレーズは API キーなしで正しいページへ誘導
- サイト外は拒否テンプレ
- 金額は `/estimate` のみ
- Footer 到達時のみあいさつ（セッション1回）、チップは実在 URL
- テンプレヒット時は OpenAI を呼ばない
