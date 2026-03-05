import '../../styles/spacing.css'

// ─── Data ─────────────────────────────────────────────────────────────────────
// Source: Figma WDS.Foundations: Spacing (node 247-2093)
// 8-point system — base 8px × multiplier

const SCALE = [
  { size: '2XS', multiplier: 0.25, px: 2   },
  { size: 'XS',  multiplier: 0.5,  px: 4   },
  { size: 'S',   multiplier: 1,    px: 8   },
  { size: 'M',   multiplier: 1.5,  px: 12  },
  { size: 'L',   multiplier: 2,    px: 16  },
  { size: 'XL',  multiplier: 3,    px: 24  },
  { size: '2XL', multiplier: 4,    px: 32  },
  { size: '3XL', multiplier: 5,    px: 40  },
  { size: '4XL', multiplier: 6,    px: 48  },
  { size: '5XL', multiplier: 7,    px: 56  },
  { size: '6XL', multiplier: 8,    px: 64  },
  { size: '7XL', multiplier: 9,    px: 72  },
  { size: '8XL', multiplier: 10,   px: 80  },
  { size: '9XL', multiplier: 11,   px: 88  },
  { size: '10XL',multiplier: 12,   px: 96  },
  { size: '11XL',multiplier: 13,   px: 104 },
  { size: '12XL',multiplier: 14,   px: 112 },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ScaleRow({ size, multiplier, px }) {
  const token = `--space-${size.toLowerCase()}`
  const tailwind = `space-${size.toLowerCase()}`
  const maxBarPx = 112
  const barWidth = `${(px / maxBarPx) * 100}%`

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '72px 60px 60px 1fr 180px',
      alignItems: 'center',
      gap: 16,
      padding: '10px 0',
      borderBottom: '1px solid var(--color-border-tertiary)',
    }}>
      {/* Size */}
      <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)' }}>
        {size}
      </div>

      {/* Multiplier */}
      <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)' }}>
        ×{multiplier}
      </div>

      {/* px value */}
      <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)' }}>
        {px}px
      </div>

      {/* Visual bar */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          width: barWidth,
          height: px <= 8 ? 8 : px <= 16 ? 12 : 16,
          minWidth: 2,
          background: '#2b6499',
          borderRadius: 3,
        }} />
      </div>

      {/* Token */}
      <div style={{
        fontFamily: 'Inter', fontSize: 11, fontWeight: 500,
        color: 'var(--color-content-tertiary)', background: 'var(--color-bg-hover)',
        padding: '3px 8px', borderRadius: 5,
        letterSpacing: '0.01em', whiteSpace: 'nowrap',
      }}>
        {token}
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Spacing() {
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
          Spacing
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, fontWeight: 400,
          lineHeight: '24px', color: 'var(--color-content-secondary)', margin: 0, maxWidth: 640,
        }}>
          Spacing is the space between text, images, buttons, and other interface elements
          that ensures visual harmony, readability, and usability.
          We use a global <strong style={{ fontWeight: 600, color: 'var(--color-content-primary)' }}>8-point system</strong> — a baseline of 8px multiplied to give a consistent set of values.
        </p>
      </div>

      {/* ── Scale table ── */}
      <div>
        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{
            fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
            color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6,
            flexShrink: 0,
          }}>
            Scale
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
        </div>

        {/* Column headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '72px 60px 60px 1fr 180px',
          gap: 16,
          padding: '0 0 8px',
          borderBottom: '1px solid var(--color-border-tertiary)',
          marginBottom: 4,
        }}>
          {['Size', 'Multiplier', 'Value', 'Visual', 'CSS Token'].map(h => (
            <div key={h} style={{
              fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
              color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              {h}
            </div>
          ))}
        </div>

        {/* Rows — largest first for visual impact */}
        {[...SCALE].reverse().map(step => (
          <ScaleRow key={step.size} {...step} />
        ))}
      </div>

      {/* ── Usage notes ── */}
      <div style={{ marginTop: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{
            fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
            color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6, flexShrink: 0,
          }}>
            Usage
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {[
            {
              title: 'Component',
              desc: 'Labels and help text sit 8px from the field. Inside the field: 16px horizontal, 12px vertical padding. Elements within the field are separated by 8px.',
              tokens: ['S (8px)', 'M (12px)', 'L (16px)'],
            },
            {
              title: 'Content',
              desc: 'Cards use 16px padding on all sides, 8px between heading and body text, and 16px between body text and author details.',
              tokens: ['S (8px)', 'L (16px)'],
            },
            {
              title: 'Screen',
              desc: 'Side margins of 24px keep content away from screen edges. Content blocks are separated by 16px. Headings and body text are separated by 8px.',
              tokens: ['S (8px)', 'L (16px)', 'XL (24px)'],
            },
          ].map(({ title, desc, tokens }) => (
            <div key={title} style={{
              background: 'var(--color-bg-hover)',
              borderRadius: 10,
              padding: '20px 20px 16px',
              border: '1px solid var(--color-border-tertiary)',
            }}>
              <div style={{
                fontFamily: 'Inter', fontSize: 14, fontWeight: 600,
                color: 'var(--color-content-primary)', marginBottom: 8,
              }}>
                {title}
              </div>
              <div style={{
                fontFamily: 'Inter', fontSize: 13, fontWeight: 400,
                color: 'var(--color-content-secondary)', lineHeight: '20px', marginBottom: 16,
              }}>
                {desc}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {tokens.map(t => (
                  <span key={t} style={{
                    fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
                    color: '#2b6499', background: '#e8f0f7',
                    borderRadius: 5, padding: '3px 8px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
