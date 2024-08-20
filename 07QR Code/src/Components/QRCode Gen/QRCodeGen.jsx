import { QRCode } from "react-qr-code";
import { useState } from "react";

function QRCodeGen() {
  const [qrCode, setQrCode] = useState("WaqasRai");
  const [input, setInput] = useState("");

  function handleClcik() {
    setQrCode(input);
    setInput("");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            QR Code Generator
          </h1>
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              value={input}
              name="qr-code"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text here"
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              disabled={!input.trim()}
              onClick={handleClcik}
              className={`px-4 py-2 rounded-lg font-semibold text-white transition-all ${
                input.trim()
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Generate
            </button>
          </div>

          {qrCode && (
            <div className="flex justify-center">
              <QRCode value={qrCode} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QRCodeGen;
