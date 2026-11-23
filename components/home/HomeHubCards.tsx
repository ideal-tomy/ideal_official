import Link from 'next/link'
import { homeHubCards } from '@/data/home/hub'
import { Eyebrow, LpHeading } from '@/components/services/hub/lp/ServicesLpParts'

export function HomeHubCards() {
  return (
    <section className="svc-w svc-sec home-hub-cards" aria-label="各ページへの入口">
      <div className="svc-wrap">
        <Eyebrow>導線</Eyebrow>
        <LpHeading as="h2" lines={['どこからでも、', '進められます。']} />
        <ul className="home-hub-cards__list">
          {homeHubCards.map((card) => (
            <li key={card.label}>
              <Link
                href={card.href}
                className="home-hub-card svc-rv"
                aria-label={`${card.label}。${card.lead}`}
              >
                <span className="home-hub-card__label">{card.label}</span>
                <span className="home-hub-card__lead">{card.lead}</span>
                <span className="home-hub-card__arrow" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
