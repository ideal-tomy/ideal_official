import type { ReactNode } from 'react'

export const modalContents: Record<string, ReactNode> = {
  '業務効率化・自動化': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">業務効率化・自動化</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-brand mb-2">文書処理の自動化</h4>
          <p className="text-gray-300">契約書、請求書、レポートなどの文書を自動で分類・処理。OCR技術と自然言語処理を組み合わせ、従来の手作業を大幅に削減します。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">チャットボット・カスタマーサポート</h4>
          <p className="text-gray-300">24時間365日の自動対応システム。よくある質問への回答、問い合わせの分類、エスカレーション判断を自動化し、顧客満足度を向上させます。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">データ入力・集計の自動化</h4>
          <p className="text-gray-300">Excel、データベースへの自動入力、集計レポートの自動生成。RPA（ロボティック・プロセス・オートメーション）とAIを組み合わせた高度な自動化を実現します。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">スケジュール・リソース管理</h4>
          <p className="text-gray-300">会議室予約、人員配置、プロジェクト管理を自動化。過去のデータを学習し、最適なスケジュールを提案します。</p>
        </div>
      </div>
    </div>
  ),
  'マーケティング・顧客分析': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">マーケティング・顧客分析</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-brand mb-2">顧客セグメンテーション</h4>
          <p className="text-gray-300">購買履歴、行動データ、デモグラフィック情報を分析し、顧客を自動的にグループ化。ターゲティング精度を向上させ、マーケティング効果を最大化します。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">SNS・Web分析</h4>
          <p className="text-gray-300">Twitter、Instagram、FacebookなどのSNSデータをリアルタイムで分析。トレンドの早期発見、ブランド監視、競合分析を自動化します。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">パーソナライズドマーケティング</h4>
          <p className="text-gray-300">個々の顧客の嗜好や行動パターンを学習し、最適な商品推薦、メール配信、広告表示を自動化。コンバージョン率を大幅に向上させます。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">価格最適化</h4>
          <p className="text-gray-300">需要予測、競合価格、季節性を考慮した動的価格設定。収益最大化と顧客満足度の両立を実現します。</p>
        </div>
      </div>
    </div>
  ),
  '品質管理・需要予測': (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">品質管理・需要予測</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-brand mb-2">画像認識による品質検査</h4>
          <p className="text-gray-300">製造ラインでの自動品質検査。欠陥品の検出、規格適合性の判定、統計的品質管理をリアルタイムで実行し、品質向上とコスト削減を実現します。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">需要予測・在庫最適化</h4>
          <p className="text-gray-300">過去の販売データ、季節性、外部要因を分析し、将来の需要を高精度で予測。過剰在庫と欠品のリスクを最小化し、キャッシュフローを改善します。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">予知保全</h4>
          <p className="text-gray-300">設備のセンサーデータを分析し、故障の兆候を早期発見。計画的なメンテナンスにより、突発的な設備停止を防ぎ、稼働率を向上させます。</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">サプライチェーン最適化</h4>
          <p className="text-gray-300">調達、生産、配送の各段階を統合的に分析。リードタイム短縮、コスト削減、リスク管理を自動化し、サプライチェーンの効率性を最大化します。</p>
        </div>
      </div>
    </div>
  ),
  "技術要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-brand mb-2">データ基盤</h4>
          <p className="text-gray-300">高品質なデータの収集、蓄積、管理システムの構築</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">アルゴリズム</h4>
          <p className="text-gray-300">機械学習・深層学習モデルの開発と最適化</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">インフラ</h4>
          <p className="text-gray-300">クラウド・オンプレミス環境の構築と運用</p>
        </div>
      </div>
    </div>
  ),
  "ビジネス要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">ビジネス要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-brand mb-2">戦略策定</h4>
          <p className="text-gray-300">AI導入の目的と目標の明確化、ロードマップの策定</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">ROI分析</h4>
          <p className="text-gray-300">投資対効果の算出と継続的な効果測定</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">変革管理</h4>
          <p className="text-gray-300">組織の変革と従業員のスキルアップ支援</p>
        </div>
      </div>
    </div>
  ),
  "人材要素": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">人材要素</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-brand mb-2">データサイエンティスト</h4>
          <p className="text-gray-300">データ分析とモデル開発の専門家</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">AIエンジニア</h4>
          <p className="text-gray-300">AIシステムの実装と運用の技術者</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand mb-2">AIコンサルタント</h4>
          <p className="text-gray-300">AI戦略の策定と導入支援の専門家</p>
        </div>
      </div>
    </div>
  ),
  '機械学習モデル開発': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        ビジネス課題を解決するカスタムAIモデル
      </h4>
      <p className="text-gray-300 leading-relaxed">
        私たちは、汎用的なAIソリューションでは解決できない、貴社特有の複雑な課題に焦点を当てます。
      </p>
    
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">予測・分類・最適化</h5>
        <p className="text-gray-300 leading-relaxed">
          蓄積されたビジネスデータを基に、高精度な予測モデル（需要予測、株価予測など）、分類モデル（顧客セグメンテーション、スパム検出など）、最適化モデル（最適な広告配信、最短配送ルート探索など）をスクラッチから設計・開発します。
        </p>
    
        <h5 className="text-xl font-semibold text-white">継続的な精度向上</h5>
        <p className="text-gray-300 leading-relaxed">
          モデルは開発して終わりではありません。市場の変化や新しいデータに適応し続けるため、継続的な学習とチューニングを行うMLOps（機械学習基盤）の構築までを一貫してサポートし、AIの価値を最大化し続けます。
        </p>
      </div>
    </div>
  ),
  '自然言語処理': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        「言葉」のデータをビジネス資産に変えるNLP
      </h4>
      <p className="text-gray-300 leading-relaxed">
        顧客の声、社内ドキュメント、SNS上の口コミなど、企業内外に溢れる膨大なテキストデータは「未開拓の油田」です。私たちは、最先端のNLP技術でその価値を引き出します。
      </p>
    
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">高度なテキスト分析</h5>
        <p className="text-gray-300 leading-relaxed">
          BERTやGPTなどの大規模言語モデル（LLM）を活用し、単なるキーワード抽出に留まらない、文脈や感情（ポジネガ）までを深く理解したテキスト分析を実現。カスタマーサポートの自動化、チャットボットの高度化、社内ナレッジ検索エンジンの構築を支援します。
        </p>
    
        <h5 className="text-xl font-semibold text-white">AIによる生成・翻訳</h5>
        <p className="text-gray-300 leading-relaxed">
          マーケティングコピーの自動生成、専門的なドキュメントの多言語翻訳、複雑なレポートの自動要約など、言語に関わるあらゆる知的生産活動をAIがサポートし、ビジネスのグローバル展開とスピードアップに貢献します。
        </p>
      </div>
    </div>
  ),
  '画像認識システム': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        人間の「目」を超える、高精度な画像認識AI
      </h4>
      <p className="text-gray-300 leading-relaxed">
        深層学習（ディープラーニング）を用いた画像認識技術は、人間の認識能力を超えるレベルに達しています。私たちは、この「AIの目」を貴社のビジネスに実装します。
      </p>
    
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">検品・監視の自動化</h5>
        <p className="text-gray-300 leading-relaxed">
          製造業の検品ラインにおける微細な傷や異物の検出（外観検査）、監視カメラ映像からの異常行動検知（セキュリティ）、医療画像（CT、MRI）の解析支援など、目視による作業を自動化・高度化し、ヒューマンエラーの撲滅と品質の均一化を実現します。
        </p>
    
        <h5 className="text-xl font-semibold text-white">特定物体・領域の検出</h5>
        <p className="text-gray-300 leading-relaxed">
          CNNsやYOLOといった最先端のアルゴリズムを用い、画像内の特定の物体（例: 棚の商品、通行する車両）や領域をリアルタイムで検出・分類。在庫管理の自動化、スマートシティの交通量解析など、幅広い分野に応用します。
        </p>
      </div>
    </div>
  ),
  'AI戦略コンサルティング': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        AI導入を「成功」に導く羅針盤
      </h4>
      <p className="text-gray-300 leading-relaxed">
        「AIで何かしたいが、何から手をつければいいか分からない」——。私たちは、その漠然とした期待を、明確なビジネス成果に結びつけるための戦略地図（ロードマップ）を策定します。
      </p>
    
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">課題の特定とROI試算</h5>
        <p className="text-gray-300 leading-relaxed">
          貴社のビジネス目標と現状の課題を深くヒアリングし、AIを導入すべき最適な領域を特定します。単なる技術導入に留まらず、投資対効果（ROI）を厳密に試算し、経営判断の材料となる明確なKPI（重要業績評価指標）を設定します。
        </p>
    
        <h5 className="text-xl font-semibold text-white">導入ロードマップの策定</h5>
        <p className="text-gray-300 leading-relaxed">
          短期的な成果（Quick Win）と中長期的なビジョン（Grand Design）を見据え、フェーズごと（PoC、本開発、全社展開）の具体的な実行計画とタイムラインを作成。技術選定から組織体制の構築まで、AI導入プロジェクト全体の設計図を提示します。
        </p>
      </div>
    </div>
  ),
  'データ分析コンサルティング': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        データを「価値」に変換するプロセス支援
      </h4>
      <p className="text-gray-300 leading-relaxed">
        AIの性能は「データの質」で決まります。私たちは、社内に散在するデータを収集・整備し、AIが学習可能な「クリーンな燃料」へと加工するプロセス全体を支援します。
      </p>
    
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">データ収集・前処理（データエンジニアリング）</h5>
        <p className="text-gray-300 leading-relaxed">
          サイロ化した各部門のデータベース、Excelファイル、外部のAPIなど、あらゆるデータソースから情報を収集・統合します。欠損値の補完、ノイズの除去、フォーマットの統一といった地道な前処理（クレンジング）を行い、分析に耐えうる高品質なデータ基盤を構築します。
        </p>
    
        <h5 className="text-xl font-semibold text-white">最適な分析手法の選定</h5>
        <p className="text-gray-300 leading-relaxed">
          課題の目的に応じて、統計的手法、機械学習、深層学習など、数ある分析アプローチの中から最も効果的な手法を選定。データの可視化（ダッシュボード構築）を通じて、ビジネスの意思決定に直結する「インサイト（洞察）」を導き出します。
        </p>
      </div>
    </div>
  ),
  'AI実装支援': (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-4">
        計画を「現実」にする、伴走型の実装サポート
      </h4>
      <p className="text-gray-300 leading-relaxed">
        優れた戦略やモデルも、現場で使われなければ価値を生みません。私たちは、AI導入プロジェクトの全工程にわたって貴社のチームと伴走し、「絵に描いた餅」で終わらせないための実装・運用を強力にサポートします。
      </p>
    
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-white">プロジェクト管理（PM）</h5>
        <p className="text-gray-300 leading-relaxed">
          アジャイルな開発手法を用い、仕様変更や予期せぬ課題に柔軟に対応しながらプロジェクトを推進。スケジュール、コスト、品質のすべてを管理し、プロジェクトを成功へと導きます。
        </p>
    
        <h5 className="text-xl font-semibold text-white">チーム構築と技術支援（内製化支援）</h5>
        <p className="text-gray-300 leading-relaxed">
          貴社内のエンジニアやデータサイエンティストへの技術トレーニング、コードレビュー、開発体制の構築支援も行います。将来的に貴社が自走してAIを活用・改善できる「内製化」をゴールに見据えた、持続可能なサポートを提供します。
        </p>
      </div>
    </div>
  ),
}
