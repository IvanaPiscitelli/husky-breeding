import { useState } from "react";
import useResize from "../hooks/useResize";

const Toggle = () => {
  const windowWidth = useResize();
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => {
    setIsToggle(!isToggle);
  };
  const unique = windowWidth > 959 ? "toggle-desktop" : "toggle-mobile";
  return (
    <div className="relative w-20 mr-10">
      <label htmlFor={unique} className="flex items-center cursor-pointer">
        <input type="checkbox" id={unique} className="sr-only" onChange={toggle} checked={isToggle} />
        <div className="block bg-gray-600 w-full h-8 rounded-full">
          <div
            className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              isToggle ? "transform translate-x-12" : ""
            }`}
          ></div>
          <div
            className={`absolute inset-y-0 left-0 flex items-center pl-2.5 ${
              isToggle ? "text-white" : "text-gray-700"
            } font-bold text-xs`}
          >
            IT
          </div>
          <div
            className={`absolute inset-y-0 right-0 flex items-center pr-2 ${
              isToggle ? "text-gray-700" : "text-white"
            } font-bold text-xs`}
          >
            EN
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
