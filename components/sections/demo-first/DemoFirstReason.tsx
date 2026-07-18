export function DemoFirstReason() {
  return (
    <section id="reason" className="bg-[var(--df-bg-blue)] py-[var(--df-sec-pad)]">
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--df-primary)]">
          Reason
        </p>
        <h2 className="my-2 mb-12 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)]">
          提案書で終わらせず、
          <br />
          触れるものから始める理由。
        </h2>

        <div className="space-y-16">
          <div>
            <p className="text-center text-sm font-bold tracking-[0.2em] text-[var(--df-text-muted)]">
              01
            </p>
            <h3 className="mb-6 mt-1.5 text-center text-[21px] font-black leading-[1.6] text-[var(--df-primary-deep)]">
              デモファーストだから、認識のズレがない
            </h3>
            <div className="mx-auto mb-6 max-w-[480px] rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] p-8">
              <svg viewBox="0 0 360 140" fill="none" className="mx-auto w-full max-w-[360px]">
                <rect
                  x="12"
                  y="40"
                  width="88"
                  height="60"
                  rx="8"
                  stroke="var(--df-primary-deep)"
                  strokeWidth="2"
                />
                <text
                  x="56"
                  y="74"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  課題を聞く
                </text>
                <path d="M108 70h36" stroke="var(--df-primary)" strokeWidth="2" />
                <path d="M138 64l8 6-8 6" stroke="var(--df-primary)" strokeWidth="2" />
                <rect
                  x="152"
                  y="30"
                  width="96"
                  height="80"
                  rx="8"
                  fill="var(--df-bg-blue-2)"
                  stroke="var(--df-primary)"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="66"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  デモを作る
                </text>
                <text
                  x="200"
                  y="88"
                  textAnchor="middle"
                  fontSize="10"
                  fill="var(--df-primary)"
                >
                  最短1〜2週間
                </text>
                <path d="M256 70h36" stroke="var(--df-primary)" strokeWidth="2" />
                <path d="M286 64l8 6-8 6" stroke="var(--df-primary)" strokeWidth="2" />
                <rect
                  x="300"
                  y="40"
                  width="50"
                  height="60"
                  rx="8"
                  stroke="var(--df-primary-deep)"
                  strokeWidth="2"
                />
                <text
                  x="325"
                  y="66"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  触って
                </text>
                <text
                  x="325"
                  y="84"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  判断
                </text>
              </svg>
            </div>
            <p className="mx-auto max-w-[600px] text-[15px] text-[var(--df-text)]">
              要件定義書を何往復もする代わりに、まず動くデモを作って一緒に触ります。「思っていたのと違う」が起きるのは開発の後ではなく、契約の前。だから手戻りがありません。
            </p>
          </div>

          <div>
            <p className="text-center text-sm font-bold tracking-[0.2em] text-[var(--df-text-muted)]">
              02
            </p>
            <h3 className="mb-6 mt-1.5 text-center text-[21px] font-black leading-[1.6] text-[var(--df-primary-deep)]">
              ツール導入ではなく、意思決定の仕組みを作る
            </h3>
            <div className="mx-auto mb-6 max-w-[480px] rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] p-8">
              <svg viewBox="0 0 360 150" fill="none" className="mx-auto w-full max-w-[360px]">
                <circle cx="180" cy="75" r="44" fill="var(--df-primary)" />
                <text
                  x="180"
                  y="70"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="#fff"
                >
                  意思決定
                </text>
                <text
                  x="180"
                  y="88"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="#fff"
                >
                  エンジン
                </text>
                <circle
                  cx="70"
                  cy="42"
                  r="30"
                  stroke="var(--df-primary-light)"
                  strokeWidth="2"
                />
                <text
                  x="70"
                  y="47"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  現場の知恵
                </text>
                <circle
                  cx="70"
                  cy="112"
                  r="30"
                  stroke="var(--df-primary-light)"
                  strokeWidth="2"
                />
                <text
                  x="70"
                  y="117"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  業務データ
                </text>
                <circle
                  cx="292"
                  cy="75"
                  r="32"
                  stroke="var(--df-primary-light)"
                  strokeWidth="2"
                />
                <text
                  x="292"
                  y="72"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  根拠つきの
                </text>
                <text
                  x="292"
                  y="87"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  判断
                </text>
                <path
                  d="M98 52c14 6 26 12 40 16M98 102c14-6 26-12 40-16M226 75h32"
                  stroke="var(--df-primary)"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="mx-auto max-w-[600px] text-[15px] text-[var(--df-text)]">
              チャットボットや管理画面はあくまで入口です。私たちが作るのは、現場の知恵とデータを取り込み、「なぜその判断なのか」まで返す業務の背骨。だから使われ続けます。
            </p>
          </div>

          <div>
            <p className="text-center text-sm font-bold tracking-[0.2em] text-[var(--df-text-muted)]">
              03
            </p>
            <h3 className="mb-6 mt-1.5 text-center text-[21px] font-black leading-[1.6] text-[var(--df-primary-deep)]">
              小さく作って、現場と一緒に育てる
            </h3>
            <div className="mx-auto mb-6 max-w-[480px] rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] p-8">
              <svg viewBox="0 0 360 150" fill="none" className="mx-auto w-full max-w-[360px]">
                <circle
                  cx="180"
                  cy="75"
                  r="58"
                  stroke="var(--df-primary-light)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />
                <rect x="150" y="16" width="60" height="26" rx="13" fill="var(--df-bg-blue-2)" />
                <text
                  x="180"
                  y="33"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  デモ公開
                </text>
                <rect x="252" y="62" width="72" height="26" rx="13" fill="var(--df-bg-blue-2)" />
                <text
                  x="288"
                  y="79"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  現場の反応
                </text>
                <rect x="150" y="108" width="60" height="26" rx="13" fill="var(--df-bg-blue-2)" />
                <text
                  x="180"
                  y="125"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="var(--df-primary-deep)"
                >
                  改善
                </text>
                <rect x="36" y="62" width="72" height="26" rx="13" fill="var(--df-primary)" />
                <text
                  x="72"
                  y="79"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#fff"
                >
                  運用に定着
                </text>
              </svg>
            </div>
            <p className="mx-auto max-w-[600px] text-[15px] text-[var(--df-text)]">
              一度に大きく作るほど、外したときの損失も大きくなります。小さく出して反応を見て、良かったものだけを本実装へ。低コストで、確実に定着する順番で進めます。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
