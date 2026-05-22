import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = ({ onBackToBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Simulate API integration pipeline
    console.log("Contact Form Submission Logged:", formData);
    setIsSubmitted(true);
    
    // Reset form field inputs after clear submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-global-wrapper">
      {/* CONTACT HERO HEADER */}
      <section className="contact-hero-banner">
        <div className="contact-hero-content">
          <span className="contact-sub-tag">GET IN TOUCH</span>
          <h1 className="contact-main-title">Connect With Us</h1>
          <button className="btn-contact-nav-back" onClick={onBackToBooking}>
            &larr; Back To Booking
          </button>
        </div>
      </section>

      <div className="contact-page-container">
        <div className="contact-layout-grid">
          
          {/* LEFT COLUMN: RESORT CONTACT INFORMATION CARDS */}
          <div className="contact-info-sidebar">
            <div className="info-intro">
              <h2>We'd Love to Hear From You</h2>
              <p>Whether you are planning a serene mountain getaway, inquiring about custom event hosting, or seeking trail guides, our desk is open 24/7.</p>
            </div>

            <div className="contact-cards-stack">
              <div className="info-card">
                <div className="card-icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="card-text-context">
                  <h4>Our Sanctuary Location</h4>
                  <p>Unique Vagamon Resort, Pine Valley Road, Vagamon, Kerala, India</p>
                </div>
              </div>

              <div className="info-card">
                <div className="card-icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="card-text-context">
                  <h4>Reservation Desk Line</h4>
                  <p>+91 9845 123 456 <br /> <span className="text-muted-call">Available Mon-Sun, 8 AM - 10 PM IST</span></p>
                </div>
              </div>

              <div className="info-card">
                <div className="card-icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="card-text-context">
                  <h4>Electronic Mailbox</h4>
                  <p>stay@uniquevagamon.com<br />concierge@uniquevagamon.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM CONTAINER */}
          <div className="contact-form-card">
            {isSubmitted ? (
              <div className="form-success-state">
                <div className="success-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3>Message Received Securely</h3>
                <p>Thank you for reaching out to Unique Vagamon. Our hospitality team will review your inquiry details and get back to you via your provided email within 12 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form-element">
                <h3>Send Us A Message</h3>
                <p className="form-subtitle-helper">Fill out this quick directory form, and we will reach right out to you.</p>

                <div className="contact-form-group">
                  <label className="contact-input-label">Your Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-input-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="name@example.com" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-input-label">Inquiry Department Classification</label>
                  <div className="contact-select-wrapper">
                    <select name="subject" value={formData.subject} onChange={handleInputChange}>
                      <option value="General Inquiry">General Cottage Inquiry</option>
                      <option value="Booking Revision">Reservation & Stay Alterations</option>
                      <option value="Corporate / Event">Corporate Retreats & Event Management</option>
                      <option value="Feedback">Feedback & Resort Experiences</option>
                    </select>
                    <span className="contact-select-arrow">&#129171;</span>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-input-label">Message Details</label>
                  <textarea 
                    name="message" 
                    rows="5" 
                    placeholder="How can our mountain concierge assist you today?" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-contact-submit-action">
                  TRANSMIT MESSAGE NOW
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;