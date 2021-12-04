import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './pages/Services';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
