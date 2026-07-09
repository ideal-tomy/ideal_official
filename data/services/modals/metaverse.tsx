import type { ReactNode } from 'react'

export const modalContents: Record<string, ReactNode> = {
  'バーチャルショールーム': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">バーチャルショールーム</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">3D商品展示</h4>
          <p className="text-gray-300">リアルな3Dモデルで商品を360度から確認でき、詳細な情報を提供</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">仮想店舗体験</h4>
          <p className="text-gray-300">実店舗のような体験をオンラインで提供し、顧客エンゲージメントを向上</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">24時間アクセス</h4>
          <p className="text-gray-300">時間や場所を問わず、世界中の顧客に商品をアピール可能</p>
        </div>
      </div>
    </div>
  ),
  'バーチャルイベント': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">バーチャルイベント</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">展示会・セミナー</h4>
          <p className="text-gray-300">メタバース空間で大規模なイベントを開催し、世界中から参加者を集客</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">インタラクティブな体験</h4>
          <p className="text-gray-300">参加者同士の交流やリアルタイムのQ&Aなど、双方向のコミュニケーション</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">コスト削減</h4>
          <p className="text-gray-300">会場費や移動費を削減し、効率的なイベント運営を実現</p>
        </div>
      </div>
    </div>
  ),
  '仮想トレーニング': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">仮想トレーニング</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">実践的な訓練</h4>
          <p className="text-gray-300">VR技術により、危険な作業や高額な機材を使う訓練を安全に実施</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">繰り返し学習</h4>
          <p className="text-gray-300">何度でも繰り返し練習でき、効率的なスキル習得が可能</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">データ分析</h4>
          <p className="text-gray-300">訓練データを分析し、個々の習熟度に合わせた教育プログラムを提供</p>
        </div>
      </div>
    </div>
  ),
  "技術要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">3Dモデリングとレンダリング</h4>
          <p className="text-gray-300">高品質な3Dモデルの作成とリアルタイムレンダリング技術</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">VR/ARデバイス対応</h4>
          <p className="text-gray-300">各種VRヘッドセットやARデバイスへの最適化</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">クラウドインフラストラクチャ</h4>
          <p className="text-gray-300">スケーラブルなクラウド環境の構築と運用</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">リアルタイム通信プロトコル</h4>
          <p className="text-gray-300">低遅延でのマルチユーザー通信の実現</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">ブロックチェーン統合</h4>
          <p className="text-gray-300">NFTやデジタル資産管理のための基盤構築</p>
        </div>
      </div>
    </div>
  ),
  "ビジネス要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">ビジネス要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">明確な目標とKPI設定</h4>
          <p className="text-gray-300">メタバース導入の目的と成功指標の明確化</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">ユーザー獲得戦略</h4>
          <p className="text-gray-300">ターゲットユーザーの特定とマーケティング戦略の策定</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">コンテンツ制作計画</h4>
          <p className="text-gray-300">魅力的なコンテンツの継続的な制作と更新</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">収益化モデル</h4>
          <p className="text-gray-300">持続可能なビジネスモデルの構築</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">運用・保守体制</h4>
          <p className="text-gray-300">システムの安定運用と継続的な改善体制の確立</p>
        </div>
      </div>
    </div>
  ),
  "人材要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">人材要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">3Dデザイナー</h4>
          <p className="text-gray-300">高品質な3Dモデルやアセットの制作</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">VR/AR開発者</h4>
          <p className="text-gray-300">VR/ARアプリケーションの開発と最適化</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">UI/UXデザイナー</h4>
          <p className="text-gray-300">直感的で使いやすいインターフェースの設計</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">バックエンドエンジニア</h4>
          <p className="text-gray-300">サーバーサイドシステムとインフラの構築</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">コンテンツクリエイター</h4>
          <p className="text-gray-300">魅力的なコンテンツの企画と制作</p>
        </div>
      </div>
    </div>
  ),
  'VR/AR技術': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        最新のVR/AR技術
      </h4>
      <p className="text-gray-300 leading-relaxed">
        最新のVR/AR技術を活用し、没入感の高いメタバース体験を実現します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">技術特徴</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• 高い没入感の実現</li>
          <li>• マルチデバイス対応</li>
          <li>• 直感的な操作性</li>
          <li>• リアルタイムレンダリング</li>
        </ul>
      </div>
    </div>
  ),
  'ゲームエンジン': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        高性能ゲームエンジン
      </h4>
      <p className="text-gray-300 leading-relaxed">
        UnityやUnreal Engineなどの高性能ゲームエンジンを使用し、リアルタイムのインタラクションと美しいグラフィックを実現します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">開発環境</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• Unity開発</li>
          <li>• Unreal Engine開発</li>
          <li>• パフォーマンス最適化</li>
          <li>• クロスプラットフォーム対応</li>
        </ul>
      </div>
    </div>
  ),
  'ブロックチェーン': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        ブロックチェーン統合
      </h4>
      <p className="text-gray-300 leading-relaxed">
        ブロックチェーン技術を活用し、デジタル資産の所有権管理や安全な取引を可能にするNFTシステムを実装します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">実装機能</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• NFTシステム</li>
          <li>• デジタル資産管理</li>
          <li>• 安全な取引環境</li>
          <li>• Web3統合</li>
        </ul>
      </div>
    </div>
  ),
  '仮想空間構築': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        最適化された仮想空間構築
      </h4>
      <p className="text-gray-300 leading-relaxed">
        企業のブランディングやマーケティング目的に最適化されたメタバース環境を設計し構築します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">サービス内容</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• 空間設計とコンセプト策定</li>
          <li>• バーチャルショールーム構築</li>
          <li>• イベントスペース設計</li>
          <li>• トレーニング環境構築</li>
        </ul>
      </div>
    </div>
  ),
  'ユーザーエクスペリエンス': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        最適なユーザー体験設計
      </h4>
      <p className="text-gray-300 leading-relaxed">
        メタバース内での直感的な操作と没入感を実現するインタラクションとUI/UXを設計します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">設計要素</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• UI/UX設計</li>
          <li>• インタラクション設計</li>
          <li>• ユーザーテスト</li>
          <li>• 継続的な改善</li>
        </ul>
      </div>
    </div>
  ),
  '運用サポート': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        包括的な運用サポート
      </h4>
      <p className="text-gray-300 leading-relaxed">
        メタバース環境の安定的な運用と定期的な改善を支援します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">サポート内容</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• システムメンテナンス</li>
          <li>• コンテンツ更新</li>
          <li>• パフォーマンス最適化</li>
          <li>• セキュリティ対策</li>
        </ul>
      </div>
    </div>
  ),
}
