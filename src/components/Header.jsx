import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import { social } from "../utils/const";
import Toggle from "./Toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !burgerButtonRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black bg-opacity-20 max-[959px]:p-2 p-1 z-10 absolute w-full text-white">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo ml-10">
          <a href="/" className="text-2xl font-bold">
            Logo
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-grow items-center">
          <div ref={menuRef} className="flex-grow z-50">
            <Navigation isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden mr-5">
          <button ref={burgerButtonRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
        <div className="hidden lg:block">
          <Toggle />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="bg-black bg-opacity-50 absolute inset-x-0 top-full lg:hidden z-50">
          <Navigation isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
          <div className="lg:hidden flex space-x-4 mr-5 border-b lg:border-b-0 border-gray-500 cursor-pointer transition-all hover:font-bold pt-3 pb-2 pl-4">
            {social.map((item) => (
              <a key={item.id} href={item.href} className={`${item.icon}-icon block`}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:hidden pt-3 pb-2 pl-4">
            <Toggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
