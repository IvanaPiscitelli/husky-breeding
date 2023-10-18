import Header from "./Header";
import Main from "./Main";

const HomePage = () => {
  return (
    <div className="relative">
      <Header />
      <Main />

      {/* Footer Section */}
      <footer className="py-4">{/* Add your footer content here */}</footer>
    </div>
  );
};

export default HomePage;
