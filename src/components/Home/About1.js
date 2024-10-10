import React from 'react';
import './App.css'; // Ensure you have appropriate styles for this component

const About1 = () => {
  return (
    <div className="about-container">
      <div className="about-grid">
        {/* First section: Images */}
        <div className="about-images">
          <img src="/images/coco3.jpeg" alt="about" />
          <img src="/images/pacl8.jpeg" alt="about" />
          <img src="/images/wedd2.jpeg" alt="about" />
          <img src="/images/shoot15.jpeg" alt="about" />
        </div>

        {/* Second section: Content */}
        <div className="about-content">
          <h2 className="about-header">COCOLOCO GARDENS</h2>
          <h4 className="about-headerr">KAHATHUDUWA, SRI LANKA</h4>
          <p className="about-description">
            At Cocoloco Garden, we welcome simplicity as the core of our haven.
            Surrounded by the embrace of nature, we carefully craft moments that eloquently convey their beauty in silence.
            Every event, each retreat is like an experience.<br /><br />
            Join us in the art of celebrating life's simple pleasures, where every detail is a deliberate choice towards a more meaningful experience. Cocoloco Garden — where less becomes an unforgettable experience of more.
          </p>
          <div className="about-btn">
            <button className="btn">
              <a href="https://maps.app.goo.gl/BP9bzQYpodXjmwvm6" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
