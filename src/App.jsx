import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Suites from './components/Suites';
import Footer from './components/Footer';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Features />
      <Suites />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
