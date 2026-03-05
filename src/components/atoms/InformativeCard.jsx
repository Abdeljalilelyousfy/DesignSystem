import { Trophy, Headset } from '@phosphor-icons/react'
import Button from './Button'

// ─── Sub-components ───────────────────────────────────────────────────────────

function IconCircle({ icon: Icon = Trophy, size = 52 }) {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: 999,
      background: 'var(--color-bg-success-subtle)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <Icon size={Math.round(size * 0.54)} color="var(--color-content-success)" />
    </div>
  )
}

const BASE = {
  borderRadius: 12,
  padding: 24,
  overflow: 'hidden',
  boxSizing: 'border-box',
}

// ─── Exported component ───────────────────────────────────────────────────────

/**
 * Informative Card — 4 variants (adapted from Figma node 2623:176347)
 *
 * variant  1 | 2 | 3 | 4
 */
export default function InformativeCard({
  variant = 1,
  icon       = Trophy,
  title,
  description,
  price,                      // variant 3 price range e.g. "$15K – $30K"
  count,                      // variant 2 count e.g. "245 cars"; variant 3 stock
  buttonLabel,
  image,                      // variant 3 optional image src
  style,
}) {
  // ── Variant 1 ── white, 18px heading, full body, primary button
  if (variant === 1) {
    return (
      <div style={{
        ...BASE, width: 296,
        background: 'var(--color-bg-primary)',
        border: '1px solid var(--color-border-tertiary)',
        display: 'flex', flexDirection: 'column', gap: 20,
        ...style,
      }}>
        <IconCircle icon={icon} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600, lineHeight: '26px', color: 'var(--color-content-primary)' }}>
            {title || 'Welcome to Auto Dealers'}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '22px', color: 'var(--color-content-secondary)' }}>
            {description || "Whether you're buying your first car, trading in, or upgrading, we're here to make your journey smooth and stress-free."}
          </div>
        </div>
        <Button variant="primary" size="sm" style={{ width: '100%', borderRadius: 8 }}>
          {buttonLabel || 'Browse Vehicles'}
        </Button>
      </div>
    )
  }

  // ── Variant 2 ── gray bg, 16px heading, compact, outlined button
  if (variant === 2) {
    return (
      <div style={{
        ...BASE, width: 296,
        background: 'var(--color-bg-hover)',
        border: '1px solid var(--color-border-tertiary)',
        display: 'flex', flexDirection: 'column', gap: 20,
        ...style,
      }}>
        <IconCircle icon={icon} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 600, color: 'var(--color-content-primary)' }}>
            {title || 'Under $10K'}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400, color: 'var(--color-content-secondary)' }}>
            {count || '245 cars'}
          </div>
        </div>
        <Button variant="outline" size="sm" style={{ width: '100%', borderRadius: 8 }}>
          {buttonLabel || 'Browse'}
        </Button>
      </div>
    )
  }

  // ── Variant 3 ── horizontal banner, gray bg, image left + text right
  if (variant === 3) {
    return (
      <div style={{
        ...BASE,
        background: 'var(--color-bg-hover)',
        border: '1px solid var(--color-border-tertiary)',
        display: 'flex', flexDirection: 'row', gap: 24,
        ...style,
      }}>
        {/* Image area */}
        <div style={{
          width: 320, flexShrink: 0, borderRadius: 8, overflow: 'hidden',
          background: 'var(--color-bg-success-subtle)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: 200,
        }}>
          {image
            ? <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <Trophy size={56} color="var(--color-content-success)" style={{ opacity: 0.5 }} />
          }
        </div>
        {/* Text area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 600, lineHeight: '30px', color: 'var(--color-content-primary)', marginBottom: 4 }}>
                {title || 'Mid-Range'}
              </div>
              {price && (
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600, color: 'var(--color-content-brand)' }}>
                  {price}
                </div>
              )}
            </div>
            {description && (
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '22px', color: 'var(--color-content-secondary)' }}>
                {description}
              </div>
            )}
            {count && (
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 400, color: 'var(--color-content-tertiary)' }}>
                {count}
              </div>
            )}
          </div>
          <Button variant="primary" size="sm" style={{ width: '100%', borderRadius: 8 }}>
            {buttonLabel || 'View Collection'}
          </Button>
        </div>
      </div>
    )
  }

  // ── Variant 4 ── white, brand-color heading, single icon, primary button
  if (variant === 4) {
    return (
      <div style={{
        ...BASE, width: 296,
        background: 'var(--color-bg-primary)',
        border: '1px solid var(--color-border-tertiary)',
        display: 'flex', flexDirection: 'column', gap: 20,
        ...style,
      }}>
        <IconCircle icon={icon} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600, lineHeight: '26px', color: 'var(--color-content-brand)' }}>
            {title || 'Welcome to Auto Dealers'}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '22px', color: 'var(--color-content-secondary)' }}>
            {description || "Whether you're buying your first car, trading in, or upgrading, we're here to make your journey smooth and stress-free."}
          </div>
        </div>
        <Button variant="primary" size="sm" style={{ width: '100%', borderRadius: 8 }}>
          {buttonLabel || 'Browse Vehicles'}
        </Button>
      </div>
    )
  }

  return null
}
