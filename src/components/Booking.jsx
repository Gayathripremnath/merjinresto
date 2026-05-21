import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state?.room || {};
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [extraService, setExtraService] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend.
    const invoiceData = {
      room,
      checkIn,
      checkOut,
      guests,
      extraService,
    };
    navigate('/invoice', { state: invoiceData });
  };

  return (
    <div className="booking-page">
      <section className="booking-hero" style={{ backgroundImage: `url(${room.image || '/assets/room_hero.png'})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll fade-up">{room.name || 'Room'} Booking</h1>
          <p className="hero-subtitle animate-on-scroll fade-up delay-200">
            Experience luxury and comfort. Reserve your stay now.
          </p>
        </div>
      </section>

      <section className="booking-details">
        <div className="container">
          <div className="room-summary">
            <h2>{room.name || 'Room'} – {room.price || '$0'} / NIGHT</h2>
            <p>{room.description || ''}</p>
            <ul className="spec-list">
              <li>{room.area || ''}</li>
              <li>{room.guests || ''}</li>
              <li>{room.beds || ''}</li>
              <li>{room.baths || ''}</li>
            </ul>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Reserve Your Stay</h3>
            <div className="form-group">
              <label>Check‑In</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Check‑Out</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Guests</label>
              <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="extraService"
                checked={extraService}
                onChange={(e) => setExtraService(e.target.checked)}
              />
              <label htmlFor="extraService">Add Extra Service ($60)</label>
            </div>
            <button type="submit" className="book-submit-btn">Book Your Stay Now</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booking;
