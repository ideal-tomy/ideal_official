# トーナメント D1・旧DB

## 1. 調査概要

- 対象案件: tournament
- 対象URL: https://tournament-three-pied.vercel.app/ / https://tournament-through-rehearsal.pine-shaken.workers.dev/
- リポジトリ: ideal-tomy/tournament; main=f0a8bb2e41142ff8b394f9aeb71ed3a369bd1307。../../tournament-latest-review-20261024が一致。旧../../tournamentは別版。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: cloudflare/checkin/wrangler.through-rehearsal.jsonc:8のD1 binding DB=tournament-rehearsal-db。migrations0001/0002/0003はevent/participants/state/receipts/lifecycle。利用者→Worker→D1。名前/rating/写真パス・運営状態を保存。**未確認**: remoteに適用済みのschema。

## 3. 実装済みの対策

**確認済み**: lifecycle.ts:56以降にevent scope・requestId/hashの再実行識別・expectedVersion楽観ロック・DB.batchによる変更とreceipt。D1にRLSがないこと自体を問題とせずWorker認可/binding権限を評価。旧Supabaseは../../tournament/src/lib/supabase.ts:1でブラウザanon key接続、最新mainとは別。

## 4. 発見した問題

### T-03 旧Supabase版にanon全権相当のポリシー

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament/supabase/migrations/07_fix_grants_rls.sql:90,101,231; 02_rls_realtime.sql:64
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 旧コードで確認。最新mainはSupabase版ではなく本番有効性は未確認。
- 推奨する対応: 旧DBの稼働/公開API/実効権限を確認。今回未実施。

## 5. 未確認事項

**未確認**: remote schema/migrations、Cloudflare API token/メンバー権限、D1 Time Travel/backup/復元実績、保持削除、旧Supabase稼働。接続Supabaseに対象なし。必要情報: D1 metadataと旧projectRef。手順: bindings→remote schema/migration→backup、旧DBはpg_policies/GRANTを読取り確認。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

別D1で競合更新・同requestId異body・同時winner・GC失敗の原子性を確認。本番SQL/seedは実行しない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
