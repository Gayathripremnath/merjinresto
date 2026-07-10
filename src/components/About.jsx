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

          {/* Right Column: Main Showcase Image */}
          <div className="right-column">
            <img src={CABIN_OUTSIDE} alt="A-Frame Cabin Exterior" className="main-showcase-img" />
          </div>

        </div>
      </section>
      {/* PLACE THIS DIRECTLY UNDER THE PREVIOUS </section> */}



{/* SECTION 4: NEAREST PLACES */}
<section className="places-section">
  {/* Centered Header */}
  <div className="places-header">
    <span className="sub-title">EXPLORE VAGAMON</span>
    <h2 className="main-title1">Explore Nearby Attractions</h2>
  </div>

  {/* Places Grid */}
  <div className="places-grid">
    {/* Place 1: Vagamon Pine Forest */}
    <div className="place-card">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80" alt="Vagamon Pine Forest" className="place-img" />
      <div className="place-overlay">
        <h3>Vagamon Pine Forest</h3>
        <p>One of Vagamon's most iconic destinations, the Pine Forest offers a peaceful escape with towering pine trees, cool mountain air, and picturesque walking trails.</p>
      </div>
    </div>

    {/* Place 2: Marmala Waterfalls */}
    <div className="place-card">
      <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80" alt="Marmala Waterfalls" className="place-img" />
      <div className="place-overlay">
        <h3>Marmala Waterfalls</h3>
        <p>Hidden amidst lush greenery, Marmala Waterfalls is a breathtaking natural attraction where crystal-clear water cascades down rocky cliffs.</p>
      </div>
    </div>

    {/* Place 3: Vagamon Adventure Park & Paragliding */}
    <div className="place-card">
      <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80" alt="Vagamon Adventure Park & Paragliding" className="place-img" />
      <div className="place-overlay">
        <h3>Vagamon Adventure Park</h3>
        <p>Experience the thrill of paragliding over Vagamon's rolling hills or enjoy exciting outdoor activities at the nearby adventure park.</p>
      </div>
    </div>

    {/* Place 4: Vagamon Meadows */}
    <div className="place-card">
      <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80" alt="Vagamon Meadows" className="place-img" />
      <div className="place-overlay">
        <h3>Vagamon Meadows</h3>
        <p>Famous for its expansive green grasslands and stunning hilltop scenery, Vagamon Meadows is the perfect place to relax.</p>
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