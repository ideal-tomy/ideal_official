# AXEON API一覧・制御

## 1. 調査概要

- 対象案件: axeon
- 対象URL: https://www.axeon.jp/
- リポジトリ: ideal-tomy/rinopro-site; HEAD/main=62c55fa4c6a18bce324f0bae0138297161410a54。本番一致は未確認。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

| API / method | 用途・外部送信 | 認証/認可 | 入力 | レート | 根拠 |
|---|---|---|---|---|---|
| /api/contact POST | Resend通知/返信 | 公開、ログイン/管理権限なし | Zod contactSchema | Map30/60秒、プロセス単位 | src/app/api/contact/route.ts:21,29 |
| /api/chat POST | Gemini会話 | 公開、ログイン/管理権限なし | 配列判定中心、全構造/長さ上限不十分 | Map30/60秒、プロセス単位 | src/app/api/chat/route.ts:22,41,92 |
| /api/demo/run POST | Sanity/実行modeに応じGemini | 公開、ログイン/管理権限なし | slug文字列/messages配列 | Map30/60秒、プロセス単位 | src/app/api/demo/run/route.ts:115,131,139 |
| /api/demos/catalog GET | 公開Sanityカタログ | 公開、ログイン/管理権限なし | 入力なし | なし | src/app/api/demos/catalog/route.ts:7 |
| /api/demos/recommend-from-text POST | Sanity+ルール推薦、LLMなし | 公開、ログイン/管理権限なし | text型/2000文字slice | Map30/60秒、プロセス単位 | src/app/api/demos/recommend-from-text/route.ts:16,29,38 |
| /api/estimate-detailed POST | Gemini見積/fallback | 公開、ログイン/管理権限なし | 型アサーション/業務上の回答有無 | Map30/60秒、プロセス単位 | src/app/api/estimate-detailed/route.ts:70,81,89 |
| /api/experience/knowledge-bot POST | Gemini/同梱デモ知識 | 公開、ログイン/管理権限なし | industryId/参照IDの一部型検査 | Map30/60秒、プロセス単位 | src/app/api/experience/knowledge-bot/route.ts:13,34,40 |
| /api/inquiry-brief POST | Gemini問い合わせ整理 | 公開、ログイン/管理権限なし | Zod requestSchema | Map30/60秒、プロセス単位 | src/app/api/inquiry-brief/route.ts:20,36 |

src/app/apiの全8 route.tsを列挙。全行はコードで**確認済み**、本番は**要検証**。

## 3. 実装済みの対策

**確認済み**: 公開APIは外部生成/公開CMS/メールを直接呼び出せる。管理権限Cookieに依存しない。UI非表示で権限を守る設計ではなく匿名受付として実装されている。共有制限なし（A-01と同じrate-limitを生成APIにも使用）。**未確認**: 全経路のOrigin/Content-Type/サイズ保証、本番API CORS。Cookie型CSRFと匿名直接送信の悪用を区別する。

## 4. 発見した問題

### A-03 AI API入力の構造・長さ上限が不十分

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../rinopro-site/src/app/api/chat/route.ts:41,47; estimate-detailed/route.ts:81,89
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 型アサーション/配列判定だけの箇所。資源消費や例外を誘発可能な構造。
- 推奨する対応: 入力スキーマ・会話数・総バイト数を制限。今回未実施。

### A-04 内部例外メッセージを利用者に返す

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../rinopro-site/src/app/api/chat/route.ts:101; inquiry-brief/route.ts:58
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 外部サービスの詳細漏えいのおそれ。実際の漏えいは未検証。
- 推奨する対応: 公開エラーを固定し内部ログと分離。今回未実施。

## 5. 未確認事項

**未確認**: Gemini予算/日次quota/ログ保持、本番env target、SDKの上限、WAF。必要情報: provider/利用project/quotaとVercel環境一覧。手順: defaultGeminiModel→providerキー名→env target→運用quotaを照合。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

モックで型不正/会話数/長文/固定エラーを検証。catalog返却フィールドを精査。実AI通信は行わない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
