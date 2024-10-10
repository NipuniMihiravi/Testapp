import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Assuming your CSS file

const CoverImageFive = () => {
    const [galleryImages, setGalleryImages] = useState([]); // Use galleryImages to hold the image data

    useEffect(() => {
        fetchGalleryImages();
    }, []);

    const fetchGalleryImages = async () => {
        try {
            // Fetch the documents with the specific name "Package Page (main) - only one selection"
            const response = await axios.get('/gallery', {
                params: { name: "Package Page (main) - only one selection" } // Adjust the query based on your backend API
            });

            console.log('Fetched items:', response.data);

            if (response.data && response.data.length > 3) {
                // Access the third document in the response data array
                const selectedGallery = response.data[3]; // Get the fourth document (index 3)
                setGalleryImages(selectedGallery.images); // Set the images array directly from the selected document
            } else {
                console.error("Not enough data found, third row not available");
            }
        } catch (error) {
            console.error('Error fetching gallery images:', error);
        }
    };

    return (
        <div className="package-container">
            <table className="package-table">
                <tbody>
                    <tr>

                        <td className="package-content">
                            <div className="package-content-text">
                                <h1>Our Packages and Menu</h1>
                                <p>
                                    At Cocoloca Garden, we present you with exceptional packages designed for a memorable day spent with your loved ones.
                                </p>
                            </div>
                        </td>

                        <td className="cover-package">
                                                    <div className="image-gallery-package">
                                                        {galleryImages.length > 0 ? (
                                                            galleryImages.map((image, index) => (
                                                                <img
                                                                    key={index}
                                                                    src={`data:image/jpeg;base64,${image.imageData}`} // Assuming imageData is base64 encoded
                                                                   alt="" // Leave alt empty if the image is purely decorative
                                                                    className="gallery-image-package" // Apply styling from CSS
                                                                />
                                                            ))
                                                        ) : (
                                                            <p>No images found</p> // Fallback if no images are available
                                                        )}
                                                    </div>
                                                </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CoverImageFive;
