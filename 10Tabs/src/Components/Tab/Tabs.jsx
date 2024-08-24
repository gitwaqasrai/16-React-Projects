/* eslint-disable react/prop-types */
import { useState } from "react";

function Tabs({ tabContent }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(getCurrentIndex) {
    setCurrentIndex(getCurrentIndex);
  }

  return (
    <div className="wrapper max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="heading flex justify-center mb-4 space-x-2">
        {tabContent.map((tabItem, index) => (
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              currentIndex === index
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
            }`}
            key={tabItem.label}
            onClick={() => handleClick(index)}
          >
            {tabItem.label}
          </button>
        ))}
      </div>
      <div className="content p-4 text-center text-gray-700 bg-gray-100 rounded-lg shadow-inner">
        {tabContent[currentIndex] && tabContent[currentIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
