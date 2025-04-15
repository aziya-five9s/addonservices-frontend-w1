import React, { useEffect, useState } from 'react';
import '../styles/ImageCarousel.css';
import logo1 from '../images/food.jpg';
import logo2 from '../images/food1.jpg';


const carouselData = [
  {
    imgId: "c82018d4-58e8-4a20-ad1b-1878dd7e2350",
    title: "Authentic Biryani",
    subTitle: "Explore our Signature Biryani",
    imagePath: logo1,
    updatedAt: "2025-03-27T08:28:04.911Z"
  },
  {
    imgId: "e5bb89a0-290e-4dfa-8aeb-84534295f002",
    title: "new",
    subTitle: "Top Sellingdata1",
    imagePath: logo2,
    updatedAt: "2025-04-09T06:12:59.189Z"
  },
  {
    imgId: "c82018d4-58e8-4a20-ad1b-1878dd7e2350",
    title: "Authentic Biryani",
    subTitle: "Explore our Signature Biryani",
    imagePath: logo1,
    updatedAt: "2025-03-27T08:28:04.911Z"
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(slide);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
      {/* <div className="carousel-image-wrapper" style={{height:"100%"}}> */}
        <img
          // src={carouselData[currentIndex].imagePath}
          src={carouselData[currentIndex].imagePath}
          alt={carouselData[currentIndex].title}
          className="carousel-image" 
        />
        <div className="carousel-text">
          {/* <h2>Authentic Biryani</h2> */}
          <h2>{carouselData[currentIndex].title}</h2>
          {/* <p>Explore our Signature Biryani</p> */}
          <p>{carouselData[currentIndex].subTitle}</p>
          <button>Order Now!</button>
        </div>
      </div>

      <div className="carousel-dots">
        {carouselData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
