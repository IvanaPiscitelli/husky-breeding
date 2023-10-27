import FirstPic from "../assets/800px-Leonhard_Seppala_with_dogs.jpg.webp";
import faceHusky from "../assets/faceHusky.jpeg";
// import SecondPic from "../assets/IMG_4468.jpg";
import ThirdPic from "../assets/michele_hero.jpeg";
// import ForthPic from "../assets/86CA9BFC-6861-46D0-955E-F24EB8200212_1_105_c.jpeg";
import FourthLupo from "../assets/mLupo.jpeg";
import grooming from "../assets/lf6vcr2yg3cz-2048x2039.webp";
import health from "../assets/hip-dysplasia-in-dogs-xrays-750x299-1.webp";
import standard from "../assets/SHCA_IllustratedStandard_p03.jpg";
import { defectList, generalAppearanceList, menuBreedList } from "../utils/const";

const AboutBreed = () => {
  return (
    <div id="top" className="bg-gray-100 py-24 text-center">
      {/* MENU LIST */}

      <ul className="flex flex-col mx-auto max-w-7xl md:max-w-lg lg:max-w-2xl xl:max-w-4xl px-10 items-start cursor-pointer pt-12 transition-all list-disc">
        {menuBreedList.map((list) => (
          <li key={list.id} className="font-bold text-gray-700 hover:text-[#0d98b8]">
            <a href={`#${list.id}`}>{list.text}</a>
          </li>
        ))}
      </ul>

      {/* First Section */}
      <section
        id="history"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4">SIBERIAN HUSKY HISTORY</h2>
          <p className="text-xs">
            It is the Chukchi tribe that is credited with the origination of the Siberian Husky. The Chukchi tribe
            inhabited the part of Siberia closest to Alaska and the harsh weather conditions along with the necessity to
            transport food and goods over a long distance led to the beginning of the sled dog. The Siberian Husky which
            at that time was known as the Siberian Chukchi was bred for endurance to cover the long distances rather
            than for speed. They had to be energy efficient so that they could perform their task with as little effort
            as possible.The friendly nature of the breed also stems from the Chuckchi as the dogs were primarily cared
            for by the women and children of the tribe on a daily basis and thus they adapted to family life. <br />
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
          <div className="pt-6 hidden lg:block">
            <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
              Back to Top
            </a>
          </div>
        </div>
        <div className="mx-20 xs:mx-44 lg:mx-20 my-auto">
          <figure className="flex flex-col justify-center items-center">
            <img
              src={FirstPic}
              alt="Descrizione Immagine"
              className="rounded-lg shadow-lg h-full md:h-[25rem] lg:h-full"
            />
            <figcaption className="text-xs text-gray-500 mt-2">
              Leonhard Seppala with sled dogs from his kennels. From left to right - Togo, Karinsky, Jafet, Pete,
              unknown dog, Fritz
            </figcaption>
          </figure>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            Back to Top
          </a>
        </div>
      </section>

      {/* Second Section */}
      <section
        id="standard"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="flex gap-8 flex-col max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold"> STANDARD DEL SIBERIAN HUSKY</h2>
          {generalAppearanceList.map((item, index) => (
            <div key={item.id}>
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="text-xs whitespace-pre-line">{item.text}</p>
              {index === generalAppearanceList.length - 1 && (
                <div className="pt-6 hidden lg:block">
                  <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
                    Back to Top
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 flex flex-col justify-center gap-8">
          <img src={faceHusky} alt="First Pic" className="rounded-lg shadow-lg" />
          <img src={ThirdPic} alt="Second Pic" className="rounded-lg shadow-lg" />
          <img src={FourthLupo} alt="3 Pic" className="rounded-lg shadow-lg" />
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            Back to Top
          </a>
        </div>
      </section>

      {/* Third Section */}
      <section id="defect" className="grid grid-cols-1 mx-auto max-w-7xl text-center lg:text-left pt-20">
        <div className="flex gap-4 flex-col max-w-full px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold">DEFECT</h2>
          <p className="text-xs whitespace-pre-line">
            Qualsiasi deviazione deve essere considerato difetto e la severita’ con cui verra’ considerato e’
            esattamente proporzionale alla sua gravita’.
          </p>
          {defectList.map((item, index) => (
            <div key={item.id}>
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="text-xs whitespace-pre-line">{item.text}</p>
              {index === defectList.length - 1 && (
                <div className="pt-6 hidden lg:block">
                  <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
                    Back to Top
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 pt-6 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            Back to Top
          </a>
        </div>
      </section>

      {/* Forth Section */}
      <section
        id="grooming"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4">GROOMING</h2>
          <p className="text-xs">
            Unlike many breeds the Siberian Husky has retained its original naturally functional coat. As a result the
            husky coat needs very minimal grooming. Brushing about twice a week will remove any loose hairs and provide
            an opportunity to check for fleas etc. Generally huskies require very little bathing unless they have gotten
            particularly dirty, usually a few times a year is sufficient. The main challenge with a huskies coat is
            dealing with shedding. Huskies have a double coat of hair, an undercoat and an outer coat. Approximately
            twice a year, depending on your climate, a husky will blow or shed its undercoat. This can last for about
            three weeks or more and a huge quantity of hair is lost in this time. The hair falls out in clumps,
            sometimes large clumps and so daily brushing is required to remove the hair that is falling out. The
            shedding will usually start on the legs and thighs and then progress the body and finish up with the
            britches and tail area. Sometimes a warm bath can help to loosen up hair during shedding season and make it
            easier to brush out. <br /> <br /> Do not underestimate the amount of fur that will be lost during a huskies
            shedding. If you do not want hairs on your furniture, clothes etc. then a husky is not the right breed for
            you.
          </p>
          <div className="pt-6 hidden lg:block">
            <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
              Back to Top
            </a>
          </div>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 my-auto">
          <img
            src={grooming}
            alt="Grooming pic"
            className="mx-auto rounded-lg shadow-lg h-full md:h-[25rem] lg:h-full"
          />
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            Back to Top
          </a>
        </div>
      </section>

      {/* Fifth Section */}
      <section
        id="health"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="max-w-full mx-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4">HEALTH</h2>
          <p className="text-xs">
            The Siberian Husky is subject to a number of inherited diseases of the eye, including cataracts, corneal
            dystrophy, progressive retinal atrophy, and glaucoma. Given the wide array of possible eye conditions,
            regular eye examinations at the veterinarian’s office are in order. Many of these conditions are not
            treatable, although some may be amenable to surgery. Dogs with progressive retinal atrophy should not be
            bred. The Siberian Husky can also be prone to epilepsy and seizures. Drugs can be used to control these
            seizures, and again genetically predisposed dogs should not be used in breeding. Hip Dysplasia is not often
            found in this breed; however, as with many medium or larger-sized canines, it can occur. The Orthopedic
            Foundation of Animals currently has the Siberian Husky ranked 155th out of a possible 160 breeds at risk for
            hip dysplasia, with only two percent of tested Siberian Huskies showing dysplasia.
          </p>
          <div className="pt-6 hidden lg:block">
            <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
              Back to Top
            </a>
          </div>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 my-auto">
          <img src={health} alt="Grooming pic" className="rounded-lg shadow-lg" />
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            Back to Top
          </a>
        </div>
      </section>

      {/* Sixth Section */}
      <section
        id="links"
        className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 gap-8 text-center lg:text-left pt-20"
      >
        <div className="max-w-full my-auto px-10">
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4 inline-block">Official Breed Standard: </h2>
          <a href="https://www.shca.org/the-siberian-husky-standard" className="inline-block underline ml-2">
            Official Breed Standard
          </a>
          <h2 className="text-2xl text-[#0d98b8] font-bold mb-4 inline-block">Illustrated Standard: </h2>
          <a href="https://www.shca.org/illustrated-standard-1" className="inline-block underline ml-2">
            Illustrated Siberian Husky Standard
          </a>
          <div className="pt-6 hidden lg:block">
            <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
              Back to Top
            </a>
          </div>
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20">
          <img
            src={standard}
            alt="Grooming pic"
            className="mx-auto rounded-lg shadow-lg h-full md:h-[25rem] lg:h-full"
          />
        </div>
        <div className="mx-20 sm:mx-44 lg:mx-20 block lg:hidden">
          <a href="#top" className="font-bold text-gray-700 hover:text-[#0d98b8]">
            Back to Top
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutBreed;
