import { useTranslation } from "react-i18next";

const Card = ({ imageSrc, imageAlt, name, title, text, onGoToDetailsPage }) => {
  const { t } = useTranslation();
  return (
    <div className="relative flex max-w-sm flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="transition-transform duration-200 ease-in-out transform-gpu hover:scale-125 h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">{name}</p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {title}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {text}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={onGoToDetailsPage}
          className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-gray-700"
        >
          <span className="relative pr-4 pb-1 text-gray-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#0d98b8] after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
            {t("buttonCardText")}
          </span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
            className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-[#0d98b8]"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
