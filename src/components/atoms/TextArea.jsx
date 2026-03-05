import { useId } from 'react'
import { XCircle, Warning, CheckCircle } from '@phosphor-icons/react'
import '../../styles/inputs.css'

// ─── Helper icon per feedback type ────────────────────────────────────────────

const HELPER_ICONS = {
  error:   <XCircle     size={14} weight="fill" />,
  warning: <Warning     size={14} weight="fill" />,
  success: <CheckCircle size={14} weight="fill" />,
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * TextArea — multi-line text field.
 *
 * @param {string}   label        - field label (renders above the box)
 * @param {string}   placeholder
 * @param {string}   value        - controlled value
 * @param {string}   defaultValue - uncontrolled default
 * @param {function} onChange     - (e) => void
 * @param {string}   name
 * @param {string}   id           - auto-generated if omitted
 * @param {number}   rows         - initial visible rows (default 4)
 * @param {string}   feedback     - '' | 'error' | 'warning' | 'success'
 * @param {string}   helperText   - message shown below the field
 * @param {boolean}  disabled
 * @param {boolean}  readOnly     - "View Only" state (text visible, not editable)
 * @param {boolean}  required
 * @param {boolean}  autoFocus
 * @param {string}   className    - added to the outer wrapper
 * @param {object}   style        - added to the outer wrapper
 */
export default function TextArea({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  name,
  id: idProp,
  rows        = 4,
  feedback    = '',
  helperText,
  disabled    = false,
  readOnly    = false,
  required    = false,
  autoFocus   = false,
  className   = '',
  style,
  ...props
}) {
  const autoId     = useId()
  const id         = idProp ?? autoId
  const helperIcon = HELPER_ICONS[feedback] ?? null

  const wrapperCls = [
    'input-wrapper',
    feedback ? `input-feedback-${feedback}` : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={wrapperCls} style={style}>

      {label && (
        <label className="input-label" htmlFor={id} style={{ fontWeight: 600 }}>
          {label}{required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      <div className="input-field-box input-textarea-box">
        <textarea
          id={id}
          name={name}
          className="input-field"
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          rows={rows}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoFocus={autoFocus}
          {...props}
        />
      </div>

      {(helperText || helperIcon) && (
        <div className="input-helper">
          {helperIcon && (
            <span className="input-helper-icon" aria-hidden="true">
              {helperIcon}
            </span>
          )}
          {helperText && (
            <span className="input-helper-text">{helperText}</span>
          )}
        </div>
      )}

    </div>
  )
}
