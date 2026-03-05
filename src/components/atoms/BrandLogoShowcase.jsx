import BrandLogo, { BRAND_NAMES } from './BrandLogo'

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

// ─── Logo grid ─────────────────────────────────────────────────────────────────
function LogoGrid({ type, wrapperStyle }) {
  return (
    <div style={{
      borderRadius: 12,
      padding: '24px 20px',
      border: type === 'white' ? 'none' : '1px solid var(--color-border-tertiary)',
      background: type === 'white' ? 'var(--color-bg-inverse)' : 'var(--color-bg-primary)',
      ...wrapperStyle,
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {BRAND_NAMES.map(make => (
          <BrandLogo key={make} make={make} type={type} size="md" label />
        ))}
      </div>
    </div>
  )
}

// ─── Type comparison card ───────────────────────────────────────────────────────
function TypeCard({ type, label, desc, bgToken }) {
  const DEMO_MAKES = ['BMW', 'Toyota', 'Tesla', 'Ford', 'Porsche']
  return (
    <div style={{
      flex: 1, minWidth: 280,
      borderRadius: 12,
      padding: 20,
      background: bgToken,
      border: type !== 'white' ? '1px solid var(--color-border-tertiary)' : 'none',
    }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{
          fontFamily: 'ui-monospace, monospace', fontSize: 11, fontWeight: 600,
          color: type === 'white' ? 'rgba(255,255,255,0.5)' : 'var(--color-content-tertiary)',
          letterSpacing: '0.08em', marginBottom: 4,
        }}>
          type=&quot;{type}&quot;
        </div>
        <div style={{
          fontFamily: 'Inter', fontSize: 13, fontWeight: 500,
          color: type === 'white' ? 'rgba(255,255,255,0.85)' : 'var(--color-content-primary)',
          marginBottom: 2,
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'Inter', fontSize: 12,
          color: type === 'white' ? 'rgba(255,255,255,0.45)' : 'var(--color-content-tertiary)',
        }}>
          {desc}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {DEMO_MAKES.map(make => (
          <BrandLogo key={make} make={make} type={type} size="sm" />
        ))}
      </div>
    </div>
  )
}

export default function BrandLogoShowcase() {
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
          Brand Logos
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)', lineHeight: '24px', margin: '0 0 20px', maxWidth: 600 }}>
          20 automotive brand logos in 3 color treatments — color (primary), black (monochrome),
          and white (inverted). Sourced from Figma file{' '}
          <code style={{ fontFamily: 'ui-monospace, monospace', fontSize: 14, color: 'var(--color-content-primary)', background: 'var(--color-bg-hover)', padding: '1px 6px', borderRadius: 4 }}>
            GD5hydjyosOejnok6oSlkk
          </code>
          , Makes component set.
        </p>
        {/* Spec chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['20 makes', '3 color types', '5 sizes (xs–xl)', '8px radius', '110×110 default'].map(s => (
            <span key={s} style={{
              fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)',
              background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
              borderRadius: 6, padding: '3px 10px',
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ─────────────── 1. TYPES OVERVIEW ─────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Types</SectionLabel>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <TypeCard
            type="color"
            label="Color"
            desc="Full-color primary logo. Use on light backgrounds."
            bgToken="var(--color-bg-primary)"
          />
          <TypeCard
            type="black"
            label="Black"
            desc="Monochrome dark logo. Use on light or neutral backgrounds."
            bgToken="var(--color-bg-hover)"
          />
          <TypeCard
            type="white"
            label="White"
            desc="Inverted logo. Use on dark or brand-color backgrounds."
            bgToken="var(--color-bg-inverse)"
          />
        </div>
      </div>

      {/* ─────────────── 2. SIZES ─────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Sizes</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)',
          borderRadius: 12, padding: '28px 24px',
          border: '1px solid var(--color-border-tertiary)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
            {[
              { size: 'xs', px: 64 },
              { size: 'sm', px: 80 },
              { size: 'md', px: 110 },
              { size: 'lg', px: 140 },
              { size: 'xl', px: 180 },
            ].map(({ size, px }) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <BrandLogo make="BMW" type="color" size={size} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, fontWeight: 600, color: 'var(--color-content-brand)' }}>
                    {size}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)' }}>
                    {px}px
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────── 3. COLOR LOGOS GRID ─────────────── */}
      <div style={{ marginBottom: 48 }}>
        <SectionLabel>Color logos</SectionLabel>
        <LogoGrid type="color" />
      </div>

      {/* ─────────────── 4. BLACK LOGOS GRID ─────────────── */}
      <div style={{ marginBottom: 48 }}>
        <SectionLabel>Black logos</SectionLabel>
        <LogoGrid type="black" wrapperStyle={{ background: 'var(--color-bg-hover)' }} />
      </div>

      {/* ─────────────── 5. WHITE LOGOS GRID ─────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>White logos</SectionLabel>
        <LogoGrid type="white" />
      </div>

      {/* ─────────────── 6. USAGE ─────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
          <pre style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12.5,
            color: 'var(--color-content-primary)', margin: 0, lineHeight: '22px', overflowX: 'auto',
          }}>{`import BrandLogo, { BRAND_NAMES } from '@/components/atoms/BrandLogo'

// Default — color logo, md size
<BrandLogo make="BMW" />

// Black monochrome (light backgrounds)
<BrandLogo make="Toyota" type="black" />

// White inverted (dark backgrounds)
<BrandLogo make="Tesla" type="white" />

// Sizes: xs (64px) | sm (80px) | md (110px) | lg (140px) | xl (180px)
<BrandLogo make="Ford" size="lg" />

// With label below
<BrandLogo make="Porsche" label />

// Custom border-radius (e.g. circle)
<BrandLogo make="Honda" radius={999} />

// All supported makes
// ${BRAND_NAMES.join(', ')}

// Props
// make    string                   required — one of BRAND_NAMES
// type    color | black | white    default: color
// size    xs | sm | md | lg | xl   default: md
// radius  number                   default: 8 (px)
// label   boolean                  default: false
// style   CSSProperties            override wrapper styles`}</pre>
        </div>
      </div>

    </div>
  )
}
