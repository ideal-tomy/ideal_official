import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { CapabilityCard } from './CapabilityCard'

export function CapabilityCardGrid() {
  return (
    <section id="capabilities" className="bg-black py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            7つの業務変化パターン
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            技術名ではなく、実際の仕事がどう変わるかを7つのパターンに整理しました。
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  )
}
