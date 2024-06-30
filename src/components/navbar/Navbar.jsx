'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { routes } from './navbarPath';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex flex-wrap items-center md:justify-around p-4 bg-black text-white">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="font-semibold text-xl">Replicate Ai</h1>
        <button
          className="ml-auto md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} w-full md:w-auto mt-4 md:mt-0`}>
        {routes.map((route) => (
          <li key={route.name} className="text-xs text-center mb-2 md:ml-4 md:text-base bg-transparent rounded-lg px-2 py-2 hover:bg-[#404040] border border-[#525252]">
            <Link href={route.path} className="" onClick={closeMenu}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
