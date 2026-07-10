import React, { useEffect, useState } from 'react'
import {
  FaBed,
  FaFire,
  FaCar,
  FaMugHot,
  FaSwimmingPool,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiMountains } from "react-icons/gi";
import './Home.css'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import BookingModal from './BookingModal'

const slides = [bg1, bg2, bg3];

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedTitle, setTypedTitle] = useState("")
  const fullTitle = "Experience Unparalleled Comfort"

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, index + 1));
      index++;
      if (index >= fullTitle.length) clearInterval(intervalId);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);


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
          <h1 className="main-title">
            {typedTitle.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                {word === "Unparalleled" || word === "Comfort" ? (
                  <span className="gold-text">{word} </span>
                ) : (
                  word + " "
                )}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </div>
      </section>

      {/* Editorial About Section */}
      <section className="about-editorial-section">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-images">
              <div className="img-main animate-on-scroll fade-right">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/87/a1/6c/forest-canopy.jpg?w=1200&h=-1&s=1" alt="Forest Luxury Hotel" />
              </div>
              <div className="img-sub animate-on-scroll fade-up delay-200">
                <img src="https://plus.unsplash.com/premium_photo-1685133855266-57a70d527acd?w=800&auto=format&fit=crop&q=80" alt="Resort in Nature" />
              </div>
            </div>

            <div className="editorial-text animate-on-scroll fade-left delay-100">
              <div className="watermark">ABOUT</div>
              <span className="section-tag">About us</span>
              <h2 className="section-title1">Luxury Living Amidst Nature's Beauty</h2>
              <p className="editorial-text">Welcome to Merjin's Paraiso Resort, your peaceful retreat in the heart of the beautiful hills of Vagamon, Kerala. Surrounded by lush greenery, misty mountains, and refreshing fresh air, our resort is designed to offer the perfect escape from the busy pace of everyday life.
Whether you're planning a romantic getaway, a family vacation, a group trip, or simply looking to relax in nature, Merjin's Paraiso Resort provides a comfortable and memorable stay. Our well-appointed rooms, warm hospitality, delicious cuisine, and scenic surroundings create an experience you'll cherish forever.
</p>

            

<Link to="/about">
  <button className="editorial-btn">
    <span>READ MORE</span>
    <span className="arrow">→</span>
  </button>
</Link>            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="rooms-section">
        <div className="container">
          <div className="rooms-header animate-on-scroll fade-up">
            <div>
              <span className="section-tag">ACCOMMODATION</span>
              <h2 className="section-title1">Rooms & Suites</h2>
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
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/61/f9/68/room.jpg?w=2000&h=-1&s=1" alt="Deluxe Room" />
              </div>
              <div className="room-info">
                <h3>Panoramic Deluxe Room</h3>
                <p>Modern design with floor-to-ceiling panoramic windows.</p>
                {/* <div className="room-price">From $320 / night</div> */}
              </div>
            </div>

            <div className="room-card animate-on-scroll scale-fade-up delay-300">
              <div className="room-img">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/87/a1/6c/forest-canopy.jpg?w=1200&h=-1&s=1" alt="Forest Canopy Suite" />
              </div>
              <div className="room-info">
                <h3>Forest Canopy Suite</h3>
                <p>Stay amidst the treetops in our glass-walled suite, offering unobstructed views of the whispering pine canopy.</p>
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

    <div className="amenity-item">
  <div className="amenity-icon-wrap">
    <GiMountains className="amenity-icon" />
  </div>
  <h3>Scenic Views <br /> & Fresh Air</h3>
</div>

<div className="amenity-divider"></div>

<div className="amenity-item">
  <div className="amenity-icon-wrap">
    <FaBed className="amenity-icon" />
  </div>
  <h3>Comfortable <br /> Rooms</h3>
</div>

<div className="amenity-divider"></div>

<div className="amenity-item">
  <div className="amenity-icon-wrap">
    <FaSwimmingPool className="amenity-icon" />
  </div>
  <h3>Swimming <br /> Pool</h3>
</div>

<div className="amenity-divider"></div>

<div className="amenity-item">
  <div className="amenity-icon-wrap">
    <FaMugHot className="amenity-icon" />
  </div>
  <h3>Multi-Cuisine <br /> Dining</h3>
</div>

<div className="amenity-divider"></div>

<div className="amenity-item">
  <div className="amenity-icon-wrap">
    <FaFire className="amenity-icon" />
  </div>
  <h3>Bonfire & <br /> Outdoor Seating</h3>
</div>

<div className="amenity-divider"></div>

<div className="amenity-item">
  <div className="amenity-icon-wrap">
    <FaCar className="amenity-icon" />
  </div>
  <h3>Ample Parking <br /> Space</h3>
</div>

  </div>
</section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="experience-header animate-on-scroll fade-up">
            <span className="section-tag">DISCOVER</span>
            <h2 className="section-title1">Curated Moments of Perfection</h2>
            <p className="experience-subtitle">Elevate your stay with a collection of experiences designed to inspire, relax, and create lasting memories.</p>
          </div>

          <div className="experience-grid">
            <div className="experience-card animate-on-scroll fade-up delay-100">
              <div className="card-img">
                <img src="https://dwellsmithvirtue.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-23-at-12.58.53-PM-1.jpeg" alt="Comfortable Accommodation" />
              </div>
              <span className="exp-number">01</span>
              <h3>Comfortable Accommodation</h3>
              <p>Relax in our well-furnished rooms and cottages, thoughtfully designed with modern amenities to ensure a peaceful and comfortable stay amidst the scenic beauty of Vagamon.</p>
            </div>
            <div className="experience-card animate-on-scroll fade-up delay-200">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80" alt="Multi-Cuisine Restaurant" />
              </div>
              <span className="exp-number">02</span>
              <h3>Multi-Cuisine Restaurant</h3>
              <p>Delight your taste buds with a variety of delicious Kerala, Indian, and international dishes, freshly prepared using quality ingredients in a warm and welcoming dining atmosphere.</p>
            </div>
            <div className="experience-card animate-on-scroll fade-up delay-300">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80" alt="Campfire & Outdoor Activities" />
              </div>
              <span className="exp-number">03</span>
              <h3>Campfire & Outdoor Activities</h3>
              <p>Create unforgettable memories with evening campfires, outdoor games, nature walks, and adventure experiences that make your stay both relaxing and exciting.</p>
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
            <h2 className="section-title1">What Our Guests Say</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll fade-right delay-100">
              <div className="stars">★★★★★</div>
              <p className="quote">"Our stay at Merjin's Paraiso Resort was absolutely wonderful. The rooms were spotless, the mountain views were breathtaking, and the staff made us feel at home. We can't wait to visit again!"</p>
              <h4 className="guest-name">- Anjali & Rahul, Kochi</h4>
            </div>
            <div className="testimonial-card animate-on-scroll fade-up delay-200">
              <div className="stars">★★★★★</div>
              <p className="quote">"A perfect getaway from the city's hustle and bustle. The peaceful surroundings, delicious food, and excellent hospitality made our vacation truly memorable. Highly recommended!"</p>
              <h4 className="guest-name">- Arun Thomas, Bengaluru</h4>
            </div>
            <div className="testimonial-card animate-on-scroll fade-left delay-300">
              <div className="stars">★★★★★</div>
              <p className="quote">"The resort is beautifully maintained and surrounded by nature. Every morning we woke up to stunning views and fresh mountain air. It was the relaxing holiday we were looking for."</p>
              <h4 className="guest-name">- Nisha Menon, Chennai</h4>
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