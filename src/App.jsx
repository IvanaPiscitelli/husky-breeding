import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutBreed from "./pages/AboutBreed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Male from "./pages/Male";
import Female from "./pages/Female";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-breed" element={<AboutBreed />} />
          <Route path="/male-husky" element={<Male isFooter={false} />} />
          <Route path="/female-husky" element={<Female />} />
          <Route path="/male-husky/:dogId" element={<DetailsPage />} />
          <Route path="/female-husky/:dogId" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
