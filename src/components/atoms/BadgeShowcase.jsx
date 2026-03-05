import Badge from './Badge'
import {
  CheckCircle, XCircle, Warning, Info, BellSimple,
  Star, Lightning, Sparkle, ShieldCheck, Tag, Truck,
} from '@phosphor-icons/react'

// ─── Layout helpers ────────────────────────────────────────────────────────────

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
      marginBottom: 14,
    }}>
      {children}
    </div>
  )
}

// All 5 colours
const COLORS = ['primary', 'error', 'warning', 'success', 'info']

const COLOR_LABELS = {
  primary: 'Primary',
  error:   'Error',
  warning: 'Warning',
  success: 'Success',
  info:    'Info',
}

// ─── Main ──────────────────────────────────────────────────────────────────────

export default function BadgeShowcase() {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      background: 'var(--color-bg-primary)',
      minHeight:  '100vh',
      padding:    '48px 40px',
      maxWidth:   1200,
      margin:     '0 auto',
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
          Tags &amp; Badges
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)',
          lineHeight: '24px', margin: 0, maxWidth: 640,
        }}>
          Compact labels for categorisation, status, and metadata.
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 4 types</strong> (Simple · Dot · Icon · Avatar),
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 3 sizes</strong> and
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 5 colours</strong>.
          Always pill-shaped (border-radius: 999px).
        </p>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 1. SIMPLE — all colours × all sizes */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Simple</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
          {COLORS.map(color => (
            <div key={color}>
              <ColLabel>{COLOR_LABELS[color]}</ColLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <Badge color={color} size="lg" label="Label" />
                <Badge color={color} size="md" label="Label" />
                <Badge color={color} size="sm" label="Label" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 2. DOT — all colours × all sizes */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Dot</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
          {COLORS.map(color => (
            <div key={color}>
              <ColLabel>{COLOR_LABELS[color]}</ColLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <Badge color={color} size="lg" dot label="Label" />
                <Badge color={color} size="md" dot label="Label" />
                <Badge color={color} size="sm" dot label="Label" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 3. ICON — all colours × all sizes */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Icon</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
          {[
            { color: 'primary', icon: <Tag /> },
            { color: 'error',   icon: <XCircle /> },
            { color: 'warning', icon: <Warning /> },
            { color: 'success', icon: <CheckCircle /> },
            { color: 'info',    icon: <Info /> },
          ].map(({ color, icon }) => (
            <div key={color}>
              <ColLabel>{COLOR_LABELS[color]}</ColLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <Badge color={color} size="lg" icon={icon} label="Label" />
                <Badge color={color} size="md" icon={icon} label="Label" />
                <Badge color={color} size="sm" icon={icon} label="Label" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 4. AVATAR — all colours × all sizes */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Avatar</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
          {COLORS.map(color => (
            <div key={color}>
              <ColLabel>{COLOR_LABELS[color]}</ColLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <Badge color={color} size="lg" avatar="JD" label="John Doe" />
                <Badge color={color} size="md" avatar="AB" label="Label" />
                <Badge color={color} size="sm" avatar="XY" label="Label" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 5. SIZES COMPARISON */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Sizes</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>

          <div>
            <ColLabel>Large — 32px</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
              <Badge size="lg" color="primary" label="Simple" />
              <Badge size="lg" color="success" dot label="Dot" />
              <Badge size="lg" color="info" icon={<Info />} label="Icon" />
              <Badge size="lg" color="error" avatar="KL" label="Avatar" />
            </div>
          </div>

          <div>
            <ColLabel>Medium — 28px</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
              <Badge size="md" color="primary" label="Simple" />
              <Badge size="md" color="success" dot label="Dot" />
              <Badge size="md" color="info" icon={<Info />} label="Icon" />
              <Badge size="md" color="error" avatar="KL" label="Avatar" />
            </div>
          </div>

          <div>
            <ColLabel>Small — 20px</ColLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
              <Badge size="sm" color="primary" label="Simple" />
              <Badge size="sm" color="success" dot label="Dot" />
              <Badge size="sm" color="info" icon={<Info />} label="Icon" />
              <Badge size="sm" color="error" avatar="KL" label="Avatar" />
            </div>
          </div>

        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 6. CONTEXTUAL EXAMPLES */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Contextual examples</SectionLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <Badge color="success" dot label="In stock" />
          <Badge color="error" dot label="Out of stock" />
          <Badge color="warning" dot label="Low inventory" />
          <Badge color="info" icon={<Truck />} label="Free shipping" />
          <Badge color="primary" icon={<Tag />} label="Sale" />
          <Badge color="error" label="Hot" />
          <Badge color="success" icon={<ShieldCheck />} label="Verified" />
          <Badge color="warning" icon={<Lightning />} label="Flash deal" />
          <Badge color="info" icon={<Sparkle />} label="New arrival" />
          <Badge color="primary" icon={<Star />} label="Featured" />
          <Badge color="primary" avatar="JD" label="Assigned to JD" size="sm" />
          <Badge color="success" size="sm" label="v2.4.0" />
          <Badge color="warning" size="sm" dot label="Beta" />
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* 7. USAGE */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
          <pre style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12.5,
            color: 'var(--color-content-primary)', margin: 0, lineHeight: '22px', overflowX: 'auto',
          }}>{`import Badge from '@/components/atoms/Badge'
import { CheckCircle } from '@phosphor-icons/react'

// Simple
<Badge color="primary" size="md" label="Label" />

// Dot indicator
<Badge color="success" size="md" dot label="In stock" />

// Icon
<Badge color="info" size="md" icon={<CheckCircle />} label="Verified" />

// Avatar (initials)
<Badge color="primary" size="md" avatar="JD" label="John Doe" />

// Avatar (image URL)
<Badge color="primary" size="md" avatar="https://…/photo.jpg" label="Jane" />

// Props
// color  : 'primary' | 'error' | 'warning' | 'success' | 'info'
// size   : 'sm' (20px) | 'md' (28px) | 'lg' (32px)
// dot    : boolean  — coloured dot on the left
// icon   : ReactElement — Phosphor icon, auto-sized
// avatar : string  — initials (≤2 chars) or image URL`}
          </pre>
        </div>
      </div>

    </div>
  )
}
