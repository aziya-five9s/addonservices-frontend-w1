
import React, { useState } from 'react';
import '../styles/Header.css'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Footer from './Footer';
import ImageCarousel from './HeroSection';
import logo from '../images/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    debugger
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <header className="header">
      <div className="header-container">
      <a href="/">
        {/* <img  className="logo" src="../images/food.jpg"/> */}
        <img  className="logo circle-image" src={logo}/>
        </a>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/contact">Contact us</a>
          <a href="/location">Store locator</a>
          <a href="/ordernow">Order Now</a>
          <a href="/gallery">Gallery</a>
          <a href="/profile" className="user-icon">
          <PersonOutlineIcon/>
          </a>
        </nav>
      </div>
    </header>
    {/* <ImageCarousel/>
    
    <Footer/> */}
    </div>
   
  );
}

export default Header;