import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-start xxs:py-36 xs:py-36 sm:py-40 md:py-44 lg:p-0 xl:p-0 2xl:p-0 mt-20 xxs:h-full xs:h-full sm:h-full md:h-full lg:h-screen xl:h-screen 2xl:h-screen">
      <h1 className="font-semibold xxs:text-3xl xs:text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl">
        Glaiza{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lightblue-600">
          Cano
        </span>
      </h1>
      <div className="flex flex-row font-medium xxs:text-lg xs:text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
        <div className="xxs:pr-1 xs:pr-1 sm:pr-2 md:pr-3 lg:pr-3 xl:pr-3 2xl:pr-3">
          The
        </div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Software Engineer.')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Aspiring Full-stack Developer.')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Computer Science Graduate.')
              .pauseFor(2500)
              .start();
          }}
          options={{
            deleteSpeed: 125,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
