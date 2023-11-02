// import hero from "../assets/michele_hero.jpeg";
import hero from "../assets/husky_hero_background.jpg";
import { Carousel } from "@material-tailwind/react";
import { imgHome } from "../utils/const";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img src={hero} alt="Background hero section" className="absolute inset-0 w-full h-full object-cover -z-50" />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative">
          <h2 className="text-4xl font-bold text-white mb-4">{t("titleHome")}</h2>
          <h2 className="text-xl text-white mb-4">{t("subTitleHome")}</h2>
          <p className="text-white">{t("textHome")}</p>
        </div>
      </section>
      {/* Second Section */}
      <section className="bg-gray-100 py-24 text-center">
        <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2 gap-8 text-center lg:text-left">
          <div className="max-w-full mx-auto px-10">
            <h2 className="text-2xl font-bold mb-4">{t("aboutUsTitle")}</h2>
            <p>
              {t("aboutUsFirst")} <br />
              <br /> {t("aboutUsSecond")}
              <br />
              <br />
              {t("aboutUsThird")}
              <br />
              <br /> {t("aboutUsForth")}
            </p>
          </div>
          <div className="max-w-lg my-auto mr-auto px-10 h-fit">
            <Carousel autoplayDelay={3000} autoplay={true} loop={true} className="rounded-xl">
              {imgHome.map((img) => (
                <img key={img.id} src={img.img} alt={`image ${img.id}`} className="h-full w-full object-cover" />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
