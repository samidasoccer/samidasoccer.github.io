import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Videos from './components/Videos';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Hero />
      <About />
      <Journey />
      <Videos />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;