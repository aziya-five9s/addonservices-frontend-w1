
import React, { useState } from 'react';
import '../styles/Header.css'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Footer from './Footer';
import HeroSection from './HeroSection';
import logo from '../images/logo.jpg';
import Header from './Header';
import AboutKitchen from './AboutKitchen';
import SubMenu from './SubMenu';
import CategoryCarousel from './CategoryCarousel';

function Home() {

  return (
    <div>
    {/* <Header/> */}
    <HeroSection/>
    <CategoryCarousel/>
    <AboutKitchen/>

    <SubMenu/>

    {/* <Footer/> */}
    </div>
   
  );
}

export default Home;