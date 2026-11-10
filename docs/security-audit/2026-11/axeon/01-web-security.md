# AXEON Webセキュリティ

## 1. 調査概要

- 対象案件: axeon
- 対象URL: https://www.axeon.jp/
- リポジトリ: ideal-tomy/rinopro-site; HEAD/main=62c55fa4c6a18bce324f0bae0138297161410a54。本番一致は未確認。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: rinopro-siteの公開メタデータにwww.axeon.jp。Next16.2.0/React19.2.4/Sanity。HEAD/main一致。本番axeon.jp/wwwはCloudflare403、TLS1.3証明書検証成功。HTTPも403でHTTPS転送は未確認。根拠: ../public-observations.json、../audit-evidence.json、package-lock.json。

## 3. 実装済みの対策

**確認済み（コード）**: ../rinopro-site/next.config.ts:73のCSPはframe-ancestors none、ただしunsafe-inline/unsafe-evalを許可。適用は**要検証**。403のX-Frame-OptionsはCloudflare応答に限定。GitHub public、ローカル.github/workflowsなし。sanity.config.ts:22は/studio公開path、画面公開だけで編集権限の公開と断定しない。

## 4. 発見した問題

### A-06 Next.js/sharp等が既知脆弱性の該当版

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../rinopro-site/package-lock.json: next16.2.0 / sharp0.34.5; axeon-dependency-audit.json
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 74件（critical3/high31/moderate33/low7）。WAF403のため本番到達条件未確認。
- 推奨する対応: 勧告条件と本番ビルドを照合し更新計画。今回未実施。

## 5. 未確認事項

**未確認**: 本番CSP/CORS/HSTS/デバッグ/ソースマップ/過去URL/Studio認証・メンバー/CI権限。必要情報: WAF/本番projectのread-only設定。手順: 403の発生層→Production→応答ヘッダー→Studio権限を照合。制限は解除/迂回しない。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

承認された通常閲覧条件とnext.configを照合。依存勧告はNext/sharp本番buildの版と条件を個別確認。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
