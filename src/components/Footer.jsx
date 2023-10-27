import { navigation, recognitions, social } from "../utils/const";
import Male from "../pages/Male";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly text-center">
        <div className="w-1/6 flex flex-col items-center justify-between my-4 md:my-0">
          <h3 className="text-lg font-bold mb-2">Recognitions</h3>
          <ul className="space-y-1 w-32">
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
          <ul className="space-y-1 w-32">
            {navigation.map(
              (item, index) =>
                index !== navigation.length - 1 && (
                  <li key={item.id}>
                    <a href={item.href} className="text-sm">
                      {item.name}
                    </a>
                  </li>
                )
            )}
            <li className="cursor-pointer">
              <a href="/male-husky">Male</a>
            </li>

            <li className="cursor-pointer">
              <a href="/female-husky">Female</a>
            </li>
          </ul>
        </div>
        <div className="w-1/6 flex flex-col items-center my-4 md:my-0">
          <h3 className="text-lg font-bold mb-2">Contacts</h3>
          <ul className="flex space-x-4 w-32 cursor-pointer transition-all justify-center">
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
