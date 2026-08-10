# リダイレクトマップ

最終更新: 2026-08-11  
状態: **起草（`next.config.ts` 実装の正本）**  
サイトマップ: [`SITE_MAP_v2.md`](./SITE_MAP_v2.md)

実装場所: `sites/ideal_official/next.config.ts` の `redirects()`  
原則: **W型LPが正本になってから** 該当 cases を閉じる。先にリダイレクトだけ先行する場合は下表の「時期」を守る。

---

## 0. 凡例

| 時期 | 意味 |
|---|---|
| **即時** | 正本LPが既に存在。リダイレクトを入れてよい |
| **LP後** | 対応 W型LP 公開 + TOP切替の直後に入れる |
| **Phase C** | 業種W型が揃ったあと一括 |
| **維持** | リダイレクトしない（営業URL・体験正本として残す） |
| **検討** | 方針未確定。リダイレクト前に合意 |

`permanent`: `true` = 308/301（旧URLのSEOを新URLへ）。cases 廃止は一般に `true`。

---

## 1. cases 詳細 → W型LP（業種説明の正本）

| # | 旧URL | 新URL | 時期 | permanent | 備考 |
|---|---|---|---|---|---|
| 1 | `/cases/industries/construction-photo-sorting` | `/demo/w/construction-record` | **即時** | `true` | 建設W型 ✅。cases 吸収元 |
| 2 | `/cases/industries/care-voice-records` | `/demo/w/care-records` | **LP後** | `true` | slug は brief で確定。未公開時はリダイレクト不可 |
| 3 | `/cases/industries/knowledge-internal-search` | `/demo/w/manufacturing-judgment` | **LP後** | `true` | 製造W型。ナレッジ検索は LP 内パーツとして吸収 |
| 4 | `/cases/industries/retail-demand-prediction` | `/demo/w/retail-support` | **LP後** | `true` | 小売W型。需要予測は LP 内で言及 |

### cases（業種W型がない・パターン寄り）

W型が無い cases は **体験ページ** へ。説明ページとしての cases は閉じる。

| # | 旧URL | 新URL | 時期 | permanent | 備考 |
|---|---|---|---|---|---|
| 5 | `/cases/industries/agriculture-field-report` | `/ai-capability-gallery/multi-input-to-report` | Phase C | `true` | 複数素材→報告書パターン |
| 6 | `/cases/industries/dd-document-extraction` | `/ai-capability-gallery/document-to-extraction` | Phase C | `true` | 法務DDは業種W未計画 |
| 7 | `/cases/industries/backoffice-workflow-automation` | `/ai-capability-gallery/workflow-to-automation` | Phase C | `true` | バックオフィス業務自動化 |

---

## 2. cases 一覧・ハブ

| # | 旧URL | 新URL | 時期 | permanent | 備考 |
|---|---|---|---|---|---|
| 8 | `/cases` | `/` | Phase C | `true` | または `/#demos` は同一ページのため `/` で十分 |
| 9 | `/cases/industries` | `/` | Phase C | `true` | ルートが存在すれば。実装次第 |

---

## 3. F型LP・ギャラリー・デモLP

| # | 旧URL | 新URL | 時期 | permanent | 備考 |
|---|---|---|---|---|---|
| 10 | `/demo/voice-to-structured` | — | **維持** | — | 営業送付用F型LP。本線ナビからは外すのみ |
| 11 | `/demo/photo-to-classification` | — | **維持** | — | 同上（7パターンすべて） |
| 12 | `/ai-capability-gallery/voice-to-structured` | — | **維持** | — | 体験の正本。リダイレクトしない |
| 13 | `/ai-capability-gallery/{pattern}` | — | **維持** | — | 全パターン体験ページ |

### 検討: F型LP → ギャラリー体験

訪問者が `/demo/{pattern}` を開いた場合にギャラリーへ飛ばす案。**現時点は不採用**（営業が送った説得LP URL が変わる）。採用する場合は `permanent: false` で別表に追加。

---

## 4. how-we-work・導線の禁止パターン

| # | 旧URL / 導線 | 新URL | 時期 | permanent | 備考 |
|---|---|---|---|---|---|
| 14 | `/how-we-work` 内 CTA「活用イメージで詳しく」 | 対応 W型LP または `/` | LP後 | — | コンポーネント修正。リダイレクトではなくリンク差し替え |
| 15 | `/how-we-work/{demoSlug}` | `/ai-capability-gallery/{demoSlug}` | **検討** | `false` | デモ別ガイドの要否を決めてから |

**不採用（明示）:** `LP → /how-we-work → /cases/...` の説明再分散。

---

## 5. TOP・サービス・その他

| # | 旧URL | 新URL | 時期 | permanent | 備考 |
|---|---|---|---|---|---|
| 16 | TOP 介護カード（cases 着地） | `/demo/w/care-records` | LP後 | — | `top-page.ts` の `detailHref` 修正。リダイレクトではない |
| 17 | TOP 製造・小売 → `/services/ai-consulting` | 各 W型LP | LP後 | — | データ修正 |
| 18 | `/construction` | 外部建設デモ | **維持** | `false` | 既存 `next.config.ts` |

---

## 6. ナビ・サイト内リンク（リダイレクトではなく実装タスク）

| 箇所 | 現状 | 目標 | 時期 |
|---|---|---|---|
| `FabDrawerNav` | `/cases` リンクあり | 削除 | Phase C |
| `ai-capability-gallery/page.tsx` フッター | 旧: 活用イメージ | トップ `#demos` | ✅ 済（2026-08-11） |
| `CapabilityCard` フッター「詳しく知る」 | `/demo/{slug}` | W型LP または非表示 | 検討 |
| cases 詳細内 CTA | cases / demo 三角 | W型 + 体験のみ | Phase C |

---

## 7. 実装スニペット（即時分のみ）

`next.config.ts` に追加する想定（#1）。**LP未公開の #2–4 は入れない。**

```ts
// redirects() へ追加（construction cases → 建設W型）
{
  source: '/cases/industries/construction-photo-sorting',
  destination: '/demo/w/construction-record',
  permanent: true,
},
```

介護LP公開時の例:

```ts
{
  source: '/cases/industries/care-voice-records',
  destination: '/demo/w/care-records',
  permanent: true,
},
```

---

## 8. 実装順序（推奨）

1. **即時:** #1 建設 cases → 建設W型（`next.config.ts`）
2. **介護スプリント:** 介護W型公開 → #2 + #16 + `HowWeWorkSummary` リンク修正
3. **製造・小売スプリント:** 各W型 → #3 #4 + #17
4. **Phase C:** #5–9 cases 残り + ナビから cases 削除
5. **任意:** #15 how-we-work デモ別ガイドの整理

---

## 9. 変更履歴

| 日付 | 変更 |
|---|---|
| 2026-08-11 | 初版起草。TOP §01統合・ギャラリー痩せ後の目標状態を反映 |
| 2026-08-11 | W型 slug 案: care-records, manufacturing-judgment, retail-support |

---

## 10. 受け入れ（リダイレクトマップ確定チェック）

- [ ] 各 cases slug に「新URL」が1つだけ割り当てられている（重複先なし）
- [ ] LP未公開のURLへリダイレクトしていない
- [ ] 営業送付中の `/demo/{pattern}` を誤ってリダイレクトしない方針で合意
- [ ] `/ai-capability-gallery/{pattern}` は体験正本として維持で合意
- [ ] Phase C で `/cases` 一覧を閉じる時期が合意済み
- [ ] slug 変更時は本表と `SITE_MAP_v2.md` §4 を同時更新する
