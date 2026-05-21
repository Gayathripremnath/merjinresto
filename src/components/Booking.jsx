import React, { useState } from 'react';
import './Booking.css';
import InvoicePage from './Invoice';

const Booking = () => {
  // 1. Navigation & Invoice Toggle States (Fixed the missing references)
  const [isBooked, setIsBooked] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  // 2. Form Inputs State
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomCount, setRoomCount] = useState(1);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [extraServices, setExtraServices] = useState({
    bookingFee: false,
    adultFee: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setExtraServices((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Default safe fallbacks if user didn't pick dates
    let nightsCount = 3; 
    let stayDatesString = "Jan 12 - Jan 15, 2024";

    // 3. Dynamic Calculation logic based on your custom input boxes
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      
      // Calculate real difference in nights
      const timeDiff = end.getTime() - start.getTime();
      const calculatedNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      nightsCount = calculatedNights > 0 ? calculatedNights : 1; // backup safeguard

      // Format custom string to send to your Invoice component layout (e.g., "Jan 12 - Jan 15, 2026")
      const formatDateStr = (dateObj) => dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      stayDatesString = `${formatDateStr(start)} - ${formatDateStr(end)}, ${start.getFullYear()}`;
    }

    const baseRate = 499;
    const rooms = parseInt(roomCount) || 1;
    const adults = parseInt(adultsCount) || 1;

    // Financial calculations using dynamic variables
    const roomTotal = baseRate * nightsCount * rooms;
    const serviceFee = extraServices.bookingFee ? 60 : 0;
    const individualAdultFee = extraServices.adultFee ? (20 * adults * nightsCount) : 0;
    const grandTotal = roomTotal + serviceFee + individualAdultFee;
    
    const details = {
      invoiceNo: `TM-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      dates: stayDatesString, // Now updates dynamically!
      nights: nightsCount,   // Now updates dynamically!
      rooms: rooms,
      adults: adults,
      children: parseInt(childrenCount) || 0,
      basePricePerNight: baseRate,
      roomTotal: roomTotal,
      services: {
        bookingFee: serviceFee,
        adultFee: individualAdultFee, 
      },
      total: grandTotal
    };

    setBookingDetails(details);
    setIsBooked(true);
  };

  // 4. Conditional screen router setup
  if (isBooked && bookingDetails) {
    return <InvoicePage details={bookingDetails} onBack={() => setIsBooked(false)} />;
  }
  return (
    <div className="booking-page-global-wrapper">
      
      {/* 1. HERO BANNER HEADER */}
      <section className="booking-hero-banner">
        <div className="hero-overlay-content">
          <span className="hero-sub-tag">BOOK NOW!</span>
          <h1 className="hero-main-title">Welcome To Merjin's<br />Book Your Stay Today.</h1>
          <button className="hero-cta-btn">BOOK NOW</button>
        </div>
      </section>

      {/* MAIN TWO-COLUMN LAYOUT CONTEXT */}
      <div className="booking-page-container">
        <div className="booking-layout-grid">
          
          {/* LEFT COLUMN: ACCOMMODATION CONTENT LISTINGS */}
          <main className="accommodation-main-details">
            <div className="price-badge">$173 PER NIGHT</div>
            <h1 className="accommodation-title">About accommodation</h1>
            
            <div className="specs-row">
              <span className="spec-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                30M2
              </span>
              <span className="spec-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                2 GUEST
              </span>
              <span className="spec-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M2 11h20M22 4v16M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 17h16"></path></svg>
                1 BED
              </span>
              <span className="spec-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M15 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path d="M21 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                1 BATH
              </span>
            </div>

            <hr className="divider" />

            <div className="accommodation-description">
              <p>Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.</p>
              <p>Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.</p>
              <p>Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam porta facilisis. Diam dui euismod eget donec. Pharetra leo sed felis urna. At a viverra urna elementum tristique ac integer pretium. Vel tincidunt sed mi nulla lectus sagittis.</p>
            </div>

            <hr className="divider" />

            {/* Suite Inclusions */}
            <section className="inclusions-section">
              <h2 className="section-title">What's included in this suite?</h2>
              <div className="inclusions-list">
                <ul>
                  <li>220V electrical sockets</li>
                  <li>Safety box</li>
                  <li>Room safe for your top mountain photos</li>
                </ul>
                <ul>
                  <li>220V electrical sockets</li>
                  <li>Slippers</li>
                  <li>Mini bar</li>
                </ul>
              </div>
            </section>

            <hr className="divider" />

            {/* Room Rules Area */}
            <section className="rules-section">
              <h2 className="section-title">Room Rules</h2>
              <ul className="rules-list">
                <li>Check-in from 9:00 AM - anytime</li>
                <li>Check-out: 11:00 AM</li>
                <li>Self-check-in with lockbox</li>
                <li>No smoking</li>
                <li>Pets are allowed</li>
              </ul>
            </section>
          </main>

        {/* RIGHT COLUMN: BOOKING SIDEBAR CARD */}
<aside className="booking-sidebar">
  <div className="booking-widget-card">
    <h2>Book Your Room</h2>
    
    <form className="booking-form" onSubmit={handleFormSubmit}>
      
      {/* TWO SEPARATE BOXES FOR CHECK-IN AND CHECK-OUT */}
      <div className="date-picker-row">
        <div className="form-group date-box">
          <label className="date-label">Check In</label>
          <div className="input-wrapper">
            <input 
              type="date" 
              value={checkInDate} 
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckInDate(e.target.value)} 
              required
            />
          </div>
        </div>

        <div className="form-group date-box">
          <label className="date-label">Check Out</label>
          <div className="input-wrapper">
            <input 
              type="date" 
              value={checkOutDate} 
              min={checkInDate || new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckOutDate(e.target.value)} 
              required
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="select-wrapper">
          <select value={roomCount} onChange={(e) => setRoomCount(e.target.value)}>
            <option value="1">Rooms</option>
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
          </select>
          <span className="select-arrow">&#129171;</span>
        </div>
      </div>

      <div className="form-group">
        <div className="select-wrapper">
          <select value={adultsCount} onChange={(e) => setAdultsCount(e.target.value)}>
            <option value="2">Adults (18+ Years)</option>
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
          </select>
          <span className="select-arrow">&#129171;</span>
        </div>
      </div>

      <div className="form-group">
        <div className="select-wrapper">
          <select value={childrenCount} onChange={(e) => setChildrenCount(e.target.value)}>
            <option value="0">Children (0-6 Years)</option>
            <option value="0">0 Children</option>
            <option value="1">1 Child</option>
          </select>
          <span className="select-arrow">&#129171;</span>
        </div>
      </div>

      <div className="extra-services-area">
        <h3>Extra Services</h3>
        <label className="checkbox-container">
          <input type="checkbox" name="bookingFee" checked={extraServices.bookingFee} onChange={handleCheckboxChange} />
          <span className="checkmark"></span>
          <span className="checkbox-text">Service per booking <strong>$60</strong></span>
        </label>

        <label className="checkbox-container">
          <input type="checkbox" name="adultFee" checked={extraServices.adultFee} onChange={handleCheckboxChange} />
          <span className="checkmark"></span>
          <span className="checkbox-text">Service per person Adult : <strong>$20</strong></span>
        </label>
      </div>

      <button type="submit" className="book-now-submit-btn">
        BOOK YOUR STAY NOW
      </button>
    </form>
  </div>
</aside>

        </div>
      </div>

    </div>
  );
};

export default Booking;