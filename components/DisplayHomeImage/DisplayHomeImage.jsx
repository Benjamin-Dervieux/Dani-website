import React from "react";

const DisplayHomeImage = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30" />
      <div className=" p-5 text-center text-white z-[2]">
        <h1 className="text-3xl font-bold">
          Cours de français des affaires en ligne
        </h1>
        <p className="py-5 text-xl">
          Danielle Desteucq-Roettger Translator - Interpreter
        </p>
      </div>
    </div>
  );
};

export default DisplayHomeImage;
