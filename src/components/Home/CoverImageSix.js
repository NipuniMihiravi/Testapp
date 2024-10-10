import React from 'react';
import './App.css'; // Assuming your CSS file

const CoverImageSix = () => {
    return (
        <>
            <div className="contact-container">
                <table className="contact-table">
                    <tbody>
                        <tr>
                            {/* Left side: Images */}
                            <td className="contact-image-container">
                                <div className="image-contact-package">
                                    <img
                                        src="/images/ser1.jpg" // Replace with the actual image path
                                       alt="" // Leave alt empty if the image is purely decorative
                                        className="contact-image"
                                    />
                                </div>
                            </td>

                            {/* Right side: Contact details */}
                            <td className="contact-details-container">
                                <div className="contact-details1">
                                    <h1>Contact Us</h1>
                                    <p>
                                        We'd love to hear from you! Whether you're planning an event, inquiring about our packages, or need additional information, feel free to reach out to us:
                                    </p>
                                    <ul>
                                        <li><strong>Phone:</strong> +94 77 782 8629</li>
                                        <li><strong>Email:</strong> info@cocolocagarden.com</li>
                                        <li><strong>Address:</strong> 179/2 Sambodhi Mawatha, Polgasowita, Sri Lanka </li>
                                        <li><strong>Operating Hours:</strong> Monday-Sunday, 9 AM - 11 PM</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* New paragraph added after the contact-container */}
            <div className="additional-info">
                <h1>Your Satisfaction is Our Priority at Cocoloca Garden</h1>
                <p>
                    At Cocoloca Garden, we are dedicated to ensuring that you have the most delightful and memorable experience possible. Our passionate team is committed to providing exceptional service, tailored to meet your specific needs and preferences. Whether you have questions about our diverse packages, wish to discuss event planning, or need assistance with any other inquiries, we are here to help. We pride ourselves on our attention to detail and strive to create a welcoming atmosphere where every guest feels valued and cared for. Don't hesitate to reach out to us at any time; your satisfaction is our top priority, and we look forward to assisting you!
                </p>
            </div>
        </>
    );
};

export default CoverImageSix;
