import React, { useEffect, useState } from 'react';
import '../Styling/BookingDetailsPage.css';

const BookingDetailsPage = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const storedBookingDetails = localStorage.getItem('bookingDetails');
    if (storedBookingDetails) {
      setBookingDetails(JSON.parse(storedBookingDetails));
    }
  }, []);

  if (!bookingDetails) {
    return <p>No booking details available.</p>;
  }

  return (
    <section className="booking-details-page">
      <h2>Booking Details</h2>
      <p><strong>Name:</strong> {bookingDetails.name}</p>
      <p><strong>Email:</strong> {bookingDetails.email}</p>
      <p><strong>Package:</strong> {bookingDetails.packageName}</p>
      <p><strong>Date:</strong> {bookingDetails.date}</p>
      <p><strong>Time:</strong> {bookingDetails.time}</p>
      <p><strong>Price:</strong> USD {bookingDetails.price}</p>
    </section>
  );
};

export default BookingDetailsPage;
