const Card = ({ imageSrc, imageAlt, text }) => {
  return (
    <div className="card p-6 border border-gray-300 text-center">
      <img src={imageSrc} alt={imageAlt} className="mx-auto h-96 object-cover" />

      <h1 className="mt-4 mx-auto">{text}</h1>
    </div>
  );
};

export default Card;
