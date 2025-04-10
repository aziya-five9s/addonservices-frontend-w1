
import React, { useState } from 'react';
import '../styles/Contact.css'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Footer1 from './Footer';
import logo from '../images/logo.jpg';


function Contact() {
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
          <a href="/store-locator">Store locator</a>
          <a href="/order-now">Order Now</a>
          <a href="/gallery">Gallery</a>
          <a href="/profile" className="user-icon">
          <PersonOutlineIcon/>
          </a>
        </nav>
      </div>
    </header>
   
    
    <Footer1/>
    </div>
  
   
  );
}

export default Contact;