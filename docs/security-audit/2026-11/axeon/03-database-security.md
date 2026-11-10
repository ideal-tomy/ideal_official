# AXEON CMS・保存先

## 1. 調査概要

- 対象案件: axeon
- 対象URL: https://www.axeon.jp/
- リポジトリ: ideal-tomy/rinopro-site; HEAD/main=62c55fa4c6a18bce324f0bae0138297161410a54。本番一致は未確認。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: Sanity CMS。../rinopro-site/src/lib/sanity/client.ts:1はproject/datasetでquery APIへfetch、paramsはJSON送信。確認したcontact経路はResend直送で問い合わせDB保存処理なし。外部全体に保存がないとは断定しない。

## 3. 実装済みの対策

**確認済み**: 公開CMS queryはtokenなし、projectId未設定は空配列。**対象外**: SanityへPostgres RLSを要求すること。dataset公開範囲とSanity役割/tokenで評価。**未確認**: 実dataset visibility/書込み権限。

## 4. 発見した問題

追加の具体的問題はこの範囲で確定していない。未確認項目を安全とは判定しない。

## 5. 未確認事項

**未確認**: CMS CORS/メンバー/Studio/token/公開不要項目/backup/restore/保持削除。デモに実顧客情報が混在していないか。必要情報: Sanity read-only設定/データ項目一覧。手順: dataset visibility→role→token権限名→公開query fields→復元方針。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

公開catalogの意図したfieldだけを静的確認。将来は隔離datasetで匿名/編集者権限を検証。本番データを収集しない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
