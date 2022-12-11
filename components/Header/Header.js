import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

import en from "../../public/locales/en/en";
import fr from "../../public/locales/fr/fr";
import de from "../../public/locales/de/de";

const Header = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "de" ? de : fr;

  const handleChangeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-dani-green">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            className="cursor-pointer"
            priority
            width={70}
            height={80}
            src="/images/logo-dani.png"
            alt="Danielle Desteucq-Roettgerlogo"
          />
        </Link>
        <nav>
          <ul className="hidden sm:flex">
            <li className="p-4 text-[1.2em] hover:text-dani-selected hover:underline">
              <Link href="/">{t.home}</Link>
            </li>
            <li className="p-4 text-[1.2em] hover:text-dani-selected hover:underline">
              <Link href="/about">{t.about}</Link>
            </li>
            <li className="p-4 text-[1.2em] hover:text-dani-selected hover:underline">
              <Link href="/informations">{t.information}</Link>
            </li>
            <li className="p-4 text-[1.2em] hover:text-dani-selected hover:underline">
              <Link href="/testimonials">{t.testimonials}</Link>
            </li>
            <li className="p-4 text-[1.2em] hover:text-dani-selected hover:underline">
              <Link href="/contact">{t.contact}</Link>
            </li>
            <select
              className="bg-dani-green"
              onChange={handleChangeLanguage}
              defaultValue={locale}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
          </ul>
        </nav>

        {/* Mobile Button */}

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-dani-green text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-dani-green text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/">{t.home}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/about">{t.about}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/informations">{t.information}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/testimonials">{t.testimonials}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/contact">{t.contact}</Link>
            </li>

            <select
              className="bg-dani-green"
              onChange={handleChangeLanguage}
              defaultValue={locale}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
