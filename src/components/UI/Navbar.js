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
      <Link
        key={label} className="font-bold text-xl uppercase text-gray-800 hover:text-gray-600 transition duration-1000 ease-in-out pb-1 mx-4 mt-2 mb-1 middle-underline"
        to={link}
      >
        {label}
      </Link>
    );
  });

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full shadow-md bg-white z-10">
      <nav className="flex flex-row xs:justify-center sm:justify-center justify-between items-center h-20">
        <Link
          className="font-bold text-2xl text-gray-800 hover:text-gray-600 transition duration-1000 ease-in-out md:mx-16 lg:mx-24 xl:mx-24 2xl:mx-24"
          to="/"
        >{`<GlaizaCano/>`}</Link>
        <div className="xs:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex justify-center items-center mx-24">
          <NavItems />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
