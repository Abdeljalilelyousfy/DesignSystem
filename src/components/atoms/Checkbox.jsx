import { useId } from 'react'
import '../../styles/checkboxes.css'

/**
 * Checkbox — square (default) or circle check-mark control.
 *
 * @param {'square'|'circle'} shape        - 'square' = standard checkbox, 'circle' = check-circle
 * @param {'sm'|'md'|'lg'}    size
 * @param {boolean}           checked      - controlled checked state
 * @param {boolean}           defaultChecked - uncontrolled default
 * @param {function}          onChange     - (e) => void
 * @param {boolean}           disabled
 * @param {string}            label        - label text beside the control
 * @param {string}            subtitle     - muted helper text below the label
 * @param {string}            name
 * @param {string}            id           - auto-generated if omitted
 * @param {boolean}           required
 * @param {string}            className    - added to the wrapper
 * @param {object}            style        - added to the wrapper
 */
export default function Checkbox({
  shape        = 'square',
  size         = 'md',
  checked,
  defaultChecked,
  onChange,
  disabled     = false,
  label,
  subtitle,
  name,
  id: idProp,
  required     = false,
  className    = '',
  style,
  ...props
}) {
  const autoId   = useId()
  const id       = idProp ?? autoId
  const inputCls = ['cb-input', shape === 'circle' ? 'cb-check-circle' : 'cb-checkbox'].join(' ')
  const wrapperCls = ['cb-control', `cb-${size}`, className].filter(Boolean).join(' ')

  return (
    <label className={wrapperCls} style={style}>
      <input
        id={id}
        type="checkbox"
        className={inputCls}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        name={name}
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
