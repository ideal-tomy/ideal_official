# トーナメント R2・画像

## 1. 調査概要

- 対象案件: tournament
- 対象URL: https://tournament-three-pied.vercel.app/ / https://tournament-through-rehearsal.pine-shaken.workers.dev/
- リポジトリ: ideal-tomy/tournament; main=f0a8bb2e41142ff8b394f9aeb71ed3a369bd1307。../../tournament-latest-review-20261024が一致。旧../../tournamentは別版。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: wrangler.through-rehearsal.jsonc:9でPORTRAITS=tournament-rehearsal-portraits。参加者POST/PATCHでJSON data URL→Worker→R2。写真取得はCookie認証Worker経由。確認したこの経路は署名付きURL/直接R2 URLを使わない。

## 3. 実装済みの対策

**確認済み**: domain.ts:57はjpg/png/webpのMIMEとmagic整合、通常portrait512KiB/body700KiB。openingは画像4MiB/body6MiB（opening.ts:4-5）の別上限。lifecycle.ts:56以降で任意pathを受けずevent/participant/UUID/portrait.ext生成、onlyIf etagDoesNotMatch *。index.ts:79以降でevent/保存key検証。GC outboxは未参照写真を削除再試行（lifecycle.ts:27）。**未確認**: R2側の直接公開/別custom domain。

## 4. 発見した問題

### T-01 受付・観客・管理に共通セッション

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament-latest-review-20261024/cloudflare/checkin/src/index.ts:31,61,73; draw.ts:216
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 同コードの利用者が参加者削除・勝者操作へ到達可能な構造。公開範囲は未確認。
- 推奨する対応: 役割要件とコード配布範囲を確定しAPI認可を設計。今回未実施。

### T-04 完全デコード・寸法上限・再エンコードなし

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament-latest-review-20261024/cloudflare/checkin/src/domain.ts:57
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 512KiB・マジックバイト整合はあるが破損/巨大寸法/EXIF等の十分な検証ではない。
- 推奨する対応: 完全画像検証とメタデータ除去を設計。今回未実施。

## 5. 未確認事項

**未確認**: r2.dev/public access/CORS/token scope/lifecycle/backup/EXIF/同意/削除SLA。共通sessionで他参加者操作も可能なので本人所有権防御とは言えない。必要情報: role要件とR2設定。手順: bucket public/custom domain→token権限→保持→D1参照/GCを照合。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

隔離環境で偽MIME/破損/巨大寸法/EXIF/別eventを検証。完全デコード/再エンコード導入時は寸法/メモリ上限も確認。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
