import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../containers/LandingPage';
import About from '../containers/About';
import Projects from '../containers/Projects';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } index />
      <Route path="/about" element={ <About/> } />
      <Route path="/projects" element={ <Projects/> } />
    </Routes>
  );
};

export default Routing;
