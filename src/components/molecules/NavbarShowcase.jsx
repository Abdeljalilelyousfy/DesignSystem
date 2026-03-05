import { useState } from 'react'
import Navbar from './Navbar'

// ─── Showcase helpers ─────────────────────────────────────────────────────────
function Section({ title, description, children }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <h2 style={{
        fontFamily: 'Inter', fontSize: 18, fontWeight: 600,
        color: 'var(--color-content-primary)', margin: '0 0 4px',
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)',
          margin: '0 0 20px', lineHeight: '20px', maxWidth: 560,
        }}>
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

function Label({ children }) {
  return (
    <div style={{
      fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
      color: 'var(--color-content-tertiary)', letterSpacing: '0.08em',
      textTransform: 'uppercase', marginBottom: 10,
    }}>
      {children}
    </div>
  )
}

function PreviewFrame({ label, note, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {label && <Label>{label}</Label>}
      <div style={{
        border: '1px solid var(--color-border-tertiary)',
        borderRadius: 12, overflow: 'hidden',
      }}>
        {children}
      </div>
      {note && (
        <p style={{
          fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)',
          margin: '8px 0 0', lineHeight: '18px',
        }}>
          {note}
        </p>
      )}
    </div>
  )
}

// Constrained viewport simulation
function Viewport({ width, children }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{ width, minWidth: width }}>
        {children}
      </div>
    </div>
  )
}

function PropRow({ prop, type, defaultVal, description }) {
  return (
    <tr>
      <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: 13, color: 'var(--color-content-brand)', whiteSpace: 'nowrap', borderBottom: '1px solid var(--color-border-tertiary)' }}>{prop}</td>
      <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: 12, color: 'var(--color-content-secondary)', whiteSpace: 'nowrap', borderBottom: '1px solid var(--color-border-tertiary)' }}>{type}</td>
      <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: 12, color: 'var(--color-content-tertiary)', borderBottom: '1px solid var(--color-border-tertiary)' }}>{defaultVal}</td>
      <td style={{ padding: '9px 12px', fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)', lineHeight: '20px', borderBottom: '1px solid var(--color-border-tertiary)' }}>{description}</td>
    </tr>
  )
}

// ─── Main showcase ────────────────────────────────────────────────────────────
export default function NavbarShowcase() {
  const [activeLink, setActiveLink]   = useState('New Vehicles')
  const [language,   setLanguage]     = useState('EN')
  const [darkMode,   setDarkMode]     = useState(() => document.documentElement.classList.contains('dark'))

  function toggleDark() {
    const next = !darkMode
    setDarkMode(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('wds-theme', next ? 'dark' : 'light')
  }

  return (
    <div style={{ padding: '48px 80px', maxWidth: 1440, margin: '0 auto', boxSizing: 'border-box' }}>

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <h1 style={{
          fontFamily: 'Inter', fontSize: 28, fontWeight: 700,
          color: 'var(--color-content-primary)', margin: '0 0 8px',
          letterSpacing: '-0.02em',
        }}>
          Navbar
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 15, color: 'var(--color-content-secondary)',
          margin: 0, lineHeight: '24px', maxWidth: 580,
        }}>
          Dealership website header with a brand accent strip, utility info bar, responsive navigation,
          and a primary call-to-action. Collapses to a mobile drawer below 1024px.
        </p>
      </div>

      {/* ── Desktop ── */}
      <Section
        title="Desktop — Full header"
        description="3px brand accent · utility bar with address, hours, phone and sign-in · main nav with centred links, search icon, and primary CTA."
      >
        <PreviewFrame>
          <Navbar
            activeLink={activeLink} onLinkClick={setActiveLink}
            darkMode={darkMode} onToggleDark={toggleDark}
            language={language} onLanguageChange={setLanguage}
          />
        </PreviewFrame>
      </Section>

      {/* ── Tablet ── */}
      <Section
        title="Tablet (768px) — Compact header"
        description="Utility bar hidden. Nav links replaced by a dark mode toggle, phone icon, and hamburger. Tap the hamburger to see the drawer with language + dark mode controls."
      >
        <PreviewFrame note="Simulated at 768px viewport width.">
          <Viewport width={768}>
            <Navbar
              activeLink={activeLink} onLinkClick={setActiveLink}
              darkMode={darkMode} onToggleDark={toggleDark}
              language={language} onLanguageChange={setLanguage}
            />
          </Viewport>
        </PreviewFrame>
      </Section>

      {/* ── Mobile ── */}
      <Section
        title="Mobile (393px) — Minimal header"
        description="Logo tagline hidden for space. Drawer contains all nav links, CTA, language switcher, dark mode toggle, and phone."
      >
        <PreviewFrame note="Simulated at 393px viewport width.">
          <Viewport width={393}>
            <Navbar
              activeLink={activeLink} onLinkClick={setActiveLink}
              darkMode={darkMode} onToggleDark={toggleDark}
              language={language} onLanguageChange={setLanguage}
            />
          </Viewport>
        </PreviewFrame>
      </Section>

      {/* ── Interactive ── */}
      <Section
        title="Interactive"
        description="Click nav links, toggle dark mode, or switch language — all controls are live."
      >
        <PreviewFrame>
          <Navbar
            activeLink={activeLink}
            onLinkClick={setActiveLink}
            darkMode={darkMode}
            onToggleDark={toggleDark}
            language={language}
            onLanguageChange={setLanguage}
            ctaLabel="Book Test Drive"
          />
        </PreviewFrame>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 8,
          padding: '14px 16px',
          background: 'var(--color-bg-hover)',
          border: '1px solid var(--color-border-tertiary)',
          borderRadius: 8,
        }}>
          <span style={{
            fontFamily: 'Inter', fontSize: 12, fontWeight: 600,
            color: 'var(--color-content-tertiary)', alignSelf: 'center', marginRight: 4,
          }}>
            Active link:
          </span>
          {['New Vehicles', 'Pre-Owned', 'Financing', 'Service & Parts', 'About Us', 'Contact'].map(link => (
            <button
              key={link}
              type="button"
              onClick={() => setActiveLink(link)}
              style={{
                fontFamily: 'Inter', fontSize: 13,
                fontWeight: link === activeLink ? 600 : 400,
                color: link === activeLink ? 'var(--color-content-brand)' : 'var(--color-content-secondary)',
                background: link === activeLink ? 'var(--color-bg-selected)' : 'var(--color-bg-primary)',
                border: `1px solid ${link === activeLink ? 'var(--color-content-brand)' : 'var(--color-border-tertiary)'}`,
                borderRadius: 6, padding: '5px 12px', cursor: 'pointer',
                transition: 'all 120ms',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </Section>

      {/* ── Anatomy ── */}
      <Section title="Anatomy">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 1, background: 'var(--color-border-tertiary)',
          border: '1px solid var(--color-border-tertiary)', borderRadius: 12, overflow: 'hidden',
        }}>
          {[
            { name: 'Brand accent',   desc: '3px brand-color strip at the top edge' },
            { name: 'Utility bar',    desc: 'Address · hours · phone · sign-in (desktop only)' },
            { name: 'Logo',           desc: 'Brand mark + dealer name + certification badge' },
            { name: 'Nav links',      desc: 'Inter 500 14px · active = brand blue + bottom border' },
            { name: 'Search icon',    desc: 'Quick access to inventory search (desktop)' },
            { name: 'Primary CTA',    desc: '"Find Your Car" — drives lead conversion' },
            { name: 'Phone icon',     desc: 'Tappable phone link on tablet/mobile' },
            { name: 'Mobile drawer',  desc: 'Full-width dropdown with all links + CTA + phone' },
          ].map(({ name, desc }) => (
            <div key={name} style={{
              padding: '16px 20px',
              background: 'var(--color-bg-primary)',
            }}>
              <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 4 }}>
                {name}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)', lineHeight: '18px' }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Responsive specs table ── */}
      <Section title="Responsive Specs">
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse',
            border: '1px solid var(--color-border-tertiary)', borderRadius: 8, overflow: 'hidden',
          }}>
            <thead>
              <tr style={{ background: 'var(--color-bg-hover)' }}>
                {['Breakpoint', 'Viewport', 'Main bar height', 'Padding', 'Visible elements'].map(h => (
                  <th key={h} style={{
                    padding: '10px 12px', textAlign: 'left',
                    fontFamily: 'Inter', fontSize: 13, fontWeight: 600,
                    color: 'var(--color-content-primary)',
                    borderBottom: '1px solid var(--color-border-tertiary)',
                    whiteSpace: 'nowrap',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Desktop', '≥ 1024px', '72px', '0 80px', 'Accent + Utility bar + Logo + Nav + Search + CTA'],
                ['Tablet',  '768px',    '60px', '0 24px 0 32px', 'Accent + Logo + Phone icon + Hamburger'],
                ['Mobile',  '393px',    '56px', '0 16px', 'Accent + Logo (no tagline) + Phone + Hamburger'],
              ].map(([bp, vp, h, p, els], i) => (
                <tr key={bp} style={{ background: i % 2 ? 'var(--color-bg-hover)' : 'transparent' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 600, color: 'var(--color-content-primary)', borderBottom: '1px solid var(--color-border-tertiary)', whiteSpace: 'nowrap' }}>{bp}</td>
                  <td style={{ padding: '9px 12px', color: 'var(--color-content-secondary)', borderBottom: '1px solid var(--color-border-tertiary)', whiteSpace: 'nowrap', fontFamily: 'monospace', fontSize: 12 }}>{vp}</td>
                  <td style={{ padding: '9px 12px', color: 'var(--color-content-secondary)', borderBottom: '1px solid var(--color-border-tertiary)', whiteSpace: 'nowrap', fontFamily: 'monospace', fontSize: 12 }}>{h}</td>
                  <td style={{ padding: '9px 12px', color: 'var(--color-content-secondary)', borderBottom: '1px solid var(--color-border-tertiary)', whiteSpace: 'nowrap', fontFamily: 'monospace', fontSize: 12 }}>{p}</td>
                  <td style={{ padding: '9px 12px', color: 'var(--color-content-secondary)', borderBottom: '1px solid var(--color-border-tertiary)', fontSize: 13 }}>{els}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Props ── */}
      <Section title="Props">
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse',
            border: '1px solid var(--color-border-tertiary)', borderRadius: 8, overflow: 'hidden',
          }}>
            <thead>
              <tr style={{ background: 'var(--color-bg-hover)' }}>
                {['Prop', 'Type', 'Default', 'Description'].map(h => (
                  <th key={h} style={{
                    padding: '10px 12px', textAlign: 'left',
                    fontFamily: 'Inter', fontSize: 13, fontWeight: 600,
                    color: 'var(--color-content-primary)',
                    borderBottom: '1px solid var(--color-border-tertiary)',
                    whiteSpace: 'nowrap',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <PropRow prop="links"            type="{ label }[]"      defaultVal="6 dealership pages" description="Navigation link items" />
              <PropRow prop="activeLink"       type="string"           defaultVal="'New Vehicles'"      description="Currently highlighted link" />
              <PropRow prop="onLinkClick"      type="fn(label)"        defaultVal="—"                   description="Called when a nav link is clicked" />
              <PropRow prop="phone"            type="string"           defaultVal="'(800) 555-0173'"    description="Phone shown in utility bar and mobile drawer" />
              <PropRow prop="address"          type="string"           defaultVal="'1200 Auto Blvd…'"   description="Address shown in utility bar (desktop only)" />
              <PropRow prop="hours"            type="string"           defaultVal="'Mon–Sat 9AM–7PM'"   description="Opening hours (utility bar, desktop only)" />
              <PropRow prop="ctaLabel"         type="string"           defaultVal="'Find Your Car'"     description="Primary CTA button label" />
              <PropRow prop="onCtaClick"       type="fn()"             defaultVal="—"                   description="Primary CTA click handler" />
              <PropRow prop="onSearch"         type="fn()"             defaultVal="—"                   description="Search icon click handler (desktop)" />
              <PropRow prop="darkMode"         type="boolean"          defaultVal="false"               description="Current theme state — shows sun (dark) or moon (light)" />
              <PropRow prop="onToggleDark"     type="fn()"             defaultVal="—"                   description="Called when the dark mode toggle is clicked" />
              <PropRow prop="language"         type="string"           defaultVal="'EN'"                description="Active language code shown in selector" />
              <PropRow prop="languages"        type="{ code, label }[]" defaultVal="EN FR ES AR ZH"    description="Available language options for the dropdown" />
              <PropRow prop="onLanguageChange" type="fn(code)"         defaultVal="—"                   description="Called with new language code on selection" />
              <PropRow prop="style"            type="CSSProperties"    defaultVal="—"                   description="Inline styles on the root element" />
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Usage ── */}
      <Section title="Usage">
        <pre style={{
          fontFamily: 'monospace', fontSize: 13, lineHeight: '22px',
          background: 'var(--color-bg-hover)', color: 'var(--color-content-secondary)',
          border: '1px solid var(--color-border-tertiary)',
          borderRadius: 8, padding: '20px 24px', overflowX: 'auto', margin: 0,
        }}>
{`import Navbar from './components/molecules/Navbar'

// Default dealership header
<Navbar />

// Full integration — active link, dark mode, language, CTA
<Navbar
  activeLink={activePage}
  onLinkClick={setActivePage}
  darkMode={darkMode}
  onToggleDark={() => setDarkMode(d => !d)}
  language={language}
  onLanguageChange={setLanguage}
  ctaLabel="Book a Test Drive"
  onCtaClick={() => openModal('book-test-drive')}
  onSearch={() => openSearch()}
/>

// Custom dealer info
<Navbar
  phone="(555) 123-4567"
  address="500 Motor Mile, Austin TX"
  hours="Mon–Fri 8AM–8PM · Sat 9AM–6PM"
  ctaLabel="Shop Inventory"
/>

// Custom language list
<Navbar
  languages={[
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' },
  ]}
  language="ES"
  onLanguageChange={setLanguage}
/>`}
        </pre>
      </Section>

    </div>
  )
}
