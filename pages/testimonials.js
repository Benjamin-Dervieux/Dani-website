import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import { SlBubbles } from "react-icons/sl";
import Link from "next/link";
import { TestimonialContext } from "../context/testimonialContext";
import TestimonialList from "../components/TestimonialList/TestimonialList";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";

import en from "../public/locales/en/en";
import fr from "../public/locales/fr/fr";
import de from "../public/locales/de/de";

const Testimonials = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "de" ? de : fr;
  const { testiList } = useContext(TestimonialContext);
  const stars5 = Array(5).fill(0);
  const stars4 = Array(4).fill(0);
  const stars3 = Array(3).fill(0);
  const stars2 = Array(2).fill(0);
  const stars1 = Array(1).fill(0);

  return (
    <Layout pageTitle="Testimonials">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-header-testimonials"></div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <h1 className="text-[1.7em] text-center italic tracking-wide">
          {t.titleTesti}
        </h1>

        <div className="lg:w-[1200px] lg:flex flex-row-reverse justify-around ml-4">
          <div className="mt-8 w-80 h-64 border-2 border-dani-green rounded-xl">
            <div className="w-[316px] h-16 bg-dani-green flex rounded-t-lg flex-col items-center">
              <div className="text-white">
                <SlBubbles size={35} />
              </div>
              <h2 className="text-white">{t.testimonials}</h2>
            </div>
            <div>
              <p className="text-center">
                {testiList.length} {t.totalOpinions}
              </p>
              <div className="w-72 h-36 mt-3 flex flex-col justify-between">
                <div className="flex">
                  {stars5.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        className="w-24"
                        size={20}
                        color={"#e3c796"}
                      />
                    );
                  })}
                  <div className="ml-16 flex justify-end">{t.opinion}</div>
                </div>
                <div className="flex justify-start">
                  {stars4.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        className="w-24"
                        size={20}
                        color={"#e3c796"}
                      />
                    );
                  })}
                  <div className="ml-24 flex justify-end">{t.opinion}</div>
                </div>
                <div className="flex">
                  {stars3.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        className="w-24"
                        size={20}
                        color={"#e3c796"}
                      />
                    );
                  })}
                  <div className="ml-32 flex justify-end">{t.opinion}</div>
                </div>
                <div className="flex">
                  {stars2.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        className="w-24"
                        size={20}
                        color={"#e3c796"}
                      />
                    );
                  })}
                  <div className="ml-40 flex justify-end">{t.opinion}</div>
                </div>
                <div className="flex">
                  {stars1.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        className="w-24"
                        size={20}
                        color={"#e3c796"}
                      />
                    );
                  })}
                  <div className="ml-48 flex justify-end">{t.opinion}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 h-60 lg:w-[700px] lg:h-40 bg-dani-green rounded-xl mt-8 flex justify-center">
            <div className=" w-72 h-60 lg:w-[700px] lg:h-40 flex flex-col justify-around items-center lg:flex-row">
              <h2 className="text-white text-xl text-center w-60 lg:w-[500px]">
                {t.leaveComment}
              </h2>
              <div className="bg-dani-selected rounded-md w-44 lg:w-44 h-12 mr-4 flex justify-center ">
                <Link href="/newTestimonial">
                  <button className="text-white " type="button">
                    {t.share}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialList />
    </Layout>
  );
};

export default Testimonials;
