import React from "react";
import { BsGeoFill, BsPhoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full z-10 ease-in bg-dani-green">
      <div className="max-w-[1240px] m-auto flex justify-center flex-col items-center p-4 text-white">
        <div className="underline">
          <h2>Horaires</h2>
        </div>
        <p>Du Lundi au Vendredi de 9h à 12h30 et de 14h à 19h</p>

        <div className="underline">
          <h2>Coordonnées</h2>
        </div>
        <div className="flex justify-around items-center">
          <BsGeoFill size={20} />
          <p>Lyon</p>
        </div>
        <div className="flex justify-around items-center">
          <BsPhoneFill size={20} />
          <p>00 33 30 30 30 30</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
