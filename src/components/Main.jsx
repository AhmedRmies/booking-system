import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Main.css';

const Main = () => {
  const navigate = useNavigate();

  const handleBook = (packageName) => {
    navigate(`/book/${packageName}`);
  };

  return (
    <section className="main" id="pricing">
      <h2>Rent Our Packages</h2>
      <p>Your support helps us provide essential education and supplies to disadvantaged students.</p>
      <div className="packages">
        <div className="package">
          <h3>Package 1</h3>
          <p>Includes: Swimming Pool x 1, Football Fields x 2</p>
          <button onClick={() => handleBook('Package 1')}>Book</button>
        </div>
        <div className="package">
          <h3>Package 2</h3>
          <p>Includes: Tennis Court x 3, Slazenger Tennis Balls x pack of 3’s</p>
          <button onClick={() => handleBook('Package 2')}>Book</button>
        </div>
        <div className="package">
          <h3>Package 3</h3>
          <p>Includes: Volleyball Court x 3</p>
          <button onClick={() => handleBook('Package 3')}>Book</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
