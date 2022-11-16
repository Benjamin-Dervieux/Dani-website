import React from "react";

const TestimonialCard = ({ card }) => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-[1.7em] text-center italic tracking-wide lg:text-left lg:ml-24 mb-6">
          {card.title}
        </h2>
      </div>

      <div className="flex flex-col items-center mb-8 lg:items-start lg:ml-24">
        <div className="w-80 lg:w-[700px] border-r-b-l rounded text-justify p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <p>{card.content}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
