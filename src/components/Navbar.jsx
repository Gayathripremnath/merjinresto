import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-section left">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="menu-lines">
            <span />
            <span />
          </div>
          <span className="menu-text">MENU</span>
        </button>
        <div className="v-line" />
        <div className="contact-link">
          <span className="phone-icon">📞</span>
          <a href="tel:+41965677854">+91 96567-7854</a>
        </div>
      </div>

      <div className="nav-section center">
        <Link to="/" className="brand-box">
          <h1 className="brand-name">MERJIN'S PARAISO</h1>
          <span className="brand-sub">LUXURY HOTEL</span>
        </Link>
      </div>

      <div className="nav-section right">
        <div className="lang-switcher">

        </div>
        <div className="v-line" />
        <button className="navbar-book-btn">BOOK YOUR STAY</button>
      </div>

      <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
        <button 
          className="close-menu-btn" 
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <div className="mobile-links">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          <a href="#rooms" onClick={() => setIsMenuOpen(false)}>ROOMS</a>
          <a href="#facilities" onClick={() => setIsMenuOpen(false)}>FACILITIES</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar