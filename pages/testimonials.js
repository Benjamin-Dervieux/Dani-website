import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import { SlBubbles } from "react-icons/sl";
import Link from "next/link";
import { TestimonialContext } from "../context/testimonialContext";
import TestimonialList from "../components/TestimonialList/TestimonialList";
import { useRouter } from "next/router";

import en from "../public/locales/en/en";
import fr from "../public/locales/fr/fr";
import de from "../public/locales/de/de";

const Testimonials = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "de" ? de : fr;
  const { testiList } = useContext(TestimonialContext);

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
              <p className="text-end mr-20">
                {testiList.length} {t.opinion}
              </p>
            </div>
          </div>

          <div className="w-80 h-60 lg:w-[700px] lg:h-40 bg-dani-green rounded-xl mt-8 flex justify-center">
            <div className=" w-72 h-60 lg:w-[700px] lg:h-40 flex flex-col justify-around items-center lg:flex-row">
              <h2 className="text-white text-xl text-center w-60 lg:w-[500px]">
                {t.leaveComment}
              </h2>
              <div className="bg-dani-selected rounded-md w-36 lg:w-44 mr-4">
                <Link href="/newTestimonial">
                  <button className="text-white" type="button">
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
