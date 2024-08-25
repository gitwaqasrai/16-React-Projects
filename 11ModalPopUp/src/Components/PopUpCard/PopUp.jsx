// PopUp.js
/* eslint-disable react/prop-types */
function PopUp({ header, body, footer, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-semibold text-gray-700">
            {header ? header : "Welcome to the Modern PopUp!"}
          </h3>
          <span
            onClick={onClose}
            className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
          >
            &times;
          </span>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">
            {body
              ? body
              : "This is a sleek and modern PopUp body. You can customize this text to suit your needs."}
          </p>
        </div>
        <div className="mt-6 flex justify-end border-t pt-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            {footer ? footer : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
