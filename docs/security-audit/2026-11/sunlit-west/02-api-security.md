# サンリット API一覧・未確定経路

## 1. 調査概要

- 対象案件: sunlit-west
- 対象URL: https://sunlit-west.live-web.jp/
- リポジトリ: 候補ideal-tomy/sunlitwest (2d721569aea471724b78017434307537f58a8fde) と ideal-tomy/sunlit (cff0b85e59a6f7270af3c8d47b17432b0cca8f7b)。現行版との対応は未確認。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

| 対象 | API / method | 用途 | 認証/認可・検証/制限 | 判定・根拠 |
|---|---|---|---|---|
| sunlit候補 | /api/openai-chat POST | OpenAI呼出し | 認証/認可/レートなし、query存在のみ、body-parser JSON | 確認済み: api/openai-chat.cjs:10,12,20,24。本番未確認 |
| sunlit開発proxy | /api/*→localhost:5180 | 開発転送 | 開発設定 | 確認済み: vite.config.ts:11。本番APIではない |
| sunlitwest候補UI | /api/dify-chat POST | AIチャット | サーバー実装未発見 | 未確認: src/pages/Contact.tsx:56 |
| sunlitwest | api/chat.ts | 空ファイル | handlerなし | 確認済み: tree/blob取得。稼働APIとしない |
| 現行共有bundle | /api/v1/*等 | 事業者API候補 | メソッド/認証/host未確認 | ../sunlit-live-api-candidates.jsonに25文字列 |

現行サイトのAPI一覧は**未確定**。共有bundleのusers/upload等へ試験リクエストを送っていない。文字列抽出はルートの存在/公開権限確認ではない。

## 3. 実装済みの対策

**確認済み（候補sunlit）**: keyはサーバーOPENAI_API_KEY。例外は固定500だが外部API JSONはそのまま返す。**未確認**: CORS/CSRF/Origin/query型/総量/費用上限/PII保持。匿名直接呼出しはCookie型CSRFだけでは防げない。

## 4. 発見した問題

### S-01 候補sunlitがAPIキーと本文をログ出力

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ideal-tomy/sunlit@cff0b85/api/openai-chat.cjs:17,18,23
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 候補コードで確認。本番稼働/実際の漏えいは未確認。
- 推奨する対応: 稼働先・ログ・キー履歴を確認し必要な失効計画。今回未実施。

## 5. 未確認事項

**未確認**: 現行backend/メールAPI、/api/dify-chat実装。必要情報: 現行事業者のroute/API仕様/ソース。手順: bundle HTTP client baseURL→利用画面→method→認証middlewareを照合。現行の全APIを洗い出したとは扱わない。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

API帰属確定後に隔離環境で入力/認証/例外/費用を検証。未知の管理APIへ本番POSTしない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
