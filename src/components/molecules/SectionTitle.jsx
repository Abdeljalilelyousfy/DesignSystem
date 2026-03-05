import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import Button from '../atoms/Button'
import IconButton from '../atoms/IconButton'
import '../../styles/molecules.css'

/**
 * SectionTitle — section header molecule
 *
 * ─────────────────────────────────────────────────────────────────
 * DEFAULT VARIANT  (variant="default")
 * ─────────────────────────────────────────────────────────────────
 *   align        'center' | 'left'   default: 'center'
 *   title        string
 *   description  string              optional
 *   onViewAll    () => void          renders WDS "View all →" link button
 *   showArrows   boolean             renders WDS outline icon-button arrows
 *   onPrev       () => void
 *   onNext       () => void
 *   prevDisabled boolean
 *   nextDisabled boolean
 *
 * ─────────────────────────────────────────────────────────────────
 * GALLERY VARIANT  (variant="gallery")
 * ─────────────────────────────────────────────────────────────────
 *   title        string              vehicle/page name in back-nav
 *   onBack       () => void          back-arrow handler
 *   tabs         string[]            e.g. ['All','Exterior','Interior','Video','360° View']
 *   activeTab    string
 *   onTabChange  (tab: string) => void
 *   badges       string[]            e.g. ['Looks (12)', 'Details (15)', ...]
 *   activeBadge  string
 *   onBadgeChange (badge: string) => void
 *
 * ─────────────────────────────────────────────────────────────────
 * SHARED
 * ─────────────────────────────────────────────────────────────────
 *   style        CSSProperties       override wrapper padding/bg (pass padding:0 when
 *                                    embedded inside another section container)
 */
export default function SectionTitle({
  variant      = 'default',
  align        = 'center',
  title,
  description,
  onViewAll,
  showArrows   = false,
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  // Gallery
  onBack,
  tabs         = [],
  activeTab,
  onTabChange,
  badges       = [],
  activeBadge,
  onBadgeChange,
  // Shared
  style,
}) {
  if (variant === 'gallery') {
    return (
      <GalleryVariant
        title={title} onBack={onBack}
        tabs={tabs} activeTab={activeTab} onTabChange={onTabChange}
        badges={badges} activeBadge={activeBadge} onBadgeChange={onBadgeChange}
        style={style}
      />
    )
  }

  const centered = align === 'center'

  return (
    <section className="section-title" style={style}>
      <div className="section-title-inner">

        {/* ── Title row ── */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: centered ? 'center' : 'space-between',
          gap: 16,
        }}>
          {/* Left: heading + description */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 8,
            alignItems: centered ? 'center' : 'flex-start',
          }}>
            {title && (
              <h2
                className="section-title-heading"
                style={{ textAlign: centered ? 'center' : 'left' }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className="section-title-description"
                style={{ textAlign: centered ? 'center' : 'left' }}
              >
                {description}
              </p>
            )}
          </div>

          {/* Right slot — left variant only: WDS "View all" link + WDS outline icon-button arrows */}
          {!centered && (onViewAll || showArrows) && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
              {onViewAll && (
                <Button
                  variant="link"
                  size="sm"
                  rightIcon={<ArrowRight size={15} weight="bold" />}
                  onClick={onViewAll}
                >
                  View all
                </Button>
              )}
              {showArrows && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <IconButton
                    variant="outline"
                    size="xs"
                    icon={<CaretLeft weight="bold" />}
                    label="Previous"
                    disabled={prevDisabled}
                    onClick={onPrev}
                  />
                  <IconButton
                    variant="outline"
                    size="xs"
                    icon={<CaretRight weight="bold" />}
                    label="Next"
                    disabled={nextDisabled}
                    onClick={onNext}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Center variant: "View all" as a centered bottom row */}
        {centered && onViewAll && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="link"
              size="sm"
              rightIcon={<ArrowRight size={15} weight="bold" />}
              onClick={onViewAll}
            >
              View all
            </Button>
          </div>
        )}

      </div>
    </section>
  )
}

// ─── Gallery variant ──────────────────────────────────────────────────────────
function GalleryVariant({
  title, onBack,
  tabs, activeTab, onTabChange,
  badges, activeBadge, onBadgeChange,
  style,
}) {
  return (
    <section
      className="section-title"
      style={{ paddingTop: 0, paddingBottom: 12, ...style }}
    >
      <div className="section-title-inner">

        {/* ── Top row: ← vehicle name  |  photo-type tabs ── */}
        <div className="section-title-gallery-top">
          {/* Back nav: WDS link button with left arrow */}
          <Button
            variant="link"
            size="sm"
            leftIcon={<ArrowLeft size={18} weight="regular" />}
            onClick={onBack}
          >
            {title}
          </Button>

          {tabs.length > 0 && (
            <div className="section-title-gallery-tabs" role="tablist">
              {tabs.map(tab => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={tab === activeTab}
                  className={`section-title-gallery-tab${tab === activeTab ? ' section-title-gallery-tab--active' : ''}`}
                  onClick={() => onTabChange?.(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Badge filter row ── */}
        {badges.length > 0 && (
          <div className="section-title-gallery-badges" role="group" aria-label="Filter badges">
            {badges.map(badge => (
              <button
                key={badge}
                className={`section-title-badge${badge === activeBadge ? ' section-title-badge--active' : ''}`}
                onClick={() => onBadgeChange?.(badge)}
              >
                {badge}
              </button>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
