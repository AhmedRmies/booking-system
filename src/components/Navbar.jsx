import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">XD Booking System</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><a href="#pricing">Book</a></li>
        <li><Link to="/booking-details">Booking Details</Link></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
