import React from "react";
import Layout from "../components/Layout/Layout";
import { SlBubbles } from "react-icons/sl";

const testimonials = () => {
  return (
    <Layout pageTitle="Testimonials">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-header-testimonials"></div>
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
