import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../package/Navbar';
import { Chart } from 'chart.js/auto';
import '../pages/Home.css'; 

const Tracker = () => {
  const [weightData, setWeightData] = useState(() => {
    const savedData = localStorage.getItem('weightData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const chartRef = useRef(null);

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

  useEffect(() => {
    const ctx = document.getElementById('weightChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: weightData.map((entry) => entry.date),
        datasets: [
          {
            label: 'Weight (kg)',
            data: weightData.map((entry) => entry.weight),
            fill: false,
            borderColor: '#00d9ff',
            tension: 0.2,
            pointBackgroundColor: '#00d9ff',
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: { color: '#f0f0f0' },
            grid: { color: '#333' },
          },
          y: {
            ticks: { color: '#f0f0f0' },
            grid: { color: '#333' },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.labels = weightData.map((entry) => entry.date);
      chartRef.current.data.datasets[0].data = weightData.map((entry) => entry.weight);
      chartRef.current.update();
    }
  }, [weightData]);

  const updateRecords = () => {
    return weightData.map((entry, index) => (
      <li key={index}>{entry.date} - {entry.weight} kg</li>
    ));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const weight = parseFloat(e.target.weight.value);

    const newWeightData = [...weightData, { date, weight }].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    setWeightData(newWeightData);
    localStorage.setItem('weightData', JSON.stringify(newWeightData));
    e.target.reset();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data?')) {
      setWeightData([]);
      localStorage.removeItem('weightData');
    }
  };

  return (
    <>
          <Navbar />
          <h2 style={{color:'white',marginTop:'10px',marginLeft:'20px',textAlign:'center'}}>This Tracker help you to track your weight over period of time.</h2>
      <div className="grid-background" />
      <div className="grid-overlay" />
      <div className="container">
        <h1>Weight Tracker</h1>
        <form id="tracker-form" onSubmit={handleFormSubmit}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="weight">Current Weight (kg):</label>
          <input type="number" id="weight" name="weight" step="0.1" required />

          <button type="submit">Add Entry</button>
          <button type="button" id="reset-btn" onClick={handleReset}>
            Reset Tracker
          </button>
        </form>

        <div id="chart-container">
          <canvas id="weightChart"></canvas>
        </div>

        <h2>Previous Records</h2>
        <ul id="records-list">{updateRecords()}</ul>
      </div>
    </>
  );
};

export default Tracker;
