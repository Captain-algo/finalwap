import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';
const Bmr = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
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

  const calculateBMR = (e) => {
    e.preventDefault();

    if (!age || !gender || !height || !weight) {
      setResult('Please fill all fields.');
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setResult(`${Math.round(bmr)} Calories/day. Calories your body needs at rest.`);
  };

  return (
    <>
    <Navbar />
              <h1 style={{color:'white',marginTop:'20px',marginLeft:'20px',textDecoration:'underline'}}>Basal Metabolic Rate</h1>
              <h2 style={{color:'white',marginTop:'10px',marginLeft:'20px',textAlign:'center'}}>The amount of energy your body needs to function at rest, maintaining basic life processes like breathing, cell growth, and circulation</h2>
      <div className="grid-background" />
      <div className="grid-overlay" />

      <div className="container">
        <h1>BMR Calculator</h1>
        <form onSubmit={calculateBMR}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            min="10"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />

          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <button type="submit">Calculate BMR</button>
        </form>

        {result && (
          <div id="result">
            <h2>Your BMR is</h2>
            <p style={{ fontSize: '1.5em', color: '#00bfff' }}>{result}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Bmr;
