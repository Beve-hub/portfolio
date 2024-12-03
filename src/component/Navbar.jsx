import React, { useState } from 'react';
import { links } from '../data';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/logo.png';
import CV from '../Images/fullstack.pdf';
import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full h-[5rem] z-50 bg-[--tetiary-color] sm:grid">
      <div className="flex  items-center justify-between  m-[10px] lg:mx-[10rem] ">
        <a href="/" className="p-1 bg-slate-900 rounded-full border-r-4 shadow-slate-50">
          <img src={Logo} alt="" className="h-[3rem] w-[3rem]" />
        </a>

        <div className="md:flex hidden items-center">
          <ul className="py-6 px-12 items-center gap-8 text-md flex">
            {links.map(({ name, path }, index) => (
              <li key={index}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
          <div className="bg-black text-white text-sm w-[10rem] h-8 flex justify-center py-2 px-5 gap-4 rounded-md">
            <p>
              <a href={CV} download>
                Download CV
              </a>
            </p>
          </div>
        </div>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden block bg-[var(--gray-color)] text-[var(--primary-color)] p-2  focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        <HiMenuAlt3 />
        
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-[--tetiary-color] md:hidden block absolute top-[5rem] left-0 w-full shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map(({ name, path }, index) => (
              <li key={index} className="text-md">
                <NavLink to={path} onClick={() => setIsMenuOpen(false)}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="bg-black text-white text-sm w-[80%] mx-auto h-8 flex justify-center py-2 px-5 gap-4 rounded-md">
            <p>
              <a href={CV} download>
                Download CV
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
