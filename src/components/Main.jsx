// import hero from "../assets/michele_hero.jpeg";
import hero from "../assets/husky_hero_background.jpg";
import { Carousel } from "@material-tailwind/react";
import { imgHome } from "../utils/const";

const Main = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img src={hero} alt="Background hero section" className="absolute inset-0 w-full h-full object-cover -z-50" />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative">
          <h2 className="text-4xl font-bold text-white mb-4">BREEDING CONTEA MARULLO</h2>
          <h2 className="text-xl text-white mb-4"> SIBERIAN HUSKY</h2>
          <p className="text-white">
            I&apos;m to produce outstanding dogs in Health, Temperament&nbsp;&amp;&nbsp;Conformation
          </p>
        </div>
      </section>
      {/* Second Section */}
      <section className="bg-gray-100 py-24 text-center">
        <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2 gap-8 text-center lg:text-left">
          <div className="max-w-full mx-auto px-10">
            <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
            <p>
              We are a Siberian Husky Contea Marullo located in Crotone, Calabria, Italy. <br />
              <br /> My love for the Siberian Husky breed started with a fateful coincidence. After i graduated college
              in 2012 i returned to my home country permanently and was looking to adopt a dog. By chance, we came
              across a blue eyed Siberian Husky that we named Snowbell. We started participating in dog shows and
              researching on the breed standard, long story short the ball started to roll. Until today, we are still
              active in breeding in a very limited amount and showing actively.
              <br />
              <br />
              Our mission is to educate everyone about the Siberian Husky breed and ensure the owners of our dogs are
              equipped with knowledge of the breed. Our dogs are first and foremost our family and pets before they are
              show dogs.
              <br />
              <br /> We have made many wonderful friends by being in this beloved breed, feel free to introduce
              yourselves through the button link below..
            </p>
          </div>
          <div className="max-w-lg my-auto mr-auto px-10 h-fit">
            <Carousel autoplayDelay={3000} autoplay={true} loop={true} className="rounded-xl">
              {imgHome.map((img) => (
                <img key={img.id} src={img.img} alt={`image ${img.id}`} className="h-full w-full object-cover" />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
