import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../pages/Home.css';
const Calorie = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const overlay = document.querySelector('.grid-overlay');
      if (overlay) {
        const scrollY = window.scrollY;
        overlay.style.opacity = `${Math.max(1 - scrollY / 400, 0)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateCalories = () => {
    if (!age || !gender || !height || !weight || !activity || !goal) {
      setResult('Please fill all fields.');
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenanceCalories = bmr * parseFloat(activity);
    const caloriePerKg = 7700;

    let goalCalories;

    switch (goal) {
      case 'maintain':
        goalCalories = maintenanceCalories;
        break;
      case 'lose-0.5':
        goalCalories = maintenanceCalories - (caloriePerKg * 0.5) / 7;
        break;
      case 'lose-1':
        goalCalories = maintenanceCalories - (caloriePerKg * 1) / 7;
        break;
      case 'lose-1.5':
        goalCalories = maintenanceCalories - (caloriePerKg * 1.5) / 7;
        break;
      case 'lose-2':
        goalCalories = maintenanceCalories - (caloriePerKg * 2) / 7;
        break;
      default:
        goalCalories = maintenanceCalories;
        break;
    }

    setResult(`Daily calorie target for your goal is: ${Math.round(goalCalories)} kcal/day`);
  };

  return (
    <>
      <Navbar />
      <h2 style={{color:'white',marginTop:'10px',marginLeft:'20px',textAlign:'center'}}>This calculator estimates the number of calories you should eat daily to maintain your weight based on your age, size, sex, and activity level.</h2>
      <div className="grid-background" />
      <div className="grid-overlay" />
  
      <div className="container">
        <h1>Calorie Intake</h1>

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label htmlFor="weight">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label htmlFor="activity">Activity Level</label>
        <select
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="">Select Activity Level</option>
          <option value="1.4">Sedentary (little or no exercise)</option>
          <option value="1.5">Lightly active (light exercise 1-3 days/week)</option>
          <option value="1.7">Moderately active (moderate exercise 3-5 days/week)</option>
          <option value="1.9">Very active (hard exercise 6-7 days/week)</option>
        </select>

        <label htmlFor="goal">Goal</label>
        <select
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="">Select Goal</option>
          <option value="maintain">Maintain Weight</option>
          <option value="lose-0.5">Lose 0.5 kg/week</option>
          <option value="lose-1">Lose 1 kg/week</option>
          <option value="lose-1.5">Lose 1.5 kg/week</option>
          <option value="lose-2">Lose 2 kg/week</option>
        </select>

        <button onClick={calculateCalories}>Calculate Calories</button>

        {result && (
          <div id="result">
            <h2>Result</h2>
            <p style={{ fontSize: '1.5em', color: '#00bfff' }}>{result}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Calorie;
