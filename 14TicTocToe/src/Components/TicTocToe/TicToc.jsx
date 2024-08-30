/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-blue-500 bg-white text-2xl font-bold text-gray-800 w-24 h-24 flex items-center justify-center transition-colors duration-200 ease-in-out hover:bg-gray-200"
    >
      {value}
    </button>
  );
}

export function TicToc() {
  const [squares, setsquares] = useState(Array(9).fill(""));
  const [isXTurn, setisXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleOnClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setisXTurn(!isXTurn);
    setsquares(cpySquares);
  }

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("It's a draw! Well played.");
    } else if (getWinner(squares)) {
      setStatus(`Congratulations! ${getWinner(squares)} wins!`);
    } else {
      setStatus(`Next Turn: ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  function handleRestart() {
    setisXTurn(true);
    setsquares(Array(9).fill(""));
  }

  return (
    <div className="flex flex-col items-center mt-20 p-5 bg-gray-100 rounded-lg shadow-md">
      <div className="grid grid-cols-3 gap-1">
        <Square value={squares[0]} onClick={() => handleOnClick(0)} />
        <Square value={squares[1]} onClick={() => handleOnClick(1)} />
        <Square value={squares[2]} onClick={() => handleOnClick(2)} />
        <Square value={squares[3]} onClick={() => handleOnClick(3)} />
        <Square value={squares[4]} onClick={() => handleOnClick(4)} />
        <Square value={squares[5]} onClick={() => handleOnClick(5)} />
        <Square value={squares[6]} onClick={() => handleOnClick(6)} />
        <Square value={squares[7]} onClick={() => handleOnClick(7)} />
        <Square value={squares[8]} onClick={() => handleOnClick(8)} />
      </div>
      <h1 className="text-xl font-bold mt-4 text-gray-800">{status}</h1>
      <button
        onClick={handleRestart}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md text-lg transition-colors duration-200 ease-in-out hover:bg-blue-600"
      >
        Restart Game
      </button>
    </div>
  );
}

export default TicToc;
