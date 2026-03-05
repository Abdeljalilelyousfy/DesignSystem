import { useState } from 'react'
import {
  Plus, ArrowRight, ArrowLeft, Heart, Check, Trash,
  DownloadSimple, PencilSimple, Star, X,
} from '@phosphor-icons/react'
import Button from './Button'
import IconButton from './IconButton'

// ─── Data ─────────────────────────────────────────────────────────────────────
// Source: Figma WDS.⚛️ Atoms: Buttons (node 2:16)

const VARIANTS = ['primary', 'secondary', 'outline', 'link']
const SIZES    = ['sm', 'md', 'lg', 'xl', '2xl']

// Static colour overrides so we can show hover/pressed states in the showcase
// without requiring mouse interaction.
const STATE_STYLES = {
  primary: {
    default:  {},
    hover:    { background: 'var(--color-bg-brand-hover)' },
    pressed:  { background: 'var(--color-bg-brand-pressed)' },
  },
  secondary: {
    default:  {},
    hover:    { background: 'var(--color-bg-brand-hover)' },
    pressed:  { background: 'var(--color-bg-brand-pressed)' },
  },
  outline: {
    default:  {},
    hover:    { background: 'var(--color-bg-hover)' },
    pressed:  { background: 'var(--color-bg-pressed)' },
  },
  link: {
    default:  {},
    hover:    { color: 'var(--color-content-brand-hover)', textDecoration: 'underline' },
    pressed:  { color: 'var(--color-content-brand-pressed)', textDecoration: 'underline' },
  },
}

const ICON_BTN_VARIANTS = ['filled', 'outline']
const ICON_BTN_SIZES    = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']

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

function ColLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
      color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase',
      marginBottom: 12,
    }}>
      {children}
    </div>
  )
}

function RowLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'Inter', fontSize: 12, fontWeight: 500,
      color: 'var(--color-content-secondary)', width: 80, flexShrink: 0,
      display: 'flex', alignItems: 'center',
    }}>
      {children}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ButtonShowcase() {
  const [loading, setLoading] = useState(false)

  function triggerLoading() {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
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
          Buttons &amp; Icon Buttons
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)',
          lineHeight: '24px', margin: 0, maxWidth: 640,
        }}>
          Pill-shaped buttons in <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>4 variants</strong> ×{' '}
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>5 sizes</strong>.
          Icon-only buttons in <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>7 sizes</strong>.
          All states handled via native CSS pseudo-classes.
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 1. VARIANTS */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Variants</SectionLabel>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          {VARIANTS.map(v => (
            <div key={v} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
              <Button variant={v} size="md">Button</Button>
              <span style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)', textTransform: 'capitalize' }}>
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 2. SIZES */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Sizes</SectionLabel>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {SIZES.map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
              <Button variant="primary" size={s}>Button</Button>
              <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--color-content-tertiary)' }}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 3. STATES */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>States</SectionLabel>

        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
          <div />
          {VARIANTS.map(v => <ColLabel key={v}>{v}</ColLabel>)}
        </div>

        {/* Default */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(4, 1fr)', gap: 16, alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 16 }}>
          <RowLabel>Default</RowLabel>
          {VARIANTS.map(v => <Button key={v} variant={v} size="md">Button</Button>)}
        </div>

        {/* Hover */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(4, 1fr)', gap: 16, alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 16 }}>
          <RowLabel>Hover</RowLabel>
          {VARIANTS.map(v => (
            <Button key={v} variant={v} size="md" style={STATE_STYLES[v].hover}>
              Button
            </Button>
          ))}
        </div>

        {/* Pressed */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(4, 1fr)', gap: 16, alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 16 }}>
          <RowLabel>Pressed</RowLabel>
          {VARIANTS.map(v => (
            <Button key={v} variant={v} size="md" style={STATE_STYLES[v].pressed}>
              Button
            </Button>
          ))}
        </div>

        {/* Focused */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(4, 1fr)', gap: 16, alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 16 }}>
          <RowLabel>Focused</RowLabel>
          {VARIANTS.map(v => (
            <Button
              key={v}
              variant={v}
              size="md"
              style={{
                ...(STATE_STYLES[v].pressed),
                outline: '3px solid var(--color-border-focus)',
                outlineOffset: '2px',
              }}
            >
              Button
            </Button>
          ))}
        </div>

        {/* Disabled */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(4, 1fr)', gap: 16, alignItems: 'center' }}>
          <RowLabel>Disabled</RowLabel>
          {VARIANTS.map(v => <Button key={v} variant={v} size="md" disabled>Button</Button>)}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 4. ICON VARIANTS */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Icon Variants</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Left icon */}
          <div>
            <ColLabel>Left Icon</ColLabel>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              {VARIANTS.map(v => (
                <Button key={v} variant={v} size="md" leftIcon={<Plus weight="bold" />}>
                  Button
                </Button>
              ))}
            </div>
          </div>

          {/* Right icon */}
          <div>
            <ColLabel>Right Icon</ColLabel>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              {VARIANTS.map(v => (
                <Button key={v} variant={v} size="md" rightIcon={<ArrowRight weight="bold" />}>
                  Button
                </Button>
              ))}
            </div>
          </div>

          {/* Both icons */}
          <div>
            <ColLabel>Both Icons</ColLabel>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              {VARIANTS.map(v => (
                <Button key={v} variant={v} size="md" leftIcon={<Heart weight="bold" />} rightIcon={<ArrowRight weight="bold" />}>
                  Button
                </Button>
              ))}
            </div>
          </div>

          {/* Loading */}
          <div>
            <ColLabel>Loading</ColLabel>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              {VARIANTS.map(v => (
                <Button key={v} variant={v} size="md" loading>
                  Button
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 5. INTERACTIVE LOADING DEMO */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Interactive Loading</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)',
          padding: '24px 28px', display: 'flex', gap: 12, alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <Button variant="primary" size="md" loading={loading} onClick={triggerLoading}>
            {loading ? 'Saving…' : 'Save changes'}
          </Button>
          <Button variant="outline" size="md" loading={loading} onClick={triggerLoading}>
            {loading ? 'Uploading…' : 'Upload file'}
          </Button>
          {!loading && (
            <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)' }}>
              Click either button to trigger 2-second loading
            </span>
          )}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 6. ICON BUTTONS */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Icon Buttons</SectionLabel>

        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', gap: 12, marginBottom: 16 }}>
          <div />
          {ICON_BTN_SIZES.map(s => <ColLabel key={s}>{s}</ColLabel>)}
        </div>

        {/* Filled */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', gap: 12, alignItems: 'center', paddingBottom: 20, borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 20 }}>
          <RowLabel>Filled</RowLabel>
          {ICON_BTN_SIZES.map(s => (
            <IconButton key={s} variant="filled" size={s} label={`Plus ${s}`} icon={<Plus />} />
          ))}
        </div>

        {/* Outline */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', gap: 12, alignItems: 'center', paddingBottom: 20, borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 20 }}>
          <RowLabel>Outline</RowLabel>
          {ICON_BTN_SIZES.map(s => (
            <IconButton key={s} variant="outline" size={s} label={`Plus ${s}`} icon={<Plus />} />
          ))}
        </div>

        {/* Disabled */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', gap: 12, alignItems: 'center' }}>
          <RowLabel>Disabled</RowLabel>
          {ICON_BTN_SIZES.map(s => (
            <IconButton key={s} variant="filled" size={s} label={`Plus ${s}`} icon={<Plus />} disabled />
          ))}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* 7. USAGE */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

          {/* Button */}
          <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 12 }}>
              Button
            </div>
            <pre style={{
              fontFamily: 'ui-monospace, monospace', fontSize: 12,
              color: 'var(--color-content-primary)', background: 'var(--color-bg-primary)', border: '1px solid var(--color-border-tertiary)',
              borderRadius: 6, padding: '12px 14px', margin: 0, overflowX: 'auto',
              lineHeight: '20px',
            }}>{`import Button from '@/components/atoms/Button'
import { ArrowRight } from '@phosphor-icons/react'

<Button
  variant="primary"   // primary | secondary | outline | link
  size="md"           // sm | md | lg | xl | 2xl
  rightIcon={<ArrowRight weight="bold" />}
  onClick={handleClick}
>
  Continue
</Button>`}</pre>
          </div>

          {/* IconButton */}
          <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 12 }}>
              IconButton
            </div>
            <pre style={{
              fontFamily: 'ui-monospace, monospace', fontSize: 12,
              color: 'var(--color-content-primary)', background: 'var(--color-bg-primary)', border: '1px solid var(--color-border-tertiary)',
              borderRadius: 6, padding: '12px 14px', margin: 0, overflowX: 'auto',
              lineHeight: '20px',
            }}>{`import IconButton from '@/components/atoms/IconButton'
import { Plus } from '@phosphor-icons/react'

<IconButton
  variant="filled"   // filled | outline
  size="md"          // 2xs | xs | sm | md | lg | xl | 2xl
  icon={<Plus />}
  label="Add item"   // required for accessibility
  onClick={handleClick}
/>`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
