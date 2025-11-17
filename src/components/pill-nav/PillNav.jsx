import { useEffect, useRef, useState } from 'react'
import './PillNav.css'

const PillNav = ({ items = [], defaultActiveHref, className = '', onNavigate }) => {
  const [activeHref, setActiveHref] = useState(() => {
    if (defaultActiveHref) return defaultActiveHref
    if (typeof window !== 'undefined' && window.location.hash) {
      return window.location.hash
    }
    const firstLink = items.find((item) => item.href)
    return firstLink?.href ?? null
  })
  const listRef = useRef(null)
  const highlightRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const syncFromHash = () => {
      if (window.location.hash && window.location.hash !== activeHref) {
        setActiveHref(window.location.hash)
      }
    }

    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [activeHref])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const list = listRef.current
    const highlight = highlightRef.current
    if (!list || !highlight) return

    const update = () => {
      const navItems = items.filter((item) => item.href)
      const pills = list.querySelectorAll('[data-nav-link="true"]')
      const index = navItems.findIndex((item) => item.href === activeHref)
      if (index === -1 || !pills[index]) {
        highlight.style.opacity = 0
        return
      }

      const pill = pills[index]
      const { offsetLeft, offsetWidth } = pill
      highlight.style.opacity = 1
      highlight.style.transform = `translateX(${offsetLeft}px)`
      highlight.style.width = `${offsetWidth}px`
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [activeHref, items])

  const handleClick = (href) => {
    setActiveHref(href)
    if (onNavigate) onNavigate(href)
  }

  return (
    <div className={`pill-nav ${className}`}>
      <div className="pill-nav-track" ref={listRef}>
        <span className="pill-nav-highlight" ref={highlightRef} aria-hidden="true" />
        {items.map((item, index) => {
          const key = item.key ?? item.href ?? item.label ?? index
          const content = item.node ?? item.label

          if (!item.href) {
            return (
              <div key={key} className="pill-nav-link pill-nav-custom">
                {content}
              </div>
            )
          }

          const classNames = [
            'pill-nav-link',
            item.className ?? '',
            item.href === activeHref ? 'is-active' : '',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <a
              key={key}
              href={item.href}
              data-nav-link="true"
              aria-label={item.ariaLabel ?? item.label}
              className={classNames}
              onClick={() => handleClick(item.href)}
            >
              {content}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default PillNav
