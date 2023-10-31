import { useState } from "react";
import { useTranslation } from "react-i18next";

const Toggle = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "it";

  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => {
    setIsToggle(!isToggle);
    i18n.changeLanguage(isEnglish ? "en" : "it");
  };

  return (
    <div className="relative w-20 mr-10">
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" id="toggle" className="sr-only" onChange={toggle} checked={isToggle} />
        <div className="block bg-[#0d98b8] w-full h-8 rounded-full">
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
            className={`absolute inset-y-0 right-0 flex items-center pr-[0.4rem] ${
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
