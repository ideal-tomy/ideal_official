import {
  environmentShifts,
  plainLanguageCards,
} from '@/data/research/environment-shifts'

const accentBorder: Record<string, string> = {
  signal: 'border-brand/50',
  value: 'border-amber-500/50',
}

const accentText: Record<string, string> = {
  signal: 'text-brand',
  value: 'text-amber-400',
}

export function EnvironmentShiftDemo() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-xl font-semibold text-[var(--site-fg)] mb-6">
          いまの組織 → この仕組みが回る環境
        </h2>
        <div className="space-y-4">
          {environmentShifts.map((shift) => (
            <div
              key={shift.theme}
              className="grid md:grid-cols-[140px_1fr_auto_1fr] gap-4 p-5 rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 items-start"
            >
              <p className="font-semibold text-[var(--site-fg)] text-sm md:text-base">{shift.theme}</p>
              <p className="text-[var(--site-fg-muted)] text-sm leading-relaxed">{shift.from}</p>
              <span className="hidden md:block text-[var(--site-fg-muted)] text-center pt-1">→</span>
              <p className="text-[var(--site-fg)] text-sm leading-relaxed border-l-2 border-brand/50 pl-4 md:border-l-0 md:pl-0 md:border-t-2 md:pt-3">
                {shift.to}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[var(--site-fg-muted)] leading-relaxed">
          目指すのは、<strong className="text-[var(--site-fg)]">誰かを裁くための監視ではありません。</strong>
          人間の認知では取りこぼしていた貢献に光を当て、統一された基準で公平に返すこと。その結果として、評価という重い仕事から人が解放され、不平等や不公平が起きにくい環境が、自動で維持され続けます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--site-fg)] mb-2">自分ごとに翻訳すると</h2>
        <p className="text-[var(--site-fg-muted)] mb-6 text-sm">
          行動 → 記録 → 評価 → 執行 → フィードバック。何を見られ、何が残り、それが自分に何を返すのか。
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plainLanguageCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-lg border-t-2 ${accentBorder[card.accent]} bg-[var(--site-bg-elevated)]/50 border border-[var(--site-border)] p-5 flex flex-col`}
            >
              <div className="flex items-baseline gap-2 mb-3">
                <h3 className="text-lg font-semibold text-[var(--site-fg)]">{card.title}</h3>
                <span className="text-[10px] uppercase tracking-wider text-[var(--site-fg-muted)] border border-[var(--site-border)] px-1.5 py-0.5 rounded">
                  {card.tech}
                </span>
              </div>
              <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed flex-1">{card.example}</p>
              <p className={`mt-4 pt-3 border-t border-[var(--site-border)] text-sm ${accentText[card.accent]}`}>
                <span className="block text-[10px] uppercase tracking-wider mb-1 text-[var(--site-fg-muted)]">
                  あなたに返るもの
                </span>
                {card.benefit}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
