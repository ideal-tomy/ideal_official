# ギャラリー／LP／Cases／ROI の役割分担

> Phase 0 合意メモ（Gallery Demo LP 実装の前提）
>
> **公開導線の最新方針:** [`../SITE_IA_DIRECTION.md`](../SITE_IA_DIRECTION.md) が優先。  
> 本書の「触る詳細 / 説得LP / cases を分離」は公開ナビとしては上書き済み。  
> LPブロック構造・slug同名・ROI非複製などの実装前提は引き続き有効。

## 役割

| 面 | URL | 役割 |
|---|---|---|
| デモ一覧 | `/ai-capability-gallery` | 触れる入口。パターン選択 |
| 簡易デモ詳細 | `/ai-capability-gallery/{slug}` | **触る**。短時間の体験 |
| 説得LP | `/demo/{slug}` | **説得**。B00–B14 の GembaShift 型 |
| 活用イメージ | `/cases/...` | 業種ストーリー・Before/After |
| ROI | 外部シミュレータ（kit入場） | 試算。金額ロジックは LP に複製しない |
| 相談 | `/contact?...` | 最終CTA |

## 導線

```
ギャラリー一覧
  ├─ 体験 → /ai-capability-gallery/{slug}
  └─ 詳しく → /demo/{slug}
        ├─ いま触る → ギャラリー詳細 or externalDemo
        ├─ 試算 → ROI（#roi または外部）
        ├─ 活用イメージ → /cases/...
        └─ 相談 → /contact
```

## 品質ゲート

brief の G1–G6 を満たさないデモは LP 公開しない。空欄＝デモ側の設計に穴があるサイン。

## slug

ギャラリー slug と LP slug は同名（例: `knowledge-to-search` → `/demo/knowledge-to-search`）。
