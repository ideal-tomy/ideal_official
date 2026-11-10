# サンリット 問い合わせ・メール

## 1. 調査概要

- 対象案件: sunlit-west
- 対象URL: https://sunlit-west.live-web.jp/
- リポジトリ: 候補ideal-tomy/sunlitwest (2d721569aea471724b78017434307537f58a8fde) と ideal-tomy/sunlit (cff0b85e59a6f7270af3c8d47b17432b0cca8f7b)。現行版との対応は未確認。
- 調査日時: 2026-11-10 JST。公開観測のUTC時刻は ../public-observations.json。
- 調査範囲: 本書記載のコード/公開応答/読取り可能な設定。
- 調査方法: 静的読解、GitHub GET、少数の公開GET/HEAD、公開DNS、依存監査。DB操作・送信・設定変更なし。
- 判定は **確認済み / 問題あり / 要検証 / 未確認 / 対象外**。コードの存在と本番有効性を区別する。

## 2. 現在の構成

**確認済み（現行HTML）**: mailto:bonesetter@sunlit.fit、トップformタグ0。**未確認**: JS後生成フォーム、別ページ/予約導線、実送信サービス。mailtoは利用者のメーラーへ委ねるものでサイトからの自動返信とは別。

**確認済み（候補）**: src/pages/Contact.tsx:29はpreventDefault→成功alert→入力クリアのみ。sunlitwest:56はチャットを/api/dify-chatへ送る。sunlitは別OpenAI backendを含む。現行との同一性は未確認。

| DNS | 判定 |
|---|---|
| sunlit.fit MX | 問題あり: 公開照会の回答なし、送信試験なし |
| sunlit.fit SPF | 問題あり: apex TXT回答なし |
| sunlit.fit DMARC | 確認済み: p=none、強制なし |
| DKIM | 未確認: 実送信元/selector不明 |
| live-web.jp親/サイトsubdomain | MX/TXT/DMARC回答なし。送信元である証拠なく、それだけで不備としない |

根拠: ../public-observations.json、現行HTML、候補blob。MX不在だけでSMTP不能を断定せず暗黙のA/AAAA配送と実受信設定の照合が必要。

## 3. 実装済みの対策

**未確認（現行）**: CAPTCHA/honeypot/レート/入力/spam失敗、Webhook/GAS/通知先/自動返信/From/Reply-To/quota/HTML・CRLF対策。機能がないと確定していないため対象外としない。

## 4. 発見した問題

### S-02 候補実装のフォーム送信がalertのみ

- 重大度: **中**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: ideal-tomy/sunlitwest@2d72156/src/pages/Contact.tsx:29; sunlit同ファイル
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 成功表示し入力を消すが送信しない。現行live-web版への帰属は未確定。
- 推奨する対応: 現行版との対応を先に確定。今回未実施。

### S-04 公開メールsunlit.fitのMX/SPF回答なし

- 重大度: **高**
- 判定状況: **問題あり**（コード/観測で確認。本番帰属の制約は以下）
- 根拠: public-observations.json: sunlit.fit MX/TXT; 公開HTML mailto
- 確認方法: ソース静的読解、公開DNS/HTTP読み取り、またはnpm audit。
- 影響・重大度の理由: 受信到達性・送信元認証に懸念。送信試験なし。DMARCはp=none。
- 推奨する対応: 実受信先・権威DNSと既存メール認証を確認。今回未実施。

## 5. 未確認事項

必要情報: 現行問い合わせ/予約URL、事業者のメール経路、実受信先、既存認証ヘッダー/DKIM selector。手順: 動的handler→API→Webhook認証→メールサービス→通知/返信→保存削除をソースと設定で追跡。候補のalertを現行経路としない。

本番照合に必要な情報: 接続済みVercelは対象プロジェクト0件。接続Supabaseは対象DBなし。Cloudflare管理・メール管理・GASソースの読み取り権限は未取得。正しい対象アカウントの読み取り権限、または設定項目名/対象環境を付した値非表示の一覧が必要。秘密値の提供は不要。

## 6. 推奨改善案

- 緊急: 高重大度項目と本番資産の帰属を優先確認。idealの503は維持する。
- 短期: 問題IDに沿った修正案・受入条件を準備し、別途依頼後に実施する。
- 中長期: 最小権限、保持/削除、監視、バックアップ/復元を運用責任者と定義する。

## 7. 検証方法

送信せず権威DNS/既存メール認証/受信設定を照合。候補を運用するならモックで成功表示と実deliveryの対応を確認。

変更は実施していない。送信・書込み・大量試行を伴う試験は今回実施せず、将来は別途承認した隔離環境・ダミーデータ・モック送信先で行う。
