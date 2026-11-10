# トーナメント Web資産

## 1. 調査概要

- 対象案件: tournament
- 対象URL: https://tournament-three-pied.vercel.app/ / https://tournament-through-rehearsal.pine-shaken.workers.dev/
- リポジトリ: ideal-tomy/tournament; main=f0a8bb2e41142ff8b394f9aeb71ed3a369bd1307。../../tournament-latest-review-20261024が一致。旧../../tournamentは別版。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: 最新mainはReact18.3.1/Vite6.4.3、Cloudflare受付構成。旧ローカルtournamentはSupabase。GitHub homepageのVercelは200だが公開JSにSupabase/API受付markerがなくmain一致は未確定。根拠: package-lock.json、../audit-evidence.json、../public-observations.json。

## 3. 実装済みの対策

**確認済み（main）**: cloudflare/checkin/src/index.ts:9-18はCSP/nosniff/no-referrer/Permissions-Policy/noindex、動的no-store。管理/観客/受付HTMLを配信可能。**未確認（本番）**: Workers候補3ホストはGET health/sessionにCloudflare403。VercelはTLS1.3/HSTS、トップACAO *。/.env・/.git/configのHEAD200はHTMLなので秘密露出と断定しない。GitHub public、mainの.github/workflowsなし。

## 4. 発見した問題

### T-05 開発/テスト依存等に既知脆弱性

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: tournament-dependency-audit.json; package-lock.json
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 12件（critical2/high5/moderate5）。Vitest/tinypoolのcriticalを本番Worker RCEとは扱わない。
- 推奨する対応: 開発サーバー公開と到達条件を確認し更新計画。今回未実施。

## 5. 未確認事項

**未確認**: 正規運用URL、本番version、過去URL、WAF/Bot/CI権限、ソースマップ、TLS旧版。必要情報: 運営責任者とCloudflare deployment/routeの読取り。手順: 正規URL→Worker version→commit/artifact→認証設定を照合。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

HTML/API/写真それぞれのヘッダーと非認証拒否を隔離環境で確認。開発依存のcriticalを公開Workerのcriticalと混同しない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
