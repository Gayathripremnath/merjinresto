import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Room.css';
import './RoomDetails.css';

const RoomDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state || {};

  const [activeImage, setActiveImage] = useState(room?.image);

  if (!room) {
    navigate('/rooms');
    return null;
  }

  const handleBookNow = () => {
    navigate('/booking', { state: { room } });
  };

  const gallery = room.gallery || [room.image];

  return (
    <div className="room-details-page">
      <section className="rooms-hero" style={{ backgroundImage: `url(${room.image})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle" style={{ marginBottom: '10px', letterSpacing: '4px', fontSize: '14px', fontWeight: '600' }}>ROOM DETAILS</p>
          <h1 className="hero-title">{room.name}</h1>
        </div>
      </section>

      <section className="room-info-section">
        <div className="container">
          <div className="rd-content-grid">
            <div className="rd-image-column">
              <img src={activeImage || room.image} alt={room.name} className="rd-main-image" />
              <div className="rd-thumbnail-gallery">
                {gallery.map((img, index) => (
                  <img 
                    key={index} 
                    src={img} 
                    alt={`${room.name} view ${index + 1}`} 
                    className={`rd-thumbnail ${(activeImage || room.image) === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  />
                ))}
              </div>
            </div>
            
            <div className="rd-details-column">
              <h2 className="rd-title">{room.name}</h2>
              <div className="rd-price-wrap">
                <span className="rd-price">
                  {room.price}
                </span>
                <span className="rd-per-night"> / NIGHT</span>
              </div>
              
              <div className="rd-divider"></div>

              <p className="rd-description">{room.description}</p>
              
              <div className="rd-specs-grid">
                <div className="rd-spec-item">
                  <span className="rd-spec-label">Area</span>
                  <span className="rd-spec-value">{room.area}</span>
                </div>
                <div className="rd-spec-item">
                  <span className="rd-spec-label">Guests</span>
                  <span className="rd-spec-value">{room.guests}</span>
                </div>
                <div className="rd-spec-item">
                  <span className="rd-spec-label">Beds</span>
                  <span className="rd-spec-value">{room.beds}</span>
                </div>
                <div className="rd-spec-item">
                  <span className="rd-spec-label">Baths</span>
                  <span className="rd-spec-value">{room.baths}</span>
                </div>
              </div>

              <button className="rd-book-btn" >
                Complete Booking
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetails;
