import React from 'react';
import './App.css'; // Make sure to create this CSS file for styles

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="section__container footer__container">
                <div className="footer__col">
                    <div className="logos">
                        <a href="#home"><img src="/images/logo.png" alt="logo" /></a>
                    </div>
                    <h1 className="section__header">Cocoloco Garden</h1>
                    <p className="section__description">
                        Where Moments Become Memories. <br />
                        Cocoloco Garden Resort - Your Ultimate Destination for Unforgettable Events, <br />
                        Blissful Weddings, and Picture-Perfect Photoshoots.
                    </p>

                </div>

                <div className="footer__col">
                    <h4>Quick Links</h4>
                    <ul className="footer__links">
                        <li><a href="/home">HOME</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/service">SERVICE</a></li>
                        <li><a href="/package">PACKAGE</a></li>
                        <li><a href="/gallery">GALLERY</a></li>
                        <li><a href="/contact">CONTACT</a></li>

                    </ul>
                </div>

                <div className="footer__col">
                    <h4>Our Services</h4>
                    <ul className="footer__links">
                        <li><a href="/wedding">WEDDING EVENT</a></li>
                        <li><a href="/special">SPECIAL EVENT</a></li>
                        <li><a href="/dayouting">DAY OUTING</a></li>
                        <li><a href="/preshoot">PRE SHOOT</a></li>
                        <li><a href="/accomadation">ACCOMMODATION</a></li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>Cocoloco Gardens</h4>
                    <p className="section__description">
                        179/2 Sambodhi Mawatha, <br />
                        Polgasowita, Sri Lanka<br /><br />
                        <strong>Phone:</strong> +94 77 782 8629<br />
                        <strong>Email:</strong> cocolco@gmail.com<br />
                    </p>
                    <div className="footer__socials">
                        <a href="https://www.facebook.com/CocolocoGardens/">
                            <img src="/images/facebook.png" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/cocoloco_gardens/?hl=en">
                            <img src="/images/instagram.png" alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bar">
                Copyright © 2024 Cocoloco Garden. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
