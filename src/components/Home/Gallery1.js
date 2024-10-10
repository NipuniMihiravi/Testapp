import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Custom CSS for styling the image gallery

const Gallery1 = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchGalleryImages();
    }, []);

    const fetchGalleryImages = async () => {
        try {
            // Fetch the documents with the specific name "Home Page (Gallery) - Add multiple images"
            const response = await axios.get('/gallery', {
                params: { name: "Home Page (Gallery) - Add multiple images" } // Adjust the query based on your backend API
            });

            console.log('Fetched items:', response.data);

            if (response.data && response.data.length > 1) {
                // Access the second document in the response data array
                const selectedGallery = response.data[1]; // Get the second document
                setImages(selectedGallery.images); // Set the images array directly from the second document
            } else {
                console.error("Not enough data found, second row not available");
            }
        } catch (error) {
            console.error('Error fetching gallery images:', error);
        }
    };
    const navigateMoreGallery = () => {
            // Replace with the actual navigation logic, e.g., using react-router-dom
            window.location.href = '/more-gallery';
        };

    return (
        <div className="gallery-page">
                    <header className="gallery-header">
                        <h1>Creating memories as fresh as morning dew</h1>
                        <p>
                            Memories are like windows to the past, capturing moments of joy, love, and growth that shape who we are.
                            They hold the essence of our experiences, both big and small, preserving the laughter, lessons, and even the bittersweet times.
                            Whether vivid or faint, each memory tells a story, reminding us of the people we've met, the places we've been,
                            and the journey we've traveled. In memories, we find comfort, reflection, and sometimes the spark of inspiration for what comes next.
                        </p>
                        <button className="gallery-button" onClick={navigateMoreGallery}>
                            Explore More Gallery
                        </button>
                    </header>

        <div className="gallery-container">
            {images.length > 0 ? (
                images.map((image, index) => (
                    <div key={index} className="image-wrapperr">
                        <img
                            src={`data:image/jpeg;base64,${image.imageData}`} // Assuming imageData is base64 encoded
                           alt="" // Leave alt empty if the image is purely decorative
                            className="gallery-image" // Apply styling from CSS
                        />
                    </div>
                ))
            ) : (
                <p>No images available in the gallery.</p>
            )}
        </div>
        </div>
    );
};

export default Gallery1;
