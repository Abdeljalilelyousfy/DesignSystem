import { InformativeCardsHeroGrid, InformativeCardsIconGrid } from './InformativeCardsSection'

// ─── Shared showcase primitives ──────────────────────────────────────────────
const H2 = ({ children }) => (
  <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--color-content-primary)', margin: '0 0 4px' }}>
    {children}
  </h2>
)
const Caption = ({ children }) => (
  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--color-content-tertiary)', margin: '0 0 20px' }}>
    {children}
  </p>
)
const Label = ({ children }) => (
  <span style={{
    display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
    color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase',
    background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
    borderRadius: 4, padding: '2px 8px', marginBottom: 12,
  }}>
    {children}
  </span>
)

// ─── Props table ──────────────────────────────────────────────────────────────
const HERO_PROPS = [
  { name: 'title',       type: 'string',        default: "'Explore Our Inventory'",  desc: 'Section heading' },
  { name: 'description', type: 'string',        default: "'Find the perfect…'",       desc: 'Section subheading' },
  { name: 'tabs',        type: 'string[]',      default: "['In Stock', …]",           desc: 'Tab bar labels (set to [] to hide)' },
  { name: 'heroCard',    type: 'object',        default: 'DEFAULT_HERO_CARD',         desc: '{ title, description, ctaLabel, gradient }' },
  { name: 'smallCards',  type: 'object[4]',     default: 'DEFAULT_SMALL_CARDS',      desc: 'Array of 4 card objects (same shape)' },
  { name: 'onViewAll',   type: '() => void',    default: '—',                         desc: 'Fired on "View all" click' },
  { name: 'style',       type: 'CSSProperties', default: '—',                         desc: 'Extra inline styles on section root' },
]

const ICON_PROPS = [
  { name: 'title',       type: 'string',        default: "'Explore Our Services'",   desc: 'Section heading' },
  { name: 'description', type: 'string',        default: "'Everything you need…'",   desc: 'Section subheading' },
  { name: 'items',       type: 'Item[]',        default: 'DEFAULT_ICON_ITEMS (5)',   desc: '{ icon, title, description, ctaLabel }' },
  { name: 'onViewAll',   type: '() => void',    default: '—',                         desc: 'Fired on "View all" click' },
  { name: 'style',       type: 'CSSProperties', default: '—',                         desc: 'Extra inline styles on section root' },
]

function PropsTable({ rows }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: 8, border: '1px solid var(--color-border-tertiary)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
        <thead>
          <tr style={{ background: 'var(--color-bg-hover)' }}>
            {['Prop', 'Type', 'Default', 'Description'].map(col => (
              <th key={col} style={{
                textAlign: 'left', padding: '10px 14px', fontWeight: 600, fontSize: 12,
                letterSpacing: '0.04em', textTransform: 'uppercase',
                color: 'var(--color-content-tertiary)',
                borderBottom: '1px solid var(--color-border-tertiary)',
              }}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--color-border-tertiary)' : 'none' }}>
              <td style={{ padding: '10px 14px', fontFamily: 'monospace', fontSize: 12, color: 'var(--color-content-info)', verticalAlign: 'top' }}>{row.name}</td>
              <td style={{ padding: '10px 14px', fontFamily: 'monospace', fontSize: 12, color: 'var(--color-content-secondary)', verticalAlign: 'top' }}>{row.type}</td>
              <td style={{ padding: '10px 14px', fontFamily: 'monospace', fontSize: 12, color: 'var(--color-content-tertiary)', verticalAlign: 'top' }}>{row.default}</td>
              <td style={{ padding: '10px 14px', color: 'var(--color-content-secondary)', verticalAlign: 'top' }}>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Showcase ─────────────────────────────────────────────────────────────────
export default function InformativeCardsSectionShowcase() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-primary)' }}>

      {/* Page header */}
      <div style={{ padding: '40px 40px 32px', borderBottom: '1px solid var(--color-border-tertiary)' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
          borderRadius: 6, padding: '3px 10px', marginBottom: 12,
        }}>
          <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Molecules
          </span>
        </div>
        <h1 style={{ fontFamily: 'Inter', fontSize: 28, fontWeight: 700, color: 'var(--color-content-primary)', margin: '0 0 8px' }}>
          Informative Cards Section
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'var(--color-content-secondary)', margin: 0, maxWidth: 640 }}>
          Two layout variants from Figma node 1440-56501. <strong>Hero Grid</strong> (Type 1) pairs one large image card with a 2×2 grid of smaller cards. <strong>Icon Cards</strong> (Type 6) arranges five service cards using the design system's Card atom.
        </p>
      </div>

      {/* ── Type 1: Hero Grid ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Hero Grid</H2>
        <Caption>Type 1 — one large featured card left + 2×2 small cards right. Includes section header with tab bar and nav controls.</Caption>
        <Label>variant: hero-grid (type 1)</Label>
      </div>

      <InformativeCardsHeroGrid />

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />

      {/* ── Type 1 custom ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Hero Grid — custom tabs</H2>
        <Caption>Override tabs with domain-specific categories. Tabs start on the second option.</Caption>
        <Label>custom tabs</Label>
      </div>

      <InformativeCardsHeroGrid
        title="Explore by Category"
        description="Browse our full range of vehicles across every segment."
        tabs={['All Vehicles', 'Sedans', 'SUVs', 'Trucks', 'Electric']}
        heroCard={{
          title: 'Premium SUVs',
          description: 'From compact crossovers to full-size luxury SUVs — capability meets refinement.',
          ctaLabel: 'Explore SUVs',
          gradient: 'linear-gradient(155deg, #1a0d2e 0%, #3a1a6e 100%)',
        }}
        smallCards={[
          { title: 'Compact Sedans',  description: 'Efficient, stylish, and affordable.',           ctaLabel: 'Browse', gradient: 'linear-gradient(155deg, #0a1f12 0%, #194d2c 100%)' },
          { title: 'Pickup Trucks',   description: 'Built for work and the weekend.',               ctaLabel: 'Browse', gradient: 'linear-gradient(155deg, #2e1a00 0%, #6b3d00 100%)' },
          { title: 'Hybrid Vehicles', description: 'Savings at the pump, without compromise.',      ctaLabel: 'Browse', gradient: 'linear-gradient(155deg, #001a1a 0%, #004444 100%)' },
          { title: 'Luxury Models',   description: 'Premium brands, certified and ready to drive.', ctaLabel: 'Browse', gradient: 'linear-gradient(155deg, #1a0a20 0%, #3e1c52 100%)' },
        ]}
      />

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />

      {/* ── Type 6: Icon Cards ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Icon Service Cards</H2>
        <Caption>Type 6 — five equal-width service cards using the design system's Card atom (outlined variant). Each card has an icon bubble, title, description, and CTA button.</Caption>
        <Label>variant: icon-cards (type 6)</Label>
      </div>

      <InformativeCardsIconGrid />

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />

      {/* ── Type 6 custom ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Icon Service Cards — service-focused</H2>
        <Caption>Customised for an after-sale service department with different icons and copy.</Caption>
        <Label>custom items</Label>
      </div>

      <InformativeCardsIconGrid
        title="Service & Maintenance"
        description="Keep your vehicle in peak condition with our expert service team."
        items={[
          { icon: 'Wrench',        title: 'Oil & Lube',         description: 'Fast, affordable oil changes using manufacturer-approved fluids and filters.',       ctaLabel: 'Book Now' },
          { icon: 'Tire',          title: 'Tire Services',      description: 'Rotation, balancing, and replacement from a full range of top-tier tire brands.',    ctaLabel: 'Book Now' },
          { icon: 'ShieldCheck',   title: 'Multi-Point Inspection', description: 'A thorough 150-point safety check performed by certified technicians.',           ctaLabel: 'Schedule' },
          { icon: 'Gauge',         title: 'Diagnostics',        description: 'Advanced computerised diagnostics to identify and resolve issues quickly.',           ctaLabel: 'Get Checked' },
          { icon: 'CalendarBlank', title: 'Service Scheduling', description: 'Book appointments online, choose your time slot, and receive reminders automatically.', ctaLabel: 'Book Online' },
        ]}
      />

      {/* Props & Usage */}
      <div style={{ padding: '40px' }}>

        {/* Hero Grid props */}
        <H2>Props — InformativeCardsHeroGrid</H2>
        <Caption>All props are optional — sensible defaults are provided.</Caption>
        <PropsTable rows={HERO_PROPS} />

        {/* Icon Cards props */}
        <div style={{ marginTop: 32 }}>
          <H2>Props — InformativeCardsIconGrid</H2>
          <Caption>All props are optional — five default service items are provided.</Caption>
          <PropsTable rows={ICON_PROPS} />
        </div>

        {/* Usage */}
        <div style={{ marginTop: 32 }}>
          <H2>Usage</H2>
          <Caption>Import the named export for the layout variant you need.</Caption>
          <pre style={{
            background: 'var(--color-bg-hover)',
            border: '1px solid var(--color-border-tertiary)',
            borderRadius: 8, padding: '20px 24px',
            fontFamily: 'monospace', fontSize: 13,
            color: 'var(--color-content-primary)',
            overflowX: 'auto', lineHeight: 1.65, margin: 0,
          }}>{`import {
  InformativeCardsHeroGrid,
  InformativeCardsIconGrid,
} from './components/molecules/InformativeCardsSection'

// Type 1 — Hero grid, default content
<InformativeCardsHeroGrid />

// Type 1 — custom hero card + small cards
<InformativeCardsHeroGrid
  title="Explore by Category"
  tabs={['All', 'New', 'Used', 'Electric']}
  heroCard={{ title: 'SUVs', description: '...', ctaLabel: 'Browse', gradient: 'linear-gradient(...)' }}
  smallCards={[
    { title: 'Sedans',  description: '...', ctaLabel: 'Browse', gradient: '...' },
    // ... 3 more
  ]}
  onViewAll={() => navigate('/inventory')}
/>

// Type 6 — Icon service cards, default items
<InformativeCardsIconGrid />

// Type 6 — custom service items
<InformativeCardsIconGrid
  title="Service & Maintenance"
  items={[
    { icon: 'Wrench', title: 'Oil & Lube', description: '...', ctaLabel: 'Book Now' },
    // ...
  ]}
/>`}</pre>
        </div>
      </div>

    </div>
  )
}
