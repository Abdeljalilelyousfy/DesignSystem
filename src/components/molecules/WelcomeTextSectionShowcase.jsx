import WelcomeTextSection from './WelcomeTextSection'

// ─── Shared showcase primitives ────────────────────────────────────────────────
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

// ─── Props table ───────────────────────────────────────────────────────────────
const PROPS = [
  { name: 'title',               type: 'string',         default: "'Welcome to Auto Dealers'",  desc: 'Section heading' },
  { name: 'description',         type: 'string',         default: 'lorem…',                     desc: 'Body paragraph copy' },
  { name: 'ctaLabel',            type: 'string',         default: "'Browse Inventory'",          desc: 'Primary button label' },
  { name: 'ctaSecondaryLabel',   type: 'string',         default: "'Learn More'",               desc: 'Outline button label' },
  { name: 'showCta',             type: 'boolean',        default: 'true',                       desc: 'Show / hide primary CTA' },
  { name: 'showCtaSecondary',    type: 'boolean',        default: 'true',                       desc: 'Show / hide outline CTA' },
  { name: 'image',               type: 'string',         default: "'/images/welcome-cars.jpg'", desc: 'Background image URL for the photo panel' },
  { name: 'imageAlt',            type: 'string',         default: "'Dealership vehicles'",       desc: 'Accessible alt text for the image' },
  { name: 'onCtaClick',          type: '() => void',     default: '—',                          desc: 'Fired on primary CTA click' },
  { name: 'onCtaSecondaryClick', type: '() => void',     default: '—',                          desc: 'Fired on outline CTA click' },
  { name: 'style',               type: 'CSSProperties',  default: '—',                          desc: 'Extra inline styles on root element' },
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

// ─── Showcase ──────────────────────────────────────────────────────────────────
export default function WelcomeTextSectionShowcase() {
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
          Welcome Text Section
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'var(--color-content-secondary)', margin: 0, maxWidth: 600 }}>
          A two-column dealership "about" section — heading, body copy, and two CTAs on the left;
          a car photo on the right. Stacks vertically on mobile.
        </p>
      </div>

      {/* ── Section 1: Default (image + both CTAs) ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Default</H2>
        <Caption>Desktop layout — text left, photo right, full-bleed white background.</Caption>
        <Label>variant: welcome text 1</Label>
      </div>

      <WelcomeTextSection />

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />

      {/* ── Section 2: Primary CTA only ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Primary CTA only</H2>
        <Caption>showCtaSecondary=false — hides the outline button.</Caption>
        <Label>showCtaSecondary={'{false}'}</Label>
      </div>

      <WelcomeTextSection
        title="Your Trusted Local Dealer"
        description="We've been serving the community for over 30 years with a wide selection of new and pre-owned vehicles. Our team is here to make your car-buying experience simple and enjoyable."
        ctaLabel="View Inventory"
        showCtaSecondary={false}
      />

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />

      {/* ── Section 3: No CTAs ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>No CTAs</H2>
        <Caption>showCta=false + showCtaSecondary=false — text-only layout.</Caption>
        <Label>showCta={'{false}'} showCtaSecondary={'{false}'}</Label>
      </div>

      <WelcomeTextSection
        title="About Our Dealership"
        description="Founded in 1992, Beaver Auto Sales has grown to become one of the region's most trusted automotive retailers. We carry over 500 vehicles across sedans, SUVs, trucks, and electric models — all competitively priced and ready for a test drive."
        showCta={false}
        showCtaSecondary={false}
      />

      {/* ── Props table ── */}
      <div style={{ padding: '40px' }}>
        <H2>Props</H2>
        <Caption>All props are optional — sensible dealership defaults are provided.</Caption>
        <PropsTable rows={PROPS} />

        {/* Usage code */}
        <div style={{ marginTop: 32 }}>
          <H2>Usage</H2>
          <Caption>Drop in anywhere on the page — typically placed right after the Hero Section.</Caption>
          <pre style={{
            background: 'var(--color-bg-hover)',
            border: '1px solid var(--color-border-tertiary)',
            borderRadius: 8, padding: '20px 24px',
            fontFamily: 'monospace', fontSize: 13,
            color: 'var(--color-content-primary)',
            overflowX: 'auto', lineHeight: 1.65, margin: 0,
          }}>{`import WelcomeTextSection from './components/molecules/WelcomeTextSection'

// Minimal — uses built-in defaults
<WelcomeTextSection />

// Fully customised
<WelcomeTextSection
  title="Welcome to Beaver Auto Sales"
  description="Your trusted local dealer since 1992..."
  ctaLabel="Browse Inventory"
  ctaSecondaryLabel="Contact Us"
  showCta={true}
  showCtaSecondary={true}
  image="/images/welcome-cars.jpg"
  onCtaClick={() => navigate('/inventory')}
  onCtaSecondaryClick={() => navigate('/contact')}
/>

// Text only (no buttons)
<WelcomeTextSection
  title="About Us"
  description="..."
  showCta={false}
  showCtaSecondary={false}
/>`}</pre>
        </div>
      </div>

    </div>
  )
}
