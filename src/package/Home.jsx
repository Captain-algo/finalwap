import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from '../package/Footer';
import '../pages/Home.css';
import FrontAnatomyChart from '../package/FrontAnatomyChart';
import BackAnatomyChart from '../package/BackAnatomyChart';
import { Link } from 'react-router-dom';

function Home() {
  const animatedTextRef = useRef(null);

  useEffect(() => {
    const text = "WANNA BUILD MUSCLES ?";
    const container = animatedTextRef.current;
    if (!container) return;

    container.innerHTML = "";

    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      container.appendChild(span);
      setTimeout(() => {
        span.classList.add("visible");
      }, i * 100);
    });
  }, []);

  const steps = [
    {
      icon: "⬇️",
      title: "Calculations",
      description: "Check your BMI and BMR to find your perfect weekly plan.",
    },
    {
      icon: "🔗",
      title: "Workout",
      description: "On the basis of your results find your workout plan",
    },
    {
      icon: "🍽️",
      title: "Diet",
      description: "Improve your diet and find your protein intake",
    },
    {
      icon: "⏱️",
      title: "Track your progress",
      description: "Track your weight on monthly basis for improvement",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="hero-section">
        <canvas id="beamCanvas"></canvas>
        <div id="animated-text" className="split-text" ref={animatedTextRef}></div>
      </section>

      <div className="scroll-down-wrapper">
        <div
          className="scroll-down"
          onClick={() => document.getElementById('anatomy-section').scrollIntoView({ behavior: 'smooth' })}
        >
          ↓ Scroll Down
        </div>
      </div>

      <section id="How" className="How-section">
        <div className="container">
          <h2>How it Works</h2>
          <p className="subtitle">
            Myotroph helps you to get in your best shape.
          </p>
          <div className="steps">
            {steps.map((step, index) => (
              
            
              <div className="step-wrapper" key={index}>
                <div className="step">
                  <div className="icon-wrapper">
                    <span className="icon">{step.icon}</span>
                  </div>
                  <h3 className="step-label">Step {index + 1}</h3>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
                {index !== steps.length - 1 && (
                  <div className="connector">
                    <span className="dot"></span>
                    <span className="line"></span>
                    <span className="dot"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <h1
  style={{
    background: "linear-gradient(to right, white, rgba(255,255,255,0.3))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "underline",
  }}
>
  BODY-MUSCLES
</h1>

      <section id="anatomy-section" style={{ backgroundColor: "black" }} className="anatomy-section">
        <div className="anatomy-chart front">
          <FrontAnatomyChart />
        </div>
        <div className="anatomy-chart back">
          <BackAnatomyChart />
        </div>
      </section>


      <Footer />
    </>
  );
}

export default Home;

