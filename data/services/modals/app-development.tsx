import type { ReactNode } from 'react'

export const modalContents: Record<string, ReactNode> = {
  '会員アプリ': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">会員アプリ</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">顧客管理機能</h4>
          <p className="text-gray-300">会員情報の一元管理、購入履歴の追跡、顧客セグメンテーションによるターゲティング</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">ポイントシステム</h4>
          <p className="text-gray-300">購入時のポイント付与、ポイント交換、ランク制度による顧客ロイヤルティ向上</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">プッシュ通知</h4>
          <p className="text-gray-300">新商品情報、セール情報、イベント告知など、効果的なマーケティングツール</p>
        </div>
      </div>
    </div>
  ),
  'ゲームアプリ': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">ゲームアプリ</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">ブランドゲーム</h4>
          <p className="text-gray-300">企業のブランドを活用したオリジナルゲームで、ブランド認知度と顧客エンゲージメントを向上</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">収益化モデル</h4>
          <p className="text-gray-300">広告収入、アプリ内課金、スポンサーシップなど、多様な収益化手法を実装</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">ソーシャル機能</h4>
          <p className="text-gray-300">ランキング、フレンド機能、コミュニティ機能でユーザー同士の交流を促進</p>
        </div>
      </div>
    </div>
  ),
  '社内業務アプリ': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">社内業務アプリ</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">勤怠管理</h4>
          <p className="text-gray-300">出退勤記録、休暇申請、シフト管理など、人事業務の効率化</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">情報共有</h4>
          <p className="text-gray-300">社内ニュース、会議資料、マニュアルなど、必要な情報をリアルタイムで共有</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">業務管理</h4>
          <p className="text-gray-300">タスク管理、進捗確認、レポート提出など、プロジェクト管理の効率化</p>
        </div>
      </div>
    </div>
  ),
  "技術要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">フロントエンド開発</h4>
          <p className="text-gray-300">React Native、Flutter、Swift、Kotlinなど、プラットフォームに最適な技術選択</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">バックエンド開発</h4>
          <p className="text-gray-300">API設計、サーバー構築、データ処理、認証システムの実装</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">データベース設計</h4>
          <p className="text-gray-300">効率的なデータ構造設計、スケーラビリティを考慮したDB選択</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">クラウドインフラ</h4>
          <p className="text-gray-300">AWS、Azure、GCPなど、クラウドサービスを活用したスケーラブルなインフラ構築</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">セキュリティ対策</h4>
          <p className="text-gray-300">データ暗号化、認証・認可、API セキュリティ、プライバシー保護</p>
        </div>
      </div>
    </div>
  ),
  "ビジネス要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">ビジネス要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">要件定義</h4>
          <p className="text-gray-300">ユーザーニーズの分析、機能要件の整理、非機能要件の定義</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">コンテンツ戦略</h4>
          <p className="text-gray-300">ユーザーエクスペリエンス設計、コンテンツ企画、情報アーキテクチャ</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">マーケティング計画</h4>
          <p className="text-gray-300">アプリストア最適化、プロモーション戦略、ユーザー獲得計画</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">運用体制</h4>
          <p className="text-gray-300">サポート体制、アップデート計画、品質管理プロセス</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">ROI分析</h4>
          <p className="text-gray-300">投資対効果の算出、KPI設定、継続的な効果測定</p>
        </div>
      </div>
    </div>
  ),
  "人材要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">人材要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">フロントエンド開発者</h4>
          <p className="text-gray-300">モバイルアプリのUI実装、ユーザーインタラクション設計</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">バックエンド開発者</h4>
          <p className="text-gray-300">サーバーサイド開発、API設計、データベース管理</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">UI/UXデザイナー</h4>
          <p className="text-gray-300">ユーザーエクスペリエンス設計、インターフェースデザイン、ユーザビリティテスト</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">プロジェクトマネージャー</h4>
          <p className="text-gray-300">プロジェクト管理、スケジュール調整、品質管理</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">コンテンツ制作者</h4>
          <p className="text-gray-300">アプリ内コンテンツ制作、マーケティング素材作成</p>
        </div>
      </div>
    </div>
  ),
  'iOSアプリ開発': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        Swift・Objective-CによるiOS開発
      </h4>
      <p className="text-gray-300 leading-relaxed">
        Appleの最新技術を活用し、App Storeの審査基準をクリアする高品質なiOSアプリを開発します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">技術スタック</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• Swift 5.9+</li>
          <li>• Objective-C</li>
          <li>• SwiftUI</li>
          <li>• UIKit</li>
          <li>• Core Data</li>
        </ul>
      </div>
    </div>
  ),
  'Androidアプリ開発': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        Kotlin・JavaによるAndroid開発
      </h4>
      <p className="text-gray-300 leading-relaxed">
        Googleの推奨技術を使用し、Material Design 3に準拠した美しいAndroidアプリを開発します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">技術スタック</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• Kotlin</li>
          <li>• Java</li>
          <li>• Jetpack Compose</li>
          <li>• Android Studio</li>
          <li>• Material Design</li>
        </ul>
      </div>
    </div>
  ),
  'クロスプラットフォーム開発': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        効率的なクロスプラットフォーム開発
      </h4>
      <p className="text-gray-300 leading-relaxed">
        一つのコードベースでiOS・Android両方に対応したアプリを効率的に開発します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">技術スタック</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• React Native</li>
          <li>• Flutter</li>
          <li>• JavaScript</li>
          <li>• Dart</li>
          <li>• PWA</li>
        </ul>
      </div>
    </div>
  ),
  'アプリ戦略立案': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        包括的なアプリ戦略立案
      </h4>
      <p className="text-gray-300 leading-relaxed">
        企業のビジネス目標に合わせたアプリ戦略を策定し、成功への道筋を明確にします。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">サービス内容</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• アプリ戦略の策定</li>
          <li>• ユースケースの特定</li>
          <li>• ROI分析</li>
          <li>• 導入計画の立案</li>
          <li>• 競合分析</li>
        </ul>
      </div>
    </div>
  ),
  'セキュリティ対策': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        包括的なセキュリティ対策
      </h4>
      <p className="text-gray-300 leading-relaxed">
        最新のセキュリティ基準に準拠し、ユーザーデータを保護する安全なアプリケーションを構築します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">セキュリティ要素</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• データ暗号化</li>
          <li>• 認証・認可システム</li>
          <li>• API セキュリティ</li>
          <li>• プライバシー保護</li>
          <li>• セキュリティ監査</li>
        </ul>
      </div>
    </div>
  ),
  '運用サポート': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        継続的な運用サポート
      </h4>
      <p className="text-gray-300 leading-relaxed">
        アプリケーションの継続的な運営を支援し、パフォーマンスの最適化とユーザー体験の向上を実現します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">サポート内容</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• 継続的な運営支援</li>
          <li>• コンテンツ管理</li>
          <li>• パフォーマンス最適化</li>
          <li>• バグ修正・アップデート</li>
          <li>• ユーザーサポート</li>
        </ul>
      </div>
    </div>
  ),
}
