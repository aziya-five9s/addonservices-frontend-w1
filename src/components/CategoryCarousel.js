import React, { useRef } from "react";
import "../styles/CategoryCarousel.css";

const categories = [
  { title: "Starters", image: "/images/starters.jpg" },
  { title: "Desserts", image: "/images/desserts.jpg" },
  { title: "Biriyani's", image: "/images/biryani.jpg" },
  { title: "Breakfast", image: "/images/breakfast.jpg" },
  { title: "Main", image: "/images/main.jpg" },
  { title: "Indian", image: "/images/indian.jpg" },
];

const CategoryCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const itemWidth = 120; // width + gap (100px img + 20px margin)
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={() => scroll("left")}>
        &#10094;
      </button>

      <div className="carousel" ref={carouselRef}>
        {categories.map((item, idx) => (
          <div className="category-item" key={idx}>
            <img src={item.image} alt={item.title} />
            <p className="caption">{item.title}</p>
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={() => scroll("right")}>
        &#10095;
      </button>
    </div>
  );
};

export default CategoryCarousel;
