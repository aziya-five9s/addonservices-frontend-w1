// // import React, { useRef } from "react";
// // import "../styles/CategoryCarousel.css";

// // const categories = [
// //   { title: "Starters", image: "/images/starters.jpg" },
// //   { title: "Desserts", image: "/images/desserts.jpg" },
// //   { title: "Biriyani's", image: "/images/biryani.jpg" },
// //   { title: "Breakfast", image: "/images/breakfast.jpg" },
// //   { title: "Main", image: "/images/main.jpg" },
// //   { title: "Indian", image: "/images/indian.jpg" },
// // ];

// // const CategoryCarousel = () => {
// //   const carouselRef = useRef(null);

// //   const scroll = (direction) => {
// //     const itemWidth = 120; // width + gap (100px img + 20px margin)
// //     if (direction === "left") {
// //       carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
// //     } else {
// //       carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <div className="carousel-container">
// //       <button className="nav-button left" onClick={() => scroll("left")}>
// //         &#10094;
// //       </button>

// //       <div className="carousel" ref={carouselRef}>
// //         {categories.map((item, idx) => (
// //           <div className="category-item" key={idx}>
// //             <img src={item.image} alt={item.title} />
// //             <p className="caption">{item.title}</p>
// //           </div>
// //         ))}
// //       </div>

// //       <button className="nav-button right" onClick={() => scroll("right")}>
// //         &#10095;
// //       </button>
// //     </div>
// //   );
// // };

// // export default CategoryCarousel;


// import React, { useRef } from "react";
// import "../styles/CategoryCarousel.css";

// import logo1 from '../images/food.jpg';
// import logo2 from '../images/food1.jpg';

// const categories = [
//   { title: "Starters", image: logo1 },
//   { title: "Desserts", image: logo2 },
//   { title: "Biriyani's", image: logo1 },
//   { title: "Breakfast", image: logo2 },
//   { title: "Main", image: logo1 },
//   { title: "Indian", image: logo2 },
//   { title: "Starters", image: logo1 },
//   { title: "Desserts", image: logo2 },
//   { title: "Biriyani's", image: logo1 },
//   { title: "Breakfast", image: logo2 },
//   { title: "Main", image: logo1 },
//   { title: "Indian", image: logo2 },
// ];

// const CategoryCarousel = () => {
//   const carouselRef = useRef(null);

//   const scroll = (direction) => {
//     const itemWidth = 120; // width + gap
//     if (direction === "left") {
//       carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
//     } else {
//       carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="category-carousel-container">
//       <button className="category-carousel-nav left" onClick={() => scroll("left")}>
//         &#10094;
//       </button>

//       <div className="category-carousel" ref={carouselRef}>
//         {categories.map((item, idx) => (
//           <div className="category-carousel-item" key={idx}>
//             <img src={item.image} alt={item.title} />
//             <p className="category-carousel-caption">{item.title}</p>
//           </div>
//         ))}
//       </div>

//       <button className="category-carousel-nav right" onClick={() => scroll("right")}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default CategoryCarousel;


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
  { title: "Indian", image: logo2 },
];

const CategoryCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const itemWidth = 130; // width + gap
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="category-carousel-container">
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
  );
};

export default CategoryCarousel;
