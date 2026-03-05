import { useState } from 'react'
import SearchByMake from './SearchByMake'

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
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

function VariantBadge({ label }) {
  return (
    <span style={{
      fontFamily: 'ui-monospace, monospace', fontSize: 11, fontWeight: 600,
      color: 'var(--color-content-brand)', background: 'var(--color-bg-selected)',
      borderRadius: 4, padding: '2px 8px',
    }}>
      {label}
    </span>
  )
}

export default function SearchByMakeShowcase() {
  const [clicked1, setClicked1] = useState(null)
  const [clicked2, setClicked2] = useState(null)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--color-bg-primary)', minHeight: '100vh' }}>

      {/* ── Page header ── */}
      <div style={{ padding: '48px 40px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
          WDS · Molecules
        </p>
        <h1 style={{ fontFamily: 'Inter', fontSize: 40, fontWeight: 600, lineHeight: '48px', letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px' }}>
          Search By Make
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)', lineHeight: '24px', margin: '0 0 20px', maxWidth: 560 }}>
          Full-width website section for browsing automotive brands.
          Two layout variants — an auto-scrolling carousel strip and a paginated multi-row grid.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['2 layout variants', 'Auto-scroll + pause on hover', 'Loops infinitely', 'Arrow navigation', 'Color · Black · White logos', '20 makes'].map(s => (
            <span key={s} style={{
              fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)',
              background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
              borderRadius: 6, padding: '3px 10px',
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════ VARIANT 1: CAROUSEL ═══════════════════════ */}
      <div style={{ padding: '0 40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <SectionLabel>Variant 1</SectionLabel>
          <VariantBadge label='variant="carousel"' />
          <span style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)' }}>
            Auto-scrolling single-row strip — pauses on hover, loops back
          </span>
        </div>
        {clicked1 && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12, padding: '5px 12px', borderRadius: 99, background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)' }}>
            <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)' }}>Selected:</span>
            <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, fontWeight: 600, color: 'var(--color-content-brand)' }}>{clicked1}</span>
          </div>
        )}
      </div>
      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 56 }}>
        <SearchByMake
          variant="carousel"
          onMakeClick={setClicked1}
          onViewAll={() => {}}
        />
      </div>

      {/* ═══════════════════════ VARIANT 2: GRID ═══════════════════════════ */}
      <div style={{ padding: '0 40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <SectionLabel>Variant 2</SectionLabel>
          <VariantBadge label='variant="grid"' />
          <span style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)' }}>
            Paginated multi-row grid — 9 per page with brand name labels and dot indicator
          </span>
        </div>
        {clicked2 && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12, padding: '5px 12px', borderRadius: 99, background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)' }}>
            <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)' }}>Selected:</span>
            <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, fontWeight: 600, color: 'var(--color-content-brand)' }}>{clicked2}</span>
          </div>
        )}
      </div>
      <div style={{ borderTop: '1px solid var(--color-border-tertiary)', borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 56 }}>
        <SearchByMake
          variant="grid"
          onMakeClick={setClicked2}
          onViewAll={() => {}}
        />
      </div>

      {/* ═══════════════════════ USAGE ══════════════════════════════════════ */}
      <div style={{ padding: '0 40px 64px', maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
          <pre style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12.5,
            color: 'var(--color-content-primary)', margin: 0, lineHeight: '22px', overflowX: 'auto',
          }}>{`import SearchByMake from '@/components/molecules/SearchByMake'

// Variant 1 — auto-scrolling carousel (default)
<SearchByMake
  variant="carousel"
  onMakeClick={(make) => console.log(make)}
  onViewAll={() => router.push('/makes')}
/>

// Variant 2 — paginated grid with labels
<SearchByMake
  variant="grid"
  onMakeClick={(make) => console.log(make)}
  onViewAll={() => router.push('/makes')}
/>

// Black logos (monochrome, light backgrounds)
<SearchByMake variant="carousel" logoType="black" />
<SearchByMake variant="grid"     logoType="black" />

// White logos (inverted, dark backgrounds)
<SearchByMake
  variant="carousel"
  logoType="white"
  style={{ background: 'var(--color-bg-inverse)' }}
/>

// Restrict to a specific set of makes
<SearchByMake
  variant="grid"
  makes={['BMW', 'Toyota', 'Ford', 'Honda', 'Tesla', 'Porsche']}
/>

// Props
// variant      carousel | grid           default: carousel
// title        string                    default: "Popular makes"
// description  string
// makes        string[]                  default: all 20 BRAND_NAMES
// logoType     color | black | white     default: color
// onMakeClick  (make: string) => void
// onViewAll    () => void                renders "View all →" link
// style        CSSProperties`}</pre>
        </div>
      </div>

    </div>
  )
}
