# ideal Webセキュリティ

## 1. 調査概要

- 対象案件: ideal
- 対象URL: https://www.ideal-dao.com/
- リポジトリ: ideal-tomy/ideal_official; HEAD/main=0b2c55bc20634a0a786df889046f0508302560d5。保護機能は未コミット変更を別評価。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: Next.js16.0.11/React19.2.0/TypeScript（package-lock.json）。HTTP308→HTTPS307→www200。Vercel応答・Cloudflare NS。TLS1.3で証明書検証成功。根拠: ../public-observations.json、../audit-evidence.json。

## 3. 実装済みの対策

**確認済み**: HSTS max-age=63072000。next.config.tsはpoweredByHeader=false。/.envと/.git/configはHEAD404。画像用CSPはあるがページ用とは別。GitHubはpublic、ローカル.github/workflowsなし。全依存監査は ../ideal-dependency-audit.json。パッケージ16件でありCVE件数ではない。

## 4. 発見した問題

### I-05 トップ応答にページCSP等がない

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: public-observations.json: HEAD https://www.ideal-dao.com/; next.config.ts
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: HSTSあり。画像用CSPはページ全体のCSPではない。欠如だけでXSS成立とはしない。
- 推奨する対応: 必要なページCSP・nosniff・frame制限を設計。今回未実施。

### I-06 Next.js/sharp等が既知脆弱性の該当版

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: package-lock.json: next16.0.11 / sharp0.34.4; ideal-dependency-audit.json
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 監査16パッケージ（critical1/high11/moderate3/low1）。本番RCE成立は要検証。
- 推奨する対応: 公式勧告条件と本番artifactを照合して更新計画。今回未実施。

## 5. 未確認事項

**未確認**: TLS旧版/暗号スイート、証明書更新運用、ソースマップ、全public配下、管理画面の網羅的露出、過去deploy、GitHub App/ブランチ保護/CI実効権限。トップのACAO *をAPI CORSへ一般化しない。追加情報: 本番TLS/Protection/CI設定。手順: Domains→Production→Protection→Git権限を読取り照合。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

[公式SVG RCE勧告](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw)のglibc/画像処理/sharp条件と本番artifactを照合。next16.0.11/sharp0.34.4は勧告範囲だが本番悪用成立は未確認。[SVG DoS勧告](https://github.com/vercel/next.js/security/advisories/GHSA-q8wf-6r8g-63ch)はVercel対象外と明記されており混同しない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
