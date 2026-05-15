import React from 'react'
import { ServicePageData } from '../../types/service'

export const webDevelopmentData: ServicePageData = {
  id: 'web-development',
  title: 'Web開発',
  description: '高品質なWeb開発サービス。レスポンシブデザイン、SEO最適化、高速パフォーマンスを実現します。',
  hero: {
    title: "ウェブ技術の可能性",
    subtitle: "中小企業にこそ、webがもたらす大きな恩恵"
  },
  sections: [
    {
      id: 'technology-explanation',
      type: 'single',
      title: 'ウェブ技術の可能性',
      description: 'ウェブサイトは単なる情報発信の手段ではなく、ビジネスの成長を支える重要なプラットフォームです。IDEALでは最先端の技術と創造的なアイデアを組み合わせ、クライアント様のビジョンに合わせた独自のウェブソリューションを提供します。',
      content: (
        <div className="mt-6">
          <p className="text-gray-300 leading-relaxed">
            レスポンシブデザイン、高速なパフォーマンス、セキュアな実装、ユーザーフレンドリーなインターフェースなど、次世代のウェブ体験を実現します。
          </p>
        </div>
      )
    },
    {
      id: 'target-explanation',
      type: 'single',
      title: '中小企業にこそ、webがもたらす大きな恩恵',
      description: 'かつては大企業だけのものだったWeb開発。最新のフレームワークとクラウドサービスの進化により、少ない初期投資で高品質なウェブサイト開発や連携が可能になりました。',
      content: (
        <div className="mt-6">
          <p className="text-gray-300 leading-relaxed">
            意思決定の速さと組織の柔軟性を活かせる中小企業だからこそ、デジタルトランスフォーメーションの恩恵を最大限に受けることができます。
          </p>
        </div>
      )
    },
    {
      id: 'use-cases',
      type: 'three-cards',
      title: '具体的な活用方法',
      description: 'Web技術を活用した具体的なビジネスソリューションをご提案します',
      data: {
        cards: [
          {
            title: 'コーポレートサイト構築',
            description: 'レスポンシブデザインと高速な表示速度で、企業の魅力を最大限に引き出すウェブサイトを構築します。',
            tags: ['レスポンシブ', '高速表示', 'SEO対応'],
            modalTitle: 'コーポレートサイト構築',
            modalContent: (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">企業の「顔」を、最高のデジタル体験で構築する</h3>
                <p className="text-gray-300 mb-6">
                  現代において、コーポレートサイトは単なる名刺代わりではありません。それは企業のブランド価値、信頼性、そして未来へのビジョンを伝える「第一印象」そのものです。
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">1. Next.jsによる超高速パフォーマンス</h4>
                    <p className="text-gray-300">私たちは、React/Next.jsなどのモダンな技術スタックを採用し、従来のWebサイトとは比較にならないほどの表示速度を実現します。訪問者にストレスを与えない瞬時のレスポンスは、SEO評価（検索順位）の向上と離脱率の大幅な改善に直結します。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">2. モバイルファーストの完全レスポンシブ設計</h4>
                    <p className="text-gray-300">PC、タブレット、スマートフォン。あらゆるデバイスでデザインが最適化されるのは当然のこと。私たちはさらに一歩進み、どのデバイスからアクセスしても「使いやすく」「美しく」感じられる、真のモバイルファーストUI/UXを設計します。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">3. CMS連携による「育てられる」サイト</h4>
                    <p className="text-gray-300">お知らせやブログ、実績紹介など、お客様自身で簡単に情報を更新できるヘッドレスCMS（microCMSなど）との連携を標準でご提案。「作って終わり」ではなく、ビジネスの成長と共に「育てていける」資産としてのWebサイトを構築します。</p>
                  </div>
                </div>
              </div>
            ),
            modalSize: "lg"
          },
          {
            title: 'ECサイト',
            description: 'セキュアな決済システムと使いやすい管理画面で、オンラインビジネスの成長を支援します。',
            tags: ['決済システム', 'セキュリティ', '管理画面'],
            modalTitle: 'ECサイト',
            modalContent: (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">スケーラブルで安全なEコマース体験を</h3>
                <p className="text-gray-300 mb-6">
                  オンラインでの購買体験は、今やビジネスの成功を左右する最重要領域です。私たちは、機会損失を防ぐ堅牢なシステムと、ブランド価値を高める上質なデザインを提供します。
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">1. Shopify / Shopify Plus カスタマイズ</h4>
                    <p className="text-gray-300">世界No.1シェアのShopifyをベースに、貴社のブランドイメージに合わせた独自のデザイン（カスタムテーマ）や、特殊な販売ロジック（定期購入、B2B卸売など）を実現するアプリ開発を行います。グローバル展開、大規模トラフィックにも耐えうるスケーラビリティが魅力です。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">2. Headless Commerce（ヘッドレスコマース）</h4>
                    <p className="text-gray-300">フロントエンド（Next.js）とバックエンド（Shopify APIなど）を分離する最先端の「ヘッドレス」構成にも対応。これにより、アプリのような滑らかな操作感（UI/UX）と、ECプラットフォームの枠に縛られない自由なデザイン・機能実装を両立させることが可能です。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">3. 万全のセキュリティと決済システム</h4>
                    <p className="text-gray-300">クレジットカード情報の安全な取り扱い（PCI DSS準拠）はもちろん、各種決済（Amazon Pay, Apple Payなど）への対応、在庫管理システムやCRMとのAPI連携まで、Eコマース運営に必要な全てをワンストップで構築します。</p>
                  </div>
                </div>
              </div>
            ),
            modalSize: "lg"
          },
          {
            title: 'Webアプリケーション',
            description: '業務効率化や顧客管理など、ビジネスニーズに合わせたカスタムアプリケーションを開発します。',
            tags: ['カスタム開発', '業務効率化', '顧客管理'],
            modalTitle: 'Webアプリケーション',
            modalContent: (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">貴社だけの「業務課題」を解決するカスタムメイド・ソリューション</h3>
                <p className="text-gray-300 mb-6">
                  市販のSaaS（サブスクリプション型サービス）では解決できない、複雑でニッチな業務課題。それこそが、私たちの得意領域です。貴社の業務プロセスに完璧にフィットする、オーダーメイドのWebアプリケーションを開発します。
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">1. 業務効率化システム</h4>
                    <p className="text-gray-300">Excelやスプレッドシートでの属人的な管理から脱却しませんか？ 案件管理（CRM）、予約システム、在庫管理、社内ポータルなど、貴社のワークフローをデジタル化し、生産性を劇的に向上させるシステムを構築します。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">2. 顧客向け（B2C）Webサービス</h4>
                    <p className="text-gray-300">会員制サイト、マッチングプラットフォーム、サブスクリプション管理、オンライン学習（e-ラーニング）システムなど、ユーザーに新しい価値を提供する独自のWebサービス開発を、要件定義からインフラ構築、運用保守まで一貫してサポートします。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">3. 堅牢なバックエンドとデータベース設計</h4>
                    <p className="text-gray-300">Node.js, Python, Goなどのモダンなバックエンド技術と、MySQL, PostgreSQL, MongoDBなどのデータベースを最適に組み合わせ、大量のデータを高速かつ安全に処理するシステムの「心臓部」を設計・構築します。</p>
                  </div>
                </div>
              </div>
            ),
            modalSize: "lg"
          }
        ]
      }
    },
    {
      id: 'digital-transformation',
      type: 'single',
      title: 'Webで実現する、ビジネスのデジタル変革',
      description: 'Web開発は、単なるウェブサイト制作だけでなく、ビジネスプロセスのデジタル化とユーザー体験の向上を実現します。',
      content: (
        <div className="mt-6">
          <p className="text-gray-300 leading-relaxed">
            私たちは、最新技術の導入を通じて、企業の持続的な成長とデジタル競争力の強化をサポートします。
          </p>
        </div>
      )
    },
    {
      id: 'comparison',
      type: 'two-column',
      title: '従来技術との比較',
      data: {
        leftContent: (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">従来のウェブ開発</h3>
            <ul className="space-y-3 text-gray-300 inline-block text-left">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>静的HTML/CSS</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>限定的なインタラクション</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>デバイス対応が不十分</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>パフォーマンスが低い</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>セキュリティ対策が不十分</span>
              </li>
            </ul>
          </div>
        ),
        rightContent: (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">最新のウェブ開発</h3>
            <ul className="space-y-3 text-gray-300 inline-block text-left">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>モダンなフレームワーク</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>高度なインタラクション</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>完全なレスポンシブ対応</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>最適化されたパフォーマンス</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>包括的なセキュリティ対策</span>
              </li>
            </ul>
          </div>
        )
      }
    },
    {
      id: 'required-elements',
      type: 'three-cards',
      title: '導入に必要な要素',
      description: 'Web開発成功のための3つの重要な要素をご説明します',
      data: {
        cards: [
          {
            title: '技術要素',
            description: 'Web開発に必要な技術的な要素を整理します。',
            tags: ['フロントエンド', 'バックエンド', 'データベース'],
            modalTitle: '技術要素',
            modalContent: (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">高速・安全・スケーラブルなWebサイトを支える技術スタック</h3>
                <p className="text-gray-300 mb-6">
                  私たちは、目的やパフォーマンス要件に応じて最適な技術を選定し、モダンなWebアーキテクチャを構築します。
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">1. フロントエンド（UI/UX）</h4>
                    <p className="text-gray-300">訪問者の「第一印象」を決めるフロントエンドには、React (Next.js)を採用。サーバーサイドレンダリング（SSR）と静的サイト生成（SSG）を駆使し、圧倒的な表示速度と最高のSEOパフォーマンス、アプリのような滑らかなユーザー体験を実現します。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">2. バックエンド（API・サーバーサイド）</h4>
                    <p className="text-gray-300">ECサイトの決済処理、Webアプリケーションの複雑なロジック、CMSとの連携など、システムの「頭脳」となるバックエンドを構築。Node.js, Python, Goなどを用い、高速でスケーラブルなAPI（ヘッドレスアーキテクチャ）を設計します。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">3. データベース（DB）</h4>
                    <p className="text-gray-300">顧客情報、商品データ、コンテンツを安全かつ効率的に管理するデータベースは、Webサイトの「金庫」です。リレーショナルDB（MySQL, PostgreSQL）からNoSQL（MongoDB）まで、データの特性に応じて最適なDBを選定・設計します。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">4. インフラ（クラウド）</h4>
                    <p className="text-gray-300">Next.jsとの親和性が最も高いVercelへのデプロイを標準とし、自動化されたCI/CDパイプラインを構築。より複雑な要件にはAWSやGCPを活用し、高い可用性とセキュリティを備えたインフラ環境を提供します。</p>
                  </div>
                </div>
              </div>
            ),
            modalSize: "lg"
          },
          {
            title: 'ビジネス要素',
            description: 'Web開発に必要なビジネス的な要素を整理します。',
            tags: ['要件定義', 'コンテンツ戦略', 'マーケティング'],
            modalTitle: 'ビジネス要素',
            modalContent: (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">「作る」ことの先にある「ビジネス成果」の設計</h3>
                <p className="text-gray-300 mb-6">
                  優れたWebサイトとは、技術的に高度であること以前に、ビジネス上の課題を解決できるものでなくてはなりません。
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">1. 戦略的な要件定義</h4>
                    <p className="text-gray-300">私たちは「何が欲しいか」ではなく、「なぜそれが必要か」からヒアリングします。貴社のビジネス目標（KGI）を達成するために、Webサイトが果たすべき役割（KPI）を明確に定義。単なる機能一覧ではない、「成果につながる」要件定義を行います。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">2. コンテンツ戦略</h4>
                    <p className="text-gray-300">「誰に、何を、どのように伝えるか」というコンテンツ戦略は、デザインや技術と同じくらい重要です。ターゲットユーザーのペルソナを設計し、SEOを意識した情報アーキテクチャ（サイト構造）と、ブランドの「声」を反映したコンテンツ計画を策定します。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">3. マーケティング・運用体制</h4>
                    <p className="text-gray-300">Webサイトは「公開」がスタートです。Google Analytics (GA4) の高度な設定によるアクセス解析、SEO対策、公開後の保守・運用体制の構築までを見据え、「育てていける」Webサイトの運用フローを設計・提案します。</p>
                  </div>
                </div>
              </div>
            ),
            modalSize: "lg"
          },
          {
            title: '人材要素',
            description: 'Web開発に必要な人材的な要素を整理します。',
            tags: ['フロントエンド開発者', 'バックエンド開発者', 'UI/UXデザイナー'],
            modalTitle: '人材要素',
            modalContent: (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">最高のWeb体験を創り出す、専門家による協業チーム</h3>
                <p className="text-gray-300 mb-6">
                  モダンなWeb開発は、もはや一人の「ホームページ作成者」では完結できません。各分野の専門家が連携し、最高のプロダクトを創り上げます。
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">1. UI/UXデザイナー</h4>
                    <p className="text-gray-300">訪問者が「心地よい」と感じ、「迷わず」ゴールに到達できるか。design.md に基づく美的な「高級感」と、ユーザー心理に基づいた機能的な「使いやすさ」を両立する、最先端のUI/UXを設計します。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">2. フロントエンド / バックエンド開発者</h4>
                    <p className="text-gray-300">デザイナーの意図を1ピクセルの狂いなくコードに落とし込むフロントエンドと、セキュリティとパフォーマンスを担保するバックエンド。それぞれの領域に特化したエンジニアが、高品質な実装を担います。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">3. プロジェクトマネージャー（PM）</h4>
                    <p className="text-gray-300">開発チームと貴社との「橋渡し役」です。concept.md に基づくアジャイルな進行管理、厳格な品質テスト、そして何より「ビジネス目標が達成されているか」という視点を持ち続け、プロジェクト全体を成功に導きます。</p>
                  </div>
                </div>
              </div>
            ),
            modalSize: "lg"
          }
        ]
      }
    },
    {
      id: 'why-now',
      type: 'two-column',
      title: 'なぜ今、導入が必要なのか',
      data: {
        leftContent: (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">市場動向と消費者変化</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>モバイルファーストの時代で、レスポンシブ対応が必須に</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>グローバル市場での競争力強化のため、多言語対応が重要に</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>ユーザー体験の質が、ビジネスの成功を左右する</span>
              </li>
            </ul>
          </div>
        ),
        rightContent: (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">技術革新と競争優位性</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>最新のウェブ技術による高速なパフォーマンス</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>セキュリティ対策の強化による信頼性の向上</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>データ分析とマーケティングの統合</span>
              </li>
            </ul>
          </div>
        )
      }
    },
    {
      id: 'technology-provider',
      type: 'tabs',
      title: '技術提供',
      data: {
        tabs: [
          {
            id: 'development',
            name: '開発',
            content: {
              type: 'three-cards',
              cards: [
                {
                  title: 'React開発',
                  description: '高速でインタラクティブなユーザーインターフェースの実装',
                  tags: ['React', 'Next.js', 'TypeScript'],
                  modalTitle: 'React開発',
                  modalContent: (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-4">Next.js & TypeScriptによる最先端のReact開発</h3>
                      <p className="text-gray-300 mb-6">
                        私たちは、Reactのポテンシャルを最大限に引き出すため、Next.js と TypeScript を標準の技術スタックとして採用しています。
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">Next.jsによるパフォーマンス最適化</h4>
                          <p className="text-gray-300">サーバーサイドレンダリング（SSR）と静的サイト生成（SSG）をハイブリッドに活用し、従来のReact（SPA）では難しかった「初期表示の高速化」と「SEOの最大化」を両立。訪問者にストレスを感じさせない、シームレスな&ldquo;宇宙&rdquo;のような操作体験を提供します。</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">TypeScriptによる堅牢な設計</h4>
                          <p className="text-gray-300">大規模なアプリケーションになるほど、コードの品質維持は困難になります。私たちはTypeScriptによる厳格な型定義を導入し、開発段階でのバグを徹底的に排除。concept.md に基づく保守性・拡張性の高いコードベースを構築します。</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">コンポーネントベースのUI構築</h4>
                          <p className="text-gray-300">Reactの最大の強みである「コンポーネントベース開発」を徹底。design-tokens.ts と連携した再利用可能なUI部品を構築し、ブランド全体で一貫した「高級感」のあるデザインシステムを実装します。</p>
                        </div>
                      </div>
                    </div>
                  ),
                  modalSize: "lg"
                },
                {
                  title: 'CSSフレームワーク',
                  description: 'モダンでレスポンシブなデザインの実現',
                  tags: ['Tailwind CSS', 'Bootstrap', 'CSS-in-JS'],
                  modalTitle: 'CSSフレームワーク',
                  modalContent: (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-4">デザインルールを実装する、モダンCSSアーキテクチャ</h3>
                      <p className="text-gray-300 mb-6">
                        デザイン（design.md）は、それを正確にコードへ実装（実装）する技術があってこそ輝きます。私たちは、プロジェクトの要件に応じて最適なCSSソリューションを選定します。
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">Tailwind CSSによるユーティリティファースト</h4>
                          <p className="text-gray-300">このプロジェクトでも採用しているTailwind CSSは、design-tokens.ts のようなデザインルールと最も相性の良いフレームワークです。HTML内に直接スタイルを記述することで、CSSファイルの肥大化を防ぎ、パフォーマンスを維持したまま「高級感」のあるデザインを迅速に実装できます。</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">プロジェクトに応じた柔軟な選定</h4>
                          <p className="text-gray-300">既存のBootstrapベースのサイト改修や、CSS-in-JS（Emotion, Styled Components）による動的なスタイリングが求められるReactアプリケーション開発など、要件に応じてあらゆるモダンな手法に対応。常に「パフォーマンス」と「保守性」を天秤にかけ、最適なアーキテクチャを提案します。</p>
                        </div>
                      </div>
                    </div>
                  ),
                  modalSize: "lg"
                },
                {
                  title: 'ワードプレス',
                  description: '指定テーマを最大限活用した動的サイトを作成',
                  tags: ['WordPress', 'テーマカスタマイズ', 'プラグイン'],
                  modalTitle: 'ワードプレス',
                  modalContent: (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-4">CMSの王道「WordPress」の最適化と、その先の活用</h3>
                      <p className="text-gray-300 mb-6">
                        世界最大のシェアを持つCMSであるWordPressの知見も豊富です。単なるテーマの適用に留まらず、そのポテンシャルを最大限に引き出します。
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">テーマカスタマイズとパフォーマンスチューニング</h4>
                          <p className="text-gray-300">選定された高機能テーマをベースにしつつ、design.md のコンセプトに合わせてデザインを徹底的にカスタマイズします。また、WordPressサイトが陥りがちな「表示速度の低下」を防ぐため、不要なプラグインの精査、画像最適化、キャッシュ設定を施し、高速なサイト運用を実現します。</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">Headless CMSとしての活用（最先端）</h4>
                          <p className="text-gray-300">「ブログの更新はWordPressの簡単な管理画面を使いたい。でも、サイトの表示はNext.jsで超高速にしたい」。この両立こそが、私たちの得意とする「ヘッドレスCMS」構成です。 WordPressを「データ（記事）を入れる箱」としてのみ利用し、フロントエンドはNext.jsで構築。これにより、WordPressのセキュリティリスクを大幅に低減しつつ、最先端のWebパフォーマンスを手に入れることが可能です。</p>
                        </div>
                      </div>
                    </div>
                  ),
                  modalSize: "lg"
                }
              ]
            }
          },
          {
            id: 'consulting',
            name: 'コンサルティング',
            content: {
              type: 'three-cards',
              cards: [
                {
                  title: 'Webコンサルティング',
                  description: 'ビジネス目標の達成を最優先に、Webサイトの目的定義、競合分析、戦略立案までを一貫してサポートします。',
                  tags: ['戦略立案', '競合分析', 'KPI設定'],
                  modalTitle: 'Webコンサルティング',
                  modalContent: (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-4">Webサイトの「目的」を明確化する戦略立案</h3>
                      <p className="text-gray-300 mb-6">
                        「なんとなくリニューアルしたい」を「売上を15%向上させるサイト」に変革します。私たちは、技術的な開発に入る前に、貴社のビジネスモデルと市場を深く理解することから始めます。
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">競合分析とポジショニング</h4>
                          <p className="text-gray-300">競合他社がどのようなWeb戦略を取り、どの層にアプローチしているかを徹底的に分析。貴社が取るべき独自のポジション（立ち位置）と、ターゲットに響くメッセージ（concept.md）を明確にします。</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">KGI/KPIの策定</h4>
                          <p className="text-gray-300">「お問い合わせ数」「EC売上」「資料請求数」など、Webサイトが達成すべき最終目標（KGI）と、それを達成するための中間指標（KPI）を具体的に設定。感覚的なデザインではなく、成果を測定できるWebサイトを設計します。</p>
                        </div>
                      </div>
                    </div>
                  ),
                  modalSize: "lg"
                },
                {
                  title: '運用コンサルティング',
                  description: 'サイトは「作って終わり」ではありません。SEO対策、コンテンツ更新、アクセス解析を伴走型で支援し、継続的に成果を生むサイトに育てます。',
                  tags: ['SEO対策', 'コンテンツ更新', 'アクセス解析'],
                  modalTitle: '運用コンサルティング',
                  modalContent: (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-4">サイトを「育てる」ための継続的サポート</h3>
                      <p className="text-gray-300 mb-6">
                        Webサイトは公開がスタートラインです。私たちは、公開後の運用フェーズこそが最も重要だと考えています。
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">SEO（検索エンジン最適化）対策</h4>
                          <p className="text-gray-300">Googleのアルゴリズム変動を常に監視し、テクニカルSEO（内部構造の最適化）とコンテンツSEO（良質な記事の追加）の両面から、オーガニック検索からの流入を最大化します。</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">アクセス解析と改善提案（PDCA）</h4>
                          <p className="text-gray-300">Google Analytics 4 (GA4) などのツールを用い、ユーザーが「どこから来て」「どのページを見て」「どこで離脱したか」を詳細に分析。データに基づいた具体的な改善案（例: ボタンの配置変更、フォームの簡略化）を毎月提案し、コンバージョン率の改善（DEVELOPMENT_GUIDE.md）を続けます。</p>
                        </div>
                      </div>
                    </div>
                  ),
                  modalSize: "lg"
                },
                {
                  title: 'データベース活用',
                  description: '顧客データや行動ログを安全に蓄積・活用するデータベースを設計。WebアプリケーションやCRMと連携し、データをビジネス資産に変えます。',
                  tags: ['データベース設計', 'API連携', 'CRM連携'],
                  modalTitle: 'データベース活用',
                  modalContent: (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-4">Webアプリケーションの「頭脳」となるデータベース設計</h3>
                      <p className="text-gray-300 mb-6">
                        動的なWebアプリケーション（会員制サイト、ECサイト、予約システムなど）には、堅牢で効率的なデータベースが不可欠です。
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">RDB・NoSQLの選定</h4>
                          <p className="text-gray-300">扱うデータの特性（構造化データか、非構造化データか）や将来的な拡張性を考慮し、MySQL, PostgreSQL（RDB）やMongoDB（NoSQL）など、最適なデータベース技術を選定します。</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">API連携とデータ活用</h4>
                          <p className="text-gray-300">バックエンド（Node.js, Pythonなど）とデータベースを安全に接続するAPIを設計。CRM（顧客管理システム）やSFA（営業支援システム）と連携させ、収集したデータを「顧客分析」や「マーケティングオートメーション」に活用する道筋までを構築します。</p>
                        </div>
                      </div>
                    </div>
                  ),
                  modalSize: "lg"
                }
              ]
            }
          }
        ],
        defaultTab: 'development'
      }
    }
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'ウェブ開発にはどのような技術が必要ですか？',
      answer: 'フロントエンド（React、next.js、Angular）、バックエンド（Node.js、Python、PHP）、データベース（MySQL、PostgreSQL、MongoDB）、クラウドインフラ（AWS、GCP、Azure）など、プロジェクトの要件に応じて最適な技術スタックを選択します。'
    },
    {
      id: 'faq-2',
      question: 'ウェブサイトの開発期間はどのくらいですか？',
      answer: 'プロジェクトの規模や要件によって異なりますが、一般的なコーポレートサイトで1-2ヶ月、ECサイトで3-6ヶ月、大規模なウェブアプリケーションで6ヶ月以上を想定しています。'
    },
    {
      id: 'faq-3',
      question: 'セキュリティ対策はどのように行っていますか？',
      answer: 'SSL/TLS証明書の導入、セキュアな認証システムの実装、定期的なセキュリティ監査、脆弱性診断など、包括的なセキュリティ対策を実施しています。'
    }
  ],
  relatedServices: [
    {
      id: 'ai-consulting',
      title: 'AI',
      description: 'AI導入・活用コンサルティングサービス',
      tags: ['機械学習', '深層学習', '自然言語処理'],
      href: '/services/ai-consulting'
    },
    {
      id: 'app-development',
      title: 'アプリ開発',
      description: 'iOS・Androidアプリの開発',
      tags: ['React Native', 'Flutter', 'Swift'],
      href: '/services/app-development'
    },
    {
      id: 'game-development',
      title: 'ゲーム制作',
      description: 'モバイル・PCゲームの開発',
      tags: ['Unity', 'Unreal Engine', 'ゲームデザイン'],
      href: '/services/game-development'
    },
    {
      id: 'blockchain-development',
      title: 'ブロックチェーン開発',
      description: 'ブロックチェーン技術を活用したソリューション開発',
      tags: ['スマートコントラクト', 'DeFi', 'NFT'],
      href: '/services/blockchain-development'
    }
  ]
}