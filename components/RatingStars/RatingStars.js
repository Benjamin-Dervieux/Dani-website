import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  black: "#000000",
  yellow: "#e3c796",
};

const RatingStars = ({ value, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
    onChange(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex justify-center">
      {stars.map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className="w-10 cursor-pointer"
            size={24}
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            color={
              (hoverValue || currentValue) >= starValue
                ? colors.yellow
                : colors.black
            }
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
