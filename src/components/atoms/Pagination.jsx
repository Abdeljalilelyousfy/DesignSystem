import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import '../../styles/pagination.css'

/** Build the visible page list with ellipsis markers. */
function getPageRange(total, current, siblings) {
  if (total <= 1) return [1]

  const DOTS = '…'
  // If small enough, show everything
  if (total <= siblings * 2 + 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const left      = Math.max(current - siblings, 2)
  const right     = Math.min(current + siblings, total - 1)
  const showLeft  = left > 2
  const showRight = right < total - 1

  const pages = [1]

  if (showLeft) {
    pages.push(DOTS)
  } else {
    for (let i = 2; i < left; i++) pages.push(i)
  }

  for (let i = left; i <= right; i++) pages.push(i)

  if (showRight) {
    pages.push(DOTS)
  } else {
    for (let i = right + 1; i < total; i++) pages.push(i)
  }

  pages.push(total)
  return pages
}

/**
 * Pagination — page number bar with prev / next navigation.
 *
 * @param {number}   totalPages   - total number of pages
 * @param {number}   currentPage  - active page (1-based)
 * @param {number}   siblings     - pages shown on each side of active (default 1)
 * @param {boolean}  showPrevNext - render ◀ / ▶ buttons (default true)
 * @param {boolean}  showLabel    - render "Page X of Y" text beside the bar (default false)
 * @param {function} onChange     - (page: number) => void — called on page change
 * @param {string}   className    - added to the <nav> wrapper
 * @param {object}   style        - added to the <nav> wrapper
 */
export default function Pagination({
  totalPages   = 10,
  currentPage  = 1,
  siblings     = 1,
  showPrevNext = true,
  showLabel    = false,
  onChange,
  className    = '',
  style,
}) {
  const pages = getPageRange(totalPages, currentPage, siblings)

  const go = page => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onChange?.(page)
  }

  return (
    <nav aria-label="Pagination" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, ...style }} className={className}>
      <div className="pagination">

        {/* ◀ Prev */}
        {showPrevNext && (
          <button
            className="pagination-nav"
            aria-label="Go to previous page"
            disabled={currentPage <= 1}
            onClick={() => go(currentPage - 1)}
          >
            <CaretLeft size={14} weight="bold" />
          </button>
        )}

        {/* Page numbers */}
        {pages.map((page, idx) =>
          page === '…'
            ? (
              <span
                key={`dots-${idx}`}
                className="pagination-btn pagination-dots"
                aria-hidden="true"
              >
                …
              </span>
            )
            : (
              <button
                key={page}
                className={['pagination-btn', page === currentPage ? 'pagination-active' : ''].filter(Boolean).join(' ')}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                onClick={() => go(page)}
              >
                {page}
              </button>
            )
        )}

        {/* ▶ Next */}
        {showPrevNext && (
          <button
            className="pagination-nav"
            aria-label="Go to next page"
            disabled={currentPage >= totalPages}
            onClick={() => go(currentPage + 1)}
          >
            <CaretRight size={14} weight="bold" />
          </button>
        )}

      </div>

      {/* Optional "Page X of Y" label */}
      {showLabel && (
        <span className="pagination-label">
          Page {currentPage} of {totalPages}
        </span>
      )}
    </nav>
  )
}
