import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

function Navbar() {
  return (
    <nav className="header-bar">
      <div className="brand">
        MYOTROPH
        <img
          src="logo.png"
          alt="Myotroph Logo"
          style={{ height: '65px', width: '65px', verticalAlign: 'middle' }}
        />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="animated-gradient-text">
            <span className="text-content">HOME</span>
          </Link>
        </li>

        <li className="dropdown">
          <div className="animated-gradient-text">
            <span className="text-content">CALCULATIONS ▾</span>
          </div>
          <ul className="menu-dropdown">
            <li><Link to="/bmi">BMI</Link></li>
            <li><Link to="/bmr">BMR</Link></li>
            <li><Link to="/calorie">Calorie Calculator</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/tracker" className="animated-gradient-text">
            <span className="text-content">TRACKER</span>
          </Link>
        </li>
        <li>
          <Link to="/Diet" className="animated-gradient-text">
            <span className="text-content">DIET-PLAN</span>
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="animated-gradient-text">
            <span className="text-content">CONTACT</span>
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
