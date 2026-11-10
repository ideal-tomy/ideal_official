# ideal 本番反映・インフラ

## 1. 調査概要

- 対象案件: ideal
- 対象URL: https://www.ideal-dao.com/
- リポジトリ: ideal-tomy/ideal_official; HEAD/main=0b2c55bc20634a0a786df889046f0508302560d5。保護機能は未コミット変更を別評価。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: Vercel公開応答/Cloudflare権威DNS。接続済みVercel teamとdefaultのlist_projectsは0件。CLI41.2.1にproject inspectサブコマンドなし。リンク/ログイン/更新は未実施。

## 3. 実装済みの対策

| 特別確認 | 判定・根拠 |
|---|---|
| 503停止有効か | 要検証: www/api/contact HEAD503。ルール実設定/POST適用は未確認 |
| Turnstile本番反映 | 要検証: 未コミット実装。mainになく公開contact bundleにもmarkerなし |
| Upstash本番反映 | 要検証: 未コミット実装のみ確認、mainにはMap制限 |
| 環境変数 | 未確認: ローカル登録名と本番登録は別 |
| 本番とmain一致 | 未確認: main=HEADだが本番commit不明 |
| 解除条件 | 未確認: 保護反映・変数・GAS下流が未照合。解除可と判断しない |

根拠: ../audit-evidence.json、../public-observations.json。停止解除・POST・Webhook・Redis操作はしていない。

## 4. 発見した問題

### I-02 保護変更が未コミットでGitHub mainに未反映

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: lib/contact/handle-contact.ts:90; lib/contact/turnstile.ts:108; main app/api/contact/route.ts
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 再開時のスパム再発が懸念。HEAD503は観測、POST遮断と設定ルールは未確認。
- 推奨する対応: 503を維持し本番commit/envとGAS下流を確認。今回未実施。

## 5. 未確認事項

**未確認**: projectId/Productionブランチ/Git連携/環境分離/Protection/過去URL/WAF/ログ保存/デプロイ権限。Cloudflare SSL mode、Bot、Turnstile widget host、Workers routes/Secrets、D1/R2利用、使用量/課金上限/復旧も未確認。必要情報: 正しいteam/zoneの読取り。手順: Domains→Project→Production commit→env名/target→Firewall active→Protection→権限を照合。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

503維持。公開site key/Turnstile secret/Redis URL/token/Webhook URLの5変数を値非表示で本番targetと照合。Webhook secretは下流方式に応じ確認。受付再開はGAS経路・上限・監視・復旧を含む別判断。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
