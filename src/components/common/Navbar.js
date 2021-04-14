import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: 'about',
  },
  {
    label: 'Projects',
    link: 'projects',
  },
];

const NavItems = () =>
  menuItems.map(({ label, link }) => {
    return (
      <div key={label}>
        <Link
          className="font-semibold text-xl uppercase text-gray-800 hover:text-cyan-600 p-4"
          to={link}
        >
          {label}
        </Link>
      </div>
    );
  });

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full shadow-md bg-white z-10">
      <nav className="flex flex-row justify-between items-center h-20">
        <div className="flex justify-start">
          <Link
            className="font-semibold text-2xl text-black hover:text-cyan-700 mx-20"
            to="/"
          >{`<GlaizaCano/>`}</Link>
        </div>
        <div className="xs:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex justify-center items-center mx-20">
          <NavItems />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
