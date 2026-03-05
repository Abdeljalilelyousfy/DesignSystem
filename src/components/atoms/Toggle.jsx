import { useId } from 'react'
import '../../styles/checkboxes.css'

/**
 * Toggle — pill-shaped switch (on / off).
 *
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean}        checked        - controlled checked state
 * @param {boolean}        defaultChecked - uncontrolled default
 * @param {function}       onChange       - (e) => void
 * @param {boolean}        disabled
 * @param {string}         label          - label text beside the toggle
 * @param {string}         subtitle       - muted helper text below the label
 * @param {string}         name
 * @param {string}         id             - auto-generated if omitted
 * @param {string}         className      - added to the wrapper
 * @param {object}         style          - added to the wrapper
 */
export default function Toggle({
  size         = 'md',
  checked,
  defaultChecked,
  onChange,
  disabled     = false,
  label,
  subtitle,
  name,
  id: idProp,
  className    = '',
  style,
  ...props
}) {
  const autoId     = useId()
  const id         = idProp ?? autoId
  const wrapperCls = ['toggle-control', `toggle-${size}`, className].filter(Boolean).join(' ')

  return (
    <label className={wrapperCls} style={style}>
      <input
        id={id}
        type="checkbox"
        className="toggle-hidden"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        {...props}
      />
      <span className="toggle-track" aria-hidden="true">
        <span className="toggle-thumb" />
      </span>
      {(label || subtitle) && (
        <div className="toggle-label-group">
          {label    && <span className="toggle-label">{label}</span>}
          {subtitle && <span className="toggle-subtitle">{subtitle}</span>}
        </div>
      )}
    </label>
  )
}
