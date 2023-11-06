import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import { imgCard } from "../utils/const";
import { useNavigate } from "react-router-dom";

const Male = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToDetailsPage = (dogId) => {
    navigate(`/male-husky/${dogId}`);
  };
  return (
    <>
      <h1 className="flex items-center font-bold text-xl text-[#0d98b8] justify-center pb-8 pt-20 lg:pt-28">
        {t("titlePageMale")}
      </h1>
      <div className="container cursor-pointer mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-16 px-4 text-center">
        {imgCard.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.src}
            imageAlt={card.alt}
            text={card.text}
            name={card.name}
            title={card.title}
            onGoToDetailsPage={() => goToDetailsPage(card.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Male;
