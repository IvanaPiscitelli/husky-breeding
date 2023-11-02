import Card from "../components/Card";
import { imgCard } from "../utils/const";

const Male = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-24 px-4 text-center">
      {imgCard.map((card) => (
        <Card key={card.id} imageSrc={card.src} imageAlt={card.alt} text={card.text} />
      ))}
    </div>
  );
};

export default Male;
