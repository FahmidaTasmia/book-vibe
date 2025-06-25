import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Active link style for desktop
  const getDesktopNavLinkStyle = ({ isActive }) => {
    return isActive
      ? "text-green-600 border border-green-500 rounded-md bg-white hover:bg-green-50"
      : "text-gray-700 hover:text-black";
  };

  // Active link style for mobile
  const getMobileNavLinkStyle = ({ isActive }) => {
    return isActive
      ? "bg-green-50 text-green-600 font-medium border-l-4 border-green-500"
      : "text-gray-700 hover:bg-gray-50";
  };

  // Desktop navigation links
  const desktopLinks = (
    <ul className="flex space-x-4">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 font-medium text-lg transition-all duration-300 ${getDesktopNavLinkStyle({ isActive })}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/readList"
          className="px-4 py-2 font-medium text-lg text-gray-700 hover:text-black transition-colors duration-300"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="px-4 py-2 font-medium text-lg text-gray-700 hover:text-black transition-colors duration-300"
        >
          Pages To Read
        </NavLink>
      </li>
    </ul>
  );

  // Mobile navigation links
  const mobileLinks = (
    <ul className="flex flex-col space-y-1">
      <li>
        <NavLink
          to="/"
          className={getMobileNavLinkStyle}
          onClick={closeMenu}
        >
          <span className="block px-4 py-3">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/readList"
          className={getMobileNavLinkStyle}
          onClick={closeMenu}
        >
          <span className="block px-4 py-3">Listed Books</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={getMobileNavLinkStyle}
          onClick={closeMenu}
        >
          <span className="block px-4 py-3">Pages To Read</span>
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className=" ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="text-2xl md:text-3xl font-bold text-black tracking-tight"
              onClick={closeMenu}
            >
              Book Vibe
            </NavLink>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            {desktopLinks}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <NavLink
              to="/signin"
              className="px-5 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-medium transition-colors duration-300 shadow-sm"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-5 py-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors duration-300 shadow-sm"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            {mobileLinks}
            <div className="pt-4 flex flex-col space-y-3">
              <NavLink
                to="/signin"
                className="px-4 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors duration-300 text-center"
                onClick={closeMenu}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-3 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 transition-colors duration-300 text-center"
                onClick={closeMenu}
              >
                Create Account
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;