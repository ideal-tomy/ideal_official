import { gapItems } from '@/data/research/gap-items'

export function GapsDemo() {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        このデモは「技術の進化で解ける」前提の理想像です。現時点で未解決の壁を隠さず並べておく — 解けるふりをしないことが、設計の誠実さだからです。
      </p>

      <div className="grid gap-6">
        {gapItems.map((gap) => (
          <article
            key={gap.id}
            className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 sm:p-8"
          >
            <p className="text-xs font-mono text-gray-400 mb-2">{gap.id}</p>
            <h3 className="text-lg font-semibold text-white mb-4">{gap.title}</h3>
            <div className="space-y-4 text-sm leading-relaxed">
              <p className="text-gray-300">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                  現状の壁
                </span>
                {gap.wall}
              </p>
              <p className="text-gray-200 border-l-2 border-cyan-500/40 pl-4">
                <span className="block text-[10px] uppercase tracking-wider text-cyan-400/80 mb-1">
                  進化が拓く道
                </span>
                {gap.path}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
