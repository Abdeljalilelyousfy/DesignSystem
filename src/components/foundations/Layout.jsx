import '../../styles/layout.css'

// ─── Data ─────────────────────────────────────────────────────────────────────
// Source: Figma WDS.Foundations: Layout and Breakpoints (node 254-6897)

const BREAKPOINTS = [
  {
    name:    'Desktop',
    label:   'XL',
    width:   1440,
    columns: 12,
    gutter:  16,
    margin:  80,
    colPx:   92,
    device:  'Desktop',
    cssVar:  '--breakpoint-xl',
    tailwind: 'xl',
  },
  {
    name:    'Tablet Landscape',
    label:   'L',
    width:   1024,
    columns: 12,
    gutter:  16,
    margin:  40,
    colPx:   null,
    device:  'Tablet Landscape',
    cssVar:  '--breakpoint-l',
    tailwind: 'l',
  },
  {
    name:    'Tablet Portrait',
    label:   'M',
    width:   768,
    columns: 8,
    gutter:  16,
    margin:  32,
    colPx:   74,
    device:  'Tablet Portrait',
    cssVar:  '--breakpoint-m',
    tailwind: 'm',
  },
  {
    name:    'Mobile',
    label:   'S',
    width:   393,
    columns: 4,
    gutter:  16,
    margin:  16,
    colPx:   78,
    device:  'Mobile',
    cssVar:  '--breakpoint-s',
    tailwind: 's',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ColumnPreview({ columns, gutter, margin, totalWidth }) {
  // Render as a mini visual strip
  const PREVIEW_W = 280
  const scale = PREVIEW_W / totalWidth

  const innerW   = PREVIEW_W - margin * 2 * scale
  const colW     = (innerW - (columns - 1) * gutter * scale) / columns

  return (
    <div style={{
      width: PREVIEW_W,
      height: 32,
      position: 'relative',
      background: 'var(--color-bg-hover)',
      borderRadius: 6,
      overflow: 'hidden',
      border: '1px solid var(--color-border-tertiary)',
      display: 'flex',
      alignItems: 'stretch',
    }}>
      {/* Left margin */}
      <div style={{ width: margin * scale, flexShrink: 0, background: '#e0e7ff', opacity: 0.5 }} />
      {/* Columns */}
      <div style={{ display: 'flex', flex: 1, gap: gutter * scale }}>
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} style={{
            flex: 1,
            background: '#6366f1',
            opacity: 0.18,
            borderRadius: 2,
          }} />
        ))}
      </div>
      {/* Right margin */}
      <div style={{ width: margin * scale, flexShrink: 0, background: '#e0e7ff', opacity: 0.5 }} />
    </div>
  )
}

function BreakpointRow({ bp }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 56px 80px 64px 56px 56px 1fr',
      alignItems: 'center',
      gap: 16,
      padding: '12px 0',
      borderBottom: '1px solid var(--color-border-tertiary)',
    }}>
      {/* Device */}
      <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)' }}>
        {bp.name}
      </div>
      {/* Label */}
      <div style={{
        fontFamily: 'Inter', fontSize: 12, fontWeight: 700,
        color: 'var(--color-content-tertiary)', background: 'var(--color-bg-hover)',
        padding: '2px 8px', borderRadius: 5, textAlign: 'center',
        display: 'inline-block',
      }}>
        {bp.label}
      </div>
      {/* Width */}
      <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)' }}>
        {bp.width}px
      </div>
      {/* Columns */}
      <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)' }}>
        {bp.columns} col
      </div>
      {/* Gutter */}
      <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)' }}>
        {bp.gutter}px
      </div>
      {/* Margin */}
      <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)' }}>
        {bp.margin}px
      </div>
      {/* Visual */}
      <ColumnPreview
        columns={bp.columns}
        gutter={bp.gutter}
        margin={bp.margin}
        totalWidth={bp.width}
      />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Layout() {
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
          Layout &amp; Breakpoints
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, fontWeight: 400,
          lineHeight: '24px', color: 'var(--color-content-secondary)', margin: 0, maxWidth: 640,
        }}>
          A set of vertical columns that allow designers and engineers to define layouts in a
          structured way. Uses a responsive <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>12-column grid</strong> for Desktop and Tablet Landscape,
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 8 columns</strong> for Tablet Portrait, and
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 4 columns</strong> for Mobile.
          All grids share a <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>16px gutter</strong>.
        </p>
      </div>

      {/* ── Breakpoints table ── */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{
            fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
            color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6, flexShrink: 0,
          }}>
            Breakpoints
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
        </div>

        {/* Headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '160px 56px 80px 64px 56px 56px 1fr',
          gap: 16,
          padding: '0 0 8px',
          borderBottom: '1px solid var(--color-border-tertiary)',
          marginBottom: 4,
        }}>
          {['Device', 'Label', 'Width', 'Columns', 'Gutter', 'Margin', 'Grid Preview'].map(h => (
            <div key={h} style={{
              fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
              color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              {h}
            </div>
          ))}
        </div>

        {BREAKPOINTS.map(bp => <BreakpointRow key={bp.name} bp={bp} />)}
      </div>

      {/* ── Grid anatomy ── */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{
            fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
            color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6, flexShrink: 0,
          }}>
            Grid Anatomy
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { label: 'Column', desc: 'The vertical building blocks. Each column has 8px padding on both sides, creating a consistent 16px gutter between adjacent columns.', color: 'var(--color-content-tertiary)' },
            { label: 'Gutter', desc: '16px gap between every column, consistent across all breakpoints. Formed by the 8px padding on each adjacent column side.', color: '#f59e0b' },
            { label: 'Margin', desc: 'The outer padding between the screen edge and the first/last column. 80px on Desktop, 40px on Tablet Landscape, 32px on Tablet Portrait, 16px on Mobile.', color: '#10b981' },
            { label: 'Content area', desc: 'The active layout space between the margins. Content should be placed within the column grid and never overflow into the margins.', color: '#ef4444' },
          ].map(({ label, desc, color }) => (
            <div key={label} style={{
              padding: '16px 20px',
              background: 'var(--color-bg-hover)',
              borderRadius: 10,
              border: '1px solid var(--color-border-tertiary)',
              display: 'flex',
              gap: 12,
            }}>
              <div style={{
                width: 4, borderRadius: 4, background: color, flexShrink: 0,
              }} />
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 4 }}>
                  {label}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)', lineHeight: '20px' }}>
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
