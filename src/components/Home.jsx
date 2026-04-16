import React, { useEffect } from 'react'
import './Home.css'
import roomImg from '../assets/room.png'
import spaImg from '../assets/spa.png'

const Home = () => {
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
        <div className="overlay" />
        <div className="hero-content">
          <span className="sub-tag animate-on-scroll fade-up">STAY WITH US FEEL LIKE HOME</span>
          <h1 className="main-title animate-on-scroll fade-up delay-100">Experience Unparalleled <br />Comfort</h1>
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
              <span className="exp-number">01</span>
              <h3>Wellness & Spa</h3>
              <p>Rejuvenate your body and mind with our holistic treatments and thermal signature baths.</p>
            </div>
            <div className="experience-card animate-on-scroll fade-up delay-200">
              <span className="exp-number">02</span>
              <h3>Fine Dining</h3>
              <p>Savor exquisite cuisine crafted by world-renowned chefs in our ambient signature restaurants.</p>
            </div>
            <div className="experience-card animate-on-scroll fade-up delay-300">
              <span className="exp-number">03</span>
              <h3>Bespoke Services</h3>
              <p>Experience personalized VIP butler service and meticulously curated local excursions.</p>
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
            <div className="room-card animate-on-scroll fade-up delay-100">
              <div className="room-img">
                <img src={roomImg} alt="Executive Suite" />
              </div>
              <div className="room-info">
                <h3>Executive Alpine Suite</h3>
                <p>Spacious suite with private terrace and mountain views.</p>
                <div className="room-price">From $450 / night</div>
              </div>
            </div>
            
            <div className="room-card animate-on-scroll fade-up delay-200">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=60" alt="Deluxe Room" />
              </div>
              <div className="room-info">
                <h3>Panoramic Deluxe Room</h3>
                <p>Modern design with floor-to-ceiling panoramic windows.</p>
                <div className="room-price">From $320 / night</div>
              </div>
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
            <div className="testimonial-card animate-on-scroll fade-up delay-100">
              <div className="stars">★★★★★</div>
              <p className="quote">"An absolutely breathtaking experience. The attention to detail in the Alpine Suite and the pristine mountain views made our anniversary unforgettable."</p>
              <h4 className="guest-name">- Eleanor V., New York</h4>
            </div>
            <div className="testimonial-card animate-on-scroll fade-up delay-200">
              <div className="stars">★★★★★</div>
              <p className="quote">"From the world-class spa facilities to the exceptional dining, Merjin's Paraiso redefines luxury. We felt completely rejuvenated after our stay."</p>
              <h4 className="guest-name">- James & Sarah L., London</h4>
            </div>
            <div className="testimonial-card animate-on-scroll fade-up delay-300">
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
          <button className="primary-btn animate-on-scroll fade-up delay-200">BOOK NOW</button>
        </div>
      </section>
    </div>
  )
}

export default Home