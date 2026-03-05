import { useState, useEffect } from 'react'
import Button from '../atoms/Button'
import Badge from '../atoms/Badge'

// ─── Color utilities ────────────────────────────────────────────────────────
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }
  return [h * 360, s * 100, l * 100]
}

function hslToHex(h, s, l) {
  h /= 360; s /= 100; l /= 100
  let r, g, b
  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  return '#' + [r, g, b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('')
}

const STEPS = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const STEP_LIGHTNESS = [95, 88, 78, 65, 50, 40, 30, 20, 12]

function isValidHex(hex) {
  return /^#[0-9a-fA-F]{6}$/.test(hex)
}

function generateScale(hex) {
  if (!isValidHex(hex)) return Object.fromEntries(STEPS.map(s => [s, '#cccccc']))
  const [h, s] = hexToHsl(hex)
  return Object.fromEntries(STEPS.map((step, i) => [step, hslToHex(h, s, STEP_LIGHTNESS[i])]))
}

// ─── CSS generation ──────────────────────────────────────────────────────────
function buildCss(brand, secondary) {
  const b = generateScale(brand)
  const s = generateScale(secondary)
  const lines = [':root {']

  STEPS.forEach(step => {
    lines.push(`  --color-brand-${step}: ${b[step]};`)
    lines.push(`  --color-brand-secondary-${step}: ${s[step]};`)
  })

  const lightSemantics = [
    ['--color-content-brand',           b[500]],
    ['--color-content-brand-hover',     b[600]],
    ['--color-content-brand-pressed',   b[800]],
    ['--color-content-brand-secondary', s[500]],
    ['--color-bg-brand',                b[500]],
    ['--color-bg-brand-hover',          b[600]],
    ['--color-bg-brand-pressed',        b[700]],
    ['--color-bg-brand-secondary',      s[500]],
    ['--color-bg-selected',             b[100]],
    ['--color-border-brand',            b[500]],
    ['--color-border-focus',            b[500]],
  ]
  lightSemantics.forEach(([k, v]) => lines.push(`  ${k}: ${v};`))
  lines.push('}', '', '.dark {')

  const darkSemantics = [
    ['--color-content-brand',           b[300]],
    ['--color-content-brand-hover',     b[300]],
    ['--color-content-brand-pressed',   b[200]],
    ['--color-content-brand-secondary', s[300]],
    ['--color-bg-brand',                b[300]],
    ['--color-bg-brand-hover',          b[200]],
    ['--color-bg-brand-pressed',        b[100]],
    ['--color-bg-brand-secondary',      s[300]],
    ['--color-bg-selected',             b[900]],
    ['--color-border-brand',            b[300]],
    ['--color-border-focus',            b[300]],
  ]
  darkSemantics.forEach(([k, v]) => lines.push(`  ${k}: ${v};`))
  lines.push('}')
  return lines.join('\n')
}

function applyTheme(brand, secondary) {
  let el = document.getElementById('wds-theme-override')
  if (!el) {
    el = document.createElement('style')
    el.id = 'wds-theme-override'
    document.head.appendChild(el)
  }
  el.textContent = buildCss(brand, secondary)
}

function removeThemeOverride() {
  document.getElementById('wds-theme-override')?.remove()
}

// ─── Storage ─────────────────────────────────────────────────────────────────
const LS_KEY = 'wds-custom-theme'

function loadSaved() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

// Apply saved theme on module load so it persists across page navigation
;(function () {
  const saved = loadSaved()
  if (saved?.brand && saved?.secondary) applyTheme(saved.brand, saved.secondary)
})()

// ─── Constants ───────────────────────────────────────────────────────────────
const BRAND_DEFAULT = '#2b6499'
const SECONDARY_DEFAULT = '#2b6499'

// ─── Sub-components ───────────────────────────────────────────────────────────
function ColorPicker({ label, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)' }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          position: 'relative', width: 40, height: 40, borderRadius: 8, overflow: 'hidden',
          border: '1px solid var(--color-border-tertiary)', flexShrink: 0,
        }}>
          <input
            type="color"
            value={isValidHex(value) ? value : BRAND_DEFAULT}
            onChange={e => onChange(e.target.value)}
            style={{ position: 'absolute', top: -4, left: -4, width: 'calc(100% + 8px)', height: 'calc(100% + 8px)', border: 'none', cursor: 'pointer', padding: 0 }}
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={e => { if (/^#[0-9a-fA-F]{0,6}$/.test(e.target.value)) onChange(e.target.value) }}
          style={{
            fontFamily: 'monospace', fontSize: 13,
            color: 'var(--color-content-primary)',
            background: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border-tertiary)',
            borderRadius: 6, padding: '8px 12px', width: 100,
          }}
        />
      </div>
    </div>
  )
}

function ScaleRow({ label, scale }) {
  return (
    <div>
      <div style={{
        fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
        color: 'var(--color-content-tertiary)', letterSpacing: '0.08em',
        textTransform: 'uppercase', marginBottom: 10,
      }}>
        {label}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {STEPS.map(step => (
          <div key={step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 8,
              background: scale[step],
              border: '1px solid rgba(0,0,0,0.08)',
            }} />
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--color-content-tertiary)' }}>
              {step}
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'var(--color-content-disabled)' }}>
              {scale[step]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const SECTION_LABEL_STYLE = {
  fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
  color: 'var(--color-content-tertiary)', letterSpacing: '0.08em',
  textTransform: 'uppercase', marginBottom: 14, display: 'block',
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function Theme() {
  const saved = loadSaved()
  const [brand, setBrand] = useState(saved?.brand ?? BRAND_DEFAULT)
  const [secondary, setSecondary] = useState(saved?.secondary ?? SECONDARY_DEFAULT)
  const [copied, setCopied] = useState(false)

  const brandScale = generateScale(brand)
  const secondaryScale = generateScale(secondary)

  useEffect(() => {
    if (isValidHex(brand) && isValidHex(secondary)) {
      applyTheme(brand, secondary)
      localStorage.setItem(LS_KEY, JSON.stringify({ brand, secondary }))
    }
  }, [brand, secondary])

  const reset = () => {
    setBrand(BRAND_DEFAULT)
    setSecondary(SECONDARY_DEFAULT)
    localStorage.removeItem(LS_KEY)
    removeThemeOverride()
  }

  const exportCss = () => {
    navigator.clipboard.writeText(buildCss(brand, secondary)).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-primary)' }}>

      {/* Page header */}
      <div style={{ padding: '40px 40px 32px', borderBottom: '1px solid var(--color-border-tertiary)' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
          borderRadius: 6, padding: '3px 10px', marginBottom: 12,
        }}>
          <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Foundations
          </span>
        </div>
        <h1 style={{ fontFamily: 'Inter', fontSize: 28, fontWeight: 700, color: 'var(--color-content-primary)', margin: '0 0 8px' }}>
          Theme Customizer
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'var(--color-content-secondary)', margin: '0 0 28px', maxWidth: 600 }}>
          Adjust the Brand and Brand Secondary palettes. Changes propagate live to all components via CSS custom properties.
        </p>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
          <ColorPicker label="Primary Brand Color" value={brand} onChange={setBrand} />
          <ColorPicker label="Secondary Brand Color" value={secondary} onChange={setSecondary} />
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="primary" size="sm" onClick={exportCss}>
              {copied ? 'Copied!' : 'Export CSS'}
            </Button>
            <Button variant="outline" size="sm" onClick={reset}>
              Reset to defaults
            </Button>
          </div>
        </div>
      </div>

      {/* Generated scales */}
      <div style={{ padding: '40px', borderBottom: '1px solid var(--color-border-tertiary)', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div>
          <h2 style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 700, color: 'var(--color-content-primary)', margin: '0 0 4px' }}>
            Generated Scales
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-tertiary)', margin: '0 0 28px' }}>
            9-step tint/shade scale derived from hue + saturation of the chosen color, with fixed lightness per step.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <ScaleRow label="Brand" scale={brandScale} />
            <ScaleRow label="Brand Secondary" scale={secondaryScale} />
          </div>
        </div>

        {/* Lightness reference */}
        <div style={{ background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)', borderRadius: 8, padding: '16px 20px' }}>
          <span style={SECTION_LABEL_STYLE}>Lightness map</span>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {STEPS.map((step, i) => (
              <div key={step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--color-content-secondary)', fontWeight: 600 }}>{step}</span>
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--color-content-tertiary)' }}>{STEP_LIGHTNESS[i]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live preview */}
      <div style={{ padding: '40px', borderBottom: '1px solid var(--color-border-tertiary)' }}>
        <h2 style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 700, color: 'var(--color-content-primary)', margin: '0 0 4px' }}>
          Live Preview
        </h2>
        <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-tertiary)', margin: '0 0 32px' }}>
          Components below update instantly as you adjust the palette above.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>

          {/* Buttons */}
          <div>
            <span style={SECTION_LABEL_STYLE}>Buttons</span>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary" size="md">Primary</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="outline" size="md">Outline</Button>
              <Button variant="link" size="md">Link</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <span style={SECTION_LABEL_STYLE}>Badges</span>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <Badge color="primary" size="lg">Primary lg</Badge>
              <Badge color="primary" size="md">Primary md</Badge>
              <Badge color="primary" size="sm">Primary sm</Badge>
              <Badge color="primary" size="md" type="dot">With dot</Badge>
              <Badge color="success" size="md">Success</Badge>
              <Badge color="error" size="md">Error</Badge>
              <Badge color="warning" size="md">Warning</Badge>
              <Badge color="info" size="md">Info</Badge>
            </div>
          </div>

          {/* Semantic tokens */}
          <div>
            <span style={SECTION_LABEL_STYLE}>Active semantic brand tokens</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                ['--color-content-brand',           brandScale[500]],
                ['--color-content-brand-hover',     brandScale[600]],
                ['--color-content-brand-pressed',   brandScale[800]],
                ['--color-bg-brand',                brandScale[500]],
                ['--color-bg-brand-hover',          brandScale[600]],
                ['--color-bg-brand-pressed',        brandScale[700]],
                ['--color-bg-selected',             brandScale[100]],
                ['--color-border-brand',            brandScale[500]],
                ['--color-border-focus',            brandScale[500]],
                ['--color-content-brand-secondary', secondaryScale[500]],
                ['--color-bg-brand-secondary',      secondaryScale[500]],
              ].map(([name, val]) => (
                <div key={name} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'var(--color-bg-hover)',
                  border: '1px solid var(--color-border-tertiary)',
                  borderRadius: 6, padding: '6px 10px',
                }}>
                  <div style={{ width: 14, height: 14, borderRadius: 3, background: val, border: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--color-content-secondary)' }}>{name}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--color-content-tertiary)' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Export */}
      <div style={{ padding: '40px' }}>
        <h2 style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 700, color: 'var(--color-content-primary)', margin: '0 0 4px' }}>
          Export
        </h2>
        <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--color-content-tertiary)', margin: '0 0 20px' }}>
          Paste this CSS into <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--color-bg-hover)', padding: '1px 5px', borderRadius: 3 }}>src/styles/colors.css</code> to make the theme permanent.
        </p>
        <pre style={{
          background: 'var(--color-bg-hover)',
          border: '1px solid var(--color-border-tertiary)',
          borderRadius: 8, padding: '20px 24px',
          fontFamily: 'monospace', fontSize: 12,
          color: 'var(--color-content-primary)',
          lineHeight: 1.7, margin: '0 0 16px',
          maxHeight: 340, overflowY: 'auto', overflowX: 'auto',
        }}>
          {buildCss(brand, secondary)}
        </pre>
        <Button variant="primary" size="sm" onClick={exportCss}>
          {copied ? '✓ Copied to clipboard' : 'Copy to clipboard'}
        </Button>
      </div>

    </div>
  )
}
