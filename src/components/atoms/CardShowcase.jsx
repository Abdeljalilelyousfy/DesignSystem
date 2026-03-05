import { useState } from 'react'
import Card from './Card'
import {
  ArrowUp, ArrowDown, Star, Users, MapPin, Clock,
  ShoppingCart, Check, ArrowRight, Bell, BellSlash,
  Heart, Eye, EnvelopeSimple, Package, CurrencyDollar, ChartBar,
} from '@phosphor-icons/react'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
      <div style={{
        fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
        color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
        background: 'var(--color-bg-hover)', padding: '4px 10px', borderRadius: 6, flexShrink: 0,
      }}>
        {children}
      </div>
      <div style={{ flex: 1, height: 1, background: 'var(--color-border-tertiary)' }} />
    </div>
  )
}

function SubLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
      color: 'var(--color-content-tertiary)', letterSpacing: '0.07em', textTransform: 'uppercase',
      marginBottom: 12,
    }}>
      {children}
    </div>
  )
}

function StateLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'ui-monospace, monospace', fontSize: 11,
      color: 'var(--color-content-tertiary)', textAlign: 'center', marginTop: 8,
    }}>
      {children}
    </div>
  )
}

// ─── Pattern components ───────────────────────────────────────────────────────

const STATS = [
  { label: 'Monthly Revenue', value: '$48,295', change: '+12.5%', up: true,  Icon: CurrencyDollar, bg: 'rgba(59,130,246,0.12)',  color: '#3b82f6' },
  { label: 'Active Users',    value: '8,641',   change: '+3.2%',  up: true,  Icon: Users,          bg: 'rgba(139,92,246,0.12)', color: '#8b5cf6' },
  { label: 'Conversion Rate', value: '3.8%',    change: '−0.5%',  up: false, Icon: ChartBar,       bg: 'rgba(249,115,22,0.12)', color: '#f97316' },
]

function StatCard({ label, value, change, up, Icon, bg, color }) {
  return (
    <Card variant="outlined">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10, background: bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={20} color={color} weight="bold" />
        </div>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 3,
          fontFamily: 'Inter', fontSize: 12, fontWeight: 500,
          color: up ? '#10b981' : '#ef4444',
          background: up ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
          borderRadius: 20, padding: '2px 8px',
        }}>
          {up ? <ArrowUp size={11} weight="bold" /> : <ArrowDown size={11} weight="bold" />}
          {change}
        </span>
      </div>
      <div style={{ fontFamily: 'Inter', fontSize: 28, fontWeight: 700, color: 'var(--color-content-primary)', letterSpacing: '-0.5px', marginBottom: 4 }}>
        {value}
      </div>
      <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)' }}>
        {label}
      </div>
    </Card>
  )
}

function ProfileCard() {
  return (
    <Card variant="outlined" style={{ padding: 0 }}>
      {/* Cover */}
      <div style={{ height: 72, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)' }} />
      <div style={{ padding: '0 20px 20px' }}>
        {/* Avatar */}
        <div style={{ marginTop: -22, marginBottom: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            border: '3px solid var(--color-bg-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 700, color: '#fff' }}>SC</span>
          </div>
        </div>
        {/* Info */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 2 }}>Sarah Chen</div>
          <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)', marginBottom: 6 }}>Lead Product Designer</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <MapPin size={12} color="var(--color-content-tertiary)" />
            <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)' }}>San Francisco, CA</span>
          </div>
        </div>
        {/* Stats */}
        <div style={{ display: 'flex', gap: 20, paddingBottom: 14, borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: 14 }}>
          {[{ label: 'Posts', value: '142' }, { label: 'Followers', value: '3.4k' }, { label: 'Following', value: '98' }].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 700, color: 'var(--color-content-primary)' }}>{s.value}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)' }}>{s.label}</div>
            </div>
          ))}
        </div>
        {/* Actions */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ flex: 1, padding: '7px 12px', borderRadius: 8, fontFamily: 'Inter', fontSize: 13, fontWeight: 600, background: '#6366f1', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Follow
          </button>
          <button style={{ padding: '7px 14px', borderRadius: 8, fontFamily: 'Inter', fontSize: 13, fontWeight: 500, background: 'transparent', color: 'var(--color-content-primary)', border: '1px solid var(--color-border-tertiary)', cursor: 'pointer' }}>
            Message
          </button>
        </div>
      </div>
    </Card>
  )
}

function ArticleCard() {
  return (
    <Card variant="outlined" style={{ padding: 0 }}>
      {/* Cover image */}
      <div style={{
        height: 156, background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0369a1 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Package size={48} color="rgba(255,255,255,0.15)" />
      </div>
      <div style={{ padding: '16px 20px 20px' }}>
        <span style={{
          display: 'inline-block',
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
          color: '#6366f1', background: 'rgba(99,102,241,0.1)', borderRadius: 4, padding: '2px 8px', marginBottom: 10,
        }}>
          Design Systems
        </span>
        <div style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: 'var(--color-content-primary)', lineHeight: '24px', marginBottom: 8 }}>
          Why Design Tokens Are the Future of UI Development
        </div>
        <div style={{
          fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)', lineHeight: '20px', marginBottom: 16,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          Design tokens are the building blocks of any robust design system, bridging the gap between design decisions and code.
        </div>
        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #f97316, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Inter', fontSize: 10, fontWeight: 700, color: '#fff' }}>AK</span>
            </div>
            <div>
              <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 500, color: 'var(--color-content-primary)' }}>Alex Kim</div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)' }}>Mar 4, 2026</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Clock size={12} color="var(--color-content-tertiary)" />
              <span style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)' }}>8 min</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Eye size={12} color="var(--color-content-tertiary)" />
              <span style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)' }}>2.1k</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function ProductCard() {
  return (
    <Card variant="outlined" interactive style={{ padding: 0 }}>
      {/* Image */}
      <div style={{
        height: 176, background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: '#fff', background: '#10b981', borderRadius: 4, padding: '2px 8px' }}>
          NEW
        </div>
        <button style={{ position: 'absolute', top: 10, right: 12, width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Heart size={15} color="#fff" />
        </button>
        <Package size={52} color="rgba(255,255,255,0.2)" />
      </div>
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Headphones</div>
        <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 8 }}>Studio Pro Wireless</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 1 }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={13} color="#f59e0b" weight={i <= 4 ? 'fill' : 'regular'} />)}
          </div>
          <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)' }}>4.8 (2,341)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 700, color: 'var(--color-content-primary)', letterSpacing: '-0.5px' }}>$249.00</div>
            <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)' }}>Free shipping</div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 8, fontFamily: 'Inter', fontSize: 13, fontWeight: 600, background: '#6366f1', color: '#fff', border: 'none', cursor: 'pointer' }}>
            <ShoppingCart size={14} weight="bold" />
            Add
          </button>
        </div>
      </div>
    </Card>
  )
}

function NotifCard() {
  const items = [
    { initials: 'SC', color: '#6366f1', msg: 'Commented on "Card Component"',   time: '2m',  unread: true  },
    { initials: 'MR', color: '#f97316', msg: 'Shared the Figma file with you',   time: '14m', unread: true  },
    { initials: 'JL', color: '#10b981', msg: 'Version 2.1.0 has been released',  time: '1h',  unread: false },
  ]
  return (
    <Card variant="outlined">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)' }}>Notifications</div>
        <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: '#6366f1', background: 'rgba(99,102,241,0.1)', borderRadius: 10, padding: '1px 8px' }}>2 new</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 6px', borderRadius: 6 }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: n.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, color: '#fff' }}>{n.initials}</span>
              </div>
              {n.unread && (
                <div style={{ position: 'absolute', top: 0, right: 0, width: 8, height: 8, borderRadius: '50%', background: '#6366f1', border: '2px solid var(--color-bg-primary)' }} />
              )}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: n.unread ? 500 : 400, color: 'var(--color-content-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {n.msg}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)', marginTop: 1 }}>{n.time} ago</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--color-border-tertiary)' }}>
        <button style={{ width: '100%', padding: '7px', borderRadius: 7, fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: 'var(--color-content-primary)', background: 'transparent', border: '1px solid var(--color-border-tertiary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          View all <ArrowRight size={13} />
        </button>
      </div>
    </Card>
  )
}

const PRICING = [
  {
    tier: 'Starter', price: '$0',  period: '/mo',
    features: ['5 projects', '1 team member', 'Basic analytics', 'Community support'],
    featured: false,
  },
  {
    tier: 'Pro',     price: '$29', period: '/mo',
    features: ['Unlimited projects', '10 team members', 'Advanced analytics', 'Priority support', 'Custom domain'],
    featured: true,
  },
  {
    tier: 'Team',    price: '$79', period: '/mo',
    features: ['Everything in Pro', 'Unlimited members', '24/7 support', 'SSO & SAML', 'Audit logs'],
    featured: false,
  },
]

function PricingCard({ tier, price, period, features, featured }) {
  return (
    <Card
      variant="outlined"
      style={{
        border: featured ? '2px solid #6366f1' : undefined,
        background: featured ? 'rgba(99,102,241,0.03)' : undefined,
        position: 'relative', height: '100%',
      }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: '#fff',
          background: '#6366f1', borderRadius: 20, padding: '3px 12px', whiteSpace: 'nowrap',
        }}>
          ✦ Most Popular
        </div>
      )}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 6 }}>{tier}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <span style={{ fontFamily: 'Inter', fontSize: 32, fontWeight: 700, color: 'var(--color-content-primary)', letterSpacing: '-1px' }}>{price}</span>
          <span style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)' }}>{period}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
              background: featured ? 'rgba(99,102,241,0.12)' : 'var(--color-bg-hover)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Check size={10} color={featured ? '#6366f1' : 'var(--color-content-secondary)'} weight="bold" />
            </div>
            <span style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)' }}>{f}</span>
          </div>
        ))}
      </div>
      <button style={{
        width: '100%', padding: '9px', borderRadius: 8,
        fontFamily: 'Inter', fontSize: 13, fontWeight: 600,
        background: featured ? '#6366f1' : 'transparent',
        color: featured ? '#fff' : 'var(--color-content-primary)',
        border: featured ? 'none' : '1px solid var(--color-border-tertiary)',
        cursor: 'pointer',
      }}>
        {featured ? 'Get Started →' : 'Choose Plan'}
      </button>
    </Card>
  )
}

// ─── Interactive section data ─────────────────────────────────────────────────

const PREF_OPTIONS = [
  { id: 'all',       Icon: Bell,           label: 'All Notifications', desc: 'Get notified about every update in real time' },
  { id: 'important', Icon: Star,           label: 'Important Only',    desc: 'High-priority alerts and direct mentions' },
  { id: 'digest',    Icon: EnvelopeSimple, label: 'Daily Digest',      desc: 'One morning summary email at 9 AM' },
  { id: 'none',      Icon: BellSlash,      label: 'Do Not Disturb',    desc: 'Silence all — check in on your own time' },
]

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function CardShowcase() {
  const [selectedPref, setSelectedPref] = useState('all')

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      background: 'var(--color-bg-primary)',
      minHeight: '100vh',
      padding: '48px 40px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>

      {/* ── Page header ── */}
      <div style={{ marginBottom: 56 }}>
        <p style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
          WDS · Atoms
        </p>
        <h1 style={{ fontFamily: 'Inter', fontSize: 40, fontWeight: 600, lineHeight: '48px', letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px' }}>
          Cards
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)', lineHeight: '24px', margin: 0, maxWidth: 580 }}>
          Flexible surface containers for grouping related content and actions. Four variants —{' '}
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}>outlined, elevated, filled, ghost</strong>{' '}
          — with sm / md / lg sizing, hover animations, and selection state.
        </p>
      </div>

      {/* ────────────────────────── 1. VARIANTS ────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Variants</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {(['outlined', 'elevated', 'filled', 'ghost']).map(variant => (
            <Card key={variant} variant={variant} size="md">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'var(--color-bg-hover)',
                  border: '1px solid var(--color-border-tertiary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Package size={18} color="var(--color-content-secondary)" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 4, textTransform: 'capitalize' }}>{variant}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)', lineHeight: '18px' }}>
                    {variant === 'outlined' && 'Border, no shadow'}
                    {variant === 'elevated' && 'Shadow L1, no border'}
                    {variant === 'filled'   && 'Tinted background'}
                    {variant === 'ghost'    && 'Transparent, dashed'}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* ────────────────────────── 2. SIZES ───────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Sizes</SectionLabel>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          {[
            { size: 'sm', label: 'Small',  hint: 'Compact — 8px radius, 12 / 14px padding' },
            { size: 'md', label: 'Medium', hint: 'Default — 12px radius, 16 / 20px padding' },
            { size: 'lg', label: 'Large',  hint: 'Spacious — 16px radius, 24 / 28px padding' },
          ].map(({ size, label, hint }) => (
            <div key={size} style={{ flex: 1 }}>
              <Card variant="outlined" size={size}>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 4 }}>{label}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)', lineHeight: '17px' }}>{hint}</div>
              </Card>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--color-content-tertiary)', textAlign: 'center', marginTop: 8 }}>
                size="{size}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────── 3. PATTERNS ────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Patterns</SectionLabel>

        {/* Metrics */}
        <div style={{ marginBottom: 16 }}>
          <SubLabel>Metrics</SubLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {STATS.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>

        {/* Content */}
        <div style={{ marginBottom: 16 }}>
          <SubLabel>Content</SubLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.55fr', gap: 16 }}>
            <ProfileCard />
            <ArticleCard />
          </div>
        </div>

        {/* Commerce */}
        <div style={{ marginBottom: 16 }}>
          <SubLabel>Commerce</SubLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 16 }}>
            <ProductCard />
            <NotifCard />
          </div>
        </div>

        {/* Pricing */}
        <div>
          <SubLabel>Pricing</SubLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, paddingTop: 12 }}>
            {PRICING.map(p => <PricingCard key={p.tier} {...p} />)}
          </div>
        </div>
      </div>

      {/* ────────────────────────── 4. STATES ──────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>States</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>

          {/* Default */}
          <div>
            <Card variant="outlined">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Package size={16} color="var(--color-content-secondary)" />
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)' }}>Default</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)', lineHeight: '17px' }}>Normal resting state</div>
              </div>
            </Card>
            <StateLabel>Default</StateLabel>
          </div>

          {/* Hover */}
          <div>
            <Card variant="outlined" interactive>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Package size={16} color="var(--color-content-secondary)" />
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)' }}>Hover</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)', lineHeight: '17px' }}>Pointer + shadow lift</div>
              </div>
            </Card>
            <StateLabel>interactive (hover me)</StateLabel>
          </div>

          {/* Selected */}
          <div>
            <Card variant="outlined" selected>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Package size={16} color="#6366f1" />
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)' }}>Selected</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)', lineHeight: '17px' }}>Accent outline applied</div>
              </div>
            </Card>
            <StateLabel>selected</StateLabel>
          </div>

          {/* Disabled */}
          <div>
            <Card variant="outlined" disabled>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--color-bg-hover)', border: '1px solid var(--color-border-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Package size={16} color="var(--color-content-disabled)" />
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-primary)' }}>Disabled</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)', lineHeight: '17px' }}>45% opacity, no pointer</div>
              </div>
            </Card>
            <StateLabel>disabled</StateLabel>
          </div>

        </div>
      </div>

      {/* ────────────────────────── 5. INTERACTIVE ─────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Interactive</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 12,
          border: '1px solid var(--color-border-tertiary)', padding: '28px',
        }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 600, color: 'var(--color-content-primary)', marginBottom: 4 }}>
              Notification preferences
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)' }}>
              Select how you'd like to receive updates
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {PREF_OPTIONS.map(({ id, Icon, label, desc }) => {
              const active = selectedPref === id
              return (
                <Card
                  key={id}
                  variant="outlined"
                  interactive
                  selected={active}
                  onClick={() => setSelectedPref(id)}
                  style={{ background: active ? 'rgba(99,102,241,0.05)' : undefined }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: active ? 'rgba(99,102,241,0.12)' : 'var(--color-bg-hover)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={18} color={active ? '#6366f1' : 'var(--color-content-secondary)'} weight={active ? 'bold' : 'regular'} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: active ? 600 : 500, color: active ? '#6366f1' : 'var(--color-content-primary)', marginBottom: 3 }}>
                        {label}
                      </div>
                      <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'var(--color-content-tertiary)', lineHeight: '16px' }}>
                        {desc}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* ────────────────────────── 6. USAGE ───────────────────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
          <pre style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12.5,
            color: 'var(--color-content-primary)', margin: 0, lineHeight: '22px', overflowX: 'auto',
          }}>{`import Card from '@/components/atoms/Card'

// Basic card
<Card variant="outlined" size="md">
  <h3>Title</h3>
  <p>Content goes here.</p>
</Card>

// Interactive selectable card
<Card
  variant="outlined"
  interactive
  selected={selectedId === item.id}
  onClick={() => setSelectedId(item.id)}
>
  ...
</Card>

// Props
// variant      "outlined" | "elevated" | "filled" | "ghost"   default: "outlined"
// size         "sm" | "md" | "lg"                             default: "md"
// interactive  boolean — adds hover cursor + shadow lift      default: false
// selected     boolean — 2px accent outline                   default: false
// disabled     boolean — 45% opacity, no pointer events       default: false
// onClick      () => void — makes card clickable`}</pre>
        </div>
      </div>

    </div>
  )
}
