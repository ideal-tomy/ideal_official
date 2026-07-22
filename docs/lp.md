以下に、

要件定義書
デザイン案
ページ構成
各デモページ要件
MVP / 優先順位
必要画像と生成プロンプト

までまとめる。

AI Capability Demo Gallery 要件定義書 / デザイン案 v1.0
0. プロジェクト概要
プロジェクト名

AI Capability Demo Gallery
（仮称。後で名称は変更可）

目的

AI導入を検討している見込み顧客に対して、
「AIで何ができるのか」を抽象的に説明するのではなく、

見て
触って
自社業務に置き換えて想像できる

状態を作る。

このページで証明したいこと

このギャラリーの目的は、単なる機能紹介ではなく、

我々は、業務課題を理解し、技術介入の基本パターンを整理し、それを実際に動く形で提示できる

ことの証明。

1. このサイトの役割

このサイトは「AI機能一覧」ではない。
役割は以下の3つ。

役割1：理解の入口

顧客が「AIで何ができるのか」を具体的に理解できる。

役割2：商談前の想像補助

顧客が自社課題に対して「この機能は使えそう」と想像できる。

役割3：提案の土台

商談時に、

まず基本パターンを見せる
顧客に刺さるものを選ぶ
その後、業界/企業特化デモへ進む

という流れを作る。

2. 対象ユーザー
主対象
AI導入を検討している企業担当者
新規事業担当者
DX担当者
業務改善責任者
経営者
M&A / 事業承継 / バリューアップ文脈の担当者
想定業界
建設
介護
医療
農業
物流
製造
士業
不動産
一般バックオフィス業務
3. サイトコンセプト
コンセプト

AIができることを、業務の変化として体験するショールーム

見せ方の方針
AI技術名を前面に出しすぎない
「何の仕事がどう変わるか」を主役にする
一つのデモで一つの変化を鮮明に見せる
UIUXを重視し、「分かる」「触れる」「使えそう」が一瞬で伝わる構成にする
4. 取り扱う基本パターン（7カテゴリ）

このサイトで扱う基本パターンは以下の7つ。

音声 → 構造化
写真 → 分類
文書 → 抽出
データ → 予測
業務 → 自動化
ナレッジ → 検索
複数情報 → 報告書
5. サイト全体構成
5-1. サイトマップ
/ai-capability-gallery
├─ /voice-to-structured
├─ /photo-to-classification
├─ /document-to-extraction
├─ /data-to-prediction
├─ /workflow-to-automation
├─ /knowledge-to-search
└─ /multi-input-to-report

必要なら将来的に以下も追加可能。

/industries/construction
/industries/care
/industries/medical
/industries/logistics
5-2. ページ一覧
① トップLP

7つの能力を一覧で見せるページ。
各デモの入口。

② 各デモ詳細ページ（7ページ）

各能力ごとに、体験デモ・用途・Before/After・応用例・CTAを掲載。

6. トップLP 要件定義
6-1. トップLPの目的
7つの基本パターンを一覧で理解させる
どれが自社に刺さるかを見つけてもらう
各デモ詳細ページへ遷移させる
最終的に問い合わせや商談へつなげる
6-2. トップLP構成
Section 1. Hero
役割

世界観提示。

表示内容
見出し
サブコピー
CTA
メインビジュアル
コピー案

見出し
AIで仕事は変わっていく

本文
音声、写真、文書、データ。
日々の業務をAIがどう理解し、整理し、実行するのか。
実際に触れる7つのデモで体験できます。

CTA

デモを見る
相談する
Section 2. What We Show
見せる内容

このページが「AIツール一覧」ではなく、
「業務変化の基本パターン集」であることを伝える。

見出し案

AI機能ではなく、業務の変化を見せる。

本文案

このギャラリーでは、
「AIチャットボット」「OCR」「自動化ツール」といった技術名ではなく、
実際の仕事がどう変わるかを7つのパターンに整理して紹介します。

Section 3. 7 Capability Cards

7つのカードを一覧表示。

各カードに入れる要素：

番号
タイトル
短い説明
応用業界タグ
Before / After 一言
デモへ進むCTA
例：音声 → 構造化
タイトル：話すだけで、記録が完成する。
補足：音声を、業務で使える構造化データへ変換。
タグ：医療 / 介護 / 建設 / 営業
Before：会話や報告が記録されない
After：必要項目が自動整理される
CTA：デモを体験
Section 4. How to Use
役割

顧客に「このサイトの見方」を説明する。

3ステップ表示
気になるデモを選ぶ
実際に触ってみる
自社向けの活用案を相談する
Section 5. Industry Examples
役割

1つの能力が複数業界に応用できることを伝える。

表示例
建設：現場日報 / 写真整理 / 報告書自動生成
介護：ケア記録 / マニュアル検索 / レポート生成
物流：配車補助 / 荷主情報整理 / 業務報告
医療：カルテ / 文書抽出 / ナレッジ検索
Section 6. Why This Matters
見出し案

機能を作る前に、何を変えるべきかを見極める。

本文案

我々は、企業ごとの異なる課題に対して、
どこに技術を介入させるべきかを見つけ、
必要ならプロトタイプを作り、業務の未来を先に見せます。
このギャラリーは、そのための基本パターン集です。

Section 7. CTA
見出し案

自社に合うパターンを、一緒に考えませんか。

CTA
相談する
デモ制作を相談する
自社課題から提案を受ける
7. 各デモ詳細ページ 共通要件

各詳細ページは、UI構造を統一する。

7-1. 各ページの共通構成
Hero
課題提示
デモ体験エリア
Before / After
応用例（業界別）
導入効果
関連デモ
CTA
7-2. 共通Hero構成
タイトル
一文説明
代表ユースケースタグ
デモ開始ボタン
小さな補足
デモ用サンプルデータ使用
実運用では要件に合わせて設計可能
7-3. デモ体験エリアの共通設計方針
方針
一画面で「入力 → AI処理 → 結果」が分かる
操作はシンプル
1デモ1変化に絞る
過剰機能を入れない
“動く感” を明確に見せる
画面の美しさより「変化の分かりやすさ」を優先
必須要素
入力エリア
処理中表示
結果表示
リセットボタン
サンプルデータ切替
業界切替（必要なら）
8. 各デモページ個別要件
8-1. 音声 → 構造化
目的

非構造な話し言葉を、業務データとして使える形式に変える。

想定ユースケース
医療：カルテ
介護：ケア記録
建設：現場日報
営業：商談記録
デモの見せ方
業界を選択
録音 or サンプル音声再生
テキスト化
構造化項目へ整理表示
デモUI構成

左：

業界選択
音声入力欄
サンプル入力

中央：

処理中ログ
音声解析中
話者意図を判定中
業務項目に整理中

右：

構造化結果
出力例
日付
案件名
作業内容
問題点
対応内容
次回対応
8-2. 写真 → 分類
目的

画像を送るだけで、内容理解・分類・命名・保存整理まで行う。

想定ユースケース
建設：現場写真整理
不動産：物件写真整理
製造：不具合写真分類
保険：事故写真整理
デモの見せ方
複数画像アップロード
AIが画像内容を判定
ファイル名自動変更
フォルダ分類結果表示
デモUI構成

左：

ドロップエリア
サムネイル一覧

中央：

AI処理ログ

右：

整理後のフォルダツリー
変更後ファイル名一覧
伝えるべき変化

Before：IMG_4832.jpg のまま散在
After：意味のある名前と保存先に整理される

8-3. 文書 → 抽出
目的

PDFや文書から必要情報を抽出し、意思決定可能な情報に変える。

想定ユースケース
契約書
請求書
DD資料
見積書
点検表
デモの見せ方
PDF読み込み
抽出テンプレート選択
情報抽出
原文ハイライト連動
デモUI構成

左：

文書ビュー

右：

抽出結果テーブル

下部：

リスク/重要項目サマリー
必須UX

抽出結果をクリックすると、左の原文該当箇所がハイライトされる。

8-4. データ → 予測
目的

過去データから未来の意思決定を支援する。

想定ユースケース
来客数予測
需要予測
離職予測
故障予測
配送遅延予測
デモの見せ方
サンプルデータ表示
予測対象選択
予測実行
結果 + 要因可視化
デモUI構成

左：

データサンプル / 条件選択

中央：

グラフ

右：

予測値
信頼区間
影響要因
注意

このデモは信頼性表現が重要。
「予測値だけ」を見せず、要因をセットで見せる。

8-5. 業務 → 自動化
目的

人が繰り返していた定型作業をAIが代行できることを見せる。

想定ユースケース
メール処理
PDF確認
データ登録
通知送信
タスク作成
デモの見せ方
1件の業務フローを自動処理
受信→判定→抽出→登録→通知 まで流す
デモUI構成

左：

受信トレイ / 入力情報

中央：

AI処理ステップログ

右：

登録結果 / 完了通知
見せるべきこと

単純なチャットではなく、
複数ステップの業務を実行していること。

8-6. ナレッジ → 検索
目的

社内資料や規程を「探す」から「聞けば見つかる」へ変える。

想定ユースケース
社内規程検索
建設図面/マニュアル検索
介護マニュアル
FAQボット
問い合わせ支援
デモの見せ方
質問入力
回答生成
根拠文書表示
原文ハイライト
デモUI構成

左：

質問一覧 or チャット履歴

中央：

回答エリア

右：

参照文書一覧
原文プレビュー
必須UX
根拠が明示されること
回答だけでなく出典が見えること
8-7. 複数情報 → 報告書
目的

複数種類の素材を統合し、完成した業務文書にする。

想定ユースケース
現場報告書
介護レポート
業務報告書
調査報告書
監査レポート
デモの見せ方
写真、音声、メモ、数値を読み込む
AIが統合
完成報告書を生成
デモUI構成

左：

入力素材一覧

中央：

生成プロセス

右：

完成報告書
必須UX

各報告書文章に「参照元ラベル」を表示する。
例：

写真2
音声メモ
Excel進捗データ
9. デザイン方針
9-1. デザインコンセプト

高級感のある技術ショールーム × 分かりやすい業務体験

目指す印象
先進的
高品質
信頼感
UIが美しい
難しすぎない
“業務で使える感” がある
9-2. トンマナ
全体トーン
ビジネス寄り
冷たすぎない
高級感
スマート
余白を広めに使う
UIモックが主役
避けたいもの
安っぽいAI感
過度なSF感
派手すぎるグラデーション
情報過多な画面
何でもできそうに見える過剰演出
9-3. カラーパレット案

ブランドサイトに合わせつつ、デモ体験しやすい色にする。

メイン
Charcoal: #111315
Deep Gray: #1D2125
Light Gray: #F4F5F7
White: #FFFFFF
アクセント
Deep Red: #8B0000
Accent Red: #CC0000
補助
Border Gray: #D9DDE3
Success: #16A34A
Warning: #F59E0B
Info Blue: #2563EB
9-4. UIの基本方針
トップLP
ダークベースでも可
カードや見出しを美しく見せる
高級感重視
デモ詳細ページ
デモ部分はライトUI推奨
入力/処理/結果が見やすい
実運用感を出す
マーケ画面よりアプリ画面として信頼感を優先
提案

LPはダーク基調、デモ画面はライト基調
→ 世界観と可読性を両立できる

9-5. タイポグラフィ
推奨
日本語：Noto Sans JP / Inter 併用
英字アクセント：Inter or Space Grotesk
方針
見出しは太め
説明文は短く、行間広め
カード説明は2〜3行で切る
技術用語を増やしすぎない
10. レイアウト方針
10-1. PC
12カラム
最大幅 1200〜1280px
Heroは広め
7カードは 3列 or 4列崩し
デモ画面は 3ペイン構成が基本
10-2. モバイル
Heroは縦積み
カードは1列
デモ画面は縦積み
「入力 → 処理 → 結果」の順でスクロールできる構成
モバイルでもデモ体験が成り立つよう簡略化
11. 主要コンポーネント一覧
Header
Hero
Capability Card
Section Heading
Tag / Chip
Before / After box
Demo Frame
Upload Area
Processing Log
Result Panel
Folder Tree
Extracted Table
Prediction Summary
Evidence Panel
Related Demo Card
CTA Banner
Footer
12. MVP優先順位

全部一気にでもよいが、実務的には以下順がよい。

優先度A
写真 → 分類
音声 → 構造化
文書 → 抽出
ナレッジ → 検索
優先度B
複数情報 → 報告書
優先度C
業務 → 自動化
データ → 予測
理由
A群は視覚的で伝わりやすく、既存資産も活かしやすい
B群はA群との連携感が強く、価値を広げやすい
C群は作り込み方次第で品質差が大きいため、後回しでもよい
13. 実装上の方針
13-1. 重要方針

デモは「機能の完全実装」ではなく「価値体験の設計」を重視する。

つまり
本番品質のバックエンドをいきなり作らない
UIの気持ちよさを優先
サンプルデータを用意
操作して「なるほど」が起きることを最優先
13-2. デモ設計ルール
1デモ = 1つの価値変化
入力前と後の差が明確
初見30秒で理解可能
用途の切替はできても、機能過多にしない
結果に根拠や理由が必要な場合は必ず表示
14. 問い合わせ導線

各ページに必須。

CTA例
自社向けの活用例を相談する
このデモをベースに業界特化版を作りたい
自社課題に合うAIデモを提案してほしい
15. 画像要件

このサイトはUI中心なので、大量の写真素材は不要。
必要なのは主に以下。

必要画像
トップHero用キービジュアル
7カテゴリのサムネイル / ビジュアル
必要なら背景装飾用の抽象ビジュアル
16. 画像生成プロンプト

以下はそのまま生成に使えるように書く。

16-1. Heroキービジュアル用プロンプト

用途
トップページ Hero

推奨サイズ

16:9
高解像度

プロンプト

A premium futuristic business visual showing AI transforming everyday business inputs into structured workflows. Include abstract representations of voice, photos, documents, data charts, and reports flowing into a clean high-end dashboard interface. The composition should feel elegant, modern, and trustworthy rather than sci-fi. Use a dark premium background with subtle red accents, smooth glass-like UI panels, soft lighting, and a sophisticated business-tech atmosphere. No logos, no text, no clutter. The image should feel like an AI capability showroom for enterprise workflow transformation.

16-2. 音声 → 構造化 サムネイル用プロンプト

プロンプト

Create a clean premium product-style illustration representing “voice to structured data.” Show a minimal interface with a microphone input, speech waveform, transcription snippets, and organized structured fields appearing on the right. The style should be sleek, modern, enterprise-grade, with subtle red accents, clean white UI cards, and a dark elegant background. No text labels, no logos, no people, no clutter.

16-3. 写真 → 分類 サムネイル用プロンプト

プロンプト

Create a clean premium product-style illustration representing “photo to classification.” Show multiple uploaded image thumbnails on the left, an AI processing flow in the center, and neatly organized folders with intelligently renamed image files on the right. The visual should feel elegant, minimal, enterprise-grade, and highly understandable. Use a dark premium background and refined white UI surfaces with subtle red accents. No text labels, no logos.

16-4. 文書 → 抽出 サムネイル用プロンプト

プロンプト

Create a premium business-tech illustration representing “document to extraction.” Show a document or PDF viewer on one side and extracted structured fields or a smart table on the other side, with key clauses highlighted. The style should be sleek, professional, minimal, and enterprise-friendly, using dark background, soft lighting, white panels, and subtle red accents. No text labels, no logos, no excessive details.

16-5. データ → 予測 サムネイル用プロンプト

プロンプト

Create a premium product-style illustration representing “data to prediction.” Show business data points or a chart transforming into a forward-looking prediction graph with a forecast line, confidence range, and influence indicators. The image should feel high-end, analytical, and trustworthy, with clean UI cards, subtle red accents, dark elegant background, and no logos or text.

16-6. 業務 → 自動化 サムネイル用プロンプト

プロンプト

Create a premium product-style illustration representing “workflow to automation.” Show a multi-step business process such as email, file review, data extraction, system registration, and notification flowing automatically from left to right. The style should be minimal, modern, and enterprise-grade, with clean interface blocks, subtle red accents, dark premium background, and no logos or text.

16-7. ナレッジ → 検索 サムネイル用プロンプト

プロンプト

Create a premium enterprise-tech illustration representing “knowledge to search.” Show a smart search or question input interface connected to internal documents, manuals, and policy files, with an answer panel and evidence references. Make the visual clean, trustworthy, elegant, and modern, with a dark background, refined UI panels, subtle red accents, and no logos or text.

16-8. 複数情報 → 報告書 サムネイル用プロンプト

プロンプト

Create a premium business-tech illustration representing “multiple inputs to report generation.” Show different input types such as photos, voice notes, text memos, spreadsheets, and documents flowing into a polished final report document on the right. The design should feel clean, advanced, and enterprise-grade, using white interface panels on a dark sophisticated background with subtle red accents. No logos, no text.

16-9. 背景装飾用 抽象ビジュアルプロンプト

用途
セクション背景や装飾

プロンプト

Create an abstract premium technology background for an enterprise AI website. Use elegant layered shapes, soft glassmorphism panels, subtle grid structures, floating data-flow lines, and refined dark tones with deep gray and subtle red highlights. The style should be minimal, high-end, and clean, suitable as a background element behind business UI sections. No text, no logos, no obvious objects.

17. 推奨するページ名 / 表示名

英語と日本語どちらでもいけるが、今の流れなら英語ラベル + 日本語説明が相性いい。

トップページ表示名候補
AI Capability Demo Gallery
AI Workflow Demo Gallery
AI Business Capability Showcase
AI Prototype Gallery

個人的には、

AI Capability Demo Gallery

が一番わかりやすい。

18. 命名案（7カテゴリ）

英語ルート用のURL名も合わせて置いておく。

日本語	英語表示	URL
音声 → 構造化	Voice to Structured Data	/voice-to-structured
写真 → 分類	Photo to Classification	/photo-to-classification
文書 → 抽出	Document to Extraction	/document-to-extraction
データ → 予測	Data to Prediction	/data-to-prediction
業務 → 自動化	Workflow to Automation	/workflow-to-automation
ナレッジ → 検索	Knowledge to Search	/knowledge-to-search
複数情報 → 報告書	Multi-Input to Report	/multi-input-to-report
19. 最後に：このプロジェクトの本質

このページ群は単なる「AIデモ集」ではない。

本質は、

仕事の課題を見て、そこにどんな技術介入が可能かを、分かりやすく、触れる形で提示する

こと。

つまり、将来的に建設・介護・物流・M&Aなどの業界特化デモに発展していくための
共通基盤 / 共通言語 / 共通ショールームになる。