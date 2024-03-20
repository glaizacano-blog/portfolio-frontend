import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = () => {
  return (
    <section className="flex flex-col justify-center items-center xxs:my-6 xs:my-6 sm:my-6 md:my-6 lg:my-12 xl:my-12 2xl:my-12 xs:py-24 sm:py-24 md:py-24 lg:py-24 xl:py-24 2xl:py-24">
      <h2 className="font-medium xxs:text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center xxs:w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-10/12 2xl:w-10/12 my-8">
        I craft software and web solutions for problems that people are
        experiencing.
      </h2>
      <Link
        className="btn-view-projects btn-view-projects-hover xxs:my-3 xs:my-3 sm:my-3 md:my-3 lg:my-4 xl:my-4 2xl:my-4"
        to="/projects"
      >
        View my work
      </Link>
    </section>
  );
};

export default ProjectSummary;
