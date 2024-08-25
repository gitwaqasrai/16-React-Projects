// PopUpTest.js
import { useState } from "react";
import PopUp from "./PopUp";

function PopUpTest() {
  const [showPopUp, setShowPopUp] = useState(false);

  function onClose() {
    setShowPopUp(false);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={() => setShowPopUp(!showPopUp)}
      >
        Open PopUp
      </button>
      {showPopUp && <PopUp onClose={onClose} />}
    </div>
  );
}

export default PopUpTest;
