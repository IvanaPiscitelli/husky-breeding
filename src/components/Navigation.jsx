import "../../src/index.css";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About The Breed", href: "#" },
  { name: "Our Dogs", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
];
const Navigation = () => {
  return (
    <nav className="mr-4">
      <ul className="flex h-full flex-col lg:flex-row space-y-4 lg:space-y-0 lg:m-2 lg:space-x-4">
        {navigation.map((item, index) => (
          <li
            key={item.name}
            className={` underline-effect ${
              index < navigation.length - 1 ? "border-b lg:border-b-0" : ""
            } border-gray-500 cursor-pointer transition-all hover:font-bold focus:ring`}
          >
            <a href={item.href} className={`${index === 0 ? "mt-5 lg:mt-0" : ""} block pb-2 px-4 ml-10`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
