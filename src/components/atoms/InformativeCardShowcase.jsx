import InformativeCard from './InformativeCard'
import {
  Trophy, Car, CurrencyDollar, Wrench,
  Star, ShieldCheck, Lightning,
} from '@phosphor-icons/react'

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
      <div style={{
        fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
        color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
        background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6, flexShrink: 0,
      }}>
        {children}
      </div>
      <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
    </div>
  )
}

function VariantLabel({ variant, name }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <span style={{
        fontFamily: 'ui-monospace, monospace', fontSize: 11, fontWeight: 600,
        color: 'var(--color-content-brand)', background: 'var(--color-bg-selected)', borderRadius: 4, padding: '2px 7px',
      }}>
        Card {variant}
      </span>
      <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)' }}>{name}</span>
    </div>
  )
}

export default function InformativeCardShowcase() {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      background: 'var(--color-bg-primary)',
      minHeight: '100vh',
      padding: '48px 40px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>

      {/* ── Page header ── */}
      <div style={{ marginBottom: 56 }}>
        <p style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
          WDS · Atoms
        </p>
        <h1 style={{ fontFamily: 'Inter', fontSize: 40, fontWeight: 600, lineHeight: '48px', letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px' }}>
          Informative Cards
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)', lineHeight: '24px', margin: '0 0 20px', maxWidth: 600 }}>
          4-variant card component using WDS design tokens — success-tinted icon circles, brand-color headings,
          and WDS primary / outline buttons.
        </p>
        {/* Spec chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            '296px narrow / fluid wide',
            '12px border-radius',
            '24px padding',
            'Inter headings',
            'WDS Button CTA',
            'Success icon circle',
          ].map(s => (
            <span key={s} style={{
              fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)',
              background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
              borderRadius: 6, padding: '3px 10px',
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ─────────────────── 1. ALL VARIANTS ─────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>All Variants</SectionLabel>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <VariantLabel variant={1} name="Primary — white bg, Inter 18px, filled button" />
            <InformativeCard
              variant={1}
              icon={Trophy}
              title="Welcome to Auto Dealers"
              description="Whether you're buying your first car, trading in, or upgrading, we're here to make your journey smooth and stress-free."
              buttonLabel="Browse Vehicles"
            />
          </div>

          <div>
            <VariantLabel variant={2} name="Compact — gray bg, 16px, count, outlined button" />
            <InformativeCard
              variant={2}
              icon={CurrencyDollar}
              title="Under $10K"
              count="245 cars"
              buttonLabel="Browse"
            />
          </div>

          <div>
            <VariantLabel variant={4} name="Brand heading — white bg, brand-color title" />
            <InformativeCard
              variant={4}
              icon={Trophy}
              title="Welcome to Auto Dealers"
              description="Whether you're buying your first car, trading in, or upgrading, we're here to make your journey smooth and stress-free."
              buttonLabel="Browse Vehicles"
            />
          </div>
        </div>

        {/* Row 2: Card 3 full width */}
        <div style={{ marginTop: 24 }}>
          <VariantLabel variant={3} name="Banner — horizontal, image panel, brand price" />
          <InformativeCard
            variant={3}
            icon={Car}
            title="Mid-Range"
            price="$15K – $30K"
            description="Perfect balance of features and affordability. Reliable vehicles for every lifestyle."
            count="180 Vehicles"
            buttonLabel="View Collection"
          />
        </div>
      </div>

      {/* ─────────────────── 2. REAL-WORLD EXAMPLE ─────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Real-world example — Budget categories</SectionLabel>
        <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-tertiary)', marginBottom: 24, marginTop: -12 }}>
          Using variant 2 as a repeatable category browse card grid.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <InformativeCard variant={2} icon={CurrencyDollar} title="Under $10K"   count="245 cars" buttonLabel="Browse" />
          <InformativeCard variant={2} icon={Car}            title="$10K – $20K"  count="412 cars" buttonLabel="Browse" />
          <InformativeCard variant={2} icon={Star}           title="$20K – $35K"  count="183 cars" buttonLabel="Browse" />
          <InformativeCard variant={2} icon={Lightning}      title="Over $35K"    count="97 cars"  buttonLabel="Browse" />
        </div>
      </div>

      {/* ─────────────────── 3. REAL-WORLD — SERVICES ─────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Real-world example — Service cards</SectionLabel>
        <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-tertiary)', marginBottom: 24, marginTop: -12 }}>
          Using variant 1 as a service description card.
        </p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <InformativeCard
            variant={1}
            icon={Car}
            title="Vehicle Financing"
            description="Competitive rates and flexible terms to put you in the driver's seat. Pre-approval in minutes."
            buttonLabel="Apply Now"
          />
          <InformativeCard
            variant={1}
            icon={Wrench}
            title="Service & Repair"
            description="Certified technicians, genuine parts, and transparent pricing. Book your appointment online."
            buttonLabel="Book Service"
          />
          <InformativeCard
            variant={1}
            icon={ShieldCheck}
            title="Vehicle Protection"
            description="Extended warranty plans and GAP coverage to protect your investment from day one."
            buttonLabel="Learn More"
          />
        </div>
      </div>

      {/* ─────────────────── 4. BANNER VARIANTS ─────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Real-world example — Banner cards</SectionLabel>
        <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-tertiary)', marginBottom: 24, marginTop: -12 }}>
          Variant 3 used for price-range hero sections.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <InformativeCard
            variant={3}
            icon={CurrencyDollar}
            title="Budget Finds"
            price="Under $10K"
            description="Quality pre-owned vehicles at prices that work for you. Every car inspected and certified."
            count="245 vehicles available"
            buttonLabel="Shop Budget"
          />
          <InformativeCard
            variant={3}
            icon={Star}
            title="Premium Selection"
            price="$35K and above"
            description="Luxury and near-luxury vehicles with full service history, low mileage, and premium features."
            count="97 vehicles available"
            buttonLabel="Shop Premium"
          />
        </div>
      </div>

      {/* ─────────────────── 5. USAGE ─────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
          <pre style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12.5,
            color: 'var(--color-content-primary)', margin: 0, lineHeight: '22px', overflowX: 'auto',
          }}>{`import InformativeCard from '@/components/atoms/InformativeCard'
import { Trophy, CurrencyDollar } from '@phosphor-icons/react'

// Variant 1 — primary white card, filled button
<InformativeCard
  variant={1}
  icon={Trophy}
  title="Welcome to Auto Dealers"
  description="Your journey starts here..."
  buttonLabel="Browse Vehicles"
/>

// Variant 2 — compact gray category card, outlined button
<InformativeCard
  variant={2}
  icon={CurrencyDollar}
  title="Under $10K"
  count="245 cars"
  buttonLabel="Browse"
/>

// Variant 3 — wide horizontal banner (fluid, use full-width container)
<InformativeCard
  variant={3}
  icon={Trophy}
  title="Mid-Range"
  price="$15K – $30K"
  description="Perfect balance of features and affordability."
  count="180 Vehicles"
  buttonLabel="View Collection"
  image="/path/to/image.jpg"   // optional, shows icon placeholder if omitted
/>

// Variant 4 — brand-color heading, white bg, filled button
<InformativeCard
  variant={4}
  icon={Trophy}
  title="Welcome to Auto Dealers"
  description="Your journey starts here..."
  buttonLabel="Browse Vehicles"
/>

// All props
// variant      1 | 2 | 3 | 4            required
// icon         Phosphor component        default: Trophy
// title        string
// description  string
// price        string                    variant 3 price range
// count        string                    variant 2/3 stock count
// buttonLabel  string
// image        string (URL)              variant 3 optional image src
// style        CSSProperties             override container styles`}</pre>
        </div>
      </div>

    </div>
  )
}
