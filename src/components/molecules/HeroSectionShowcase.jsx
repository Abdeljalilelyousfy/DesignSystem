import { useState } from 'react'
import HeroSection from './HeroSection'

// ─── Sample data ───────────────────────────────────────────────────────────────

const CAROUSEL_SLIDES = [
  {
    id: 1,
    badge: 'Summer Sales Event',
    title: 'Welcome to\nBeaver Auto Sales',
    subtitle: 'Explore our full lineup of new and certified pre-owned vehicles with exclusive financing offers available this season.',
    ctaLabel: '+4500 Cars for You',
    ctaSecondaryLabel: 'Book a Test Drive',
    image: '/images/hero-cars.jpg',
    gradient: 'linear-gradient(to right, #0d1b2a, #1a3a5c)',
  },
  {
    id: 2,
    badge: 'Certified Pre-Owned',
    title: 'Quality You Trust,\nPrices You Love',
    subtitle: 'Every certified vehicle passes a rigorous 150-point inspection — backed by our comprehensive warranty guarantee.',
    ctaLabel: 'Shop Pre-Owned',
    ctaSecondaryLabel: 'Learn More',
    gradient: 'linear-gradient(to right, #1a0b2e, #2d1a54)',
  },
  {
    id: 3,
    badge: 'Financing Made Easy',
    title: 'Get Behind the\nWheel Faster',
    subtitle: 'Apply online in minutes. Competitive rates, flexible terms, and same-day approvals for qualified buyers.',
    ctaLabel: 'Get Pre-Approved',
    ctaSecondaryLabel: 'Calculate Payment',
    gradient: 'linear-gradient(to right, #0a1f14, #0d4026)',
  },
]

const STATIC_SLIDE = [
  {
    id: 1,
    badge: 'New Arrivals 2025',
    title: 'Find Your\nPerfect Match',
    subtitle: 'Over 500 vehicles in stock — sedans, SUVs, trucks, and more. Expert staff ready to help you decide.',
    ctaLabel: 'View Inventory',
    ctaSecondaryLabel: 'Get Directions',
    image: '/images/hero-cars.jpg',
    gradient: 'linear-gradient(to right, #0f1923, #1e2d40)',
  },
]

// ─── Showcase ─────────────────────────────────────────────────────────────────

const H2 = ({ children }) => (
  <h2 style={{
    fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 700,
    color: 'var(--color-content-primary)', margin: '0 0 4px',
  }}>
    {children}
  </h2>
)

const Caption = ({ children }) => (
  <p style={{
    fontFamily: 'Inter, sans-serif', fontSize: 14,
    color: 'var(--color-content-tertiary)', margin: '0 0 20px',
  }}>
    {children}
  </p>
)

const Label = ({ children }) => (
  <span style={{
    display: 'inline-block',
    fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
    color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase',
    background: 'var(--color-bg-hover)',
    border: '1px solid var(--color-border-tertiary)',
    borderRadius: 4, padding: '2px 8px', marginBottom: 12,
  }}>
    {children}
  </span>
)

// ─── Props table ──────────────────────────────────────────────────────────────

const PROPS = [
  { name: 'variant',             type: "'carousel' | 'image'",  default: "'carousel'",  desc: 'Display mode — auto-advancing slider or a single static hero' },
  { name: 'slides',              type: 'Slide[]',                default: 'DEFAULT_SLIDES', desc: 'Array of slide objects (see Slide shape below)' },
  { name: 'autoPlay',            type: 'boolean',                default: 'true',        desc: 'Auto-advance slides (carousel only)' },
  { name: 'interval',            type: 'number',                 default: '5000',        desc: 'Milliseconds between auto-advances' },
  { name: 'onCtaClick',          type: '(slide) => void',        default: '—',           desc: 'Fired when the primary CTA is clicked' },
  { name: 'onCtaSecondaryClick', type: '(slide) => void',        default: '—',           desc: 'Fired when the secondary CTA is clicked' },
  { name: 'style',               type: 'CSSProperties',          default: '—',           desc: 'Extra inline styles on the root element' },
]

const SLIDE_PROPS = [
  { name: 'id',                  type: 'string | number',        desc: 'Unique key' },
  { name: 'badge',               type: 'string?',               desc: 'Eyebrow chip text (optional)' },
  { name: 'title',               type: 'string',                desc: 'Headline — use \\n for line breaks' },
  { name: 'subtitle',            type: 'string',                desc: 'Supporting paragraph' },
  { name: 'ctaLabel',            type: 'string',                desc: 'Primary button label' },
  { name: 'ctaSecondaryLabel',   type: 'string',                desc: 'Outline button label' },
  { name: 'image',               type: 'string?',               desc: 'Background image URL (optional)' },
  { name: 'gradient',            type: 'string?',               desc: 'CSS gradient fallback background' },
]

function PropsTable({ rows, columns }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: 8, border: '1px solid var(--color-border-tertiary)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
        <thead>
          <tr style={{ background: 'var(--color-bg-hover)' }}>
            {columns.map(col => (
              <th key={col} style={{
                textAlign: 'left', padding: '10px 14px',
                fontWeight: 600, fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase',
                color: 'var(--color-content-tertiary)',
                borderBottom: '1px solid var(--color-border-tertiary)',
              }}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--color-border-tertiary)' : 'none' }}>
              {Object.values(row).map((cell, j) => (
                <td key={j} style={{
                  padding: '10px 14px',
                  color: j === 0 ? 'var(--color-content-info)' : 'var(--color-content-secondary)',
                  fontFamily: j <= 1 ? 'monospace' : 'Inter, sans-serif',
                  fontSize: j <= 1 ? 12 : 13,
                  verticalAlign: 'top',
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Main showcase ─────────────────────────────────────────────────────────────

export default function HeroSectionShowcase() {
  const [autoPlay, setAutoPlay] = useState(true)

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
          Hero Section
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'var(--color-content-secondary)', margin: 0, maxWidth: 600 }}>
          Full-width dealership hero banner with optional image background, eyebrow badge, headline, subtitle, and dual CTAs.
          Supports a static single-image mode and an auto-advancing carousel with prev/next arrows and dot indicators.
        </p>
      </div>

      {/* ── Section 1: Carousel (interactive) ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Carousel</H2>
        <Caption>Auto-advances every 5 seconds. Pauses on hover. Arrows + dots for manual navigation.</Caption>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <Label>Interactive</Label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={autoPlay}
              onChange={e => setAutoPlay(e.target.checked)}
              style={{ accentColor: 'var(--color-content-brand)', width: 15, height: 15 }}
            />
            Auto-play
          </label>
        </div>
      </div>

      {/* Hero — full bleed */}
      <HeroSection
        variant="carousel"
        slides={CAROUSEL_SLIDES}
        autoPlay={autoPlay}
        interval={5000}
      />

      {/* ── Section 2: Static image / single slide ── */}
      <div style={{ padding: '40px 40px 0' }}>
        <H2>Static (Image Variant)</H2>
        <Caption>A single, non-rotating slide. Useful for campaign landing pages or featured promotions.</Caption>
        <Label>variant="image"</Label>
      </div>

      <HeroSection
        variant="image"
        slides={STATIC_SLIDE}
        style={{ height: 480 }}
      />

      {/* ── Section 3: Props ── */}
      <div style={{ padding: '40px' }}>
        <H2>Component Props</H2>
        <Caption style={{ marginBottom: 20 }}>All props are optional — defaults produce a ready-to-use dealership carousel.</Caption>

        <PropsTable
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={PROPS.map(p => ({ name: p.name, type: p.type, default: p.default, desc: p.desc }))}
        />

        <div style={{ marginTop: 32 }}>
          <H2>Slide Shape</H2>
          <Caption>Each element in the <code style={{ fontFamily: 'monospace', fontSize: 12 }}>slides</code> array accepts these fields.</Caption>

          <PropsTable
            columns={['Field', 'Type', 'Description']}
            rows={SLIDE_PROPS.map(p => ({ name: p.name, type: p.type, desc: p.desc }))}
          />
        </div>

        {/* Usage block */}
        <div style={{ marginTop: 32 }}>
          <H2>Usage</H2>
          <Caption>Import and drop in your page — works with or without images.</Caption>
          <pre style={{
            background: 'var(--color-bg-hover)',
            border: '1px solid var(--color-border-tertiary)',
            borderRadius: 8, padding: '20px 24px',
            fontFamily: 'monospace', fontSize: 13,
            color: 'var(--color-content-primary)',
            overflowX: 'auto', lineHeight: 1.65, margin: 0,
          }}>{`import HeroSection from './components/molecules/HeroSection'

// Minimal — uses built-in dealership defaults
<HeroSection />

// Custom slides with images
<HeroSection
  variant="carousel"
  interval={6000}
  slides={[
    {
      id: 1,
      badge: 'New Arrivals',
      title: 'Find Your\\nPerfect Drive',
      subtitle: 'Over 500 vehicles in stock.',
      ctaLabel: 'Browse Inventory',
      ctaSecondaryLabel: 'Book Test Drive',
      image: '/hero-bg.jpg',         // optional photo
      gradient: 'linear-gradient(135deg, #0d1b2a, #1e3a5f)',
    },
  ]}
  onCtaClick={slide => console.log('Primary CTA', slide)}
  onCtaSecondaryClick={slide => console.log('Secondary CTA', slide)}
/>

// Static single hero
<HeroSection variant="image" slides={mySlides} />`}</pre>
        </div>
      </div>

    </div>
  )
}
