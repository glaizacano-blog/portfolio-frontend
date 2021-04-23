import React from 'react';
import Experience from '../Experience';

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center xxs:py-12 xs:py-12 sm:py-12 md:py-16 lg:py-16 xl:py-24 2xl:py-24 mt-20 w-full">
      <div className="w-5/6 flex flex-col justify-center items-center">
        <h2 className="font-semibold xxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center uppercase xxs:mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
          About
        </h2>
        <div className="divider-gradient-sm"></div>
        <div className="xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl xxs:mb-6 xs:mb-6 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-8">
          <p className="xxs:my-6 xs:my-6 sm:my-6 md:my-6 lg:my-8 xl:my-8 2xl:my-8">
            I'm currently working as a Support Developer at the Department of
            Premier and Cabinet (Victoria). I have about a year of industry
            experience in full-stack web development and over two years of
            coaching and mentoring experience in coding and robotics
            after-school classes and holiday programs to primary and secondary
            school students.
          </p>
          <p className="xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl xxs:my-6 xs:my-6 sm:my-6 md:my-6 lg:my-8 xl:my-8 2xl:my-8">
            I work mainly with JavaScript and React.js, and I'm currently
            teaching myself Vue.js, Docker, and Kubernetes. My main areas of
            interest are Front-end Development, Mobile App Development, and User
            Interface Design, but I'm also exploring Back-end Development and
            DevOps. 👩🏻‍💻
          </p>
        </div>
      </div>
      <div className="w-5/6 flex flex-col justify-center items-center">
        <h3 className="font-semibold xxs:text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-center uppercase mb-4">
          My journey into the tech industry
        </h3>
        <div className="divider-gradient-xxl"></div>
        <div className="xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl xs:mb-6 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-8">
          <p className="xxs:my-6 xs:my-6 sm:my-6 md:my-6 lg:my-8 xl:my-8 2xl:my-8">
            From a young age, I was fascinated by video games. I remember
            borrowing my cousin's{' '}
            <span className="font-medium italic">Game Boy Advance</span> and
            playing <span className="font-medium italic">Pokémon</span> and{' '}
            <span className="font-medium italic">
              Crash Bandicoot: The Huge Adventure
            </span>{' '}
            for hours on end. What got me hooked is the experience of being
            taken into different worlds where I could escape from reality.
          </p>
          <p className="xxs:my-6 xs:my-6 sm:my-6 md:my-6 lg:my-8 xl:my-8 2xl:my-8">
            Studying IT and programming subjects throughout high school further
            developed my interest in technology. In 2014, I participated in{' '}
            <a href="https://code.org/" target="_blank" rel="noreferrer">
              <span className="font-medium italic">Code.org</span>
            </a>
            's Hour of Code, and learned how to make a 2D maze game and a
            platform game through a software called{' '}
            <span className="font-medium italic">GameMaker Studio</span>, which
            sparked my interest in game design and development. After graduating
            from secondary school, I completed a Diploma in Information
            Technology where I learned the fundamentals of programming in C and
            developing websites from scratch using HTML, CSS, JavaScript, PHP,
            and MySQL. Upon completion of my Diploma, I continued my tertiary
            education and undertook a Bachelor's degree in Computer Science.
          </p>
          <p className="xxs:my-6 xs:my-6 sm:my-6 md:my-6 lg:my-8 xl:my-8 2xl:my-8">
            Although growing up it was dream of mine to become a Video Game
            Developer, I chose to major in Software Development as it is
            well-aligned with my career aspirations and ongoing interests in
            Software Engineering. The scope of work and continuous learning
            opportunities offered in the computer software industry appeals to
            me and there are also immense opportunities to be a part of
            cutting-edge technology and engage in rewarding, challenging,
            stimulating, and meaningful work that make an impact to the world.
          </p>
        </div>
      </div>
      <div className="w-5/6 flex flex-col justify-center items-center xxs:mb-6 xs:mb-6 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-8">
        <h3 className="font-semibold xxs:text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-center uppercase mb-4">
          Hobbies & Interests
        </h3>
        <div className="divider-gradient-lg"></div>
        <p className="xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl xxs:my-6 xs:my-6 sm:my-6 md:my-6 lg:my-8 xl:my-8 2xl:my-8">
          When I'm not coding, you can find me playing video games with friends,
          watching tennis tournaments and NBA games, and volunteering for
          non-for-profit organisations like Robogals Melbourne and STEM Sisters.
          I also enjoy hiking and travelling. I've travelled to five countries
          so far: Philippines, Australia, Brunei, Singapore, and New Zealand,
          and plan to visit South Korea and Japan next.
        </p>
      </div>
      <Experience />
    </section>
  );
};

export default About;
