import { useState } from 'react'
import { CaretRight, EnvelopeSimple } from '@phosphor-icons/react'
import * as Ph from '@phosphor-icons/react'
import Button from '../atoms/Button'
import '../../styles/molecules.css'

/**
 * Footer — Dealership site footer
 *
 * Figma: node 907-21641
 *
 * Usage
 * ─────
 * <Footer />                         // simple variant (Footer 1)
 * <Footer variant="columns" />       // multi-column nav (Footer 7)
 * <Footer variant="brand" />         // brand-blue + newsletter (Footer 8)
 *
 * Or use the named exports directly:
 *   FooterSimple | FooterColumns | FooterBrand
 */

// ─── Shared internals ────────────────────────────────────────────────────────

function FooterLogo({ inverse = false }) {
  const boxBg    = inverse ? 'rgba(255,255,255,0.18)' : 'var(--color-bg-inverse)'
  const boxText  = inverse ? '#ffffff' : 'var(--color-content-primary-inverse)'
  const nameText = inverse ? '#ffffff' : 'var(--color-content-primary)'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
      <div style={{ width: 32, height: 32, background: boxBg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Inter', fontSize: 10, fontWeight: 700, color: boxText, letterSpacing: '0.04em' }}>WDS</span>
      </div>
      <span style={{ fontFamily: 'Inter', fontSize: 17, fontWeight: 700, color: nameText }}>Design System</span>
    </div>
  )
}

const SOCIAL = [
  { key: 'facebook',  Icon: Ph.FacebookLogo,  bg: 'rgba(24,119,242,1)' },
  { key: 'instagram', Icon: Ph.InstagramLogo, bg: 'rgba(240,0,115,1)' },
  { key: 'twitter',   Icon: Ph.TwitterLogo,   bg: 'rgba(29,161,242,1)' },
]

function SocialIcons({ size = 32 }) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {SOCIAL.map(({ key, Icon, bg }) => (
        <div key={key} style={{ width: size, height: size, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}>
          <Icon size={Math.round(size * 0.52)} color="#ffffff" weight="fill" />
        </div>
      ))}
    </div>
  )
}

// ─── Variant: Simple (Footer 1) ──────────────────────────────────────────────

const DEFAULT_SIMPLE_LINKS = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Services', active: true },
  { label: 'Blog' },
  { label: 'Contact' },
]

/**
 * FooterSimple — Footer 1
 *
 * Props
 * ─────
 * navLinks   { label, href?, active? }[]
 * copyright  string
 * style      CSSProperties
 */
export function FooterSimple({
  navLinks  = DEFAULT_SIMPLE_LINKS,
  copyright = '© Copyright 2025 All Rights Reserved. Powered by Autodealers.Digital',
  style,
}) {
  return (
    <footer className="footer footer-simple" style={style}>
      <div className="footer-inner">
        <div className="footer-simple-main">
          <FooterLogo />
          <nav className="footer-simple-nav" aria-label="Footer navigation">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href || '#'}
                className={`footer-nav-link${link.active ? ' footer-link-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SocialIcons size={32} />
        </div>
        <div className="footer-separator" role="separator" />
        <p className="footer-copyright">{copyright}</p>
      </div>
    </footer>
  )
}

// ─── Variant: Columns (Footer 7) ─────────────────────────────────────────────

const DEFAULT_COLUMNS = [
  {
    title: 'Informations',
    links: ['About Us', 'Why Choose Us', 'Our Team', 'Careers', 'News & Updates'],
  },
  {
    title: 'Products & Services',
    links: ['New Inventory', 'Pre-Owned Vehicles', 'Certified CPO', 'Trade-In Value'],
  },
  {
    title: 'Quick Links',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'FAQ'],
  },
  {
    title: 'Customer Service',
    links: ['Schedule Service', 'Parts & Accessories', 'Roadside Assistance'],
  },
]

/**
 * FooterColumns — Footer 7
 *
 * Props
 * ─────
 * columns    { title, links: string[] }[]   link column data (4 by default)
 * copyright  string
 * style      CSSProperties
 */
export function FooterColumns({
  columns   = DEFAULT_COLUMNS,
  copyright = '© Copyright 2025 All Rights Reserved.',
  style,
}) {
  return (
    <footer className="footer footer-columns" style={style}>
      <div className="footer-inner">
        {/* Top bar: logo + social */}
        <div className="footer-columns-topbar">
          <FooterLogo />
          <SocialIcons size={32} />
        </div>
        <div className="footer-separator" role="separator" />

        {/* Column grid: brand col + data columns */}
        <div className="footer-col-grid">

          {/* Brand / contact column */}
          <div className="footer-col" style={{ gap: 16 }}>
            <div className="footer-col-header">
              Contact Us
              <CaretRight size={16} color="var(--color-content-tertiary)" />
            </div>
            <FooterLogo />
            <SocialIcons size={24} />
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i} className="footer-col">
              <div className="footer-col-header">
                {col.title}
                <CaretRight size={16} color="var(--color-content-tertiary)" />
              </div>
              {col.links.map((link, j) => (
                <a key={j} href="#" className="footer-col-link">
                  {link}
                  <CaretRight size={14} color="var(--color-content-tertiary)" />
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-separator" role="separator" />
        <p className="footer-copyright">{copyright}</p>
      </div>
    </footer>
  )
}

// ─── Variant: Brand / Blue (Footer 8) ────────────────────────────────────────

const DEFAULT_BRAND_COLUMNS = [
  {
    title: 'Informations',
    links: ['About Us', 'Why Choose Us', 'Our Team', 'Careers', 'News & Updates'],
  },
  {
    title: 'Resources',
    links: ['Inventory', 'Financing Options', 'Trade-In Value', 'Insurance', 'Warranty'],
  },
  {
    title: 'Products & Services',
    links: ['New Vehicles', 'Pre-Owned', 'Certified CPO', 'Value Your Trade'],
  },
  {
    title: 'Customer Service',
    links: ['Service Center', 'Parts & Accessories', 'Financing Options', 'Roadside Help'],
    social: true,
  },
]

/**
 * FooterBrand — Footer 8
 *
 * Props
 * ─────
 * tagline                  string        newsletter tagline text
 * newsletterPlaceholder    string        input placeholder
 * newsletterBtnLabel       string        subscribe button label
 * columns                  { title, links, social? }[]
 * copyright                string
 * legalLinks               string[]      bottom bar link labels
 * onSubscribe              (email) => void
 * style                    CSSProperties
 */
export function FooterBrand({
  tagline               = 'Receive pricing updates, shopping tips & more!',
  newsletterPlaceholder = 'Your E-Mail Address',
  newsletterBtnLabel    = 'Subscribe',
  columns               = DEFAULT_BRAND_COLUMNS,
  copyright             = '© Copyright 2025 All Rights Reserved.',
  legalLinks            = ['Terms & Conditions', 'Privacy Policy'],
  onSubscribe,
  style,
}) {
  const [email, setEmail] = useState('')

  function handleSubscribe() {
    onSubscribe?.(email)
    setEmail('')
  }

  return (
    <footer className="footer footer-brand" style={style}>
      <div className="footer-inner">
        {/* Newsletter block */}
        <div className="footer-brand-top">
          <FooterLogo inverse />
          <p className="footer-brand-tagline">{tagline}</p>
          <div className="footer-brand-newsletter">
            <EnvelopeSimple size={18} color="var(--color-content-tertiary)" />
            <input
              type="email"
              className="footer-brand-input"
              placeholder={newsletterPlaceholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
            />
            <Button variant="primary" size="sm" onClick={handleSubscribe}>
              {newsletterBtnLabel}
            </Button>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-brand-col-grid">
          {columns.map((col, i) => (
            <div key={i} className="footer-brand-col">
              <div className="footer-brand-col-header">{col.title}</div>
              {col.links.map((link, j) => (
                <a key={j} href="#" className="footer-brand-col-link">{link}</a>
              ))}
              {col.social && (
                <div style={{ paddingTop: 12 }}>
                  <SocialIcons size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="footer-separator" role="separator" />

        {/* Bottom bar */}
        <div className="footer-brand-bottom">
          <p className="footer-copyright">{copyright}</p>
          <div className="footer-legal-links">
            {legalLinks.map((link, i) => (
              <a key={i} href="#" className="footer-legal-link">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Default export ───────────────────────────────────────────────────────────

export default function Footer({ variant = 'simple', ...props }) {
  if (variant === 'columns') return <FooterColumns {...props} />
  if (variant === 'brand')   return <FooterBrand   {...props} />
  return <FooterSimple {...props} />
}
