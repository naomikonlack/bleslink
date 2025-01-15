// src/pages/LandingPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
// import MapSection from '../components/MapSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleRegisterClick = () => setShowRegister(true);
  const closeModal = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <div>
      <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      {/* <MapSection /> */}
      <FAQ />
      <Footer />

      {/* Conditional rendering for login and register modals */}
      {showLogin && <LoginModal onClose={closeModal} />}
      {showRegister && <RegisterModal onClose={closeModal} />}
    </div>
  );
};

export default LandingPage;
