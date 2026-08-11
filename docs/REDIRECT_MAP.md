# リダイレクトマップ

最終更新: 2026-08-11  
状態: **合意済み・W型4業種リダイレクト実装**  
サイトマップ: [`SITE_MAP_v2.md`](./SITE_MAP_v2.md)

実装場所: `sites/ideal_official/next.config.ts` の `redirects()`  
原則: **W型LPが正本になってから** 該当 cases を閉じる。

---

## 0. 凡例

| 時期 | 意味 |
|---|---|
| **即時** | 正本LPが既に存在。リダイレクトを入れてよい |
| **LP後** | 対応 W型LP 公開 + TOP切替の直後に入れる |
| **Phase C** | 業種W型が揃ったあと一括 |
| **維持** | リダイレクトしない（営業URL・体験正本として残す） |
| **実装済み** | `next.config.ts` に反映済み |

`permanent`: `true` = 308/301（旧URLのSEOを新URLへ）。

---

## 1. cases 詳細 → W型LP（業種説明の正本）

| # | 旧URL | 新URL | 時期 | permanent | 状態 |
|---|---|---|---|---|---|
| 1 | `/cases/industries/construction-photo-sorting` | `/demo/w/construction-record` | 即時 | `true` | **実装済み** |
| 2 | `/cases/industries/care-voice-records` | `/demo/w/care-records` | LP後 | `true` | **実装済み** |
| 3 | `/cases/industries/knowledge-internal-search` | `/demo/w/manufacturing-judgment` | LP後 | `true` | **実装済み** |
| 4 | `/cases/industries/retail-demand-prediction` | `/demo/w/retail-support` | LP後 | `true` | **実装済み**（主軸はCS案内） |

### cases（業種W型がない・パターン寄り）

| # | 旧URL | 新URL | 時期 | permanent | 状態 |
|---|---|---|---|---|---|
| 5 | `/cases/industries/agriculture-field-report` | `/ai-capability-gallery/multi-input-to-report` | Phase C | `true` | 未 |
| 6 | `/cases/industries/dd-document-extraction` | `/ai-capability-gallery/document-to-extraction` | Phase C | `true` | 未 |
| 7 | `/cases/industries/backoffice-workflow-automation` | `/ai-capability-gallery/workflow-to-automation` | Phase C | `true` | 未 |

---

## 2. cases 一覧・ハブ

| # | 旧URL | 新URL | 時期 | 状態 |
|---|---|---|---|---|
| 8 | `/cases` | `/` | Phase C | 未 |
| 9 | `/cases/industries` | `/` | Phase C | 未 |

---

## 3. F型LP・ギャラリー

| # | 項目 | 方針 |
|---|---|---|
| 10–11 | `/demo/{pattern}` | **維持**（営業送付用）。リダイレクトしない |
| 12–13 | `/ai-capability-gallery/{pattern}` | **維持**（体験正本） |

---

## 4〜6. 内部リンク

- `HowWeWorkSummary` / `AiCapabilityDetailShell` → W型LP（`workflow-routes.ts`）へ差し替え済み
- TOP 4業種カード → 各 W型LP（`top-page.ts`）済み
- FabDrawer の `/cases` 削除は Phase C

---

## 7. next.config 反映済み snippet

```ts
{ source: '/cases/industries/construction-photo-sorting', destination: '/demo/w/construction-record', permanent: true },
{ source: '/cases/industries/care-voice-records', destination: '/demo/w/care-records', permanent: true },
{ source: '/cases/industries/knowledge-internal-search', destination: '/demo/w/manufacturing-judgment', permanent: true },
{ source: '/cases/industries/retail-demand-prediction', destination: '/demo/w/retail-support', permanent: true },
```

---

## 9. 変更履歴

| 日付 | 変更 |
|---|---|
| 2026-08-11 | 初版起草 |
| 2026-08-11 | W型4業種リダイレクト実装・合意チェック消化 |

---

## 10. 受け入れ（確定チェック）

- [x] 各 cases slug に「新URL」が1つだけ割り当てられている
- [x] LP未公開のURLへリダイレクトしていない（4業種とも公開と同時実装）
- [x] 営業送付中の `/demo/{pattern}` をリダイレクトしない
- [x] `/ai-capability-gallery/{pattern}` は体験正本として維持
- [ ] Phase C で `/cases` 一覧を閉じる時期（次フェーズ）
- [x] slug 変更時は本表と `SITE_MAP_v2.md` §4 を同時更新する
