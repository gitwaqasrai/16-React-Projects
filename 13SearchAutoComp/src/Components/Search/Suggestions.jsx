/* eslint-disable react/prop-types */
function Suggestions({ data, handleOnClick }) {
  return (
    <ul className="w-full max-w-md mt-2 bg-white border rounded-md shadow-lg border-gray-300">
      {data && data.length ? (
        data.map((dataItem, index) => (
          <li
            className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-200"
            onClick={handleOnClick}
            key={index}
          >
            {dataItem}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-gray-500">No results found</li>
      )}
    </ul>
  );
}

export default Suggestions;
