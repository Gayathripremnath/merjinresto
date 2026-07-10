import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-column brand-col ">
          <Link to="/" className="brand-box" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="" />
          </Link>
          <p className="footer-desc">
            Experience the pinnacle of hospitality. Where breathtaking views, modern elegance, and uncompromised luxury meet to create your perfect escape.
          </p>
        </div>

        <div className="footer-column ">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/rooms">Rooms </Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column ">
          <h3>Contact Us</h3>
          <ul>
            <li><span>📍</span> 123 Alpine Way, Mountain Resort, CH,Vagamon</li>
            <li><span>📞</span> <a href="tel:+91 8848808474">+91 8848808474</a></li>
            <li><span>✉️</span> <a href="mailto:merjinsparaiso@gmail.com">merjinsparaiso@gmail.com</a></li>
          </ul>
        </div>

        <div className="footer-column ">
          <h3>Follow Us</h3>
          <div className="social-links">
           <a
  href="https://www.instagram.com/merjinsparaiso/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  title="Instagram"
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
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
      
      <div className="footer-bottom ">
        <p>&copy; {new Date().getFullYear()} Genova Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
