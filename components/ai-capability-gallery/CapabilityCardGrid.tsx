import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { CapabilityCard } from './CapabilityCard'

export function CapabilityCardGrid() {
  return (
    <section id="capabilities" className="bg-black py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            7つの業務変化パターン
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            技術名ではなく、
            <span className="text-brand">仕事がどう変わるか</span>
            で整理しました。気になる変化を選ぶと、その下のショーケースへ移動します。
          </p>
        </header>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  )
}
