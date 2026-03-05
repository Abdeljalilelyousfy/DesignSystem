import { useState, useRef, useEffect } from 'react'
import * as Ph from '@phosphor-icons/react'
import {
  Phone, List, X, MagnifyingGlass, MapPin, Clock,
  Sun, Moon, Globe, CaretDown, CaretRight,
} from '@phosphor-icons/react'
import Button from '../atoms/Button'
import Logo from '../atoms/Logo'
import '../../styles/molecules.css'

// ─── Default nav links (with Phosphor icon names) ─────────────────────────────
const DEFAULT_LINKS = [
  { label: 'New Vehicles',    icon: 'Car' },
  { label: 'Pre-Owned',       icon: 'ClockCounterClockwise' },
  { label: 'Financing',       icon: 'CurrencyDollar' },
  { label: 'Service & Parts', icon: 'Wrench' },
  { label: 'About Us',        icon: 'Buildings' },
  { label: 'Contact',         icon: 'ChatText' },
]

// ─── Available languages ──────────────────────────────────────────────────────
const DEFAULT_LANGUAGES = [
  { code: 'EN', label: 'English' },
  { code: 'FR', label: 'Français' },
  { code: 'ES', label: 'Español' },
  { code: 'AR', label: 'العربية' },
  { code: 'ZH', label: '中文' },
]

// ─── Logo wrapper ─────────────────────────────────────────────────────────────
function NavLogo() {
  return (
    <div className="navbar-logo">
      <Logo color="var(--color-content-brand)" className="navbar-logo-svg" />
    </div>
  )
}

// ─── Language picker ──────────────────────────────────────────────────────────
function LanguagePicker({ language = 'EN', languages = DEFAULT_LANGUAGES, onChange, size = 'md' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onMouseDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        className="navbar-lang-btn"
        data-size={size}
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <Globe size={size === 'sm' ? 12 : 14} weight="regular" aria-hidden="true" />
        <span className="navbar-lang-code">{language}</span>
        <CaretDown
          size={9}
          weight="bold"
          aria-hidden="true"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 160ms' }}
        />
      </button>

      {open && (
        <div className="navbar-lang-dropdown" role="listbox" aria-label="Language options">
          {languages.map(lang => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={lang.code === language}
              className={`navbar-lang-option${lang.code === language ? ' navbar-lang-option--active' : ''}`}
              onClick={() => { onChange?.(lang.code); setOpen(false) }}
            >
              <span className="navbar-lang-option-code">{lang.code}</span>
              <span className="navbar-lang-option-label">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Dark mode toggle ─────────────────────────────────────────────────────────
function DarkToggle({ darkMode, onToggle, iconSize = 15 }) {
  return (
    <button
      type="button"
      className="navbar-icon-action"
      onClick={onToggle}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode
        ? <Sun  size={iconSize} weight="regular" />
        : <Moon size={iconSize} weight="regular" />
      }
    </button>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
/**
 * Navbar — Dealership website header
 *
 * links           { label, icon? }[]    nav items — icon is a Phosphor icon name
 * activeLink      string
 * onLinkClick     (label) => void
 * phone           string
 * address         string               utility bar (desktop only)
 * hours           string               utility bar (desktop only)
 * ctaLabel        string
 * onCtaClick      () => void
 * onSearch        () => void
 * darkMode        boolean
 * onToggleDark    () => void
 * language        string               e.g. 'EN'
 * languages       { code, label }[]
 * onLanguageChange (code) => void
 * style           CSSProperties
 */
export default function Navbar({
  links            = DEFAULT_LINKS,
  activeLink       = 'New Vehicles',
  onLinkClick,
  phone            = '(800) 555-0173',
  address          = '1200 Auto Blvd, Springfield',
  hours            = 'Mon–Sat 9AM–7PM',
  ctaLabel         = 'Find Your Car',
  onCtaClick,
  onSearch,
  darkMode         = false,
  onToggleDark,
  language         = 'EN',
  languages        = DEFAULT_LANGUAGES,
  onLanguageChange,
  style,
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLink(label) {
    onLinkClick?.(label)
    setMenuOpen(false)
  }

  return (
    <header className="navbar" style={style}>

      {/* 1 ── Brand accent strip ── */}
      <div className="navbar-accent" aria-hidden="true" />

      {/* 2 ── Utility bar (desktop only) ── */}
      <div className="navbar-topbar">
        <div className="navbar-topbar-inner">

          {/* Left: address + hours — consistent regular weight */}
          <div className="navbar-topbar-left">
            <span className="navbar-topbar-item">
              <MapPin size={12} weight="regular" aria-hidden="true" />
              {address}
            </span>
            <span className="navbar-topbar-sep" aria-hidden="true" />
            <span className="navbar-topbar-item">
              <Clock size={12} weight="regular" aria-hidden="true" />
              {hours}
            </span>
          </div>

          {/* Right: phone · language · dark toggle */}
          <div className="navbar-topbar-right">
            <a
              className="navbar-topbar-phone"
              href={`tel:${phone.replace(/\D/g, '')}`}
              aria-label={`Call us at ${phone}`}
            >
              <Phone size={12} weight="regular" aria-hidden="true" />
              {phone}
            </a>
            <span className="navbar-topbar-sep" aria-hidden="true" />
            <LanguagePicker
              language={language}
              languages={languages}
              onChange={onLanguageChange}
              size="sm"
            />
            <DarkToggle darkMode={darkMode} onToggle={onToggleDark} iconSize={14} />
          </div>

        </div>
      </div>

      {/* 3 ── Main navigation bar ── */}
      <div className="navbar-main">
        <div className="navbar-inner">

          <NavLogo />

          {/* Desktop: centred nav links — text only, no icons (clean horizontal layout) */}
          <nav className="navbar-links" aria-label="Main navigation">
            {links.map(link => (
              <button
                key={link.label}
                type="button"
                className={`navbar-link${link.label === activeLink ? ' navbar-link--active' : ''}`}
                onClick={() => handleLink(link.label)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop: search + CTA */}
          <div className="navbar-actions">
            <button
              type="button"
              className="navbar-icon-action"
              onClick={onSearch}
              aria-label="Search inventory"
            >
              <MagnifyingGlass size={18} weight="regular" />
            </button>
            <Button variant="primary" size="sm" onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          </div>

          {/* Tablet/Mobile: dark toggle + phone + hamburger */}
          <div className="navbar-mobile-actions">
            <DarkToggle darkMode={darkMode} onToggle={onToggleDark} iconSize={18} />
            <a
              className="navbar-icon-action"
              href={`tel:${phone.replace(/\D/g, '')}`}
              aria-label={`Call ${phone}`}
            >
              <Phone size={18} weight="regular" />
            </a>
            <button
              type="button"
              className="navbar-hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen
                ? <X    size={22} weight="regular" />
                : <List size={22} weight="regular" />
              }
            </button>
          </div>

        </div>
      </div>

      {/* 4 ── Mobile / Tablet drawer ── */}
      {menuOpen && (
        <div className="navbar-drawer" role="dialog" aria-label="Navigation menu">

          <nav className="navbar-drawer-links">
            {links.map(link => {
              const Icon = link.icon ? Ph[link.icon] : null
              const isActive = link.label === activeLink
              return (
                <button
                  key={link.label}
                  type="button"
                  className={`navbar-drawer-link${isActive ? ' navbar-drawer-link--active' : ''}`}
                  onClick={() => handleLink(link.label)}
                >
                  {/* Left: icon */}
                  <span className="navbar-drawer-link-icon" aria-hidden="true">
                    {Icon && (
                      <Icon
                        size={18}
                        weight={isActive ? 'bold' : 'regular'}
                      />
                    )}
                  </span>

                  {/* Label */}
                  <span className="navbar-drawer-link-label">{link.label}</span>

                  {/* Right: animated caret */}
                  <span className="navbar-drawer-link-caret" aria-hidden="true">
                    <CaretRight size={14} weight="bold" />
                  </span>
                </button>
              )
            })}
          </nav>

          <div className="navbar-drawer-footer">
            <Button
              variant="primary"
              size="sm"
              style={{ width: '100%' }}
              onClick={() => { onCtaClick?.(); setMenuOpen(false) }}
            >
              {ctaLabel}
            </Button>

            {/* Language + dark mode row */}
            <div className="navbar-drawer-prefs">
              <LanguagePicker
                language={language}
                languages={languages}
                onChange={onLanguageChange}
              />
              <div className="navbar-drawer-prefs-sep" aria-hidden="true" />
              <button
                type="button"
                className="navbar-drawer-dark-btn"
                onClick={onToggleDark}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode
                  ? <Sun  size={15} weight="regular" />
                  : <Moon size={15} weight="regular" />
                }
                {darkMode ? 'Light mode' : 'Dark mode'}
              </button>
            </div>

            <a
              className="navbar-drawer-phone"
              href={`tel:${phone.replace(/\D/g, '')}`}
            >
              <Phone size={15} weight="regular" aria-hidden="true" />
              {phone}
            </a>
          </div>

        </div>
      )}

    </header>
  )
}
