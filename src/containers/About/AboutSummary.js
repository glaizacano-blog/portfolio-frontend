import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import ProfileIcon from './glaiza_cano.png';
// import { ProfileIcon } from '../../../public/assets';

const AboutSummary = () => {
  return (
    <section className="flex flex-col justify-center items-center h-content-container">
      <div className="flex flex-col justify-center items-center xs:w-4/5 sm:w-4/5 md:w-full lg:w-8/10 xl:w-4/5 2xl:w-2/3">
        <h2 className="font-semibold xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center uppercase mb-2">
          About Me
        </h2>
        <img src={ProfileIcon} alt="Glaiza Cano" className="border-4 border-gray-200 rounded-full w-32 mt-6 mb-4" />
        <SocialLinks />
        <div className="mb-4">
          <p className="text-xl mt-4 mb-6">
            As the name says, I'm Glaiza Cano. I'm a final year undergraduate
            Computer Science student, majoring in Software Development at
            Swinburne University of Technology. I'm pursuing a career in
            Software Engineering as I'm inspired by how technology is changing
            the world, disrupting industries, and igniting social change.
          </p>
          <p className="text-xl mb-4">
            I enjoy creative problem-solving and would like to leverage my
            interpersonal, problem-solving, collaboration, and technical skills
            to craft software solutions for problems that people are
            experiencing as technology has always existed for the sole purpose
            of creating a better life for people.
          </p>
        </div>
        <Link className="btn-view-projects btn-view-projects-hover" to="/about">
          Read more
        </Link>
      </div>
    </section>
  );
};

export default AboutSummary;
