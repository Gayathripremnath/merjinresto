import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Room.css'
import roomHeroImg from '../assets/room_hero.png'

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
      name: 'Luxury Suite',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
    },
    {
      id: 2,
      name: 'Double Room',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1533633310920-cc9f1e0f793c?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
    },
    {
      id: 3,
      name: 'Deluxe Suite',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522771731478-44bf104f2910?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1559841644-08984562005a?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
    },
    {
      id: 4,
      name: 'Comfort Room',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
    },
    {
      id: 5,
      name: 'Beach Villa Room',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1574643156929-51fa098b0394?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
    },
    {
      id: 6,
      name: 'Garden Room',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
    },
    {
      id: 7,
      name: 'Panorama Room',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1534595038511-9f219fe0c979?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
    },
    {
      id: 8,
      name: 'Laguna Suite',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
    },
    {
      id: 9,
      name: 'Comfort Family',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522771731478-44bf104f2910?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80'
      ],
      area: '30M2',
      guests: '2 GUEST',
      beds: '1 BED',
      baths: '1 BATH',
      price: '₹499',
      description: 'Ut et rhoncus odio. Quisque pellentesque nisl leo, eget ultricies nibh ullamcorper ut.'
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
      <section className="services-section">
        {/* Header Row */}
        <div className="services-header">
          <div className="services-title-area">
            <span className="sub-title">LUXURY, COMFORT & TAILOR-MADE SERVICES</span>
            <h2 className="main-title1">Amenities & Services</h2>
          </div>
          <div className="services-desc-area">
            <p className="services-description">
              Relax and unwind with our exceptional amenities, including a serene infinity pool, 
              nature trails, and personalized service to ensure your stay at Merjin's Paraíso is 
              unforgettable.
            </p>
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="services-grid">
          {/* Card 1: Restaurant */}
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80" alt="Restaurant" className="card-img" />
            <div className="card-overlay">
              <h3>Restaurant</h3>
              <p>Delicious Cuisine</p>
            </div>
          </div>

          {/* Card 2: Infinity Pool */}
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80" alt="Infinity Pool" className="card-img" />
            <div className="card-overlay">
              <h3>Infinity Pool</h3>
              <p>Breathtaking Valley Views</p>
            </div>
          </div>

          {/* Card 3: Bonfire */}
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80" alt="Bonfire" className="card-img" />
            <div className="card-overlay">
              <h3>Bonfire</h3>
              <p>Cozy Evening Gatherings</p>
            </div>
          </div>

          {/* Card 4: Barbeque */}
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80" alt="Barbeque" className="card-img" />
            <div className="card-overlay">
              <h3>Barbeque</h3>
              <p>Grilled Delights Outdoors</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default Rooms
