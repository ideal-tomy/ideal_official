import Link from 'next/link'
import { homeHubPillars } from '@/data/home/hub'

export function HomeHubPillars() {
  return (
    <section className="svc-w svc-sec home-hub-pillars" aria-label="進め方の要点">
      <div className="svc-wrap">
        <ul className="home-hub-pillars__list">
          {homeHubPillars.map((pillar) => (
            <li key={pillar.title}>
              <Link
                href={pillar.href}
                className="home-hub-pillar svc-rv"
                aria-label={`${pillar.title}。${pillar.linkLabel}`}
              >
                <h3 className="home-hub-pillar__title">{pillar.title}</h3>
                <p className="home-hub-pillar__body">{pillar.body}</p>
                <span className="home-hub-pillar__link">{pillar.linkLabel} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
