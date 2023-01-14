import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  black: "#000000",
  yellow: "#e3c796",
};

const RatingStars = () => {
  const [currentValue, setCurrentValue] = useState(3);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <>
      <div className="flex justify-center ">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              className="w-10 cursor-pointer"
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.yellow
                  : colors.black
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default RatingStars;
