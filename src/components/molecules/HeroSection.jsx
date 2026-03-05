import { useState, useEffect, useCallback } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Button from '../atoms/Button'
import '../../styles/molecules.css'

// ─── Default slide data ────────────────────────────────────────────────────────
const DEFAULT_SLIDES = [
  {
    id: 1,
    badge: 'Summer Sales Event',
    title: 'Welcome to\nBeaver Auto Sales',
    subtitle: 'Explore our full lineup of new and certified pre-owned vehicles with exclusive financing offers available this season.',
    ctaLabel: '+4500 Cars for You',
    ctaSecondaryLabel: 'Book a Test Drive',
    image: '/images/hero-cars.jpg',
    gradient: 'linear-gradient(to right, #0d1b2a, #1a3a5c)',
  },
  {
    id: 2,
    badge: 'Certified Pre-Owned',
    title: 'Quality You Trust,\nPrices You Love',
    subtitle: 'Every certified vehicle passes a rigorous 150-point inspection — backed by our comprehensive warranty guarantee.',
    ctaLabel: 'Shop Pre-Owned',
    ctaSecondaryLabel: 'Learn More',
    image: null,
    gradient: 'linear-gradient(to right, #1a0b2e, #2d1a54)',
  },
  {
    id: 3,
    badge: 'Financing Made Easy',
    title: 'Get Behind the\nWheel Faster',
    subtitle: 'Apply online in minutes. Competitive rates, flexible terms, and same-day approvals available for qualified buyers.',
    ctaLabel: 'Get Pre-Approved',
    ctaSecondaryLabel: 'Calculate Payment',
    image: null,
    gradient: 'linear-gradient(to right, #0a1f14, #0d4026)',
  },
]

// ─── Main component ────────────────────────────────────────────────────────────
/**
 * HeroSection — Dealership website hero banner
 *
 * variant              'carousel' | 'image'   default: 'carousel'
 * slides               Slide[]                array of slide data
 * autoPlay             boolean                auto-advance (carousel only)
 * interval             number                 ms between slides (default 5000)
 * onCtaClick           (slide) => void
 * onCtaSecondaryClick  (slide) => void
 * style                CSSProperties
 *
 * Slide shape:
 *   id                 string | number
 *   badge              string?               eyebrow chip text
 *   title              string                supports \n for line breaks
 *   subtitle           string
 *   ctaLabel           string
 *   ctaSecondaryLabel  string
 *   image              string?               background image URL
 *   gradient           string?               CSS gradient fallback
 */
export default function HeroSection({
  variant              = 'carousel',
  slides: slidesProp,
  autoPlay             = true,
  interval             = 5000,
  style,
  onCtaClick,
  onCtaSecondaryClick,
}) {
  const slides = slidesProp ?? DEFAULT_SLIDES
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-advance: uses functional state update — no activeIndex dependency
  useEffect(() => {
    if (variant !== 'carousel' || !autoPlay || paused || slides.length < 2) return
    const id = setInterval(
      () => setActiveIndex(i => (i + 1) % slides.length),
      interval
    )
    return () => clearInterval(id)
  }, [variant, autoPlay, paused, interval, slides.length])

  const goTo = useCallback(
    index => setActiveIndex((index + slides.length) % slides.length),
    [slides.length]
  )
  const goPrev = () => goTo(activeIndex - 1)
  const goNext = () => goTo(activeIndex + 1)

  // For image variant just show the first slide (or single slide provided)
  const displaySlides = variant === 'image' ? [slides[0]] : slides

  return (
    <div
      className="hero"
      style={style}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide stack — all slides in DOM, only active is visible */}
      {displaySlides.map((slide, i) => (
        <div
          key={slide.id ?? i}
          className={`hero-slide${i === activeIndex ? ' hero-slide--active' : ''}`}
          style={{ background: slide.gradient ?? 'linear-gradient(135deg, #0d1b2a, #1e3a5f)' }}
          aria-hidden={i !== activeIndex}
        >
          {/* Optional background image */}
          {slide.image && (
            <div
              className="hero-slide-img"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}

          {/* Dark gradient overlay for legibility */}
          <div className="hero-slide-overlay" />

          {/* Content */}
          <div className="hero-slide-content">
            {slide.badge && (
              <span className="hero-badge">{slide.badge}</span>
            )}

            <h1 className="hero-title">{slide.title}</h1>

            <p className="hero-subtitle">{slide.subtitle}</p>

            <div className="hero-actions">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onCtaClick?.(slide)}
              >
                {slide.ctaLabel}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hero-btn-outline"
                onClick={() => onCtaSecondaryClick?.(slide)}
              >
                {slide.ctaSecondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel controls */}
      {variant === 'carousel' && slides.length > 1 && (
        <>
          {/* Prev arrow */}
          <button
            type="button"
            className="hero-arrow hero-arrow--prev"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <CaretLeft size={20} weight="bold" />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            className="hero-arrow hero-arrow--next"
            onClick={goNext}
            aria-label="Next slide"
          >
            <CaretRight size={20} weight="bold" />
          </button>

          {/* Dot indicators */}
          <div className="hero-dots" role="tablist" aria-label="Slide indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                className={`hero-dot${i === activeIndex ? ' hero-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === activeIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
