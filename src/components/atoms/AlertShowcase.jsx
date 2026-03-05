import { useState } from 'react'
import Alert from './Alert'

// ─── Data ─────────────────────────────────────────────────────────────────────
// Source: Figma WDS.⚛️ Atoms: Alerts (node 406:12835)

const VARIANTS = ['active', 'error', 'warning', 'success', 'info']

const VARIANT_META = {
  active:  { label: 'Active',  title: 'Alert headline text',    desc: 'This is a neutral system message. Use it for general information that doesn\'t require an action.' },
  error:   { label: 'Error',   title: 'Something went wrong',   desc: 'We couldn\'t process your request. Please check your input and try again, or contact support if the issue persists.' },
  warning: { label: 'Warning', title: 'Proceed with caution',   desc: 'This action may have unintended consequences. Review the details carefully before continuing.' },
  success: { label: 'Success', title: 'Changes saved',          desc: 'Your changes have been saved successfully. They will take effect immediately across all connected services.' },
  info:    { label: 'Info',    title: 'New feature available',  desc: 'We\'ve added improvements to the dashboard. Visit the What\'s New page to explore all the latest updates.' },
}

// ─── Sub-components ────────────────────────────────────────────────────────────

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

function VariantLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
      color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase',
      marginBottom: 8,
    }}>
      {children}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function AlertShowcase() {
  const [dismissed, setDismissed] = useState({})

  function dismiss(key) {
    setDismissed(prev => ({ ...prev, [key]: true }))
  }

  function resetDismissed() {
    setDismissed({})
  }

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
          Alerts
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)',
          lineHeight: '24px', margin: 0, maxWidth: 640,
        }}>
          Full-width contextual messages in <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>5 variants</strong>.
          Each alert supports an icon, headline, description, action link, and dismiss button — all toggleable.
          Sharp corners. Semantic colour tokens per variant.
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 1. VARIANTS */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Variants</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {VARIANTS.map(v => {
            const { label, title, desc } = VARIANT_META[v]
            return (
              <div key={v}>
                <VariantLabel>{label}</VariantLabel>
                <Alert
                  variant={v}
                  title={title}
                  description={desc}
                  showAction
                  showClose
                  onClose={() => {}}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 2. ANATOMY — toggleable parts */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Anatomy</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Title only */}
          <div style={{ marginBottom: 12 }}>
            <VariantLabel>Title only</VariantLabel>
            <Alert variant="info" title="Alert headline text" showClose={false} showIcon={false} />
          </div>

          {/* Title + icon */}
          <div style={{ marginBottom: 12 }}>
            <VariantLabel>Icon + Title</VariantLabel>
            <Alert variant="info" title="Alert headline text" showClose={false} />
          </div>

          {/* Title + description */}
          <div style={{ marginBottom: 12 }}>
            <VariantLabel>Icon + Title + Description</VariantLabel>
            <Alert
              variant="info"
              title="Alert headline text"
              description="Supporting text provides additional context about the alert message and any required actions."
            />
          </div>

          {/* Full — all parts */}
          <div style={{ marginBottom: 12 }}>
            <VariantLabel>Icon + Title + Description + Action + Close</VariantLabel>
            <Alert
              variant="info"
              title="Alert headline text"
              description="Supporting text provides additional context about the alert message and any required actions."
              showAction
              showClose
              onClose={() => {}}
            />
          </div>

          {/* No icon */}
          <div>
            <VariantLabel>No Icon</VariantLabel>
            <Alert
              variant="warning"
              title="Alert headline text"
              description="This alert renders without a left icon. The body content fills the full width."
              showIcon={false}
              showAction
              showClose
              onClose={() => {}}
            />
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 3. SIZES */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Sizes</SectionLabel>
        <div style={{ display: 'flex', gap: 24 }}>

          {/* Desktop */}
          <div style={{ flex: 1 }}>
            <VariantLabel>Desktop — description 16px/24</VariantLabel>
            <Alert
              variant="success"
              size="desktop"
              title="Your file has been uploaded"
              description="Processing usually takes a few seconds. You'll receive a notification once it's ready."
              showAction
              showClose
              onClose={() => {}}
            />
          </div>

          {/* Mobile */}
          <div style={{ flex: 1 }}>
            <VariantLabel>Mobile — description 14px/20</VariantLabel>
            <Alert
              variant="success"
              size="mobile"
              title="Your file has been uploaded"
              description="Processing usually takes a few seconds. You'll receive a notification once it's ready."
              showAction
              showClose
              onClose={() => {}}
            />
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 4. INTERACTIVE DISMISS */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Interactive Dismiss</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)',
          padding: '24px 28px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {VARIANTS.map(v => {
              const { title, desc } = VARIANT_META[v]
              if (dismissed[v]) return null
              return (
                <Alert
                  key={v}
                  variant={v}
                  title={title}
                  description={desc}
                  showAction
                  showClose
                  onClose={() => dismiss(v)}
                />
              )
            })}

            {Object.keys(dismissed).length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 4 }}>
                <span style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)' }}>
                  {Object.keys(dismissed).length} alert{Object.keys(dismissed).length > 1 ? 's' : ''} dismissed
                </span>
                <button
                  onClick={resetDismissed}
                  style={{
                    fontFamily: 'Inter', fontSize: 12, fontWeight: 600,
                    color: 'var(--color-content-tertiary)', background: 'none', border: 'none',
                    cursor: 'pointer', padding: 0, textDecoration: 'underline',
                  }}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 5. USAGE */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
          <pre style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12,
            color: 'var(--color-content-primary)', margin: 0, overflowX: 'auto', lineHeight: '20px',
          }}>{`import Alert from '@/components/atoms/Alert'

<Alert
  variant="error"          // active | error | warning | success | info
  size="desktop"           // desktop | mobile
  title="Something went wrong"
  description="We couldn't process your request."
  showIcon                 // default true
  showClose                // default true
  showAction               // default false
  actionLabel="Learn more"
  onAction={() => router.push('/help')}
  onClose={() => setVisible(false)}
/>`}</pre>
        </div>
      </div>

    </div>
  )
}
