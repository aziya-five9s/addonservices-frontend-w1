import React from "react";
import "../styles/AuthenticFlavours.css";
import logo from '../images/logo.jpg';



const flavourImages = [
  {
    src: "../images/logo.jpg",
    alt: "Meatballs",
  },
  {
    src: "/images/food2.jpg",
    alt: "Pancakes with syrup",
  },
  {
    src: "/images/food3.jpg",
    alt: "Veggie Pizza",
  },
  {
    src: "/images/food4.jpg",
    alt: "Biryani",
  },
];

function AuthenticFlavours() {
  return (
    <div className="flavours-section">
      <h2 className="flavours-title">Our Authentic Flavours</h2>
      <div className="flavours-underline"></div>
      <div className="flavours-gallery">
        {flavourImages.map((item, index) => (
          <div className="flavour-card" key={index}>
            <img src={logo} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className="flavours-divider">
        <span>⎯ ✦ ⎯</span>
      </div>
    </div>
  );
}

export default AuthenticFlavours;
