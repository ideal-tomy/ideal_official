import { contentLeadBare } from '@/lib/content-typography'
import { ArticleTocDirectory } from './ArticleTocDirectory'

/** TOP — 業界／よくある悩みの短い目次。各行は記事へ直リンク */
export function DemoFirstArticleToc() {
  return (
    <section
      id="articles"
      className="bg-[var(--df-bg)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <h2 className="mb-3 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] md:mb-4">
          仕事の名前から読む。
        </h2>
        <p className={`mb-6 max-w-[640px] md:mb-7 ${contentLeadBare}`}>
          業界ごとの実務の話です。短い名前をクリックすると、その記事へ飛びます。
        </p>

        <ArticleTocDirectory />
      </div>
    </section>
  )
}
