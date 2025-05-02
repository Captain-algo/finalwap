
import React, { useState, useEffect } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import Navbar from './Navbar';
import '../pages/Home.css';
import '../pages/Bmi.css';

const Bmi = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

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

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));
    }
  };

  const getStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const getRecommendation = (bmi) => {
    if (bmi < 18.5) return 'BRO! GAIN SOME WEIGHT';
    if (bmi < 25) return 'BUILD MUSCLES';
    if (bmi < 30) return 'TRY TO LOSE LITTLE WEIGHT';
    return 'I THINK YOU SHOULD GO TO THE GYM';
  };

  return (

    <>
          <Navbar />
          
          <h1 style={{color:'white',marginTop:'20px',marginLeft:'20px',textDecoration:'underline'}}>Body Mass Index</h1>
          <h2 style={{color:'white',marginTop:'10px',marginLeft:'20px',textAlign:'center'}}> A calculation that uses your weight and height to estimate body fat.</h2>
      <div className="grid-background" />
      <div className="grid-overlay" />
      <div className="container">
        <h1>BMI Calculator</h1>

        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <div id="result">
            <div className="speedometer-container">
              <ReactSpeedometer
                value={bmi}
                minValue={10}
                maxValue={46}
                segments={5}
                segmentColors={['#bc2020', '#ffe400', '#008137', '#ffe400', '#bc2020']}
                customSegmentLabels={[
                  { text: 'Underweight', position: 'INSIDE', color: '#fff' },
                  { text: 'Normal', position: 'INSIDE', color: '#fff' },
                  { text: 'Overweight', position: 'INSIDE', color: '#fff' },
                  { text: 'Obese', position: 'INSIDE', color: '#fff' },
                  { text: 'Severe', position: 'INSIDE', color: '#fff' },
                ]}
                needleColor="#000"
                needleHeightRatio={0.7}
                valueTextFontSize="22px"
                ringWidth={30}
                width={300}
                height={180}
                currentValueText={`BMI = ${bmi}`}
              />
            </div>
            <div className="bmi-result">
              <h2>Your BMI is {bmi}</h2>
              <p>Status: {getStatus(bmi)}</p>
            </div>
            <div className="recommendation">
              <p>Recommendation: <strong>{getRecommendation(bmi)}</strong></p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Bmi;
