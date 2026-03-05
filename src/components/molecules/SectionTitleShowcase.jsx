import { useState } from 'react'
import SectionTitle from './SectionTitle'

// ── Shared UI helpers ─────────────────────────────────────────────────────────

function PageHeader() {
  return (
    <div style={{ padding: '48px 40px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <p style={{
        fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
        color: 'var(--color-content-tertiary)', letterSpacing: '0.1em',
        textTransform: 'uppercase', margin: '0 0 8px',
      }}>
        WDS · Molecules
      </p>
      <h1 style={{
        fontFamily: 'Inter', fontSize: 40, fontWeight: 600, lineHeight: '48px',
        letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px',
      }}>
        Section Title
      </h1>
      <p style={{
        fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)',
        lineHeight: '24px', margin: '0 0 20px', maxWidth: 560,
      }}>
        Full-width section headers with 4 structural variants and full responsive support
        across desktop, tablet, and mobile breakpoints.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {[
          '4 variants', 'Fully responsive', '3 breakpoints',
          'Optional View all', 'Nav arrows', 'Gallery mode',
        ].map(s => (
          <span key={s} style={{
            fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)',
            background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
            borderRadius: 6, padding: '3px 10px',
          }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionDivider({ number, badge, description }) {
  return (
    <div style={{ padding: '0 40px 16px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        {/* Number chip */}
        <div style={{
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
          color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
          background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6, flexShrink: 0,
        }}>
          Variant {number}
        </div>
        {/* Code badge */}
        <span style={{
          fontFamily: 'ui-monospace, monospace', fontSize: 11, fontWeight: 600,
          color: 'var(--color-content-brand)', background: 'var(--color-bg-selected)',
          borderRadius: 4, padding: '2px 8px', flexShrink: 0,
        }}>
          {badge}
        </span>
        {/* Divider line */}
        <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
      </div>
      <p style={{
        fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)',
        margin: 0, lineHeight: '20px',
      }}>
        {description}
      </p>
    </div>
  )
}

function LiveFrame({ children }) {
  return (
    <div style={{
      borderTop: '1px solid var(--color-border-tertiary)',
      borderBottom: '1px solid var(--color-border-tertiary)',
      marginBottom: 56,
    }}>
      {children}
    </div>
  )
}

// ── Responsive breakpoints table ──────────────────────────────────────────────

function BreakpointTable({ rows }) {
  const headers = ['Property', 'Desktop ≥ 1024px', 'Tablet ≤ 1023px', 'Mobile ≤ 767px']
  return (
    <div style={{
      border: '1px solid var(--color-border-tertiary)', borderRadius: 10,
      overflow: 'hidden', marginBottom: 20,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr 1fr', background: 'var(--color-bg-hover)', borderBottom: '1px solid var(--color-border-tertiary)' }}>
        {headers.map(h => (
          <div key={h} style={{
            padding: '10px 16px', fontFamily: 'Inter', fontSize: 11,
            fontWeight: 600, color: 'var(--color-content-tertiary)',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>
            {h}
          </div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div
          key={row[0]}
          style={{
            display: 'grid', gridTemplateColumns: '160px 1fr 1fr 1fr',
            borderBottom: i < rows.length - 1 ? '1px solid var(--color-border-tertiary)' : 'none',
          }}
        >
          <div style={{ padding: '11px 16px', fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: 'var(--color-content-primary)' }}>
            {row[0]}
          </div>
          {[row[1], row[2], row[3]].map((val, j) => (
            <div key={j} style={{ padding: '11px 16px', fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'var(--color-content-brand)' }}>
              {val}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

// ── Code block ────────────────────────────────────────────────────────────────

function CodeBlock({ code }) {
  return (
    <div style={{
      background: 'var(--color-bg-hover)', borderRadius: 10,
      padding: '20px 24px', border: '1px solid var(--color-border-tertiary)',
    }}>
      <pre style={{
        fontFamily: 'ui-monospace, monospace', fontSize: 12.5,
        color: 'var(--color-content-primary)', margin: 0, lineHeight: '22px', overflowX: 'auto',
      }}>
        {code}
      </pre>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// Main showcase
// ══════════════════════════════════════════════════════════════════════════════

const DEFAULT_TABS = ['All', 'Exterior', 'Interior', 'Video', '360° View']
const DEFAULT_BADGES = ['Looks (12)', 'Details (15)', 'Lights (9)', 'Badges (2)', 'Camera & Sensors (7)', 'Other (4)']

export default function SectionTitleShowcase() {
  // Gallery state
  const [activeTab, setActiveTab]     = useState('Exterior')
  const [activeBadge, setActiveBadge] = useState('Looks (12)')

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--color-bg-primary)', minHeight: '100vh' }}>

      <PageHeader />

      {/* ══════════════════════════ VARIANT 1 — CENTER ════════════════════════ */}
      <SectionDivider
        number={1}
        badge='align="center"'
        description="Centered heading and description — ideal for discovery sections like Search by Make, Featured Inventory, etc."
      />
      <LiveFrame>
        <SectionTitle
          align="center"
          title="Explore All Vehicles"
          description="The Most Searched SUV Cars"
        />
      </LiveFrame>

      {/* ══════════════════════════ VARIANT 2 — LEFT ══════════════════════════ */}
      <SectionDivider
        number={2}
        badge='align="left"'
        description='Left-aligned heading + description. Optional "View all" link and prev/next arrow buttons appear on the right — typically used above carousels and paginated grids.'
      />
      <LiveFrame>
        <SectionTitle
          align="left"
          title="Explore All Vehicles"
          description="The Most Searched SUV Cars"
          onViewAll={() => {}}
          showArrows
        />
      </LiveFrame>

      {/* ══════════════════════════ VARIANT 3 — TITLE ONLY ════════════════════ */}
      <SectionDivider
        number={3}
        badge='align="left" — title only'
        description='Left-aligned heading without a description. Same right-side slot support. Use when the title is self-explanatory and a description would add noise.'
      />
      <LiveFrame>
        <SectionTitle
          align="left"
          title="Popular Makes"
          onViewAll={() => {}}
          showArrows
        />
      </LiveFrame>

      {/* ══════════════════════════ VARIANT 4 — GALLERY ══════════════════════ */}
      <SectionDivider
        number={4}
        badge='variant="gallery"'
        description='Gallery page header: back navigation with vehicle name on the left, photo-type filter tabs on the right, and a sub-filter badge strip below. Tabs scroll horizontally on mobile.'
      />
      <LiveFrame>
        <SectionTitle
          variant="gallery"
          title="Mahindra BE 6"
          onBack={() => {}}
          tabs={DEFAULT_TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          badges={DEFAULT_BADGES}
          activeBadge={activeBadge}
          onBadgeChange={setActiveBadge}
        />
      </LiveFrame>

      {/* ═══════════════════════ RESPONSIVE BREAKPOINTS ═══════════════════════ */}
      <div style={{ padding: '0 40px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{
            fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
            color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6,
          }}>
            Responsive
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
        </div>

        {/* Default variant (center/left) */}
        <p style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)', margin: '0 0 8px' }}>
          Default variant (Variants 1 – 3)
        </p>
        <p style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)', margin: '0 0 16px', lineHeight: '20px' }}>
          Typography and horizontal padding adapt across the 3 breakpoints. The description size intentionally increases on tablet for readability.
        </p>
        <BreakpointTable rows={[
          ['H. padding',    '80px',            '32px',            '16px'],
          ['Title font',    'Roboto 600',       'Inter 600',       'Inter 600'],
          ['Title size',    '32px / 40px lh',  '28px / 40px lh',  '20px / 32px lh'],
          ['Title tracking','-0.031em',         '-0.018em',        '-0.025em'],
          ['Description',   '16px / 24px',     '20px / 26px',     '16px / 24px'],
        ]} />

        {/* Gallery variant */}
        <p style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)', margin: '24px 0 8px' }}>
          Gallery variant (Variant 4)
        </p>
        <p style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)', margin: '0 0 16px', lineHeight: '20px' }}>
          On mobile the top row stacks vertically, and the photo-type tabs become a full-width horizontal scroll strip.
        </p>
        <BreakpointTable rows={[
          ['H. padding',     '80px',                   '32px',                '16px'],
          ['Vehicle name',   'Inter 600 · 18px/26px',  'Inter 600 · 16px/24px', 'Inter 600 · 16px/24px'],
          ['Tab height',     '64px',                   '64px',                'auto (stacked row)'],
          ['Badge font',     'Inter 400 · 14px',       'Inter 400 · 14px',    'Inter 400 · 14px'],
          ['Mobile layout',  '—',                      '—',                   'Tabs wrap to new row'],
        ]} />
      </div>

      {/* ═══════════════════════════════ USAGE ═══════════════════════════════ */}
      <div style={{ padding: '0 40px 64px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{
            fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
            color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6,
          }}>
            Usage
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
        </div>
        <CodeBlock code={`import SectionTitle from '@/components/molecules/SectionTitle'

// ─── Variant 1 — Center aligned ───────────────────────────────────────────
<SectionTitle
  align="center"
  title="Explore All Vehicles"
  description="The Most Searched SUV Cars"
/>

// ─── Variant 2 — Left aligned with View all + arrows ──────────────────────
<SectionTitle
  align="left"
  title="Explore All Vehicles"
  description="The Most Searched SUV Cars"
  onViewAll={() => router.push('/inventory')}
  showArrows
  onPrev={handlePrev}
  onNext={handleNext}
  prevDisabled={page === 0}
  nextDisabled={page === lastPage}
/>

// ─── Variant 3 — Left aligned, title only ─────────────────────────────────
<SectionTitle
  align="left"
  title="Popular Makes"
  onViewAll={() => router.push('/makes')}
  showArrows
  onPrev={handlePrev}
  onNext={handleNext}
/>

// ─── Variant 4 — Gallery header ───────────────────────────────────────────
<SectionTitle
  variant="gallery"
  title="Mahindra BE 6"
  onBack={() => router.back()}
  tabs={['All', 'Exterior', 'Interior', 'Video', '360° View']}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  badges={['Looks (12)', 'Details (15)', 'Lights (9)', 'Badges (2)']}
  activeBadge={activeBadge}
  onBadgeChange={setActiveBadge}
/>

// ─── Props — Default variant ──────────────────────────────────────────────
// variant       'default' | 'gallery'    default: 'default'
// align         'center'  | 'left'       default: 'center'
// title         string
// description   string
// onViewAll     () => void               shows "View all →" link
// showArrows    boolean                  shows prev/next buttons
// onPrev        () => void
// onNext        () => void
// prevDisabled  boolean
// nextDisabled  boolean
// style         CSSProperties

// ─── Props — Gallery variant ──────────────────────────────────────────────
// title         string                   vehicle/page name in back-nav
// onBack        () => void               back-arrow click
// tabs          string[]
// activeTab     string
// onTabChange   (tab: string) => void
// badges        string[]
// activeBadge   string
// onBadgeChange (badge: string) => void
// style         CSSProperties`} />
      </div>

    </div>
  )
}
