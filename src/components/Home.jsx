import React, { useEffect, useState } from 'react'
import './Home.css'
import roomImg from '../assets/room.png'
import spaImg from '../assets/spa.png'
import BookingModal from './BookingModal'

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    "https://images.unsplash.com/photo-1683636800840-7fb89100c34f?auto=format&fit=crop&q=80&w=2560",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2560"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-wrapper">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-bg ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
        <div className="overlay" />
        <div className="hero-content">
          <span className="sub-tag animate-on-scroll fade-up">STAY WITH US FEEL LIKE HOME</span>
          <h1 className="main-title animate-on-scroll fade-up delay-100">Experience  <br /> Unparalleled Comfort</h1>
        </div>
      </section>

      {/* Editorial About Section */}
      <section className="about-editorial-section">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-images">
              <div className="img-main animate-on-scroll fade-right">
                <img src={spaImg} alt="Luxury Spa" />
              </div>
              <div className="img-sub animate-on-scroll fade-up delay-200">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=80" alt="Resort details" />
              </div>
            </div>

            <div className="editorial-text animate-on-scroll fade-left delay-100">
              <div className="watermark">1954</div>
              <span className="section-tag">OUR STORY</span>
              <h2 className="section-title">The Art of Luxury <br />Living Since 1954</h2>
              <p>Experience the ultimate in hospitality at Merjin's Paraiso, where breathtaking views meet modern elegance. Our resort offers a unique blend of heritage and contemporary comfort, designed for the most discerning travelers.</p>

              <div className="editorial-stats">
                <div className="stat-item">
                  <span className="stat-num">5.0</span>
                  <span className="stat-label">Star Rating</span>
                </div>
                <div className="v-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">120+</span>
                  <span className="stat-label">Luxury Rooms</span>
                </div>
              </div>

              <button className="editorial-btn"><span>READ MORE</span> <span className="arrow">→</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="rooms-section">
        <div className="container">
          <div className="rooms-header animate-on-scroll fade-up">
            <div>
              <span className="section-tag">ACCOMMODATION</span>
              <h2 className="section-title">Rooms & Suites</h2>
            </div>
            <button className="outline-btn">VIEW ALL</button>
          </div>

          <div className="rooms-grid">
            <div className="room-card animate-on-scroll scale-fade-up delay-100">
              <div className="room-img">
                <img src="https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fEV4ZWN1dGl2ZSUyMEFscGluZSUyMFN1aXRlfGVufDB8fDB8fHww" alt="Executive Suite" />
              </div>
              <div className="room-info">
                <h3>Executive Alpine Suite</h3>
                <p>Spacious suite with private terrace and mountain views.</p>
                {/* <div className="room-price">From $450 / night</div> */}
              </div>
            </div>

            <div className="room-card animate-on-scroll scale-fade-up delay-200">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1652400094008-37eaddd622ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Deluxe Room" />
              </div>
              <div className="room-info">
                <h3>Panoramic Deluxe Room</h3>
                <p>Modern design with floor-to-ceiling panoramic windows.</p>
                {/* <div className="room-price">From $320 / night</div> */}
              </div>
            </div>

            <div className="room-card animate-on-scroll scale-fade-up delay-300">
              <div className="room-img">
                <img src={roomImg} alt="Junior Suite" />
              </div>
              <div className="room-info">
                <h3>Junior Mountain Suite</h3>
                <p>Cozy suite with panoramic views and king-size bed.</p>
                {/* <div className="room-price">From $380 / night</div> */}
              </div>
            </div>

            <div className="room-card animate-on-scroll scale-fade-up delay-400">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1718071215606-ea8d309dcec8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZhbWlseSUyMFN1aXRlfGVufDB8fDB8fHww" alt="Family Suite" />
              </div>
              <div className="room-info">
                <h3>Family Suite</h3>
                <p>Generous space with two bedrooms and family amenities.</p>
                {/* <div className="room-price">From $520 / night</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Strip Section */}
      <section className="amenities-strip-section">
        <div className="amenities-strip-container">

          <div className="amenity-item animate-on-scroll fade-up delay-100">
            <div className="amenity-icon-wrap">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                <path d="M24 44s2-16 12-16 12 16 12 16" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <rect x="20" y="44" width="24" height="6" rx="2" stroke="#c9a56a" strokeWidth="2" />
                <path d="M32 28V12a4 4 0 0 1 4-4h4" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <path d="M42 16c2 0 4 2 4 4s-2 4-4 4" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <circle cx="28" cy="18" r="2" fill="#c9a56a" />
                <circle cx="52" cy="12" r="1.5" fill="#c9a56a" />
                <circle cx="56" cy="24" r="1" fill="#c9a56a" />
              </svg>
            </div>
            <div className="amenity-info">
              <h3>Room Cleaning</h3>
              <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
            </div>
          </div>

          <div className="amenity-divider"></div>

          <div className="amenity-item animate-on-scroll fade-up delay-200">
            <div className="amenity-icon-wrap">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                <path d="M10 26a31 31 0 0 1 44 0" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 33a21 21 0 0 1 30 0" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 40a11 11 0 0 1 16 0" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="48" r="3" fill="#c9a56a" />
                <path d="M32 14v4" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 17l2 3" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <path d="M42 17l-2 3" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="amenity-info">
              <h3>Room Wifi</h3>
              <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
            </div>
          </div>

          <div className="amenity-divider"></div>

          <div className="amenity-item animate-on-scroll fade-up delay-300">
            <div className="amenity-icon-wrap">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                <path d="M8 38h4l4-12h32l4 12h4" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 38v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2h32v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" />
                <circle cx="20" cy="46" r="3" stroke="#c9a56a" strokeWidth="2" />
                <circle cx="44" cy="46" r="3" stroke="#c9a56a" strokeWidth="2" />
                <path d="M32 14l-6 8h4v8h4v-8h4l-6-8z" stroke="#c9a56a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="amenity-info">
              <h3>Pickup &amp; Drop</h3>
              <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="experience-header animate-on-scroll fade-up">
            <span className="section-tag">DISCOVER</span>
            <h2 className="section-title">Enjoy a Luxury Experience</h2>
            <p className="experience-subtitle">Step into a realm of unmatched elegance where every detail surrounds you in comfort and sophistication.</p>
          </div>

          <div className="experience-grid">
            <div className="experience-card animate-on-scroll fade-up delay-100">
              <div className="card-img">
                <img src={spaImg} alt="Wellness & Spa" />
              </div>
              <span className="exp-number">01</span>
              <h3>Wellness & Spa</h3>
              <p>Rejuvenate your body and mind with our holistic treatments and thermal signature baths.</p>
            </div>
            <div className="experience-card animate-on-scroll fade-up delay-200">
              <div className="card-img">
                <img src={roomImg} alt="Fine Dining" />
              </div>
              <span className="exp-number">02</span>
              <h3>Fine Dining</h3>
              <p>Savor exquisite cuisine crafted by world-renowned chefs in our ambient signature restaurants.</p>
            </div>
            <div className="experience-card animate-on-scroll fade-up delay-300">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80" alt="Bespoke Services" />
              </div>
              <span className="exp-number">03</span>
              <h3>Bespoke Services</h3>
              <p>Experience personalized VIP butler service and meticulously curated local excursions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-split-section">
        <div className="event-img-left animate-on-scroll fade-right">
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80" alt="Event setup" />
        </div>
        <div className="event-content animate-on-scroll fade-up delay-100">
          <span className="event-tag">MEETING & EVENTS</span>
          <h2 className="event-title">A Warm, Exquisite,<br />Practical And<br />Urban Space.</h2>
          <div className="grey-circle"></div>
          <button className="event-btn"><span className="line-dash">—</span> FIND OUT MORE</button>
        </div>
        <div className="event-img-right animate-on-scroll fade-left delay-200">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80" alt="Interior hall" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header animate-on-scroll fade-up">
            <span className="section-tag">GUEST EXPERIENCES</span>
            <h2 className="section-title">What Our Guests Say</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll fade-right delay-100">
              <div className="stars">★★★★★</div>
              <p className="quote">"An absolutely breathtaking experience. The attention to detail in the Alpine Suite and the pristine mountain views made our anniversary unforgettable."</p>
              <h4 className="guest-name">- Eleanor V., New York</h4>
            </div>
            <div className="testimonial-card animate-on-scroll fade-up delay-200">
              <div className="stars">★★★★★</div>
              <p className="quote">"From the world-class spa facilities to the exceptional dining, Merjin's Paraiso redefines luxury. We felt completely rejuvenated after our stay."</p>
              <h4 className="guest-name">- James & Sarah L., London</h4>
            </div>
            <div className="testimonial-card animate-on-scroll fade-left delay-300">
              <div className="stars">★★★★★</div>
              <p className="quote">"The perfect blend of elegant design and warm hospitality. Every staff member went above and beyond to ensure our comfort. Truly a five-star gem."</p>
              <h4 className="guest-name">- Marcus T., Berlin</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <section className="cta-footer">
        <div className="container">
          <h2 className="animate-on-scroll zoom-in">Ready for an UNFORGETTABLE Stay?</h2>
          <button className="primary-btn animate-on-scroll fade-up delay-200" onClick={() => setIsBookingOpen(true)}>BOOK NOW</button>
        </div>
      </section>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}

export default Home