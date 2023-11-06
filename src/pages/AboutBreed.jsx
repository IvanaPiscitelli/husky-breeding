import FirstPic from "../assets/800px-Leonhard_Seppala_with_dogs.jpg.webp";
import faceHusky from "../assets/faceHusky.jpeg";
// import SecondPic from "../assets/IMG_4468.jpg";
import ThirdPic from "../assets/michele_hero.jpeg";
// import ForthPic from "../assets/86CA9BFC-6861-46D0-955E-F24EB8200212_1_105_c.jpeg";
import FourthLupo from "../assets/mLupo.jpeg";
import grooming from "../assets/lf6vcr2yg3cz-2048x2039.webp";
import health from "../assets/hip-dysplasia-in-dogs-xrays-750x299-1.webp";
import standard from "../assets/SHCA_IllustratedStandard_p03.jpg";
import { defectList, generalAppearanceList, menuBreedList } from "../utils/const";
import { useTranslation } from "react-i18next";

const AboutBreed = () => {
  const { t } = useTranslation();
  return (
    <div id="top" className="bg-gray-100 py-24 text-center">
      {/* MENU LIST */}

      <ul className="flex flex-col mx-auto max-w-7xl md:max-w-lg lg:max-w-2xl xl:max-w-4xl pl-12 pr-8 items-start cursor-pointer pt-12 transition-all list-disc">
        {menuBreedList.map((list) => (
          <li key={list.id} className="font-bold text-gray-700 hover:text-[#0d98b8]">
            <a href={`#${list.id}`}>{t(`menuBreedList.${list.text}`)}</a>
          </li>
        ))}
      </ul>

      {/* First Section */}
      <section
        id="history"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] uppercase font-bold mb-4">{t("menuBreedList.historyText")}</h2>
          <p className="text-xs">
            {t("chukiHistoryFirst")} <br />
            <br /> {t("chukiHistorySecond")} <br /> <br /> {t("chukiHistoryThird")}
          </p>
          <div className="pt-6 hidden lg:block">
            <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
              {t("backToTop")}
            </a>
          </div>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 my-auto">
          <figure className="flex flex-col justify-center items-center">
            <img src={FirstPic} alt="Descrizione Immagine" className="rounded-lg shadow-lg" />
            <figcaption className="text-xs text-gray-500 mt-2">{t("subImgCaption")}</figcaption>
          </figure>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            {t("backToTop")}
          </a>
        </div>
      </section>

      {/* Second Section */}
      <section
        id="standard"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="flex gap-8 flex-col max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold">{t("menuBreedList.standardText")}</h2>
          {generalAppearanceList.map((item, index) => (
            <div key={item.id}>
              <h3 className="text-sm font-bold">{t(`generalAppearanceList.${item.title}`)}</h3>
              <p className="text-xs whitespace-pre-line">{t(`generalAppearanceList.${item.text}`)}</p>
              {index === generalAppearanceList.length - 1 && (
                <div className="pt-6 hidden lg:block">
                  <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
                    {t("backToTop")}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 flex flex-col justify-center gap-8">
          <img src={faceHusky} alt="First Pic" className="rounded-lg shadow-lg" />
          <img src={ThirdPic} alt="Second Pic" className="rounded-lg shadow-lg" />
          <img src={FourthLupo} alt="3 Pic" className="rounded-lg shadow-lg" />
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            {t("backToTop")}
          </a>
        </div>
      </section>

      {/* Third Section */}
      <section id="defect" className="grid grid-cols-1 mx-auto max-w-7xl text-center lg:text-left pt-20">
        <div className="flex gap-4 flex-col max-w-full px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold">{t("menuBreedList.defectText")}</h2>
          <p className="text-xs whitespace-pre-line">{t("defectParagraph")}</p>
          {defectList.map((item, index) => (
            <div key={item.id}>
              <h3 className="text-sm font-bold">{t(`defectList.${item.title}`)}</h3>
              <p className="text-xs whitespace-pre-line">{t(`defectList.${item.text}`)}</p>
              {index === defectList.length - 1 && (
                <div className="pt-6 hidden lg:block">
                  <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
                    {t("backToTop")}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 pt-6 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            {t("backToTop")}
          </a>
        </div>
      </section>

      {/* Forth Section */}
      <section
        id="grooming"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4">{t("menuBreedList.groomingText")}</h2>
          <p className="text-xs">{t("groomingParagraph")}</p>
          <div className="pt-6 hidden lg:block">
            <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
              {t("backToTop")}
            </a>
          </div>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 my-auto">
          <img src={grooming} alt="Grooming pic" className="mx-auto rounded-lg shadow-lg" />
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            {t("backToTop")}
          </a>
        </div>
      </section>

      {/* Fifth Section */}
      <section
        id="health"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4">{t("menuBreedList.healthText")}</h2>
          <p className="text-xs">{t("healthParagraph")}</p>
          <div className="pt-6 hidden lg:block">
            <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
              {t("backToTop")}
            </a>
          </div>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 my-auto">
          <img src={health} alt="Grooming pic" className="rounded-lg shadow-lg" />
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            {t("backToTop")}
          </a>
        </div>
      </section>

      {/* Sixth Section */}
      <section
        id="links"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="max-w-full my-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4 block">{t("officialBreedStandard")}</h2>
          <a href="https://www.shca.org/the-siberian-husky-standard" className="block underline ml-2">
            Official Breed Standard
          </a>
          <h2 className="text-2xl text-[#0d98b8] font-bold my-4 block">{t("illustratedStandard")} </h2>
          <a href="https://www.shca.org/illustrated-standard-1" className="block underline ml-2">
            Illustrated Siberian Husky Standard
          </a>
          <div className="pt-6 hidden lg:block">
            <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
              {t("backToTop")}
            </a>
          </div>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20">
          <img src={standard} alt="Grooming pic" className="mx-auto rounded-lg shadow-lg" />
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            {t("backToTop")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutBreed;
