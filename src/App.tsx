import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.css';
import ScrollToTop from './components/UI/ScrollToTop';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import Routing from './components/Routing';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="z-0">
          <Routing />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
