import { whatWeBuild, webProcessSteps } from '@/data/services/web-hub'

export function WebWhatWeBuild() {
  return (
    <section className="bg-black py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What we build
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            社内にIT部門がなくても、 事業に必要な仕組みはつくれる。の概要です。詳細な技術は下の Under the Hood で触れます。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-5">
          {whatWeBuild.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-800 bg-gray-900/40 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WebProcess() {
  return (
    <section className="bg-black py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            進め方
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            質感を先に合わせ、設計・実装、公開後の改善まで伴走します。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {webProcessSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-gray-800 bg-gray-900/40 p-6"
            >
              <span className="text-2xl font-bold text-brand/70 mb-3 block">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
