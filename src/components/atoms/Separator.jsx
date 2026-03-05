import '../../styles/separator.css'

/**
 * Separator — horizontal or vertical divider line.
 *
 * @param {'horizontal'|'vertical'} orientation  - default 'horizontal'
 * @param {string}                  label        - optional centred text label (horizontal only)
 * @param {string}                  className    - added to the root element
 * @param {object}                  style        - added to the root element
 */
export default function Separator({
  orientation = 'horizontal',
  label,
  className   = '',
  style,
}) {
  if (orientation === 'vertical') {
    return (
      <div
        className={['separator-v', className].filter(Boolean).join(' ')}
        style={style}
        role="separator"
        aria-orientation="vertical"
      />
    )
  }

  if (label) {
    return (
      <div
        className={['separator-labeled', className].filter(Boolean).join(' ')}
        style={style}
        role="separator"
        aria-label={label}
      >
        <hr className="separator-labeled-line" />
        <span className="separator-label-text">{label}</span>
        <hr className="separator-labeled-line" />
      </div>
    )
  }

  return (
    <hr
      className={['separator-h', className].filter(Boolean).join(' ')}
      style={style}
    />
  )
}
