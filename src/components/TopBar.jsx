import { useState, useRef, useEffect, useCallback } from 'react'
import * as Ph from '@phosphor-icons/react'
import { List, MagnifyingGlass, Moon, Sun, CaretRight, X } from '@phosphor-icons/react'
import { NAV_SECTIONS } from './Sidebar'
import '../styles/topbar.css'

// ── Highlight matching substring ──────────────────────────────────────────────
function Highlight({ text, query }) {
  if (!query) return <>{text}</>
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <strong style={{ color: 'var(--color-content-brand)', fontWeight: 700 }}>
        {text.slice(idx, idx + query.length)}
      </strong>
      {text.slice(idx + query.length)}
    </>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function TopBar({
  darkMode, onToggleDark,
  onToggleSidebar,
  section, page,
  onNavigate,
}) {
  const [query,     setQuery]     = useState('')
  const [open,      setOpen]      = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)

  const wrapperRef  = useRef(null)
  const inputRef    = useRef(null)
  const activeRef   = useRef(null)  // tracks the highlighted result DOM node

  // ── Filtered results ────────────────────────────────────────────────────────
  const q = query.trim().toLowerCase()

  const results = q
    ? NAV_SECTIONS
        .map(s => ({ ...s, items: s.items.filter(i => i.label.toLowerCase().includes(q)) }))
        .filter(s => s.items.length > 0)
    : []

  // Flat ordered list for keyboard indexing
  const flat = results.flatMap(s => s.items)

  // Map: label → flat index (computed once per render)
  const flatIndexMap = new Map(flat.map((item, i) => [item.label, i]))

  // ── Handlers ────────────────────────────────────────────────────────────────
  function handleChange(val) {
    setQuery(val)
    setOpen(val.trim().length > 0)
    setActiveIdx(-1)
  }

  function handleClear() {
    setQuery('')
    setOpen(false)
    setActiveIdx(-1)
    inputRef.current?.focus()
  }

  const handleSelect = useCallback((label) => {
    onNavigate?.(label)
    setQuery('')
    setOpen(false)
    setActiveIdx(-1)
  }, [onNavigate])

  function handleKeyDown(e) {
    if (!open) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx(i => Math.min(i + 1, flat.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (activeIdx >= 0 && flat[activeIdx]) {
        handleSelect(flat[activeIdx].label)
      } else if (flat.length === 1) {
        handleSelect(flat[0].label)
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
      setActiveIdx(-1)
      inputRef.current?.blur()
    }
  }

  // ── Close on outside click ───────────────────────────────────────────────────
  useEffect(() => {
    function onMouseDown(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
        setActiveIdx(-1)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [])

  // ── Scroll active result into view ───────────────────────────────────────────
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' })
  }, [activeIdx])

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 56, zIndex: 100,
      background: 'var(--color-bg-primary)',
      borderBottom: '1px solid var(--color-border-tertiary)',
      display: 'flex', alignItems: 'center',
      padding: '0 20px', gap: 12,
    }}>

      {/* Left: sidebar toggle + breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
        <button className="topbar-icon-btn" onClick={onToggleSidebar} title="Toggle sidebar">
          <List size={18} weight="regular" />
        </button>

        {section && page && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-tertiary)' }}>
              {section}
            </span>
            <CaretRight size={12} color="var(--color-content-tertiary)" weight="bold" />
            <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: 'var(--color-content-primary)' }}>
              {page}
            </span>
          </div>
        )}
      </div>

      {/* Right: search + divider + dark mode toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>

        {/* Search wrapper — position:relative so dropdown anchors here */}
        <div ref={wrapperRef} style={{ position: 'relative' }}>

          {/* Input row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            border: `1px solid ${open ? 'var(--color-content-info)' : 'var(--color-border-tertiary)'}`,
            borderRadius: 8, padding: '0 10px 0 12px', height: 36,
            background: 'var(--color-bg-primary)', width: 220,
            transition: 'border-color 120ms',
          }}>
            <MagnifyingGlass size={15} color="var(--color-content-tertiary)" weight="regular" />
            <input
              ref={inputRef}
              type="text"
              className="topbar-search"
              value={query}
              onChange={e => handleChange(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => q && setOpen(true)}
              placeholder="Search components..."
              style={{
                border: 'none', background: 'transparent', flex: 1,
                fontFamily: 'Inter', fontSize: 13,
                color: 'var(--color-content-primary)',
              }}
            />
            {query && (
              <button className="topbar-search-clear" onClick={handleClear} tabIndex={-1} title="Clear">
                <X size={12} weight="bold" />
              </button>
            )}
          </div>

          {/* Dropdown */}
          {open && (
            <div className="topbar-dropdown">
              {results.length === 0 ? (
                <div className="topbar-dropdown-empty">
                  No results for &ldquo;{query}&rdquo;
                </div>
              ) : (
                results.map((section, si) => {
                  const Icon = Ph[section.items[0]?.icon] // used for type check
                  return (
                    <div key={section.title}>
                      {/* Section label — with separator between groups */}
                      <div
                        className="topbar-dropdown-section"
                        style={si > 0 ? { borderTop: '1px solid var(--color-border-tertiary)', marginTop: 4, paddingTop: 10 } : {}}
                      >
                        {section.title}
                      </div>

                      {/* Items */}
                      {section.items.map(item => {
                        const ItemIcon = Ph[item.icon]
                        const itemIdx  = flatIndexMap.get(item.label)
                        const isActive = itemIdx === activeIdx

                        return (
                          <div
                            key={item.label}
                            ref={isActive ? activeRef : null}
                            className="topbar-result"
                            data-active={isActive}
                            onClick={() => handleSelect(item.label)}
                            onMouseEnter={() => setActiveIdx(itemIdx)}
                          >
                            {ItemIcon && (
                              <ItemIcon
                                size={16}
                                weight={isActive ? 'bold' : 'regular'}
                                color={isActive ? 'var(--color-content-primary)' : 'var(--color-content-tertiary)'}
                              />
                            )}
                            <span style={{ fontFamily: 'Inter', fontSize: 13, lineHeight: '20px' }}>
                              <Highlight text={item.label} query={q} />
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  )
                })
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 20, background: 'var(--color-border-tertiary)', flexShrink: 0 }} />

        {/* Dark mode toggle */}
        <button
          className="topbar-icon-btn"
          onClick={onToggleDark}
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={18} weight="regular" /> : <Moon size={18} weight="regular" />}
        </button>

      </div>
    </header>
  )
}
