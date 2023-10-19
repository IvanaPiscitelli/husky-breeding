import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const HomePage = () => {
  return (
    <div className="relative">
      <Header />
      <Main />

      {/* Footer Section */}
      <footer className="py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
