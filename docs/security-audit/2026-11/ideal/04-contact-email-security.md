# ideal 問い合わせ・メール

## 1. 調査概要

- 対象案件: ideal
- 対象URL: https://www.ideal-dao.com/
- リポジトリ: ideal-tomy/ideal_official; HEAD/main=0b2c55bc20634a0a786df889046f0508302560d5。保護機能は未コミット変更を別評価。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: /contact→POST /api/contact→レート判定→設定確認→JSON/Zod→honeypot→Turnstile→補助spam判定→CONTACT_WEBHOOK_URLへJSON転送。lib/contact/handle-contact.ts:90、turnstile.ts:108。ローカル転送先ホストはGoogle Apps Script。URLパス・秘密値は記録しない。

**未確認**: GAS以降の送信サービス/通知先/自動返信/From/Reply-To/本文保存。追跡完了とはしない。

| DNS | 判定・根拠 |
|---|---|
| MX | 確認済み: Google5ホスト、../public-observations.json |
| SPF | 問題あり: apex TXTにSPFなし、同証跡 |
| DMARC | 問題あり: _dmarc NXDOMAIN、同証跡 |
| DKIM | 未確認: selectorと実送信元不明 |
| Workspace管理 | 未確認: MXだけではアカウント保護を断定しない |

## 3. 実装済みの対策

**確認済み（ローカル）**: token/secret必須、hostname照合、Siteverify失敗拒否、8秒timeout、Redis5回/600秒。honeypotは200で転送しない。Webhook未設定503/失敗502。route.ts:17は任意のBearer secretを付与するが署名生成はなく受信側検証は未確認。JSON転送なのでこのアプリはメールHTML/ヘッダーを生成しない。下流のHTML escape/CRLFは未確認。通常本文ログはないが例外内容は要検証。

## 4. 発見した問題

### I-01 SPF・DMARCを公開DNSで確認できない

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: public-observations.json: ideal-dao.com TXT / _dmarc.ideal-dao.com NXDOMAIN
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: Google MXを利用。なりすまし抑止が弱い。既存送信の認証結果は未確認。
- 推奨する対応: 送信元ドメインと権威DNSを照合し正規送信に合う認証を設計。今回未実施。

### I-02 保護変更が未コミットでGitHub mainに未反映

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: lib/contact/handle-contact.ts:90; lib/contact/turnstile.ts:108; main app/api/contact/route.ts
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 再開時のスパム再発が懸念。HEAD503は観測、POST遮断と設定ルールは未確認。
- 推奨する対応: 503を維持し本番commit/envとGAS下流を確認。今回未実施。

## 5. 未確認事項

**未確認**: 下流認証、第三者宛大量返信、送信quota/重複/保存先/保持/送信失敗。Webhook fetchに明示timeoutなし。必要情報: GAS本番doPostコード、トリガー、OAuth権限、送信/保存処理、実行履歴メタデータ、実From/DKIM selector。手順: doPost→認証→通知/返信→保存/削除→失敗処理を読解し既存メール認証結果と照合。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

送信せずGAS設定/ソースを追跡。修正後はモックで第三者宛制限/重複/失敗/HTML・CRLFを検証。DNSは権威DNSと別リゾルバで再照合。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
