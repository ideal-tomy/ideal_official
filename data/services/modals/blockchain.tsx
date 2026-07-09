import type { ReactNode } from 'react'

export const modalContents: Record<string, ReactNode> = {
  '取引の透明化': (
    <div className="space-y-6">
        <h3 className="text-xl font-bold text-white mb-4">取引の透明化</h3>
    <div className="space-y-4">
      <div>
            <h4 className="font-semibold text-brand mb-2">スマートコントラクトによる自動化</h4>
            <p className="text-gray-300">条件が満たされた時に自動実行される契約により、人的ミスを排除し、取引の信頼性を向上</p>
      </div>
      <div>
            <h4 className="font-semibold text-brand mb-2">改ざん防止</h4>
            <p className="text-gray-300">ブロックチェーンの暗号技術により、取引履歴の改ざんを防止し、データの整合性を保証</p>
      </div>
      <div>
            <h4 className="font-semibold text-brand mb-2">監査可能性</h4>
            <p className="text-gray-300">すべての取引がブロックチェーン上に記録され、第三者による監査が容易に実行可能</p>
          </div>
        </div>
      </div>
  ),
  '資産のトークン化': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">資産のトークン化</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-brand mb-2">不動産のトークン化</h4>
          <p className="text-gray-300">高額な不動産を分割所有可能にし、小口投資による不動産投資の機会を創出</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">知的財産権のトークン化</h4>
          <p className="text-gray-300">特許や商標などの知的財産権をトークン化し、新しい収益モデルを構築</p>
    </div>
    <div>
          <h4 className="font-semibold text-brand mb-2">流動性の向上</h4>
          <p className="text-gray-300">従来流動性の低かった資産をトークン化することで、24時間365日の取引が可能に</p>
        </div>
      </div>
    </div>
  ),
  'サプライチェーン管理': (
    <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">サプライチェーン管理</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-brand mb-2">製品の追跡</h4>
                <p className="text-gray-300">原材料から最終製品まで、すべての工程をブロックチェーン上で追跡可能</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand mb-2">品質保証</h4>
                <p className="text-gray-300">各段階での品質データを記録し、製品の品質を保証</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand mb-2">透明性の確保</h4>
                <p className="text-gray-300">サプライチェーン全体の透明性を確保し、消費者への信頼性向上</p>
        </div>
      </div>
    </div>
  ),
  "技術要素": (
    <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-brand mb-2">分散型台帳技術</h4>
                  <p className="text-gray-300">複数のノードでデータを共有・同期する分散型の台帳システム</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand mb-2">スマートコントラクト</h4>
                  <p className="text-gray-300">条件が満たされた時に自動実行されるプログラム</p>
        </div>
                <div>
                  <h4 className="font-semibold text-brand mb-2">暗号技術</h4>
                  <p className="text-gray-300">データの暗号化、デジタル署名、ハッシュ関数によるセキュリティ確保</p>
        </div>
                <div>
                  <h4 className="font-semibold text-brand mb-2">コンセンサスアルゴリズム</h4>
                  <p className="text-gray-300">ネットワーク内での合意形成メカニズム（PoW、PoS、DPoSなど）</p>
        </div>
                <div>
                  <h4 className="font-semibold text-brand mb-2">P2Pネットワーク</h4>
                  <p className="text-gray-300">中央サーバーを介さない直接的なノード間通信</p>
        </div>
      </div>
    </div>
  ),
  "ビジネス要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">ビジネス要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-brand mb-2">明確なユースケース特定</h4>
          <p className="text-gray-300">ブロックチェーン技術が解決する具体的な課題の特定と効果の測定</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">ガバナンス設計</h4>
          <p className="text-gray-300">分散型システムにおける意思決定プロセスとルールの設計</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">規制対応</h4>
          <p className="text-gray-300">各国の規制要件への対応とコンプライアンス体制の構築</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">ROI分析</h4>
          <p className="text-gray-300">投資対効果の算出と継続的な効果測定</p>
        </div>
    <div>
          <h4 className="font-semibold text-brand mb-2">運用・保守体制</h4>
          <p className="text-gray-300">システムの継続的な運用とメンテナンス体制の構築</p>
        </div>
      </div>
    </div>
  ),
  "人材要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">人材要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-brand mb-2">ブロックチェーン開発者</h4>
          <p className="text-gray-300">スマートコントラクトやDAppの開発を行う技術者</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">セキュリティ専門家</h4>
          <p className="text-gray-300">ブロックチェーンシステムのセキュリティ監査と対策の専門家</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">システムアーキテクト</h4>
          <p className="text-gray-300">ブロックチェーンシステム全体の設計とアーキテクチャ構築</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">バックエンドエンジニア</h4>
          <p className="text-gray-300">ブロックチェーンと連携するバックエンドシステムの開発</p>
    </div>
    <div>
          <h4 className="font-semibold text-brand mb-2">ビジネスアナリスト</h4>
          <p className="text-gray-300">ビジネス要件の分析とブロックチェーン活用の提案</p>
        </div>
      </div>
    </div>
  ),
  'ブロックチェーン基盤開発': (
    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-white mb-4">
                        企業向けブロックチェーン基盤構築
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        企業の要件に最適化されたプライベートまたはコンソーシアム型ブロックチェーンネットワークを構築します。
                      </p>
                      <div className="space-y-4">
                        <h5 className="text-xl font-semibold text-white">技術特徴</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• スケーラビリティの最適化</li>
                          <li>• セキュリティの強化</li>
                          <li>• パフォーマンスの向上</li>
                          <li>• カスタマイズ可能な設計</li>
                        </ul>
      </div>
    </div>
  ),
  'スマートコントラクト開発': (
    <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-4">
                  安全なスマートコントラクト開発
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  ビジネスロジックをコード化した自己実行型の契約プログラムを開発します。
                </p>
                <div className="space-y-4">
                  <h5 className="text-xl font-semibold text-white">開発プロセス</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 要件定義と設計</li>
                    <li>• コーディングとテスト</li>
                    <li>• セキュリティ監査</li>
                    <li>• デプロイと運用</li>
                  </ul>
                </div>
    </div>
  ),
  '分散型アプリケーション(DApp)開発': (
    <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Web3時代のDApp開発
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    ブロックチェーン技術を活用した分散型アプリケーションを開発します。
                  </p>
                  <div className="space-y-4">
                    <h5 className="text-xl font-semibold text-white">DAppの特徴</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 中央管理者不要</li>
                      <li>• データの所有権</li>
                      <li>• 透明性と信頼性</li>
                      <li>• ユーザー主導の運営</li>
                    </ul>
    </div>
      </div>
  ),
  'ブロックチェーン戦略立案': (
    <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    包括的なブロックチェーン戦略立案
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    企業のビジネスモデルや業界特性を分析し、ブロックチェーン技術の最適な活用方法を提案します。
                  </p>
                  <div className="space-y-4">
                    <h5 className="text-xl font-semibold text-white">サービス内容</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• ビジネスモデル分析</li>
                      <li>• ユースケース特定</li>
                      <li>• ROI分析</li>
                      <li>• 導入ロードマップ策定</li>
                    </ul>
    </div>
      </div>
  ),
  'トークンエコノミー設計': (
    <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    持続可能なトークンエコノミー設計
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    持続可能なトークン経済システムの設計を行い、インセンティブ設計と価値循環の仕組み構築を支援します。
                  </p>
                  <div className="space-y-4">
                    <h5 className="text-xl font-semibold text-white">設計要素</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• トークン設計</li>
                      <li>• インセンティブ設計</li>
                      <li>• 価値循環システム</li>
                      <li>• 経済モデル構築</li>
                    </ul>
    </div>
      </div>
  ),
  'セキュリティ監査・コンサルティング': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        包括的なセキュリティ監査
      </h4>
      <p className="text-gray-300 leading-relaxed">
        ブロックチェーンシステムやスマートコントラクトの包括的なセキュリティ監査を実施します。
      </p>
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">監査内容</h5>
        <ul className="space-y-2 text-gray-300">
          <li>• コード監査</li>
          <li>• 脆弱性診断</li>
          <li>• リスク評価</li>
          <li>• 対策提案</li>
        </ul>
      </div>
    </div>
  ),
}
