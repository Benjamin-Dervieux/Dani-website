import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center">
      <Link href="/contact">
        <button className="w-40 h-10 rounded bg-dani-selected text-center text-white ">
          Prendre rendez-vous
        </button>
      </Link>
    </div>
  );
};

export default Button;
