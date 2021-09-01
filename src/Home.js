import React from 'react';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import rock_landscape from './images/rock_landscape.jpg';

const Home = () => {
  return (
    <div className="App">
      <div className="banner-image">
        <img src={rock_landscape} alt="rocky landscape" className="width-100" />
      </div>
      <p id="hidden-banner-text">Just a nice photo I took...</p>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
