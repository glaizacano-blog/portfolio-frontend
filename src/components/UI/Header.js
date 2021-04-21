import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-start h-content-container">
      <h1 className="font-semibold md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl">
        Glaiza{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lightblue-600">
          Cano
        </span>
      </h1>
      <div className="flex flex-row font-medium md:text-5.25xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
        <div className="pr-3">The</div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Computer Science student.')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Full-stack Developer.')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Aspiring Software Engineer.')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Problem Solver.')
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
