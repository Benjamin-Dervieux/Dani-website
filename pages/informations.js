import Image from "next/image";
import React from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import { useRouter } from "next/router";

import en from "../public/locales/en/en";
import fr from "../public/locales/fr/fr";
import de from "../public/locales/de/de";

const Information = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fr" ? fr : en;

  return (
    <Layout pageTitle="Information">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-header-info"></div>
      </div>

      <div>
        <h1 className="p-4 text-center text-[1.7em] italic tracking-wide underline">
          {t.efficiencyAndFlexibility}
        </h1>

        <div className="mt-8 flex flex-col items-center lg:flex-row justify-around">
          <div className="mt-5">
            <div className="w-[300px] lg:w-[500px] h-[200px] lg:h-[300px] bg-center bg-cover img-info-1 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></div>
          </div>

          <div className="mt-8 w-80 lg:w-[600px] text-justify">
            <p className="text-[1.2em]">{t.efficiencyAndFlexibilityP}</p>
          </div>
        </div>

        <h2 className="mt-10 p-4 text-center text-[1.7em] italic tracking-wide underline">
          {t.myClients}
        </h2>

        <div className="mt-3 flex flex-col items-center lg:flex-row-reverse justify-around">
          <div className="mt-5">
            <div className="w-[300px] lg:w-[500px] h-[200px] lg:h-[300px] bg-left bg-cover img-info-2 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></div>
          </div>

          <div className="mt-8 w-80 lg:w-[600px] text-justify">
            <p className="text-[1.2em]">{t.myClientP}</p>
          </div>
        </div>

        <h2 className="mt-10 p-4 text-center text-[1.7em] italic tracking-wide underline">
          {t.myStudents}
        </h2>

        <div className="mt-3 flex flex-col items-center lg:flex-row justify-around">
          <div className="mt-5">
            <div className="w-[300px] lg:w-[500px] h-[200px] lg:h-[300px] bg-center bg-cover img-info-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></div>
          </div>

          <div className="mt-8 mb-16 w-80 lg:w-[600px] text-justify">
            <p className="text-[1.2em]">{t.myStudentsP}</p>
          </div>
        </div>

        <div className="mb-16 lg:mt-32">
          <Button />
        </div>
      </div>
    </Layout>
  );
};

export default Information;
