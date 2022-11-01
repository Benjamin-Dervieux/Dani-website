import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-dani-green">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            priority
            quality={100}
            width={70}
            height={80}
            src="/images/logo-danielle.png"
            alt="Danielle logo"
          />
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4 hover:text-dani-selected hover:underline">
            <Link href="/">Accueil</Link>
          </li>
          <li className="p-4 hover:text-dani-selected hover:underline">
            <Link href="/about">Qui suis-je</Link>
          </li>
          <li className="p-4 hover:text-dani-selected hover:underline">
            <Link href="/informations">Informations</Link>
          </li>
          <li className="p-4 hover:text-dani-selected hover:underline">
            <Link href="/testimonials">Témoignages</Link>
          </li>
          <li className="p-4 hover:text-dani-selected hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

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
              <Link href="/">Accueil</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/about">Qui suis-je</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/informations">Informations</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/testimonials">Témoignages</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-dani-selected hover:underline"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
