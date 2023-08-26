import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";

import en from "../public/locales/en/en";
import fr from "../public/locales/fr/fr";
import de from "../public/locales/de/de";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "de" ? de : fr;

  return (
    <Layout pageTitle="Home page">
      <div className="flex flex-col justify-around items-center h-[685px] md:h-[815px] lg:h-[815px] bg-fixed bg-start bg-cover bg-no-repeat custom-img-home">
        <div className="mt-32 lg:mt- p-5 text-center text-white">
          <h1 className="text-[1.9rem] lg:text-[2.5em] text-center italic tracking-wide">
            {t.welcomeMessage}
          </h1>
          <p className="mt-5 text-lg lg:text-[1.7rem]">
            {t.danielleProfession}
          </p>
        </div>

        <div className="flex space-x-8">
          <div className=" lg:w-[500px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <p className=" p-4 lg:text-[1.2rem] text-justify text-white">
              {t.importantMessage}
            </p>
          </div>
          <div className=" lg:w-[500px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <p className=" p-4 lg:text-[1.2rem] text-justify text-white">
              {t.importantMessageBis}
            </p>
          </div>
        </div>

        <div className="mt-7 lg:mt-[80px] ">
          <Button />
        </div>
      </div>
    </Layout>
  );
}
