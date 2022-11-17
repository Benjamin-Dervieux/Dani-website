import Link from "next/link";
import React from "react";
import Layout from "../components/Layout/Layout";

const newTestimonial = () => {
  return (
    <Layout pagetitle="Add a testimonial">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-addTestimonial"></div>
      </div>

      <h1 className="p-4 text-center text-[1.7em] italic tracking-wide">
        Laisser un commentaire
      </h1>

      <div className="lg:flex flex-row justify-center">
        <form className="flex flex-col lg:mt-16">
          <label
            className="ml-4 mb-2 lg:ml-32 text-lg lg:text-[1.2em]"
            htmlFor="title"
          >
            Titre
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
          />
          <label
            className="ml-4 mb-4 mt-2 lg:ml-32 text-lg lg:text-[1.2em]"
            htmlFor="content"
          >
            Votre commentaire
          </label>
          <textarea
            className="w-[355px] lg:w-[600px] h-36 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            name="message"
            required
          ></textarea>
          <label
            className="ml-4 mb-4 mt-2 lg:ml-32 text-lg lg:text-[1.2em]"
            htmlFor="author"
          >
            Auteur
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
          />

          <div className=" mt-12 mb-16 flex justify-center">
            <Link href="/testimonials">
              <button
                className="w-56 h-10 bg-dani-selected rounded-md text-white"
                type="submit"
              >
                Envoyer
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default newTestimonial;
