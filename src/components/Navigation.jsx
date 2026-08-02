import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import './navigation.css'

const navLinks = [
  { label: 'Our Mission', href: '/#top' },
  { label: 'Garden Rules', href: '/#benefits' },
  { label: 'Composting', href: '/#join-compost' },
  { label: 'Events', href: '/#events' },
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Hide-on-scroll-down / show-on-scroll-up header behavior
  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const navRoot = navRef.current
      if (!navRoot) return
      const currentScroll = window.pageYOffset

      if (currentScroll <= 0) {
        navRoot.style.boxShadow = 'none'
        return
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        navRoot.style.transform = 'translateY(-100%)'
      } else {
        navRoot.style.transform = 'translateY(0)'
        navRoot.style.boxShadow = 'var(--shadow-level-2)'
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const leafIcon = (
    <svg width="24" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </g>
    </svg>
  )

  return (
    <nav ref={navRef} className="navigation-root">
      <div className="navigation-container">
        <Link to="/" className="navigation-link10">
          <div aria-label="NeighborNurture Home" className="navigation-brand">
            <div className="navigation-logo-icon">{leafIcon}</div>
            <span className="navigation-brand-name section-title">NeighborNurture</span>
          </div>
        </Link>
        <div className="navigation-links-desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navigation-link-wrapper">
              <div className="navigation-link">
                <span>{link.label}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="navigation-actions">
          <a href="/#join-compost" className="navigation-link15">
            <div className="btn btn-outline btn-sm navigation-btn-login">
              <svg width="24" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="12" cy="7"></circle>
                </g>
              </svg>
              <span>Member Login</span>
            </div>
          </a>
          <a href="/#join-compost" className="navigation-link16">
            <div className="navigation-btn-join btn btn-sm btn-primary">
              <span>Join the Garden</span>
            </div>
          </a>
          <button
            aria-label="Toggle navigation menu"
            aria-controls="mobileMenu"
            aria-expanded={menuOpen}
            className="navigation-toggle"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" className="icon-menu">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobileMenu" className={`navigation-mobile-overlay${menuOpen ? ' is-menu-open' : ''}`}>
        <div className="navigation-mobile-header">
          <Link to="/" className="navigation-link17" onClick={closeMenu}>
            <div aria-label="NeighborNurture Home" className="navigation-brand">
              <div className="navigation-logo-icon">{leafIcon}</div>
              <span className="navigation-brand-name section-title">NeighborNurture</span>
            </div>
          </Link>
          <button aria-label="Close navigation menu" className="navigation-close" onClick={closeMenu}>
            <svg width="24" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                <path d="M9 16l3-3l3 3"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <div className="navigation-mobile-links">
            {[
              { label: 'Our Mission', href: '/#top' },
              { label: 'Garden Rules', href: '/#benefits' },
              { label: 'Composting Guide', href: '/#join-compost' },
              { label: 'Community Events', href: '/#events' },
              { label: 'Volunteer', href: '/#join-volunteer' },
            ].map((link) => (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                <div className="navigation-mobile-link">
                  <span>{link.label}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="navigation-mobile-actions">
            <a href="/#join-compost" onClick={closeMenu}>
              <div className="btn btn-primary btn-lg navigation-mobile-btn">
                <span>Join the Garden</span>
              </div>
            </a>
            <a href="/#join-volunteer" onClick={closeMenu}>
              <div className="btn btn-outline btn-lg navigation-mobile-btn">
                <span>Member Portal</span>
              </div>
            </a>
          </div>
          <div className="navigation-mobile-footer">
            <p className="section-content">Nurturing community, one seed at a time.</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
