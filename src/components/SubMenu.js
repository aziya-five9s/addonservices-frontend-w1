import React from "react";
import "./../styles/SubMenu.css";
import logo from '../images/logo.jpg';
import logo1 from '../images/food.jpg';

const data = {
    heading: "Our Authentic Flavours",
    subMenu: [
        {
            imgId: "aa723423-bb72-4748-8362-142ace48a700.png",
            title: "piz",
            imagePath: logo
        },
        {
            imgId: "b3392c93-5618-465b-b6a9-00736b383065.png",
            title: "pizzachanged",
            imagePath: logo1
        },
        {
            imgId: "7354dfe9-97e3-4cb2-9e90-890c0d57b262.png",
            title: "786",
            imagePath: logo
        },
        {
            imgId: "95031149-31d5-496a-9f19-469fbcb03daa.png",
            title: "piz",
            imagePath: logo1
        },
        {
            imgId: "9b46fa50-19bb-4eb2-a479-736cf1a462a4.png",
            title: "piz",
            imagePath: logo
        }
    ]
};


const SubMenu = () => {


    return (
        <div className="slider-container">
            {/* <h2>Our Authentic Flavours</h2> */}
            <h2>{data.heading}</h2>
            <div className="underline"></div>
            <div className="slider">
                {data.subMenu.map((item, index) => (
                    <div className="slide" key={index}>
                        <img src={item.imagePath} alt={item.title} />
                        <div className="overlay">
                            <span>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// const ImageSlider = () => {
//     return (
//         <div className="slider-container">
//             <h2>Our Authentic Flavours</h2>
//             <div class="underline"></div>
//             <div className="slider">
//                 {items.map((item, index) => (
//                     <div className="slide" key={index}>
//                         <img src={item.image} alt={item.text} />
//                         <div className="overlay">
//                             <span>{item.text}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

export default SubMenu;
