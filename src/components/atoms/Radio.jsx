import { useId } from 'react'
import '../../styles/checkboxes.css'

/**
 * Radio — circle radio button with dot indicator.
 *
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean}        checked        - controlled checked state
 * @param {boolean}        defaultChecked - uncontrolled default
 * @param {function}       onChange       - (e) => void
 * @param {boolean}        disabled
 * @param {string}         label          - label text beside the control
 * @param {string}         subtitle       - muted helper text below the label
 * @param {string}         name           - group name (required for mutual exclusion)
 * @param {string}         value          - value submitted with the form
 * @param {string}         id             - auto-generated if omitted
 * @param {string}         className      - added to the wrapper
 * @param {object}         style          - added to the wrapper
 */
export default function Radio({
  size         = 'md',
  checked,
  defaultChecked,
  onChange,
  disabled     = false,
  label,
  subtitle,
  name,
  value,
  id: idProp,
  required     = false,
  className    = '',
  style,
  ...props
}) {
  const autoId     = useId()
  const id         = idProp ?? autoId
  const wrapperCls = ['cb-control', `cb-${size}`, className].filter(Boolean).join(' ')

  return (
    <label className={wrapperCls} style={style}>
      <input
        id={id}
        type="radio"
        className="cb-input cb-radio"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        required={required}
        {...props}
      />
      {(label || subtitle) && (
        <div className="cb-label-group">
          {label    && <span className="cb-label">{label}</span>}
          {subtitle && <span className="cb-subtitle">{subtitle}</span>}
        </div>
      )}
    </label>
  )
}
