import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const profileIcon = require("./glaiza_cano.png");

const AboutSummary = () => {
  return (
    <section className="flex flex-col justify-center items-center xxs:my-6 xs:my-6 sm:my-6 md:my-6 lg:my-12 xl:my-12 2xl:my-12">
      <div className="flex flex-col justify-center items-center xxs:w-full xs:w-full sm:w-full md:w-full lg:w-w-4/5 xl:w-4/5 2xl:w-6/10">
        <h2 className="font-semibold xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center uppercase my-2">
          About Me
        </h2>
        <img
          src={profileIcon}
          alt="Glaiza Cano"
          className="border-4 border-gray-200 rounded-full w-32 xxs:my-3 xs:my-3 sm:my-3 md:my-3 lg:my-4 xl:my-4 2xl:my-4"
        />
        <SocialLinks />
        <div className="">
          <p className="xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl my-8">
            As the name says, I'm Glaiza Cano. I'm a final year undergraduate
            Computer Science student, majoring in Software Development at
            Swinburne University of Technology. I'm pursuing a career in
            Software Engineering as I'm inspired by how technology is changing
            the world, disrupting industries, and igniting social change.
          </p>
          <p className="xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl my-8">
            I enjoy creative problem-solving and would like to leverage my
            interpersonal, problem-solving, collaboration, and technical skills
            to craft software solutions for problems that people are
            experiencing as technology has always existed for the sole purpose
            of creating a better life for people.
          </p>
        </div>
        <Link className="btn-view-projects btn-view-projects-hover xxs:my-3 xs:my-3 sm:my-3 md:my-3 lg:my-4 xl:my-4 2xl:my-4" to="/about">
          Read more
        </Link>
      </div>
    </section>
  );
};

export default AboutSummary;
