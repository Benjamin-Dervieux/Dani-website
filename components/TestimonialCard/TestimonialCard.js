import React from "react";

const TestimonialCard = ({ card }) => {
  return (
    <>
      <div>
        <h2 className="text-[1.7em] italic tracking-wide">{card.title}</h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-80 border-r-b-l rounded shadow-xl text-justify p-4">
          <p>{card.content}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
