import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ onBackToBooking }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'rooms', title: 'Premium Wooden Cottage Interior', img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'views', title: 'Misty Vagamon Meadows Morning', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'amenities', title: 'Infinity Pool Facing the Valleys', img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'rooms', title: 'A-Frame Glass Cabin Night View', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'views', title: 'Pine Forest Trekking Trail', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'amenities', title: 'Outdoor Campfire & Grill Zone', img: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0fGVufDB8fDB8fHww' },
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