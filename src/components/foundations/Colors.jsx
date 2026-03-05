import { useState, useEffect } from 'react'
import '../../styles/colors.css'
import Button from '../atoms/Button'
import Badge from '../atoms/Badge'

// ─────────────────────────────────────────────────────────────────────────────
// 1. Static color data
// ─────────────────────────────────────────────────────────────────────────────

const PRIMITIVES = [
  {
    name: 'Brand',
    swatches: [
      { step: 100, hex: '#d5e0eb' }, { step: 200, hex: '#aac1d6' },
      { step: 300, hex: '#80a2c2' }, { step: 400, hex: '#5583ad' },
      { step: 500, hex: '#2b6499' }, { step: 600, hex: '#22507a' },
      { step: 700, hex: '#1a3c5c' }, { step: 800, hex: '#11283d' },
      { step: 900, hex: '#09141f' },
    ],
  },
  {
    name: 'Brand Secondary',
    swatches: [
      { step: 100, hex: '#d5e0eb' }, { step: 200, hex: '#aac1d6' },
      { step: 300, hex: '#80a2c2' }, { step: 400, hex: '#5583ad' },
      { step: 500, hex: '#2b6499' }, { step: 600, hex: '#22507a' },
      { step: 700, hex: '#1a3c5c' }, { step: 800, hex: '#11283d' },
      { step: 900, hex: '#09141f' },
    ],
  },
  {
    name: 'Neutral',
    swatches: [
      { step: 50,  hex: '#f1f2f4' }, { step: 100, hex: '#e1e4e9' },
      { step: 150, hex: '#d2d6dd' }, { step: 200, hex: '#c2c8d1' },
      { step: 250, hex: '#b2bac6' }, { step: 300, hex: '#a3acba' },
      { step: 350, hex: '#939eae' }, { step: 400, hex: '#8390a2' },
      { step: 450, hex: '#748297' }, { step: 500, hex: '#64748b' },
      { step: 550, hex: '#5a687d' }, { step: 600, hex: '#505d6f' },
      { step: 650, hex: '#3c4553' }, { step: 700, hex: '#323945' },
      { step: 750, hex: '#272e37' }, { step: 800, hex: '#1d2229' },
      { step: 850, hex: '#13161b' }, { step: 900, hex: '#090b0d' },
    ],
  },
  {
    name: 'Blue',
    swatches: [
      { step: 100, hex: '#d6ddff' }, { step: 200, hex: '#adbbff' },
      { step: 300, hex: '#8599ff' }, { step: 400, hex: '#5c77ff' },
      { step: 500, hex: '#3355ff' }, { step: 600, hex: '#2944cc' },
      { step: 700, hex: '#1f3399' }, { step: 800, hex: '#142266' },
      { step: 900, hex: '#0a1133' },
    ],
  },
  {
    name: 'Purple',
    swatches: [
      { step: 100, hex: '#e4d6ff' }, { step: 200, hex: '#c9adff' },
      { step: 300, hex: '#ad85ff' }, { step: 400, hex: '#925cff' },
      { step: 500, hex: '#7733ff' }, { step: 600, hex: '#5f29cc' },
      { step: 700, hex: '#471f99' }, { step: 800, hex: '#301466' },
      { step: 900, hex: '#180a33' },
    ],
  },
  {
    name: 'Violet',
    swatches: [
      { step: 100, hex: '#f1d6ff' }, { step: 200, hex: '#e4adff' },
      { step: 300, hex: '#d685ff' }, { step: 400, hex: '#c95cff' },
      { step: 500, hex: '#bb33ff' }, { step: 600, hex: '#9629cc' },
      { step: 700, hex: '#701f99' }, { step: 800, hex: '#4b1466' },
      { step: 900, hex: '#250a33' },
    ],
  },
  {
    name: 'Red',
    swatches: [
      { step: 100, hex: '#facccc' }, { step: 200, hex: '#f59999' },
      { step: 300, hex: '#ef6666' }, { step: 400, hex: '#ea3333' },
      { step: 500, hex: '#e50000' }, { step: 600, hex: '#b70000' },
      { step: 700, hex: '#890000' }, { step: 800, hex: '#5c0000' },
      { step: 900, hex: '#2e0000' },
    ],
  },
  {
    name: 'Pink',
    swatches: [
      { step: 100, hex: '#ffd6dd' }, { step: 200, hex: '#ffadbb' },
      { step: 300, hex: '#ff8599' }, { step: 400, hex: '#ff5c77' },
      { step: 500, hex: '#ff3355' }, { step: 600, hex: '#cc2944' },
      { step: 700, hex: '#991f33' }, { step: 800, hex: '#661422' },
      { step: 900, hex: '#330a11' },
    ],
  },
  {
    name: 'Orange',
    swatches: [
      { step: 100, hex: '#ffe6cc' }, { step: 200, hex: '#ffcc99' },
      { step: 300, hex: '#ffb366' }, { step: 400, hex: '#ff9933' },
      { step: 500, hex: '#ff8000' }, { step: 600, hex: '#cc6600' },
      { step: 700, hex: '#994d00' }, { step: 800, hex: '#663300' },
      { step: 900, hex: '#331a00' },
    ],
  },
  {
    name: 'Yellow',
    swatches: [
      { step: 100, hex: '#fff5cc' }, { step: 200, hex: '#ffeb99' },
      { step: 300, hex: '#ffe066' }, { step: 400, hex: '#ffd633' },
      { step: 500, hex: '#ffcc00' }, { step: 600, hex: '#cca300' },
      { step: 700, hex: '#997a00' }, { step: 800, hex: '#665200' },
      { step: 900, hex: '#332900' },
    ],
  },
  {
    name: 'Green',
    swatches: [
      { step: 100, hex: '#ccebd6' }, { step: 200, hex: '#99d6ad' },
      { step: 300, hex: '#66c285' }, { step: 400, hex: '#33ad5c' },
      { step: 500, hex: '#009933' }, { step: 600, hex: '#007a29' },
      { step: 700, hex: '#005c1f' }, { step: 800, hex: '#003d14' },
      { step: 900, hex: '#001f0a' },
    ],
  },
  {
    name: 'Teal',
    swatches: [
      { step: 100, hex: '#ccf5f5' }, { step: 200, hex: '#99ebeb' },
      { step: 300, hex: '#66e0e0' }, { step: 400, hex: '#33d6d6' },
      { step: 500, hex: '#00cccc' }, { step: 600, hex: '#00a3a3' },
      { step: 700, hex: '#007a7a' }, { step: 800, hex: '#005252' },
      { step: 900, hex: '#002929' },
    ],
  },
  {
    name: 'Cyan',
    swatches: [
      { step: 100, hex: '#cceeff' }, { step: 200, hex: '#99ddff' },
      { step: 300, hex: '#66ccff' }, { step: 400, hex: '#33bbff' },
      { step: 500, hex: '#00aaff' }, { step: 600, hex: '#0088cc' },
      { step: 700, hex: '#006699' }, { step: 800, hex: '#004466' },
      { step: 900, hex: '#002233' },
    ],
  },
]

const SEMANTIC = [
  {
    category: 'Content',
    tokens: [
      { name: 'Primary',           light: '#090b0d', dark: '#e1e4e9' },
      { name: 'Secondary',         light: '#1d2229', dark: '#c2c8d1' },
      { name: 'Tertiary',          light: '#3c4553', dark: '#8390a2' },
      { name: 'Primary Inverse',   light: '#ffffff', dark: '#090b0d' },
      { name: 'Secondary Inverse', light: '#e1e4e9', dark: '#323945' },
      { name: 'Tertiary Inverse',  light: '#a3acba', dark: '#505d6f' },
      { name: 'Disabled',          light: '#a3acba', dark: '#505d6f' },
      { name: 'Brand',             light: '#2b6499', dark: '#80a2c2' },
      { name: 'Brand Hover',       light: '#22507a', dark: '#80a2c2' },
      { name: 'Brand Pressed',     light: '#11283d', dark: '#aac1d6' },
      { name: 'Info',              light: '#3355ff', dark: '#8599ff' },
      { name: 'Warning',           light: '#ffcc00', dark: '#ffe066' },
      { name: 'Warning Bold',      light: '#997a00', dark: '#ffd633' },
      { name: 'Error',             light: '#e50000', dark: '#ef6666' },
      { name: 'Error Bold',        light: '#b70000', dark: '#f59999' },
      { name: 'Success',           light: '#009933', dark: '#66c285' },
      { name: 'Success Bold',      light: '#007a29', dark: '#99d6ad' },
    ],
  },
  {
    category: 'Background',
    tokens: [
      { name: 'Primary',        light: '#ffffff', dark: '#090b0d' },
      { name: 'Hover',          light: '#f1f2f4', dark: '#1d2229' },
      { name: 'Pressed',        light: '#e1e4e9', dark: '#323945' },
      { name: 'Selected',       light: '#d5e0eb', dark: '#09141f' },
      { name: 'Disabled',       light: '#f1f2f4', dark: '#1d2229' },
      { name: 'Inverse',        light: '#090b0d', dark: '#e1e4e9' },
      { name: 'Brand',          light: '#2b6499', dark: '#80a2c2' },
      { name: 'Brand Hover',    light: '#22507a', dark: '#aac1d6' },
      { name: 'Brand Pressed',  light: '#1a3c5c', dark: '#d5e0eb' },
      { name: 'Info',           light: '#3355ff', dark: '#8599ff' },
      { name: 'Info Subtle',    light: '#d6ddff', dark: '#0a1133' },
      { name: 'Warning',        light: '#ffcc00', dark: '#ffe066' },
      { name: 'Warning Subtle', light: '#fff5cc', dark: '#332900' },
      { name: 'Error',          light: '#e50000', dark: '#ef6666' },
      { name: 'Error Subtle',   light: '#facccc', dark: '#2e0000' },
      { name: 'Success',        light: '#009933', dark: '#66c285' },
      { name: 'Success Subtle', light: '#ccebd6', dark: '#001f0a' },
    ],
  },
  {
    category: 'Border',
    tokens: [
      { name: 'Primary',   light: '#505d6f', dark: '#c2c8d1' },
      { name: 'Secondary', light: '#8390a2', dark: '#a3acba' },
      { name: 'Tertiary',  light: '#c2c8d1', dark: '#64748b' },
      { name: 'Disabled',  light: '#f1f2f4', dark: '#505d6f' },
      { name: 'Brand',     light: '#2b6499', dark: '#80a2c2' },
      { name: 'Inverse',   light: '#ffffff', dark: '#000000' },
      { name: 'Focus',     light: '#2b6499', dark: '#80a2c2' },
      { name: 'Info',      light: '#3355ff', dark: '#8599ff' },
      { name: 'Warning',   light: '#ffcc00', dark: '#ffe066' },
      { name: 'Error',     light: '#e50000', dark: '#ef6666' },
      { name: 'Success',   light: '#009933', dark: '#66c285' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// 2. Theme customizer utilities
// ─────────────────────────────────────────────────────────────────────────────

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
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  return '#' + [r, g, b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('')
}

const STEPS = [100, 200, 300, 400, 500, 600, 700, 800, 900]

function isValidHex(hex) {
  return /^#[0-9a-fA-F]{6}$/.test(hex)
}

/**
 * Generate a 9-step scale where step 500 is ALWAYS the exact picked hex.
 * Lighter steps (100–400) interpolate from lMax down to l500.
 * Darker steps (600–900) interpolate from l500 down to lMin.
 * Hue and saturation are preserved from the picked color throughout.
 */
function generateScale(hex) {
  if (!isValidHex(hex)) return Object.fromEntries(STEPS.map(s => [s, '#cccccc']))
  const [h, s, l500] = hexToHsl(hex)
  // Calibrated to match original Brand scale (#2b6499 at L≈38%):
  // step 100 = ~88% L (+50 from 500), step 900 = ~8% L (-30 from 500)
  const lMax = Math.min(95, l500 + 50)   // step 100 lightness
  const lMin = Math.max(5,  l500 - 30)   // step 900 lightness
  return Object.fromEntries(STEPS.map((step, i) => {
    if (step === 500) return [step, hex]  // exact picked color
    const t = i < 4 ? i / 4 : (i - 4) / 4
    const l = i < 4
      ? lMax + (l500 - lMax) * t          // 100→500: lMax down to l500
      : l500 + (lMin - l500) * t          // 500→900: l500 down to lMin
    return [step, hslToHex(h, s, l)]
  }))
}

// Brand semantic token mappings: which scale step maps to each semantic var
const BRAND_TOKENS = [
  { css: '--color-content-brand',           label: 'content-brand',           src: 'brand',     lightStep: 500, darkStep: 300 },
  { css: '--color-content-brand-hover',     label: 'content-brand-hover',     src: 'brand',     lightStep: 600, darkStep: 300 },
  { css: '--color-content-brand-pressed',   label: 'content-brand-pressed',   src: 'brand',     lightStep: 800, darkStep: 200 },
  { css: '--color-content-brand-secondary', label: 'content-brand-secondary', src: 'secondary', lightStep: 500, darkStep: 300 },
  { css: '--color-bg-brand',                label: 'bg-brand',                src: 'brand',     lightStep: 500, darkStep: 300 },
  { css: '--color-bg-brand-hover',          label: 'bg-brand-hover',          src: 'brand',     lightStep: 600, darkStep: 200 },
  { css: '--color-bg-brand-pressed',        label: 'bg-brand-pressed',        src: 'brand',     lightStep: 700, darkStep: 100 },
  { css: '--color-bg-brand-secondary',      label: 'bg-brand-secondary',      src: 'secondary', lightStep: 500, darkStep: 300 },
  { css: '--color-bg-selected',             label: 'bg-selected',             src: 'brand',     lightStep: 100, darkStep: 900 },
  { css: '--color-border-brand',            label: 'border-brand',            src: 'brand',     lightStep: 500, darkStep: 300 },
  { css: '--color-border-focus',            label: 'border-focus',            src: 'brand',     lightStep: 500, darkStep: 300 },
]

function buildCss(brand, secondary) {
  const b = generateScale(brand)
  const s = generateScale(secondary)
  const lines = [':root {']
  STEPS.forEach(step => {
    lines.push(`  --color-brand-${step}: ${b[step]};`)
    lines.push(`  --color-brand-secondary-${step}: ${s[step]};`)
  })
  BRAND_TOKENS.forEach(({ css, src, lightStep }) => {
    lines.push(`  ${css}: ${src === 'secondary' ? s[lightStep] : b[lightStep]};`)
  })
  lines.push('}', '', '.dark {')
  BRAND_TOKENS.forEach(({ css, src, darkStep }) => {
    lines.push(`  ${css}: ${src === 'secondary' ? s[darkStep] : b[darkStep]};`)
  })
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

const LS_KEY = 'wds-custom-theme'
const BRAND_DEFAULT = '#2b6499'
const SECONDARY_DEFAULT = '#2b6499'

function loadSaved() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

// Restore saved theme on app load
;(function () {
  const saved = loadSaved()
  if (saved?.brand && saved?.secondary) applyTheme(saved.brand, saved.secondary)
})()

// ─────────────────────────────────────────────────────────────────────────────
// 3. Shared sub-components
// ─────────────────────────────────────────────────────────────────────────────

function isDark(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 128
}

function SectionHeader({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
      <div style={{
        fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
        color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
        background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6,
        flexShrink: 0,
      }}>
        {label}
      </div>
      <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
    </div>
  )
}

// ── Primitives tab ────────────────────────────────────────────────────────────

function PrimitiveRow({ name, swatches }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{
        fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
        color: 'var(--color-content-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase',
        marginBottom: 8,
      }}>
        {name}
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        {swatches.map(({ step, hex }) => (
          <div key={step} style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              height: 48, background: hex, borderRadius: 6,
              border: hex === '#ffffff' ? '1px solid #e5e7eb' : 'none',
            }} />
            <div style={{ marginTop: 6, fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-primary)', lineHeight: '14px' }}>
              {step}
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: 'var(--color-content-tertiary)', letterSpacing: '0.02em' }}>
              {hex}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Semantic Tokens tab ───────────────────────────────────────────────────────

function SemanticRow({ token }) {
  const { name, light, dark } = token
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '180px 1fr 1fr',
      alignItems: 'center', gap: 12, padding: '8px 0',
      borderBottom: '1px solid var(--color-border-tertiary)',
    }}>
      <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-primary)' }}>{name}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 40, height: 32, borderRadius: 6, background: light, border: light === '#ffffff' ? '1px solid #e5e7eb' : 'none', flexShrink: 0 }} />
        <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-secondary)' }}>{light}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 40, height: 32, borderRadius: 6, background: dark, flexShrink: 0 }} />
        <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-secondary)' }}>{dark}</div>
      </div>
    </div>
  )
}

function SemanticSection({ category, tokens }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: 'var(--color-content-primary)', margin: '0 0 4px', letterSpacing: '-0.3px' }}>
        {category}
      </h3>
      <div style={{
        display: 'grid', gridTemplateColumns: '180px 1fr 1fr',
        gap: 12, padding: '8px 0',
        borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 4,
      }}>
        {['Token', 'Light', 'Dark'].map(col => (
          <div key={col} style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{col}</div>
        ))}
      </div>
      {tokens.map(t => <SemanticRow key={t.name} token={t} />)}
    </div>
  )
}

// ── Theme tab ─────────────────────────────────────────────────────────────────

function ColorPicker({ label, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)' }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Color swatch / native picker */}
        <div style={{ position: 'relative', width: 44, height: 44, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border-tertiary)', flexShrink: 0 }}>
          <input
            type="color"
            value={isValidHex(value) ? value : BRAND_DEFAULT}
            onChange={e => onChange(e.target.value)}
            style={{ position: 'absolute', top: -4, left: -4, width: 'calc(100% + 8px)', height: 'calc(100% + 8px)', border: 'none', cursor: 'pointer', padding: 0 }}
          />
        </div>
        {/* Hex text input */}
        <input
          type="text"
          value={value}
          onChange={e => { if (/^#[0-9a-fA-F]{0,6}$/.test(e.target.value)) onChange(e.target.value) }}
          style={{
            fontFamily: 'monospace', fontSize: 13,
            color: 'var(--color-content-primary)',
            background: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border-tertiary)',
            borderRadius: 6, padding: '10px 12px', width: 100,
          }}
        />
      </div>
    </div>
  )
}

function PaletteScale({ label, scale }) {
  return (
    <div>
      <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
        {label}
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        {STEPS.map((step, i) => (
          <div key={step} style={{ flex: 1, minWidth: 0 }}>
            <div style={{ height: 48, borderRadius: 6, background: scale[step], border: '1px solid rgba(0,0,0,0.06)' }} />
            <div style={{ marginTop: 6, fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-primary)', lineHeight: '14px' }}>{step}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'var(--color-content-tertiary)' }}>{scale[step]}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 9, color: step === 500 ? 'var(--color-content-brand)' : 'var(--color-content-disabled)' }}>{Math.round(hexToHsl(scale[step])[2])}% L{step === 500 ? ' ★' : ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LiveSemanticRow({ mapping, brandScale, secondaryScale }) {
  const scale = mapping.src === 'secondary' ? secondaryScale : brandScale
  const lightHex = scale[mapping.lightStep]
  const darkHex = scale[mapping.darkStep]
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '220px auto auto 1fr',
      alignItems: 'center', gap: 12, padding: '8px 0',
      borderBottom: '1px solid var(--color-border-tertiary)',
    }}>
      {/* CSS var name */}
      <code style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--color-content-info)' }}>
        {mapping.css}
      </code>
      {/* Light */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 36, height: 28, borderRadius: 5, background: lightHex, border: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--color-content-secondary)' }}>{lightHex}</div>
          <div style={{ fontFamily: 'Inter', fontSize: 10, color: 'var(--color-content-tertiary)' }}>brand-{mapping.lightStep}</div>
        </div>
      </div>
      {/* Dark */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 36, height: 28, borderRadius: 5, background: darkHex, border: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--color-content-secondary)' }}>{darkHex}</div>
          <div style={{ fontFamily: 'Inter', fontSize: 10, color: 'var(--color-content-tertiary)' }}>brand-{mapping.darkStep}</div>
        </div>
      </div>
      {/* Source */}
      <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)' }}>
        ← {mapping.src === 'secondary' ? 'Brand Secondary' : 'Brand'}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. Main component
// ─────────────────────────────────────────────────────────────────────────────

const TABS = ['Primitives', 'Semantic Tokens', 'Theme']

export default function Colors() {
  const [tab, setTab] = useState('Primitives')
  const [brand, setBrand] = useState(() => loadSaved()?.brand ?? BRAND_DEFAULT)
  const [secondary, setSecondary] = useState(() => loadSaved()?.secondary ?? SECONDARY_DEFAULT)
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
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--color-bg-primary)', minHeight: '100vh', padding: '48px 40px', maxWidth: 1200, margin: '0 auto' }}>

      {/* Page header */}
      <div style={{ marginBottom: 36 }}>
        <p style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
          WDS · Foundations
        </p>
        <h1 style={{ fontFamily: 'Inter', fontSize: 40, fontWeight: 600, lineHeight: '48px', letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px' }}>
          Colors
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: '24px', color: 'var(--color-content-secondary)', margin: 0 }}>
          13 primitive palettes · Semantic tokens for Content, Background, and Border · Light &amp; Dark mode · Live theme customizer.
        </p>
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 40, gap: 0 }}>
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              fontFamily: 'Inter', fontSize: 13,
              fontWeight: tab === t ? 600 : 400,
              color: tab === t ? 'var(--color-content-primary)' : 'var(--color-content-tertiary)',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 20px',
              borderBottom: tab === t ? '2px solid var(--color-content-brand)' : '2px solid transparent',
              marginBottom: -1,
              transition: 'color 120ms',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Tab: Primitives ── */}
      {tab === 'Primitives' && (
        <div>
          <SectionHeader label="Primitive Palette" />
          {PRIMITIVES.map(p => <PrimitiveRow key={p.name} {...p} />)}
        </div>
      )}

      {/* ── Tab: Semantic Tokens ── */}
      {tab === 'Semantic Tokens' && (
        <div>
          <SectionHeader label="Semantic Tokens" />
          {SEMANTIC.map(s => <SemanticSection key={s.category} {...s} />)}
        </div>
      )}

      {/* ── Tab: Theme ── */}
      {tab === 'Theme' && (
        <div>

          {/* Color pickers */}
          <SectionHeader label="Brand Colors" />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', marginBottom: 48 }}>
            <ColorPicker label="Primary Brand" value={brand} onChange={setBrand} />
            <ColorPicker label="Brand Secondary" value={secondary} onChange={setSecondary} />
            <div style={{ display: 'flex', gap: 10 }}>
              <Button variant="primary" size="sm" onClick={exportCss}>
                {copied ? 'Copied!' : 'Export CSS'}
              </Button>
              <Button variant="outline" size="sm" onClick={reset}>
                Reset defaults
              </Button>
            </div>
          </div>

          {/* Primitive scales */}
          <SectionHeader label="Generated Primitive Scales" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 48 }}>
            <PaletteScale label="Brand" scale={brandScale} />
            <PaletteScale label="Brand Secondary" scale={secondaryScale} />
            {/* Lightness reference */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '10px 14px', background: 'var(--color-bg-hover)', borderRadius: 8, border: '1px solid var(--color-border-tertiary)' }}>
              <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0 }}>Lightness</span>
              {STEPS.map((step, i) => (
                <div key={step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--color-content-secondary)' }}>{step}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--color-content-tertiary)' }}>{Math.round(hexToHsl(brandScale[step])[2])}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live semantic tokens */}
          <SectionHeader label="Semantic Tokens (live)" />
          <p style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)', margin: '0 0 16px' }}>
            These semantic tokens reference the brand palette. They update automatically with your color picks — both light and dark mode values.
          </p>
          <div style={{ marginBottom: 48 }}>
            {/* Column headers */}
            <div style={{
              display: 'grid', gridTemplateColumns: '220px auto auto 1fr',
              gap: 12, padding: '8px 0',
              borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 4,
            }}>
              {['CSS Variable', 'Light mode', 'Dark mode', 'Source'].map(col => (
                <div key={col} style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{col}</div>
              ))}
            </div>
            {BRAND_TOKENS.map(m => (
              <LiveSemanticRow key={m.css} mapping={m} brandScale={brandScale} secondaryScale={secondaryScale} />
            ))}
          </div>

          {/* Live component preview */}
          <SectionHeader label="Live Preview" />
          <p style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)', margin: '0 0 24px' }}>
            All components below consume the CSS variables above — they update instantly as you adjust the pickers.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Buttons</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant="primary" size="md">Primary</Button>
                <Button variant="secondary" size="md">Secondary</Button>
                <Button variant="outline" size="md">Outline</Button>
                <Button variant="link" size="md">Link</Button>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Badges</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge color="primary" size="lg">Primary</Badge>
                <Badge color="primary" size="md" type="dot">With dot</Badge>
                <Badge color="success" size="md">Success</Badge>
                <Badge color="error" size="md">Error</Badge>
                <Badge color="warning" size="md">Warning</Badge>
                <Badge color="info" size="md">Info</Badge>
              </div>
            </div>
          </div>

          {/* Export */}
          <SectionHeader label="Export CSS" />
          <p style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)', margin: '0 0 16px' }}>
            Copy and paste into <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--color-bg-hover)', padding: '1px 5px', borderRadius: 3 }}>src/styles/colors.css</code> to make the theme permanent.
          </p>
          <pre style={{
            background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)',
            borderRadius: 8, padding: '20px 24px', fontFamily: 'monospace', fontSize: 12,
            color: 'var(--color-content-primary)', lineHeight: 1.7, margin: '0 0 16px',
            maxHeight: 320, overflow: 'auto',
          }}>
            {buildCss(brand, secondary)}
          </pre>
          <Button variant="primary" size="sm" onClick={exportCss}>
            {copied ? '✓ Copied to clipboard' : 'Copy to clipboard'}
          </Button>

        </div>
      )}

    </div>
  )
}
