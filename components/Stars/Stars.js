import { FaStar } from "react-icons/fa";

const Stars = () => {
  const stars = Array(5).fill(0);

  return (
    <>
      <div className="flex">
        {stars.map((_, index) => {
          return (
            <FaStar key={index} className="w-10" size={15} color={"#e3c796"} />
          );
        })}
      </div>
    </>
  );
};

export default Stars;
