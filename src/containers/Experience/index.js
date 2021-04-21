import React from 'react';
import ExperienceList from './ExperienceList';

const Experience = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-10">
      <h2 className="font-semibold text-5xl text-center uppercase mb-4">
        Experience
      </h2>
      <div className="divider-gradient-md mb-6"></div>
      <div className="flex flex-wrap justify-center items-center mt-4">
        <ExperienceList />
      </div>
    </section>
  );
};

export default Experience;
