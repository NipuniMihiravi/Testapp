import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Ensure corresponding CSS

const Facility1 = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get('/facility'); // Adjust the endpoint as necessary
      setFacilities(response.data.slice(0, 5)); // Get the first five facilities
    } catch (error) {
      console.error('Error fetching facilities:', error);
    }
  };

  return (
    <section className="facility-section" id="facilities">
      <h2 className="facility-header">OUR FACILITY</h2>
      <div className="section-container">
        <div className="facility-row">
          {facilities.length > 0 ? (
            facilities.map((facility, index) => (
              <div className="facility-item" key={facility._id}>
                <div className="facility-square">
                  <img
                    src={`data:image/jpeg;base64,${facility.image}`} // Adjust this based on your image data
                    alt={`Facility ${index + 1}`}
                    className="facility-image2"
                  />
                </div>
                <p className="facility-name">{facility.heading}</p> {/* Assuming the facility has a 'name' property */}
              </div>
            ))
          ) : (
            <p>No facilities available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Facility1;
