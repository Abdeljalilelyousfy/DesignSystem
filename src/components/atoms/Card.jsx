import '../../styles/cards.css'

const VARIANT_STYLES = {
  outlined: {
    background: 'var(--color-bg-primary)',
    border: '1px solid var(--color-border-tertiary)',
  },
  elevated: {
    background: 'var(--color-bg-primary)',
    boxShadow: '0 0 4px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.10)',
  },
  filled: {
    background: 'var(--color-bg-hover)',
    border: '1px solid var(--color-border-tertiary)',
  },
  ghost: {
    background: 'transparent',
    border: '1px dashed var(--color-border-tertiary)',
  },
}

const SIZE_STYLES = {
  sm: { borderRadius: 8,  padding: '12px 14px' },
  md: { borderRadius: 12, padding: '16px 20px' },
  lg: { borderRadius: 16, padding: '24px 28px' },
}

export default function Card({
  variant  = 'outlined',
  size     = 'md',
  interactive = false,
  selected    = false,
  disabled    = false,
  onClick,
  children,
  style,
  className = '',
}) {
  const isClickable = interactive || !!onClick

  const classes = [
    'card',
    `card-${variant}`,
    isClickable && !disabled ? 'card-interactive' : '',
    selected  ? 'card-selected'  : '',
    disabled  ? 'card-disabled'  : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      onClick={!disabled && isClickable ? onClick : undefined}
      style={{
        ...VARIANT_STYLES[variant],
        ...SIZE_STYLES[size],
        opacity: disabled ? 0.45 : 1,
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
