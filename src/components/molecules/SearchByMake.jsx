import { useRef, useEffect, useState } from 'react'
import { BRAND_IMAGES, BRAND_NAMES } from '../atoms/BrandLogo'
import SectionTitle from './SectionTitle'
import '../../styles/molecules.css'

const AUTO_MS     = 3200
const SCROLL_STEP = 130 * 5   // 5 cards at a time

// ─── VARIANT 1 — Carousel ─────────────────────────────────────────────────────
function CarouselVariant({ makes, logoType, onMakeClick, onViewAll, title, description }) {
  const scrollRef           = useRef(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      const el = scrollRef.current
      if (!el) return
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' })
      }
    }, AUTO_MS)
    return () => clearInterval(id)
  }, [paused])

  function handlePrev() {
    setPaused(true)
    const el = scrollRef.current
    if (!el) return
    if (el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    else el.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' })
  }

  function handleNext() {
    setPaused(true)
    const el = scrollRef.current
    if (!el) return
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) el.scrollTo({ left: 0, behavior: 'smooth' })
    else el.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' })
  }

  return (
    <>
      <SectionTitle
        align="left"
        title={title}
        description={description}
        onViewAll={onViewAll}
        showArrows
        onPrev={handlePrev}
        onNext={handleNext}
        style={{ padding: 0, background: 'transparent', marginBottom: 24 }}
      />
      <div
        ref={scrollRef}
        className="makes-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {makes.map((make, i) => {
          const src    = BRAND_IMAGES[make]?.[logoType === 'white' ? 'black' : logoType]
          const filter = logoType === 'white' ? 'brightness(0) invert(1)' : 'none'
          return (
            <div
              key={make}
              className="make-card"
              onClick={() => onMakeClick?.(make)}
              title={make}
              style={{
                width: 130, flexShrink: 0, aspectRatio: '1',
                padding: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--color-bg-primary)', boxSizing: 'border-box',
                borderRight: i < makes.length - 1 ? '1px solid var(--color-border-tertiary)' : 'none',
              }}
            >
              {src
                ? <img src={src} alt={make} draggable={false} style={{ width: '100%', height: '100%', objectFit: 'contain', filter, userSelect: 'none' }} />
                : <span style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)', textAlign: 'center' }}>{make}</span>
              }
            </div>
          )
        })}
      </div>
    </>
  )
}

// ─── VARIANT 2 — Paginated grid ───────────────────────────────────────────────
const GRID_PAGE = 9

function GridVariant({ makes, logoType, onMakeClick, onViewAll, title, description }) {
  const [page, setPage]     = useState(0)
  const [fading, setFading] = useState(false)
  const totalPages           = Math.ceil(makes.length / GRID_PAGE)
  const pageMakes            = makes.slice(page * GRID_PAGE, (page + 1) * GRID_PAGE)

  function navigate(next) {
    setFading(true)
    setTimeout(() => { setPage(next); setFading(false) }, 160)
  }

  function handlePrev() { if (page > 0) navigate(page - 1) }
  function handleNext() { if (page < totalPages - 1) navigate(page + 1) }

  return (
    <>
      <SectionTitle
        align="left"
        title={title}
        description={description}
        onViewAll={onViewAll}
        showArrows
        onPrev={handlePrev}
        onNext={handleNext}
        prevDisabled={page === 0}
        nextDisabled={page >= totalPages - 1}
        style={{ padding: 0, background: 'transparent', marginBottom: 24 }}
      />

      {/* Grid */}
      <div
        className="makes-grid-wrap"
        style={{ opacity: fading ? 0 : 1, transition: 'opacity 160ms ease' }}
      >
        <div className="makes-grid-inner">
          {pageMakes.map((make) => {
            const src    = BRAND_IMAGES[make]?.[logoType === 'white' ? 'black' : logoType]
            const filter = logoType === 'white' ? 'brightness(0) invert(1)' : 'none'
            return (
              <div
                key={make}
                className="make-card make-grid-card"
                onClick={() => onMakeClick?.(make)}
                style={{
                  background: 'var(--color-bg-primary)',
                  borderRight: '1px solid var(--color-border-tertiary)',
                  borderBottom: '1px solid var(--color-border-tertiary)',
                }}
              >
                <div style={{ width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {src && <img src={src} alt={make} draggable={false} style={{ width: '100%', height: '100%', objectFit: 'contain', filter, userSelect: 'none' }} />}
                </div>
                <span style={{
                  fontFamily: 'Inter', fontSize: 11, fontWeight: 500,
                  color: 'var(--color-content-secondary)', textAlign: 'center',
                  lineHeight: '16px', marginTop: 8,
                }}>
                  {make}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dot indicator */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              aria-label={`Page ${i + 1}`}
              style={{
                width: i === page ? 20 : 8, height: 8,
                borderRadius: 99, border: 'none', padding: 0, cursor: 'pointer',
                background: i === page ? 'var(--color-content-info)' : 'var(--color-border-tertiary)',
                transition: 'width 200ms, background 200ms',
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────
/**
 * SearchByMake — brand logo section molecule
 *
 * variant     carousel | grid           default: carousel
 * title       string
 * description string
 * makes       string[]                  default: all 20 BRAND_NAMES
 * logoType    color | black | white     default: color
 * onMakeClick (make: string) => void
 * onViewAll   () => void
 * style       CSSProperties
 */
export default function SearchByMake({
  variant     = 'carousel',
  title       = 'Popular makes',
  description = 'Shop vehicles from the brands you know and trust.',
  makes       = BRAND_NAMES,
  logoType    = 'color',
  onMakeClick,
  onViewAll,
  style,
}) {
  const shared = { makes, logoType, onMakeClick, onViewAll, title, description }

  return (
    <section style={{
      background: 'var(--color-bg-primary)',
      width: '100%', boxSizing: 'border-box', ...style,
    }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '48px 80px',
        display: 'flex', flexDirection: 'column',
        boxSizing: 'border-box',
      }}>
        {variant === 'grid'
          ? <GridVariant {...shared} />
          : <CarouselVariant {...shared} />
        }
      </div>
    </section>
  )
}
