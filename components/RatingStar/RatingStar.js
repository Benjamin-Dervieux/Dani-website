import { useState } from "react";
import { Rate } from "antd";

const RatingStar = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReset = () => {
    setRating(0);
  };
  return (
    <div className="flex justify-center">
      <div className="mr-8">
        <Rate
          defaultValue={3}
          style={{ color: "#f8ddaf" }}
          onChange={handleRating}
        />
      </div>

      <button
        className="text-lg border w-20 bg-dani-selected rounded-lg"
        onClick={handleReset}
      >
        reset
      </button>
    </div>
  );
};

export default RatingStar;
