import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#496f8b] to-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
        <div className="flex flex-col items-start">
            <Link to="/" className="text-white text-2xl font-bold leading-tight">
              Recruitment
              <span className="block text-xs text-right bg-gradient-to-r from-indigo-500 w-full">We help you grow</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:underline  px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/job-seeker" className="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">
                Job Seeker
              </Link>
              <Link to="/hr" className="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">
                HR
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" bg-white text-black inline-flex items-center justify-center p-1 rounded-md  hover:bg-black-900 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/job-seeker" className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium">
              Job Seeker
            </Link>
            <Link to="/hr" className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium">
              HR
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
