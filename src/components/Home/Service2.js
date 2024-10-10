import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming your CSS file
import axios from 'axios'; // If you're using axios for HTTP requests

const Service2 = () => {
    // State to hold the service data
    const [serviceData, setServiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch service data from the backend
    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await axios.get('/service');
                console.log('Fetched items:', response.data);
                if (response.data.length > 0) {
                    setServiceData(response.data[0]); // Set the first item
                } else {
                    setError('No service data found');
                }
            } catch (error) {
                console.error('Error fetching items:', error);
                setError('Error fetching service data');
            } finally {
                setLoading(false); // Set loading to false after fetch attempt
            }
        };

        fetchServiceData();
    }, []); // Empty dependency array ensures this runs only once on component mount

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // If data is successfully fetched, render the table
    return (
        <div className="table-container">
            <table className="service-table">
                <tbody>
                    <tr>
                        <td className="image2-column">
                            {/* Ensure serviceData is not null before rendering */}
                            {serviceData && (
                                <div className="image2-grid">
                                    {serviceData.images && serviceData.images.map((image, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={`data:image/jpeg;base64,${image}`} // Assuming images are base64 encoded
                                            className="service2-image" // Class for the image styling
                                           alt="" // Leave alt empty if the image is purely decorative
                                        />
                                    ))}
                                </div>
                            )}
                        </td>
                        <td className="content-column">
                            <h2>{serviceData.heading}</h2>
                            <p>{serviceData.description}</p>
                            <p>{serviceData.description2}</p>
                            <p>{serviceData.description3}</p>
                            <button className="service-button">Click Here For See More Gallery ..</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Service2;
