import { Info, CheckCircle, Warning, XCircle, BellSimple, X } from '@phosphor-icons/react'
import '../../styles/alerts.css'

// ─── Default icons per variant ────────────────────────────────────────────────

const VARIANT_ICONS = {
  active:  <BellSimple  weight="light" size={20} />,
  error:   <XCircle     weight="light" size={20} />,
  warning: <Warning     weight="light" size={20} />,
  success: <CheckCircle weight="light" size={20} />,
  info:    <Info        weight="light" size={20} />,
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Alert
 *
 * @param {string}    variant      - 'active' | 'error' | 'warning' | 'success' | 'info'
 * @param {string}    size         - 'desktop' | 'mobile'
 * @param {string}    title        - headline text
 * @param {string}    description  - supporting body text
 * @param {ReactNode} icon         - override the default semantic icon
 * @param {boolean}   showIcon     - show/hide the left icon (default true)
 * @param {boolean}   showClose    - show/hide the dismiss button (default true)
 * @param {boolean}   showAction   - show/hide the action link button (default false)
 * @param {string}    actionLabel  - label for the action button (default 'Learn more')
 * @param {function}  onAction     - action button click handler
 * @param {function}  onClose      - close button click handler
 * @param {string}    className
 * @param {object}    style
 */
export default function Alert({
  variant     = 'info',
  size        = 'desktop',
  title,
  description,
  icon,
  showIcon    = true,
  showClose   = true,
  showAction  = false,
  actionLabel = 'Learn more',
  onAction,
  onClose,
  className   = '',
  style,
  ...props
}) {
  const displayIcon = icon ?? VARIANT_ICONS[variant]
  const cls = [
    'alert',
    `alert-${variant}`,
    size === 'mobile' ? 'alert-mobile' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={cls} role="alert" style={style} {...props}>

      {showIcon && (
        <span className="alert-icon" aria-hidden="true">
          {displayIcon}
        </span>
      )}

      <div className="alert-body">
        <div className="alert-content">
          {title       && <p className="alert-title">{title}</p>}
          {description && <p className="alert-description">{description}</p>}
        </div>
        {showAction && (
          <button className="alert-action" onClick={onAction}>
            {actionLabel}
          </button>
        )}
      </div>

      {showClose && (
        <button
          className="alert-close"
          onClick={onClose}
          aria-label="Dismiss alert"
        >
          <X size={20} weight="regular" />
        </button>
      )}

    </div>
  )
}
