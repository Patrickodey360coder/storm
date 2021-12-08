import React from 'react';
import Navbar from './Navbar';
import Services from './pages/Services';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './Footer';
import Slider from './Slider';

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
