import '../../styles/shadows.css'

// ─── Data ─────────────────────────────────────────────────────────────────────
// Source: Figma WDS.Foundations: Semantic color — Surface elevation (node 310-6103)

const LEVELS = [
  {
    level:  'L0',
    label:  'Flat',
    desc:   'No elevation. Used for the base page background or elements that sit flush with their container.',
    shadow: 'none',
    css:    '--shadow-l0',
    layers: [],
    lightBg: '#ffffff',
    darkBg:  '#090b0d',
  },
  {
    level:  'L1',
    label:  'Subtle',
    desc:   'Low elevation. Used for cards, dropdowns, and interactive elements that need a gentle lift off the page.',
    shadow: '0 0 4px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.10)',
    css:    '--shadow-l1',
    layers: [
      { label: 'Layer 1', value: '0 0 4px rgba(0,0,0,0.10)' },
      { label: 'Layer 2', value: '0 4px 8px rgba(0,0,0,0.10)' },
    ],
    lightBg: '#ffffff',
    darkBg:  '#1d2229',
  },
  {
    level:  'L2',
    label:  'Elevated',
    desc:   'High elevation. Used for modals, overlays, and floating panels that need significant visual separation.',
    shadow: '0 0 10px rgba(0,0,0,0.08), 0 12px 24px rgba(0,0,0,0.10)',
    css:    '--shadow-l2',
    layers: [
      { label: 'Layer 1', value: '0 0 10px rgba(0,0,0,0.08)' },
      { label: 'Layer 2', value: '0 12px 24px rgba(0,0,0,0.10)' },
    ],
    lightBg: '#ffffff',
    darkBg:  '#323945',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ShadowCard({ level, label, desc, shadow, css, layers, lightBg, darkBg }) {
  return (
    <div style={{ marginBottom: 48 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
        <span style={{
          fontFamily: 'Inter', fontSize: 20, fontWeight: 600,
          color: 'var(--color-content-primary)', letterSpacing: '-0.5px',
        }}>
          {level}
        </span>
        <span style={{
          fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: 'var(--color-content-secondary)',
        }}>
          — {label}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Left: previews */}
        <div style={{ display: 'flex', gap: 16 }}>
          {/* Light mode */}
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              fontFamily: 'Inter', marginBottom: 12,
            }}>
              Light
            </div>
            <div style={{
              background: '#f1f2f4',
              borderRadius: 12,
              padding: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 120,
            }}>
              <div style={{
                width: 140,
                height: 80,
                background: lightBg,
                borderRadius: 10,
                boxShadow: shadow === 'none' ? undefined : shadow,
                border: shadow === 'none' ? '1px solid #e5e7eb' : 'none',
              }} />
            </div>
          </div>

          {/* Dark mode */}
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              fontFamily: 'Inter', marginBottom: 12,
            }}>
              Dark
            </div>
            <div style={{
              background: '#13161b',
              borderRadius: 12,
              padding: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 120,
            }}>
              <div style={{
                width: 140,
                height: 80,
                background: darkBg,
                borderRadius: 10,
                boxShadow: shadow === 'none' ? undefined : shadow,
              }} />
            </div>
          </div>
        </div>

        {/* Right: token details */}
        <div style={{ paddingTop: 28 }}>
          <p style={{
            fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)',
            lineHeight: '20px', margin: '0 0 16px',
          }}>
            {desc}
          </p>

          {/* CSS token */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>
              CSS Token
            </div>
            <code style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: 12, color: 'var(--color-content-tertiary)',
              background: 'var(--color-bg-hover)',
              padding: '3px 8px', borderRadius: 5,
            }}>
              {css}
            </code>
          </div>

          {/* Tailwind */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>
              Tailwind
            </div>
            <code style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: 12, color: 'var(--color-content-tertiary)',
              background: 'var(--color-bg-hover)',
              padding: '3px 8px', borderRadius: 5,
            }}>
              shadow-{level.toLowerCase()}
            </code>
          </div>

          {/* Shadow layers */}
          {layers.length > 0 && (
            <div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
                Layers
              </div>
              {layers.map(({ label: lbl, value }) => (
                <div key={lbl} style={{
                  display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4,
                }}>
                  <span style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)', width: 52, flexShrink: 0 }}>{lbl}</span>
                  <code style={{
                    fontFamily: 'ui-monospace, monospace', fontSize: 11,
                    color: 'var(--color-content-primary)', background: 'var(--color-bg-hover)',
                    border: '1px solid var(--color-border-tertiary)',
                    padding: '2px 6px', borderRadius: 4,
                  }}>
                    {value}
                  </code>
                </div>
              ))}
            </div>
          )}

          {/* Surface backgrounds */}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
              Surface Background
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[{ mode: 'Light', bg: lightBg }, { mode: 'Dark', bg: darkBg }].map(({ mode, bg }) => (
                <div key={mode} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 4,
                    background: bg,
                    border: '1px solid var(--color-border-tertiary)',
                    flexShrink: 0,
                  }} />
                  <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--color-content-secondary)' }}>{bg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: '#f3f4f6', marginTop: 32 }} />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Shadows() {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      background: 'var(--color-bg-primary)',
      minHeight: '100vh',
      padding: '48px 40px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      {/* Page header */}
      <div style={{ marginBottom: 48 }}>
        <p style={{
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
          color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
          margin: '0 0 8px',
        }}>
          WDS · Foundations
        </p>
        <h1 style={{
          fontFamily: 'Inter', fontSize: 40, fontWeight: 600,
          lineHeight: '48px', letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px',
        }}>
          Shadows
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, fontWeight: 400,
          lineHeight: '24px', color: 'var(--color-content-secondary)', margin: 0, maxWidth: 640,
        }}>
          Three surface elevation levels using layered drop shadows.
          All shadows use <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>black at low opacity</strong> and
          work on both light and dark mode surfaces. The surface background colour shifts per level in dark mode.
        </p>
      </div>

      {/* Section label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
        <div style={{
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
          color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
          background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6, flexShrink: 0,
        }}>
          Elevation Scale
        </div>
        <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
      </div>

      {LEVELS.map(level => <ShadowCard key={level.level} {...level} />)}
    </div>
  )
}
