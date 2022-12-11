import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";

import en from "../public/locales/en/en";
import fr from "../public/locales/fr/fr";
import de from "../public/locales/de/de";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fr" ? fr : en;

  return (
    <Layout pageTitle="Home page">
      <div className="flex flex-col justify-center items-center h-[685px] md:h-[815px] lg:h-[815px] bg-fixed bg-start bg-cover bg-no-repeat custom-img-home">
        <div className="mt-40 p-5 text-center text-white z-[2]">
          <h1 className="text-[1.9em] text-center italic tracking-wide">
            {t.welcomeMessage}
          </h1>
          <p className="py-5 text-lg">{t.danielleProfession}</p>
        </div>

        <div className="mt-48 lg:mt-[300px]">
          <Button />
        </div>
      </div>
    </Layout>
  );
}
