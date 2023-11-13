import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { imgDetails } from "../utils/const";
import { motion } from "framer-motion";

const DetailsPage = () => {
  const [image, setImage] = useState(imgDetails[0].img); // This state holds the current main image
  const [isAnimating, setIsAnimating] = useState(false); // State to control the start of the animation

  const navigate = useNavigate();
  const location = useLocation();
  const { dogId } = useParams();

  useEffect(() => {
    // Set a timeout to start the animation after a certain delay
    const timeoutId = setTimeout(() => {
      setIsAnimating(true); // Start the animation
    }, 2000); // Convert seconds to milliseconds

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Redirect logic when the component unmounts or the dogId changes
    return () => {
      if (!dogId) {
        navigate(location.pathname.includes("/female-husky") ? "/female-husky" : "/male-husky", { replace: true });
      }
    };
  }, [location.pathname, navigate, dogId]);

  return (
    <div className="container mx-auto py-32 px-12">
      {/* Contenitore principale con flex che avvolge tutto */}
      <div className="flex flex-col lg:flex-row -mx-4">
        {/* Thumbnails container */}
        <div className="flex flex-row">
          <div className="flex flex-col overflow-hidden" style={{ height: 448 }}>
            {imgDetails.map((img, index) => {
              return (
                <motion.div
                  key={img.id}
                  animate={isAnimating ? { y: [0, -112, -224, -336, -448] } : {}}
                  transition={{
                    repeat: Infinity,
                    type: "tween",
                    duration: 10,
                  }}
                  style={{ height: 112 }}
                >
                  <button
                    onClick={() => {
                      setImage(img.img); // Update main image when thumbnail is clicked
                    }}
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden mx-2 mb-4"
                  >
                    <img src={img.img} alt={`Thumbnail ${index}`} className="object-cover rounded-lg" />
                  </button>
                </motion.div>
              );
            })}
            <div className="flex justify-between w-full">
              <button className="absolute left-0 top-0">&#8593; {/* Up arrow */}</button>
              <button className="absolute left-0 bottom-0">&#8595; {/* Down arrow */}</button>
            </div>
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
