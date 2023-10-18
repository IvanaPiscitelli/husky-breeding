import { useState } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-20 max-[959px]:p-2 p-1 z-10 absolute w-full text-white">
      <div className="container flex justify-between items-center ">
        {/* Logo Section */}
        <div className="logo ml-5">
          <a href="/" className="text-2xl font-bold">
            Logo
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:justify-center flex-grow">
          <Navigation />
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden mr-5">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="bg-black bg-opacity-50 absolute inset-x-0 top-full lg:hidden">
          <Navigation />
        </div>
      )}
    </header>
  );
};

export default Header;
