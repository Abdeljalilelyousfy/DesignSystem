import { useState } from 'react'
import Pagination from './Pagination'

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
      <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
    </div>
  )
}


function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
      <div style={{
        fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)',
        width: 120, flexShrink: 0, textAlign: 'right',
      }}>
        {label}
      </div>
      {children}
    </div>
  )
}

export default function PaginationShowcase() {
  const [page, setPage] = useState(1)

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
        <p style={{
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
          color: 'var(--color-content-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase',
          margin: '0 0 8px',
        }}>
          WDS · Atoms
        </p>
        <h1 style={{
          fontFamily: 'Inter', fontSize: 40, fontWeight: 600,
          lineHeight: '48px', letterSpacing: '-1px', color: 'var(--color-content-primary)', margin: '0 0 12px',
        }}>
          Pagination
        </h1>
        <p style={{
          fontFamily: 'Inter', fontSize: 16, color: 'var(--color-content-secondary)',
          lineHeight: '24px', margin: 0, maxWidth: 580,
        }}>
          Navigate across multi-page content.
          <strong style={{ color: 'var(--color-content-primary)', fontWeight: 600 }}> 32×32 px</strong> number buttons
          with circle shape (border-radius 100 px). Active page uses brand-blue fill.
          Ellipsis truncation via a smart range algorithm.
        </p>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 1. ACTIVE PAGE POSITIONS */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Active page positions</SectionLabel>
        <Row label="First page">
          <Pagination totalPages={10} currentPage={1} />
        </Row>
        <Row label="Middle (p. 5)">
          <Pagination totalPages={10} currentPage={5} />
        </Row>
        <Row label="Near end (p. 8)">
          <Pagination totalPages={10} currentPage={8} />
        </Row>
        <Row label="Last page">
          <Pagination totalPages={10} currentPage={10} />
        </Row>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 2. TOTAL PAGE COUNTS */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Total pages</SectionLabel>
        <Row label="3 pages">
          <Pagination totalPages={3} currentPage={2} />
        </Row>
        <Row label="5 pages">
          <Pagination totalPages={5} currentPage={3} />
        </Row>
        <Row label="10 pages">
          <Pagination totalPages={10} currentPage={4} />
        </Row>
        <Row label="20 pages">
          <Pagination totalPages={20} currentPage={10} />
        </Row>
        <Row label="50 pages">
          <Pagination totalPages={50} currentPage={25} />
        </Row>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 3. SIBLINGS */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Sibling count</SectionLabel>
        <Row label="siblings=1">
          <Pagination totalPages={20} currentPage={10} siblings={1} />
        </Row>
        <Row label="siblings=2">
          <Pagination totalPages={20} currentPage={10} siblings={2} />
        </Row>
        <Row label="siblings=3">
          <Pagination totalPages={20} currentPage={10} siblings={3} />
        </Row>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 4. VARIANTS */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Variants</SectionLabel>
        <Row label="With prev/next">
          <Pagination totalPages={10} currentPage={5} showPrevNext />
        </Row>
        <Row label="Numbers only">
          <Pagination totalPages={10} currentPage={5} showPrevNext={false} />
        </Row>
        <Row label="With page label">
          <Pagination totalPages={10} currentPage={5} showLabel />
        </Row>
        <Row label="Label only">
          <Pagination totalPages={10} currentPage={5} showPrevNext={false} showLabel />
        </Row>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 5. INTERACTIVE */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <SectionLabel>Interactive</SectionLabel>
        <div style={{
          background: 'var(--color-bg-hover)', borderRadius: 10, border: '1px solid var(--color-border-tertiary)',
          padding: '32px 32px',
        }}>
          {/* Fake content rows */}
          <div style={{ marginBottom: 24 }}>
            {Array.from({ length: 5 }, (_, i) => {
              const rowNum = (page - 1) * 5 + i + 1
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 0', borderBottom: '1px solid var(--color-border-tertiary)',
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#e0e7ff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: 'var(--color-content-tertiary)', flexShrink: 0,
                  }}>
                    {rowNum}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: 'var(--color-content-primary)' }}>
                      Result item {rowNum}
                    </div>
                    <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'var(--color-content-tertiary)' }}>
                      Page {page} · item {i + 1} of 5
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--color-content-secondary)' }}>
              Showing {(page - 1) * 5 + 1}–{Math.min(page * 5, 50)} of 50 results
            </span>
            <Pagination
              totalPages={10}
              currentPage={page}
              onChange={setPage}
              showLabel
            />
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 6. USAGE */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div>
        <SectionLabel>Usage</SectionLabel>
        <div style={{ background: 'var(--color-bg-hover)', borderRadius: 10, padding: '20px 24px', border: '1px solid var(--color-border-tertiary)' }}>
          <pre style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12.5,
            color: 'var(--color-content-primary)', margin: 0, lineHeight: '22px', overflowX: 'auto',
          }}>{`import Pagination from '@/components/atoms/Pagination'

const [page, setPage] = useState(1)

<Pagination
  totalPages={20}      // total number of pages
  currentPage={page}   // controlled active page (1-based)
  onChange={setPage}   // (page: number) => void
  siblings={1}         // pages shown on each side of active (default 1)
  showPrevNext={true}  // render ◀ / ▶ buttons
  showLabel={false}    // render "Page X of Y" label beside bar
/>`}
          </pre>
        </div>
      </div>

    </div>
  )
}
