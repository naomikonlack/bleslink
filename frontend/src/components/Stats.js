// src/components/Stats.js
import React from 'react';
import '../styles/Stats.css';

const Stats = () => (
  <section className="stats">
    <div className="stat">
      <i className="fas fa-suitcase"></i>
      <h3>1000k+</h3>
      <p>Travel matches made</p>
    </div>
    <div className="stat">
      <i className="fas fa-map-marker-alt"></i>
      <h3>5k+</h3>
      <p>Shipping Destinations</p>
    </div>
    <div className="stat">
      <i className="fas fa-shield-alt"></i>
      <h3>4.0</h3>
      <p>Trust score</p>
    </div>
  </section>
);

export default Stats;
