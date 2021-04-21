import React from 'react';
import Header from '../../components/UI/Header';
import AboutSummary from '../About/AboutSummary';
import ProjectSummary from '../Projects/ProjectSummary';

const Home = () => {
  return (
    <section className="mt-20 pt-20 md:mx-8 lg:mx-12 xl:mx-12 2xl:mx-12 md:px-8 lg:px-12 xl:px-12 2xl:px-12 h-full">
      <Header />
      <AboutSummary />
      <ProjectSummary />
    </section>
  );
};

export default Home;
