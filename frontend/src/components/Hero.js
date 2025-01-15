// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to TravelPal</h1>
        <p>Connect with fellow travelers, share extra luggage space, and make new friends on your journeys.</p>
        <div className="search-box">
          <input type="text" placeholder="Where do you want to send your package?" />
          <button>Search</button>
        </div>
        <div className="arrow-down">&#x2193;</div>
      </div>
    </div>
  );
};

export default Hero;
