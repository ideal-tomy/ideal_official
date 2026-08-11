# デモLP 要件シート ── ケア記録（W型）

> 建設 `brief-construction-record-w.md` と同じ章立て。  
> **slug 確定:** `care-records` → `/demo/w/care-records`  
> **実装:** `data/demo-lp/care-records.ts`  
> **吸収元 cases:** `care-voice-records`

## 0. メタ情報

| 項目 | 記入 |
|---|---|
| デモ名 | 医療・福祉ケア記録デモ |
| LP種別 | W型 |
| slug | `/demo/w/care-records` |
| デモ本体URL | `https://kaigo-operation-demo.vercel.app/` |
| 想定読者 | 管理者・看護師・介護職 |
| 関連パターン | `voice-to-structured` |

## ページの1文

話すだけでケア記録の下書きがそろう。シフト後の書き写しを減らす。

## cases から吸収

- pain / before / after / fit / demoScope / outcomes → B01, problem, fit, resultTabs, comparison

## 外部デモ

- ケア記録: EXTERNAL_DEMO_URLS.care  
- 音声カルテ: EXTERNAL_DEMO_URLS.voiceKarte  
- ギャラリー: `/ai-capability-gallery/voice-to-structured`

## リダイレクト

`/cases/industries/care-voice-records` → `/demo/w/care-records`（実装済み）
