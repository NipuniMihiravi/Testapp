import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './App.css'; // Import corresponding CSS for styling

const Service1 = () => {
  // Define the services and their corresponding images
  const services = [
    'Day Outing',
    'Pre Shooting',
    'Wedding Event Celebrations',
    'Birthday Party Celebrations',
    'Office Get Togethers',
    'Accommodation',
  ];

  // Define the images for each service
  const serviceImages = {
    'Day Outing': '/images/pool.jpg',
    'Pre Shooting': '/images/pre1.jpeg',
    'Wedding Event Celebrations': '/images/coco6.jpeg',
    'Birthday Party Celebrations': '/images/birthday.jpg',
    'Office Get Togethers': '/images/company.jpg',
    'Accommodation': '/images/Room.jpeg',
  };

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  // Auto-change the service image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  const selectedService = services[selectedServiceIndex];

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle button click and navigate to different routes based on service clicked
  const handleRectangleClick = (service) => {
    if (service === 'Wedding Event Celebrations') {
      navigate('/Wedding'); // Navigate to Wedding page
    } else if (service === 'Day Outing') {
      navigate('/Dayouting'); // Navigate to Day Outing page
    } else if (service === 'Pre Shooting') {
      navigate('/Preshoot'); // Navigate to Pre Shooting page
    } else if (service === 'Birthday Party Celebrations') {
      navigate('/Special'); // Navigate to Birthday Party Celebrations page
    } else if (service === 'Office Get Togethers') {
      navigate('/Special'); // Navigate to Office Get Togethers page
    } else if (service === 'Accommodation') {
      navigate('/Accommodation'); // Navigate to Accommodation page
    }
  };

  return (
    <section className="service-section" id="services">
      <div className="section-container">
        <h1 className="section-header">OUR SERVICES</h1>

        <div className="service-row">
          {/* First column with the auto-changing image */}
          <div className="service-image-column">
            <img
              src={serviceImages[selectedService]}
              alt={selectedService}
              className="service-image"
            />
          </div>

          {/* Second column with 6 vertically aligned rectangles for services */}
          <div className="service-rectangles-column">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-rectangle ${selectedServiceIndex === index ? 'active' : ''}`}
                onClick={() => handleRectangleClick(service)} // Add onClick handler
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service1;
