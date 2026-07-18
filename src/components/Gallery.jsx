import React, { useState } from 'react';
import './Gallery.css';
import merjin from '../assets/merjin.jpg'
import merjin1 from '../assets/merjin1.jpg'
import merjin2 from '../assets/merjin2.jpg'
import merjin3 from '../assets/merjin3.jpg'
import room from '../assets/room.jpg';
import room1 from '../assets/room1.jpg';

const Gallery = ({ onBackToBooking }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'views', title: 'Misty Vagamon Meadows Morning', img: merjin },
    { id: 2, category: 'rooms', title: 'Premium Wooden Cottage Interior', img: room1 },
    { id: 3, category: 'amenities', title: 'Infinity Pool Facing the Valleys', img: merjin1 },
    { id: 4, category: 'rooms', title: 'A-Frame Glass Cabin Night View', img: room },
    { id: 5, category: 'views', title: 'Pine Forest Trekking Trail', img: merjin3},
    { id: 6, category: 'amenities', title: 'Outdoor Campfire & Grill Zone', img: merjin2 },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="gallery-global-wrapper">
      {/* GALLERY HERO HEADER */}
      <section className="gallery-hero-banner">
        <div className="gallery-hero-content">
          <span className="gallery-sub-tag">VISUAL EXPERIENCES</span>
          <h1 className="gallery-main-title">Glimpses of Vagamon</h1>
          <button className="btn-gallery-nav-back" onClick={onBackToBooking}>
            &larr; Back To Booking
          </button>
        </div>
      </section>

      {/* FILTER CONTROLS TABS */}
      <div className="gallery-container">
        <div className="gallery-filter-tabs">
          {['all', 'rooms', 'views', 'amenities'].map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* MASONRY/GEOMETRIC GALLERY GRID */}
        <div className="gallery-masonry-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="gallery-img-wrapper">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-category">{item.category}</span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;