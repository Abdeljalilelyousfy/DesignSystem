import { cloneElement } from 'react'
import '../../styles/buttons.css'

// ─── Constants ────────────────────────────────────────────────────────────────

// Icon sizes per button size (Figma spec: button = icon × 2)
const ICON_BUTTON_SIZES = {
  '2xs': { button: 32, icon: 16 },
  xs:    { button: 40, icon: 20 },
  sm:    { button: 48, icon: 24 },
  md:    { button: 56, icon: 28 },
  lg:    { button: 64, icon: 32 },
  xl:    { button: 72, icon: 36 },
  '2xl': { button: 80, icon: 40 },
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * IconButton — square pill button containing a single icon.
 *
 * @param {string}    variant  - 'filled' | 'outline'
 * @param {string}    size     - '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 * @param {ReactNode} icon     - icon element (use Phosphor icons; size is handled internally)
 * @param {boolean}   disabled
 * @param {string}    label    - aria-label (required for accessibility)
 * @param {string}    type     - HTML button type
 * @param {function}  onClick
 * @param {string}    className
 * @param {object}    style
 */
export default function IconButton({
  variant   = 'filled',
  size      = 'md',
  icon,
  disabled  = false,
  label,
  type      = 'button',
  onClick,
  className = '',
  style,
  ...props
}) {
  const { icon: iconSizePx } = ICON_BUTTON_SIZES[size] ?? ICON_BUTTON_SIZES.md
  const cls = ['icon-btn', `icon-btn-${variant}`, `icon-btn-${size}`, className].filter(Boolean).join(' ')
  const sizedIcon = icon ? cloneElement(icon, { size: iconSizePx }) : null

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      style={style}
      {...props}
    >
      {sizedIcon}
    </button>
  )
}
