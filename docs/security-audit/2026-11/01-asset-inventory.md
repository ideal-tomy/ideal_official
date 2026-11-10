# 公開資産・コード・インフラ台帳

## 1. 調査概要

- 対象: ideal / tournament / AXEON / サンリットウエスト
- 対象URL・リポジトリ: [資産台帳](01-asset-inventory.md)。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は public-observations.json。
- 範囲・方法: ソース静的読解、GitHub GET、公開HTTP/DNS、npm audit、サービス一覧の読取り。調査のみ。

## 2. 現在の構成

| 案件 | repository / ローカル | 公開URL・インフラ | 判定・確認方法 |
|---|---|---|---|
| ideal | ideal-tomy/ideal_official / 現cwd | ideal-dao.com→www、Vercel、Cloudflare DNS、GAS、ローカルRedis/Turnstile | 確認済み: remote/main/実装/HTTP/DNS。本番project未確認 |
| tournament | ideal-tomy/tournament / ../../tournament-latest-review-20261024 | tournament-three-pied.vercel.app、through/checkin/rehearsal.pine-shaken.workers.dev候補、D1/R2 | コード/公開応答確認済み。正規稼働版未確認 |
| tournament旧版 | ../../tournament | Supabase | 旧コード確認済み、現在公開は未確認 |
| AXEON | ideal-tomy/rinopro-site / ../rinopro-site | axeon.jp / www、Cloudflare、Vercel候補、Sanity/Gemini/Resend | コード/403/DNS確認済み、本番project未確認 |
| サンリット現行 | 正本repo未特定 | sunlit-west.live-web.jp、ALB/nginx、mailto sunlit.fit | 公開ページ確認済み、管理先未確認 |
| サンリット候補 | ideal-tomy/sunlitwest / ideal-tomy/sunlit | sunlitwest.vercel.appは404、GitHub Pages workflow | 候補コード確認済み、現行対応未確認 |

GitHubのSHA/visibility(public)はaudit-evidence.json。候補homepageはGitHub metadata、現行サンリットは公開HTMLの院名/連絡先を照合。古いdocsを現行仕様の根拠としていない。

## 3. 実装済みの対策

**確認済み**: TLS証明書検証/HTTP/DNSはpublic-observations.jsonとaudit-evidence.json。API一覧: ideal/02-api-security.md、tournament/02-api-auth-security.md、axeon/02-api-security.md、sunlit-west/02-api-security.md。

開始時のideal未コミット変更: .env.example、contact route、ContactForm、PRODUCT_SPEC、変更.md、package.json、tsconfig.json、lib/contact。すべて保持。

## 4. 発見した問題

複数版があり本番一致は未確認。特にトーナメントVercel/旧Supabaseと、サンリット候補/現行事業者サイトの対応が未確定。具体問題は02-risk-register.md。

## 5. 未確認事項

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

必要情報/手順は案件別インフラ第5節。運用責任者・正規URL・廃止資産の状態を確認する。

## 6. 推奨改善案

緊急: 稼働資産と管理責任者を確定。短期: Production commit/env target/実効権限を台帳化。中長期: 過去deploy/廃止資産の棚卸し。

## 7. 検証方法

domain→project/Worker→deployment commit→artifact→実行設定を読取り照合。repo名/古い文書だけで稼働版を判断しない。
