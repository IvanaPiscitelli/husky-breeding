import { navigation, recognitions, social } from "../utils/const";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white px-6 py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly text-center">
        <div className="w-1/6 flex flex-col items-center justify-between my-4 md:my-0">
          <h3 className="text-lg font-bold mb-2">{t("recognitionsTitle")}</h3>
          <ul className="space-y-1 w-32">
            {recognitions.map((item) => (
              <li key={item.id}>
                <a href="#" className="text-sm">
                  {t(`recognitions.${item.name}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/6 flex flex-col items-center my-4 md:my-0">
          <h3 className="text-lg font-bold mb-2">{t("pagesTitle")}</h3>
          <ul className="space-y-1 w-36">
            {navigation.map(
              (item, index) =>
                index !== navigation.length - 1 && (
                  <li key={item.id}>
                    <a href={item.href} className="text-sm">
                      {t(`navigation.${item.name}`)}
                    </a>
                  </li>
                )
            )}
            <li className="cursor-pointer">
              <a href="/male-husky">{t("maleTitle")}</a>
            </li>

            <li className="cursor-pointer">
              <a href="/female-husky">{t("femaleTitle")}</a>
            </li>
          </ul>
        </div>
        <div className="w-1/6 flex flex-col items-center my-4 md:my-0">
          <h3 className="text-lg font-bold mb-2">{t("contactsTitle")}</h3>
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
