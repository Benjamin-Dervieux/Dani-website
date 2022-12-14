import React from "react";
import { Rate } from "antd";
const TestimonialCard = ({ card }) => {
  return (
    <>
      <div className="mt-8">
        <div className="flex justify-center lg:justify-start lg:ml-24">
          <Rate value={card.rating} style={{ color: "#f8ddaf" }} />
        </div>
        <h2 className="text-[1.7em] text-center italic tracking-wide lg:text-left lg:ml-24 mb-6">
          {card.title}
        </h2>
      </div>

      <div className="lg:flex">
        <div className="flex flex-col items-center mb-8 lg:items-start lg:ml-24">
          <div className="w-80 lg:w-[700px] border-r-b-l rounded p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <p className="text-justify text-[1.1em]">{card.content}</p>
            <p className="mt-8">{card.author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
