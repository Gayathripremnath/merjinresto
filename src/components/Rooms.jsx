import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Room.css'
import roomHeroImg from '../assets/room_hero.png'
import room from '../assets/room.jpg';

const Rooms = () => {
  const navigate = useNavigate()

  // Scroll animations observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible')
          obs.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const roomsData = [
    {
      id: 1,
      name: 'Paraiso Signature Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=75',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80'
      ],
      area: '55M2',
      guests: '4 GUESTS',
      beds: '2 BEDS',
      baths: '2 BATHS',
      price: '₹6,999',
      description: 'Your most luxurious escape to nature. Wake up in our flagship suite featuring panoramic misty valley views, premium wooden architecture, a private jacuzzi setup, and standard butler services.'
    },
    {
      id: 2,
      name: 'Nature View Retreat',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=75',
      gallery: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
      ],
      area: '40M2',
      guests: '2 GUESTS',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹4,999',
      description: 'Wake up to the beauty of Vagamon. An exquisite room with wall-to-wall glass windows showing rolling meadows, a custom sit-out balcony, and comfortable amenities.'
    },
    {
      id: 3,
      name: 'Cozy Escape',
      image: room,
      gallery: [
        'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80'
      ],
      area: '30M2',
      guests: '2 GUESTS',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹3,499',
      description: 'Comfort surrounded by nature. A rustic wooden cottage style lodging designed for peace, privacy, and an intimate connection with the pine forest walking trails.'
    }
  ]

  const servicesData = [
    {
      id: 1,
      title: '24/7 Room Service',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 17h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM12 6a1 1 0 0 0-1-1H9V3h6v2h-2a1 1 0 0 0-1 1v3h10v2H2V9h10V6z" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Savor gourmet meals crafted by our executive chefs, delivered directly to your door at any hour.'
    },
    {
      id: 2,
      title: 'Spa & Wellness Access',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3a9 9 0 0 1 9 9v1a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-1a9 9 0 0 1 9-9z" strokeLinecap="round"/>
          <path d="M12 8a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4v-1a4 4 0 0 1 4-8z" strokeLinecap="round"/>
          <path d="M12 3v18M3 12h18" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Complimentary access to the infinity thermal pools, steam saunas, and relaxation lounges.'
    },
    {
      id: 3,
      title: 'Dedicated Butler Service',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 17a6 6 0 0 0-12 0H2v2h20v-2h-4zM12 6v5M12 3v0" strokeLinecap="round"/>
        </svg>
      ),
      description: 'A personal butler assigned to your suite to handle unpacking, reservations, and bespoke requests.'
    },
    {
      id: 4,
      title: 'Valet & Luxury Transport',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2v20M2 12h20M7.5 7.5l9 9M16.5 7.5l-9 9"/>
        </svg>
      ),
      description: 'Chauffeur-driven private airport transfers and complimentary secure valet parking.'
    },
    {
      id: 5,
      title: 'Private Sommelier Room',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 22h8M12 11v11M12 11a5 5 0 0 0 5-5V2H7v4a5 5 0 0 0 5 5z" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Exclusive access to wine-tasting sessions hosted by our resident sommelier in the private vault.'
    },
    {
      id: 6,
      title: 'Helipad Access',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 8v8M16 8v8M8 12h8" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Private helipad facilities for seamless aerial transfers and charter arrivals.'
    }
  ]

  return (
    <div className="rooms-page">
      {/* Immersive Hero Section */}
      <section className="rooms-hero" style={{ backgroundImage: `url(${roomHeroImg})` }}>
        <div className="hero-overlay" />
        
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll fade-up">Rooms & Suites</h1>
          <p className="hero-subtitle animate-on-scroll fade-up delay-200">
            Indulge in luxury in our rooms and suites, featuring stunning views, elegant furnishings, and modern amenities.
          </p>
        </div>
    
      </section>

      {/* Catalog Grid Section (High-Contrast Editorial White Background) */}
      <section className="catalog-section-v2">
        <div className="container">
          <div className="catalog-grid-v2">
            {roomsData.map((room, idx) => (
              <div 
                key={room.id} 
                className="catalog-card-v2 animate-on-scroll scale-fade-up"
                style={{ animationDelay: `${(idx % 3 + 1) * 150}ms` }}
              >
                {/* Image Container with Custom Inset Border, Price Badge, and Book Now Button */}
                <div className="card-image-wrap-v2">
                  <img src={room.image} alt={room.name} />
                  <div className="inset-border-overlay" />
                                      <div className="price-badge-v2">{room.price} / NIGHT</div>
                  <button className="read-more-btn" onClick={() => {
                    navigate('/roomdetails', { state: { room } });
                  }}>Read More</button>
                </div>
                
                {/* Text Body */}
                <div className="card-body-v2">
                  <h3 className="room-title-v2">{room.name}</h3>
                  
                  {/* Inline Specs with Clean SVG Icons */}
                  <div className="room-specs-v2">
                    <span className="spec-item-v2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3"/>
                        <path d="M7 12h10M7 12l3-3M7 12l3 3M17 12l-3-3M17 12l-3 3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {room.area}
                    </span>
                    <span className="spec-item-v2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      {room.guests}
                    </span>
                    <span className="spec-item-v2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 4v16M2 11h20M2 17h20M22 4v16M18 8H6a2 2 0 0 0-2 2v1H20v-1a2 2 0 0 0-2-2z" strokeLinecap="round"/>
                      </svg>
                      {room.beds}
                    </span>
                    <span className="spec-item-v2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 12a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3zM2 11h20M7 5v6M17 5v6" strokeLinecap="round"/>
                      </svg>
                      {room.baths}
                    </span>
                  </div>

                  <p className="room-desc-v2">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: AMENITIES & SERVICES */}
      <section className="rooms-services-section">
        {/* Header Row */}
        <div className="rooms-services-header">
          <div className="rooms-services-title-area">
            <span className="rooms-sub-title">LUXURY, COMFORT & TAILOR-MADE SERVICES</span>
            <h2 className="rooms-main-title1">Amenities & Services</h2>
          </div>
          <div className="rooms-services-desc-area">
            <p className="rooms-services-description">
              Relax and unwind with our exceptional amenities, including a serene infinity pool, 
              nature trails, and personalized service to ensure your stay at Merjin's Paraíso is 
              unforgettable.
            </p>
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="rooms-services-grid">
          {/* Card 1: Restaurant */}
          <div className="rooms-service-card">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=75" alt="Restaurant" className="rooms-card-img" loading="lazy" />
            <div className="rooms-card-overlay">
              <h3>Restaurant</h3>
              <p>Delicious Cuisine</p>
            </div>
          </div>

          {/* Card 2: Infinity Pool */}
          <div className="rooms-service-card">
            <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=75" alt="Infinity Pool" className="rooms-card-img" loading="lazy" />
            <div className="rooms-card-overlay">
              <h3>Infinity Pool</h3>
              <p>Breathtaking Valley Views</p>
            </div>
          </div>

          {/* Card 3: Bonfire */}
          <div className="rooms-service-card">
            <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=75" alt="Bonfire" className="rooms-card-img" loading="lazy" />
            <div className="rooms-card-overlay">
              <h3>Bonfire</h3>
              <p>Cozy Evening Gatherings</p>
            </div>
          </div>

          {/* Card 4: Barbeque */}
          <div className="rooms-service-card">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=75" alt="Barbeque" className="rooms-card-img" loading="lazy" />
            <div className="rooms-card-overlay">
              <h3>Barbeque</h3>
              <p>Grilled Delights Outdoors</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BOOKING GUIDE */}
      <section className="booking-guide-section">
        <div className="container">
          <div className="guide-header">
            <span className="rooms-sub-title">GUEST GUIDANCE</span>
            <h2 className="rooms-main-title1">How to Book Your Stay</h2>
          </div>
          <div className="guide-grid">
            <div className="guide-card animate-on-scroll fade-up">
              <div className="guide-number">03</div>
              <h3>How to Check the Room Availability?</h3>
              <p>
                Navigate to the <strong>Book Your Stay</strong> form. Enter your desired check-in and check-out dates, set the room quantity, and specify the number of guests. The calendar helper will instantly show you available slots.
              </p>
            </div>
            <div className="guide-card animate-on-scroll fade-up delay-100">
              <div className="guide-number">04</div>
              <h3>How to Proceed Further?</h3>
              <p>
                Once you see dynamic pricing and confirm room categories, fill in your guest details and click <strong>"Book Your Stay Now"</strong>. You will proceed to our secure mock payment page to choose cards, UPI, or Net Banking and receive your dynamic paid PDF receipt immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  )
}

export default Rooms
