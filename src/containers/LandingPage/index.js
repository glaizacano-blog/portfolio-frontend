import React from 'react';
import Header from '../../components/UI/Header';
import AboutSummary from '../About/AboutSummary';
import ProjectSummary from '../Projects/ProjectSummary';

const Home = () => {
  return (
    <section className="h-full xxs:mx-8 xs:mx-8 sm:mx-12 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-24">
      <Header />
      <AboutSummary />
      <ProjectSummary />
    </section>
  );
};

export default Home;
