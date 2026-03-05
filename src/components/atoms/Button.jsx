import '../../styles/buttons.css'

// ─── Constants ────────────────────────────────────────────────────────────────

// Recommended icon sizes per button size (matches Figma spec)
const BUTTON_ICON_SIZES = {
  sm:   18,
  md:   18,
  lg:   20,
  xl:   20,
  '2xl': 32,
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Button
 *
 * @param {string}      variant   - 'primary' | 'secondary' | 'outline' | 'link'
 * @param {string}      size      - 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 * @param {ReactNode}   leftIcon  - icon rendered before the label
 * @param {ReactNode}   rightIcon - icon rendered after the label
 * @param {boolean}     loading   - shows spinner, disables interaction
 * @param {boolean}     disabled  - disables interaction
 * @param {string}      type      - HTML button type ('button' | 'submit' | 'reset')
 * @param {function}    onClick
 * @param {ReactNode}   children  - button label
 * @param {string}      className - additional CSS classes
 * @param {object}      style     - additional inline styles
 */
export default function Button({
  variant   = 'primary',
  size      = 'md',
  leftIcon,
  rightIcon,
  loading   = false,
  disabled  = false,
  type      = 'button',
  onClick,
  children,
  className = '',
  style,
  ...props
}) {
  const iconSizePx = BUTTON_ICON_SIZES[size] ?? 18
  const isDisabled = disabled || loading
  const cls = ['btn', `btn-${variant}`, `btn-${size}`, className].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={cls}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
      {...props}
    >
      {loading ? (
        <span
          className="btn-spinner"
          style={{ width: iconSizePx, height: iconSizePx }}
          aria-hidden="true"
        />
      ) : leftIcon ? (
        <span
          aria-hidden="true"
          style={{ display: 'flex', alignItems: 'center', width: iconSizePx, height: iconSizePx, flexShrink: 0 }}
        >
          {leftIcon}
        </span>
      ) : null}

      {children}

      {!loading && rightIcon ? (
        <span
          aria-hidden="true"
          style={{ display: 'flex', alignItems: 'center', width: iconSizePx, height: iconSizePx, flexShrink: 0 }}
        >
          {rightIcon}
        </span>
      ) : null}
    </button>
  )
}
