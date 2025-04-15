// import React from 'react';
// import '../styles/AboutKitchen.css';
// // import aboutImage from '../assets/image.png'; // Adjust path based on your structure
// import logo from '../images/logo.jpg';


import React from 'react';
import '../styles/AboutKitchen.css';
import logo from '../images/logo.jpg';

const AboutKitchen = () => {
  const aboutSection = {
    imgId: "77276921-3d6d-43cd-a144-d7ada35f6349",
    title: "About Desi kitchenzzz",
    imagePath: "77276921-3d6d-43cd-a144-d7ada35f6349.png",
    uploadedAt: "2025-04-09T06:22:24.610Z",
    uploadedBy: "John Doe",
    description:
      "testing  Desi Kitchen is all about bringing the authentic flavors of traditional Indian cooking to your plate. We celebrate the rich culinary heritage of India, offering homemade-style food prepared with fresh ingredients, aromatic spices, and love. Whether it's classic North Indian dishes, flavorful South Indian delicacies, or regional specialties, Desi Kitchen ensures a taste that feels just like home. Experience the warmth of home-cooked meals with a touch of tradition in every bite!"
  };

  return (
    <div className="about-container">
      <div className="about-text">
        <h2>{aboutSection.title}</h2>
        <div className="underline"></div>
        <p>{aboutSection.description}</p>
      </div>
      <div className="about-image">
        {/* <img src={`/uploads/${aboutSection.imagePath}`} alt={aboutSection.title} /> */}
        <img src={logo} alt={aboutSection.title} style={{float:"end"}}/>
      </div>
    </div>
  );
};

export default AboutKitchen;
