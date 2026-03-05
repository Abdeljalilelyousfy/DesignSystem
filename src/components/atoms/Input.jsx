import { useId } from 'react'
import { XCircle, Warning, CheckCircle, Question } from '@phosphor-icons/react'
import '../../styles/inputs.css'

// ─── Helper icon per feedback type ────────────────────────────────────────────

const HELPER_ICONS = {
  error:   <XCircle    size={14} weight="fill" />,
  warning: <Warning    size={14} weight="fill" />,
  success: <CheckCircle size={14} weight="fill" />,
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Input — single-line text field.
 *
 * @param {string}    label        - field label (renders above the box)
 * @param {string}    placeholder
 * @param {string}    value        - controlled value
 * @param {string}    defaultValue - uncontrolled default
 * @param {function}  onChange     - (e) => void
 * @param {string}    type         - HTML input type (text | email | password | number …)
 * @param {string}    name
 * @param {string}    id           - auto-generated if omitted
 * @param {string}    feedback     - '' | 'error' | 'warning' | 'success'
 * @param {string}    helperText   - message shown below the field
 * @param {ReactNode} leftIcon     - Phosphor icon (rendered at 20px)
 * @param {ReactNode} rightIcon    - Phosphor icon (rendered at 20px)
 * @param {boolean}   disabled
 * @param {boolean}   readOnly
 * @param {boolean}   required
 * @param {boolean}   autoFocus
 * @param {string}    className    - added to the outer wrapper
 * @param {object}    style        - added to the outer wrapper
 */
export default function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type        = 'text',
  name,
  id: idProp,
  feedback    = '',
  helperText,
  leftIcon,
  rightIcon,
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
        <label className="input-label" htmlFor={id}>
          {label}{required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      <div className="input-field-box">
        {leftIcon && (
          <span className="input-icon" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        <input
          id={id}
          name={name}
          type={type}
          className="input-field"
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoFocus={autoFocus}
          {...props}
        />

        {rightIcon && (
          <span className="input-icon" aria-hidden="true">
            {rightIcon}
          </span>
        )}
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
