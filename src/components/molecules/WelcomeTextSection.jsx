import Button from '../atoms/Button'
import '../../styles/molecules.css'

// ─── Main component ────────────────────────────────────────────────────────────
/**
 * WelcomeTextSection — Dealership "about / welcome" split section
 *
 * Figma: node 1354-53787 (device=desktop, type=welcome text 1)
 * Layout: two-column — text+CTAs left, car photo right
 *
 * title               string        section heading
 * description         string        body copy
 * ctaLabel            string        primary button label
 * ctaSecondaryLabel   string        outline button label
 * showCta             boolean       show/hide primary CTA
 * showCtaSecondary    boolean       show/hide secondary CTA
 * image               string        background image URL
 * imageAlt            string        accessible label for image
 * onCtaClick          () => void
 * onCtaSecondaryClick () => void
 * style               CSSProperties
 */
export default function WelcomeTextSection({
  title               = 'Welcome to Auto Dealers',
  description         = 'Lorem ipsum dolor sit amet consectetur. Est pellentesque vivamus adipiscing tellus id nam varius blandit. Imperdiet eget lorem elementum ut vitae quis gravida at purus.',
  ctaLabel            = 'Browse Inventory',
  ctaSecondaryLabel   = 'Learn More',
  showCta             = true,
  showCtaSecondary    = true,
  image               = '/images/welcome-cars.jpg',
  imageAlt            = 'Dealership vehicles',
  onCtaClick,
  onCtaSecondaryClick,
  style,
}) {
  return (
    <div className="welcome-text" style={style}>

      {/* Left column: heading + body + CTA buttons */}
      <div className="welcome-text-body">
        <div className="welcome-text-content">
          <h2 className="welcome-text-title">{title}</h2>
          <p className="welcome-text-description">{description}</p>
        </div>

        {(showCta || showCtaSecondary) && (
          <div className="welcome-text-actions">
            {showCta && (
              <Button variant="primary" size="md" onClick={onCtaClick}>
                {ctaLabel}
              </Button>
            )}
            {showCtaSecondary && (
              <Button variant="outline" size="md" onClick={onCtaSecondaryClick}>
                {ctaSecondaryLabel}
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Right column: car image (600 × 314 px from Figma) */}
      <div
        className="welcome-text-image"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
        role="img"
        aria-label={imageAlt}
      />

    </div>
  )
}
