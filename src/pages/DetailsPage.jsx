import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { imgDetails } from "../utils/const";

const DetailsPage = () => {
  const [image, setImage] = useState(imgDetails[0].img);
  const navigate = useNavigate();
  const location = useLocation();
  const { dogId } = useParams();
  const [visibleIndex, setVisibleIndex] = useState(0);

  const maxVisibleThumbnails = 4; // Numero massimo di miniature visibili contemporaneamente
  const totalThumbnails = imgDetails.length; // Numero totale di miniature

  // Gestisce il click su una miniatura
  const handleThumbnailClick = (index) => {
    setImage(imgDetails[index].img);

    // Scorrimento verso il basso (verso la fine dell'array)
    if (index === visibleIndex && index > 0) {
      setVisibleIndex(visibleIndex - 1);
    }
    // Scorrimento verso l'alto (verso l'inizio dell'array)
    else if (index === visibleIndex + maxVisibleThumbnails - 1 && index < totalThumbnails - 1) {
      setVisibleIndex(visibleIndex + 1);
    }

    // Avvolge dall'ultima alla prima miniatura
    if (index === totalThumbnails - 1 && visibleIndex + maxVisibleThumbnails === totalThumbnails) {
      setVisibleIndex(0);
    }
    // Avvolge dalla prima all'ultima miniatura
    else if (index === 0 && visibleIndex === 0) {
      setVisibleIndex(totalThumbnails - maxVisibleThumbnails);
    }
  };

  // Calcola le miniature visibili per lo scorrimento infinito
  let visibleThumbnails = [];
  for (let i = 0; i < maxVisibleThumbnails; i++) {
    visibleThumbnails.push(imgDetails[(visibleIndex + i) % totalThumbnails]);
  }

  const scrollIntervalTime = 5000; // Tempo in millisecondi per lo scorrimento automatico

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % totalThumbnails);
    }, scrollIntervalTime);

    return () => clearInterval(interval); // Pulizia dell'intervallo quando il componente viene smontato
  }, [totalThumbnails]);

  useEffect(() => {
    // Quando il componente viene smontato (l'utente naviga via), sostituisco lo stato con una route che non ha parametri.
    return () => {
      // Questo verrà eseguito quando il componente viene smontato

      if (!dogId) {
        if (location.pathname.includes("/female-husky")) navigate("/female-husky", { replace: true });
        if (location.pathname.includes("/male-husky")) navigate("/male-husky", { replace: true });
      }
    };
  }, [location, navigate, dogId]);

  return (
    <div className="container mx-auto py-32 px-16">
      {/* Contenitore principale con flex che avvolge tutto */}
      <div className="flex flex-col lg:flex-row -mx-4">
        {/* Contenitore per le miniature */}
        <div className="flex flex-row">
          <div className="flex flex-col mr-[1.3rem]">
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
                    onClick={() => handleThumbnailClick((visibleIndex + index) % totalThumbnails)}
                    className={`w-16 h-16 sm:w-24 sm:h-24 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden ${
                      image === img.img ? "ring-2 ring-indigo-300 ring-inset" : ""
                    }`}
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
