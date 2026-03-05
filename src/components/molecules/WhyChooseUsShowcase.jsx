import { ShieldCheck, Wrench, Certificate } from '@phosphor-icons/react'
import WhyChooseUs from './WhyChooseUs'

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
const PROPS = [
  { name: 'title',        type: 'string',    default: "'Why Choose Us'",    desc: 'Section heading passed to SectionTitle' },
  { name: 'description',  type: 'string',    default: 'lorem…',             desc: 'Sub-heading below the title' },
  { name: 'items',        type: 'Item[]',    default: '6 dealership items',  desc: 'Array of { icon, title, description } — icon is a Phosphor icon name string' },
  { name: 'columns',      type: '2 | 3 | 4', default: '3',                  desc: 'Desktop column count for the card grid' },
  { name: 'cardVariant',  type: 'string',    default: "'elevated'",          desc: "Card variant: 'elevated' | 'outlined' | 'filled'" },
  { name: 'style',        type: 'CSSProperties', default: '—',              desc: 'Extra inline styles on root element' },
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
export default function WhyChooseUsShowcase() {
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
          Why Choose Us
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'var(--color-content-secondary)', margin: 0, maxWidth: 640 }}>
          A feature grid section built with the design system's <strong>SectionTitle</strong> molecule and <strong>Card</strong> atom.
          Responsive 3-column grid on desktop, 2 on tablet, 1 on mobile.
        </p>
      </div>

      {/* ── Default (3 columns, elevated) ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Default</H2>
        <Caption>3-column grid · elevated cards · 6 items · centered section title.</Caption>
        <Label>columns=3 cardVariant="elevated"</Label>
      </div>

      <WhyChooseUs />

      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />

      {/* ── 4 columns, outlined cards ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>4 Columns · Outlined</H2>
        <Caption>4-column grid with outlined card variant and 4 custom items.</Caption>
        <Label>columns=4 cardVariant="outlined"</Label>
      </div>

      <WhyChooseUs
        title="Our Promises to You"
        description="Every promise we make is backed by years of experience and thousands of happy customers."
        columns={4}
        cardVariant="outlined"
        items={[
          { icon: 'ShieldCheck',    title: 'Verified Listings',    description: 'Every listing is verified with a full vehicle history report and inspection certificate.' },
          { icon: 'Handshake',      title: 'No-Pressure Sales',    description: 'Our team is here to help, not to push. Take all the time you need to make the right decision.' },
          { icon: 'Certificate',    title: 'Official Warranty',    description: 'All certified pre-owned vehicles include a transferable manufacturer-backed warranty.' },
          { icon: 'ArrowsClockwise', title: 'Easy Trade-In',      description: 'Get a fair trade-in value for your current vehicle — applied directly to your next purchase.' },
        ]}
      />

      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />

      {/* ── 2 columns, filled cards ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>2 Columns · Filled</H2>
        <Caption>2-column grid with filled card variant — great for a concise feature highlight.</Caption>
        <Label>columns=2 cardVariant="filled"</Label>
      </div>

      <WhyChooseUs
        title="Built Around You"
        description=""
        columns={2}
        cardVariant="filled"
        items={[
          { icon: 'UserCheck',    title: 'Personalized Experience', description: 'We listen to what you need and match you with vehicles that fit your lifestyle, budget, and preferences — every time.' },
          { icon: 'LockKey',      title: 'Secure Transactions',     description: 'Your data and payments are fully protected with bank-grade encryption and secure processing throughout the transaction.' },
          { icon: 'Truck',        title: 'Home Delivery',           description: 'Order online and have your new vehicle delivered directly to your door. Test drive it at home for 7 days, risk-free.' },
          { icon: 'ChartLine',    title: 'Best Price Guarantee',    description: 'We price-match any competitor. If you find a better deal within 30 days of purchase, we\'ll refund the difference.' },
        ]}
      />

      {/* ── Props table ── */}
      <div style={{ padding: '40px' }}>
        <H2>Props</H2>
        <Caption>All props are optional — sensible dealership defaults are provided.</Caption>
        <PropsTable rows={PROPS} />

        {/* Usage */}
        <div style={{ marginTop: 32 }}>
          <H2>Usage</H2>
          <Caption>
            Drop anywhere on a page. Icon names are Phosphor icon identifiers (e.g. <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--color-bg-hover)', padding: '1px 5px', borderRadius: 3 }}>ShieldCheck</code>, <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--color-bg-hover)', padding: '1px 5px', borderRadius: 3 }}>Star</code>).
          </Caption>
          <pre style={{
            background: 'var(--color-bg-hover)',
            border: '1px solid var(--color-border-tertiary)',
            borderRadius: 8, padding: '20px 24px',
            fontFamily: 'monospace', fontSize: 13,
            color: 'var(--color-content-primary)',
            overflowX: 'auto', lineHeight: 1.65, margin: 0,
          }}>{`import WhyChooseUs from './components/molecules/WhyChooseUs'

// Minimal — uses built-in defaults
<WhyChooseUs />

// Fully customised
<WhyChooseUs
  title="Why Choose Beaver Auto Sales"
  description="Over 30 years of trust, quality, and care."
  columns={3}
  cardVariant="elevated"
  items={[
    { icon: 'ShieldCheck',  title: 'Certified',    description: '150-point inspection on every vehicle.' },
    { icon: 'Star',         title: '5-Star Rated', description: 'Award-winning customer satisfaction.' },
    { icon: 'Handshake',    title: 'Fair Pricing',  description: 'No hidden fees. Transparent pricing always.' },
  ]}
/>`}</pre>
        </div>
      </div>

    </div>
  )
}
