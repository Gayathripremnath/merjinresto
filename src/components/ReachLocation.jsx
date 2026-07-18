import React from "react";
import "./ReachLocation.css";

const routes = [
  {
    icon: "✈️",
    title: "From Cochin International Airport",
    distance: "100 km",
    time: "Approx. 3 Hours",
    description:
      "Drive via NH85 towards Muvattupuzha, then continue through Pala and Erattupetta to reach Vagamon.",
  },
  {
    icon: "🚆",
    title: "From Kottayam Railway Station",
    distance: "64 km",
    time: "Approx. 2 Hours",
    description:
      "Take the Kottayam – Pala – Erattupetta – Vagamon route. Taxis and buses are available outside the station.",
  },
  {
    icon: "🚌",
    title: "From Vagamon Bus Stand",
    distance: "4 km",
    time: "10 Minutes",
    description:
      "The resort is just a short drive from Vagamon Town. You can reach by taxi, auto-rickshaw, or private vehicle.",
  },
  {
    icon: "🚗",
    title: "From Pala",
    distance: "37 km",
    time: "Approx. 1 Hour",
    description:
      "Drive via Erattupetta Road to Vagamon. The route offers scenic hill views throughout the journey.",
  },
  {
    icon: "🌄",
    title: "From Thekkady",
    distance: "52 km",
    time: "Approx. 1.5 Hours",
    description:
      "Travel through Peerumedu towards Vagamon for a scenic drive to the resort.",
  },
];

const directionLink =
  "https://www.google.com/maps/dir//Merjin's+Paraiso,+Tharayanganam,+Vagamon,+Kerala+685503/@9.6728865,76.903503,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3b07b5c159646d63:0xce42438eec8055df!2m2!1d76.9018316!2d9.7059012?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D";

const ReachLocation = () => {
  return (
    <section className="reach-section">
<section className="reach-hero">
  <div className="reach-overlay"></div>

  <div className="reach-hero-content">
    <span className="hero-tag">How To Reach</span>

  </div>
</section>
      <div className="container">

        <div className="section-title">
          <h2>Getting to Merjin's Paraíso Resort</h2>
          <p>
            Whether you're arriving by air, train, bus, or private vehicle,
            reaching Merjin's Paraíso Resort is simple and convenient. Choose
            your starting location below to get directions.
          </p>
        </div>

        <div className="location-map">

          <iframe
            title="Merjin's Paraiso Resort"
            src="https://maps.google.com/maps?q=Merjin's%20Paraiso%20Tharayanganam%20Vagamon%20Kerala%20685503&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

        <div className="map-buttons">

          <a
            href="https://share.google/4LK8b21npI0Qim67G"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            📍 Open Location
          </a>

          <a
            href={directionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            🚗 Get Directions
          </a>

        </div>

        <div className="routes-grid">

          {routes.map((route, index) => (

            <div className="route-card" key={index}>

              <div className="route-icon">{route.icon}</div>

              <h3>{route.title}</h3>

              <div className="route-meta">
                <span>📍 {route.distance}</span>
                <span>⏱ {route.time}</span>
              </div>

              <p>{route.description}</p>

              <a
                href={directionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="route-btn"
              >
                Get Directions
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ReachLocation;