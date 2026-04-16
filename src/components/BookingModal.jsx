import React from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-content">
          <div className="modal-left">
            <h2 className="modal-title">Reserve Your <br/> <span>Paradise</span></h2>
            <p className="modal-tagline">Experience the pinnacle of luxury.</p>
          </div>
          
          <div className="modal-right">
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>CHECK-IN</label>
                <input type="date" className="luxury-input" />
              </div>
              
              <div className="form-group">
                <label>CHECK-OUT</label>
                <input type="date" className="luxury-input" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>GUESTS</label>
                  <select className="luxury-input">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>ROOM TYPE</label>
                  <select className="luxury-input">
                    <option>Executive Suite</option>
                    <option>Deluxe Room</option>
                    <option>Alpine Suite</option>
                  </select>
                </div>
              </div>
              
              <button className="confirm-book-btn">CHECK AVAILABILITY</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
