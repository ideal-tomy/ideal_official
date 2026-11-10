# トーナメント 監査まとめ

## 1. 調査概要

- 対象案件: tournament
- 対象URL: https://tournament-three-pied.vercel.app/ / https://tournament-through-rehearsal.pine-shaken.workers.dev/
- リポジトリ: ideal-tomy/tournament; main=f0a8bb2e41142ff8b394f9aeb71ed3a369bd1307。../../tournament-latest-review-20261024が一致。旧../../tournamentは別版。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: 最新mainのWorker/D1/R2/API/写真/進行実装。旧SupabaseとVercel配信版は分離。**未確認**: 正規運用URL・deployment対応。

## 3. 実装済みの対策

署名Cookie/Origin/実body上限/MIMEとmagic/event scope/version/receipt/GCを確認。役割別sessionはない。

## 4. 発見した問題

### T-01 受付・観客・管理に共通セッション

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament-latest-review-20261024/cloudflare/checkin/src/index.ts:31,61,73; draw.ts:216
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 同コードの利用者が参加者削除・勝者操作へ到達可能な構造。公開範囲は未確認。
- 推奨する対応: 役割要件とコード配布範囲を確定しAPI認可を設計。今回未実施。

### T-02 共通コードログインにアプリ側レート制限なし

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament-latest-review-20261024/cloudflare/checkin/src/index.ts:50,52
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 16文字以上の設定検査あり。推測攻撃は実施していない。
- 推奨する対応: WAF実設定と失敗試行上限・失効方法を確認。今回未実施。

### T-03 旧Supabase版にanon全権相当のポリシー

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament/supabase/migrations/07_fix_grants_rls.sql:90,101,231; 02_rls_realtime.sql:64
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 旧コードで確認。最新mainはSupabase版ではなく本番有効性は未確認。
- 推奨する対応: 旧DBの稼働/公開API/実効権限を確認。今回未実施。

### T-04 完全デコード・寸法上限・再エンコードなし

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament-latest-review-20261024/cloudflare/checkin/src/domain.ts:57
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 512KiB・マジックバイト整合はあるが破損/巨大寸法/EXIF等の十分な検証ではない。
- 推奨する対応: 完全画像検証とメタデータ除去を設計。今回未実施。

### T-05 開発/テスト依存等に既知脆弱性

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: tournament-dependency-audit.json; package-lock.json
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 12件（critical2/high5/moderate5）。Vitest/tinypoolのcriticalを本番Worker RCEとは扱わない。
- 推奨する対応: 開発サーバー公開と到達条件を確認し更新計画。今回未実施。

## 5. 未確認事項

Cloudflare実設定、旧DB稼働、コード配布/role、backup/当日復旧が残る。分野01〜06に確認手順。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

正規URL/共有コード配布→role分離/旧DB公開→画像/同時更新→復旧/quotasの順に継続。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
