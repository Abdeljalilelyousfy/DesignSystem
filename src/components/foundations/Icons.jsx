import { useState } from 'react'
import * as Ph from '@phosphor-icons/react'
import '../../styles/icons.css'

// ─── Data ──────────────────────────────────────────────────────────────────────
// Source: Figma WDS.Foundations: Icon (node 2:13)
// Library: Phosphor Icons — https://phosphoricons.com

const WEIGHTS = ['Thin', 'Light', 'Regular', 'Bold', 'Fill', 'Duotone']
const SIZES   = [16, 24, 32, 48]
const SAMPLE  = 'Heart'

const CATEGORIES = [
  {
    name:  'Arrows',
    count: 121,
    icons: ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowsClockwise', 'CaretRight', 'ArrowCircleRight', 'ArrowBendUpLeft'],
  },
  {
    name:  'Brands',
    count: 74,
    icons: ['AppleLogo', 'GoogleLogo', 'GithubLogo', 'TwitterLogo', 'FacebookLogo', 'LinkedinLogo', 'SlackLogo', 'DiscordLogo'],
  },
  {
    name:  'Commerce',
    count: 132,
    icons: ['ShoppingCart', 'Package', 'Tag', 'Storefront', 'CreditCard', 'Wallet', 'Receipt', 'Barcode'],
  },
  {
    name:  'Communication',
    count: 76,
    icons: ['EnvelopeSimple', 'Phone', 'ChatCircle', 'Bell', 'At', 'Megaphone', 'Wifi', 'Hash'],
  },
  {
    name:  'Design',
    count: 132,
    icons: ['PaintBrush', 'Shapes', 'Eyedropper', 'Ruler', 'PenNib', 'MagicWand', 'Crop', 'GridFour'],
  },
  {
    name:  'Development',
    count: 29,
    icons: ['Code', 'Terminal', 'Bug', 'GitBranch', 'Database', 'BracketsCurly', 'Binary', 'Brackets'],
  },
  {
    name:  'Education',
    count: 21,
    icons: ['Book', 'GraduationCap', 'BookOpen', 'Chalkboard', 'Lightbulb', 'MagnifyingGlass', 'Certificate', 'Student'],
  },
  {
    name:  'Games',
    count: 73,
    icons: ['GameController', 'Trophy', 'Target', 'Sword', 'Shield', 'Crown', 'Star', 'Dice'],
  },
  {
    name:  'Health & Wellness',
    count: 27,
    icons: ['Heart', 'Heartbeat', 'FirstAid', 'Pill', 'Stethoscope', 'Dna', 'Brain', 'Bandaids'],
  },
  {
    name:  'Maps & Travel',
    count: 99,
    icons: ['Airplane', 'MapPin', 'Globe', 'Car', 'Compass', 'NavigationArrow', 'Train', 'Boat'],
  },
  {
    name:  'Math & Finance',
    count: 83,
    icons: ['Calculator', 'CurrencyDollar', 'ChartBar', 'Percent', 'Bank', 'CreditCard', 'Receipt', 'Scales'],
  },
  {
    name:  'Media',
    count: 111,
    icons: ['Play', 'Pause', 'SpeakerHigh', 'Camera', 'Image', 'VideoCamera', 'Headphones', 'MusicNote'],
  },
  {
    name:  'Office & Editing',
    count: 131,
    icons: ['PencilSimple', 'Clipboard', 'Note', 'FolderOpen', 'Briefcase', 'FilePdf', 'Paperclip', 'Archive'],
  },
  {
    name:  'People',
    count: 69,
    icons: ['User', 'Users', 'UserCircle', 'Baby', 'HandWaving', 'Smiley', 'Handshake', 'Person'],
  },
  {
    name:  'Security & Warnings',
    count: 45,
    icons: ['Lock', 'ShieldCheck', 'Warning', 'Eye', 'Key', 'Fingerprint', 'Detective', 'LockSimple'],
  },
  {
    name:  'System & Devices',
    count: 132,
    icons: ['Laptop', 'Desktop', 'DeviceMobile', 'Keyboard', 'Mouse', 'Printer', 'HardDrive', 'Cpu'],
  },
  {
    name:  'Time',
    count: 28,
    icons: ['Clock', 'Calendar', 'Timer', 'Alarm', 'Hourglass', 'CalendarBlank', 'Watch', 'ClockClockwise'],
  },
  {
    name:  'Weather & Nature',
    count: 62,
    icons: ['Cloud', 'Sun', 'Moon', 'Leaf', 'Snowflake', 'Rainbow', 'Wind', 'Thermometer'],
  },
]

const TOTAL = CATEGORIES.reduce((s, c) => s + c.count, 0)

// ─── Sub-components ────────────────────────────────────────────────────────────

function SafeIcon({ name, weight, size }) {
  const Comp = Ph[name]
  if (!Comp) return (
    <div style={{
      width: size, height: size,
      background: 'var(--color-bg-hover)', borderRadius: 3, flexShrink: 0,
    }} />
  )
  return <Comp weight={weight} size={size} />
}

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

function CategoryCard({ name, count, icons, activeWeight }) {
  return (
    <div style={{
      background: 'var(--color-bg-hover)', borderRadius: 10,
      padding: '16px 20px', border: '1px solid var(--color-border-tertiary)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)' }}>
          {name}
        </span>
        <span style={{
          fontFamily: 'Inter', fontSize: 11, fontWeight: 500, color: 'var(--color-content-tertiary)',
          background: 'var(--color-bg-primary)', border: '1px solid var(--color-border-tertiary)', borderRadius: 5, padding: '1px 7px',
        }}>
          {count}
        </span>
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {icons.map(iconName => (
          <div key={iconName} style={{
            color: 'var(--color-content-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 32, height: 32, borderRadius: 6,
            background: 'var(--color-bg-primary)', border: '1px solid var(--color-border-tertiary)',
          }}>
            <SafeIcon name={iconName} weight={activeWeight.toLowerCase()} size={18} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function Icons() {
  const [activeWeight, setActiveWeight] = useState('Regular')

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
          Icons
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, fontWeight: 400,
          lineHeight: '24px', color: 'var(--color-content-secondary)', margin: '0 0 24px', maxWidth: 640,
        }}>
          {TOTAL.toLocaleString()} icons across {CATEGORIES.length} categories, powered by{' '}
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>Phosphor Icons</strong>.
          Each icon ships in <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>6 weights</strong>:
          Thin, Light, Regular, Bold, Fill, and Duotone.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { label: 'Total icons',  value: TOTAL.toLocaleString() },
            { label: 'Categories',   value: CATEGORIES.length },
            { label: 'Weights',      value: 6 },
            { label: 'Library',      value: 'Phosphor' },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
              borderRadius: 8, padding: '10px 16px',
            }}>
              <div style={{ fontFamily: 'Inter', fontSize: 18, fontWeight: 600, color: 'var(--color-content-primary)' }}>
                {value}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)', marginTop: 2 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Weight variants ── */}
      <div style={{ marginBottom: 48 }}>
        <SectionLabel>Weight Variants</SectionLabel>
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-end' }}>
          {WEIGHTS.map(w => (
            <div key={w} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ color: 'var(--color-content-primary)' }}>
                <SafeIcon name={SAMPLE} weight={w.toLowerCase()} size={40} />
              </div>
              <span style={{
                fontFamily: 'Inter', fontSize: 11,
                fontWeight: w === activeWeight ? 600 : 400,
                color: w === activeWeight ? 'var(--color-content-primary)' : 'var(--color-content-tertiary)',
                letterSpacing: '0.02em',
              }}>
                {w}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sizes ── */}
      <div style={{ marginBottom: 56 }}>
        <SectionLabel>Sizes</SectionLabel>
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-end' }}>
          {SIZES.map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{
                color: 'var(--color-content-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: 56,
              }}>
                <SafeIcon name={SAMPLE} weight="regular" size={size} />
              </div>
              <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--color-content-secondary)' }}>
                {size}px
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Categories ── */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          {/* Left: label + rule */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
            <div style={{
              fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
              color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
              background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6, flexShrink: 0,
            }}>
              Categories
            </div>
            <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
          </div>

          {/* Right: weight picker */}
          <div style={{
            display: 'flex', gap: 3,
            background: 'var(--color-bg-hover)', borderRadius: 8, padding: 3, marginLeft: 24,
          }}>
            {WEIGHTS.map(w => (
              <button
                key={w}
                onClick={() => setActiveWeight(w)}
                style={{
                  fontFamily: 'Inter', fontSize: 12,
                  fontWeight: activeWeight === w ? 600 : 400,
                  color: activeWeight === w ? 'var(--color-content-primary)' : 'var(--color-content-secondary)',
                  background: activeWeight === w ? 'var(--color-bg-primary)' : 'transparent',
                  border: 'none', borderRadius: 6, padding: '5px 10px',
                  cursor: 'pointer',
                  boxShadow: activeWeight === w ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.1s',
                }}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {CATEGORIES.map(cat => (
            <CategoryCard key={cat.name} {...cat} activeWeight={activeWeight} />
          ))}
        </div>
      </div>
    </div>
  )
}
