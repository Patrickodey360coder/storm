import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './pages/Services';
import About from './pages/About';
import Team from './pages/Team';

function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Team />
    </>
  )
}

export default Main

if (document.getElementById('app')) {
  ReactDOM.render(<Main />, document.getElementById('app'));
}