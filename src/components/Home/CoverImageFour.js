import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Assuming your CSS file

const CoverImageFour = () => {
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        fetchGalleryImages();
    }, []);

    const fetchGalleryImages = async () => {
        try {
            const response = await axios.get('/gallery', {
                params: { name: "About Page (main) - only one selection" }
            });

            console.log('Fetched items:', response.data);

            if (response.data && response.data.length > 2) {
                const selectedGallery = response.data[2];
                setGalleryImages(selectedGallery.images);
            } else {
                console.error("Not enough data found, third row not available");
            }
        } catch (error) {
            console.error('Error fetching gallery images:', error);
        }
    };

    return (
        <div className="coverr-image4">
            {galleryImages.length > 0 && (
                <div className="image4-containerr">
                    {galleryImages.map((image, index) => (
                        <img
                            key={index}
                            src={`data:image/jpeg;base64,${image.imageData}`}
                          alt="" // Leave alt empty if the image is purely decorative
                            className="image4-containerr img"
                        />
                    ))}
                    <div className="image4-textt reveal">
                        <h1>Why <br /> COCO - <br /> LOCO GARDENS?</h1>
                        <p className="section__descriptionss">
                            Welcome to Cocoloco Gardens, a serene and picturesque haven nestled in the lush coconut groves of Kahathuduwa, just minutes away from the highway. Whether you're seeking a peaceful retreat or a stunning venue for your most cherished moments, Cocoloco Gardens offers the perfect blend of natural beauty and tranquility.<br/><br/>

                            Surrounded by nature's embrace, Cocoloco Gardens is the ideal destination for families to unwind, relax, and spend quality time together. Its breathtaking views and calm ambiance make it a hidden gem for those looking to escape the hustle and bustle of everyday life.<br/><br/>

                            Planning a special event? Cocoloco Gardens transforms into a magical setting for weddings, parties, and celebrations of all kinds. With its enchanting scenery and carefully curated spaces, it's the perfect backdrop to create unforgettable memories on your most important days.<br/><br/>

                            At Cocoloco Gardens, we believe that simplicity and nature go hand in hand, crafting an experience where every moment feels special. Let us help you make your next gathering extraordinary.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoverImageFour;
