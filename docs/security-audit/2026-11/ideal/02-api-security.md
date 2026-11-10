# ideal API一覧・制御

## 1. 調査概要

- 対象案件: ideal
- 対象URL: https://www.ideal-dao.com/
- リポジトリ: ideal-tomy/ideal_official; HEAD/main=0b2c55bc20634a0a786df889046f0508302560d5。保護機能は未コミット変更を別評価。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

| API / method | 用途 | 認証・認可 | 入力 | レート制限 | 根拠 |
|---|---|---|---|---|---|
| /api/contact POST | Webhook転送 | 公開受付、ログインなし | Zod/honeypot/Turnstile | Upstash5/600秒、未設定503 | lib/contact/handle-contact.ts:90; rate-limit.ts:7 |
| /api/concierge/chat POST | AIヒアリング | 公開案内、管理操作なし | conciergeChatRequestSchema | Map12/60秒 | app/api/concierge/chat/route.ts:20,58 |
| /api/concierge/guide POST | テンプレ案内/AI分類 | 公開案内、管理操作なし | guideRequestSchema | 分類時Map6/60秒、ローカル応答は制限対象外 | app/api/concierge/guide/route.ts:27,61 |

app/apiの全3 route.tsを列挙。**確認済み**はローカル実装、本番は**要検証**。

## 3. 実装済みの対策

**確認済み**: 公開APIはサーバー環境変数を使いAIまたはGASへ送る。DB管理APIはこのroute木にない。問い合わせは固定400/502/503、AIも公開エラーは固定。Cookie管理権限に依存しないので認証Cookie型CSRFと匿名直接送信を区別。CORSは直接HTTP送信の認可ではない。req.json前のアプリ総バイト上限/Origin・Content-Typeによる厳密拒否は未確認。

## 4. 発見した問題

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

## 5. 未確認事項

**未確認**: 各API本番CORS/WAF/課金上限、IPヘッダーの基盤正規化、外部例外オブジェクトのPII。必要情報: 本番env名/target、WAF、AI費用上限。手順: default provider設定→env対象環境→ログ設定を値非表示で照合。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

無効入力・未設定拒否・固定エラーをモックで確認。プロセス横断制限/IP信頼境界は隔離環境で検証。ボタン非表示を権限制御とみなさず直接APIに許す範囲を確認。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
