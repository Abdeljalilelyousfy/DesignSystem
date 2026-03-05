import * as Ph from '@phosphor-icons/react'
import '../styles/sidebar.css'

export const NAV_SECTIONS = [
  {
    title: 'Foundations',
    items: [
      { label: 'Typography', icon: 'TextT' },
      { label: 'Colors',     icon: 'Palette' },
      { label: 'Spacing',    icon: 'Ruler' },
      { label: 'Layout',     icon: 'SquaresFour' },
      { label: 'Shadows',    icon: 'Stack' },
      { label: 'Icons',      icon: 'Shapes' },
    ],
  },
  {
    title: 'Atoms',
    items: [
      { label: 'Buttons',    icon: 'CursorClick' },
      { label: 'Alerts',     icon: 'Bell' },
      { label: 'Inputs',     icon: 'Textbox' },
      { label: 'Checkboxes', icon: 'CheckSquare' },
      { label: 'Badges',     icon: 'Tag' },
      { label: 'Cards',      icon: 'Article' },
      { label: 'Info Cards', icon: 'IdentificationCard' },
      { label: 'Pagination',   icon: 'List' },
      { label: 'Separator',    icon: 'Minus' },
      { label: 'Brand Logos',  icon: 'Storefront' },
    ],
  },
  {
    title: 'Molecules',
    items: [
      { label: 'Informative Cards', icon: 'GridFour' },
      { label: 'Search By Make', icon: 'MagnifyingGlass' },
      { label: 'Section Title',  icon: 'TextH' },
      { label: 'Navbar',         icon: 'AppWindow' },
      { label: 'Hero Section',   icon: 'Image' },
      { label: 'Welcome Text',   icon: 'FileText' },
      { label: 'Sell/Buy',       icon: 'ArrowsLeftRight' },
      { label: 'Why Choose Us',  icon: 'CheckCircle' },
      { label: 'Footer',         icon: 'Layout' },
    ],
  },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside style={{
      width: 260,
      flexShrink: 0,
      height: 'calc(100vh - 56px)',
      position: 'sticky',
      top: 56,
      borderRight: '1px solid var(--color-border-tertiary)',
      background: 'var(--color-bg-primary)',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Header: Logo + name + caret */}
      <div className="sidebar-header">
        <div style={{
          width: 32, height: 32,
          background: 'var(--color-bg-inverse)',
          borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: 'Inter', fontSize: 10, fontWeight: 700,
            color: 'var(--color-content-primary-inverse)', letterSpacing: '0.04em',
          }}>
            WDS
          </span>
        </div>
        <span style={{
          fontFamily: 'Inter', fontSize: 14, fontWeight: 600,
          color: 'var(--color-content-primary)', flex: 1,
        }}>
          Design System
        </span>
        <Ph.CaretUpDownIcon size={14} color="var(--color-content-tertiary)" weight="bold" />
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '16px 12px', overflowY: 'auto' }}>
        {NAV_SECTIONS.map(section => (
          <div key={section.title} style={{ marginBottom: 24 }}>
            <div style={{
              fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
              color: 'var(--color-content-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '0 8px', marginBottom: 6,
            }}>
              {section.title}
            </div>

            {section.items.map(item => {
              const isActive = item.label === activePage
              const Icon = Ph[item.icon]
              const iconColor = isActive
                ? 'var(--color-content-primary)'
                : item.coming
                ? 'var(--color-content-disabled)'
                : 'var(--color-content-tertiary)'
              const textColor = isActive
                ? 'var(--color-content-primary)'
                : item.coming
                ? 'var(--color-content-disabled)'
                : 'var(--color-content-secondary)'

              return (
                <div
                  key={item.label}
                  className={`sidebar-item${isActive ? ' sidebar-item-active' : ''}${item.coming ? ' sidebar-item-disabled' : ''}`}
                  onClick={() => !item.coming && onNavigate(item.label)}
                >
                  {Icon && (
                    <Icon
                      size={16}
                      weight={isActive ? 'bold' : 'regular'}
                      color={iconColor}
                    />
                  )}
                  <span style={{
                    fontFamily: 'Inter', fontSize: 13,
                    fontWeight: isActive ? 500 : 400,
                    color: textColor,
                    flex: 1,
                  }}>
                    {item.label}
                  </span>
                  {item.coming && (
                    <span style={{
                      fontFamily: 'Inter', fontSize: 10, fontWeight: 500,
                      color: 'var(--color-content-disabled)',
                      background: 'var(--color-bg-hover)',
                      border: '1px solid var(--color-border-tertiary)',
                      borderRadius: 4, padding: '1px 5px',
                      letterSpacing: '0.02em',
                    }}>
                      Soon
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Footer: User profile pinned to bottom */}
      <div className="sidebar-footer">
        <div style={{
          width: 32, height: 32,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: 'Inter', fontSize: 12, fontWeight: 700,
            color: '#fff', letterSpacing: '0.02em',
          }}>
            DT
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: 'Inter', fontSize: 13, fontWeight: 500,
            color: 'var(--color-content-primary)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            Design Team
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)' }}>
            v1.0.0
          </div>
        </div>
        <Ph.DotsThreeVerticalIcon size={16} color="var(--color-content-tertiary)" weight="bold" />
      </div>

    </aside>
  )
}
