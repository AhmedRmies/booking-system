import React from 'react';
import '../Styling/Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h2>Our Pricing</h2>
      <p>Support our students by renting our packages every weekend from 8am to 12pm.</p>
      <div className="price-table">
        <div className="price-card">
          <h3>Package 1</h3>
          <p>Includes: Swimming Pool x 1, Football Fields x 2</p>
          <p>USD 300 per day</p>
        </div>
        <div className="price-card">
          <h3>Package 2</h3>
          <p>Includes: Tennis Court x 3, Slazenger Tennis Balls x pack of 3’s</p>
          <p>USD 250 per day</p>
        </div>
        <div className="price-card">
          <h3>Package 3</h3>
          <p>Includes: Volleyball Court x 3</p>
          <p>USD 200 per day</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
