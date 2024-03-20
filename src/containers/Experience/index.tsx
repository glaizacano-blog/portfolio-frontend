import React from 'react';
import ExperienceList from './ExperienceList';

const Experience = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="font-semibold xxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center uppercase mb-4">
        Experience
      </h2>
      <div className="divider-gradient-md"></div>
      <div className="flex flex-wrap justify-center items-center xxs:my-3 xs:my-3 sm:my-3 md:my-3 lg:my-8 xl:my-4 2xl:my-4">
        <ExperienceList />
      </div>
    </section>
  );
};

export default Experience;
