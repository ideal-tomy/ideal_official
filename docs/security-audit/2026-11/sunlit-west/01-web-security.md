# サンリット Web資産照合

## 1. 調査概要

- 対象案件: sunlit-west
- 対象URL: https://sunlit-west.live-web.jp/
- リポジトリ: 候補ideal-tomy/sunlitwest (2d721569aea471724b78017434307537f58a8fde) と ideal-tomy/sunlit (cff0b85e59a6f7270af3c8d47b17432b0cca8f7b)。現行版との対応は未確認。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: [現行ページ](https://sunlit-west.live-web.jp/)のタイトル/院名/連絡先を照合。HTTP301→HTTPS200、TLS1.2証明書検証成功、nginx/ALB応答。現行/js/app.jsは約3.6MBの事業者共通bundle。GitHub候補sunlit/sunlitwestはReact18.2/Vite4.4.5、homepage sunlitwest.vercel.appは404 DEPLOYMENT_NOT_FOUND。現行との一致は未確認。根拠: ../public-observations.json、../audit-evidence.json。

## 3. 実装済みの対策

**確認済み**: HTTPS/301、/.envと/.git/config HEAD404。**未確認**: 現行framework/全ライブラリ/CORS/ソースマップ/管理画面。共有bundleに管理API文字列があっても認証欠如と断定しない。

## 4. 発見した問題

### S-03 候補にaxios1.6.2等の旧依存

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: sunlitwest/package.json:16,41; sunlit/package.json:16,45
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: GHSA-jr5f-v2jv-69x6該当版。攻撃者URLを渡す経路と現行版適用は未確認。
- 推奨する対応: 正本を確定しlockfileと使用経路を監査。今回未実施。

### S-05 現行HEADに主要防御ヘッダーなし

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: public-observations.json: HEAD https://sunlit-west.live-web.jp/
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: CSP/HSTS/nosniff/frame制限を観測せず。HTTPSとHTTP301は確認。
- 推奨する対応: 管理事業者のヘッダー設定を確認。今回未実施。

## 5. 未確認事項

**未確認**: 現行正本repo、事業者、origin/WAF/TLS許可版。必要情報: live-web管理契約/現行deploymentのソースとversion。手順: 所有者へ管理先を照合し配信artifactとrepoを比較。候補コードを現行へ無条件に帰属しない。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

[axios公式勧告](https://github.com/axios/axios/security/advisories/GHSA-jr5f-v2jv-69x6)のbaseURL/攻撃者URL等の条件を候補の使用経路で確認。1.6.2は対象範囲だが現行版への適用は未確認。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
