import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/app.css';
import ScrollToTop from '../components/UI/ScrollToTop';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';
import Home from './LandingPage';
import About from './About';
import Projects from './Projects';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="z-0">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
