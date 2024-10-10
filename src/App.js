import React, { useState, useEffect } from 'react';
import { NavLink, BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './components/Home/App.css';

import CoverImage from './components/Home/CoverImage';
import Gallery from './components/Home/Gallery';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import Wedding from './components/Home/Wedding';
import Special from './components/Home/Special';
import Dayouting from './components/Home/Dayouting';
import Preshoot from './components/Home/Preshoot';
import Accomadation from './components/Home/Accomadation';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import Package from './components/Home/Package';


import ReservationForm2 from './components/Home/ReservationForm2';

import MenuTable from './components/Home/MenuTable';
import Offer from './components/Home/Offer';

const App = () => {
  //const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/home">
              <img src="/images/logo.png" alt="Logo" className="logo" />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger-icon" onClick={toggleMenu}>
            &#9776;
          </div>

          <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>HOME</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>ABOUT</NavLink></li>
              <li className="dropdown">
                <NavLink to="/wedding" className={({ isActive }) => (isActive ? 'active' : '')}>SERVICE</NavLink>
                <ul className="dropdown-content">
                  <li><NavLink to="/wedding" className={({ isActive }) => (isActive ? 'active' : '')}>WEDDING EVENT</NavLink></li>
                  <li><NavLink to="/special" className={({ isActive }) => (isActive ? 'active' : '')}>SPECIAL EVENTS</NavLink></li>
                  <li><NavLink to="/dayouting" className={({ isActive }) => (isActive ? 'active' : '')}>DAY OUTING</NavLink></li>
                  <li><NavLink to="/preshoot" className={({ isActive }) => (isActive ? 'active' : '')}>PRE-SHOOT LOCATION</NavLink></li>
                  <li><NavLink to="/accomadation" className={({ isActive }) => (isActive ? 'active' : '')}>ACCOMMODATION</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/package" className={({ isActive }) => (isActive ? 'active' : '')}>PACKAGE</NavLink></li>
              <li><NavLink to="/galleries" className={({ isActive }) => (isActive ? 'active' : '')}>GALLERY</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>CONTACT</NavLink></li>
            </ul>
            {/* Order Online button */}

          </div>
        </div>
      </nav>

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/cover" element={<CoverImage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/galleries" element={<Gallery />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/menutable" element={<MenuTable />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/special" element={<Special />} />
          <Route path="/dayouting" element={<Dayouting />} />
          <Route path="/preshoot" element={<Preshoot />} />
          <Route path="/accomadation" element={<Accomadation />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Package />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/booking" element={<ReservationForm2 />} />
        </Routes>
      </main>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
