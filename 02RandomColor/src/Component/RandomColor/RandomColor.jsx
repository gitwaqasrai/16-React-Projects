import { useEffect } from "react";
import { useState } from "react";

function RandomColor() {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexColor);
  }

  function handleCreateRgbColor() {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);
    setcolor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    typeOfColor === "hex" ? handleCreateHexColor() : handleCreateRgbColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-0 flex justify-center space-x-4 pb-8 w-full">
          <button
            onClick={() => settypeOfColor("hex")}
            className="px-6 py-2 rounded-lg shadow-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-lg bg-white/30 text-black"
          >
            Create Hex Color
          </button>
          <button
            onClick={() => settypeOfColor("rgb")}
            className="px-6 py-2 rounded-lg shadow-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-lg bg-white/30 text-black"
          >
            Create RGB Color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleCreateHexColor
                : handleCreateRgbColor
            }
            className="px-6 py-2 rounded-lg shadow-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-lg bg-white/30 text-black"
          >
            Generate Random Color
          </button>
        </div>
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-2">
            {typeOfColor === "hex" ? "Hex Color" : "RGB Color"}
          </h2>
          <h1 className="text-4xl font-extrabold">{color}</h1>
        </div>
      </div>
    </>
  );
}

export default RandomColor;
