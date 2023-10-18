// import hero from "../assets/michele_hero.jpeg";
import hero from "../assets/husky_hero_background.jpg";

const Main = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img src={hero} alt="Background hero section" className="absolute inset-0 w-full h-full object-cover -z-50" />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">SIBERIAN HUSKY Crotone 2023</h2>
          <h2 className="text-xl text-white mb-4">CONTEA MARULLO</h2>
          <p className="text-white">
            I&apos;m to produce outstanding dogs in Health, Temperament&nbsp;&amp;&nbsp;Conformation
          </p>
        </div>
      </section>
      {/* Second Section */}
      <section>
        <h2>About US</h2>
      </section>
    </main>
  );
};

export default Main;
