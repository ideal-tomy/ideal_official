import Link from 'next/link'

export function LabTeaser() {
  return (
    <section className="bg-black py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-3">
          LAB
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          思想・研究・深い技術解説は LAB へ
        </h2>
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          DAO / Philosophy、Research、ブロックチェーンやメタバースの深掘りは、入口ではなく奥の領域としてまとめています。
        </p>
        <Link
          href="/lab"
          className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-brand transition-colors"
        >
          LAB を見る →
        </Link>
      </div>
    </section>
  )
}
