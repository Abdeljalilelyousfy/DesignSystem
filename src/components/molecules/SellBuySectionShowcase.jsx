import SellBuySection from './SellBuySection'

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
  { name: 'sellTitle',        type: 'string',        default: "'SELL'",             desc: 'Large label on the sell panel' },
  { name: 'sellSubtitle',     type: 'string',        default: "'YOUR CAR'",         desc: 'Smaller heading below sell label' },
  { name: 'sellDescription',  type: 'string',        default: 'lorem…',             desc: 'Body copy on sell panel' },
  { name: 'sellCtaLabel',     type: 'string',        default: "'Sell My Car'",      desc: 'Sell panel button label' },
  { name: 'onSellCtaClick',   type: '() => void',    default: '—',                  desc: 'Fired on sell CTA click' },
  { name: 'buyTitle',         type: 'string',        default: "'BUY'",              desc: 'Large label on the buy panel' },
  { name: 'buySubtitle',      type: 'string',        default: "'YOUR CAR'",         desc: 'Smaller heading below buy label' },
  { name: 'buyDescription',   type: 'string',        default: 'lorem…',             desc: 'Body copy on buy panel' },
  { name: 'buyCtaLabel',      type: 'string',        default: "'Browse Inventory'", desc: 'Buy panel button label' },
  { name: 'onBuyCtaClick',    type: '() => void',    default: '—',                  desc: 'Fired on buy CTA click' },
  { name: 'style',            type: 'CSSProperties', default: '—',                  desc: 'Extra inline styles on root element' },
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
export default function SellBuySectionShowcase() {
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
          Sell / Buy Section
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'var(--color-content-secondary)', margin: 0, maxWidth: 600 }}>
          A full-width split section with two equal panels — Sell (brand-blue background) on the left and Buy (light-gray background) on the right. Stacks vertically on mobile.
        </p>
      </div>

      {/* ── Default variant ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Default</H2>
        <Caption>Desktop layout — two equal panels side by side, full viewport width.</Caption>
        <Label>variant: sell/buy 1</Label>
      </div>

      <SellBuySection />

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />

      {/* ── Custom labels variant ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Custom labels</H2>
        <Caption>Override title, subtitle, description, and CTA labels for each panel.</Caption>
        <Label>custom props</Label>
      </div>

      <SellBuySection
        sellTitle="TRADE"
        sellSubtitle="YOUR VEHICLE"
        sellDescription="Get a competitive offer in minutes. We assess your car's value fairly and provide instant cash — no haggling, no waiting."
        sellCtaLabel="Get My Offer"
        buyTitle="SHOP"
        buySubtitle="NEW ARRIVALS"
        buyDescription="Over 500 new and pre-owned vehicles added weekly. Browse certified models with full history reports and warranty coverage."
        buyCtaLabel="View Inventory"
      />

      {/* ── Props table ── */}
      <div style={{ padding: '40px' }}>
        <H2>Props</H2>
        <Caption>All props are optional — sensible dealership defaults are provided for both panels.</Caption>
        <PropsTable rows={PROPS} />

        {/* Usage */}
        <div style={{ marginTop: 32 }}>
          <H2>Usage</H2>
          <Caption>Drop in anywhere on the page — typically placed after the Hero or Welcome Text section.</Caption>
          <pre style={{
            background: 'var(--color-bg-hover)',
            border: '1px solid var(--color-border-tertiary)',
            borderRadius: 8, padding: '20px 24px',
            fontFamily: 'monospace', fontSize: 13,
            color: 'var(--color-content-primary)',
            overflowX: 'auto', lineHeight: 1.65, margin: 0,
          }}>{`import SellBuySection from './components/molecules/SellBuySection'

// Minimal — uses built-in defaults
<SellBuySection />

// Fully customised
<SellBuySection
  sellTitle="SELL"
  sellSubtitle="YOUR CAR"
  sellDescription="Get the best value for your vehicle..."
  sellCtaLabel="Sell My Car"
  onSellCtaClick={() => navigate('/sell')}

  buyTitle="BUY"
  buySubtitle="YOUR CAR"
  buyDescription="Explore thousands of quality vehicles..."
  buyCtaLabel="Browse Inventory"
  onBuyCtaClick={() => navigate('/inventory')}
/>`}</pre>
        </div>
      </div>

    </div>
  )
}
