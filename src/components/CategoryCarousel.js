

import React, { useRef } from "react";
import "../styles/CategoryCarousel.css";

import logo1 from '../images/food.jpg';
import logo2 from '../images/food1.jpg';

const categories = [
    { title: "Starters", image: logo1 },
    { title: "Desserts", image: logo2 },
    { title: "Biriyani's", image: logo1 },
    { title: "Breakfast", image: logo2 },
    { title: "Main", image: logo1 },
    { title: "Indian", image: logo2 },
    { title: "Starters", image: logo1 },
    { title: "Desserts", image: logo2 },
    { title: "Biriyani's", image: logo1 },
    { title: "Breakfast", image: logo2 },
    { title: "Main", image: logo1 },
    { title: "Indian", image: logo2 }
];

const CategoryCarousel = () => {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const itemWidth = carouselRef.current.offsetWidth / 6; // 6 items at a time
        carouselRef.current.scrollBy({
            left: direction === "left" ? -itemWidth : itemWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="category-carousel-container">


            <div className="category-text"><h2>About Desi kitchenzzz</h2></div>
            <div>
                < hr className="category-underline"></hr>
            </div>

            <div className="category-carousel-items">
                <button className="category-carousel-nav left" onClick={() => scroll("left")}>
                    &#10094;
                </button>

                <div className="category-carousel" ref={carouselRef}>
                    {categories.map((item, idx) => (
                        <div className="category-carousel-item" key={idx}>
                            <img src={item.image} alt={item.title} />
                            <p className="category-carousel-caption">{item.title}</p>
                        </div>
                    ))}
                </div>

                <button className="category-carousel-nav right" onClick={() => scroll("right")}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default CategoryCarousel;

