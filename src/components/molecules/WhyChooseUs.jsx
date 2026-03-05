import * as Ph from '@phosphor-icons/react'
import Card from '../atoms/Card'
import SectionTitle from './SectionTitle'
import '../../styles/molecules.css'

/**
 * WhyChooseUs — Dealership "why choose us" feature grid
 *
 * Composes the design system's SectionTitle molecule and Card atom.
 * Renders a responsive grid of feature cards, each with a brand-colored
 * icon, heading, and body copy.
 *
 * Props
 * ─────
 * title        string        section heading
 * description  string        optional sub-heading below title
 * items        Item[]        feature cards — see DEFAULT_ITEMS for shape
 * columns      2 | 3 | 4     desktop column count (default: 3)
 * cardVariant  string        Card variant: 'elevated' | 'outlined' | 'filled' (default: 'elevated')
 * style        CSSProperties extra inline styles on root element
 *
 * Item shape: { icon: string (Phosphor name), title: string, description: string }
 */

const DEFAULT_ITEMS = [
  {
    icon: 'ShieldCheck',
    title: 'Certified Vehicles',
    description: 'Every vehicle undergoes a rigorous 150-point inspection before arriving on our lot — so you drive away with confidence.',
  },
  {
    icon: 'CurrencyDollar',
    title: 'Flexible Financing',
    description: 'Competitive rates with options tailored to your budget and credit history. Get pre-approved in minutes, online or in store.',
  },
  {
    icon: 'Star',
    title: 'Award-Winning Service',
    description: 'Consistently rated 5 stars by our customers for transparency, speed, and genuine care throughout the entire process.',
  },
  {
    icon: 'Car',
    title: 'Huge Selection',
    description: 'Browse thousands of new and pre-owned vehicles from all major brands — sedans, SUVs, trucks, and EVs — under one roof.',
  },
  {
    icon: 'Clock',
    title: 'Quick & Easy Process',
    description: 'From browsing to test drive to signing the paperwork — we make the whole journey fast, clear, and hassle-free.',
  },
  {
    icon: 'Headset',
    title: 'Lifetime Support',
    description: 'Our relationship doesn\'t end at the sale. We\'re here for every service visit, part order, and question along the way.',
  },
]

export default function WhyChooseUs({
  title       = 'Why Choose Us',
  description = 'We go above and beyond to make your car-buying experience exceptional — from the first click to the final handshake.',
  items       = DEFAULT_ITEMS,
  columns     = 3,
  cardVariant = 'elevated',
  style,
}) {
  return (
    <div className="why-choose-us" style={style}>

      {/* Section header — reuses the SectionTitle molecule */}
      <SectionTitle
        title={title}
        description={description}
        align="center"
        style={{ padding: 0, marginBottom: 48 }}
      />

      {/* Feature cards grid */}
      <div
        className="why-choose-us-grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {items.map((item, i) => {
          const Icon = Ph[item.icon]
          return (
            <Card key={i} variant={cardVariant} size="lg" style={{ height: '100%' }}>
              <div className="why-choose-us-card-inner">
                {/* Icon bubble */}
                <div className="why-choose-us-icon">
                  {Icon && <Icon size={26} color="var(--color-content-brand)" weight="regular" />}
                </div>
                {/* Text */}
                <h3 className="why-choose-us-card-title">{item.title}</h3>
                <p className="why-choose-us-card-desc">{item.description}</p>
              </div>
            </Card>
          )
        })}
      </div>

    </div>
  )
}
