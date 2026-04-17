import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-column brand-col animate-on-scroll fade-up">
          <Link to="/" className="brand-box" style={{ textDecoration: 'none' }}>
            <h1 className="brand-name">MERJIN'S PARAISO</h1>
            <span className="brand-sub">LUXURY HOTEL</span>
          </Link>
          <p className="footer-desc">
            Experience the pinnacle of hospitality. Where breathtaking views, modern elegance, and uncompromised luxury meet to create your perfect escape.
          </p>
        </div>

        <div className="footer-column links-col animate-on-scroll fade-up delay-100">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#rooms">Rooms & Suites</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </div>

        <div className="footer-column contact-col animate-on-scroll fade-up delay-200">
          <h3>Contact Us</h3>
          <ul>
            <li><span>📍</span> 123 Alpine Way, Mountain Resort, CH</li>
            <li><span>📞</span> <a href="tel:+41965677854">+41-96567-7854</a></li>
            <li><span>✉️</span> <a href="mailto:info@merjinsparaiso.com">info@merjinsparaiso.com</a></li>
          </ul>
        </div>

        <div className="footer-column social-col animate-on-scroll fade-up delay-300">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Instagram" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>

            <a href="#" aria-label="Facebook" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h2V2z" fill="currentColor"/>
              </svg>
            </a>

            <a href="#" aria-label="Twitter" title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M23 4.5c-.8.4-1.6.6-2.4.8.9-.6 1.6-1.6 1.9-2.7-.8.5-1.7.8-2.7 1-1-1-2.6-1-3.7-.2-1.1.8-1.5 2.2-.9 3.4-3.1-.2-6-1.7-8-4-1 .9-1.6 2-1.6 3.4 0 1.2.6 2.3 1.5 3-.7 0-1.4-.2-2-.6v.1c0 1.6 1.1 3 2.6 3.3-.6.2-1.3.2-2 .1.6 1.8 2.3 3.1 4.3 3.1-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.2-.1 2 1.4 4.4 2.2 6.9 2.2 8.3 0 12.8-7 12.8-13v-.6c.9-.6 1.6-1.4 2.2-2.2-.8.4-1.6.6-2.5.7z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom animate-on-scroll fade-up delay-100">
        <p>&copy; {new Date().getFullYear()} Genova Technologies. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
