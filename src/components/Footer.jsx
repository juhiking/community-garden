import React, { useEffect, useRef, useState } from 'react'

import './footer.css'

const Footer = () => {
  const rootRef = useRef(null)
  const [newsletterState, setNewsletterState] = useState('idle') // idle | sending | done

  // Scroll-reveal for footer columns
  useEffect(() => {
    const columns = rootRef.current?.querySelectorAll('.footer-column')
    if (!columns || columns.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            entry.target.style.transition = `all 0.6s ease-out ${index * 0.1}s`
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px' }
    )

    columns.forEach((col) => {
      col.style.opacity = '0'
      col.style.transform = 'translateY(20px)'
      observer.observe(col)
    })

    return () => observer.disconnect()
  }, [])

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterState !== 'idle') return
    setNewsletterState('sending')
    // No backend is wired up yet — this simulates a successful signup.
    setTimeout(() => setNewsletterState('done'), 800)
  }

  return (
    <footer ref={rootRef} className="footer-root">
      <div className="footer-container">
        <div className="footer-layout">
          <div className="footer-column footer-brand-col">
            <div className="footer-logo-group">
              <div className="footer-logo-icon">
                <svg width="32" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24">
                  <path
                    d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="footer-brand-name">NeighborNurture</span>
            </div>
            <p className="section-content footer-mission">
              Nurturing community spirit through sustainable urban gardening. Join us in cultivating a
              greener, friendlier neighborhood for families and future generations.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-wrapper">
                <div aria-label="Facebook" className="footer-social-icon">
                  <svg width="24" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24">
                    <path
                      d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="footer-social-wrapper">
                <div aria-label="Instagram" className="footer-social-icon">
                  <svg width="24" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                    </g>
                  </svg>
                </div>
              </a>
              <a href="#" className="footer-social-wrapper">
                <div aria-label="Email Us" className="footer-social-icon">
                  <svg width="24" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-links-col footer-column">
            <h2 className="footer-col-title section-subtitle">Get Involved</h2>
            <nav className="footer-nav">
              <ul className="footer-nav-list">
                {[
                  { label: 'Home Garden', href: '/' },
                  { label: 'Volunteer Program', href: '/#join-volunteer' },
                  { label: 'Composting Hub', href: '/#join-compost' },
                  { label: 'Gardening Workshops', href: '/#events' },
                  { label: 'Community Rules', href: '/#benefits' },
                ].map((link) => (
                  <li key={link.label} className="footer-nav-item">
                    <a href={link.href}>
                      <div className="footer-nav-link">
                        <span>{link.label}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="footer-cta-col footer-column">
            <h2 className="footer-col-title section-subtitle">Stay Rooted</h2>
            <p className="footer-cta-text section-content">
              Get weekly gardening tips and neighborhood updates delivered to your inbox.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="footer-input-group">
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  required
                  aria-label="Email for newsletter"
                  placeholder="Your email address"
                  className="footer-input"
                  disabled={newsletterState === 'done'}
                />
                <button
                  type="submit"
                  className={`btn btn-primary footer-submit-btn${newsletterState === 'done' ? ' footer-submit-btn--done' : ''}`}
                  disabled={newsletterState !== 'idle'}
                >
                  <span>
                    {newsletterState === 'idle' && 'Join Us'}
                    {newsletterState === 'sending' && 'Planting...'}
                    {newsletterState === 'done' && 'Welcome!'}
                  </span>
                </button>
              </div>
              <p className="footer-form-note">We only send garden news. No spam, ever.</p>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2026 NeighborNurture Community Garden. All rights reserved.
            </p>
            <div className="footer-legal-links">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((label) => (
                <a key={label} href="#" className="footer-legal-wrapper">
                  <div className="footer-legal-link">
                    <span>{label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="footer-decoration">
        <img
          alt=""
          src="/images/footer-veggies.jpg"
          className="footer-decoration-img"
        />
      </div>
    </footer>
  )
}

export default Footer
