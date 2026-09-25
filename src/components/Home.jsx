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
import BookingModal from './BookingModal'
import merjin2 from '../assets/merjin2.jpg'
import resortPhoto1 from '../assets/optimized/DJI_20260909185056_0181_D.webp'
import resortPhoto2 from '../assets/optimized/DSC02718-Edit.webp'
import resortPhoto3 from '../assets/optimized/DSC02694-Edit.webp'
import roomPhoto from '../assets/optimized/DSC02560-Edit.webp'
import roomPhoto1 from '../assets/optimized/DSC02632-Edit.webp'
import roomPhoto2 from '../assets/optimized/DSC02605-Edit.webp'
import accommodationPhoto from '../assets/optimized/DSC02569-Edit.webp'
import eventSpacePhoto from '../assets/optimized/DSC02528-Edit.webp'
import eventDiningPhoto from '../assets/optimized/DSC02676-Edit.webp'
import multi from '../assets/optimized/DSC02676-Edit.webp'
import camp from '../assets/optimized/DSC02504-Edit.webp'

const slides = [resortPhoto1, resortPhoto2, resortPhoto3];

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedTitle, setTypedTitle] = useState("")
  const fullTitle = "Escape to Nature's Paradise"

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
      {word === "Nature's" || word === "Paradise" ? (
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
                <img src={resortPhoto2} alt="Merjin's Paraiso Resort surrounded by Vagamon's hills" />
              </div>
              <div className="img-sub animate-on-scroll fade-up delay-200">
                <img src={resortPhoto3} alt="A view of the resort grounds" />
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

      <Link to="/rooms">
  <button className="outline-btn">VIEW ALL</button>
</Link>
    </div>

    <div className="rooms-grid">

      {/* Cozy Escape */}
      <div className="room-card animate-on-scroll scale-fade-up delay-100">
        <div className="room-img">
          <img
            src={roomPhoto1}
            alt="Cozy Escape"
          />
        </div>

        <div className="room-info">
          <h3>Deluxe Room </h3>
          <p>
            Our Deluxe Rooms offer the perfect blend of comfort and convenience, ideal for short and relaxing stays.


          </p>
        </div>
      </div>

      {/* Nature View Retreat */}
      <div className="room-card animate-on-scroll scale-fade-up delay-200">
        <div className="room-img">
          <img
            src={roomPhoto2}
            alt="Nature View Retreat"
          />
        </div>

        <div className="room-info">
          <h3>Classic Rooms</h3>
          <p>Cozy and peaceful, our Classic Rooms blend charming interiors with hill-facing views for a restful stay.</p>
        </div>
      </div>

      {/* Paraiso Signature Suite */}
      <div className="room-card animate-on-scroll scale-fade-up delay-300">
        <div className="room-img">
          <img
            src={roomPhoto}
            alt="Paraiso Signature Suite"
          />
        </div>

        <div className="room-info">
          <h3>Junior Suite Rooms</h3>
          <p> Combining comfort and style, the Junior Suite offers a calm, private retreat with stunning hill views.</p>
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
                <img src={accommodationPhoto} alt="Comfortable bedroom at Merjin's Paraiso Resort" loading="lazy" />
              </div>
              <span className="exp-number">01</span>
              <h3>Comfortable Accommodation</h3>
              <p>Relax in our well-furnished rooms and cottages, thoughtfully designed with modern amenities to ensure a peaceful and comfortable stay amidst the scenic beauty of Vagamon.</p>
            </div>
             <div className="experience-card animate-on-scroll fade-up delay-200">
              <div className="card-img">
                <img src={multi} alt="Multi-Cuisine Restaurant" loading="lazy" />
              </div>
              <span className="exp-number">02</span>
              <h3>Multi-Cuisine Restaurant</h3>
              <p>Delight your taste buds with a variety of delicious Kerala, Indian, and international dishes, freshly prepared using quality ingredients in a warm and welcoming dining atmosphere.</p>
            </div>
            <div className="experience-card animate-on-scroll fade-up delay-300">
              <div className="card-img">
                <img src={camp} alt="Campfire & Outdoor Activities" loading="lazy" />
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
          <img src={eventSpacePhoto} alt="Spacious event and gathering area at Merjin's Paraiso Resort" loading="lazy" />
        </div>
        <div className="event-content animate-on-scroll fade-up delay-100">
          <span className="event-tag">MEETING & EVENTS</span>
          <h2 className="event-title">A Warm, Exquisite,<br />Practical And<br />Urban Space.</h2>
          <div className="grey-circle"></div>
          <button className="event-btn"><span className="line-dash">—</span> FIND OUT MORE</button>
        </div>
        <div className="event-img-right animate-on-scroll fade-left delay-200">
          <img src={eventDiningPhoto} alt="Resort dining space for meetings and gatherings" loading="lazy" />
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
