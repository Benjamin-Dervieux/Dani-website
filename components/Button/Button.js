import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center">
      <Link href="/contact">
        <button className="w-60 h-12 rounded bg-dani-selected text-center text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer">
          Prendre rendez-vous
        </button>
      </Link>
    </div>
  );
};

export default Button;
