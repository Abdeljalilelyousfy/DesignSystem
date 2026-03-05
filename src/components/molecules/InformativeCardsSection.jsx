import { useState } from 'react'
import { ArrowLeft, ArrowRight, SealCheck, CaretDown } from '@phosphor-icons/react'
import * as Ph from '@phosphor-icons/react'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import '../../styles/molecules.css'

/**
 * InformativeCardsSection — two layout variants of the "informative cards" molecule
 *
 * Figma: node 1440-56501
 *
 * Named exports
 * ─────────────
 * InformativeCardsHeroGrid   Type 1 — 1 large card + 2×2 small card grid (image overlay)
 * InformativeCardsIconGrid   Type 6 — 5-column icon service cards (uses Card atom)
 */

// ─── Shared internal: Section header + optional tab bar ──────────────────────
function SectionHeader({ title, description, tabs = [], activeTab = 0, onTabChange, onViewAll }) {
  return (
    <div>
      <div className="inf-cards-header">
        <div className="inf-cards-header-left">
          <h2 className="inf-cards-header-title">{title}</h2>
          {description && <p className="inf-cards-header-desc">{description}</p>}
        </div>
        <div className="inf-cards-header-right">
          {onViewAll && (
            <button className="inf-cards-view-all" onClick={onViewAll}>View all</button>
          )}
          <button className="inf-cards-nav-btn" aria-label="Previous">
            <ArrowLeft size={16} color="var(--color-content-secondary)" />
          </button>
          <button className="inf-cards-nav-btn" aria-label="Next">
            <ArrowRight size={16} color="var(--color-content-secondary)" />
          </button>
        </div>
      </div>

      {tabs.length > 0 && (
        <div className="inf-cards-tabs" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`inf-cards-tab${i === activeTab ? ' inf-tab-active' : ''}`}
              onClick={() => onTabChange?.(i)}
              role="tab"
              aria-selected={i === activeTab}
            >
              <SealCheck
                size={18}
                weight={i === activeTab ? 'fill' : 'regular'}
                color={i === activeTab ? 'var(--color-content-brand)' : 'var(--color-content-tertiary)'}
              />
              {tab}
              <CaretDown size={14} color="var(--color-content-tertiary)" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Shared internal: Image overlay card ─────────────────────────────────────
function ImageCard({ title, description, ctaLabel = 'Browse', onCtaClick, gradient, className = '' }) {
  return (
    <div className={`inf-card-image ${className}`} style={{ background: gradient }}>
      <div className="inf-card-image-content">
        <h3 className="inf-card-image-title">{title}</h3>
        <div className="inf-card-image-divider" />
        <p className="inf-card-image-desc">{description}</p>
        <Button variant="primary" size="md" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  )
}

// ─── Type 1: Hero Grid ───────────────────────────────────────────────────────

const DEFAULT_HERO_CARD = {
  title: 'Featured Inventory',
  description: 'Discover our handpicked selection of top-rated vehicles — from luxury sedans to rugged off-road SUVs.',
  ctaLabel: 'View All',
  gradient: 'linear-gradient(155deg, #0f2a42 0%, #1e4b78 50%, #2b6499 100%)',
}

const DEFAULT_SMALL_CARDS = [
  {
    title: 'New Cars',
    description: 'Latest models from every major brand, fresh from the factory.',
    ctaLabel: 'Browse New',
    gradient: 'linear-gradient(155deg, #0c2236 0%, #1a3f5f 100%)',
  },
  {
    title: 'Used Cars',
    description: 'Certified pre-owned vehicles, inspected and priced right.',
    ctaLabel: 'Browse Used',
    gradient: 'linear-gradient(155deg, #112b1b 0%, #1e4d2e 100%)',
  },
  {
    title: 'Electric Vehicles',
    description: 'Zero-emission driving with the latest EV technology.',
    ctaLabel: 'Go Electric',
    gradient: 'linear-gradient(155deg, #14123a 0%, #26226a 100%)',
  },
  {
    title: 'Trucks & SUVs',
    description: 'Power, capability, and comfort for every terrain.',
    ctaLabel: 'Browse Trucks',
    gradient: 'linear-gradient(155deg, #2e1206 0%, #5c2410 100%)',
  },
]

/**
 * InformativeCardsHeroGrid — Type 1
 *
 * Props
 * ─────
 * title         string     section heading
 * description   string     section subheading
 * tabs          string[]   tab labels (default: 4 dealership tabs)
 * heroCard      object     { title, description, ctaLabel, gradient }
 * smallCards    object[]   array of 4 card objects (same shape as heroCard)
 * onViewAll     () => void
 * style         CSSProperties
 */
export function InformativeCardsHeroGrid({
  title       = 'Explore Our Inventory',
  description = 'Find the perfect vehicle from our extensive collection.',
  tabs        = ['In Stock', 'New Cars', 'Used Cars', 'Electric'],
  heroCard    = DEFAULT_HERO_CARD,
  smallCards  = DEFAULT_SMALL_CARDS,
  onViewAll,
  style,
}) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="inf-cards-section" style={style}>
      <SectionHeader
        title={title}
        description={description}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onViewAll={onViewAll}
      />
      <div className="inf-cards-hero-grid">
        <ImageCard {...heroCard} className="inf-cards-hero-large" />
        <div className="inf-cards-small-grid">
          {smallCards.slice(0, 4).map((card, i) => (
            <ImageCard key={i} {...card} className="inf-card-small" />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Type 6: Icon Service Cards ──────────────────────────────────────────────

const DEFAULT_ICON_ITEMS = [
  {
    icon: 'ListMagnifyingGlass',
    title: 'Browse Inventory',
    description: 'Search our full catalog of new and pre-owned vehicles by make, model, price, and more.',
    ctaLabel: 'Browse Now',
  },
  {
    icon: 'HandCoins',
    title: 'Flexible Financing',
    description: 'Get pre-approved in minutes. Competitive rates tailored to your budget and credit profile.',
    ctaLabel: 'Get Approved',
  },
  {
    icon: 'Calculator',
    title: 'Value Your Trade-In',
    description: 'Get an instant, fair-market offer on your current vehicle — no haggling required.',
    ctaLabel: 'Get an Offer',
  },
  {
    icon: 'Car',
    title: 'Certified Pre-Owned',
    description: 'Every CPO vehicle passes a rigorous 150-point inspection, backed by our warranty.',
    ctaLabel: 'View CPO',
  },
  {
    icon: 'Headset',
    title: '24 / 7 Support',
    description: 'Our team is available around the clock for questions, service visits, and roadside help.',
    ctaLabel: 'Contact Us',
  },
]

/**
 * InformativeCardsIconGrid — Type 6
 *
 * Props
 * ─────
 * title         string     section heading
 * description   string     section subheading
 * items         Item[]     { icon: string, title, description, ctaLabel }
 * onViewAll     () => void
 * style         CSSProperties
 */
export function InformativeCardsIconGrid({
  title       = 'Explore Our Services',
  description = 'Everything you need — from browsing to buying to after-sale support.',
  items       = DEFAULT_ICON_ITEMS,
  onViewAll,
  style,
}) {
  return (
    <section className="inf-cards-section" style={style}>
      <SectionHeader
        title={title}
        description={description}
        onViewAll={onViewAll}
      />
      <div className="inf-cards-icon-grid">
        {items.map((item, i) => {
          const Icon = Ph[item.icon]
          return (
            <Card key={i} variant="outlined" size="lg" style={{ flex: '1 1 0' }}>
              <div className="inf-icon-card-inner">
                <div className="inf-icon-bubble">
                  {Icon && <Icon size={32} color="var(--color-content-brand)" weight="regular" />}
                </div>
                <div className="inf-icon-card-content">
                  <h3 className="inf-icon-card-title">{item.title}</h3>
                  <p className="inf-icon-card-desc">{item.description}</p>
                </div>
                <Button variant="primary" size="md" style={{ width: '100%' }} onClick={item.onCtaClick}>
                  {item.ctaLabel || 'Learn More'}
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
