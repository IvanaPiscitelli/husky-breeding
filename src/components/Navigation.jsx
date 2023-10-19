import "../../src/index.css";
import { navigation } from "../utils/const";
// import { BsFacebook } from "react-icons/bs";
// import { PiInstagramLogoFill } from "react-icons/pi";

const Navigation = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex justify-center h-full flex-col lg:flex-row space-y-4 lg:space-y-0 lg:m-2">
        {navigation.map((item, index) => (
          <li
            key={item.name}
            className={`underline-effect ${
              index < navigation.length - 1 ? "border-b lg:border-b-0" : ""
            } border-gray-500 cursor-pointer transition-all hover:font-bold`}
          >
            <a href={item.href} className={`${index === 0 ? "mt-5 lg:mt-0" : ""} block px-4`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
