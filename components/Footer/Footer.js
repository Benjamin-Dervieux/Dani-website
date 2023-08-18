import React from "react";
import Link from "next/link";
import { BsGeoFill, BsPhoneFill, BsLinkedin } from "react-icons/bs";
import { ImXing } from "react-icons/im";
import { ImMail3 } from "react-icons/im";
import { useRouter } from "next/router";

import en from "../../public/locales/en/en";
import fr from "../../public/locales/fr/fr";
import de from "../../public/locales/de/de";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "de" ? de : fr;

  return (
    <div className="bottom-0 w-full">
      <div className="w-full h-2 bg-dani-selected" />
      <div className=" bg-dani-green">
        <div className="max-w-[1240px] m-auto flex justify-center flex-col items-center p-4 text-white">
          <div className="underline mt-3 mb-3">
            <h2>{t.contactDetails}</h2>
          </div>
          <div className="flex justify-around items-center">
            <BsGeoFill className="" size={20} />
            <p>{t.lyon}</p>
          </div>
          <div className="flex justify-around items-center">
            <BsPhoneFill size={20} />
            <p>{t.tel}</p>
          </div>

          <div className=" mt-8 w-40 flex justify-between">
            <div>
              <Link href="/contact">
                <ImMail3 size={35} />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/danielle-desteucq-r%C3%B6ttger-219b6328/">
                <BsLinkedin size={35} />
              </Link>
            </div>
            <div>
              <Link
                className="text-lg text-white"
                href="https://www.xing.com/profile/Danielle_DesteucqRoettger"
              >
                <ImXing size={35} />
              </Link>
            </div>
          </div>

          <div className=" mt-12 flex justify-around items-center">
            <p>-- Made by Benjamin Dervieux --</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.displayName = "Footer";

export default Footer;
