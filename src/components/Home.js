
import React, { useState } from 'react';
import '../styles/Header.css'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';
import logo from '../images/logo.jpg';
import Header from './Header';

function Home() {

  return (
    <div>
    {/* <Header/> */}
    <ImageCarousel/>
    {/* <Footer/> */}
    </div>
   
  );
}

export default Home;