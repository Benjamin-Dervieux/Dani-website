import Image from "next/image";
import React from "react";
import style from "../styles/about.module.css";
import Layout from "../components/Layout/Layout";
import { FaGraduationCap } from "react-icons/fa";
import { Gi3DStairs } from "react-icons/gi";
import Button from "../components/Button/Button";
import { useRouter } from "next/router";

import en from "../public/locales/en/en";
import fr from "../public/locales/fr/fr";
import de from "../public/locales/de/de";

export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "de" ? de : fr;

  return (
    <Layout pageTitle="about">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-header-about"></div>
      </div>

      <div className="lg:flex flex-row-reverse justify-around items-center">
        <div className="mt-8 flex flex-col items-center lg:self-end">
          <div className="w-80 lg:w-[600px] lg:h-84 border-r-b-l rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-justify p-4">
            <h1 className="p-4 text-center text-[1.7em] italic tracking-wide">
              {t.whoAmI}
            </h1>
            <p>{t.whoAmIP}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className={style.about}>
            <div className={style.aboutGreen}>
              <div className={style.aboutImg}>
                <Image
                  priority
                  quality={100}
                  width={245}
                  height={245}
                  src="/images/danielle-roettger.png"
                  alt="Photo de profil"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="mt-16">
          <h2 className="text-[1.7em] lg:text-[2em] italic tracking-wide">
            {t.formation}
          </h2>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center">
        <FaGraduationCap size={35} />
        <div className="mt-3 w-80 lg:w-[800px] text-justify p-4 tracking-wider">
          <ul className="list-disc">
            <li>{t.formationList.li1}</li>
            <li>{t.formationList.li2}</li>
            <li>{t.formationList.li3}</li>
            <li>{t.formationList.li4}</li>
            <li>{t.formationList.li5}</li>
            <li>{t.formationList.li6}</li>
            <li>{t.formationList.li7}</li>
            <li>{t.formationList.li8}</li>
            <li>{t.formationList.li9}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="mt-16">
          <h2 className="text-[1.7em] lg:text-[2em] italic tracking-wide">
            {t.course}
          </h2>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center">
        <Gi3DStairs size={35} />
        <div className=" mt-3 w-80 lg:w-[800px] text-justify p-4 tracking-wider">
          <ul className="flex flex-col justify-between items-center">
            <li className="experienceLi">{t.exp1}</li>
            <li className="experienceLi">{t.exp2}</li>
            <li className="experienceLi">{t.exp3}</li>
            <li className="experienceLi">{t.exp4}</li>
            <li className="experienceLi">{t.exp5}</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <Button />
      </div>
    </Layout>
  );
}
