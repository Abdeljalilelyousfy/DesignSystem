import { Fragment } from 'react'
import Separator from './Separator'
import Badge from './Badge'

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

export default function SeparatorShowcase() {
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
        <p style={{
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
          color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
          margin: '0 0 8px',
        }}>
          WDS · Atoms
        </p>
        <h1 style={{
          fontFamily: 'Inter', fontSize: 40, fontWeight: 600,
          lineHeight: '48px', letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px',
        }}>
          Separator
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)',
          lineHeight: '24px', margin: 0, maxWidth: 540,
        }}>
          A thin divider line that separates sections of content.
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 2 orientations</strong> (Horizontal · Vertical)
          plus a <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>Labeled</strong> variant.
          Colour: <code style={{ fontFamily: 'ui-monospace,monospace', fontSize: 13 }}>--color-border-tertiary</code> · 1 px.
        </p>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 1. HORIZONTAL */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Horizontal</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)',
          padding: '32px 32px', display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          <div style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-primary)', marginBottom: 16 }}>
            Section above
          </div>
          <Separator />
          <div style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-primary)', marginTop: 16 }}>
            Section below
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 2. VERTICAL */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Vertical</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)',
          padding: '24px 32px',
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, height: 40 }}>
            <span style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-primary)' }}>Left content</span>
            <Separator orientation="vertical" />
            <span style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-primary)' }}>Right content</span>
            <Separator orientation="vertical" />
            <span style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-primary)' }}>Third column</span>
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 3. LABELED */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Labeled</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)',
          padding: '32px 32px', display: 'flex', flexDirection: 'column', gap: 24,
        }}>
          <Separator label="OR" />
          <Separator label="Continue with" />
          <Separator label="Section title" />
          <Separator label="JUNE 2025" />
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 4. CONTEXTUAL — in realistic layouts */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Contextual examples</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

          {/* Menu list */}
          <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)', overflow: 'hidden' }}>
            <div style={{ padding: '12px 16px', fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', borderBottom: '1px solid var(--color-border-tertiary)' }}>
              Dropdown menu
            </div>
            {['Profile', 'Settings', 'Billing'].map(item => (
              <div key={item} style={{ padding: '10px 16px', fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-primary)', cursor: 'pointer' }}>
                {item}
              </div>
            ))}
            <div style={{ padding: '4px 16px' }}>
              <Separator />
            </div>
            {['Help', 'Sign out'].map(item => (
              <div key={item} style={{ padding: '10px 16px', fontFamily: 'Inter', fontSize: 14, color: item === 'Sign out' ? '#b70000' : '#374151', cursor: 'pointer' }}>
                {item}
              </div>
            ))}
          </div>

          {/* Card with sections */}
          <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)', padding: '20px' }}>
            <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 12 }}>
              Order summary
            </div>
            {[
              { label: 'Subtotal', value: '$120.00' },
              { label: 'Shipping', value: '$8.00' },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-primary)' }}>
                <span>{row.label}</span><span>{row.value}</span>
              </div>
            ))}
            <div style={{ padding: '8px 0' }}>
              <Separator />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter', fontSize: 15, fontWeight: 600, color: 'var(--color-content-primary)', padding: '8px 0' }}>
              <span>Total</span><span>$128.00</span>
            </div>
          </div>

          {/* Timeline / chat */}
          <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)', padding: '20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { text: "Hey, how's it going?", time: '10:00 AM' },
              { text: 'Great! Just finished the design.', time: '10:02 AM' },
            ].map((msg, i) => (
              <div key={i} style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-primary)' }}>
                <span>{msg.text}</span>
                <span style={{ color: 'var(--color-content-tertiary)', marginLeft: 8, fontSize: 11 }}>{msg.time}</span>
              </div>
            ))}
            <Separator label="Today" />
            {[
              { text: 'Can you review the PR?', time: '2:15 PM' },
              { text: 'On it!', time: '2:20 PM' },
            ].map((msg, i) => (
              <div key={i} style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-primary)' }}>
                <span>{msg.text}</span>
                <span style={{ color: 'var(--color-content-tertiary)', marginLeft: 8, fontSize: 11 }}>{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Stats row with vertical separators */}
          <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)', padding: '24px 20px' }}>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 16 }}>
              Monthly stats
            </div>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
              {[
                { label: 'Revenue', value: '$24.5k', badge: { color: 'success', label: '+12%' } },
                { label: 'Orders', value: '1,284', badge: { color: 'info', label: '+8%' } },
                { label: 'Customers', value: '842', badge: { color: 'warning', label: '+3%' } },
              ].map((stat, i) => (
                <Fragment key={stat.label}>
                  {i > 0 && (
                    <div style={{ width: 1, background: 'var(--color-border-tertiary)', margin: '0 20px', flexShrink: 0 }} />
                  )}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)', marginBottom: 4 }}>{stat.label}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'var(--color-content-primary)' }}>{stat.value}</span>
                      <Badge color={stat.badge.color} size="sm" dot label={stat.badge.label} />
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 5. USAGE */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
          <pre style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12.5,
            color: 'var(--color-content-primary)', margin: 0, lineHeight: '22px', overflowX: 'auto',
          }}>{`import Separator from '@/components/atoms/Separator'

// Horizontal (default)
<Separator />

// Vertical — place in a flex row, sets align-self: stretch
<Separator orientation="vertical" />

// Labeled — centred text between two lines
<Separator label="OR" />
<Separator label="Continue with" />

// Props
// orientation : 'horizontal' (default) | 'vertical'
// label       : string — shows centred text (horizontal only)`}
          </pre>
        </div>
      </div>

    </div>
  )
}
