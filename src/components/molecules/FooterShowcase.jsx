import { FooterSimple, FooterColumns, FooterBrand } from './Footer'

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
const Divider = () => (
  <div style={{ borderTop: '1px solid var(--color-border-tertiary)', margin: '0 40px' }} />
)

// ─── Props ────────────────────────────────────────────────────────────────────
const SIMPLE_PROPS = [
  { name: 'navLinks',   type: '{ label, href?, active? }[]', default: 'DEFAULT_SIMPLE_LINKS', desc: 'Navigation link items' },
  { name: 'copyright',  type: 'string',                      default: "'© Copyright 2025…'",  desc: 'Copyright line text' },
  { name: 'style',      type: 'CSSProperties',               default: '—',                    desc: 'Extra inline styles on root' },
]
const COLUMNS_PROPS = [
  { name: 'columns',    type: '{ title, links[] }[]',        default: 'DEFAULT_COLUMNS (4)',  desc: 'Link group columns — title + string array of links' },
  { name: 'copyright',  type: 'string',                      default: "'© Copyright 2025…'",  desc: 'Copyright line text' },
  { name: 'style',      type: 'CSSProperties',               default: '—',                    desc: 'Extra inline styles on root' },
]
const BRAND_PROPS = [
  { name: 'tagline',               type: 'string',        default: "'Receive pricing updates…'", desc: 'Newsletter section tagline' },
  { name: 'newsletterPlaceholder', type: 'string',        default: "'Your E-Mail Address'",      desc: 'Email input placeholder' },
  { name: 'newsletterBtnLabel',    type: 'string',        default: "'Subscribe'",                desc: 'Subscribe button label' },
  { name: 'columns',               type: '{ title, links[], social? }[]', default: 'DEFAULT_BRAND_COLUMNS', desc: 'Link columns; set social: true to append social icons to that column' },
  { name: 'copyright',             type: 'string',        default: "'© Copyright 2025…'",       desc: 'Copyright line text' },
  { name: 'legalLinks',            type: 'string[]',      default: "['Terms…', 'Privacy…']",    desc: 'Bottom-bar legal link labels' },
  { name: 'onSubscribe',           type: '(email) => void', default: '—',                       desc: 'Called with the input value on subscribe' },
  { name: 'style',                 type: 'CSSProperties', default: '—',                         desc: 'Extra inline styles on root' },
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
export default function FooterShowcase() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-primary)' }}>

      {/* Page header */}
      <div style={{ padding: '40px 40px 32px', borderBottom: '1px solid var(--color-border-tertiary)' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
          borderRadius: 6, padding: '3px 10px', marginBottom: 12,
        }}>
          <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Molecules</span>
        </div>
        <h1 style={{ fontFamily: 'Inter', fontSize: 28, fontWeight: 700, color: 'var(--color-content-primary)', margin: '0 0 8px' }}>
          Footer
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'var(--color-content-secondary)', margin: 0, maxWidth: 640 }}>
          Three layout variants from Figma node 907-21641. <strong>Simple</strong> — horizontal nav bar with logo and social icons. <strong>Columns</strong> — brand block + multi-column grouped links. <strong>Brand</strong> — brand-blue background with newsletter capture and four link columns.
        </p>
      </div>

      {/* ── Simple (Footer 1) ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Simple</H2>
        <Caption>Footer 1 — logo left, horizontal nav links center, social icons right. Single-row layout on desktop, stacked on mobile.</Caption>
        <Label>variant: simple (footer 1)</Label>
      </div>
      <FooterSimple />

      <Divider />

      {/* Simple — custom links */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Simple — extended nav</H2>
        <Caption>Six links with no active state highlighted.</Caption>
        <Label>custom navLinks</Label>
      </div>
      <FooterSimple
        navLinks={[
          { label: 'Home' },
          { label: 'Inventory' },
          { label: 'Finance' },
          { label: 'Service' },
          { label: 'About', active: true },
          { label: 'Contact' },
        ]}
        copyright="© 2025 AutoDealers.Digital · All rights reserved."
      />

      <Divider />

      {/* ── Columns (Footer 7) ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Columns</H2>
        <Caption>Footer 7 — logo + social top bar, separator, then brand column + four grouped link columns. Each link row has a caret.</Caption>
        <Label>variant: columns (footer 7)</Label>
      </div>
      <FooterColumns />

      <Divider />

      {/* Columns — custom */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Columns — service-focused</H2>
        <Caption>Custom columns for a service department oriented dealership.</Caption>
        <Label>custom columns</Label>
      </div>
      <FooterColumns
        columns={[
          { title: 'Company',           links: ['About Us', 'Our Story', 'Careers', 'Press', 'Blog'] },
          { title: 'Inventory',         links: ['New Arrivals', 'Pre-Owned', 'Electric', 'Trucks & SUVs'] },
          { title: 'Finance & Trade',   links: ['Apply for Finance', 'Trade-In Estimate', 'Insurance', 'Extended Warranty'] },
          { title: 'After-Sale Support',links: ['Book a Service', 'Parts & Accessories', 'Recall Info', 'Roadside Assistance'] },
        ]}
        copyright="© 2025 Premium Auto Group · All rights reserved."
      />

      <Divider />

      {/* ── Brand (Footer 8) ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Brand</H2>
        <Caption>Footer 8 — brand-blue background, newsletter email capture bar, four link columns, separator, copyright + legal links row.</Caption>
        <Label>variant: brand (footer 8)</Label>
      </div>
      <FooterBrand />

      <Divider />

      {/* Brand — custom */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Brand — custom newsletter + legal</H2>
        <Caption>Different tagline, subscribe label, and three legal links in the bottom bar.</Caption>
        <Label>custom tagline + legalLinks</Label>
      </div>
      <FooterBrand
        tagline="Stay ahead of the market — get weekly deals and new arrivals straight to your inbox."
        newsletterPlaceholder="Enter your email address"
        newsletterBtnLabel="Get Updates"
        legalLinks={['Terms & Conditions', 'Privacy Policy', 'Cookie Policy']}
        copyright="© 2025 Premium Auto Group · All rights reserved."
      />

      {/* Props & Usage */}
      <div style={{ padding: '40px' }}>
        <H2>Props — FooterSimple</H2>
        <Caption>Minimal props — just nav links and copyright text.</Caption>
        <PropsTable rows={SIMPLE_PROPS} />

        <div style={{ marginTop: 32 }}>
          <H2>Props — FooterColumns</H2>
          <Caption>The brand column (logo + social + "Contact Us") is always rendered as the first column.</Caption>
          <PropsTable rows={COLUMNS_PROPS} />
        </div>

        <div style={{ marginTop: 32 }}>
          <H2>Props — FooterBrand</H2>
          <Caption>Set social: true on a column to render social icons at the bottom of that column.</Caption>
          <PropsTable rows={BRAND_PROPS} />
        </div>

        <div style={{ marginTop: 32 }}>
          <H2>Usage</H2>
          <Caption>Import the variant you need, or use the default export with a variant prop.</Caption>
          <pre style={{
            background: 'var(--color-bg-hover)',
            border: '1px solid var(--color-border-tertiary)',
            borderRadius: 8, padding: '20px 24px',
            fontFamily: 'monospace', fontSize: 13,
            color: 'var(--color-content-primary)',
            overflowX: 'auto', lineHeight: 1.65, margin: 0,
          }}>{`// Named imports
import { FooterSimple, FooterColumns, FooterBrand } from './components/molecules/Footer'

// Or default import with variant prop
import Footer from './components/molecules/Footer'

// Simple — horizontal nav bar
<FooterSimple
  navLinks={[
    { label: 'Home' },
    { label: 'Services', active: true },
    { label: 'Contact' },
  ]}
/>

// Columns — multi-column link groups
<FooterColumns
  columns={[
    { title: 'Company',   links: ['About', 'Careers', 'Blog'] },
    { title: 'Inventory', links: ['New', 'Pre-Owned', 'Electric'] },
  ]}
/>

// Brand — blue background + newsletter
<FooterBrand
  tagline="Get weekly deals straight to your inbox."
  onSubscribe={(email) => console.log('subscribe', email)}
  legalLinks={['Terms', 'Privacy Policy']}
/>

// Default export shorthand
<Footer variant="brand" tagline="Stay updated." />`}</pre>
        </div>
      </div>

    </div>
  )
}
