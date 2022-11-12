import React from "react";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import { SlBubbles } from "react-icons/sl";

const testimonials = () => {
  return (
    <Layout pageTitle="Testimonials">
      <div className="mt-28">
        <Image
          priority
          quality={100}
          width={500}
          height={260}
          src="/images/photo-cours3.jpg"
          alt="photo pile de livre d'apprentissage"
        />
      </div>

      <div className="mt-8 flex flex-col items-center">
        <h1 className="text-[1.7em] text-center italic tracking-wide ">
          Témoignages sur Danielle Desteucq-Roettger
        </h1>

        <div className="mt-8 w-80 h-64 border-2 border-dani-green rounded-xl">
          <div className="w-[316px] h-16 bg-dani-green flex rounded-t-lg flex-col items-center">
            <div className="text-white">
              <SlBubbles size={35} />
            </div>
            <h2 className="text-white">Témoignages</h2>
          </div>
        </div>
        <div className="w-80 h-60 bg-dani-green rounded-xl mt-8 flex justify-center">
          <div className=" w-72 h-60 flex flex-col justify-around items-center">
            <h2 className="text-white text-xl text-center w-60">
              Vous souhaitez recommander mon approche de l’apprentissage ?
            </h2>
            <div className="bg-dani-selected rounded-md w-36">
              <button className="text-white" type="button">
                Partager mon témoignage
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>{}</div>
    </Layout>
  );
};

export default testimonials;
