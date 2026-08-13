# W型デモLP：1ページ1物語

> 正本リファレンス: `data/demo-lp/construction-record.ts`  
> 対象: TOP代表デモ4本（建設・製造・受入・保育）。F型・介護・小売は別判断。

## 何が「1つのコンテンツ」か

ページ先頭の「ページの1文」だけが物語。各セクションは**違う問い**にだけ答える。同じ主張を見出しを変えて繰り返さない。

```
Hero → Impact → Problem → Fit1行 → Peak → Result → Catalog+デモ → 業種名 → ROI → Process → FAQ → Final
```

| 幕 | 問い | 実体 | 禁止 |
|---|---|---|---|
| 現状 | 何になる／いくら消えている／毎日何をしている／誰向けか | Hero / Impact（数字1つ） / 作業図 / フィット1行 | 4枚メトリクス、作業4カード、フィット3カード |
| 頂点 | 取り返しがつかない事実は何か | `recurringProblems.variant: 'peak'` | 解決策の図、2つ目の問題 |
| 見える化と始め方 | 触る前にどう見えるか／どこから始めるか | 結果タブ → 図＋デモボタン1本 | 部品3カード、比較表、成長3サイクル |
| 自分ごと | 自社が入るか／自分の数字／進め方 | 業種名1行 / ROI / How we work / FAQ5+折りたたみ / デモと問い合わせ | 利用例の引用4枚、フォーム、ROIの二重CTA |

## 必須フラグ（建設と同じ）

- `impact.metrics` なし
- `fit.layout: 'prose'`（表示は headline 1行。`exclude` / `scopeNote` は CONFIG に残してよい）
- `recurringProblems.variant: 'peak'`
- `partsCatalogAfterResult` / `usecasesAfterResult`
- `partsCatalog.hideItems` / `align: 'center'` / `footerCta` = デモURL
- `usecases.layout: 'names'`（業種名のみ。幅は ROI と同じ `max-w-3xl`）
- `comparison` / `growth` なし
- `roi.hideCta: true`
- FAQ 5問に `featured: true`（料金・併用・精度・小さく始める・セキュリティを優先）
- `finalCta.hideForm: true` + `contactCta`
- `process: { ...howWeWorkProcess(), exitNote: undefined }`
- カタログの `howWeWorkFooterCta` は置かない
- `partsCatalog.items` は非表示でも assert 用に3件残す

## コピーの職分

- **フィット1行**: 役割が分かれている相手向け、と書く（機能紹介にしない）
- **ピーク**: Impact（コスト）とは別の、時間切れ・不可逆の話。解決図を置かない
- **結果タブ**: 製品説明ではなく「現場 → 事務所 → 成果物」（または同等の3面）
- **カタログ見出し**: 「1つから始めて、つなぐ。」系。中央寄せ
- **業種名1行**: 「うちでも使えるか」の判定専用。括弧の書類名・本文は出さない
- 見出しは「できます」連続を避け、事実・対象・手順で止める
- 図はページ内で使い回さない（ピークと結果で同じSVGを共有しない）

## ブランド

建設だけ primary `#2B6FE0`。他LPへ色をコピーしない。
