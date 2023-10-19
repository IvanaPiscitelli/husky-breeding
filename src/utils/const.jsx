import imgC from "../assets/img_carousel.jpg";
import { LiaInstagram, LiaFacebook } from "react-icons/lia";

export const imgHome = [
  { id: 1, img: imgC },
  { id: 2, img: imgC },
  { id: 3, img: imgC },
  { id: 4, img: imgC },
  { id: 5, img: imgC },
];
export const navigation = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "About The Breed", href: "#" },
  { id: 3, name: "Our Dogs", href: "#" },
];

export const social = [
  { id: 1, name: <LiaFacebook size={30} />, icon: "facebook", href: "https://www.facebook.com/conteamarullo" },
  {
    id: 2,
    name: <LiaInstagram size={30} />,
    icon: "instagram",
    href: "https://www.instagram.com/petgroomingdimichelemarullo/",
  },
];

export const translations = [
  { id: 1, name: "EN", href: "#" },
  { id: 2, name: "IT", href: "#" },
];

export const recognitions = [
  { id: 1, name: "Enci", img: "" },
  { id: 2, name: "Enci", img: "" },
  { id: 3, name: "Enci", img: "" },
];
