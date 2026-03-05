import { useState } from 'react'
import Checkbox from './Checkbox'
import Radio    from './Radio'
import Toggle   from './Toggle'

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
      <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
    </div>
  )
}

function ColLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
      color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase',
      marginBottom: 16,
    }}>
      {children}
    </div>
  )
}

// ─── Reusable state grid ───────────────────────────────────────────────────────

function StateGrid({ renderControl }) {
  const cols = [
    { label: 'Unchecked',        checked: false, disabled: false },
    { label: 'Checked',          checked: true,  disabled: false },
    { label: 'Disabled',         checked: false, disabled: true  },
    { label: 'Disabled Checked', checked: true,  disabled: true  },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      {cols.map(col => (
        <div key={col.label}>
          <ColLabel>{col.label}</ColLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {['sm', 'md', 'lg'].map(size => renderControl({ size, ...col }))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function CheckboxShowcase() {
  // Interactive demo state
  const [plan,   setPlan]   = useState('pro')
  const [perms,  setPerms]  = useState({ email: true, push: false, sms: true })
  const [toggles, setToggles] = useState({ darkMode: true, analytics: false, beta: false })

  const togglePerm = key => setPerms(p => ({ ...p, [key]: !p[key] }))
  const toggleSwitch = key => setToggles(t => ({ ...t, [key]: !t[key] }))

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
          Checkboxes, Radios &amp; Toggles
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)',
          lineHeight: '24px', margin: 0, maxWidth: 640,
        }}>
          Selection controls with
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 3 variants</strong> (Checkbox · Radio · Toggle),
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 3 sizes</strong> and
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 4 states</strong>.
          Check Circle is a circle-shaped checkbox. All use CSS&nbsp;
          <code style={{ fontFamily: 'ui-monospace,monospace', fontSize: 13 }}>:has()</code>
          {' '}for state detection — no JS class toggling.
        </p>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 1. CHECKBOXES */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Checkboxes</SectionLabel>
        <StateGrid
          renderControl={({ size, checked, disabled }) => (
            <Checkbox
              key={size}
              size={size}
              defaultChecked={checked}
              disabled={disabled}
              onChange={() => {}}
            />
          )}
        />
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 2. RADIO BUTTONS */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Radio Buttons</SectionLabel>
        <StateGrid
          renderControl={({ size, checked, disabled }) => (
            <Radio
              key={size}
              size={size}
              defaultChecked={checked}
              disabled={disabled}
              onChange={() => {}}
            />
          )}
        />
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 3. CHECK CIRCLES */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Check Circles</SectionLabel>
        <StateGrid
          renderControl={({ size, checked, disabled }) => (
            <Checkbox
              key={size}
              shape="circle"
              size={size}
              defaultChecked={checked}
              disabled={disabled}
              onChange={() => {}}
            />
          )}
        />
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 4. TOGGLES */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Toggles</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>

          <div>
            <ColLabel>Off</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {['sm', 'md', 'lg'].map(size => (
                <Toggle key={size} size={size} defaultChecked={false} onChange={() => {}} />
              ))}
            </div>
          </div>

          <div>
            <ColLabel>On</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {['sm', 'md', 'lg'].map(size => (
                <Toggle key={size} size={size} defaultChecked onChange={() => {}} />
              ))}
            </div>
          </div>

          <div>
            <ColLabel>Disabled Off</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {['sm', 'md', 'lg'].map(size => (
                <Toggle key={size} size={size} disabled onChange={() => {}} />
              ))}
            </div>
          </div>

          <div>
            <ColLabel>Disabled On</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {['sm', 'md', 'lg'].map(size => (
                <Toggle key={size} size={size} defaultChecked disabled onChange={() => {}} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 5. WITH LABELS (Composite) */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>With Labels</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>

          {/* Checkboxes with label */}
          <div>
            <ColLabel>Checkbox</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Checkbox size="sm" defaultChecked label="Small option" onChange={() => {}} />
              <Checkbox size="md" defaultChecked label="Medium option" onChange={() => {}} />
              <Checkbox size="lg" label="Large option" onChange={() => {}} />
              <Checkbox size="md" disabled label="Disabled option" onChange={() => {}} />
            </div>
          </div>

          {/* Radios with label */}
          <div>
            <ColLabel>Radio</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Radio size="sm" defaultChecked label="Small option" name="radio-demo-sm" onChange={() => {}} />
              <Radio size="md" label="Medium option" name="radio-demo-md" onChange={() => {}} />
              <Radio size="lg" label="Large option" name="radio-demo-lg" onChange={() => {}} />
              <Radio size="md" disabled label="Disabled option" onChange={() => {}} />
            </div>
          </div>

          {/* Toggles with label */}
          <div>
            <ColLabel>Toggle</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Toggle size="sm" defaultChecked label="Small option" onChange={() => {}} />
              <Toggle size="md" label="Medium option" onChange={() => {}} />
              <Toggle size="lg" defaultChecked label="Large option" onChange={() => {}} />
              <Toggle size="md" disabled label="Disabled option" onChange={() => {}} />
            </div>
          </div>

        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 6. WITH SUBTITLE (Composite) */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>With Subtitle</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>

          <div>
            <ColLabel>Checkbox</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Checkbox size="md" defaultChecked label="Email notifications" subtitle="Receive updates via email" onChange={() => {}} />
              <Checkbox size="md" label="SMS alerts" subtitle="Text messages for critical events" onChange={() => {}} />
              <Checkbox size="md" disabled label="Push notifications" subtitle="Currently unavailable" onChange={() => {}} />
            </div>
          </div>

          <div>
            <ColLabel>Radio</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Radio size="md" defaultChecked name="plan-demo" value="starter" label="Starter" subtitle="Up to 5 users, 10 GB storage" onChange={() => {}} />
              <Radio size="md" name="plan-demo" value="pro" label="Pro" subtitle="Up to 20 users, 100 GB storage" onChange={() => {}} />
              <Radio size="md" disabled name="plan-demo" value="enterprise" label="Enterprise" subtitle="Contact sales" onChange={() => {}} />
            </div>
          </div>

          <div>
            <ColLabel>Toggle</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Toggle size="md" defaultChecked label="Dark mode" subtitle="Switch to dark interface" onChange={() => {}} />
              <Toggle size="md" label="Analytics" subtitle="Help improve the product" onChange={() => {}} />
              <Toggle size="md" disabled label="Beta features" subtitle="Not available on your plan" onChange={() => {}} />
            </div>
          </div>

        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 7. INTERACTIVE DEMO */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Interactive</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)',
          padding: '28px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40,
        }}>

          {/* Notification preferences */}
          <div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 16 }}>
              Notification preferences
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Checkbox
                size="md"
                checked={perms.email}
                onChange={() => togglePerm('email')}
                label="Email"
                subtitle="Daily digest and alerts"
              />
              <Checkbox
                size="md"
                checked={perms.push}
                onChange={() => togglePerm('push')}
                label="Push notifications"
                subtitle="Real-time alerts"
              />
              <Checkbox
                size="md"
                checked={perms.sms}
                onChange={() => togglePerm('sms')}
                label="SMS"
                subtitle="Critical alerts only"
              />
            </div>
          </div>

          {/* Plan selector */}
          <div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 16 }}>
              Choose a plan
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { value: 'starter', label: 'Starter',    subtitle: '5 users · 10 GB' },
                { value: 'pro',     label: 'Pro',         subtitle: '20 users · 100 GB' },
                { value: 'team',    label: 'Team',        subtitle: '50 users · 500 GB' },
              ].map(opt => (
                <Radio
                  key={opt.value}
                  size="md"
                  name="plan-interactive"
                  value={opt.value}
                  checked={plan === opt.value}
                  onChange={() => setPlan(opt.value)}
                  label={opt.label}
                  subtitle={opt.subtitle}
                />
              ))}
            </div>
          </div>

          {/* Toggle settings */}
          <div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 16 }}>
              App settings
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Toggle
                size="md"
                checked={toggles.darkMode}
                onChange={() => toggleSwitch('darkMode')}
                label="Dark mode"
                subtitle="Use dark interface theme"
              />
              <Toggle
                size="md"
                checked={toggles.analytics}
                onChange={() => toggleSwitch('analytics')}
                label="Usage analytics"
                subtitle="Help us improve the product"
              />
              <Toggle
                size="md"
                checked={toggles.beta}
                onChange={() => toggleSwitch('beta')}
                label="Beta features"
                subtitle="Early access to new features"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 8. USAGE */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>

          {[
            {
              title: 'Checkbox',
              code: `import Checkbox from '@/components/atoms/Checkbox'

<Checkbox
  size="md"          // sm | md | lg
  shape="square"     // square | circle
  checked={checked}
  onChange={e => setChecked(e.target.checked)}
  label="Accept terms"
  subtitle="Required to continue"
  disabled={false}
/>`,
            },
            {
              title: 'Radio',
              code: `import Radio from '@/components/atoms/Radio'

<Radio
  size="md"          // sm | md | lg
  name="plan"        // groups radios
  value="pro"
  checked={plan === 'pro'}
  onChange={() => setPlan('pro')}
  label="Pro plan"
  subtitle="20 users · 100 GB"
  disabled={false}
/>`,
            },
            {
              title: 'Toggle',
              code: `import Toggle from '@/components/atoms/Toggle'

<Toggle
  size="md"          // sm | md | lg
  checked={enabled}
  onChange={e => setEnabled(e.target.checked)}
  label="Dark mode"
  subtitle="Use dark theme"
  disabled={false}
/>`,
            },
          ].map(item => (
            <div key={item.title} style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
              <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 12 }}>
                {item.title}
              </div>
              <pre style={{
                fontFamily: 'ui-monospace, monospace', fontSize: 11.5,
                color: 'var(--color-content-primary)', margin: 0, overflowX: 'auto', lineHeight: '20px',
                whiteSpace: 'pre',
              }}>{item.code}</pre>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}
