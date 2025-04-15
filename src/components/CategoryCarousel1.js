import React, { useRef } from 'react';
import '../styles/CategoryCarousel.css';


const CategoryCarousel1 = ({ categories }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 200;
      if (direction === 'left') {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="category-carousel-wrapper">
      <h2 className="category-title">Our Authentic Flavours</h2>
      <div className="category-underline"></div>
      <div className="category-carousel-container">
        <button className="category-nav-btn left" onClick={() => scroll('left')}>
          &#8249;
        </button>
        <div className="category-carousel-track" ref={carouselRef}>
          {categories.map((category, index) => (
            <div className="category-item" key={index}>
              <img
                src={category.imagePath}
                alt={category.title}
                className="category-image"
              />
              <p className="category-label">{category.title}</p>
            </div>
          ))}
        </div>
        <button className="category-nav-btn right" onClick={() => scroll('right')}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel1;
