import "../../src/index.css";
import useOurDogs from "../hooks/useOurDogs";
import { navigation } from "../utils/const";
import Female from "./Female";
import Male from "./Male";

const Navigation = ({ isDropdownOpen, toggleDropdown }) => {
  const windowWidth = useOurDogs();
  return (
    <nav className="mr-4 w-full">
      <ul className="flex justify-center h-full flex-col lg:flex-row space-y-4 lg:space-y-0 lg:m-2">
        {navigation.map((item, index) => (
          <li
            key={item.name}
            onClick={item.name === "Our Dogs" ? toggleDropdown : null}
            className="underline-effect border-b lg:border-b-0 border-gray-500 cursor-pointer transition-all pb-2 hover:font-bold"
          >
            <a href={item.href} className={`${index === 0 ? "mt-5 lg:mt-0" : ""} block px-4`}>
              {item.name}
            </a>
            {item.name === "Our Dogs" && <span className="lg:hidden">{isDropdownOpen ? "−" : "+"}</span>}
            {item.name === "Our Dogs" && <span className="hidden lg:inline-block">{isDropdownOpen ? "▲" : "▼"}</span>}

            {windowWidth > 959
              ? item.name === "Our Dogs" &&
                isDropdownOpen && (
                  <div className="dropdown-menu">
                    <Male />
                    <Female />
                  </div>
                )
              : item.name === "Our Dogs" &&
                isDropdownOpen && (
                  <>
                    <Male />
                    <Female />
                  </>
                )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
