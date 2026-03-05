import { CurrencyDollar, Car } from '@phosphor-icons/react'
import Button from '../atoms/Button'
import '../../styles/molecules.css'

/**
 * SellBuySection — Dealership "Sell / Buy" split section
 *
 * Figma: node 1419-52417 (Type=Desktop, Sell/Buy=Sell/Buy 1)
 * Layout: two equal columns — Sell (brand-blue bg) | Buy (light-gray bg)
 *
 * Props
 * ─────
 * sellTitle          string        label above sell subtitle
 * sellSubtitle       string        secondary heading on sell side
 * sellDescription    string        body copy on sell side
 * sellCtaLabel       string        sell button label
 * onSellCtaClick     () => void
 *
 * buyTitle           string        label above buy subtitle
 * buySubtitle        string        secondary heading on buy side
 * buyDescription     string        body copy on buy side
 * buyCtaLabel        string        buy button label
 * onBuyCtaClick      () => void
 *
 * style              CSSProperties extra inline styles on root
 */
export default function SellBuySection({
  sellTitle        = 'SELL',
  sellSubtitle     = 'YOUR CAR',
  sellDescription  = "Get the best value for your vehicle. We buy cars even if you don't have a trade-in or perfect credit history. Quick, easy, and hassle-free.",
  sellCtaLabel     = 'Sell My Car',
  onSellCtaClick,

  buyTitle         = 'BUY',
  buySubtitle      = 'YOUR CAR',
  buyDescription   = "Explore thousands of quality vehicles from trusted dealers. Find the perfect car that fits your budget and lifestyle.",
  buyCtaLabel      = 'Browse Inventory',
  onBuyCtaClick,

  style,
}) {
  return (
    <div className="sell-buy" style={style}>

      {/* ── SELL panel ── */}
      <div className="sell-buy-panel sell-buy-panel--sell">
        <div className="sell-buy-content">
          <CurrencyDollar size={42} color="#ffffff" weight="regular" />
          <div className="sell-buy-title-group">
            <div className="sell-buy-label">{sellTitle}</div>
            <div className="sell-buy-sublabel">{sellSubtitle}</div>
          </div>
        </div>
        <p className="sell-buy-description">{sellDescription}</p>
        <Button variant="primary" size="md" onClick={onSellCtaClick}>
          {sellCtaLabel}
        </Button>
      </div>

      {/* ── BUY panel ── */}
      <div className="sell-buy-panel sell-buy-panel--buy">
        <div className="sell-buy-content">
          <Car size={42} color="var(--color-content-brand)" weight="regular" />
          <div className="sell-buy-title-group">
            <div className="sell-buy-label">{buyTitle}</div>
            <div className="sell-buy-sublabel">{buySubtitle}</div>
          </div>
        </div>
        <p className="sell-buy-description">{buyDescription}</p>
        <Button variant="primary" size="md" onClick={onBuyCtaClick}>
          {buyCtaLabel}
        </Button>
      </div>

    </div>
  )
}
