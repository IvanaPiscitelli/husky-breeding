import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { imgDetails } from "../utils/const";
import useResize from "../hooks/useResize";

const DetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dogId } = useParams();

  const screenWidth = useResize();

  // Function to determine scale value based on device width
  const getScaleValue = () => {
    return screenWidth < 768 ? 1.2 : 2.2;
  };

  // Function to determine translate values based on device width
  const getTranslateValues = (index) => {
    if (screenWidth < 768) {
      // Example values for mobile devices
      return {
        x: "0px",
        y: "0px",
      };
    } else if (screenWidth < 1025) {
      // Values for medium screens
      return {
        x: index === 0 || index === 2 ? "70px" : index === 1 || index === 3 ? "-70px" : "0px",
        y: index === 0 || index === 1 ? "90px" : index === 2 || index === 3 ? "-90px" : "0px",
      };
    } else if (screenWidth < 1440) {
      // Values for large screens
      return {
        x: index === 0 || index === 2 ? "100px" : index === 1 || index === 3 ? "-100px" : "0px",
        y: index === 0 || index === 1 ? "130px" : index === 2 || index === 3 ? "-130px" : "0px",
      };
    } else {
      // Values for larger screens
      return {
        x: index === 0 || index === 2 ? "135px" : index === 1 || index === 3 ? "-135px" : "0px",
        y: index === 0 || index === 1 ? "160px" : index === 2 || index === 3 ? "-160px" : "0px",
      };
    }
  };

  useEffect(() => {
    // Redirect logic when the component unmounts or the dogId changes
    return () => {
      if (!dogId) {
        navigate(location.pathname.includes("/female-husky") ? "/female-husky" : "/male-husky", { replace: true });
      }
    };
  }, [location.pathname, navigate, dogId]);

  return (
    <div className="container flex flex-col md:flex-row mx-auto py-32 px-12">
      <div className="flex-1 md:my-auto">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
          {imgDetails.map((img, index) => {
            const { x, y } = getTranslateValues(index);
            return (
              <motion.div
                key={img.id}
                whileHover={{
                  scale: getScaleValue(), // Dynamic scale value based on device,
                  zIndex: 5,
                  translateX: x,
                  translateY: y,
                  borderRadius: "0.5rem",
                }} // Scale up and center on hover
                transition={{ type: "spring", stiffness: 260, damping: 20 }} // Ensure smooth transition
                className="relative w-full h-full max-w-full max-h-full bg-gray-100 flex items-center justify-center overflow-hidden"
              >
                <img src={img.img} alt={`Thumbnail ${index}`} className="object-cover rounded-lg" />
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 mx-4 md:mx-12 mt-16 md:mt-0">
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
  );
};

export default DetailsPage;
