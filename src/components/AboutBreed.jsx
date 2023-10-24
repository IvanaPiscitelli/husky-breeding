import FirstPic from "../assets/800px-Leonhard_Seppala_with_dogs.jpg.webp";
import faceHusky from "../assets/faceHusky.jpeg";
import SecondPic from "../assets/IMG_4468.jpg";
import ThirdPic from "../assets/michele_hero.jpeg";
// import ForthPic from "../assets/86CA9BFC-6861-46D0-955E-F24EB8200212_1_105_c.jpeg";
import FourthLupo from "../assets/mLupo.jpeg";

const AboutBreed = () => {
  return (
    <div className="bg-gray-100 py-24 text-center pt-80">
      <section className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2 gap-8 text-center lg:text-left">
        <div className="max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4">SIBERIAN HUSKY HISTORY</h2>
          <p className="text-base">
            It is the Chukchi tribe that is credited with the origination of the Siberian Husky. The Chukchi tribe
            inhabited the part of Siberia closest to Alaska and the harsh weather conditions along with the necessity to
            transport food and goods over a long distance led to the beginning of the sled dog. The Siberian Husky which
            at that time was known as the Siberian Chukchi was bred for endurance to cover the long distances rather
            than for speed. They had to be energy efficient so that they could perform their task with as little effort
            as possible.The friendly nature of the breed also stems from the Chuckchi as the dogs were primarily cared
            for by the women and children of the tribe on a daily basis and thus they adapted to family life. <br />{" "}
            <br /> It was in 1908 that a Russian fur trader named Goosak brought a group of huskies still known as
            Chukchis to Alaska. His purpose was to enter the All-Alaska Sweepstakes sled dog race which was a 657km race
            in which he was placed third. Following this race, a man named Fox Maule Ramsay chartered a boat to Siberia
            and returned with over 60 of the best dogs he could find. In the third All-Alaska Sweepstakes two of
            Ramsay’s teams placed first and second. The dogs brought in by Ramsay came to form the foundation of what is
            known today as the Siberian Husky. <br /> <br /> in 1925 an outbreak of diphtheria in Nome, Alaska led to
            the great serum run during which teams of sled dogs transported the anti-toxin from Nenana, Alaska to Nome,
            Alaska. Thanks to the sled dogs the serum was delivered in time. One person who became especially known from
            the run was Leonard Seppala who used a team of huskies. Seppala was the first to introduce Siberian Huskies
            to the United States outside of Alaska and helped to establish the breed in the eastern United States
            through his own breeding programmes and his dogs became the foundation stock for other breeders, and so the
            breed began.
          </p>
        </div>
        <div className="mx-4">
          <figure>
            <img src={FirstPic} alt="Descrizione Immagine" className="rounded-lg shadow-lg" />
            <figcaption className="text-sm text-gray-500 mt-2">
              Leonhard Seppala with sled dogs from his kennels. From left to right - Togo, Karinsky, Jafet, Pete,
              unknown dog, Fritz
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Second Section */}
      <section className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20">
        <div className="flex justify-between flex-col max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4">GENERAL APPEARANCE</h2>
          <h3 className="text-sm font-bold mb-4">EYES</h3>
          <p>
            The American Kennel Club describes the Siberian Husky’s eyes as “an almond shape, moderately spaced and set
            slightly obliquely.” The AKC breed standard is that eyes may be brown, blue or black; one of each or
            particolored are acceptable. These eye-color combinations are considered acceptable by the American Kennel
            Club. The parti-color does not affect the vision of the dog.
          </p>
          <h3 className="text-sm font-bold mb-4">NOSE</h3>
          <p>
            The nose is black in gray dogs, tan in black dogs, liver in copper-colored dogs, and may be light tan in
            white dogs. In some instances, Siberian Huskies can exhibit what is called “snow nose” or “winter nose.”
            “Snow nose” is acceptable in the show ring.
          </p>
          <h3 className="text-sm font-bold mb-4">TAIL</h3>
          <p>
            Siberian Husky tails are heavily furred; these dogs will often curl up with their tails over their faces and
            noses in order to provide additional warmth. When curled up to sleep the Siberian Husky will cover its nose
            for warmth, often referred to as the “Siberian Swirl”. The tail should be expressive, held low when the dog
            is relaxed, and curved upward in a “sickle” shape when excited or interested in something.
          </p>
          <h3 className="text-sm font-bold mb-4">SIZE</h3>
          <p>
            The breed standard indicates that the males of the breed are ideally between 20 and 24 inches (51 and
            61&nbsp;cm) tall at the withers and weighing between 45 and 60 pounds (20 and 27&nbsp;kg). Females are
            smaller, growing to between 19 to 23 inches (48 to 58&nbsp;cm) tall at the withers and weighing between 35
            to 50 pounds (16 to 23&nbsp;kg)
          </p>
          <h3 className="text-sm font-bold mb-4">COAT</h3>
          <p>
            A Siberian Husky has a double coat that is thicker than that of most other dog breeds. It has two layers: a
            dense, finely wavy undercoat and a longer topcoat of thicker, straight guard hairs. It protects the dogs
            effectively against harsh Arctic winters, and also reflects heat in the summer. It is able to withstand
            temperatures as low as −50 to −60&nbsp;°C. The undercoat is often absent during shedding. Their thick coats
            require weekly grooming. An excessively long coat, sometimes referred to as a “wooly” / “woolie” or “long
            haired” coat, is considered a fault by the breed’s standard as it lacks the thicker protection of the
            standard coat’s guard hairs, obscures the dog’s clear-cut outline, causes quicker overheating during serious
            harness work, and becomes easily matted and encrusted with snow and ice. Siberian Huskies come in a variety
            of colors and patterns often with white paws and legs, facial markings, and tail tip. Example coat colors
            are black and white, copper-red and white, grey and white, pure white, and agouti coat, though many
            individuals have blondish or piebald spotting. Some other individuals also have the “saddle back” pattern,
            in which black-tipped guard hairs are restricted to the saddle area while the head, haunches and shoulders
            are either light red or white. Striking masks, spectacles, and other facial markings occur in wide variety.
            All coat colors from black to pure white are allowed. Merle coat patterns are not permitted. This pattern is
            often associated with health issues and mixed breeding.
          </p>
        </div>
        <div className="mx-4 flex flex-col justify-center gap-8 mb-[36rem]">
          <img src={faceHusky} alt="First Pic" className="rounded-lg shadow-lg" />
          <img src={ThirdPic} alt="Second Pic" className="rounded-lg shadow-lg" />
          <img src={FourthLupo} alt="3 Pic" className="rounded-lg shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default AboutBreed;
