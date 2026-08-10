# デモLP briefs 索引

Phase 2 以降、各デモの穴埋めは個別ファイルを参照。

| slug | brief |
|------|--------|
| knowledge-to-search | [knowledge-to-search.md](./knowledge-to-search.md) |
| document-to-extraction | [document-to-extraction.md](./document-to-extraction.md) |
| **construction-record（W型）** | [../brief-construction-record-w.md](../brief-construction-record-w.md) → `/demo/w/construction-record` |
| 他F型 | データ実装済み。全文 brief は運用で追補 |

## G1–G6 方針

実装済み LpConfig は `assertLpConfig` で P1/P2/P4/FAQ 数/フォーム上限をチェック。
未通過時は `data/demo-lp` を先に直す。

## v1.1 メモ（Phase 3 後）

- ブロック必須度は v1 通りで耐久確認済（ナレッジ vs 文書抽出）
- 金額は `createLaborRoiConfig` から導出
- URL: F型 `/demo/{slug}` · W型 `/demo/w/{slug}`
- **公開導線の正本:** TOP本線は業種W型LP着地。部品ギャラリー露出は抑制。詳細は [`../../SITE_IA_DIRECTION.md`](../../SITE_IA_DIRECTION.md)
- Phase A 実装: 建設W型 `/demo/w/construction-record` + TOP建設カード「詳しく見る」
