import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Booking.css';

const ROOMS_CONFIG = {
  'Cozy Escape': {
    price: 3499,
    area: '30M2',
    guests: '2 GUESTS',
    beds: '1 BED',
    baths: '1 BATH',
    description: 'Comfort surrounded by nature. A rustic wooden cottage style lodging designed for peace, privacy, and an intimate connection with the pine forest walking trails.',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=75',
    inclusions: ['Private forest sit-out balcony', 'Luxury organic bath products', 'Premium tea/coffee makers']
  },
  'Nature View Retreat': {
    price: 4999,
    area: '40M2',
    guests: '2 GUESTS',
    beds: '1 BED',
    baths: '1 BATH',
    description: 'Wake up to the beauty of Vagamon. An exquisite room with wall-to-wall glass windows showing rolling meadows, a custom sit-out balcony, and comfortable amenities.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=75',
    inclusions: ['Full-glass meadow view walls', 'Balcony seating', 'Smart screen entertainment suite']
  },
  'Paraiso Signature Suite': {
    price: 6999,
    area: '55M2',
    guests: '4 GUESTS',
    beds: '2 BEDS',
    baths: '2 BATHS',
    description: 'Your most luxurious escape to nature. Wake up in our flagship suite featuring panoramic misty valley views, premium wooden architecture, a private jacuzzi setup, and standard butler services.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=75',
    inclusions: ['Private indoor jacuzzi', 'Personal butler service (optional)', 'Complimentary Sommelier Room access']
  }
};

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract initial room passed from navigation
  const passedRoomName = location.state?.room?.name;
  const initialRoom = ROOMS_CONFIG[passedRoomName] ? passedRoomName : 'Cozy Escape';

  const [selectedRoomName, setSelectedRoomName] = useState(initialRoom);
  const selectedRoom = ROOMS_CONFIG[selectedRoomName];

  // Guest Contact Information States
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  // Form Inputs State
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
    
    let nightsCount = 1; 
    let stayDatesString = "";

    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      
      const timeDiff = end.getTime() - start.getTime();
      const calculatedNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      nightsCount = calculatedNights > 0 ? calculatedNights : 1;

      const formatDateStr = (dateObj) => dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      stayDatesString = `${formatDateStr(start)} - ${formatDateStr(end)}, ${start.getFullYear()}`;
    } else {
      // Fallback stay dates
      const start = new Date();
      const end = new Date();
      end.setDate(end.getDate() + 1);
      const formatDateStr = (dateObj) => dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      stayDatesString = `${formatDateStr(start)} - ${formatDateStr(end)}, ${start.getFullYear()}`;
    }

    const baseRate = selectedRoom.price;
    const rooms = parseInt(roomCount) || 1;
    const adults = parseInt(adultsCount) || 1;

    const roomTotal = baseRate * nightsCount * rooms;
    const serviceFee = extraServices.bookingFee ? 500 : 0; // In INR now
    const individualAdultFee = extraServices.adultFee ? (250 * adults * nightsCount) : 0; // In INR
    const grandTotal = roomTotal + serviceFee + individualAdultFee;
    
    const details = {
      invoiceNo: `MP-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      guestName: guestName,
      guestEmail: guestEmail,
      guestPhone: guestPhone,
      dates: stayDatesString,
      nights: nightsCount,
      rooms: rooms,
      adults: adults,
      children: parseInt(childrenCount) || 0,
      roomName: selectedRoomName,
      basePricePerNight: baseRate,
      roomTotal: roomTotal,
      services: {
        bookingFee: serviceFee,
        adultFee: individualAdultFee, 
      },
      total: grandTotal
    };

    // Navigate to payment page instead of displaying inline invoice
    navigate('/payment', { state: { bookingDetails: details } });
  };

  return (
    <div className="booking-page-global-wrapper">
      
      {/* 1. HERO BANNER HEADER */}
      <section className="booking-hero-banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${selectedRoom.image})` }}>
        <div className="hero-overlay-content">
          <span className="hero-sub-tag">BOOK YOUR ESCAPE</span>
          <h1 className="hero-main-title">{selectedRoomName}</h1>
        </div>
      </section>

      {/* MAIN TWO-COLUMN LAYOUT CONTEXT */}
      <div className="booking-page-container">
        <div className="booking-layout-grid">
          
          {/* LEFT COLUMN: ACCOMMODATION CONTENT LISTINGS */}
          <main className="accommodation-main-details">
            <div className="price-badge">{selectedRoom.price} / NIGHT</div>
            <h1 className="accommodation-title">About {selectedRoomName}</h1>
            
            <div className="specs-row">
              <span className="spec-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                {selectedRoom.area}
              </span>
              <span className="spec-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                {selectedRoom.guests}
              </span>
              <span className="spec-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M2 11h20M22 4v16M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 17h16"></path></svg>
                {selectedRoom.beds}
              </span>
              <span className="spec-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M15 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path d="M21 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                {selectedRoom.baths}
              </span>
            </div>

            <hr className="divider" />

            <div className="accommodation-description">
              <p>{selectedRoom.description}</p>
            </div>

            <hr className="divider" />

            {/* Suite Inclusions */}
            <section className="inclusions-section">
              <h2 className="section-title">Inclusions & Privileges</h2>
              <div className="inclusions-list">
                <ul>
                  {selectedRoom.inclusions.map((inclusion, idx) => (
                    <li key={idx}>🌿 {inclusion}</li>
                  ))}
                </ul>
              </div>
            </section>

            <hr className="divider" />

            {/* Room Rules Area */}
            <section className="rules-section">
              <h2 className="section-title">Resort Rules</h2>
              <ul className="rules-list">
                <li>Check-in from 1:00 PM</li>
                <li>Check-out by 11:00 AM</li>
                <li>Secure self-check-in with assistance</li>
                <li>No smoking inside rooms</li>
                <li>Pets welcome upon prior notice</li>
              </ul>
            </section>
          </main>

          {/* RIGHT COLUMN: BOOKING SIDEBAR CARD */}
          <aside className="booking-sidebar">
            <div className="booking-widget-card">
              <h2>Book Your Room</h2>
              
              <form className="booking-form" onSubmit={handleFormSubmit}>
                
                {/* GUEST CONTACT INFORMATION FIELDS */}
                <div className="form-group contact-field">
                  <label className="input-label">Full Name</label>
                  <div className="input-wrapper">
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      value={guestName} 
                      onChange={(e) => setGuestName(e.target.value)} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group contact-field">
                  <label className="input-label">Email Address</label>
                  <div className="input-wrapper">
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      value={guestEmail} 
                      onChange={(e) => setGuestEmail(e.target.value)} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group contact-field">
                  <label className="input-label">Phone Number</label>
                  <div className="input-wrapper">
                    <input 
                      type="tel" 
                      placeholder="Enter phone number"
                      value={guestPhone} 
                      onChange={(e) => setGuestPhone(e.target.value)} 
                      required 
                    />
                  </div>
                </div>

                {/* ROOM SELECTION DROP-DOWN */}
                <div className="form-group">
                  <label className="input-label">Room Category</label>
                  <div className="select-wrapper">
                    <select value={selectedRoomName} onChange={(e) => setSelectedRoomName(e.target.value)}>
                      <option value="Cozy Escape">Cozy Escape (₹3,499/night)</option>
                      <option value="Nature View Retreat">Nature View Retreat (₹4,999/night)</option>
                      <option value="Paraiso Signature Suite">Paraiso Signature Suite (₹6,999/night)</option>
                    </select>
                    <span className="select-arrow">&#129171;</span>
                  </div>
                </div>

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
                      <option value="1">1 Room</option>
                      <option value="2">2 Rooms</option>
                      <option value="3">3 Rooms</option>
                    </select>
                    <span className="select-arrow">&#129171;</span>
                  </div>
                </div>

                <div className="form-group">
                  <div className="select-wrapper">
                    <select value={adultsCount} onChange={(e) => setAdultsCount(e.target.value)}>
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                    <span className="select-arrow">&#129171;</span>
                  </div>
                </div>

                <div className="form-group">
                  <div className="select-wrapper">
                    <select value={childrenCount} onChange={(e) => setChildrenCount(e.target.value)}>
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                    </select>
                    <span className="select-arrow">&#129171;</span>
                  </div>
                </div>

                <div className="extra-services-area">
                  <h3>Extra Services</h3>
                  <label className="checkbox-container">
                    <input type="checkbox" name="bookingFee" checked={extraServices.bookingFee} onChange={handleCheckboxChange} />
                    <span className="checkmark"></span>
                    <span className="checkbox-text">Logistics booking fee: <strong>₹500</strong></span>
                  </label>

                  <label className="checkbox-container">
                    <input type="checkbox" name="adultFee" checked={extraServices.adultFee} onChange={handleCheckboxChange} />
                    <span className="checkmark"></span>
                    <span className="checkbox-text">Catering per adult/night: <strong>₹250</strong></span>
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