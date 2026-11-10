# トーナメント Cloudflare

## 1. 調査概要

- 対象案件: tournament
- 対象URL: https://tournament-three-pied.vercel.app/ / https://tournament-through-rehearsal.pine-shaken.workers.dev/
- リポジトリ: ideal-tomy/tournament; main=f0a8bb2e41142ff8b394f9aeb71ed3a369bd1307。../../tournament-latest-review-20261024が一致。旧../../tournamentは別版。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み（コード）**: cloudflare/checkin/wrangler.through-rehearsal.jsonc:2-12はWorker tournament-through-rehearsal、workers_dev=true、ASSETS run_worker_first、D1/R2、5分cron、REHEARSAL_ENABLED=1、固定control/official event、互換日2026-10-24。remote反映は未確認。

## 3. 実装済みの対策

**確認済み**: through/checkin/read-only候補のhealth/session GETにCloudflare403。WAF/Access/Bot/IP地域制限の区別は未確認。checkin index.ts:50にsecret最小長、別read-only index.ts:64-78にadmin/display別token・最小長・event allowlist。Secretsの値は記録しない。

## 4. 発見した問題

追加の具体的問題はこの範囲で確定していない。未確認項目を安全とは判定しない。

## 5. 未確認事項

**未確認**: Worker version/routes/custom domain、Secrets名称/環境分離、WAF/Rate/Bot、D1/R2実権限、ログ/PII監視、メンバー/deploy権限、使用量/課金上限/backup。必要情報: Cloudflareのread-onlyアクセス。手順: service/version→bindings/secret名→active WAF→ログ設定→quota→復旧設定。403を解除/回避しない。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

本番versionとmainを照合。403だけでアプリ認証を判定しない。cron GCは履歴メタデータで確認。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
