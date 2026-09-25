import React, { useState } from 'react';
import './Gallery.css';
import merjin from '../assets/merjin.jpg'
import merjin1 from '../assets/merjin1.jpg'
import merjin2 from '../assets/merjin2.jpg'
import merjin3 from '../assets/merjin3.jpg'
import room from '../assets/room.jpg';
import room1 from '../assets/room1.jpg';

const photoDetails = {
  'DSC02149': ['Bedroom with a Valley View', 'rooms'],
  'DSC02171': ['Guest Room with Balcony', 'rooms'],
  'DSC02285': ['Bright Guest Room', 'rooms'],
  'DSC02325-2-Edit': ['Infinity Pool and Hills', 'amenities'],
  'DSC02367-Edit': ['Poolside Terrace', 'amenities'],
  'DSC02384-Edit': ['Pool with a Valley View', 'amenities'],
  'DSC02403': ['Relax by the Pool', 'amenities'],
  'DSC02421-Edit': ['Resort Pool Terrace', 'amenities'],
  'DSC02432': ['Poolside Seating', 'amenities'],
  'DSC02441-Edit': ['A Moment by the Pool', 'amenities'],
  'DSC02504-Edit': ['Evening Bonfire', 'amenities'],
  'DSC02528-Edit': ['Comfortable Resort Lounge', 'rooms'],
  'DSC02536-Edit': ['Lounge with Garden Views', 'rooms'],
  'DSC02540-Edit': ['Relaxing Guest Lounge', 'rooms'],
  'DSC02560-Edit': ['Bedroom with Balcony', 'rooms'],
  'DSC02569-Edit': ['Comfortable Resort Bedroom', 'rooms'],
  'DSC02578-Edit': ['Guest Room with a View', 'rooms'],
  'DSC02589-Edit': ['Bathroom Vanity', 'rooms'],
  'DSC02595-Edit': ['Warm and Welcoming Bedroom', 'rooms'],
  'DSC02605-Edit': ['Relaxing Suite Bedroom', 'rooms'],
  'DSC02623-Edit': ['Modern Bathroom', 'rooms'],
  'DSC02632-Edit': ['Spacious Guest Bedroom', 'rooms'],
  'DSC02645-Edit': ['Bedroom with Natural Light', 'rooms'],
  'DSC02651-Edit': ['Comfortable Suite', 'rooms'],
  'DSC02656-Edit': ['Resort Dining Area', 'amenities'],
  'DSC02663-Edit': ['Infinity Pool', 'amenities'],
  'DSC02676-Edit': ['Restaurant Dining', 'amenities'],
  'DSC02678-Edit': ['Restaurant and Bar', 'amenities'],
  'DSC02688-Edit': ['Dining at the Resort', 'amenities'],
  'DSC02694-Edit': ['Resort in the Hills', 'views'],
  'DSC02701-Edit': ['The Resort at Dusk', 'views'],
  'DSC02703-Edit': ['Resort Exterior', 'views'],
  'DSC02718-Edit': ['A Warm Dining Space', 'amenities'],
  'DJI_20260909060619_0006_D': ['Resort Among the Hills', 'views'],
  'DJI_20260909061243_0009_D': ['Aerial Resort View', 'views'],
  'DJI_20260909063238_0023_D': ['Aerial View of the Pool', 'amenities'],
  'DJI_20260909072932_0052_D': ['The Resort and Surrounding Hills', 'views'],
  'DJI_20260909104945_0061_D': ['Resort from Above', 'views'],
  'DJI_20260909160814_0095_D': ['Aerial View of the Resort', 'views'],
  'DJI_20260909161903_0167_D': ['Resort in the Green Hills', 'views'],
  'DJI_20260909185056_0181_D': ['Resort at Sunset', 'views'],
};

const newResortPhotos = Object.entries(
  import.meta.glob('../assets/optimized/*.webp', { eager: true, query: '?url', import: 'default' })
).map(([path, img]) => {
  const fileName = path.split('/').pop().replace(/\.webp$/i, '');
  const [title, category] = photoDetails[fileName] || ['A Stay at Merjin’s Paraiso Resort', 'views'];
  return { img, title, category };
});

const Gallery = ({ onBackToBooking }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'views', title: 'Misty Vagamon Meadows Morning', img: merjin },
    { id: 2, category: 'rooms', title: 'Premium Wooden Cottage Interior', img: room1 },
    { id: 3, category: 'amenities', title: 'Infinity Pool Facing the Valleys', img: merjin1 },
    { id: 4, category: 'rooms', title: 'A-Frame Glass Cabin Night View', img: room },
    { id: 5, category: 'views', title: 'Pine Forest Trekking Trail', img: merjin3},
    { id: 6, category: 'amenities', title: 'Outdoor Campfire & Grill Zone', img: merjin2 },
  ...newResortPhotos.map((photo, index) => ({
      id: index + 7,
      category: photo.category,
      title: photo.title,
      img: photo.img,
    })),
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
