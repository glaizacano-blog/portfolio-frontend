import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = () => {
  return (
    <section className="flex flex-col justify-center items-center h-content-container">
      <h2 className="xs:w-4/5 sm:w-4/5 md:w-full lg:w-8/10 xl:w-4/5 2xl:w-2/3 font-medium xs:text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl text-center mb-12">
        I craft software and web solutions for problems that people are experiencing.
      </h2>
      <Link
        className="btn-view-projects btn-view-projects-hover"
        to="/projects"
      >
        View my work
      </Link>
    </section>
  );
};

export default ProjectSummary;
