/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(geturl) {
    try {
      setLoading(true);
      const response = await fetch(geturl);
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setData(result.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleScrollBar() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBar);

    return () => {
      window.removeEventListener("scroll", handleScrollBar);
    };
  });

  useEffect(() => {
    fetchData(url);
  }, [url]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
        <div className="text-center py-4 text-white font-bold text-xl">
          Custom Scroll Indicator
        </div>
        <div className="w-full h-2 bg-gray-300">
          <div
            className="h-full bg-yellow-500  ease-in-out"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-16 p-4 space-y-4">
        {data && data.length > 0
          ? data.map((dataItem, i) => (
              <p key={i} className="text-gray-800 text-lg border-b pb-2">
                {dataItem.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
