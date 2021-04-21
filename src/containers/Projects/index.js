import React from 'react';
import ProjectList from './ProjectList';

const Projects = () => {
  return (
    <section className="mt-20 py-20 flex flex-col justify-center items-center w-full">
      <h2 className="font-semibold text-5xl uppercase text-center mb-2">
        Projects
      </h2>
      <div className="divider-gradient-md mb-6"></div>
      <div className="flex flex-wrap justify-center items-center">
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
