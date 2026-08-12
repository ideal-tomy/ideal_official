# サイトマップ v2（公開導線）

最終更新: 2026-08-12  
状態: **起草（実装・リダイレクトの正本）**  
前提: [`SITE_IA_DIRECTION.md`](./SITE_IA_DIRECTION.md) §0–§7、§12（TOP §01 統合済み）

関連:

- リダイレクト実装表: [`REDIRECT_MAP.md`](./REDIRECT_MAP.md)
- W型LPブロック: [`re_demo/lp-block-definition-v1.md`](./re_demo/lp-block-definition-v1.md)

---

## 0. 設計の芯（3層 + 出口）

訪問者が辿る本線は次の3層だけ。説明の正本は **W型LP / F型LP** に集約する。

```text
【見る】 TOP §03 体験・デモ
    │  代表デモ4枚（左コピー + 右サンプル自動再生）
    │  CTA: 詳しく見る → LP / サンプルで体験 → 外部
    ▼
【読む】 /demo/w/{slug}（建設・製造など）
    │  試算 #roi / 相談 / 副CTA で触る ↗
    ▼
【触る】 外部デモ ↗（サンプル完走）
    │  ギャラリーは能力パターン索引として維持
    ▼
【出口】 /estimate · /contact · 外部デモハブ
```

| 層 | URL例 | 役割 | 書くこと |
|---|---|---|---|
| 見る | `/#demos` | パターン選別・興味喚起 | タイトル・Before/After・プレビュー。長文説明は書かない |
| 読む | `/demo/w/construction-record` · `/demo/document-to-extraction` | 業種/能力オファーの説得 | B00–B14。旧 cases の業務変化はここへ吸収 |
| 触る | `/ai-capability-gallery/voice-to-structured` | 能力パターンの体験 | LP副CTA・ギャラリー索引から。操作UI + 短いリード |
| 索引 | `/ai-capability-gallery` | パターン目次 | タイトル程度。プレビュー縦積みは持たない（TOPへ移した） |
| 手順 | `/how-we-work` | 導入の共通手順のみ | 業種別ストーリーは書かない |
| 出口 | `/estimate` `/contact` | 完了 | — |

**廃止するナビ上の「ページ種」:** 活用イメージ詳細（`/cases/industries/*`）を説明の正本にしない。

---

## 1. 公開サイトマップ（ツリー）

凡例: ✅ 実装済み · 🚧 計画 · 🔒 営業送付用（本線ナビから外す） · ⚪ 二次（サービス/LAB）

```text
ideal_official（公開）
│
├─ / ✅ TOP
│     ├─ Hero · Marquee
│     ├─ §01 業種 (#service)
│     ├─ §02 理由 (#reason)
│     ├─ §03 体験・デモ (#demos)
│     ├─ §04 News
│     ├─ §05 LAB (#lab)          ← 新設
│     └─ §06 Contact (#contact)
│
├─ /ai-capability-gallery ✅ パターン索引（痩せた本編）
│     └─ /{pattern} ✅ インタラクティブ体験 ×7
│           voice-to-structured
│           photo-to-classification
│           document-to-extraction
│           data-to-prediction
│           workflow-to-automation
│           knowledge-to-search
│           multi-input-to-report
│
├─ /demo
│     ├─ /w/{slug} ✅ W型LP（業種説得）
│     │     construction-record ✅
│     │     care-records ✅
│     │     manufacturing-judgment ✅
│     │     retail-support ✅
│     │     receiving-approval ✅
│     │     childcare-records ✅
│     │
│     └─ /{slug} ✅ F型LP（能力説得）
│           document-to-extraction 等3本（TOP §03 未マップ3本の着地。ナビ非掲載）
│
├─ /how-we-work ✅ 導入手順ハブ
│     └─ /{demoSlug} ⚪ デモ別ガイド（本線から外す方向）
│
├─ /estimate ✅ 概算
├─ /contact ✅ 相談
│
├─ /cases 🚧 一覧は過渡期のみ → 最終的に廃止または TOP へ
│     └─ /industries/{slug} 🚧 詳細廃止 → W型LP へリダイレクト
│
├─ /services ⚪ サービスハブ・各サービスページ（TOP業種の代替着地は廃止方向）
├─ /philosophy ⚪
├─ /lab ⚪
├─ /research ⚪
└─ 外部デモ ↗（construction_demo 等）— ページではなく体験先URL
```

---

## 2. TOP セクション（確定）

表示順と番号（2026-08-11 更新）:

| # | ラベル | id | 内容 | 主CTA |
|---|---|---|---|---|
| 01 | 業種 | `#service` | 4業種カード | 詳しく見る → W型LP |
| 02 | 理由 | `#reason` | 選ばれる理由 | デモを詳しく見る → `#demos` |
| 03 | 体験・デモ | `#demos` | 代表デモ4枚（サンプル完走） | 詳しく見る → W型LP · サンプルで体験 → 外部 |
| 04 | News | — | お知らせ | — |
| 05 | LAB | `#lab` | 思想・研究・解説への入口 | LAB を見る → `/lab` |
| 06 | Contact | `#contact` | 問い合わせ導線 | — |

Hero CTA「デモを詳しく見る」→ `#demos`（§03）。業種は §01 で最初に提示。

---

## 3. TOP 業種カード → 着地（目標）

| 業種カード | 詳しく見る（目標） | デモを直接開く | 現状 |
|---|---|---|---|
| 建設・設備 | `/demo/w/construction-record` ✅ | 建設ハブ ↗ | ✅ |
| 医療・福祉 | `/demo/w/care-records` ✅ | 介護デモ ↗ | ✅ |
| 製造 | `/demo/w/manufacturing-judgment` ✅ | 製造ハブ ↗ | ✅ |
| 小売・サービス | `/demo/w/retail-support` ✅ | CSデモ ↗ | ✅ |

ボタン規則（再掲）:

```text
［ 詳しく見る → ］   … W型LP 1本だけ
デモを直接開く ↗     … 外部デモ（補助テキストリンク）
```

---

## 4. W型LP 計画一覧

| slug（案） | 公開URL | 吸収元 cases | 外部デモ | 状態 |
|---|---|---|---|---|
| `construction-record` | `/demo/w/construction-record` | `construction-photo-sorting` | 建設ハブ | ✅ 公開 |
| `care-records` | `/demo/w/care-records` | `care-voice-records` | 介護デモ | ✅ 公開 |
| `manufacturing-judgment` | `/demo/w/manufacturing-judgment` | `knowledge-internal-search`（一部） | 製造ハブ | ✅ 公開 |
| `retail-support` | `/demo/w/retail-support` | `retail-demand-prediction`（副題吸収）/ CS主軸 | CSデモ | ✅ 公開 |
| `receiving-approval` | `/demo/w/receiving-approval` | — | 受入検査デモ | ✅ 公開 |
| `childcare-records` | `/demo/w/childcare-records` | — | 保育デモ | ✅ 公開 |

slug は実装前に brief で確定。上表は **REDIRECT_MAP** と同期する。

---

## 5. F型LP・ギャラリー詳細の住み分け

| 種別 | URL | 本線ナビ | 用途 |
|---|---|---|---|
| ギャラリー体験 | `/ai-capability-gallery/{pattern}` | ✅ デモ一覧 | 訪問者が「触る」正本（LP副CTA・索引から） |
| F型LP | `/demo/{pattern}` | 🔒 ナビ非掲載 | TOP §03 未マップ3本の着地 + 営業送付 |
| ギャラリー索引 | `/ai-capability-gallery` | ✅ | 目次のみ |

TOP §03 未マップ3本（`document-to-extraction` / `workflow-to-automation` / `multi-input-to-report`）は F型 `/demo/{slug}` へ直行。W型4本は `/demo/w/{slug}` へ直行。

---

## 6. cases（活用イメージ）の扱い

| 要素 | v2での扱い |
|---|---|
| `/cases/industries/{slug}` 詳細 | **廃止**。中身は W型LP の B04/B05/B08 等へ移す |
| `/cases` 一覧 | 過渡期のみ。最終的は TOP §02 または廃止 |
| Before/After・fit・demoScope | ページとしてではなく LP ブロックへ分解吸収 |
| ナビ「活用イメージ」 | FabDrawer 等から削除（リダイレクト完了後） |

cases が担っていた「流れがこう変わる」は **W型LP 内の図・タブ・短い Before/After** で足りる。独立ページ遷移は不要。

---

## 7. グローバルナビ（目標）

| 項目 | href（目標） | 現状 |
|---|---|---|
| トップ | `/` | ✅ |
| デモ一覧 | `/ai-capability-gallery` | ✅ |
| 活用イメージ | —（削除） | ❌ `/cases` 残存 |
| 自動見積もり | `/estimate` | ✅ |
| LAB | `/lab` | ✅ |
| お問い合わせ | `/contact` | ✅ |

---

## 8. 二次ページ（v2では本線に含めない）

訪問者の「AIデモを知りたい」本線には載せない。既存URLは維持可。

- `/services` および配下（ai-consulting, app-development, web-development）
- `/philosophy`
- `/lab` および配下
- `/research` および配下
- `/how-we-work/{demoSlug}`（デモ別ガイド）

TOP 業種カードの着地を `/services/ai-consulting` にする運用は **廃止方向**。

---

## 9. 実装フェーズ（サイトマップ観点）

| Phase | 内容 | サイトマップ上の変化 |
|---|---|---|
| A ✅ | 建設W型 + TOP建設切替 + TOP §01統合 + ギャラリー痩せ | 本線3層のプロトタイプ成立 |
| B1 🚧 | 介護W型 + TOP切替 + cases 介護リダイレクト | 業種2本目が正本化 |
| B2 🚧 | 製造・小売W型（ゲート通過後） | 業種4本完成 |
| C 🚧 | cases 詳細一括リダイレクト・一覧廃止・ナビ整理 | ツリーから cases 削除 |
| D ⚪ | F型LP本線復帰の要否判断 | 部品カタログ経由のみ等 |

---

## 10. 受け入れ（サイトマップ v2 確定チェック）

- [x] 訪問者本線が「見る → 読む（LP）→ 触る（LP内）」の3層で説明できる
- [ ] 説明の正本が W型LP に1箇所と言える（cases 詳細は正本ではない）
- [ ] `/ai-capability-gallery` 本編にプレビュー縦積みがない（TOP §01 に集約）
- [ ] TOP 業種4枚の着地が W型 slug 表と一致している
- [ ] グローバルナビに「活用イメージ」がない
- [ ] F型 `/demo/{slug}` は営業用として残すかどうか合意済み
- [ ] W型 slug 案（care-records 等）が brief で確定している

---

## 11. 旧文書との関係

| 文書 | 関係 |
|---|---|
| `SITE_IA_DIRECTION.md` | 方針・CTA規則の親。本書は **URLツリーと着地の具体版** |
| `REDIRECT_MAP.md` | 旧URLから本書ツリーへの移行表 |
| `UX_AUDIT.md` | 監査時の理想導線を本書 §0 に合わせて更新する |
