import React from "react";
import "./../styles/ImageSlider.css";
import logo from '../images/logo.jpg';
import logo1 from '../images/food.jpg';

// const items = [
//     {
//         image: logo, // Replace with your image path
//         text: "Chicken Manchuria",
//     },
//     {
//         image: logo1,
//         text: "Pancakes",
//     },
//     {
//         image: logo,
//         text: "Pizza",
//     },
//     {
//         image: logo, // Replace with your image path
//         text: "Chicken Manchuria",
//     },
//     {
//         image: logo1,
//         text: "Pancakes",
//     },
//     {
//         image: logo,
//         text: "Pizza",
//     },
// ];


const items = {
    heading: "Our Authentic Flavours",
    subMenu: [
      {
        imgId: logo,
        title: "piz",
        imagePath: "aa723423-bb72-4748-8362-142ace48a700.png",
      },
      {
        imgId: logo1,
        title: "pizzachanged",
        imagePath: "b3392c93-5618-465b-b6a9-00736b383065.png",
      },
      {
        imgId: logo,
        title: "786",
        imagePath: "7354dfe9-97e3-4cb2-9e90-890c0d57b262.png",
      },
      {
        imgId: logo1,
        title: "piz",
        imagePath: "95031149-31d5-496a-9f19-469fbcb03daa.png",
      },
      {
        imgId: logo,
        title: "piz",
        imagePath: "9b46fa50-19bb-4eb2-a479-736cf1a462a4.png",
      },
    ],
  };

const ImageSlider = () => {
    return (
        <div className="slider-container">
            {/* <h2>Our Authentic Flavours</h2> */}
            <h2>{items.heading}</h2>
            <div class="underline"></div>
            <div className="slider">
                {items.subMenu.map((item, index) => (
                    <div className="slide" key={index}>
                        <img src={item.imgId} alt={item.title} />
                        <div className="overlay">
                            <span>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
