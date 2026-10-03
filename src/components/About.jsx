import React, { useState, useRef, useEffect } from 'react';
import './About.css';
import park from '../assets/park.jpg';

import ulipooni from '../assets/ulipooni.jpg';
import kurisumala from '../assets/kurisumala.jpg'
import paragliding from '../assets/paragliding.jpg'
import tea from '../assets/tea.jpg'

import video1 from '../assets/With voiceover.mp4';
import video2 from '../assets/Without Voiceover.mp4';

const HERO_BG = 'https://images.unsplash.com/photo-1659410553816-fa68a5d1bd94?auto=format&fit=crop&w=1600&q=60';

const About = () => {
  const [modalVideo, setModalVideo] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const modalVideoRef = useRef(null);

  const openModal = (videoSrc, title) => {
    setModalVideo(videoSrc);
    setModalTitle(title);
  };

  const closeModal = () => {
    setModalVideo(null);
    setModalTitle('');
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (modalVideo) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalVideo]);

  return (
    <div className="about-container">
      
      {/* SECTION 1: HERO BANNER */}
      <section 
        className="hero-section-about" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${HERO_BG})` }}
      >
        <div className="hero-content">
          <h1>About Us</h1>
          <div className="breadcrumbs">
            <span className="crumb-home">Home</span>
            <span className="crumb-separator">&gt;</span>
            <span className="crumb-current">About Us</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTENT GRID */}
      <section className="content-section">
        <div className="content-grid">
          
          {/* Left Column: Text & Features */}
          <div className="left-column">
            <span className="sub-title">ABOUT US</span>
            <h2 className="main-tit">Enjoy Your Luxury<br />Experience</h2>
            <div className="description-container">
              <p className="description" style={{marginBottom: "15px"}}>
                Welcome to Merjin's Paraiso Resort, your peaceful retreat in the heart of the beautiful hills of Vagamon, Kerala. Surrounded by lush greenery, misty mountains, and refreshing fresh air, our resort is designed to offer the perfect escape from the busy pace of everyday life.
              </p>
              <p className="description" style={{marginBottom: "15px"}}>
                Whether you're planning a romantic getaway, a family vacation, a group trip, or simply looking to relax in nature, Merjin's Paraiso Resort provides a comfortable and memorable stay. Our well-appointed rooms, warm hospitality, delicious cuisine, and scenic surroundings create an experience you'll cherish forever.
              </p>
              <p className="description" style={{marginBottom: "15px"}}>
                Wake up to breathtaking mountain views, enjoy the tranquility of nature, explore the beauty of Vagamon, and create unforgettable memories with your loved ones. Every detail of our resort is thoughtfully designed to provide comfort, relaxation, and exceptional service.
              </p>
              <p className="description" style={{marginBottom: "15px"}}>
                At Merjin's Paraiso Resort, we believe every guest deserves a peaceful stay combined with genuine hospitality. From the moment you arrive until your departure, our dedicated team is committed to making your visit truly special.
              </p>
              <p className="description" style={{marginBottom: "40px"}}>
                <strong>Experience nature. Embrace comfort. Create lasting memories at Merjin's Paraiso Resort.</strong>
              </p>
            </div>

            {/* Features Row */}
            
          </div>

          {/* Right Column: Two Video Cards */}
          <div className="right-column">
            <div className="video-stack">
              {/* Video Card 1 */}
              <div className="video-card" onClick={() => openModal(video1, 'Resort Tour')}>
                <video
                  className="video-thumbnail"
                  src={video1}
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="video-overlay">
                  <button className="play-btn" aria-label="Play Resort Tour video">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2.5" fill="rgba(0,0,0,0.35)" />
                      <polygon points="26,20 26,44 46,32" fill="white" />
                    </svg>
                  </button>
                  <span className="video-label">Resort Tour</span>
                </div>
              </div>

              {/* Video Card 2 */}
              <div className="video-card" onClick={() => openModal(video2, 'Scenic Views')}>
                <video
                  className="video-thumbnail"
                  src={video2}
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="video-overlay">
                  <button className="play-btn" aria-label="Play Scenic Views video">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2.5" fill="rgba(0,0,0,0.35)" />
                      <polygon points="26,20 26,44 46,32" fill="white" />
                    </svg>
                  </button>
                  <span className="video-label">Scenic Views</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* PLACE THIS DIRECTLY UNDER THE PREVIOUS </section> */}



{/* SECTION 4: NEAREST PLACES */}
<section className="places-section">
  {/* Centered Header */}
  <div className="places-header">
    <span className="sub-title">EXPLORE VAGAMON</span>
    <h2 className="main-title1">Explore the Best of Vagamon</h2>
  </div>

  {/* Places Grid */}
  <div className="places-grid">
    <div className="place-card">
      <img src={park} alt="Vagamon Adventure Park" className="place-img" loading="lazy" />
      <div className="place-overlay">
        <h3>Vagamon Adventure Park</h3>
        <p>Experience thrilling outdoor activities and adventure sports, perfect for adrenaline seekers of all ages.</p>
      </div>
    </div>
    <div className="place-card">
      <img src={ulipooni} alt="Ulipooni Wildlife Sanctuary Viewpoint" className="place-img" loading="lazy" />
      <div className="place-overlay">
        <h3>Ulipooni Wildlife Sanctuary Viewpoint</h3>
        <p>A serene viewpoint offering panoramic vistas of the wildlife sanctuary and rolling hills of Vagamon.</p>
      </div>
    </div>
    <div className="place-card">
      <img src={kurisumala} alt="Kurisumala Ashram" className="place-img" loading="lazy" />
      <div className="place-overlay">
        <h3>Kurisumala Ashram</h3>
        <p>A peaceful monastery perched on a hilltop, offering spiritual solace and stunning views.</p>
      </div>
    </div>
    <div className="place-card">
      <img src={paragliding} alt="Paragliding Point" className="place-img" loading="lazy" />
      <div className="place-overlay">
        <h3>Paragliding Point (Seasonal)</h3>
        <p>Soar above Vagamon's breathtaking landscape — an unforgettable aerial adventure over misty hills.</p>
      </div>
    </div>
    <div className="place-card">
      <img src={tea} alt="Tea Gardens" className="place-img" loading="lazy" />
      <div className="place-overlay">
        <h3>Tea Gardens – Throughout Vagamon</h3>
        <p>Wander through lush tea plantations blanketing Vagamon's hillsides with scenic walks and fresh mountain air.</p>
      </div>
    </div>
  </div>
</section>  
{/* PLACE THIS DIRECTLY UNDER THE NEAREST PLACES </section> */}

      {/* VIDEO FULLSCREEN MODAL */}
      {modalVideo && (
        <div className="video-modal-backdrop" onClick={closeModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close video">
              ✕
            </button>
            <video
              ref={modalVideoRef}
              className="modal-video"
              src={modalVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default About;