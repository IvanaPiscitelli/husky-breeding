import "../../src/index.css";
import useResize from "../hooks/useResize";
import { navigation } from "../utils/const";
import Male from "../pages/Male";
import { social } from "../utils/const";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const Navigation = ({ isDropdownOpen, toggleDropdown }) => {
  const windowWidth = useResize();
  return (
    <nav className="mr-4 w-full">
      <ul className="flex justify-center h-full flex-col lg:flex-row space-y-4 lg:space-y-0 lg:m-2">
        {navigation.map((item) => (
          <li
            key={item.id}
            onClick={item.name === "Our Dogs" ? toggleDropdown : null}
            className="underline-effect border-b lg:border-b-0 border-gray-500 cursor-pointer transition-all hover:font-bold pt-1"
          >
            <a href={item.href} className={`${item.id === 1 ? "mt-5 lg:mt-0" : ""} block px-4 pb-2`}>
              {item.name}
            </a>
            {item.name === "Our Dogs" && <span className="lg:hidden">{isDropdownOpen ? "−" : "+"}</span>}
            {item.name === "Our Dogs" && (
              <span className="hidden lg:inline-block -top-4 left-3 arrow">
                {isDropdownOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
              </span>
            )}

            {windowWidth > 959
              ? item.name === "Our Dogs" &&
                isDropdownOpen && (
                  <div className="dropdown-menu">
                    <li className="lg:underline-effect border-b lg:border-b-0 border-gray-500 transition-all pb-1 ml-4 mt-2 cursor-pointer">
                      <a href="/male-husky" className="hover:font-bold">
                        Male
                      </a>
                    </li>
                    <li className="lg:underline-effect transition-all ml-4 mt-1 pb-1 cursor-pointer">
                      <a href="/female-husky" className="hover:font-bold">
                        Female
                      </a>
                    </li>
                  </div>
                )
              : item.name === "Our Dogs" &&
                isDropdownOpen && (
                  <>
                    <li className="lg:underline-effect border-b lg:border-b-0 border-gray-500 transition-all pb-1 ml-4 mt-2 cursor-pointer">
                      <a href="/male-husky" className="hover:font-bold">
                        Male
                      </a>
                    </li>
                    <li className="lg:underline-effect transition-all ml-8 mt-3 pb-1 cursor-pointer">
                      <a href="/female-husky" className="hover:font-bold">
                        Female
                      </a>
                    </li>
                  </>
                )}
          </li>
        ))}
        <div className="hidden lg:flex space-x-4 mx-7 cursor-pointer transition-all h-[85%]">
          {social.map((item) => (
            <a key={item.id} href={item.href} className={`${item.icon}-icon block`}>
              {item.name}
            </a>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
