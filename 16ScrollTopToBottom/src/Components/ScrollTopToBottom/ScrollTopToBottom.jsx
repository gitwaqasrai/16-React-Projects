import { useEffect, useRef, useState } from "react";

function ScrollTopToBottom() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const result = await response.json();
      setData(result.products);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-500 to-blue-900">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="main p-6 bg-gradient-to-b from-blue-500 to-blue-900 min-h-screen flex flex-col justify-between">
      <h1 className="text-3xl font-bold text-white mb-4 text-center">
        Scroll Top And Bottom Feature
      </h1>
      <h3 className="text-lg text-gray-200 text-center mb-6">
        This is the top of the section.
      </h3>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleScrollToBottom}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Scroll To Bottom
        </button>
      </div>

      <div className="flex-grow overflow-y-auto space-y-2 bg-white p-4 rounded-lg shadow-lg">
        {data &&
          data.map((dataItem, index) => (
            <p key={index} className="text-gray-700 text-base">
              {dataItem.title}
            </p>
          ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleScrollToTop}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
        >
          Scroll To Top
        </button>
      </div>

      <div ref={bottomRef} className="mt-6"></div>
      <h3 className="text-lg text-gray-200 text-center">
        This is the bottom of the section.
      </h3>
    </div>
  );
}

export default ScrollTopToBottom;
