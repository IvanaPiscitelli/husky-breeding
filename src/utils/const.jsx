import imgC from "../assets/img_carousel.jpg";
import { BsFacebook } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";

export const imgHome = [
  { id: 1, img: imgC },
  { id: 2, img: imgC },
  { id: 3, img: imgC },
  { id: 4, img: imgC },
  { id: 5, img: imgC },
];
export const navigation = [
  { name: "Home", href: "#" },
  { name: "About The Breed", href: "#" },
  { name: "Our Dogs", href: "#" },
];

export const social = [
  { id: 1, name: <BsFacebook size={25} />, icon: "facebook", href: "https://www.facebook.com/conteamarullo" },
  {
    id: 2,
    name: <PiInstagramLogoFill size={29} />,
    icon: "instagram",
    href: "https://www.instagram.com/petgroomingdimichelemarullo/",
  },
];
