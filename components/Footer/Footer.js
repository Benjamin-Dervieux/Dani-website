import React from "react";
import { BsGeoFill, BsPhoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bottom-0 w-full">
      <div className="w-full h-2 bg-dani-selected" />
      <div className=" bg-dani-green">
        <div className="max-w-[1240px] m-auto flex justify-center flex-col items-center p-4 text-white">
          <div className="underline">
            <h2>Horaires</h2>
          </div>
          <p>Du Lundi au Vendredi de 9h à 12h30 et de 14h à 19h</p>

          <div className="underline">
            <h2>Coordonnées</h2>
          </div>
          <div className="flex justify-around items-center">
            <BsGeoFill className="" size={20} />
            <p>Lyon</p>
          </div>
          <div className="flex justify-around items-center">
            <BsPhoneFill className="" size={20} />
            <p>+33 6 74 81 19 75 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
