// src/Navbar.js
import React, { useState } from 'react';
import Subtract from '../assets/Subtract-white.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md mb-16 pt-4">

      <div className="max-w-7xl  mx-auto">

        <div className="flex justify-between items-center h-16">

          <div className="text-xl font-bold">
            <img src={Subtract} className='hover:scale-105 transition-all' alt="subtract" width={35} height={35} />
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-[#38b6ff]">HOME</a>

            <a href="#biography" className="text-white hover:text-[#38b6ff]">BIOGRAPHY</a>

            <a href="#experience" className="text-white hover:text-[#38b6ff]">EXPERIENCE</a>

            <a href="#project" className="text-white hover:text-[#38b6ff]">PROJECT</a>
            
            <a href="#testimonial" className="text-white hover:text-[#38b6ff]">TESTIMONIAL</a>
          </div>

          <div className="md:hidden ">
            <button onClick={toggleMenu} className="p-2 text-white hover:tewhite">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        </div>

      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>

        <div className="px-2 pt-2 pb-3 space-y-1">

          <a href="#home" className="block text-white hover:text-[#38b6ff]">HOME</a>

          <a href="#biography" className="block text-white hover:text-[#38b6ff]">BIOGRAPHY</a>

          <a href="#experience" className="block text-white hover:text-[#38b6ff]">EXPERIENCE</a>

          <a href="#project" className="block text-white hover:text-[#38b6ff]">PROJECT</a>

          <a href="#testimonial" className="block text-white hover:text-[#38b6ff]">TESTIMONIAL</a>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
