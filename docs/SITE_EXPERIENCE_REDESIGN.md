# ideal サイト体験再設計（設計ドキュメント）

最終更新: 2026-07-10

## 0. この文書の目的

ideal 公式サイトを、

- **説明するサイト**（技術カテゴリ別の長文解説）

から、

- **技術を体験させるサイト**（触る → 置き換える → 依頼する）

へ再設計するための情報設計（IA）とページ役割定義。

既存のモーダル・タブ・モーション・技術解説は **削除せず再配置** する。

---

## 1. 背景と課題

### 現状の強み

既に「Webをちゃんと作れる」証拠になる要素がある。

- モーダル / タブ / カード / アコーディオン
- スクロール・ページ遷移モーション
- 背景演出 / ホバー / グラデーション
- AI Capability Demo Gallery（触れるデモ）
- Philosophy / Research（思想・研究の深さ）

### 現状の課題

| 課題 | 具体 |
|------|------|
| ページ軸が古い | Web / AI / BC / Metaverse の「技術カテゴリ」分割 |
| UIの役割が説明寄り | モーダル等が「技術説明を読むため」に使われている |
| 入口が重い | 小規模事業者に DAO・比較・導入理由が先に来る |
| 資産が埋もれる | デモギャラリーが AI サービス下に閉じている |
| 成長モデルが弱い | デモ追加 → 記事 → 業界導線の循環が未設計 |

### これからやりたいこと

- デモを継続的に増やす
- 業界ごとの「業務課題 → AI解決」事例・フローを増やす
- 案件獲得と研究機関性の両立（入口は体験、奥に思想）

---

## 2. 設計原則

1. **ページは技術名ではなく目的で分ける**
2. **説明せず、感じてもらう**（AIもWebも同じ思想）
3. **削除ではなく再配置**
4. **動く場所に濃淡をつける**（70%静か / 20%反応 / 10%驚かせる）
5. **デモが増えるほどサイトが強くなる循環**を作る
6. **既存URLは急に壊さない**（段階移行・リダイレクト）

---

## 3. サイト全体の4分類

| 種別 | 役割 | ユーザーの問い |
|------|------|----------------|
| **DEMOS** | 触ってもらう | 何ができる？ |
| **SERVICES** | 依頼内容を理解してもらう | 何を頼める？ |
| **CASES / IDEAS** | 自社に置き換えてもらう | うちでも使える？ |
| **LAB** | 技術や思想を深く知ってもらう | なぜ・どう作る？ |

理想導線:

```
TOP
 → DEMOS（触る）
 → CASES（置き換える）
 → SERVICES（依頼を理解）
 → LAB（必要なら深く知る）
 → CONTACT（相談）
```

横断導線として **AIコンシェルジュ** が各ページの文脈を理解し、  
「自社に置き換える → 要件整理 → 概算 → 相談」へ案内する（詳細: [`AI_CONCIERGE_REDESIGN.md`](./AI_CONCIERGE_REDESIGN.md)）。

---

## 4. 推奨サイトマップ（目標構造）

```
/
├── /demos
│   ├── /demos/ai-capability-gallery          # 既存ギャラリーを昇格
│   ├── /demos/ai-capability-gallery/[slug]    # 既存7デモ
│   └── /demos/[industry-or-prototype]        # 今後追加
│
├── /services
│   ├── /services/web                         # Web体験型（旧 web-development 再設計）
│   ├── /services/ai                          # AI Hub（旧 ai-consulting 再設計）
│   └── /services/apps-tools                  # 業務Web/アプリ（旧 app を整理）
│
├── /cases
│   ├── /cases/industries/[slug]              # 建設・介護・農業・DD 等
│   └── /cases/problems/[slug]                # 課題起点（写真整理・入力負担 等）
│
├── /lab
│   ├── /lab                                  # LABトップ
│   ├── /lab/philosophy                       # 旧 /philosophy
│   ├── /lab/research                         # 旧 /research
│   ├── /lab/blockchain                       # 旧 blockchain 詳細の研究寄り
│   ├── /lab/metaverse                        # 旧 metaverse の研究寄り
│   └── /lab/insights/[slug]                  # 旧サービス長文の記事化
│
├── /about                                    # 会社情報（必要なら）
└── /contact
```

### 既存URLとの対応（移行方針）

| 現行 | 目標 | 移行 |
|------|------|------|
| `/ai-capability-gallery` | `/demos/ai-capability-gallery` | 当面現行維持可。後で rewrite/redirect |
| `/services/ai-consulting` | `/services/ai` | 再設計後 redirect |
| `/services/web-development` | `/services/web` | 再設計後 redirect |
| `/services/app-development` | `/services/apps-tools` | 整理後 redirect |
| `/services/blockchain-development` | `/lab/blockchain` + SERVICES要約 | 分割再配置 |
| `/services/metaverse` | `/lab/metaverse` | 再配置 |
| `/philosophy` | `/lab/philosophy` | redirect |
| `/research` | `/lab/research` | redirect |

**Phase 1〜2 では URL 変更を必須にしない。** 中身の役割変更を先に行い、ナビと導線を新IAに寄せる。

---

## 5. 各ページ種別の詳細

### 5-1. DEMOS — 触ってもらう

**主役。** 技術力を文章で説明せず、実際に感じてもらう。

現状資産:

- `/ai-capability-gallery`（Hub + 7デモ）
- ショーケース自動再生UI
- Floating Pill ナビ

今後追加:

- 業界特化デモ（建設・介護・農業・DD）
- AI受付など単機能プロトタイプ

ページ体験:

- プロダクトギャラリー型
- 1画面1メッセージ
- CTA は「体験する」「自社向けに作る」

### 5-2. SERVICES — 依頼内容を理解してもらう

依頼可能な範囲・向き不向き・進め方を短く示す。  
長い技術解説・比較・導入啓蒙は置かない。

推奨サービス軸（当面）:

1. **Web / LP** — コーポレート、LP、サービスサイト
2. **AI** — プロトタイプ、業務ツール、デモ制作
3. **Webアプリ・業務ツール** — 業務Webアプリ、会員、管理画面、現場入力

各ページの共通骨格（短く）:

1. Hero（何を頼めるか）
2. 向いている人 / 向いていない人
3. 制作の流れ（3〜5ステップ）
4. 関連デモ or Interaction Showcase への導線
5. CTA

### 5-3. CASES / IDEAS — 自社に置き換えてもらう

**これから最も伸ばす領域。**

型（テンプレート）:

```
課題の現状フロー（Before）
  ↓
AI介入後のフロー（After）
  ↓
関連デモを体験する
  ↓
相談する
```

例: 建設・現場写真

```
撮る → 戻る → 整理 → 分類 → 転記
  ↓
アップロード → AI判定 → 自動整理 → 報告書候補
  ↓
写真→分類デモへ
```

導線: **記事 → デモ → 相談**

### 5-4. LAB — 技術や思想を深く知ってもらう

研究機関的な深さをここに集約。トップの第一導線にはしない。

置くもの:

- DAO / Philosophy
- Research / PoC
- Blockchain / Metaverse の深い解説
- 旧サービスページの長文（比較・導入理由・人材論）を Insights 化

---

## 6. ページ別UI方針（体験の差をつける）

サイト全体のトーン（黒基調・青/シアン・余白）は統一しつつ、**ページごとに体験型を変える**。

| ページ | 体験型 | モーション方針 |
|--------|--------|----------------|
| TOP | ブランド入口 | Hero のみ強め。他は静か |
| DEMOS | プロダクトギャラリー | ショーケース自動再生。カードは軽いホバー |
| AI Hub | データフロー / 能力ハブ | ギャラリー連携。説明は最小 |
| WEB | インタラクティブ・ショーケース | ここが「Web技術デモ」の主戦場 |
| APP | 操作体験・プロダクトショーケース | 入力→処理→結果。Showcase 内で反応を濃く |
| CASES | 読み物・ストーリー | ほぼ静か。図解とフローが主役 |
| LAB | 研究アーカイブ | 既存の詳細UIを維持可 |
| CONTACT | 静かなゴール | 装飾最小 |

### モーション配分ルール

- **70% 静か** — 読ませる・選ばせる
- **20% 反応** — ホバー、軽いフェード
- **10% 驚かせる** — Hero、注目デモ、Web Showcase の一部

全セクションを動かさない。

---

## 7. Webページ再設計方針

**このページ自体が Web 制作技術のデモ。**

### 構成案

1. **Hero** — 表現力を体験（反応する背景 / 文字 / パララックスは1つに絞る）
2. **Interaction Showcase** — Modal / Motion / Interaction を実際に触らせる
3. **What we build** — コーポレート / LP / 業務Web（短く）
4. **Under the Hood** — 技術カード + モーダル（既存資産を流用）
5. **Process / CTA**

### Under the Hood モーダルに書くこと

- どんな時に使うか
- なぜ採用するか
- **このサイトのどこで使っているか**
- 実装例（短く）

「Reactが使えます」ではなく「このページの〇〇で使っている」と紐づける。

### 既存資産の行き先

| 現行 | 再配置先 |
|------|----------|
| 技術提供カード + モーダル | Under the Hood |
| タブ / 3カード | Interaction Showcase の題材 |
| 従来比較・導入理由 | LAB Insights |
| FAQ | SERVICES末尾に短縮、または LAB |

---

## 8. AIページ再設計方針

長い説明ページではなく **AI Capability Hub**。

### 構成案

1. **Hero** — 「AIで、仕事はどこまで変えられるか。」+ デモへCTA
2. **7つの業務変化** — ギャラリーへの入口（既存）
3. **注目デモ** — 大型2〜3本（ギャラリーショーケースへのアンカー or 埋め込み）
4. **業界で見る** — 建設 / 介護 / 農業 / DD / 店舗 / バックオフィス → Cases
5. **課題から見る** — 入力面倒 / 写真整理 / 文書 / 繰り返し作業 → 対応デモ
6. **開発の進め方** — 短く（連携・プロトタイプ・本番）
7. **技術詳細** — アコーディオン/モーダル（興味ある人だけ）
8. **CTA**

### 現行AIページからの退避

| 現行セクション | 行き先 |
|----------------|--------|
| 従来技術との比較 | LAB Insights |
| 導入に必要な要素 | LAB Insights |
| なぜ今導入が必要か | LAB Insights |
| ワークライフバランス | LAB Insights |
| 技術提供の詳細モーダル | Hub の「技術詳細」に圧縮 |

デモギャラリーがある今、AIページ単体の長文説明は主役にしない。

---

## 9. TOP の役割変更

現行 TOP は「ITサービス一覧 + DAO」の二核。

目標 TOP:

1. Hero（ブランド）
2. **触れる入口**（Demo Gallery への強い導線）
3. **依頼できること**（Web / AI / Apps の3つ、短く）
4. **事例の予告**（Cases 1〜2本）
5. LAB への控えめな導線
6. CTA

DAO / Philosophy は TOP の半分を占めない。LAB へ。

---

## 10. ナビ案（段階導入）

### Phase 1（URL変更なし）

```
トップ
デモ（→ /ai-capability-gallery）
サービス（ドロップダウン: Web / AI / Webアプリ・業務ツール）
LAB（→ /philosophy または /lab 仮）
問い合わせ
```

### Phase 2（Cases 追加後）

```
トップ
デモ
事例
サービス
LAB
問い合わせ
```

Header の「DAO研究・取り組み」は LAB に改名・統合。

---

## 11. コンテンツ循環モデル

```
新デモを作る
  → DEMOS に追加
  → 関連 Cases（業界・課題）を1本書く
  → SERVICES / AI Hub からリンク
  → CONTACT へ
```

例: AI受付デモ

- デモ本体
- 歯科 / 美容 / 宿泊の Cases
- 「電話受付の自動化」Insights
- AI Hub「課題から見る」に追加

**1デモ = 複数コンテンツ** になる設計を前提にする。

---

## 12. 成功指標（定性）

- 初見30秒で「触れるものがある」と分かる
- Webページを見た人が「制作技術を体験した」と感じる
- AIページを読まずにデモへ到達できる
- 旧長文が LAB に残り、入口が軽くなる
- デモ追加時に Cases を足す運用が回る

---

## 13. 関連ドキュメント

- 実装フェーズ: [`SITE_EXPERIENCE_IMPLEMENTATION_PLAN.md`](./SITE_EXPERIENCE_IMPLEMENTATION_PLAN.md)
- AI Gallery 要件: [`lp.md`](./lp.md)
- 旧ページ構成: [`PAGE_STRUCTURE.md`](./PAGE_STRUCTURE.md)
- 開発原則: [`concept.md`](./concept.md)
