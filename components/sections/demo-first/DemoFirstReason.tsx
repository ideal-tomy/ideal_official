import Link from 'next/link'
import { ReasonEngineDiagram } from './ReasonEngineDiagram'
import { ReasonFlowDiagram } from './ReasonFlowDiagram'
import { ReasonLoopDiagram } from './ReasonLoopDiagram'

export function DemoFirstReason() {
  return (
    <section id="reason" className="bg-[var(--df-bg-blue)] py-[var(--df-sec-pad)]">
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <header className="mb-12 text-center">
          <p className="hidden text-sm font-bold uppercase tracking-[0.12em] text-[var(--df-primary)] md:block">
            Reason
          </p>
          <h2 className="my-2 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)]">
            提案書で終わらせず、
            <br className="hidden md:inline" />
            触れるものから始める理由。
          </h2>
        </header>

        <div className="space-y-10 md:space-y-16">
          <div>
            <h3 className="mb-6 text-center text-[21px] font-black leading-[1.6] text-[var(--df-primary-deep)]">
              認識のズレがないようにデモ作成
            </h3>
            <div className="mx-auto mb-6 max-w-[480px] rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] px-5 py-8 sm:px-8">
              <ReasonFlowDiagram />
            </div>
            <p className="mx-auto max-w-[600px] text-[15px] text-[var(--df-text)]">
              要件定義書を何往復もする代わりに、まず動くデモを作って一緒に触ります。「思っていたのと違う」が起きるのは開発の後ではなく、契約の前。だから手戻りがありません。
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-center text-[21px] font-black leading-[1.6] text-[var(--df-primary-deep)]">
              ツール導入ではなく、意思決定の仕組みを作る
            </h3>
            <div className="mx-auto mb-6 max-w-[480px] rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] px-4 py-8 sm:px-8">
              <ReasonEngineDiagram />
            </div>
            <p className="mx-auto max-w-[600px] text-[15px] text-[var(--df-text)]">
              チャットボットや管理画面はあくまで入口です。私たちが作るのは、現場の知恵とデータを取り込み、「なぜその判断なのか」まで返す業務の背骨。だから使われ続けます。
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-center text-[21px] font-black leading-[1.6] text-[var(--df-primary-deep)]">
              小さく作って、現場と一緒に育てる
            </h3>
            <div className="mx-auto mb-6 max-w-[480px] rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] px-4 py-6 sm:px-8 sm:py-8">
              <ReasonLoopDiagram />
            </div>
            <p className="mx-auto max-w-[600px] text-[15px] text-[var(--df-text)]">
              一度に大きく作るほど、外したときの損失も大きくなります。小さく出して反応を見て、良かったものだけを本実装へ。低コストで、確実に定着する順番で進めます。
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#demos"
            className="inline-flex items-center gap-2 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            デモを触ってみる
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[var(--df-radius-btn)] border border-[var(--df-primary)] px-6 py-3 text-sm font-bold text-[var(--df-primary)] transition-colors hover:bg-[var(--df-primary)]/10"
          >
            相談してみる
          </Link>
        </div>
      </div>
    </section>
  )
}
