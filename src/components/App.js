import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/app.css';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="py-20 z-0">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
