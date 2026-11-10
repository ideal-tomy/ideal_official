# サンリット インフラ・CI

## 1. 調査概要

- 対象案件: sunlit-west
- 対象URL: https://sunlit-west.live-web.jp/
- リポジトリ: 候補ideal-tomy/sunlitwest (2d721569aea471724b78017434307537f58a8fde) と ideal-tomy/sunlit (cff0b85e59a6f7270af3c8d47b17432b0cca8f7b)。現行版との対応は未確認。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: 現行はALB/nginx応答、AWSアカウント/事業者は未特定。候補2repoはpublicで.github/workflows/deploy.yml:4,13,16,18,27にmain push→checkout@v3→setup-node@v3(Node18)→npm ci/build→JamesIves deploy-action@v4→gh-pages。

## 3. 実装済みの対策

**確認済み**: npm ciでlock利用。**未確認**: 実効GITHUB_TOKEN権限/承認/branch保護/Pages公開先。permissions明示なし、ActionはSHA固定なしだが既定権限を推測しない。候補Vercel homepageは404。

## 4. 発見した問題

追加の具体的問題はこの範囲で確定していない。未確認項目を安全とは判定しない。

## 5. 未確認事項

**未確認**: 現行DNS/CDN/SSL/WAF/Bot/管理画面/API/Secrets/backup/監視/quota/課金/デプロイ権限。Cloudflare利用も未確定。必要情報: live-web管理事業者/現行契約。手順: domain→DNS/hosting→artifact→CI権限→ログ/復旧を照合。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

現行/廃止資産を管理設定で分類。workflow変更せずNode/Actionのサポートと実効権限を公式設定と照合。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
