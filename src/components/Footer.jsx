import { navigation, recognitions, social } from "../utils/const";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly text-center">
        <div className="w-1/6 flex flex-col items-center justify-between my-4 md:my-0">
          <h3 className="text-lg font-bold mb-2">Recognitions</h3>
          <ul className="space-y-1">
            {recognitions.map((item) => (
              <li key={item.id}>
                <a href="#" className="text-sm">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/6 flex flex-col items-center my-4 md:my-0">
          <h3 className="text-lg font-bold mb-2">Pages</h3>
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href="#" className="text-sm">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/6 flex flex-col items-center my-4 md:my-0">
          <h3 className="text-lg font-bold mb-2">Contacts</h3>
          <ul className="flex space-x-4 cursor-pointer transition-all">
            {social.map((item) => (
              <a key={item.id} href={item.href} className={`${item.icon}-icon block`}>
                {item.name}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
