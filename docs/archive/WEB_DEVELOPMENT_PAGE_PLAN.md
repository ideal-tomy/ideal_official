# Web開発ページ作成プラン

## 概要
Web開発サービスページを、SERVICE_SECTIONS_GUIDE.mdに基づいて効率的に作成するためのタスクチェックリストです。

## セクション構成
**使用セクション:** `0,1,2,3,4,5,6,7,8,9,10,11`
- 0: ヒーローセクション
- 1: 技術説明
- 2: ターゲット説明  
- 3: 活用方法
- 4: 説明セクション
- 5: 比較セクション
- 6: 導入要素
- 7: 理由説明
- 8: 技術提供
- 9: FAQ
- 10: 関連サービス
- 11: CTA

## タスクチェックリスト

### フェーズ1: データ構造と型定義の準備
- [ ] **1.1 データファイル作成**
  - [ ] `data/services/web-development.tsx` を作成
  - [ ] `ServicePageData`型に基づいてWeb開発用データを定義
  - [ ] ヒーローセクション用データ（title, subtitle）
  - [ ] 各セクション用データ（title, description, content）
  - [ ] FAQ用データ（question, answer）
  - [ ] 関連サービス用データ（title, description, href）

- [ ] **1.2 型定義の確認**
  - [ ] `types/service.ts`の型定義が適切か確認
  - [ ] `CardData`, `TabData`, `FAQData`, `RelatedServiceData`の型が利用可能か確認

### フェーズ2: ページファイルの作成
- [ ] **2.1 ページファイル作成**
  - [ ] `app/services/web-development/page.tsx` を作成
  - [ ] 必要なコンポーネントのimport文を追加
  - [ ] メタデータ（title, description, openGraph）を設定
  - [ ] サービスナビゲーション用のserviceLinksデータを定義

- [ ] **2.2 ページ構造の実装**
  - [ ] ページ全体を`<div className="min-h-screen bg-black">`でラップ
  - [ ] 各セクションを`<div className="border-b border-blue-400">`でラップ
  - [ ] `variant="dark"`を統一使用

### フェーズ3: セクション実装（順次実装）

#### セクション0: ヒーローセクション
- [ ] **3.0.1 HeroSection実装**
  - [ ] `HeroSection`コンポーネントを使用
  - [ ] title: "ウェブ技術の可能性"
  - [ ] subText: "中小企業にこそ、webがもたらす大きな恩恵"

#### セクション1: 技術説明
- [ ] **3.1.1 SingleColumnSection実装**
  - [ ] title: "ウェブ技術の可能性"
  - [ ] description: "ウェブサイトは単なる情報発信の手段ではなく、ビジネスの成長を支える重要なプラットフォームです。"
  - [ ] children: 追加の説明文を含む

#### セクション2: ターゲット説明
- [ ] **3.2.1 SingleColumnSection実装**
  - [ ] title: "中小企業にこそ、webがもたらす大きな恩恵"
  - [ ] description: "かつては大企業だけのものだったWeb開発。最新のフレームワークとクラウドサービスの進化により、少ない初期投資で高品質なウェブサイト開発や連携が可能になりました。"
  - [ ] children: 追加の説明文を含む

#### セクション3: 活用方法
- [ ] **3.3.1 ThreeCardSection実装**
  - [ ] title: "具体的な活用方法"
  - [ ] description: "Web技術を活用した具体的なビジネスソリューションをご提案します"
  - [ ] cards配列の作成:
    - [ ] カード1: "コーポレートサイト構築"
      - [ ] description: "レスポンシブデザインと高速な表示速度で、企業の魅力を最大限に引き出すウェブサイトを構築します。"
      - [ ] tags: ["レスポンシブ", "高速表示", "SEO対応"]
      - [ ] modalTitle: "コーポレートサイト構築"
      - [ ] modalContent: 詳細な説明文
      - [ ] modalSize: "lg"
    - [ ] カード2: "ECサイト"
      - [ ] description: "セキュアな決済システムと使いやすい管理画面で、オンラインビジネスの成長を支援します。"
      - [ ] tags: ["決済システム", "セキュリティ", "管理画面"]
      - [ ] modalTitle: "ECサイト"
      - [ ] modalContent: 詳細な説明文
      - [ ] modalSize: "lg"
    - [ ] カード3: "Webアプリケーション"
      - [ ] description: "業務効率化や顧客管理など、ビジネスニーズに合わせたカスタムアプリケーションを開発します。"
      - [ ] tags: ["カスタム開発", "業務効率化", "顧客管理"]
      - [ ] modalTitle: "Webアプリケーション"
      - [ ] modalContent: 詳細な説明文
      - [ ] modalSize: "lg"

#### セクション4: 説明セクション
- [ ] **3.4.1 SingleColumnSection実装**
  - [ ] title: "Webで実現する、ビジネスのデジタル変革"
  - [ ] description: "Web開発は、単なるウェブサイト制作だけでなく、ビジネスプロセスのデジタル化とユーザー体験の向上を実現します。"
  - [ ] children: 追加の説明文を含む

#### セクション5: 比較セクション
- [ ] **3.5.1 TwoColumnSection実装**
  - [ ] title: "従来技術との比較"
  - [ ] leftContent: "従来のウェブ開発"の内容
    - [ ] 静的HTML/CSS
    - [ ] 限定的なインタラクション
    - [ ] デバイス対応が不十分
    - [ ] パフォーマンスが低い
    - [ ] セキュリティ対策が不十分
  - [ ] rightContent: "最新のウェブ開発"の内容
    - [ ] モダンなフレームワーク
    - [ ] 高度なインタラクション
    - [ ] 完全なレスポンシブ対応
    - [ ] 最適化されたパフォーマンス
    - [ ] 包括的なセキュリティ対策

#### セクション6: 導入要素
- [ ] **3.6.1 ThreeCardSection実装**
  - [ ] title: "導入に必要な要素"
  - [ ] description: "Web開発成功のための3つの重要な要素をご説明します"
  - [ ] cards配列の作成:
    - [ ] カード1: "技術要素"
      - [ ] description: "Web開発に必要な技術的な要素を整理します。"
      - [ ] tags: ["フロントエンド", "バックエンド", "データベース"]
      - [ ] modalTitle: "技術要素"
      - [ ] modalContent: 詳細な説明文（フロントエンド開発、バックエンド開発、データベース設計、クラウドインフラ、セキュリティ対策）
      - [ ] modalSize: "lg"
    - [ ] カード2: "ビジネス要素"
      - [ ] description: "Web開発に必要なビジネス的な要素を整理します。"
      - [ ] tags: ["要件定義", "コンテンツ戦略", "マーケティング"]
      - [ ] modalTitle: "ビジネス要素"
      - [ ] modalContent: 詳細な説明文（要件定義、コンテンツ戦略、マーケティング計画、運用体制、ROI分析）
      - [ ] modalSize: "lg"
    - [ ] カード3: "人材要素"
      - [ ] description: "Web開発に必要な人材的な要素を整理します。"
      - [ ] tags: ["フロントエンド開発者", "バックエンド開発者", "UI/UXデザイナー"]
      - [ ] modalTitle: "人材要素"
      - [ ] modalContent: 詳細な説明文（フロントエンド開発者、バックエンド開発者、UI/UXデザイナー、プロジェクトマネージャー、コンテンツ制作者）
      - [ ] modalSize: "lg"

#### セクション7: 理由説明
- [ ] **3.7.1 TwoColumnSection実装**
  - [ ] title: "なぜ今、導入が必要なのか"
  - [ ] leftContent: "市場動向と消費者変化"の内容
    - [ ] モバイルファーストの時代で、レスポンシブ対応が必須に
    - [ ] グローバル市場での競争力強化のため、多言語対応が重要に
    - [ ] ユーザー体験の質が、ビジネスの成功を左右する
  - [ ] rightContent: "技術革新と競争優位性"の内容
    - [ ] 最新のウェブ技術による高速なパフォーマンス
    - [ ] セキュリティ対策の強化による信頼性の向上
    - [ ] データ分析とマーケティングの統合

#### セクション8: 技術提供
- [ ] **3.8.1 TabSection実装**
  - [ ] title: "技術提供"
  - [ ] tabs配列の作成:
    - [ ] タブ1: "開発"
      - [ ] id: "development"
      - [ ] name: "開発"
      - [ ] content: ThreeCardSection（padding="sm"）
        - [ ] カード1: "React開発"
          - [ ] description: "高速でインタラクティブなユーザーインターフェースの実装"
          - [ ] tags: ["React", "Next.js", "TypeScript"]
          - [ ] modalTitle: "React開発"
          - [ ] modalContent: 詳細な説明文
          - [ ] modalSize: "lg"
        - [ ] カード2: "CSSフレームワーク"
          - [ ] description: "モダンでレスポンシブなデザインの実現"
          - [ ] tags: ["Tailwind CSS", "Bootstrap", "CSS-in-JS"]
          - [ ] modalTitle: "CSSフレームワーク"
          - [ ] modalContent: 詳細な説明文
          - [ ] modalSize: "lg"
        - [ ] カード3: "ワードプレス"
          - [ ] description: "指定テーマを最大限活用した動的サイトを作成"
          - [ ] tags: ["WordPress", "テーマカスタマイズ", "プラグイン"]
          - [ ] modalTitle: "ワードプレス"
          - [ ] modalContent: 詳細な説明文
          - [ ] modalSize: "lg"
    - [ ] タブ2: "コンサルティング"
      - [ ] id: "consulting"
      - [ ] name: "コンサルティング"
      - [ ] content: ThreeCardSection（padding="sm"）
        - [ ] カード1: "Webコンサルティング"
          - [ ] description: "ビジネス目標の達成を最優先に、Webサイトの目的定義、競合分析、戦略立案までを一貫してサポートします。"
          - [ ] tags: ["戦略立案", "競合分析", "KPI設定"]
          - [ ] modalTitle: "Webコンサルティング"
          - [ ] modalContent: 詳細な説明文
          - [ ] modalSize: "lg"
        - [ ] カード2: "運用コンサルティング"
          - [ ] description: "サイトは「作って終わり」ではありません。SEO対策、コンテンツ更新、アクセス解析を伴走型で支援し、継続的に成果を生むサイトに育てます。"
          - [ ] tags: ["SEO対策", "コンテンツ更新", "アクセス解析"]
          - [ ] modalTitle: "運用コンサルティング"
          - [ ] modalContent: 詳細な説明文
          - [ ] modalSize: "lg"
        - [ ] カード3: "データベース活用"
          - [ ] description: "顧客データや行動ログを安全に蓄積・活用するデータベースを設計。WebアプリケーションやCRMと連携し、データをビジネス資産に変えます。"
          - [ ] tags: ["データベース設計", "API連携", "CRM連携"]
          - [ ] modalTitle: "データベース活用"
          - [ ] modalContent: 詳細な説明文
          - [ ] modalSize: "lg"
  - [ ] defaultTab: "development"

#### セクション9: FAQ
- [ ] **3.9.1 FAQSection実装**
  - [ ] title: "よくある質問"
  - [ ] faqs配列の作成:
    - [ ] FAQ1: "ウェブ開発にはどのような技術が必要ですか？"
      - [ ] answer: "フロントエンド（React、next.js、Angular）、バックエンド（Node.js、Python、PHP）、データベース（MySQL、PostgreSQL、MongoDB）、クラウドインフラ（AWS、GCP、Azure）など、プロジェクトの要件に応じて最適な技術スタックを選択します。"
    - [ ] FAQ2: "ウェブサイトの開発期間はどのくらいですか？"
      - [ ] answer: "プロジェクトの規模や要件によって異なりますが、一般的なコーポレートサイトで1-2ヶ月、ECサイトで3-6ヶ月、大規模なウェブアプリケーションで6ヶ月以上を想定しています。"
    - [ ] FAQ3: "セキュリティ対策はどのように行っていますか？"
      - [ ] answer: "SSL/TLS証明書の導入、セキュアな認証システムの実装、定期的なセキュリティ監査、脆弱性診断など、包括的なセキュリティ対策を実施しています。"

#### セクション10: 関連サービス
- [ ] **3.10.1 RelatedServicesSection実装**
  - [ ] title: "関連サービス"
  - [ ] services配列の作成:
    - [ ] サービス1: "AI"
      - [ ] description: "AI導入・活用コンサルティングサービス"
      - [ ] tags: ["機械学習", "深層学習", "自然言語処理"]
      - [ ] href: "/services/ai-consulting"
    - [ ] サービス2: "アプリ開発"
      - [ ] description: "iOS・Androidアプリの開発"
      - [ ] tags: ["React Native", "Flutter", "Swift"]
      - [ ] href: "/services/app-development"
    - [ ] サービス3: "ゲーム制作"
      - [ ] description: "モバイル・PCゲームの開発"
      - [ ] tags: ["Unity", "Unreal Engine", "ゲームデザイン"]
      - [ ] href: "/services/game-development"
    - [ ] サービス4: "ブロックチェーン開発"
      - [ ] description: "ブロックチェーン技術を活用したソリューション開発"
      - [ ] tags: ["スマートコントラクト", "DeFi", "NFT"]
      - [ ] href: "/services/blockchain-development"

#### セクション11: CTA
- [ ] **3.11.1 SingleColumnSection実装**
  - [ ] title: "Webで新しいビジネス価値を創造しませんか？"
  - [ ] description: "IDEALのWeb開発サービスで、貴社のビジネスに革新をもたらします。まずはお気軽にお問い合わせください。"
  - [ ] className: "text-center"
  - [ ] children: ボタン配置
    - [ ] ボタン1: "お問い合わせ"（プライマリ）
    - [ ] ボタン2: "サービス一覧に戻る"（セカンダリ）

### フェーズ4: テストと調整
- [ ] **4.1 ページ表示テスト**
  - [ ] ページが正常に表示されるか確認
  - [ ] 各セクションが適切に表示されるか確認
  - [ ] レスポンシブ対応が適切か確認

- [ ] **4.2 モーダル機能テスト**
  - [ ] 各カードのモーダルが正常に開くか確認
  - [ ] モーダルコンテンツが適切に表示されるか確認
  - [ ] モーダルの閉じる機能が正常に動作するか確認

- [ ] **4.3 タブ機能テスト**
  - [ ] 技術提供セクションのタブ切り替えが正常に動作するか確認
  - [ ] 各タブのコンテンツが適切に表示されるか確認

- [ ] **4.4 FAQ機能テスト**
  - [ ] FAQの開閉が正常に動作するか確認
  - [ ] アコーディオン機能が適切に動作するか確認

### フェーズ5: 最終調整
- [ ] **5.1 スタイリング調整**
  - [ ] 各セクションのスタイリングが統一されているか確認
  - [ ] カードの高さが統一されているか確認
  - [ ] パディングが適切に設定されているか確認

- [ ] **5.2 コンテンツ最終確認**
  - [ ] 各セクションのテキストが適切か確認
  - [ ] モーダルコンテンツが充実しているか確認
  - [ ] FAQの内容が適切か確認

- [ ] **5.3 リンク確認**
  - [ ] 関連サービスへのリンクが正常に動作するか確認
  - [ ] ナビゲーションが適切に動作するか確認

## 実装時の注意点

### 共通設定
- 各セクションは`<div className="border-b border-blue-400">`でラップ
- `variant="dark"`を統一使用
- ページ全体は`<div className="min-h-screen bg-black">`でラップ

### パディング調整
- 通常: `padding="lg"`（デフォルト）
- 技術提供セクション: `padding="sm"`（コンパクト表示）

### モーダルコンテンツ作成ガイドライン
- タイトル: `text-xl font-bold text-white mb-4`
- サブタイトル: `font-semibold text-blue-400 mb-2`
- 本文: `text-gray-300`
- セクション間隔: `space-y-4`または`space-y-6`

### レスポンシブ対応
- カードレイアウト: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 2カラムレイアウト: `grid md:grid-cols-2`
- ボタン配置: `flex flex-col sm:flex-row`

## 完了基準
- [ ] 全セクションが正常に表示される
- [ ] モーダル機能が正常に動作する
- [ ] タブ機能が正常に動作する
- [ ] FAQ機能が正常に動作する
- [ ] レスポンシブ対応が適切
- [ ] リンクが正常に動作する
- [ ] スタイリングが統一されている

このプランに従って実装することで、効率的にWeb開発ページを作成できます。
