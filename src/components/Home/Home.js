import React from 'react';
import CoverImage from './CoverImage';
import About1 from './About1';
import Service1 from './Service1';
import Facility1 from './Facility1';
import Gallery1 from './Gallery1';



import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <CoverImage />
            <About1 />
            <Service1 />
            <Facility1 />
            <Gallery1 />


            <Footer/>
        </div>
    );
};

export default Home;