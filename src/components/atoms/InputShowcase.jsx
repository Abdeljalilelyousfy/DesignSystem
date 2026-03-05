import { useState } from 'react'
import {
  EnvelopeSimple, Lock, MagnifyingGlass, User,
  Eye, EyeSlash, CaretDown, Phone,
} from '@phosphor-icons/react'
import Input from './Input'
import TextArea from './TextArea'

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
      marginBottom: 8,
    }}>
      {children}
    </div>
  )
}

// ─── Password toggle sub-example ──────────────────────────────────────────────

function PasswordInput() {
  const [visible, setVisible] = useState(false)
  const [val, setVal] = useState('mysecretpassword')
  return (
    <Input
      label="Password"
      type={visible ? 'text' : 'password'}
      value={val}
      onChange={e => setVal(e.target.value)}
      leftIcon={<Lock size={20} />}
      rightIcon={
        <button
          onClick={() => setVisible(v => !v)}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', color: 'inherit' }}
          aria-label={visible ? 'Hide password' : 'Show password'}
          type="button"
        >
          {visible ? <EyeSlash size={20} /> : <Eye size={20} />}
        </button>
      }
      helperText="Min. 8 characters"
    />
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function InputShowcase() {
  const [email, setEmail]   = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')

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
          Input Fields &amp; Text Area
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)',
          lineHeight: '24px', margin: 0, maxWidth: 640,
        }}>
          Single-line input fields and multi-line text areas with
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 5 interaction states</strong> and
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 3 feedback variants</strong>.
          Focus ring uses double-layer shadow to avoid layout shift. Border radius 12px.
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 1. STATES */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>States</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>

          <div>
            <ColLabel>Active (empty)</ColLabel>
            <Input
              label="Email address"
              placeholder="Enter your email"
              helperText="We'll never share your email"
              leftIcon={<EnvelopeSimple size={20} />}
            />
          </div>

          <div>
            <ColLabel>Filled (has value)</ColLabel>
            <Input
              label="Email address"
              defaultValue="jane@example.com"
              helperText="We'll never share your email"
              leftIcon={<EnvelopeSimple size={20} />}
            />
          </div>

          <div>
            <ColLabel>Disabled</ColLabel>
            <Input
              label="Email address"
              value="jane@example.com"
              helperText="Field is locked"
              leftIcon={<EnvelopeSimple size={20} />}
              disabled
            />
          </div>

          <div>
            <ColLabel>Read only</ColLabel>
            <Input
              label="Account ID"
              value="usr_8f3k92md"
              helperText="Your unique account identifier"
              readOnly
            />
          </div>

          <div>
            <ColLabel>No label / No helper</ColLabel>
            <Input
              placeholder="Search…"
              leftIcon={<MagnifyingGlass size={20} />}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div>
            <ColLabel>With right icon</ColLabel>
            <Input
              label="Country"
              placeholder="Select country"
              leftIcon={<User size={20} />}
              rightIcon={<CaretDown size={20} />}
              helperText="Choose your region"
            />
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 2. FEEDBACK */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Feedback States</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>

          <div>
            <ColLabel>None (default)</ColLabel>
            <Input
              label="Email address"
              defaultValue="jane@example.com"
              helperText="Looks good"
              leftIcon={<EnvelopeSimple size={20} />}
            />
          </div>

          <div>
            <ColLabel>Error</ColLabel>
            <Input
              label="Email address"
              defaultValue="jane@example"
              feedback="error"
              helperText="Enter a valid email address"
              leftIcon={<EnvelopeSimple size={20} />}
            />
          </div>

          <div>
            <ColLabel>Warning</ColLabel>
            <Input
              label="Username"
              defaultValue="jane_doe_99"
              feedback="warning"
              helperText="Username might already be taken"
              leftIcon={<User size={20} />}
            />
          </div>

          <div>
            <ColLabel>Success</ColLabel>
            <Input
              label="Username"
              defaultValue="janedoe"
              feedback="success"
              helperText="Username is available"
              leftIcon={<User size={20} />}
            />
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 3. INTERACTIVE DEMO */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Interactive</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)',
          padding: '28px 32px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
        }}>
          <Input
            label="Email address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            feedback={
              email.length === 0 ? '' :
              email.includes('@') && email.includes('.') ? 'success' :
              email.length > 3 ? 'error' : ''
            }
            helperText={
              email.length === 0 ? 'Start typing to see live validation' :
              email.includes('@') && email.includes('.') ? 'Valid email address' :
              email.length > 3 ? 'Enter a valid email (e.g. name@example.com)' : ''
            }
            leftIcon={<EnvelopeSimple size={20} />}
          />
          <PasswordInput />
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 4. TEXT AREA */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Text Area</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>

          <div>
            <ColLabel>Default</ColLabel>
            <TextArea
              label="Message"
              placeholder="Write your message here…"
              helperText="Max 500 characters"
            />
          </div>

          <div>
            <ColLabel>Filled</ColLabel>
            <TextArea
              label="Message"
              defaultValue="Hi there, I wanted to reach out about the project proposal. Looking forward to your reply."
              helperText="Max 500 characters"
            />
          </div>

          <div>
            <ColLabel>Disabled (View Only)</ColLabel>
            <TextArea
              label="Internal notes"
              value="This account was flagged for manual review on 2024-01-15. Status: pending."
              helperText="Read-only field"
              readOnly
            />
          </div>

          <div>
            <ColLabel>Error</ColLabel>
            <TextArea
              label="Bio"
              defaultValue="x"
              feedback="error"
              helperText="Bio must be at least 20 characters"
            />
          </div>

          <div>
            <ColLabel>Warning</ColLabel>
            <TextArea
              label="Description"
              defaultValue="Almost at the character limit — you have only a few more characters remaining before it is cut off."
              feedback="warning"
              helperText="Approaching 500 character limit"
            />
          </div>

          <div>
            <ColLabel>Success</ColLabel>
            <TextArea
              label="Message"
              defaultValue="Hi team, the new onboarding flow is looking great! I've reviewed all the screens and everything looks aligned with the design spec."
              feedback="success"
              helperText="Message looks good"
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <ColLabel>Interactive Text Area</ColLabel>
            <TextArea
              label="Your message"
              placeholder="Write something…"
              value={message}
              onChange={e => setMessage(e.target.value)}
              helperText={`${message.length} / 500 characters`}
            />
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 5. USAGE */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

          <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 12 }}>
              Input
            </div>
            <pre style={{
              fontFamily: 'ui-monospace, monospace', fontSize: 12,
              color: 'var(--color-content-primary)', margin: 0, overflowX: 'auto', lineHeight: '20px',
            }}>{`import Input from '@/components/atoms/Input'
import { EnvelopeSimple } from '@phosphor-icons/react'

<Input
  label="Email"
  type="email"
  placeholder="name@example.com"
  value={email}
  onChange={e => setEmail(e.target.value)}
  feedback="error"          // '' | error | warning | success
  helperText="Invalid email"
  leftIcon={<EnvelopeSimple size={20} />}
  disabled={false}
/>`}</pre>
          </div>

          <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 12 }}>
              TextArea
            </div>
            <pre style={{
              fontFamily: 'ui-monospace, monospace', fontSize: 12,
              color: 'var(--color-content-primary)', margin: 0, overflowX: 'auto', lineHeight: '20px',
            }}>{`import TextArea from '@/components/atoms/TextArea'

<TextArea
  label="Message"
  placeholder="Write your message…"
  value={message}
  onChange={e => setMessage(e.target.value)}
  rows={4}
  feedback="success"        // '' | error | warning | success
  helperText="Looks great!"
  disabled={false}
  readOnly={false}          // "View Only" state
/>`}</pre>
          </div>

        </div>
      </div>

    </div>
  )
}
