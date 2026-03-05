import { cloneElement } from 'react'
import '../../styles/badges.css'

const ICON_SIZES = { lg: 16, md: 14, sm: 12 }

/**
 * Badge / Tag component.
 *
 * @param {'primary'|'error'|'warning'|'success'|'info'} color   - semantic colour (default: 'primary')
 * @param {'sm'|'md'|'lg'}                               size    - sm=20px, md=28px, lg=32px (default: 'md')
 * @param {boolean}                                      dot     - show a coloured dot on the left
 * @param {React.ReactElement}                           icon    - Phosphor icon element (sized automatically)
 * @param {string}                                       avatar  - initials (e.g. "JD") or image URL
 * @param {string}                                       label   - text content (alternative to children)
 * @param {string}                                       className
 * @param {object}                                       style
 *
 * Priority for left indicator: avatar > icon > dot.
 * At most one indicator is rendered.
 */
export default function Badge({
  color     = 'primary',
  size      = 'md',
  dot       = false,
  icon,
  avatar,
  label,
  children,
  className = '',
  style,
  ...props
}) {
  const cls       = ['badge', `badge-${size}`, `badge-${color}`, className].filter(Boolean).join(' ')
  const iconSizePx = ICON_SIZES[size] ?? 14

  // Resolve which left indicator to render (priority: avatar > icon > dot)
  let leftEl = null
  if (avatar) {
    const isUrl = typeof avatar === 'string' && (avatar.startsWith('http') || avatar.startsWith('/') || avatar.startsWith('data:'))
    leftEl = (
      <span className="badge-avatar-el" aria-hidden="true">
        {isUrl
          ? <img src={avatar} alt="" />
          : avatar.slice(0, 2)
        }
      </span>
    )
  } else if (icon) {
    leftEl = (
      <span className="badge-icon-el" aria-hidden="true">
        {cloneElement(icon, { size: iconSizePx, weight: icon.props.weight ?? 'regular' })}
      </span>
    )
  } else if (dot) {
    leftEl = <span className="badge-dot-el" aria-hidden="true" />
  }

  return (
    <span className={cls} style={style} {...props}>
      {leftEl}
      <span>{label ?? children}</span>
    </span>
  )
}
