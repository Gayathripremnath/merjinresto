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
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom animate-on-scroll fade-up delay-100">
        <p>&copy; {new Date().getFullYear()} Merjin's Paraiso. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
