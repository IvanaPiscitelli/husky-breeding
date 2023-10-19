import { useState } from "react";
import Navigation from "./Navigation";
import { social } from "../utils/const";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-20 max-[959px]:p-2 p-1 z-10 absolute w-full text-white">
      <div className="flex justify-between items-center ">
        {/* Logo Section */}
        <div className="logo ml-10">
          <a href="/" className="text-2xl font-bold">
            Logo
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-grow items-center">
          <div className="flex-grow">
            <Navigation />
          </div>
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

        <div className="hidden lg:flex space-x-4 mr-10 cursor-pointer transition-all hover:font-bold">
          {social.map((item) => (
            <a key={item.id} href={item.href} className={`${item.icon}-icon block`}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="bg-black bg-opacity-50 absolute inset-x-0 top-full lg:hidden">
          <Navigation />
          <div className="lg:hidden flex space-x-4 mr-5 border-b lg:border-b-0 border-gray-500 cursor-pointer transition-all hover:font-bold pt-3 pb-2 pl-4">
            {social.map((item) => (
              <a key={item.id} href={item.href} className={`${item.icon}-icon block`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
