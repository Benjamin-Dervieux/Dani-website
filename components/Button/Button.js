import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import en from "../../public/locales/en/en";
import fr from "../../public/locales/fr/fr";
import de from "../../public/locales/de/de";

const Button = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fr" ? fr : en;

  return (
    <div className="flex justify-center">
      <Link href="/contact">
        <button className="w-60 h-12 rounded bg-dani-selected text-center text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer">
          {t.button}
        </button>
      </Link>
    </div>
  );
};

export default Button;
