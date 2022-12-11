import React from "react";
import { BsGeoFill, BsPhoneFill } from "react-icons/bs";
import { useRouter } from "next/router";

import en from "../../public/locales/en/en";
import fr from "../../public/locales/fr/fr";
import de from "../../public/locales/de/de";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fr" ? fr : en;

  return (
    <div className="bottom-0 w-full">
      <div className="w-full h-2 bg-dani-selected" />
      <div className=" bg-dani-green">
        <div className="max-w-[1240px] m-auto flex justify-center flex-col items-center p-4 text-white">
          <div className="underline">
            <h2>{t.schedules}</h2>
          </div>
          <p className="text-center">{t.schedulesP}</p>

          <div className="underline">
            <h2>{t.contactDetails}</h2>
          </div>
          <div className="flex justify-around items-center">
            <BsGeoFill className="" size={20} />
            <p>{t.lyon}</p>
          </div>
          <div className="flex justify-around items-center">
            <BsPhoneFill size={20} />
            <p>{t.tel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
