/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function StarRating({ noOfStart = 8 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex justify-center items-center p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex space-x-2">
        {[...Array(noOfStart)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={`cursor-pointer transition duration-300 transform ${
                index <= (hover || rating)
                  ? "text-yellow-400 scale-125"
                  : "text-gray-400"
              }`}
              size={40}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
