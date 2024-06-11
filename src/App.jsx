import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import BookingDetailsPage from './components/BookingDetailsPage';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <div className="content">
      <Hero />
      <Main />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book/:packageName" element={<BookingPage />} />
            <Route path="/booking-details" element={<BookingDetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
