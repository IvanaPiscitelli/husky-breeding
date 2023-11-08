import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { imgDetails } from "../utils/const";
import useResize from "../hooks/useResize";

const DetailsPage = () => {
  const [image, setImage] = useState(imgDetails[0].img);

  const navigate = useNavigate();
  const location = useLocation();
  const { dogId } = useParams();
  const windowWidth = useResize();

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
      <div className="flex flex-col lg:flex-row -mx-4">
        {/* Contenitore per l'immagine principale */}
        <div className="lg:flex-1 md:px-4">
          <div className="h-[40rem] lg:h-[50rem] rounded-lg bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        </div>
        {windowWidth < 960 && (
          <div className="flex mt-4">
            {imgDetails.map((img, index) => (
              <div
                key={img.id}
                className={`flex-1 md:px-4 ${
                  index === 0 ? "mr-[0.2rem]" : index === imgDetails.length - 1 ? "ml-[0.2rem]" : "mx-2"
                }`}
              >
                <button
                  onClick={() => setImage(img.img)}
                  className={`focus:outline-none w-full rounded-lg h-24 lg:h-32 bg-gray-100 flex items-center justify-center ${
                    image === img.img ? "ring-2 ring-indigo-300 ring-inset" : ""
                  }`}
                >
                  <img
                    src={img.img}
                    alt={`Thumbnail ${index}`}
                    className="h-full w-full object-cover rounded-lg overflow-hidden"
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Contenitore per il testo e le miniature */}

        <div className="lg:flex-1 md:px-4 mt-8 md:mt-6">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl lg:text-3xl">
            Sunday – Ch. Cosmos Septimo Dia
          </h2>
          <p className="text-gray-500 text-sm">Sire: Whitesunday’s Special Edition “Rush”</p>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex-col py-2 px-3 text-sm leading-relaxed">
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
          <p className="text-gray-500">
            Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum
            corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.
          </p>

          {/* Spostato qui il contenitore delle miniature */}
          {windowWidth > 959 && (
            <div className="flex mx-2 mt-4">
              {imgDetails.map((img, index) => (
                <div key={img.id} className="flex-1 md:px-2">
                  <button
                    onClick={() => setImage(img.img)}
                    className={`focus:outline-none w-full rounded-lg h-24 lg:h-32 bg-gray-100 flex items-center justify-center ${
                      image === img.img ? "ring-2 ring-indigo-300 ring-inset" : ""
                    }`}
                  >
                    <img
                      src={img.img}
                      alt={`Thumbnail ${index}`}
                      className="h-full w-full object-cover rounded-lg overflow-hidden"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
