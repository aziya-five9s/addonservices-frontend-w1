import React from "react";
import "./../styles/ImageSlider.css";
import logo from '../images/logo.jpg';
import logo1 from '../images/food.jpg';

const items = [
    {
        image: logo, // Replace with your image path
        text: "Chicken Manchuria",
    },
    {
        image: logo1,
        text: "Pancakes",
    },
    {
        image: logo,
        text: "Pizza",
    },
    {
        image: logo, // Replace with your image path
        text: "Chicken Manchuria",
    },
    {
        image: logo1,
        text: "Pancakes",
    },
    {
        image: logo,
        text: "Pizza",
    },
];


const ImageSlider = () => {
    return (
        <div className="slider-container">
            <h2>Our Authentic Flavours</h2>
            <div class="underline"></div>
            <div className="slider">
                {items.map((item, index) => (
                    <div className="slide" key={index}>
                        <img src={item.image} alt={item.text} />
                        <div className="overlay">
                            <span>{item.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
