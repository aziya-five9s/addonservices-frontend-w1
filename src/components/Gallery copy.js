import React from 'react';
import '../styles/Gallery.css';
import logo from '../images/logo.jpg';
import logo1 from '../images/food.jpg';

const mealData = [
  {
    id: "7f629873-faf3-4e6e-a56a-8167e46fa384",
    tenantId: "tenant-002",
    morningMeal: [
      {
        imgId: "b4a2e882-4a38-4fd4-8aa8-a283c741135a",
        title: "newtitletesting",
        imagePath: logo,
        uploadedAt: "2025-04-14T07:44:00.505Z",
        uploadedBy: "John Doe"
      },  {
        imgId: "b4a2e882-4a38-4fd4-8aa8-a283c741135a",
        title: "newtitletesting",
        imagePath: logo1,
        uploadedAt: "2025-04-14T07:44:00.505Z",
        uploadedBy: "John Doe"
      },  {
        imgId: "b4a2e882-4a38-4fd4-8aa8-a283c741135a",
        title: "newtitletesting",
        imagePath: logo,
        uploadedAt: "2025-04-14T07:44:00.505Z",
        uploadedBy: "John Doe"
      },
      {
        imgId: "b4a2e882-4a38-4fd4-8aa8-a283c741135a",
        title: "newtitletesting",
        imagePath: logo,
        uploadedAt: "2025-04-14T07:44:00.505Z",
        uploadedBy: "John Doe"
      }
    ],
    afternoonMeal: [
      {
        imgId: "fdb2b967-b221-4cba-9d06-5c2577bb0dae",
        title: "testcaseaziya",
        imagePath: logo1,
        uploadedAt: "2025-04-14T07:44:00.505Z",
        uploadedBy: "John Doe"
      }
    ],
    eveningMeal: [
      {
        imgId: "fdb2b967-b221-4cba-9d06-5c2577bb0dae",
        title: "testcaseaziya",
        imagePath: logo,
        uploadedAt: "2025-04-14T07:44:00.505Z",
        uploadedBy: "John Doe"
      }
    ],
    createdAt: "2025-04-14T07:45:08.191Z",
    updatedAt: "2025-04-21T04:47:31.643Z",
    deletedAt: null
  }
];

const Gallery = () => {
  const morningMeals = mealData[0].morningMeal;
  const afernoonMeals = mealData[0].afternoonMeal;
  const eveningMeals = mealData[0].eveningMeal;

  return (
    <div className="morning-meal-container">
      <h2 className="meal-heading">Morning Meal</h2>
      <div className="meal-grid">
        {morningMeals.map((meal) => (
          <div className="meal-card" key={meal.imgId}>
            <img src={meal.imagePath} alt={meal.title} />
            {meal.title && 
            <div class="overlay"><span>{meal.title}</span></div>
            }
          </div>
        ))}
      </div>
      <h2 className="meal-heading">Afternoon Meal</h2>
      <div className="meal-grid">
        {afernoonMeals.map((meal) => (
          <div className="meal-card" key={meal.imgId}>
            <img src={meal.imagePath} alt={meal.title} />
            {meal.title && 
            <div class="overlay"><span>{meal.title}</span></div>
            }
          </div>
        ))}
      </div>
      <h2 className="meal-heading">Evening Meal</h2>
      <div className="meal-grid">
        {eveningMeals.map((meal) => (
          <div className="meal-card" key={meal.imgId}>
            <img src={meal.imagePath} alt={meal.title} />
            {meal.title && 
            <div class="overlay"><span>{meal.title}</span></div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};



export default Gallery;
