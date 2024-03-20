import React from 'react';
import ProjectList from './ProjectList';

const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center xxs:py-12 xs:py-12 sm:py-12 md:py-16 lg:py-16 xl:py-24 2xl:py-24 mt-20">
      <h2 className="font-semibold xxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center uppercase xxs:mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
        Projects
      </h2>
      <div className="divider-gradient-md"></div>
      <div className="flex flex-wrap justify-center items-center xxs:my-3 xs:my-3 sm:my-3 md:my-3 lg:my-8 xl:my-4 2xl:my-4">
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
