import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styling/BookingPage.css';

const prices = {
  'Package 1': 300,
  'Package 2': 250,
  'Package 3': 200,
};

const BookingPage = () => {
  const { packageName } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = { ...formData, packageName, price: prices[packageName] };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    navigate('/booking-details');
  };

  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 6 || day === 0;
  };

  return (
    <section className="booking-page">
      <h2>Book {packageName}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date (Weekends only)</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
          {!isWeekend(formData.date) && formData.date && (
            <p className="error">Please select a weekend date.</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="time">Time (8am - 12pm)</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            min="08:00"
            max="12:00"
          />
        </div>
        <button type="submit" disabled={!isWeekend(formData.date)}>Submit</button>
      </form>
    </section>
  );
};

export default BookingPage;
