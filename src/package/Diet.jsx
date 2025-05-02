import React, { useState } from 'react';
import Navbar from './Navbar';
import { Colors } from 'chart.js';
import './Diet.css'

const foods = {
  veg: [
    { name: 'Paneer', protein: 18, carbs: 1.2, fats: 20, img: '/Paneer.png' },
    { name: 'Lentils', protein: 9, carbs: 20, fats: 0.4, img: '/Lentils.png' },
    { name: 'Tofu', protein: 8, carbs: 2, fats: 5, img: '/Tofu.png' },
    { name: 'Soya', protein: 36, carbs: 30, fats: 20, img: '/Soya.png' },
  { name: 'Greek Yogurt', protein: 10, carbs: 3.6, fats: 0.4, img: '/Yogurt.png' },
  { name: 'Nuts', protein: 20, carbs: 21, fats: 50, img: '/Nuts.png' },
  { name: 'Broccoli', protein: 2.8, carbs: 6.6, fats: 0.4, img: '/Broccoli.png' },
  { name: 'Milk', protein: 3.4, carbs: 5, fats: 3.3, img: '/Milk.png' },
  { name: 'Oats', protein: 13.2, carbs: 67.7, fats: 6.5, img: '/Oat.png' }
  ],
  nonVeg: [
    { name: 'Chicken Breast', protein: 31, carbs: 0, fats: 3.6, img: '/Cb.png' },
    { name: 'Egg', protein: 13, carbs: 1.1, fats: 11, img: '/Egg.png' },
    { name: 'Fish', protein: 22, carbs: 0, fats: 5, img: '/Fish.png' },
    { name: 'Shrimps', protein: 24, carbs: 0.2, fats: 0.3, img: '/Shrimp.png' },
{ name: 'Lobster', protein: 19, carbs: 0, fats: 0.9, img: '/Lobster.png' },
{ name: 'Meat', protein: 26, carbs: 0, fats: 15, img: '/Meat.png' },
{ name: 'Salmon', protein: 20, carbs: 0, fats: 13, img: '/Salmon.png' },
{ name: 'Pork', protein: 27, carbs: 0, fats: 14, img: '/Pork.png' }



  ]
};

export default function Diet() {
  const [calories, setCalories] = useState('');
  const [weight, setWeight] = useState('');

  const proteinPercent = 30;
  const carbsPercent = 40;
  const fatsPercent = 30;

  const proteinGrams = ((proteinPercent / 100) * calories) / 4;
  const carbsGrams = ((carbsPercent / 100) * calories) / 4;
  const fatsGrams = ((fatsPercent / 100) * calories) / 9;

  return (
    <>
    <Navbar/>
    <div className="diet-container">
      <h1>Daily Diet Planner</h1>

      <div className="inputs">
        <input 
          type="number" 
          placeholder="Daily Calorie Target" 
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Current Weight (kg)" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="macros">
        <div className="macro">
          <h2>Protein</h2>
          <p>{proteinPercent}% ({isNaN(proteinGrams) ? 0 : proteinGrams.toFixed(1)}g)</p>
        </div>
        <div className="macro">
          <h2>Carbs</h2>
          <p>{carbsPercent}% ({isNaN(carbsGrams) ? 0 : carbsGrams.toFixed(1)}g)</p>
        </div>
        <div className="macro">
          <h2>Fats</h2>
          <p>{fatsPercent}% ({isNaN(fatsGrams) ? 0 : fatsGrams.toFixed(1)}g)</p>
        </div>
      </div>

      <div className="food-section">
      <h2 style={{color:'Green'}}>Veg Foods</h2>
        <div className="food-grid">
          {foods.veg.map((food, index) => (
            <div key={index} className="food-card" style={{ backgroundImage: `url(${food.img})` }}>
              
              <div className="hover-content">
                <div className="hover-macros">
                  <p>{food.protein}g Protein</p>
                  <p>{food.carbs}g Carbs</p>
                  <p>{food.fats}g Fats</p>
                </div>

                <div className="pin">
                  <div className="pin-line"></div>
                  <div className="pin-circle"></div>
                  <div className="pin-circle delay1"></div>
                  <div className="pin-circle delay2"></div>
                </div>
              </div>

              <h3>{food.name}</h3>

              <div className="hover-info">
                <p>100g serving</p>
              </div>

            </div>
          ))}
        </div>

        <h2 style={{color:'Red',marginTop:'20px'}}>Non-Veg Foods</h2>
        <div className="food-grid">
          {foods.nonVeg.map((food, index) => (
            <div key={index} className="food-card" style={{ backgroundImage: `url(${food.img})` }}>

              <div className="hover-content">
                <div className="hover-macros">
                  <p>{food.protein}g Protein</p>
                  <p>{food.carbs}g Carbs</p>
                  <p>{food.fats}g Fats</p>
                </div>

                <div className="pin">
                  <div className="pin-line"></div>
                  <div className="pin-circle"></div>
                  <div className="pin-circle delay1"></div>
                  <div className="pin-circle delay2"></div>
                </div>
              </div>

              <h3>{food.name}</h3>

              <div className="hover-info">
                <p>100g serving</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
    </>
  );
}
