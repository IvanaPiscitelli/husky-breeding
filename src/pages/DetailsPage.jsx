import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DetailsPage = () => {
  const [image, setImage] = useState(1);
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
    <div>
      <div className="bg-indigo-700 text-indigo-200 md:text-center py-2 px-4">
        Inspired from Dribble Shot by
        <a
          href="https://dribbble.com/shots/14127375-Product-Page"
          className="font-bold underline hover:text-indigo-100"
        >
          Vishnu Prada
        </a>
        . See his works on
        <a href="https://dribbble.com/vlockn" className="font-bold underline hover:text-indigo-100">
          Dribble
        </a>
        .
      </div>

      {/* ... rest of your component */}

      <div className="py-6">
        {/* ... */}
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            {/* Replace Alpine.js logic with React state */}
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <span className="text-5xl">{image}</span>
            </div>

            <div className="flex -mx-2 mb-4">
              {/* Map through images */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 px-2">
                  <button
                    onClick={() => setImage(i)}
                    className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                      image === i ? "ring-2 ring-indigo-300 ring-inset" : ""
                    }`}
                  >
                    <span className="text-2xl">{i}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:flex-1 px-4">{/* ... */}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
