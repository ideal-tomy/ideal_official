# トーナメント API・認証認可

## 1. 調査概要

- 対象案件: tournament
- 対象URL: https://tournament-three-pied.vercel.app/ / https://tournament-through-rehearsal.pine-shaken.workers.dev/
- リポジトリ: ideal-tomy/tournament; main=f0a8bb2e41142ff8b394f9aeb71ed3a369bd1307。../../tournament-latest-review-20261024が一致。旧../../tournamentは別版。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

| API / method | 用途 | 認証・認可 | 入力・上限 | 根拠 |
|---|---|---|---|---|
| /api/health GET | health | なし | なし | cloudflare/checkin/src/index.ts:42 |
| /api/session POST | 共通コードログイン | 設定コード照合 | 1024byte、Origin一致、アプリレートなし | cloudflare/checkin/src/index.ts:50,52 |
| /api/session GET, DELETE | 確認/ログアウト | 共通session | DELETE Origin一致 | cloudflare/checkin/src/index.ts:61 |
| /api/participants GET, POST | 一覧/登録 | 共通session、event固定 | body700KiB、portrait512KiB、name80字 | cloudflare/checkin/src/lifecycle.ts:161 |
| /api/participants/:id PATCH, DELETE | 更新/削除 | 共通session、event固定 | requestId/expectedVersion | cloudflare/checkin/src/lifecycle.ts:167 |
| /api/events/:event/participants/:id/portrait GET; /api/participants/:id/photo GET | 写真 | 共通session、event/key照合 | DBが返したkeyのみ | cloudflare/checkin/src/index.ts:79 |
| /api/checkin/state GET; /api/checkin/roster GET | 受付状態/名簿 | 共通session | event scope | cloudflare/checkin/src/lifecycle.ts:154,157 |
| /api/checkin/close POST; /api/checkin/cleanup POST | 受付終了/GC | 共通session | close body1024/version | cloudflare/checkin/src/lifecycle.ts:155 |
| /api/draw/state GET | 進行状態 | 共通session | event scope | cloudflare/checkin/src/draw.ts:218 |
| /api/draw/pairs POST; /api/draw/pairs/reset POST | ペア決定/リセット | 共通session | 16384/1024byte、人数/重複 | cloudflare/checkin/src/draw.ts:219 |
| /api/draw/start POST; /api/draw/complete POST | ペア発表/完了 | 共通session | version/requestId | cloudflare/checkin/src/draw.ts:223 |
| /api/tournament/replay POST; /api/tournament/reopen POST | 再演/再開 | 共通session | 固定event・状態ガード | cloudflare/checkin/src/draw.ts:221 |
| /api/tournament/{advance,game-start,start,winner,courts-open,court-start,court-winner,court-next,courts-view} POST | 進行/勝者操作 | 共通session | 1024byte、version/requestId/flowガード | cloudflare/checkin/src/draw.ts:216 |
| /api/events/:event/opening GET, POST | 待機画像 | 共通session、event固定 | 画像上限/状態ロック | cloudflare/checkin/src/opening.ts:15 |
| /api/rehearsal/config GET; /api/rehearsal/source GET; /api/rehearsal/status GET | リハ設定/元/状態 | 共通session | REHEARSAL_ENABLED | cloudflare/checkin/src/rehearsal.ts:37 |
| /api/rehearsal/create POST | リハ作成 | 共通session | 入力検証 | cloudflare/checkin/src/rehearsal.ts:44 |

全行はmainコードで**確認済み**、本番は**要検証**。{}内は個別の全経路、各メソッドは独立API。共通session API群のアプリ共有レート制限なし。

別Worker cloudflare/src/index.ts:59,62: GET /api/health（公開）とGET /api/events/:id/state（admin/display別Bearer token・allowlist・読取りのみ）。本番対応は未確認。

## 3. 実装済みの対策

**確認済み**: index.ts:27-38はHMAC-SHA256/8時間session、__Host Cookie/HttpOnly/Secure/SameSite Strict。非GET/HEADはOrigin/Sec-Fetch-Siteを検証。domain.ts:80はJSONと実ストリーム総量検査。SQL bind。例外は固定503、業務エラーはcode/details。**問題あり**: sessionにrole/個人IDがなくUIのadministration booleanはAPI認可ではない。

## 4. 発見した問題

### T-01 受付・観客・管理に共通セッション

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament-latest-review-20261024/cloudflare/checkin/src/index.ts:31,61,73; draw.ts:216
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 同コードの利用者が参加者削除・勝者操作へ到達可能な構造。公開範囲は未確認。
- 推奨する対応: 役割要件とコード配布範囲を確定しAPI認可を設計。今回未実施。

### T-02 共通コードログインにアプリ側レート制限なし

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../../tournament-latest-review-20261024/cloudflare/checkin/src/index.ts:50,52
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 16文字以上の設定検査あり。推測攻撃は実施していない。
- 推奨する対応: WAF実設定と失敗試行上限・失効方法を確認。今回未実施。

## 5. 未確認事項

**未確認**: 観客/参加者への同一コード配布、Cloudflare側レート、全session失効手順、本番CORS。必要情報: 利用者の役割要件、Secrets名称/rotation、WAF active。手順: コード配布表→roleごとのAPI許可→実WAFを照合。GET状態APIにも初期化処理があるため今回それらを呼んでいない。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

隔離Workerで観客/受付/管理の許可表、期限・署名改ざん・別event・Origin拒否を確認。本番winner/cleanup等は呼ばない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
