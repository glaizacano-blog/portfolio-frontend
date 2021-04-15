import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <section className="md:w-4/5 lg:w-4/5 xl:w-4/5 2xl:w-4/5 md:mx-8 lg:mx-12 xl:mx-12 2xl:mx-12 md:px-8 lg:px-12 xl:px-12 2xl:px-12 h-screen">
      <div className="flex flex-col justify-center items-start h-full bg-white">
        <h1 className="font-medium md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl">
          Glaiza <span className="text-cyan-600">Cano</span>
        </h1>
        <div className="flex flex-row font-normal md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
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
    </section>
  );
};

export default Header;
