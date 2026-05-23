import React from 'react';
import './About.css';

// Replace these placeholder URLs with your actual local image paths
const HERO_BG = 'https://images.unsplash.com/photo-1659410553816-fa68a5d1bd94?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFnYW1vbnxlbnwwfHwwfHx8MA%3D%3D';
const BEDROOM_IMG = 'https://dwellsmithvirtue.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-23-at-12.58.53-PM-1.jpeg';
const CABIN_OUTSIDE = 'https://pix8.agoda.net/hotelImages/637/6377629/6377629_18121913430070465654.jpg?ca=7&ce=1&s=1024x';

const About= () => {
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
            <h2 className="main-title">Enjoy Your Luxury<br />Experience</h2>
            <p className="description">
              Experience the charm of Vagamon at Merjin's Paraíso, where stunning A-frame cabins and 
              breathtaking views of the hills and valleys await you. Immerse yourself in nature and luxury, all 
              just steps away from Vagamon town.
            </p>

            {/* Features Row */}
            <div className="features-container">
              <div className="feature-image-wrapper">
                <img src={BEDROOM_IMG} alt="Luxury Interior" className="feature-side-img" />
              </div>
              
              <div className="feature-items">
                {/* Feature 1 */}
                <div className="feature-item">
                  <div className="feature-icon">
                    {/* SVG representing Scenic/Waves */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b89254" strokeWidth="2">
                      <path d="M2 10c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3M2 17c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3" />
                    </svg>
                  </div>
                  <h3>Scenic Escapes</h3>
                  <p>Immerse yourself in the beauty of Vagamon with panoramic views and serene surroundings.</p>
                </div>

                {/* Feature 2 */}
                <div className="feature-item">
                  <div className="feature-icon">
                    {/* SVG representing Comfort/Bed */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b89254" strokeWidth="2">
                      <path d="M2 4v16M2 11h20M22 4v16M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 17h16" />
                    </svg>
                  </div>
                  <h3>Comfort Redefined</h3>
                  <p>Stay in style with our cozy A-frame cabins, designed for ultimate relaxation and luxury.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Main Showcase Image */}
          <div className="right-column">
            <img src={CABIN_OUTSIDE} alt="A-Frame Cabin Exterior" className="main-showcase-img" />
          </div>

        </div>
      </section>
      {/* PLACE THIS DIRECTLY UNDER THE PREVIOUS </section> */}

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
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600" alt="Restaurant" className="card-img" />
      <div className="card-overlay">
        <h3>Restaurant</h3>
        <p>Delicious Cuisine</p>
      </div>
    </div>

    {/* Card 2: Infinity Pool */}
    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600" alt="Infinity Pool" className="card-img" />
      <div className="card-overlay">
        <h3>Infinity Pool</h3>
        <p>Breathtaking Valley Views</p>
      </div>
    </div>

    {/* Card 3: Bonfire */}
    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=600" alt="Bonfire" className="card-img" />
      <div className="card-overlay">
        <h3>Bonfire</h3>
        <p>Cozy Evening Gatherings</p>
      </div>
    </div>

    {/* Card 4: Barbeque */}
    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600" alt="Barbeque" className="card-img" />
      <div className="card-overlay">
        <h3>Barbeque</h3>
        <p>Grilled Delights Outdoors</p>
      </div>
    </div>
  </div>
</section>
{/* PLACE THIS DIRECTLY UNDER THE AMENITIES & SERVICES </section> */}

{/* SECTION 4: NEAREST PLACES */}
<section className="places-section">
  {/* Centered Header */}
  <div className="places-header">
    <span className="sub-title">EXPLORE VAGAMON</span>
    <h2 className="main-title1">Visit Nearest Places</h2>
  </div>

  {/* Places Grid */}
  <div className="places-grid">
    {/* Place 1: Adventure Park */}
    <div className="place-card">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600" alt="Adventure Park" className="place-img" />
      <div className="place-overlay">
        <h3>Adventure Park</h3>
        <p>10KM (28 Min)</p>
      </div>
    </div>

    {/* Place 2: Paragliding */}
    <div className="place-card">
      <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600" alt="Paragliding" className="place-img" />
      <div className="place-overlay">
        <h3>Paragliding</h3>
        <p>9.4 KM</p>
      </div>
    </div>

    {/* Place 3: Meadows */}
    <div className="place-card">
      <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600" alt="Meadows" className="place-img" />
      <div className="place-overlay">
        <h3>Meadows</h3>
        <p>4 KM</p>
      </div>
    </div>

    {/* Place 4: Boating */}
    <div className="place-card">
      <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600" alt="Boating" className="place-img" />
      <div className="place-overlay">
        <h3>Boating</h3>
        <p>1.2 KM</p>
      </div>
    </div>
  </div>
</section>  
{/* PLACE THIS DIRECTLY UNDER THE NEAREST PLACES </section> */}

{/* SECTION 5: BOOK NOW CTA */}
<section 
  className="cta-section" 
  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${HERO_BG})` }}
>
  <div className="cta-content">
    <span className="cta-sub-title">BOOK NOW!</span>
    <h2 className="cta-main-title">Welcome To Merjin's Paraíso<br />Book Your Stay Today.</h2>
    <button className="cta-btn" onClick={() => window.location.href = '/booking'}>
      BOOK YOUR COTTAGE
    </button>
  </div>
</section>

    </div>
  );
};

export default About;