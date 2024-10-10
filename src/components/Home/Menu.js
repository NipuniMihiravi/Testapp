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
                params: { name: "Cocoloco Menu" } // Adjust the query based on your backend API
            });

            console.log('Fetched items:', response.data);

            if (response.data && response.data.length > 6) {
                // Access the third document in the response data array
                const selectedGallery = response.data[6]; // Get the fourth document (index 3)
                setGalleryImages(selectedGallery.images); // Set the images array directly from the selected document
            } else {
                console.error("Not enough data found, third row not available");
            }
        } catch (error) {
            console.error('Error fetching gallery images', error);
        }
    };

    return (
    <div className="package-heading1">
                                            <h1>Our Menu</h1>
                                            <p>
                                                Here is our mouthwatering menu, carefully crafted for you to enjoy and customize to your liking. Feel free to discuss your preferences with us, and together we’ll tailor the perfect experience for you. We are committed to delivering the very best service, ensuring your satisfaction every step of the way.
                                            </p>

        <div className="package-container1">
            <table className="package-table1">
                <tbody>
                    <tr>

                        <td className="package-content1">
                            <div className="package-content-text1">
                                <h2>Cocoloco Menu</h2>

                            </div>
                        </td>
                     </tr>
                    <tr>
                        <td className="cover-package1">
                                                    <div className="image-gallery1-package">
                                                        {galleryImages.length > 0 ? (
                                                            galleryImages.map((image, index) => (
                                                                <img
                                                                    key={index}
                                                                    src={`data:image/jpeg;base64,${image.imageData}`} // Assuming imageData is base64 encoded
                                                                   alt="" // Leave alt empty if the image is purely decorative
                                                                    className="gallery-image1-package" // Apply styling from CSS
                                                                />
                                                            ))
                                                        ) : (
                                                            <p>Currently No Special Offers Available in Cocoloco Garden</p> // Fallback if no images are available
                                                        )}
                                                    </div>
                                                </td>


                    </tr>
                </tbody>
            </table>
        </div>
        <div className="package-menu-image">

           <img src="/images/Food1.jpg" alt="about" />
           <img src="/images/Food2.jpg" alt="about" />
             <img src="/images/Food3.jpg" alt="about" />
              <img src="/images/Food4.jpg" alt="about" />
              <img src="/images/Food5.jpg" alt="about" />

              </div>
        </div>

    );


};

export default CoverImageFive;
