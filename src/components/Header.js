
import React, { useState } from 'react';
import '../styles/Header.css'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Footer1 from './Footer';
import ImageCarousel from './ImageCarousel';

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
        <img  className="logo" src="../images/food.jpg"/>
        </a>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/contact">Contact us</a>
          <a href="/store-locator">Store locator</a>
          <a href="/order-now">Order Now</a>
          <a href="/gallery">Gallery</a>
          <a href="/profile" className="user-icon">
          <PersonOutlineIcon/>
          </a>
        </nav>
      </div>
    </header>
    <ImageCarousel/>
    
    <Footer1/>
    </div>
   
  );
}

export default Header;