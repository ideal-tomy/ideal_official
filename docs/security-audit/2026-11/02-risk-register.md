# 横断リスク管理表

## 1. 調査概要

- 対象: ideal / tournament / AXEON / サンリットウエスト
- 対象URL・リポジトリ: [資産台帳](01-asset-inventory.md)。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は public-observations.json。
- 範囲・方法: ソース静的読解、GitHub GET、公開HTTP/DNS、npm audit、サービス一覧の読取り。調査のみ。

## 2. 現在の構成

コード上の問題、公開応答の問題、本番の未検証条件を分離。重大度は匿名利用可能範囲、秘密/個人情報/運営状態への影響、公開状況を基に判断。根拠のない数値採点はしない。

## 3. 実装済みの対策

ideal503、画像上限、Cookie/Origin、入力検証などの対策と限界は各第3節。

## 4. 発見した問題

| ID | 案件 | 分野 | 問題 | 重大度 | 根拠 | 対応方針 | 状態 |
|---|---|---|---|---|---|---|---|
| I-01 | ideal | メールDNS | SPF・DMARCを公開DNSで確認できない | 高 | public-observations.json: ideal-dao.com TXT / _dmarc.ideal-dao.com NXDOMAIN | 送信元ドメインと権威DNSを照合し正規送信に合う認証を設計 | 問題あり（本番条件は個別記載） |
| I-02 | ideal | フォーム | 保護変更が未コミットでGitHub mainに未反映 | 高 | lib/contact/handle-contact.ts:90; lib/contact/turnstile.ts:108; main app/api/contact/route.ts | 503を維持し本番commit/envとGAS下流を確認 | 問題あり（本番条件は個別記載） |
| I-03 | ideal | AI接続 | ローカルOPENAI_BASE_URLがUpstash系ホストを指す | 高 | lib/concierge/ai/openai.ts:38,45,48; lib/concierge/guide/classify.ts:69; .env.localの設定項目（値非記載） | 正しい接続先・キーの用途・過去到達履歴を確認 | 問題あり（本番条件は個別記載） |
| I-04 | ideal | API | 公開AI APIの制限がプロセス内Mapのみ | 中 | lib/concierge/ai/rate-limit.ts:8; lib/concierge/guide/rate-limit.ts:7 | 共有制限と全体予算を設計 | 問題あり（本番条件は個別記載） |
| I-05 | ideal | Web | トップ応答にページCSP等がない | 中 | public-observations.json: HEAD https://www.ideal-dao.com/; next.config.ts | 必要なページCSP・nosniff・frame制限を設計 | 問題あり（本番条件は個別記載） |
| I-06 | ideal | 依存 | Next.js/sharp等が既知脆弱性の該当版 | 高 | package-lock.json: next16.0.11 / sharp0.34.4; ideal-dependency-audit.json | 公式勧告条件と本番artifactを照合して更新計画 | 問題あり（本番条件は個別記載） |
| T-01 | tournament | 認可 | 受付・観客・管理に共通セッション | 高 | ../../tournament-latest-review-20261024/cloudflare/checkin/src/index.ts:31,61,73; draw.ts:216 | 役割要件とコード配布範囲を確定しAPI認可を設計 | 問題あり（本番条件は個別記載） |
| T-02 | tournament | 認証 | 共通コードログインにアプリ側レート制限なし | 中 | ../../tournament-latest-review-20261024/cloudflare/checkin/src/index.ts:50,52 | WAF実設定と失敗試行上限・失効方法を確認 | 問題あり（本番条件は個別記載） |
| T-03 | tournament | 旧DB | 旧Supabase版にanon全権相当のポリシー | 高 | ../../tournament/supabase/migrations/07_fix_grants_rls.sql:90,101,231; 02_rls_realtime.sql:64 | 旧DBの稼働/公開API/実効権限を確認 | 問題あり（本番条件は個別記載） |
| T-04 | tournament | 写真 | 完全デコード・寸法上限・再エンコードなし | 中 | ../../tournament-latest-review-20261024/cloudflare/checkin/src/domain.ts:57 | 完全画像検証とメタデータ除去を設計 | 問題あり（本番条件は個別記載） |
| T-05 | tournament | 依存 | 開発/テスト依存等に既知脆弱性 | 中 | tournament-dependency-audit.json; package-lock.json | 開発サーバー公開と到達条件を確認し更新計画 | 問題あり（本番条件は個別記載） |
| A-01 | axeon | メール | CAPTCHA/宛先検証なしで任意メールへ自動返信 | 高 | ../rinopro-site/src/app/api/contact/route.ts:21; src/lib/contact/send-contact-emails.ts:82; src/lib/rate-limit.ts:1 | 共有制限・ボット対策・宛先単位/全体上限を設計 | 問題あり（本番条件は個別記載） |
| A-02 | axeon | ログ | 氏名・メール・会社名をログ出力 | 中 | ../rinopro-site/src/app/api/contact/route.ts:74; src/lib/contact/send-contact-emails.ts:37 | PII最小化・閲覧権限・保持期間を設計 | 問題あり（本番条件は個別記載） |
| A-03 | axeon | API | AI API入力の構造・長さ上限が不十分 | 中 | ../rinopro-site/src/app/api/chat/route.ts:41,47; estimate-detailed/route.ts:81,89 | 入力スキーマ・会話数・総バイト数を制限 | 問題あり（本番条件は個別記載） |
| A-04 | axeon | API | 内部例外メッセージを利用者に返す | 中 | ../rinopro-site/src/app/api/chat/route.ts:101; inquiry-brief/route.ts:58 | 公開エラーを固定し内部ログと分離 | 問題あり（本番条件は個別記載） |
| A-05 | axeon | メールDNS | DMARCがp=none | 中 | public-observations.json: _dmarc.axeon.jp TXT | 正規送信の認証整合後に強制ポリシー検討 | 問題あり（本番条件は個別記載） |
| A-06 | axeon | 依存 | Next.js/sharp等が既知脆弱性の該当版 | 高 | ../rinopro-site/package-lock.json: next16.2.0 / sharp0.34.5; axeon-dependency-audit.json | 勧告条件と本番ビルドを照合し更新計画 | 問題あり（本番条件は個別記載） |
| S-01 | sunlit-west | 候補API | 候補sunlitがAPIキーと本文をログ出力 | 高 | ideal-tomy/sunlit@cff0b85/api/openai-chat.cjs:17,18,23 | 稼働先・ログ・キー履歴を確認し必要な失効計画 | 問題あり（本番条件は個別記載） |
| S-02 | sunlit-west | 候補フォーム | 候補実装のフォーム送信がalertのみ | 中 | ideal-tomy/sunlitwest@2d72156/src/pages/Contact.tsx:29; sunlit同ファイル | 現行版との対応を先に確定 | 問題あり（本番条件は個別記載） |
| S-03 | sunlit-west | 候補依存 | 候補にaxios1.6.2等の旧依存 | 中 | sunlitwest/package.json:16,41; sunlit/package.json:16,45 | 正本を確定しlockfileと使用経路を監査 | 問題あり（本番条件は個別記載） |
| S-04 | sunlit-west | メールDNS | 公開メールsunlit.fitのMX/SPF回答なし | 高 | public-observations.json: sunlit.fit MX/TXT; 公開HTML mailto | 実受信先・権威DNSと既存メール認証を確認 | 問題あり（本番条件は個別記載） |
| S-05 | sunlit-west | Web | 現行HEADに主要防御ヘッダーなし | 中 | public-observations.json: HEAD https://sunlit-west.live-web.jp/ | 管理事業者のヘッダー設定を確認 | 問題あり（本番条件は個別記載） |

各IDの影響・理由・推奨対応・判定制約は案件レポート第4節。未確認の本番悪用を断定しない。

## 5. 未確認事項

本番帰属・管理設定不足は00-overviewと各第5節。S-01等の候補コードを現行live-webへ無条件に帰属しない。

## 6. 推奨改善案

緊急確認: I-03/S-01のキー取扱いとT-03旧DBの稼働。続いてI-02の503維持/本番照合、A-01の匿名返信、I-06/A-06勧告条件、T-01のコード配布/認可。短期: メールDNS/ログ最小化/画像。中長期: 復元/権限棚卸し。変更は別依頼。

## 7. 検証方法

修正時に根拠版・変更版・隔離検証・本番反映を追記。未確認を問題なしへ自動変更しない。
