import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutBreed from "./pages/AboutBreed";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-breed" element={<AboutBreed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
