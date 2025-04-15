
import React, { useState } from 'react';
import '../styles/Header.css'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';
import logo from '../images/logo.jpg';
import Header from './Header';
import AboutKitchen from './AboutKitchen';
import AuthenticFlavours from './AuthenticFlavours';
import ImageSlider from './ImageSlider';
// import CategoryCarousel from './CategoryCarousel';

function Home() {

  return (
    <div>
    {/* <Header/> */}
    <ImageCarousel/>
    <AboutKitchen/>
    {/* <AuthenticFlavours/> */}

    <ImageSlider/>

    {/* <CategoryCarousel/> */}
    {/* <Footer/> */}
    </div>
   
  );
}

export default Home;