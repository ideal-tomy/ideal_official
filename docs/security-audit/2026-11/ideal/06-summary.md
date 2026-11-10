# ideal 監査まとめ

## 1. 調査概要

- 対象案件: ideal
- 対象URL: https://www.ideal-dao.com/
- リポジトリ: ideal-tomy/ideal_official; HEAD/main=0b2c55bc20634a0a786df889046f0508302560d5。保護機能は未コミット変更を別評価。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: 公開サイト、3API、Redis/Turnstileのローカル変更、GAS転送実装。mainとHEAD一致、保護変更は未コミット。**要検証**: 公開HEAD503。**未確認**: 本番project/GAS下流。

## 3. 実装済みの対策

ローカル入力検証・設定不足拒否・Bot保護、本番HTTPS/HSTS/HEAD503を確認。ローカル保護を本番有効とは扱わない。

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

### I-03 ローカルOPENAI_BASE_URLがUpstash系ホストを指す

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: lib/concierge/ai/openai.ts:38,45,48; lib/concierge/guide/classify.ts:69; .env.localの設定項目（値非記載）
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 設定先へBearerキーと入力を送るコード。本番同設定、実送信、漏えい成立は未確認。
- 推奨する対応: 正しい接続先・キーの用途・過去到達履歴を確認。今回未実施。

### I-04 公開AI APIの制限がプロセス内Mapのみ

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: lib/concierge/ai/rate-limit.ts:8; lib/concierge/guide/rate-limit.ts:7
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 複数インスタンス/再起動をまたぐ課金制御にならない。上位WAFは未確認。
- 推奨する対応: 共有制限と全体予算を設計。今回未実施。

### I-05 トップ応答にページCSP等がない

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: public-observations.json: HEAD https://www.ideal-dao.com/; next.config.ts
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: HSTSあり。画像用CSPはページ全体のCSPではない。欠如だけでXSS成立とはしない。
- 推奨する対応: 必要なページCSP・nosniff・frame制限を設計。今回未実施。

### I-06 Next.js/sharp等が既知脆弱性の該当版

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: package-lock.json: next16.0.11 / sharp0.34.4; ideal-dependency-audit.json
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 監査16パッケージ（critical1/high11/moderate3/low1）。本番RCE成立は要検証。
- 推奨する対応: 公式勧告条件と本番artifactを照合して更新計画。今回未実施。

## 5. 未確認事項

PRODUCT_SPECはローカル変更後の説明と整合するが、mainは保護未反映という版の差がある。本番照合とGAS追跡は完了条件として残る。詳細01〜05の第5節。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

本番commit/env→GAS下流→メールDNS→依存勧告条件を照合。監査資料は修正完了/再開承認ではない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
