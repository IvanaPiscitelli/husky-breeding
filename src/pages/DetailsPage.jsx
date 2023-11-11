import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { imgDetails } from "../utils/const";

const DetailsPage = () => {
  const [image, setImage] = useState(imgDetails[0].img);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { dogId } = useParams();

  const maxVisibleThumbnails = 4; // Numero massimo di miniature visibili contemporaneamente
  const totalThumbnails = imgDetails.length; // Numero totale di miniature
  const scrollIntervalTime = 3500; // Interval time in milliseconds

  // Create a function to update the image and reset the interval
  const updateImageAndResetInterval = (newImage, index) => {
    setImage(newImage);

    // Ensure the index is within bounds and set it
    const newIndex = index % totalThumbnails;
    setVisibleIndex(newIndex);

    // If we're at the end of the thumbnails, reset to start
    if (newIndex === totalThumbnails - 1) {
      setTimeout(() => setVisibleIndex(0), scrollIntervalTime);
    }
  };

  // Calculate visible thumbnails for the sliding animation
  const visibleThumbnails = [];
  for (let i = 0; i < maxVisibleThumbnails; i++) {
    visibleThumbnails.push(imgDetails[(visibleIndex + i) % totalThumbnails]);
  }

  useEffect(() => {
    // Automatically advance the thumbnails every 3.5 seconds
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % totalThumbnails);
    }, scrollIntervalTime);

    return () => clearInterval(interval);
  }, [totalThumbnails]);

  useEffect(() => {
    // Redirect logic when the component unmounts or the dogId changes
    return () => {
      if (!dogId) {
        navigate(location.pathname.includes("/female-husky") ? "/female-husky" : "/male-husky", { replace: true });
      }
    };
  }, [location.pathname, navigate, dogId]);

  return (
    <div className="container mx-auto py-32 px-16">
      {/* Contenitore principale con flex che avvolge tutto */}
      <div className="flex flex-col lg:flex-row -mx-4">
        {/* Contenitore per le miniature */}
        <div className="flex flex-row">
          <div className="flex flex-col mr-[1.3rem] transition-all duration-1000 ease-in-out">
            {visibleThumbnails.map((img, index) => {
              // Condizione per mostrare solo le prime 3 miniature su dispositivi mobili
              const showOnMobile = index < 3;
              // Condizione per mostrare la quarta miniatura solo su schermi più grandi (es. da tablet in su)
              const showFourthOnTabletUp = index < 4 ? "md:block" : "md:hidden";

              return (
                <div
                  key={img.id}
                  className={`mb-2 ${showOnMobile ? "block" : "hidden"} ${showFourthOnTabletUp} lg:mb-4`}
                >
                  <button
                    onClick={() => updateImageAndResetInterval(img.img, visibleIndex + index)}
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden"
                  >
                    <img src={img.img} alt={`Thumbnail ${index}`} className="object-cover rounded-lg" />
                  </button>
                </div>
              );
            })}
          </div>
          {/* Contenitore per l'immagine principale */}
          <div className="flex-1">
            <div className="h-auto w-auto sm:w-[30rem] rounded-lg bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
              <img src={image} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* Contenitore per il testo */}
        <div className="flex-1 mt-6 mx-auto">
          <h2 className="mb-4 leading-tight tracking-tight font-bold text-gray-800 text-2xl lg:text-3xl">
            Sunday – Ch. Cosmos Septimo Dia
          </h2>
          <div>
            <div className="rounded-lg flex-col mt-6 py-2 px-3 text-sm leading-loose">
              <p>
                <strong>Data di Nascita:</strong> 15 07 2012
              </p>
              <p>
                <strong>Padre:</strong>&nbsp; Sire Ch. Taro De Ciukci
              </p>
              <p>
                <strong>Madre:</strong>&nbsp; Dam Good Luck della Contea Marullo
              </p>
              <p>
                <strong>Proprietario:</strong>&nbsp; All.to della Contea Normanna
              </p>
              <p>
                <strong>Allevatore:</strong>&nbsp; All.to della Contea Normanna
              </p>
              <p>
                <strong>Pedigree:</strong> &nbsp;
                <a href="#" className="text-indigo-600 hover:underline">
                  Link to Sunday’s Pedigree
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
