import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header>
      <nav className="wrap">
        <a href="#home" className="logo" onClick={() => setIsOpen(false)}>
          Markrrr
        </a>

        <ul className={`nav-links${isOpen ? ' open' : ''}`} id="navLinks">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="navLinks"
          onClick={() => setIsOpen((open) => !open)}
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
        </button>
      </nav>
    </header>
  )
}
