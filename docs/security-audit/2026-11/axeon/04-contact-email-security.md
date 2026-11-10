# AXEON 問い合わせ・メール

## 1. 調査概要

- 対象案件: axeon
- 対象URL: https://www.axeon.jp/
- リポジトリ: ideal-tomy/rinopro-site; HEAD/main=62c55fa4c6a18bce324f0bae0138297161410a54。本番一致は未確認。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み**: /contact→/api/contact→Zod→sendContactEmails→Resend→管理者通知と自動返信（Promise.all）。src/app/api/contact/route.ts:21、src/lib/contact/send-contact-emails.ts:82。

From=CONTACT_FROM_EMAIL、管理者=CONTACT_ADMIN_EMAIL、通知Reply-To=入力email、自動返信宛=入力email。本番実アドレスは未確認。textメールのみ（send-contact-emails.ts:83,91）。個人情報/相談本文/添付はResendと受信先へ転送。Webhook/GASはこの経路では**対象外**。

| DNS | 判定 |
|---|---|
| MX | 確認済み: Cloudflare Email Routing |
| SPF | 確認済み: google/cloudflare/resend include、~all、apex1レコード |
| DMARC | 問題あり: p=none |
| DKIM | 未確認: 実From/selector不明 |
| Workspace/Resend設定 | 未確認: SPF includeだけで利用完了を断定しない |

根拠: ../public-observations.json。SPFの再帰lookup数は未検証。

## 3. 実装済みの対策

**確認済み**: Zodのname/message上限・email形式、設定不足503、送信失敗502。構造化SDKのtext/subject/replyToを使用。**要検証**: ヘッダー改行拒否。CAPTCHA/honeypot/メール所持確認/宛先quotaは確認した経路にない。片方送信のみ成功した場合も502となり、再送で重複し得る（send-contact-emails.ts:99）。

## 4. 発見した問題

### A-01 CAPTCHA/宛先検証なしで任意メールへ自動返信

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../rinopro-site/src/app/api/contact/route.ts:21; src/lib/contact/send-contact-emails.ts:82; src/lib/rate-limit.ts:1
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 30回/分/プロセス。第三者への迷惑返信・費用増加の構造。本番実行は未検証。
- 推奨する対応: 共有制限・ボット対策・宛先単位/全体上限を設計。今回未実施。

### A-02 氏名・メール・会社名をログ出力

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ../rinopro-site/src/app/api/contact/route.ts:74; src/lib/contact/send-contact-emails.ts:37
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 問い合わせログへの二次保存。開発時は本文/添付プレビューも出力。
- 推奨する対応: PII最小化・閲覧権限・保持期間を設計。今回未実施。

### A-05 DMARCがp=none

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: public-observations.json: _dmarc.axeon.jp TXT
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 監視のみ。受信者に隔離・拒否を要求しない。SPFは1レコード。
- 推奨する対応: 正規送信の認証整合後に強制ポリシー検討。今回未実施。

## 5. 未確認事項

**未確認**: Resend verified domain/DKIM/From制約/quota/retention/suppression/配信履歴/既存悪用。必要情報: Resend読取りと既存メールAuthentication-Results。手順: From→domain→selector→履歴メタデータ→既存認証結果→メンバーを照合。メール送信試験は禁止のまま。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

モックResendで第三者宛/重複/片方成功失敗/改行email/悪意nameを検証。本番宛に送らない。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
