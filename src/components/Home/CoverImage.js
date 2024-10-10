import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'; // Ensure this imports slick-carousel styles as well

const CoverImage = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetchCovers();
    }, []);

    const fetchCovers = async () => {
        try {
            // Fetch only the specific document where the name is "Home Page (Main) - Add multiple images"
            const response = await axios.get('/gallery', {
                params: { name: "Home Page (Main) - Add multiple images" } // Adjust the query based on your backend API
            });
            console.log('Fetched items:', response.data);

            if (response.data && response.data.length > 0) {
                // Assuming response.data is an array of documents and we need to access the first one
                const selectedGallery = response.data[0];
                setGallery(selectedGallery.images); // Set the images array directly
            }
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    // Settings for the carousel
    const carouselSettings = {
        dots: true, // Enable dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
    };

    return (
        <div className="cover-image">
            {gallery.length > 0 ? (
                <Slider {...carouselSettings}>
                    {gallery.map((image, index) => (
                        <div key={index} className="image-wrapper">
                            <img
                                src={`data:image/jpeg;base64,${image.imageData}`} // Assuming imageData is base64 encoded
                                className="image-container img" // Class for the image styling
                               alt="" // Leave alt empty if the image is purely decorative
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>No cover images available.</p>
            )}
        </div>
    );
};

export default CoverImage;
