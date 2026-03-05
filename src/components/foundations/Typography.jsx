import '../../styles/typography.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const WEB_HEADINGS = [
  { token: 'Web/Heading/5XL/Semibold', label: 'Heading 5XL', family: 'Roboto', size: 72, weight: 600, lh: 80,  ls: -1   },
  { token: 'Web/Heading/4XL/Semibold', label: 'Heading 4XL', family: 'Roboto', size: 64, weight: 600, lh: 72,  ls: -1   },
  { token: 'Web/Heading/3XL/Semibold', label: 'Heading 3XL', family: 'Roboto', size: 56, weight: 600, lh: 64,  ls: -1   },
  { token: 'Web/Heading/2XL/Semibold', label: 'Heading 2XL', family: 'Inter',  size: 48, weight: 600, lh: 56,  ls: -1   },
  { token: 'Web/Heading/XL/Semibold',  label: 'Heading XL',  family: 'Roboto', size: 40, weight: 600, lh: 48,  ls: -1   },
  { token: 'Web/Heading/L/Semibold',   label: 'Heading L',   family: 'Roboto', size: 32, weight: 600, lh: 40,  ls: -1   },
  { token: 'Web/Heading/M/Semibold',   label: 'Heading M',   family: 'Roboto', size: 24, weight: 600, lh: 32,  ls: -0.5 },
  { token: 'Web/Heading/S/Semibold',   label: 'Heading S',   family: 'Roboto', size: 20, weight: 600, lh: 28,  ls: -0.5 },
  { token: 'Web/Heading/XS/Semibold',  label: 'Heading XS',  family: 'Roboto', size: 16, weight: 600, lh: 24,  ls: -0.5 },
  { token: 'Web/Heading/2XS/Semibold', label: 'Heading 2XS', family: 'Roboto', size: 14, weight: 600, lh: 20,  ls: 0    },
]

const WEB_TEXT = [
  { token: 'Web/Text/XL/Regular',   label: 'Text XL',  family: 'Inter', size: 18, weight: 400, lh: 26, ls: 0 },
  { token: 'Web/Text/XL/Semibold',  label: 'Text XL',  family: 'Inter', size: 18, weight: 600, lh: 26, ls: 0 },
  { token: 'Web/Text/L/Regular',    label: 'Text L',   family: 'Inter', size: 16, weight: 400, lh: 24, ls: 0 },
  { token: 'Web/Text/L/Semibold',   label: 'Text L',   family: 'Inter', size: 16, weight: 600, lh: 24, ls: 0 },
  { token: 'Web/Text/M/Regular',    label: 'Text M',   family: 'Inter', size: 14, weight: 400, lh: 20, ls: 0 },
  { token: 'Web/Text/M/Semibold',   label: 'Text M',   family: 'Inter', size: 14, weight: 600, lh: 20, ls: 0 },
  { token: 'Web/Text/S/Regular',    label: 'Text S',   family: 'Inter', size: 12, weight: 400, lh: 16, ls: 0 },
  { token: 'Web/Text/S/Semibold',   label: 'Text S',   family: 'Inter', size: 12, weight: 600, lh: 16, ls: 0 },
  { token: 'Web/Text/XS/Regular',   label: 'Text XS',  family: 'Inter', size: 10, weight: 400, lh: 14, ls: 0 },
  { token: 'Web/Text/XS/Semibold',  label: 'Text XS',  family: 'Inter', size: 10, weight: 600, lh: 14, ls: 0 },
]

const TABLET_HEADINGS = [
  { token: 'Tablet/Heading/5XL/Semibold', label: 'Heading 5XL', family: 'Inter', size: 64, weight: 600, lh: 72, ls: -1   },
  { token: 'Tablet/Heading/4XL/Semibold', label: 'Heading 4XL', family: 'Inter', size: 56, weight: 600, lh: 72, ls: -1   },
  { token: 'Tablet/Heading/3XL/Semibold', label: 'Heading 3XL', family: 'Inter', size: 48, weight: 600, lh: 64, ls: -1   },
  { token: 'Tablet/Heading/2XL/Semibold', label: 'Heading 2XL', family: 'Inter', size: 40, weight: 600, lh: 56, ls: -1   },
  { token: 'Tablet/Heading/XL/Semibold',  label: 'Heading XL',  family: 'Inter', size: 32, weight: 600, lh: 48, ls: -1   },
  { token: 'Tablet/Heading/L/Semibold',   label: 'Heading L',   family: 'Inter', size: 28, weight: 600, lh: 40, ls: -0.5 },
  { token: 'Tablet/Heading/M/Semibold',   label: 'Heading M',   family: 'Inter', size: 20, weight: 600, lh: 32, ls: -0.5 },
  { token: 'Tablet/Heading/S/Semibold',   label: 'Heading S',   family: 'Inter', size: 18, weight: 600, lh: 28, ls: -0.5 },
  { token: 'Tablet/Heading/XS/Semibold',  label: 'Heading XS',  family: 'Inter', size: 16, weight: 600, lh: 24, ls: -0.5 },
  { token: 'Tablet/Heading/2XS/Semibold', label: 'Heading 2XS', family: 'Inter', size: 14, weight: 600, lh: 20, ls: 0    },
]

const TABLET_TEXT = [
  { token: 'Tablet/Text/XL/Regular',  label: 'Text XL', family: 'Inter', size: 18, weight: 400, lh: 26, ls: 0 },
  { token: 'Tablet/Text/XL/Semibold', label: 'Text XL', family: 'Inter', size: 18, weight: 600, lh: 26, ls: 0 },
  { token: 'Tablet/Text/L/Regular',   label: 'Text L',  family: 'Inter', size: 16, weight: 400, lh: 24, ls: 0 },
  { token: 'Tablet/Text/L/Semibold',  label: 'Text L',  family: 'Inter', size: 16, weight: 600, lh: 24, ls: 0 },
  { token: 'Tablet/Text/M/Regular',   label: 'Text M',  family: 'Inter', size: 14, weight: 400, lh: 20, ls: 0 },
  { token: 'Tablet/Text/M/Semibold',  label: 'Text M',  family: 'Inter', size: 14, weight: 600, lh: 20, ls: 0 },
  { token: 'Tablet/Text/S/Regular',   label: 'Text S',  family: 'Inter', size: 12, weight: 400, lh: 16, ls: 0 },
  { token: 'Tablet/Text/S/Semibold',  label: 'Text S',  family: 'Inter', size: 12, weight: 600, lh: 16, ls: 0 },
  { token: 'Tablet/Text/XS/Regular',  label: 'Text XS', family: 'Inter', size: 10, weight: 400, lh: 14, ls: 0 },
  { token: 'Tablet/Text/XS/Semibold', label: 'Text XS', family: 'Inter', size: 10, weight: 600, lh: 14, ls: 0 },
]

const MOBILE_HEADINGS = [
  { token: 'Mobile/Heading/5XL/Semibold', label: 'Heading 5XL', family: 'Inter', size: 48, weight: 600, lh: 64, ls: -1   },
  { token: 'Mobile/Heading/4XL/Semibold', label: 'Heading 4XL', family: 'Inter', size: 40, weight: 600, lh: 56, ls: -1   },
  { token: 'Mobile/Heading/3XL/Semibold', label: 'Heading 3XL', family: 'Inter', size: 32, weight: 600, lh: 48, ls: -1   },
  { token: 'Mobile/Heading/2XL/Semibold', label: 'Heading 2XL', family: 'Inter', size: 28, weight: 600, lh: 40, ls: -1   },
  { token: 'Mobile/Heading/XL/Semibold',  label: 'Heading XL',  family: 'Inter', size: 24, weight: 600, lh: 36, ls: -1   },
  { token: 'Mobile/Heading/L/Semibold',   label: 'Heading L',   family: 'Inter', size: 20, weight: 600, lh: 32, ls: -0.5 },
  { token: 'Mobile/Heading/M/Semibold',   label: 'Heading M',   family: 'Inter', size: 18, weight: 600, lh: 26, ls: -0.5 },
  { token: 'Mobile/Heading/S/Semibold',   label: 'Heading S',   family: 'Inter', size: 16, weight: 600, lh: 24, ls: -0.5 },
  { token: 'Mobile/Heading/XS/Semibold',  label: 'Heading XS',  family: 'Inter', size: 12, weight: 600, lh: 16, ls: -0.5 },
  { token: 'Mobile/Heading/2XS/Semibold', label: 'Heading 2XS', family: 'Inter', size: 10, weight: 600, lh: 14, ls: 0    },
]

const MOBILE_TEXT = [
  { token: 'Mobile/Text/XL/Regular',  label: 'Text XL', family: 'Inter', size: 16, weight: 400, lh: 24, ls: 0 },
  { token: 'Mobile/Text/XL/Semibold', label: 'Text XL', family: 'Inter', size: 16, weight: 600, lh: 24, ls: 0 },
  { token: 'Mobile/Text/L/Regular',   label: 'Text L',  family: 'Inter', size: 14, weight: 400, lh: 20, ls: 0 },
  { token: 'Mobile/Text/L/Semibold',  label: 'Text L',  family: 'Inter', size: 14, weight: 600, lh: 20, ls: 0 },
  { token: 'Mobile/Text/M/Regular',   label: 'Text M',  family: 'Inter', size: 12, weight: 400, lh: 16, ls: 0 },
  { token: 'Mobile/Text/M/Semibold',  label: 'Text M',  family: 'Inter', size: 12, weight: 600, lh: 16, ls: 0 },
  { token: 'Mobile/Text/S/Regular',   label: 'Text S',  family: 'Inter', size: 10, weight: 400, lh: 14, ls: 0 },
  { token: 'Mobile/Text/S/Semibold',  label: 'Text S',  family: 'Inter', size: 10, weight: 600, lh: 14, ls: 0 },
  { token: 'Mobile/Text/XS/Regular',  label: 'Text XS', family: 'Inter', size: 10, weight: 400, lh: 14, ls: 0 },
  { token: 'Mobile/Text/XS/Semibold', label: 'Text XS', family: 'Inter', size: 10, weight: 600, lh: 14, ls: 0 },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function Meta({ family, size, weight, lh, ls }) {
  const weightLabel = weight === 600 ? 'Semibold' : 'Regular'
  const lsLabel = ls === 0 ? '0px' : `${ls}px`
  return (
    <span style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 400, color: 'var(--color-content-secondary)', lineHeight: '16px' }}>
      {family} · {weightLabel} · {size}/{lh} · {lsLabel}
    </span>
  )
}

function TypeRow({ item, isHeading }) {
  const preview = isHeading ? item.label : `The quick brown fox jumps over the lazy dog`
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '12px 0', borderBottom: '1px solid var(--color-border-tertiary)' }}>
      {/* Token name */}
      <div style={{ width: 260, flexShrink: 0 }}>
        <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 2 }}>
          {item.token.split('/').slice(1).join('/')}
        </div>
        <Meta {...item} />
      </div>
      {/* Preview */}
      <div
        style={{
          fontFamily: item.family,
          fontSize:   item.size,
          fontWeight: item.weight,
          lineHeight: `${item.lh}px`,
          letterSpacing: `${item.ls}px`,
          color: 'var(--color-content-primary)',
          flex: 1,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {preview}
      </div>
    </div>
  )
}

function Section({ title, items, isHeading }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{
        fontFamily: 'Inter', fontSize: 18, fontWeight: 600,
        color: 'var(--color-content-primary)', margin: '0 0 4px',
        letterSpacing: '-0.5px', lineHeight: '28px',
      }}>
        {title}
      </h2>
      <div style={{ height: 1, background: 'var(--color-border-tertiary)', margin: '12px 0 0' }} />
      {items.map(item => (
        <TypeRow key={item.token} item={item} isHeading={isHeading} />
      ))}
    </div>
  )
}

function Breakpoint({ label, headings, text }) {
  return (
    <div style={{ marginBottom: 80 }}>
      {/* Breakpoint header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32,
      }}>
        <div style={{
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
          color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
          background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6,
        }}>
          {label}
        </div>
        <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
      </div>
      <Section title="Headings" items={headings} isHeading />
      <Section title="Text"     items={text}     isHeading={false} />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Typography() {
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
      <div style={{ marginBottom: 56 }}>
        <p style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
          WDS · Foundations
        </p>
        <h1 style={{ fontFamily: 'Inter', fontSize: 40, fontWeight: 600, lineHeight: '48px', letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px' }}>
          Typography
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 400, lineHeight: '24px', color: 'var(--color-content-secondary)', margin: 0 }}>
          Font families: <strong style={{ fontWeight: 600, color: 'var(--color-content-primary)' }}>Roboto</strong> (web headings 5XL–2XS, except 2XL) &amp;&nbsp;
          <strong style={{ fontWeight: 600, color: 'var(--color-content-primary)' }}>Inter</strong> (text, tablet, mobile).
          Weights: Regular (400) · Semibold (600).
        </p>
      </div>

      <Breakpoint
        label="Web — Desktop"
        headings={WEB_HEADINGS}
        text={WEB_TEXT}
      />
      <Breakpoint
        label="Tablet"
        headings={TABLET_HEADINGS}
        text={TABLET_TEXT}
      />
      <Breakpoint
        label="Mobile"
        headings={MOBILE_HEADINGS}
        text={MOBILE_TEXT}
      />
    </div>
  )
}
