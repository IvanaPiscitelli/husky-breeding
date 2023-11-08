import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { imgDetails } from "../utils/const";

const DetailsPage = () => {
  const [image, setImage] = useState(imgDetails[0].img);
  const navigate = useNavigate();
  const location = useLocation();
  const { dogId } = useParams();

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
            {imgDetails.map((img, index) => (
              <div key={img.id} className="mb-6">
                <button
                  onClick={() => setImage(img.img)}
                  className={`focus:outline-none w-16 h-16 rounded-lg bg-gray-100 flex items-start justify-center ${
                    image === img.img ? "ring-2 ring-indigo-300 ring-inset" : ""
                  }`}
                >
                  <img src={img.img} alt={`Thumbnail ${index}`} className="object-cover rounded-lg" />
                </button>
              </div>
            ))}
          </div>
          {/* Contenitore per l'immagine principale */}
          <div className="flex-1">
            <div className="h-auto w-auto sm:w-[30rem] rounded-lg bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
              <img src={image} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* Contenitore per il testo */}
        <div className="flex-1 px-4 mx-auto">
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
