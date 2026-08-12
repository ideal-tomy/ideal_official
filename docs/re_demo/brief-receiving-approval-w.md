# デモLP 要件シート ── 受入検査のダブルチェック（W型）

> **slug 確定:** `receiving-approval` → `/demo/w/receiving-approval`  
> **実装:** `data/demo-lp/receiving-approval.ts`  
> **デモ本体:** `EXTERNAL_DEMO_URLS.approvalDiagram`

## 0. メタ情報

| 項目 | 記入 |
|---|---|
| デモ名 | 受入検査デモ |
| LP種別 | W型 |
| slug | `/demo/w/receiving-approval` |
| デモ本体URL | `https://approvaldiagram.vercel.app/` |
| 想定読者 | 品質・受入検査・製造管理 |
| 主軸 | 図面と証明書の突合せ、人の確認、承認への記録 |

## ページの1文

図面と材料証明書を突き合わせ、違うところだけ人が確認する。確認内容は承認に残る。

## Hero

- headline: 届いた材料は、図面どおりか。
- subline: 全部を人が見るのではなく、ずれだけを人に渡す。
- body: AIが「一致・要確認・記載なし」に分けます。人が確認した根拠は承認に残り、あとから対象を絞りやすくします。操作は「次へ」だけのサンプルデモで流れを確認できます。

## 除外（fit）

図面・証明書がデータとして揃っていない現場／人が確認せず自動確定だけしたい場合は対象外。

## ROI初期値

人数15・40分/日・時給3500・240営業日・回収率0.5

## TOP接続

`approval-double-check` → `/demo/w/receiving-approval`
