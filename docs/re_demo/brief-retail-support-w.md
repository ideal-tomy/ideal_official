# デモLP 要件シート ── 小売・サービス案内（W型）

> **slug 確定:** `retail-support` → `/demo/w/retail-support`  
> **実装:** `data/demo-lp/retail-support.ts`  
> **主軸:** CS・問い合わせ案内（合意済み）  
> **副:** 需要予測（cases `retail-demand-prediction` / パターン `data-to-prediction`）

## 0. メタ情報

| 項目 | 記入 |
|---|---|
| デモ名 | 小売・サービス 案内サポートデモ |
| LP種別 | W型 |
| slug | `/demo/w/retail-support` |
| デモ本体URL | `https://customer-support-demo-lime.vercel.app/` |
| 想定読者 | 店舗責任者・CS責任者・EC担当 |
| 主軸 | 定型問い合わせの一次案内 |
| 副題 | 需要予測は partsCatalog・usecases で短く |

## ページの1文

定型の問い合わせにその場で答え、必要なときだけ有人へつなぐ。小売・サービスの応対負担を減らす。

## リダイレクト

`/cases/industries/retail-demand-prediction` → `/demo/w/retail-support`（実装済み）  
※主軸は CS。旧 cases は需要予測だが W型に統合吸収。
