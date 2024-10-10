import React from 'react';
import CoverImageFive from './CoverImageFive';
import PackageDetails from './PackageDetails';
import PackageDetails2 from './PackageDetails2';
import Menu from './Menu';


import Footer from './Footer';


const Package = () => {
    return (
        <div>
            <CoverImageFive />
            <PackageDetails />
            <PackageDetails2 />
            <Menu />

            <Footer/>

        </div>
    );
};

export default Package;