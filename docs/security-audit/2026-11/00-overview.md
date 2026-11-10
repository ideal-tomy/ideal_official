# セキュリティ監査 — 読み取り調査結果（本番未確認を含む）

## 1. 調査概要

- 対象: ideal / tournament / AXEON / サンリットウエスト
- 対象URL・リポジトリ: [資産台帳](01-asset-inventory.md)。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は public-observations.json。
- 範囲・方法: ソース静的読解、GitHub GET、公開HTTP/DNS、npm audit、サービス一覧の読取り。調査のみ。

## 2. 現在の構成

**確認済み**: 4案件のコードと公開資産を調査し、指定の28 Markdownレポートを作成した。**未確認**: 本番管理設定とサンリット現行正本等。全完了条件を検証済みではなく、追加調査が残る。

- [ideal](ideal/06-summary.md)
- [トーナメント](tournament/07-summary.md)
- [AXEON](axeon/06-summary.md)
- [サンリットウエスト](sunlit-west/06-summary.md)
- [資産台帳](01-asset-inventory.md)
- [横断リスク表](02-risk-register.md)

## 3. 実装済みの対策

ideal本番HTTPS/HSTS/問い合わせHEAD503、ローカルTurnstile/共有制限、トーナメント署名Cookie/画像/入力、AXEON入力/CSP、サンリットHTTPSを確認。適用範囲は個別レポートに限定。

**変更なし**: アプリコード/既存未コミット変更/env/外部設定/DB/メール/Webhook/コミット/push/deploy。今回の追加はこの監査ディレクトリだけ。ライブラリの追加/更新もなし。

## 4. 発見した問題

横断表22件。緊急と確定した本番悪用事象はないが、AIキー送出先、候補の秘密ログ、匿名自動返信、旧DB匿名権限は優先確認。コードの問題と本番成立を分け、未確認を安全としない。

## 5. 未確認事項

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

| 残る完了条件 | 現状 | 追加確認 |
|---|---|---|
| ideal停止ルール/本番保護 | HEAD503のみ確認 | POST適用は設定読取りで照合、解除しない |
| idealメール終端 | GAS転送先ホストまで | GAS doPost/通知/自動返信/保存/認証/保持 |
| tournament運用資産・DB/R2 | 最新コード確認、Workers403 | 正規URL/version/実権限/backup/旧Supabase |
| AXEON本番/Resend | コード確認、Cloudflare403 | Vercel対応/From/DKIM/quota/ログ |
| sunlit全API/DB/メール | 現行ページ・候補repoまで | live-web管理先/正本/動的フォーム/backend |

具体手順と必要情報は各レポート第5節。権限不足の項目は完了扱いにしない。

## 6. 推奨改善案

1. idealの503維持、AI接続先・本番commit/env・GAS下流を照合。
2. トーナメントの正規URL/共通コード配布/旧DB稼働を確認。
3. AXEONの匿名返信・quota・依存勧告条件を確認。
4. サンリット正本・秘密ログ候補・受信DNSを確認。
5. 調査で確定した範囲から別途改善計画を承認し実施。今回は修正しない。

## 7. 検証方法

証跡: public-observations.json（少数HTTP/DNS）、audit-evidence.json（SHA/接続先一覧/TLS/公開bundle marker）、各dependency-audit.json（npm audit結果）、sunlit-live-api-candidates.json（共有bundle25文字列、稼働route未確定）。

判定は確認済み/問題あり/要検証/未確認/対象外。CORS *、UI公開、ヘッダー欠如、API文字列だけで悪用成立としない。SCA件数は開発依存を含む該当パッケージ数で本番脆弱性数ではない。メール送信・Webhook・本番負荷/攻撃テストは未実施。アプリ変更がないためbuild/lintは実行せず、成果物の構成・JSON・秘密値非混入を検査する。
